/**
 * Arc gallery — responsive arc layout, image reveal, soft scroll motion.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { applyArcLayoutToDom } from './arc-layout-dom';

gsap.registerPlugin(ScrollTrigger);

const ROOT_SELECTOR = '.nextora-arc-gallery[data-nextora-arc-base]';
const ANIMATE_SELECTOR = '.nextora-arc-gallery[data-nextora-arc-animate="1"]';
const INIT_ATTR = 'data-nextora-arc-gsap-init';
const LAYOUT_ATTR = 'data-nextora-arc-layout-bound';
const CONTENT_INIT_ATTR = 'data-nextora-arc-content-init';
const PRELOAD_TIMEOUT_MS = 5000;

const layoutObservers = new WeakMap<HTMLElement, ResizeObserver>();

function prefersReducedMotion(): boolean {
	return (
		typeof window !== 'undefined' &&
		window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
	);
}

function getMediaUrl(media: HTMLElement): string | null {
	const fromData = media.getAttribute('data-nextora-arc-media-url');
	if (fromData) {
		return fromData;
	}
	const bg = window.getComputedStyle(media).backgroundImage;
	const match = bg.match(/url\(["']?([^"')]+)["']?\)/);
	return match?.[1] ?? null;
}

function preloadImages(medias: HTMLElement[]): Promise<void> {
	const urls = [
		...new Set(
			medias
				.map((el) => getMediaUrl(el))
				.filter((url): url is string => Boolean(url)),
		),
	];

	if (!urls.length) {
		return Promise.resolve();
	}

	const loads = urls.map(
		(url) =>
			new Promise<void>((resolve) => {
				const img = new Image();
				const done = (): void => resolve();
				img.onload = done;
				img.onerror = done;
				img.src = url;
			}),
	);

	return Promise.race([
		Promise.all(loads).then(() => undefined),
		new Promise<void>((resolve) => {
			window.setTimeout(resolve, PRELOAD_TIMEOUT_MS);
		}),
	]);
}

function bindResponsiveLayout(root: HTMLElement): void {
	if (root.getAttribute(LAYOUT_ATTR) === '1') {
		applyArcLayoutToDom(root, root.clientWidth);
		return;
	}

	const run = (): void => {
		applyArcLayoutToDom(root, root.clientWidth);
		ScrollTrigger.refresh();
	};

	run();

	const observer = new ResizeObserver(() => {
		window.requestAnimationFrame(run);
	});
	observer.observe(root);
	layoutObservers.set(root, observer);
	root.setAttribute(LAYOUT_ATTR, '1');
}

function initContentReveal(root: HTMLElement): void {
	const content = root.querySelector<HTMLElement>(
		'[data-nextora-scroll-reveal="1"]',
	);
	if (!content || content.getAttribute(CONTENT_INIT_ATTR) === '1') {
		return;
	}
	content.setAttribute(CONTENT_INIT_ATTR, '1');

	gsap.from(content, {
		opacity: 0,
		y: 22,
		duration: 0.8,
		ease: 'power2.out',
		scrollTrigger: {
			trigger: content,
			start: 'top 88%',
			once: true,
		},
	});
}

function initScrollParallax(root: HTMLElement, stage: HTMLElement): void {
	gsap.fromTo(
		stage,
		{ y: 32 },
		{
			y: -32,
			ease: 'none',
			scrollTrigger: {
				trigger: root,
				start: 'top bottom',
				end: 'bottom top',
				scrub: 0.7,
				invalidateOnRefresh: true,
			},
		},
	);

	const medias = root.querySelectorAll<HTMLElement>('.nextora-arc-gallery__media');
	const center = (medias.length - 1) / 2;

	medias.forEach((media, index) => {
		const spread = (index - center) * 5;
		gsap.fromTo(
			media,
			{ y: spread * 0.35 },
			{
				y: -spread * 0.35,
				ease: 'none',
				scrollTrigger: {
					trigger: root,
					start: 'top bottom',
					end: 'bottom top',
					scrub: 0.9,
					invalidateOnRefresh: true,
				},
			},
		);
	});
}

function revealGalleryImages(
	root: HTMLElement,
	medias: NodeListOf<HTMLElement>,
	onComplete: () => void,
): void {
	root.classList.add('is-arc-ready');

	const tl = gsap.timeline({
		defaults: { ease: 'power2.out' },
		onComplete,
	});

	tl.to(medias, {
		opacity: 1,
		scale: 1,
		duration: 0.95,
		stagger: {
			each: 0.11,
			from: 'center',
		},
	});
}

function initGalleryAnimations(root: HTMLElement): void {
	if (root.getAttribute(INIT_ATTR) === '1') {
		return;
	}
	root.setAttribute(INIT_ATTR, '1');

	const stage = root.querySelector<HTMLElement>('.nextora-arc-gallery__stage');
	const medias = root.querySelectorAll<HTMLElement>('.nextora-arc-gallery__media');

	if (prefersReducedMotion()) {
		root.classList.add('is-arc-ready');
		return;
	}

	if (!stage || !medias.length) {
		root.classList.add('is-arc-ready');
		initContentReveal(root);
		return;
	}

	gsap.set(medias, {
		opacity: 0,
		scale: 0.9,
		transformOrigin: 'center center',
		force3D: true,
	});

	let revealed = false;

	const runReveal = (): void => {
		if (revealed) {
			return;
		}
		revealed = true;
		revealGalleryImages(root, medias, () => {
			initScrollParallax(root, stage);
			ScrollTrigger.refresh();
		});
	};

	const scheduleReveal = (): void => {
		if (ScrollTrigger.isInViewport(root, 0.12)) {
			runReveal();
			return;
		}

		ScrollTrigger.create({
			trigger: root,
			start: 'top 84%',
			once: true,
			onEnter: runReveal,
		});
	};

	preloadImages([...medias]).then(() => {
		requestAnimationFrame(scheduleReveal);
	});

	initContentReveal(root);
}

function initRoot(root: HTMLElement): void {
	bindResponsiveLayout(root);

	if (root.matches(ANIMATE_SELECTOR)) {
		initGalleryAnimations(root);
	} else {
		root.classList.add('is-arc-ready');
	}
}

function boot(): void {
	document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach(initRoot);
	ScrollTrigger.config({
		autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize',
	});
	ScrollTrigger.refresh();
}

function onReady(): void {
	boot();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', onReady, { once: true });
} else {
	onReady();
}

window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
