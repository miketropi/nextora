/**
 * Rope Gallery — front-end 3D implementation.
 *
 * Ported from the w6 "rope-gallery" demo (Three.js + GSAP) and scoped to a
 * single block root: a sagging rope with hanging photo cards that recycle
 * endlessly along the line. Drag / wheel / arrow keys move along the rope.
 *
 * Pattern follows blocks/hero-paper-roll/view.ts:
 *  - idempotent init guard (INITED_ATTR)
 *  - prefers-reduced-motion early exit (static fallback via CSS)
 *  - per-root ResizeObserver + cleanup function (dispose renderer/textures)
 */
import * as THREE from 'three';
import gsap from 'gsap';

const INITED_ATTR = 'data-nextora-rope-gallery-inited';
const REVEAL_READY_CLASS = 'nextora-rope-gallery--reveal-ready';

const CANVAS_FONT = '"Hanken Grotesk", system-ui, -apple-system, "Segoe UI", sans-serif';

const prefersReducedMotion = (): boolean =>
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lagSmoothingSet = false;

/* ── Tuning constants (from the demo CFG object) ─────────────────────────── */

const CFG = {
	camera: { fov: 30, z: 12, parallax: 0.06, damp: 5.0 },

	line: {
		riseFrac: 0.105, // how far the line rises from centre to screen edge (/ half width)
		tiltFrac: 0.0208, // total left-to-right drop across the screen (/ width)
		depthArc: 0.75, // world units the ends travel toward the camera
		spread: 0.1, // mild apparent widening of spacing near the edges
		radiusPx: 1.35,
		waveSpeed: 11.0, // world units per second
		rest: 9.0,
		damp: 3.4,
		nodes: 96,
		samples: 128,
	},

	card: {
		ratio: 1.2,
		spacing: 1.245,
		depth: 0.014,
		corner: 0.062,
		tiltMax: 0.085,
		swingGravity: 22.0,
		swingDamp: 1.75,
		idleAmp: 0.0085,
		lagK: 44,
		lagC: 7.4,
		lagAir: 2.05,
		repelK: 105,
		repelGap: 1.02,
		bounceK: 150,
		bounceC: 9.5,
		weight: 7.0,
	},

	clip: { w: 0.093, h: 0.168, drop: 0.72, depth: 0.05, z: 0.05 },

	input: { momentumDamp: 3.1, wheelGain: 0.9, wheelEase: 9.0 },
};

/* ── Types ───────────────────────────────────────────────────────────────── */

interface GalleryItemData {
	title: string;
	subtitle: string;
	link: string;
	imageUrl: string;
	imageAlt: string;
}

interface GalleryOpts {
	cardCount: number;
	ropeColor: string;
	ropeAccentColor: string;
	accentColor: string;
	animationEnabled: boolean;
	items: GalleryItemData[];
}

interface CleanupFn {
	(): void;
}

interface CardState {
	pivot: THREE.Group;
	mesh: THREE.Mesh;
	shadow: THREE.Mesh;
	shadowMat: THREE.MeshBasicMaterial;
	mat: THREE.MeshPhysicalMaterial;
	cardGeo: THREE.ShapeGeometry;
	shadowGeo: THREE.ShapeGeometry;
	drop: number;
	slot: number;
	lag: number;
	lagV: number;
	theta: number;
	thetaV: number;
	tilt: number;
	tiltV: number;
	bounce: number;
	bounceV: number;
	prevX: number | null;
	vx: number;
	ax: number;
	speed: number;
	prevSpeed: number;
	mass: number;
	baseRot: number;
	phase: number;
	along: number;
	texIndex: number;
}

/* ── Helpers ─────────────────────────────────────────────────────────────── */

function getOpts(root: HTMLElement): GalleryOpts {
	try {
		const raw = JSON.parse(root.getAttribute('data-nextora-rope-gallery-opts') || '{}') as Partial<GalleryOpts>;
		return {
			cardCount: typeof raw.cardCount === 'number' ? raw.cardCount : 8,
			ropeColor: typeof raw.ropeColor === 'string' ? raw.ropeColor : '#D2CEC4',
			ropeAccentColor: typeof raw.ropeAccentColor === 'string' ? raw.ropeAccentColor : '#9C978B',
			accentColor: typeof raw.accentColor === 'string' ? raw.accentColor : '#20BF49',
			animationEnabled: raw.animationEnabled !== false,
			items: Array.isArray(raw.items) ? raw.items : [],
		};
	} catch {
		return {
			cardCount: 8,
			ropeColor: '#D2CEC4',
			ropeAccentColor: '#9C978B',
			accentColor: '#20BF49',
			animationEnabled: true,
			items: [],
		};
	}
}

function markReady(root: HTMLElement): void {
	root.classList.remove('nextora-rope-gallery--loading');
	root.classList.add('nextora-rope-gallery--ready');
}

/* ── Procedural card art (from the demo SCENES painters) ─────────────────── */

type Painter = (c: CanvasRenderingContext2D, w: number, h: number, r: () => number) => void;

const rng = (seed: number): (() => number) => {
	let s = seed >>> 0;
	return () => {
		s = (s * 1664525 + 1013904223) >>> 0;
		return s / 4294967296;
	};
};

function rrect(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
	r = Math.min(r, w * 0.5, h * 0.5);
	c.beginPath();
	c.moveTo(x + r, y);
	c.arcTo(x + w, y, x + w, y + h, r);
	c.arcTo(x + w, y + h, x, y + h, r);
	c.arcTo(x, y + h, x, y, r);
	c.arcTo(x, y, x + w, y, r);
	c.closePath();
}

function lg(c: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number, stops: Array<[number, string]>): CanvasGradient {
	const g = c.createLinearGradient(x0, y0, x1, y1);
	for (const s of stops) g.addColorStop(s[0], s[1]);
	return g;
}

const PAINTERS: Painter[] = [
	/* forest */
	(c, w, h, r) => {
		c.fillStyle = lg(c, 0, 0, 0, h, [
			[0, '#C4E5AC'],
			[0.42, '#79C069'],
			[1, '#1C5130'],
		]);
		c.fillRect(0, 0, w, h);
		c.fillStyle = 'rgba(255,248,208,.85)';
		c.beginPath();
		c.arc(w * 0.74, h * 0.2, w * 0.1, 0, 7);
		c.fill();
		const cols = ['#5FA85C', '#3F8A4C', '#2C6B3E', '#1B4A2C'];
		for (let L = 0; L < 4; L++) {
			const base = h * (0.44 + L * 0.16);
			const amp = h * 0.05 * (1 - L * 0.15);
			c.fillStyle = cols[L];
			c.beginPath();
			c.moveTo(0, h);
			for (let x = 0; x <= w; x += w / 24) c.lineTo(x, base + Math.sin((x / w) * 5 + L * 2.1) * amp);
			c.lineTo(w, h);
			c.closePath();
			c.fill();
		}
		c.fillStyle = 'rgba(12,38,22,.82)';
		for (let i = 0; i < 12; i++) {
			const x = r() * w;
			const s = h * (0.16 + r() * 0.2);
			const y = h * (0.6 + r() * 0.32);
			c.beginPath();
			c.moveTo(x, y);
			c.lineTo(x - s * 0.26, y + s * 0.1);
			c.lineTo(x, y - s);
			c.lineTo(x + s * 0.26, y + s * 0.1);
			c.closePath();
			c.fill();
		}
	},
	/* sepia */
	(c, w, h, r) => {
		c.fillStyle = lg(c, 0, 0, 0, h, [
			[0, '#E9E1D3'],
			[0.5, '#B5A897'],
			[1, '#4A4239'],
		]);
		c.fillRect(0, 0, w, h);
		c.fillStyle = 'rgba(38,32,26,.6)';
		for (let i = 0; i < 5; i++) {
			const x = w * (0.07 + i * 0.21);
			const cw = w * 0.1;
			c.fillRect(x, h * 0.36, cw, h * 0.52);
			rrect(c, x - cw * 0.14, h * 0.28, cw * 1.28, h * 0.085, cw * 0.55);
			c.fill();
		}
		c.fillStyle = 'rgba(28,23,19,.8)';
		for (let i = 0; i < 8; i++) {
			const x = w * (0.08 + r() * 0.84);
			const y = h * (0.72 + r() * 0.18);
			const s = h * (0.11 + r() * 0.08);
			c.beginPath();
			c.arc(x, y - s * 0.8, s * 0.17, 0, 7);
			c.fill();
			c.beginPath();
			c.moveTo(x - s * 0.21, y);
			c.lineTo(x, y - s * 0.66);
			c.lineTo(x + s * 0.21, y);
			c.closePath();
			c.fill();
		}
		c.fillStyle = 'rgba(122,96,62,.2)';
		c.fillRect(0, 0, w, h);
	},
	/* earth */
	(c, w, h, r) => {
		c.fillStyle = lg(c, 0, 0, 0, h, [
			[0, '#050A18'],
			[0.6, '#08122C'],
			[1, '#02060B'],
		]);
		c.fillRect(0, 0, w, h);
		c.fillStyle = '#fff';
		for (let i = 0; i < 140; i++) {
			c.globalAlpha = 0.18 + r() * 0.7;
			c.fillRect(r() * w, r() * h * 0.72, 1.5, 1.5);
		}
		c.globalAlpha = 1;
		const cx = w * 0.5;
		const cy = h * 1.16;
		const rad = h * 0.8;
		const g = c.createRadialGradient(cx, cy - rad * 0.25, rad * 0.18, cx, cy, rad);
		g.addColorStop(0, '#2079B2');
		g.addColorStop(0.62, '#0E3F66');
		g.addColorStop(1, '#04121F');
		c.fillStyle = g;
		c.beginPath();
		c.arc(cx, cy, rad, 0, 7);
		c.fill();
		c.save();
		c.clip();
		c.fillStyle = 'rgba(104,152,96,.5)';
		for (let i = 0; i < 18; i++) {
			c.beginPath();
			c.ellipse(
				cx + (r() - 0.5) * rad * 1.5,
				cy - rad * (0.14 + r() * 0.82),
				rad * (0.06 + r() * 0.16),
				rad * (0.03 + r() * 0.08),
				r() * 3,
				0,
				7,
			);
			c.fill();
		}
		c.fillStyle = 'rgba(255,208,132,.92)';
		for (let i = 0; i < 60; i++) c.fillRect(cx + (r() - 0.5) * rad * 1.6, cy - rad * (0.2 + r() * 0.78), 2, 2);
		c.restore();
		const rim = c.createRadialGradient(cx, cy, rad * 0.95, cx, cy, rad * 1.15);
		rim.addColorStop(0, 'rgba(112,192,255,.45)');
		rim.addColorStop(1, 'rgba(112,192,255,0)');
		c.fillStyle = rim;
		c.beginPath();
		c.arc(cx, cy, rad * 1.15, 0, 7);
		c.fill();
	},
	/* screen */
	(c, w, h) => {
		c.fillStyle = lg(c, 0, 0, 0, h, [
			[0, '#15171E'],
			[1, '#05060A'],
		]);
		c.fillRect(0, 0, w, h);
		const sx = w * 0.12;
		const sy = h * 0.15;
		const sw = w * 0.76;
		const sh = h * 0.47;
		rrect(c, sx, sy, sw, sh, w * 0.02);
		c.fillStyle = lg(c, sx, sy, sx + sw, sy + sh, [
			[0, '#3FB6E8'],
			[0.45, '#7C5CE0'],
			[1, '#E85C8A'],
		]);
		c.fill();
		c.save();
		rrect(c, sx, sy, sw, sh, w * 0.02);
		c.clip();
		c.globalAlpha = 0.2;
		c.fillStyle = '#000';
		for (let y = sy; y < sy + sh; y += 6) c.fillRect(sx, y, sw, 2);
		c.restore();
		c.globalAlpha = 1;
		const spill = c.createRadialGradient(w * 0.5, sy + sh * 0.5, sh * 0.3, w * 0.5, sy + sh * 0.5, h * 0.85);
		spill.addColorStop(0, 'rgba(124,152,255,.3)');
		spill.addColorStop(1, 'rgba(124,152,255,0)');
		c.fillStyle = spill;
		c.fillRect(0, 0, w, h);
		c.fillStyle = 'rgba(226,214,202,.92)';
		for (const s of [-1, 1]) {
			const x = w * 0.5 + s * w * 0.16;
			rrect(c, x - w * 0.045, h * 0.66, w * 0.09, h * 0.2, w * 0.04);
			c.fill();
		}
		c.fillStyle = '#0A0B0F';
		rrect(c, w * 0.16, h * 0.82, w * 0.68, h * 0.3, w * 0.06);
		c.fill();
	},
	/* blocks */
	(c, w, h, r) => {
		c.fillStyle = '#EFA0BD';
		c.fillRect(0, 0, w, h);
		const cols = ['#F45B9B', '#E8478C', '#FB74AE', '#F2F0EE'];
		for (let i = 0; i < 104; i++) {
			const bw = w * (0.1 + r() * 0.05);
			const bh = bw * 0.48;
			const x = r() * (w + bw) - bw * 0.5;
			const y = r() * (h + bh) - bh * 0.5;
			const a = (r() - 0.5) * 2.6;
			c.save();
			c.translate(x, y);
			c.rotate(a);
			c.fillStyle = 'rgba(120,20,60,.15)';
			rrect(c, -bw * 0.5 + 3, -bh * 0.5 + 4, bw, bh, bh * 0.28);
			c.fill();
			c.fillStyle = cols[i % 4];
			rrect(c, -bw * 0.5, -bh * 0.5, bw, bh, bh * 0.28);
			c.fill();
			c.fillStyle = 'rgba(255,255,255,.32)';
			c.fillRect(-bw * 0.38, -bh * 0.34, bw * 0.34, bh * 0.12);
			c.restore();
		}
	},
	/* vinyl */
	(c, w, h) => {
		c.fillStyle = lg(c, 0, 0, w, h, [
			[0, '#3A1D6E'],
			[0.55, '#7A2E8C'],
			[1, '#E86A3C'],
		]);
		c.fillRect(0, 0, w, h);
		const cx = w * 0.5;
		const cy = h * 0.5;
		c.fillStyle = '#1B1024';
		c.beginPath();
		c.arc(cx, cy, h * 0.43, 0, 7);
		c.fill();
		for (let i = 16; i > 0; i--) {
			c.strokeStyle = `rgba(255,236,222,${0.02 + (i % 2) * 0.04})`;
			c.lineWidth = h * 0.008;
			c.beginPath();
			c.arc(cx, cy, h * 0.13 + i * h * 0.019, 0, 7);
			c.stroke();
		}
		c.fillStyle = '#F2C14E';
		c.beginPath();
		c.arc(cx, cy, h * 0.12, 0, 7);
		c.fill();
		c.fillStyle = '#1B1024';
		c.beginPath();
		c.arc(cx, cy, h * 0.018, 0, 7);
		c.fill();
		c.fillStyle = lg(c, 0, 0, w, h, [
			[0, 'rgba(255,255,255,.18)'],
			[0.5, 'rgba(255,255,255,0)'],
		]);
		c.fillRect(0, 0, w, h);
	},
	/* blobs */
	(c, w, h, r) => {
		c.fillStyle = '#F7F2E6';
		c.fillRect(0, 0, w, h);
		const cols = ['#E8524F', '#F2B33D', '#3E8BC4', '#4CA96B', '#8C5AC8', '#1B1B1B'];
		c.globalCompositeOperation = 'multiply';
		for (let i = 0; i < 9; i++) {
			c.globalAlpha = 0.55;
			c.fillStyle = cols[i % cols.length];
			c.beginPath();
			c.ellipse(w * (0.15 + r() * 0.7), h * (0.15 + r() * 0.7), w * (0.1 + r() * 0.18), w * (0.09 + r() * 0.16), r() * 3, 0, 7);
			c.fill();
		}
		c.globalCompositeOperation = 'source-over';
		c.globalAlpha = 1;
		c.strokeStyle = 'rgba(24,24,24,.45)';
		c.lineWidth = h * 0.009;
		for (let i = 0; i < 5; i++) {
			c.beginPath();
			c.moveTo(r() * w, r() * h);
			c.quadraticCurveTo(r() * w, r() * h, r() * w, r() * h);
			c.stroke();
		}
	},
	/* atom */
	(c, w, h, r) => {
		c.fillStyle = lg(c, 0, 0, w, h, [
			[0, '#062B33'],
			[0.6, '#0A4C55'],
			[1, '#02181D'],
		]);
		c.fillRect(0, 0, w, h);
		const cx = w * 0.5;
		const cy = h * 0.5;
		for (let i = 0; i < 3; i++) {
			c.save();
			c.translate(cx, cy);
			c.rotate((i * Math.PI) / 3);
			c.strokeStyle = 'rgba(122,236,226,.5)';
			c.lineWidth = h * 0.01;
			c.beginPath();
			c.ellipse(0, 0, w * 0.36, h * 0.13, 0, 0, 7);
			c.stroke();
			const a = r() * 7;
			c.fillStyle = '#8FF3E4';
			c.beginPath();
			c.arc(Math.cos(a) * w * 0.36, Math.sin(a) * h * 0.13, h * 0.022, 0, 7);
			c.fill();
			c.restore();
		}
		const g = c.createRadialGradient(cx, cy, 0, cx, cy, h * 0.17);
		g.addColorStop(0, '#F2FFFC');
		g.addColorStop(0.5, '#6FE0D0');
		g.addColorStop(1, 'rgba(60,200,190,0)');
		c.fillStyle = g;
		c.beginPath();
		c.arc(cx, cy, h * 0.17, 0, 7);
		c.fill();
		c.fillStyle = 'rgba(184,255,246,.45)';
		for (let i = 0; i < 44; i++) c.fillRect(r() * w, r() * h, 1.6, 1.6);
	},
];

function paintPhoto(c: CanvasRenderingContext2D, index: number, seed: number, pad: number, iw: number, ih: number): void {
	c.save();
	rrect(c, pad, pad, iw, ih, 640 * 0.036);
	c.clip();
	c.translate(pad, pad);
	(PAINTERS[index % PAINTERS.length])(c, iw, ih, rng(seed * 9301 + 49297));
	c.restore();
}

function makeCardCanvas(item: GalleryItemData, index: number, photo?: HTMLImageElement | null): HTMLCanvasElement {
	const TEX_W = 640;
	const TEX_H = Math.round(640 * CFG.card.ratio);
	const cv = document.createElement('canvas');
	cv.width = TEX_W;
	cv.height = TEX_H;
	const c = cv.getContext('2d');
	if (!c) return cv;

	c.fillStyle = '#FFFFFF';
	c.fillRect(0, 0, TEX_W, TEX_H);

	const pad = Math.round(TEX_W * 0.053);
	const iw = TEX_W - pad * 2;
	const ih = Math.round(TEX_W * 0.869);

	if (photo) {
		c.save();
		rrect(c, pad, pad, iw, ih, TEX_W * 0.036);
		c.clip();
		const s = Math.max(iw / photo.width, ih / photo.height);
		c.drawImage(photo, pad + (iw - photo.width * s) / 2, pad + (ih - photo.height * s) / 2, photo.width * s, photo.height * s);
		c.restore();
	} else {
		paintPhoto(c, index, index + 1, pad, iw, ih);
	}

	// Film grain keeps flat vector art from reading as vector art.
	const gr = rng(index + 77);
	c.globalAlpha = 0.045;
	for (let i = 0; i < 2600; i++) {
		c.fillStyle = gr() > 0.5 ? '#fff' : '#000';
		c.fillRect(pad + gr() * iw, pad + gr() * ih, 1.5, 1.5);
	}
	c.globalAlpha = 1;

	rrect(c, pad, pad, iw, ih, TEX_W * 0.036);
	c.strokeStyle = 'rgba(0,0,0,.08)';
	c.lineWidth = 2;
	c.stroke();

	// Title & subtitle below the photo
	const titleY = pad + ih + 28;
	const titleText = item.title.length > 25 ? item.title.slice(0, 25) + '\u2026' : item.title;
	if (titleText) {
		c.fillStyle = '#1a1a1a';
		c.font = `700 42px ${CANVAS_FONT}`;
		c.textBaseline = 'top';
		c.fillText(titleText, pad, titleY);
	}

	const subtitleText = item.subtitle.length > 40 ? item.subtitle.slice(0, 40) + '\u2026' : item.subtitle;
	if (subtitleText) {
		c.fillStyle = '#666666';
		c.font = `400 24px ${CANVAS_FONT}`;
		c.fillText(subtitleText, pad, titleY + 52);
	}

	return cv;
}

function makeShadowTexture(): THREE.CanvasTexture {
	const S = 256;
	const cv = document.createElement('canvas');
	cv.width = S;
	cv.height = Math.round(S * CFG.card.ratio);
	const c = cv.getContext('2d');
	if (!c) return new THREE.CanvasTexture(cv);
	c.shadowColor = 'rgba(0,0,0,1)';
	c.shadowBlur = S * 0.17;
	c.shadowOffsetY = S * 0.02;
	c.fillStyle = '#000';
	rrect(c, S * 0.15, cv.height * 0.12, S * 0.7, cv.height * 0.74, S * 0.06);
	c.fill();
	const t = new THREE.CanvasTexture(cv);
	t.colorSpace = THREE.SRGBColorSpace;
	return t;
}

/* ── Geometry helpers ────────────────────────────────────────────────────── */

function roundedPlane(w: number, h: number, r: number, seg = 8): THREE.ShapeGeometry {
	const s = new THREE.Shape();
	const x = -w / 2;
	const y = -h / 2;
	r = Math.min(r, w / 2, h / 2);
	s.moveTo(x + r, y);
	s.lineTo(x + w - r, y);
	s.quadraticCurveTo(x + w, y, x + w, y + r);
	s.lineTo(x + w, y + h - r);
	s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
	s.lineTo(x + r, y + h);
	s.quadraticCurveTo(x, y + h, x, y + h - r);
	s.lineTo(x, y + r);
	s.quadraticCurveTo(x, y, x + r, y);
	const g = new THREE.ShapeGeometry(s, seg);
	const p = g.attributes.position;
	const uv = g.attributes.uv;
	for (let i = 0; i < p.count; i++) uv.setXY(i, p.getX(i) / w + 0.5, p.getY(i) / h + 0.5);
	uv.needsUpdate = true;
	return g;
}

function clipGeometry(w: number, h: number, d: number): THREE.ExtrudeGeometry {
	const s = new THREE.Shape();
	const r = w * 0.44;
	const x = -w / 2;
	const y = -h * 0.8;
	s.moveTo(x + r, y);
	s.lineTo(x + w - r, y);
	s.quadraticCurveTo(x + w, y, x + w, y + r);
	s.lineTo(x + w, y + h - r);
	s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
	s.lineTo(x + r, y + h);
	s.quadraticCurveTo(x, y + h, x, y + h - r);
	s.lineTo(x, y + r);
	s.quadraticCurveTo(x, y, x + r, y);
	const g = new THREE.ExtrudeGeometry(s, {
		depth: d * 0.7,
		bevelEnabled: true,
		bevelThickness: d * 0.15,
		bevelSize: d * 0.15,
		bevelSegments: 3,
		curveSegments: 10,
	});
	g.translate(0, 0, -d * 0.5);
	g.computeVertexNormals();
	return g;
}

/* ── Main init ───────────────────────────────────────────────────────────── */

function initRopeGallery(root: HTMLElement): CleanupFn | undefined {
	if (root.hasAttribute(INITED_ATTR)) return;

	const canvas = root.querySelector<HTMLCanvasElement>('.wp-block-nextora-rope-gallery__canvas');
	const hit = root.querySelector<HTMLElement>('.wp-block-nextora-rope-gallery__hit');
	const hint = root.querySelector<HTMLElement>('.wp-block-nextora-rope-gallery__hint');
	const ropeArea = root.querySelector<HTMLElement>('.wp-block-nextora-rope-gallery__rope-area');
	if (!canvas || !ropeArea) return;

	root.setAttribute(INITED_ATTR, '1');

	// Narrowed alias for hoisted closures (function declarations capture before the guard).
	const canvasEl: HTMLCanvasElement = canvas;
	const ropeAreaEl: HTMLElement = ropeArea;

	const opts = getOpts(root);
	const reduced = prefersReducedMotion();

	if (reduced) {
		// Static fallback is shown via CSS (@media prefers-reduced-motion).
		markReady(root);
		return;
	}

	const animate = opts.animationEnabled;
	if (!animate) {
		root.classList.add('nextora-rope-gallery--static-3d');
	}

	const items: GalleryItemData[] =
		opts.items.length > 0 ? opts.items : [{ title: 'Untitled', subtitle: '', link: '', imageUrl: '', imageAlt: '' }];
	const slotCount = Math.max(3, Math.min(20, opts.cardCount));
	const clamp = THREE.MathUtils.clamp;

	/* ── Renderer / scene / camera / lights ── */
	const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
	renderer.setClearAlpha(0);
	renderer.outputColorSpace = THREE.SRGBColorSpace;
	renderer.toneMapping = THREE.NoToneMapping;
	let dpr = Math.min(2, window.devicePixelRatio || 1);
	renderer.setPixelRatio(dpr);

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(CFG.camera.fov, 1, 0.1, 60);
	camera.position.set(0, 0, CFG.camera.z);

	scene.add(new THREE.HemisphereLight(0xffffff, 0xede6d8, 0.5));
	const key = new THREE.DirectionalLight(0xffffff, 0.42);
	key.position.set(-3, 4, 6);
	scene.add(key);
	const fill = new THREE.DirectionalLight(0xfff4e4, 0.15);
	fill.position.set(4, -1.5, 3);
	scene.add(fill);

	// The cards face +z (toward the camera); the key/fill lights sit behind them.
	// Add a soft front key so card faces are properly lit without an env map.
	const front = new THREE.DirectionalLight(0xffffff, 0.85);
	front.position.set(0, 1.2, 10);
	scene.add(front);
	const frontFill = new THREE.DirectionalLight(0xfff4e4, 0.35);
	frontFill.position.set(-4, -2, 9);
	scene.add(frontFill);

	const world = new THREE.Group();
	scene.add(world);

	/* ── Layout manager — maps design pixels onto world units ── */
	const L = {
		halfWpx: 0,
		cardWpx: 0,
		cardHpx: 0,
		spacingPx: 0,
		slots: slotCount,
		halfSpanPx: 0,
		sagPx: 0,
		tiltPx: 0,
		worldH: 0,
		ppu: 1,
		viewH: 0,
		anchorPx: 0,
		cardW: 0,
		cardH: 0,
		spacing: 0,
		halfSpan: 0,
		span: 0,
		clipW: 0,
		clipH: 0,
		clipDrop: 0,
		ropeR: 0,
		tension: 0,
		maxDisp: 0,
	};

	function layout(): void {
		const W = ropeAreaEl.clientWidth;
		const H = ropeAreaEl.clientHeight;

		// Ensure the canvas fills the rope-area.
		canvasEl.style.height = `${H}px`;

		L.halfWpx = W * 0.5;
		L.cardWpx = W < 640 ? W * 0.435 : W < 1024 ? W * 0.245 : Math.min(W * 0.179, 236);
		L.cardHpx = L.cardWpx * CFG.card.ratio;
		L.spacingPx = L.cardWpx * CFG.card.spacing;
		L.slots = slotCount;
		L.halfSpanPx = L.slots * L.spacingPx * 0.5;

		const tEdge = Math.min(0.92, L.halfWpx / L.halfSpanPx);
		L.sagPx = (CFG.line.riseFrac * L.halfWpx) / (1 - tEdge * tEdge);
		L.tiltPx = (CFG.line.tiltFrac * W) / (2 * tEdge);

		const topRisePx = L.sagPx * tEdge * tEdge + Math.abs(L.tiltPx * tEdge);
		const clipDropPx = L.cardWpx * CFG.clip.h * CFG.clip.drop;
		const renderOverhangPx = Math.ceil(topRisePx + 18);
		const renderDepthPx = Math.ceil(clipDropPx + L.cardHpx * 1.1 + 28);

		// The rope centre is placed a little below the top of the rope area
		// so the cards hang within the visible footer.
		L.anchorPx = Math.round(H * 0.33);

		camera.aspect = W / H;
		camera.updateProjectionMatrix();
		renderer.setSize(W, H, false);

		L.worldH = 2 * CFG.camera.z * Math.tan(THREE.MathUtils.degToRad(CFG.camera.fov) * 0.5);
		L.ppu = H / L.worldH;
		L.viewH = H;

		L.cardW = L.cardWpx / L.ppu;
		L.cardH = L.cardHpx / L.ppu;
		L.spacing = L.spacingPx / L.ppu;
		L.halfSpan = L.halfSpanPx / L.ppu;
		L.span = L.halfSpan * 2;
		L.clipW = L.cardW * CFG.clip.w;
		L.clipH = L.cardW * CFG.clip.h;
		L.clipDrop = L.clipH * CFG.clip.drop;
		L.ropeR = CFG.line.radiusPx / L.ppu;

		const dx = L.span / (CFG.line.nodes - 1);
		L.tension = (CFG.line.waveSpeed / dx) ** 2;
		L.maxDisp = L.cardH * 0.25;
	}

	const pxToWorldY = (px: number): number => (L.viewH * 0.5 - px) / L.ppu;

	/* ── Rope physics — 1D wave chain in y and z, loaded by the cards ── */
	const N = CFG.line.nodes;
	const rope = {
		dy: new Float32Array(N),
		vy: new Float32Array(N),
		ly: new Float32Array(N),
		dz: new Float32Array(N),
		vz: new Float32Array(N),
		lz: new Float32Array(N),
	};

	function sampleWave(arr: Float32Array, t: number): number {
		const f = (t + 1) * 0.5 * (N - 1);
		const i = clamp(f | 0, 0, N - 2);
		const a = f - i;
		return arr[i] * (1 - a) + arr[i + 1] * a;
	}

	function addLoad(arr: Float32Array, t: number, v: number): void {
		const f = (t + 1) * 0.5 * (N - 1);
		const i = clamp(f | 0, 0, N - 2);
		const a = f - i;
		arr[i] += v * (1 - a);
		arr[i + 1] += v * a;
	}

	function stepRope(dt: number): void {
		const T = L.tension;
		const { rest, damp } = CFG.line;
		const sub = clamp(Math.ceil(dt * Math.sqrt(2 * T)), 2, 6);
		const h = dt / sub;
		const lim = L.maxDisp;
		for (let s = 0; s < sub; s++) {
			for (let i = 1; i < N - 1; i++) {
				rope.vy[i] +=
					(T * (rope.dy[i - 1] + rope.dy[i + 1] - 2 * rope.dy[i]) - rest * rope.dy[i] - damp * rope.vy[i] + rope.ly[i]) * h;
				rope.vz[i] +=
					(T * (rope.dz[i - 1] + rope.dz[i + 1] - 2 * rope.dz[i]) - rest * rope.dz[i] - damp * rope.vz[i] + rope.lz[i]) * h;
			}
			for (let i = 1; i < N - 1; i++) {
				rope.dy[i] = clamp(rope.dy[i] + rope.vy[i] * h, -lim, lim);
				rope.dz[i] = clamp(rope.dz[i] + rope.vz[i] * h, -lim, lim);
			}
		}
		rope.dy[0] = rope.dy[N - 1] = rope.dz[0] = rope.dz[N - 1] = 0;
	}

	/* ── The line in space ── */
	const _ap = { x: 0, y: 0, z: 0 };
	function lineApparent(t: number): { x: number; y: number; z: number } {
		const sp = CFG.line.spread;
		_ap.x = (L.halfSpan * (t + sp * t * t * t)) / (1 + sp);
		_ap.y = pxToWorldY(L.anchorPx - L.sagPx * t * t + L.tiltPx * t) + sampleWave(rope.dy, t);
		_ap.z = CFG.line.depthArc * t * t + sampleWave(rope.dz, t);
		return _ap;
	}

	// Apparent -> real world: keeps the on-screen position exact while depth varies.
	function lineWorld(t: number, v: THREE.Vector3): THREE.Vector3 {
		lineApparent(t);
		const k = (CFG.camera.z - _ap.z) / CFG.camera.z;
		return v.set(_ap.x * k, _ap.y * k, _ap.z);
	}

	/* ── Rope tube (hand-built, positions rewritten every frame) ── */
	const M = CFG.line.samples;
	const R = 6;
	const ropeGeo = new THREE.BufferGeometry();
	{
		const pos = new Float32Array(M * R * 3);
		const nor = new Float32Array(M * R * 3);
		const uv = new Float32Array(M * R * 2);
		const idx: number[] = [];
		for (let i = 0; i < M; i++) {
			for (let j = 0; j < R; j++) {
				uv[(i * R + j) * 2] = j / R;
				uv[(i * R + j) * 2 + 1] = i / (M - 1);
			}
		}
		for (let i = 0; i < M - 1; i++) {
			for (let j = 0; j < R; j++) {
				const a = i * R + j;
				const b = i * R + ((j + 1) % R);
				const c = (i + 1) * R + j;
				const d = (i + 1) * R + ((j + 1) % R);
				idx.push(a, c, b, b, c, d);
			}
		}
		ropeGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
		ropeGeo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
		ropeGeo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
		ropeGeo.setIndex(idx);
	}

	// Procedural three-strand twist, fibre noise, soft rim.
	const ropeMaterial = new THREE.ShaderMaterial({
		uniforms: {
			uColorA: { value: new THREE.Color(opts.ropeColor) },
			uColorB: { value: new THREE.Color(opts.ropeAccentColor) },
			uLight: { value: new THREE.Vector3(-0.45, 0.68, 0.58).normalize() },
		},
		vertexShader: `
    varying vec2 vUv; varying vec3 vN; varying vec3 vV;
    void main(){
      vUv = uv;
      vN = normalize(mat3(modelMatrix) * normal);
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vV = normalize(cameraPosition - wp.xyz);
      gl_Position = projectionMatrix * viewMatrix * wp;
    }`,
		fragmentShader: `
    uniform vec3 uColorA, uColorB, uLight;
    varying vec2 vUv; varying vec3 vN; varying vec3 vV;
    void main(){
      float tw = fract(vUv.y * 210.0 + vUv.x * 3.0);
      float strand = smoothstep(0.0, 0.34, tw) * (1.0 - smoothstep(0.66, 1.0, tw));
      float fibre = fract(sin(vUv.y * 4100.0) * 43758.5453);
      float diff = max(dot(vN, uLight), 0.0);
      float rim  = pow(1.0 - abs(dot(vN, vV)), 2.2);
      vec3 col = mix(uColorB, uColorA, strand * 0.8 + 0.2);
      col *= 0.72 + diff * 0.38 + fibre * 0.05;
      col += rim * 0.14;
      gl_FragColor = vec4(col, 1.0);
      #include <colorspace_fragment>
    }`,
	});

	const ropeMesh = new THREE.Mesh(ropeGeo, ropeMaterial);
	ropeMesh.frustumCulled = false;
	world.add(ropeMesh);

	const _p0 = new THREE.Vector3();
	const _pA = new THREE.Vector3();
	const _pB = new THREE.Vector3();
	const _tan = new THREE.Vector3();
	const _nrm = new THREE.Vector3();
	const _bin = new THREE.Vector3();
	const _up = new THREE.Vector3(0, 0, 1);

	function updateRopeMesh(): void {
		const pos = ropeGeo.attributes.position.array;
		const nor = ropeGeo.attributes.normal.array;
		const step = 2 / (M - 1);
		for (let i = 0; i < M; i++) {
			const t = -1 + step * i;
			lineWorld(t, _p0);
			lineWorld(Math.max(-1, t - step), _pA);
			lineWorld(Math.min(1, t + step), _pB);
			_tan.subVectors(_pB, _pA).normalize();
			_nrm.crossVectors(_tan, _up);
			if (_nrm.lengthSq() < 1e-9) _nrm.set(0, 1, 0);
			_nrm.normalize();
			_bin.crossVectors(_tan, _nrm).normalize();
			for (let j = 0; j < R; j++) {
				const a = (j / R) * Math.PI * 2;
				const ca = Math.cos(a);
				const sa = Math.sin(a);
				const nx = _nrm.x * ca + _bin.x * sa;
				const ny = _nrm.y * ca + _bin.y * sa;
				const nz = _nrm.z * ca + _bin.z * sa;
				const o = (i * R + j) * 3;
				pos[o] = _p0.x + nx * L.ropeR;
				pos[o + 1] = _p0.y + ny * L.ropeR;
				pos[o + 2] = _p0.z + nz * L.ropeR;
				nor[o] = nx;
				nor[o + 1] = ny;
				nor[o + 2] = nz;
			}
		}
		ropeGeo.attributes.position.needsUpdate = true;
		ropeGeo.attributes.normal.needsUpdate = true;
	}

	/* ── Hanging cards — a fixed pool, recycled endlessly around the line ── */
	const shadowTex = makeShadowTexture();
	const clipBodyMat = new THREE.MeshPhysicalMaterial({
		color: opts.accentColor,
		roughness: 0.32,
		metalness: 0,
		clearcoat: 1,
		clearcoatRoughness: 0.14,
		envMapIntensity: 0.9,
	});
	const clipDotMat = new THREE.MeshPhysicalMaterial({
		color: '#FCFCFA',
		roughness: 0.42,
		metalness: 0,
		clearcoat: 0.6,
	});

	const cards: CardState[] = [];
	let textures: THREE.CanvasTexture[] = [];
	let sharedClipGeo: THREE.ExtrudeGeometry | null = null;
	let sharedDotGeo: THREE.CircleGeometry | null = null;

	function buildTextures(): void {
		textures.forEach((t) => t.dispose());
		textures = items.map((item, i) => {
			const t = new THREE.CanvasTexture(makeCardCanvas(item, i + 1));
			t.colorSpace = THREE.SRGBColorSpace;
			t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
			t.minFilter = THREE.LinearMipmapLinearFilter;
			return t;
		});

		// Swap in real images when they finish loading; procedural art stays until then.
		let pendingLoads = 0;
		items.forEach((item, i) => {
			if (!item.imageUrl) return;
			pendingLoads++;
			const img = new Image();
			img.crossOrigin = 'anonymous';
			const finish = (): void => {
				pendingLoads--;
				if (pendingLoads === 0 && !animate) {
					// Static mode renders once at boot — re-render now that textures swapped.
					renderOnce();
				}
			};
			img.onload = () => {
				try {
					textures[i].image = makeCardCanvas(item, i + 1, img);
					textures[i].needsUpdate = true;
				} catch {
					// Keep the procedural fallback.
				}
				finish();
			};
			img.onerror = () => {
				finish();
			};
			img.src = item.imageUrl;
		});
	}

	function buildCards(): void {
		for (const c of cards) {
			world.remove(c.pivot);
			c.cardGeo.dispose();
			c.shadowGeo.dispose();
			c.mat.dispose();
			c.shadowMat.dispose();
		}
		cards.length = 0;
		if (sharedClipGeo) sharedClipGeo.dispose();
		if (sharedDotGeo) sharedDotGeo.dispose();
		sharedClipGeo = clipGeometry(L.clipW, L.clipH, CFG.clip.depth);
		sharedDotGeo = new THREE.CircleGeometry(L.clipW * 0.2, 18);

		const drop = L.clipDrop + L.cardH * 0.5;

		for (let i = 0; i < L.slots; i++) {
			const pivot = new THREE.Group();

			const cardGeo = roundedPlane(L.cardW, L.cardH, L.cardW * CFG.card.corner);
			const mat = new THREE.MeshPhysicalMaterial({
				map: textures[i % textures.length],
				roughness: 0.62,
				metalness: 0,
				clearcoat: 0.22,
				clearcoatRoughness: 0.55,
				envMapIntensity: 0.4,
				side: THREE.DoubleSide,
			});
			const mesh = new THREE.Mesh(cardGeo, mat);
			mesh.position.set(0, -drop, CFG.card.depth);

			const shadowGeo = roundedPlane(L.cardW * 1.17, L.cardH * 1.15, L.cardW * 0.1, 6);
			const shadowMat = new THREE.MeshBasicMaterial({
				map: shadowTex,
				transparent: true,
				opacity: 0.12,
				depthWrite: false,
				color: 0x2a2418,
			});
			const shadow = new THREE.Mesh(shadowGeo, shadowMat);
			shadow.position.set(0, -drop - L.cardH * 0.012, CFG.card.depth - 0.05);

			const clip = new THREE.Mesh(sharedClipGeo, clipBodyMat);
			clip.position.z = CFG.clip.z;
			const dot = new THREE.Mesh(sharedDotGeo, clipDotMat);
			dot.position.set(0, -L.clipH * 0.04, CFG.clip.z + 0.028);

			pivot.add(shadow, mesh, clip, dot);
			world.add(pivot);

			cards.push({
				pivot,
				mesh,
				shadow,
				shadowMat,
				mat,
				cardGeo,
				shadowGeo,
				drop,
				slot: i,
				lag: 0,
				lagV: 0,
				theta: 0,
				thetaV: 0,
				tilt: 0,
				tiltV: 0,
				bounce: 0,
				bounceV: 0,
				prevX: null,
				vx: 0,
				ax: 0,
				speed: 0,
				prevSpeed: 0,
				mass: 0.9 + ((i * 0.137) % 1) * 0.3,
				baseRot: (((i * 0.618) % 1) - 0.5) * 0.075,
				phase: i * 1.7,
				along: 0,
				texIndex: -1,
			});
		}
	}

	/* ── Input manager ── */
	const io = {
		offset: 0,
		vel: 0,
		accel: 0,
		prevVel: 0,
		kb: 0,
		dragging: false,
		lastX: 0,
		lastT: 0,
	};
	const ptr = { x: 0, y: 0, tx: 0, ty: 0 };

	let hintTimer = 0;
	let hintShown = false;
	if (hint) {
		hintTimer = window.setTimeout(() => {
			hint.classList.add('show');
			hintShown = true;
		}, 1800);
	}
	function hideHint(): void {
		if (!hint) return;
		window.clearTimeout(hintTimer);
		hint.classList.remove('show');
		hintShown = false;
	}

	const onHitPointerDown = (e: PointerEvent): void => {
		io.dragging = true;
		io.lastX = e.clientX;
		io.lastT = performance.now();
		io.vel = 0;
		hit?.classList.add('dragging');
		try {
			hit?.setPointerCapture(e.pointerId);
		} catch {
			// ignore
		}
		hideHint();
	};

	const onHitPointerMove = (e: PointerEvent): void => {
		if (!io.dragging || !hit) return;
		const now = performance.now();
		const dt = Math.max(8, now - io.lastT) / 1000;
		const dx = (e.clientX - io.lastX) / L.ppu;
		io.offset += dx;
		io.vel = io.vel * 0.55 + (dx / dt) * 0.45;
		io.lastX = e.clientX;
		io.lastT = now;
	};

	const endDrag = (): void => {
		if (!io.dragging) return;
		io.dragging = false;
		hit?.classList.remove('dragging');
		if (reduced) io.vel *= 0.25;
	};

	const onHitKeyDown = (e: KeyboardEvent): void => {
		if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
		e.preventDefault();
		const dir = e.key === 'ArrowLeft' ? -1 : 1;
		gsap.to(io, {
			kb: io.kb + dir * L.spacing,
			duration: reduced ? 0.2 : 0.9,
			ease: 'power3.out',
			overwrite: true,
		});
		hideHint();
	};

	const onWindowPointerMove = (e: PointerEvent): void => {
		ptr.tx = (e.clientX / window.innerWidth) * 2 - 1;
		ptr.ty = (e.clientY / window.innerHeight) * 2 - 1;
	};

	/* ── Frame ── */
	const _v = new THREE.Vector3();
	const order: number[] = [];
	let time = 0;
	let prevKb = 0;

	const wrapAlong = (a: number): number => a - Math.floor((a + L.halfSpan) / L.span) * L.span;

	let frames = 0;
	let acc = 0;
	let lowered = 0;

	function meter(dt: number): void {
		frames++;
		acc += dt;
		if (acc < 0.5) return;
		const fps = frames / acc;
		frames = 0;
		acc = 0;
		if (fps < 46 && lowered < 2) {
			lowered++;
			dpr = Math.max(1, dpr - 0.35);
			renderer.setPixelRatio(dpr);
		}
	}

	function tick(): void {
		const dt = Math.min(1 / 30, gsap.ticker.deltaRatio(60) / 60);
		time += dt;

		/* input integration */
		const kbStep = io.kb - prevKb;
		prevKb = io.kb;
		io.offset += kbStep;

		if (!io.dragging) {
			io.offset += io.vel * dt;
			io.vel *= Math.exp(-(reduced ? 9 : CFG.input.momentumDamp) * dt);
		}

		io.accel = io.accel * 0.7 + ((io.vel - io.prevVel) / dt) * 0.3;
		io.prevVel = io.vel;

		/* along-line placement: spring lag + neighbour repulsion */
		const C = CFG.card;
		for (const c of cards) {
			const a = (-C.lagK * c.lag - C.lagC * c.lagV - C.lagAir * io.vel) / c.mass - io.accel * 0.32;
			c.lagV += a * dt;
			c.lag = clamp(c.lag + c.lagV * dt, -L.spacing * 0.7, L.spacing * 0.7);
			c.along = wrapAlong(c.slot * L.spacing + io.offset + c.lag);
		}

		order.length = 0;
		for (let i = 0; i < cards.length; i++) order.push(i);
		order.sort((a, b) => cards[a].along - cards[b].along);

		const minGap = L.cardW * C.repelGap;
		for (let n = 0; n < order.length; n++) {
			const A = cards[order[n]];
			const B = cards[order[(n + 1) % order.length]];
			let gap = B.along - A.along;
			if (gap < 0) gap += L.span;
			if (gap < minGap) {
				const f = (minGap - gap) * C.repelK * dt;
				A.lagV -= f / A.mass;
				B.lagV += f / B.mass;
			}
		}

		/* rope loading: weight, plus force transferred by the drag */
		rope.ly.fill(0);
		rope.lz.fill(0);
		const ga = clamp(io.accel, -50, 50);
		const gv = clamp(io.vel, -10, 10);
		for (const c of cards) {
			const t = c.along / L.halfSpan;
			addLoad(rope.ly, t, -C.weight * c.mass - ga * 0.05 * c.mass);
			addLoad(rope.lz, t, -gv * 0.6);
		}
		// Remove the mean so hanging weight bumps the line locally without
		// shifting the whole designed curve downward.
		let mean = 0;
		for (let i = 0; i < N; i++) mean += rope.ly[i];
		mean /= N;
		for (let i = 0; i < N; i++) rope.ly[i] -= mean;
		stepRope(dt);

		/* per-card hanging dynamics */
		for (const c of cards) {
			const t = clamp(c.along / L.halfSpan, -1, 1);
			lineWorld(t, _v);
			c.pivot.position.copy(_v);

			if (c.prevX === null) c.prevX = _v.x;
			const vx = (_v.x - c.prevX) / dt;
			c.ax = c.ax * 0.65 + ((vx - c.vx) / dt) * 0.35;
			c.vx = c.vx * 0.4 + vx * 0.6;
			c.prevX = _v.x;

			// Driven pendulum: gravity restore, anchor acceleration, damping, idle life.
			let thA = -(C.swingGravity / c.drop) * Math.sin(c.theta) - (c.ax / c.drop) * Math.cos(c.theta) - C.swingDamp * c.thetaV;
			if (!reduced) {
				thA += Math.sin(time * 0.63 + c.phase) * C.idleAmp + Math.sin(time * 1.41 + c.phase * 2.3) * C.idleAmp * 0.45;
			}
			c.thetaV += (thA * dt) / c.mass;
			c.theta = clamp(c.theta + c.thetaV * dt, -0.7, 0.7);

			// Forward lean while travelling fast, spring relaxation back to rest.
			c.speed = Math.abs(c.vx);
			const tiltTarget = -Math.min(C.tiltMax, c.speed * 0.03);
			c.tiltV += ((tiltTarget - c.tilt) * 190 - c.tiltV * 17) * dt;
			c.tilt += c.tiltV * dt;

			// Weight bounce, excited by deceleration.
			c.bounceV += (c.prevSpeed - c.speed) * 0.014;
			c.bounceV += (-C.bounceK * c.bounce - C.bounceC * c.bounceV) * dt;
			c.bounce = clamp(c.bounce + c.bounceV * dt, -L.cardH * 0.02, L.cardH * 0.02);
			c.prevSpeed = c.speed;

			c.pivot.rotation.z = c.baseRot + c.theta;
			c.pivot.rotation.x = c.tilt;
			c.mesh.position.y = -c.drop + c.bounce;

			// Contact shadow drifts against the swing and softens as the card lifts.
			c.shadow.position.x = -c.theta * L.cardH * 0.22;
			c.shadow.position.y = c.mesh.position.y - L.cardH * 0.012 - Math.abs(c.theta) * L.cardH * 0.02;
			c.shadowMat.opacity = 0.2 - Math.min(0.09, c.speed * 0.012);

			// Seamless recycling: content index follows the wrap count.
			const wraps = Math.floor((c.slot * L.spacing + io.offset + c.lag + L.halfSpan) / L.span);
			const nt = textures.length;
			const ti = (((c.slot - wraps * L.slots) % nt) + nt * 1000) % nt;
			if (ti !== c.texIndex) {
				c.texIndex = ti;
				c.mat.map = textures[ti];
				c.mat.needsUpdate = true;
			}
		}

		updateRopeMesh();

		// Camera: gentle cursor parallax, heavily damped.
		if (!reduced) {
			const k = 1 - Math.exp(-CFG.camera.damp * dt);
			ptr.x += (ptr.tx - ptr.x) * k;
			ptr.y += (ptr.ty - ptr.y) * k;
			camera.position.x = ptr.x * CFG.camera.parallax * 4;
			camera.position.y = -ptr.y * CFG.camera.parallax * 2;
			camera.lookAt(camera.position.x * 0.55, camera.position.y * 0.55, 0);
		}

		renderer.render(scene, camera);
		meter(dt);
	}

	// Static 3D render used when physics are disabled (no tick loop).
	function renderOnce(): void {
		for (let i = 0; i < cards.length; i++) {
			const c = cards[i];
			c.along = wrapAlong(c.slot * L.spacing);
			const t = clamp(c.along / L.halfSpan, -1, 1);
			lineWorld(t, _v);
			c.pivot.position.copy(_v);
			c.pivot.rotation.z = c.baseRot;
			c.pivot.rotation.x = 0;
			c.mesh.position.y = -c.drop;
			c.shadow.position.y = c.mesh.position.y - L.cardH * 0.012;
			c.shadowMat.opacity = 0.2;

			const wraps = Math.floor((c.slot * L.spacing + L.halfSpan) / L.span);
			const nt = textures.length;
			const ti = (((c.slot - wraps * L.slots) % nt) + nt * 1000) % nt;
			if (ti !== c.texIndex) {
				c.texIndex = ti;
				c.mat.map = textures[ti];
				c.mat.needsUpdate = true;
			}
		}
		updateRopeMesh();
		renderer.render(scene, camera);
	}

	/* ── Resize ── */
	let firstResize = true;
	const resizeObserver = new ResizeObserver(() => {
		if (firstResize) {
			firstResize = false;
			return;
		}
		layout();
		buildCards();
		if (!animate) renderOnce();
	});

	/* ── Boot ── */
	void (async () => {
		try {
			// Give webfonts a chance to load before painting canvas text.
			await Promise.race([
				document.fonts.ready,
				new Promise((resolve) => window.setTimeout(resolve, 1500)),
			]);
		} catch {
			// ignore
		}

		layout();
		buildTextures();
		buildCards();

		if (!lagSmoothingSet) {
			gsap.ticker.lagSmoothing(500, 33);
			lagSmoothingSet = true;
		}

		if (animate) {
			gsap.ticker.add(tick);
			gsap.from(
				cards.map((c) => c.pivot.scale),
				{
					x: 0.86,
					y: 0.86,
					z: 0.86,
					duration: 1.1,
					ease: 'elastic.out(1, 0.62)',
					stagger: { each: 0.05, from: 'center' },
				},
			);
			gsap.fromTo(io, { vel: 2.2 }, { vel: 0, duration: 2.2, ease: 'power2.out' });

			hit?.addEventListener('pointerdown', onHitPointerDown);
			hit?.addEventListener('pointermove', onHitPointerMove);
			hit?.addEventListener('pointerup', endDrag);
			hit?.addEventListener('pointercancel', endDrag);
			hit?.addEventListener('lostpointercapture', endDrag);
			hit?.addEventListener('keydown', onHitKeyDown);
		} else {
			hideHint();
			renderOnce();
		}

		window.addEventListener('pointermove', onWindowPointerMove, { passive: true });
		resizeObserver.observe(root);
		markReady(root);
	})();

	/* ── Cleanup ── */
	return (): void => {
		window.removeEventListener('pointermove', onWindowPointerMove);
		hit?.removeEventListener('pointerdown', onHitPointerDown);
		hit?.removeEventListener('pointermove', onHitPointerMove);
		hit?.removeEventListener('pointerup', endDrag);
		hit?.removeEventListener('pointercancel', endDrag);
		hit?.removeEventListener('lostpointercapture', endDrag);
		hit?.removeEventListener('keydown', onHitKeyDown);

		window.clearTimeout(hintTimer);
		resizeObserver.disconnect();

		gsap.ticker.remove(tick);
		gsap.killTweensOf(io);
		if (cards.length > 0) gsap.killTweensOf(cards.map((c) => c.pivot.scale));

		textures.forEach((t) => t.dispose());
		shadowTex.dispose();
		clipBodyMat.dispose();
		clipDotMat.dispose();
		ropeMaterial.dispose();
		ropeGeo.dispose();
		for (const c of cards) {
			c.cardGeo.dispose();
			c.shadowGeo.dispose();
			c.mat.dispose();
			c.shadowMat.dispose();
		}
		if (sharedClipGeo) sharedClipGeo.dispose();
		if (sharedDotGeo) sharedDotGeo.dispose();
		world.clear();
		renderer.dispose();
		scene.clear();
	};
}

/* ── Scroll reveal (Nextora standard) ────────────────────────────────────── */

function initScrollReveal(root: HTMLElement): void {
	if (root.getAttribute('data-nextora-scroll-reveal') !== '1') return;
	if (root.classList.contains(REVEAL_READY_CLASS)) return;
	if (prefersReducedMotion()) {
		root.classList.add(REVEAL_READY_CLASS);
		return;
	}

	gsap.set(root, { opacity: 0, y: 24 });

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				observer.disconnect();
				gsap.to(root, {
					opacity: 1,
					y: 0,
					duration: 0.9,
					ease: 'power3.out',
					onComplete: () => {
						gsap.set(root, { clearProps: 'opacity,transform' });
						root.classList.add(REVEAL_READY_CLASS);
					},
				});
			});
		},
		{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
	);

	observer.observe(root);
}

/* ── Bootstrap ───────────────────────────────────────────────────────────── */

function initAll(): void {
	document
		.querySelectorAll<HTMLElement>('.wp-block-nextora-rope-gallery')
		.forEach((root) => {
			initRopeGallery(root);
			initScrollReveal(root);
		});
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initAll, { once: true });
} else {
	initAll();
}

// Re-init for roots injected after load (mega menu / AJAX).
window.addEventListener('nextora-rope-gallery-reinit', () => {
	initAll();
});
