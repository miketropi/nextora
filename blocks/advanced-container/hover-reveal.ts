/**
 * Hover ink-reveal mask (inspired by MiMo Code hero).
 * A solid or gradient canvas cover is erased along the cursor path to reveal a hidden background image.
 */

import { paintGradientMask, resolveSectionGradientCss } from './hover-reveal-gradient';

const HOVER_REVEAL_ATTR = 'data-nextora-ac-hover-reveal';
const INIT_ATTR = 'data-nextora-ac-hover-reveal-init';
const MASK_VAR = '--nextora-ac-hover-mask-color';

const R_START = 8;
const R_END = 128;
const R_VARY = 0.45;
const LIFETIME = 520;
const STAMP_STEP = 12;
const MAX_STAMPS = 160;

type Stamp = {
  x: number;
  y: number;
  born: number;
  seed: number;
  rmax: number;
};

type HoverRevealState = {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  stamps: Stamp[];
  lastX: number | null;
  lastY: number | null;
  running: boolean;
  width: number;
  height: number;
  dpr: number;
  maskRgb: string;
  isGradient: boolean;
  gradientCss: string;
  rafId: number;
  onResize: () => void;
  onHoverChange: (event: MediaQueryListEvent) => void;
  onMouseEnter: (event: MouseEvent) => void;
  onMouseMove: (event: MouseEvent) => void;
  onMouseLeave: () => void;
};

const stateByRoot = new WeakMap<HTMLElement, HoverRevealState>();

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function maskRgbFromRoot(root: HTMLElement): string {
  const raw = getComputedStyle(root).getPropertyValue(MASK_VAR).trim();
  if (!raw) {
    return '251, 247, 240';
  }

  const probe = document.createElement('span');
  probe.style.color = raw;
  document.body.appendChild(probe);
  const computed = getComputedStyle(probe).color;
  probe.remove();

  const match = computed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) {
    return '251, 247, 240';
  }

  return `${match[1]}, ${match[2]}, ${match[3]}`;
}

function paintMask(state: HoverRevealState): void {
  const { ctx, width, height, maskRgb, isGradient, gradientCss } = state;
  ctx.globalCompositeOperation = 'source-over';

  if (isGradient && gradientCss && paintGradientMask(ctx, width, height, gradientCss)) {
    return;
  }

  ctx.fillStyle = `rgb(${maskRgb})`;
  ctx.fillRect(0, 0, width, height);
}

function carveInk(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  alpha: number,
  seed: number,
): void {
  const gradient = ctx.createRadialGradient(x, y, r * 0.25, x, y, r);
  gradient.addColorStop(0, `rgba(0, 0, 0, ${0.95 * alpha})`);
  gradient.addColorStop(0.55, `rgba(0, 0, 0, ${0.88 * alpha})`);
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = gradient;
  ctx.beginPath();

  const segments = 32;
  for (let i = 0; i <= segments; i += 1) {
    const angle = (i / segments) * Math.PI * 2;
    const wobble =
      0.78 +
      0.14 * Math.sin(angle * 3 + seed) +
      0.08 * Math.sin(angle * 7 + seed * 2.1) +
      0.05 * Math.sin(angle * 13 + seed * 0.7);
    const radius = r * wobble;
    const px = x + Math.cos(angle) * radius;
    const py = y + Math.sin(angle) * radius;
    if (i === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }

  ctx.closePath();
  ctx.fill();
}

function addStamp(state: HoverRevealState, x: number, y: number): void {
  if (state.stamps.length >= MAX_STAMPS) {
    state.stamps.shift();
  }

  state.stamps.push({
    x,
    y,
    born: performance.now(),
    seed: Math.random() * Math.PI * 2,
    rmax: R_END * (1 - R_VARY + Math.random() * R_VARY),
  });
}

function stampAlong(state: HoverRevealState, x: number, y: number): void {
  if (state.lastX === null || state.lastY === null) {
    addStamp(state, x, y);
  } else {
    const dx = x - state.lastX;
    const dy = y - state.lastY;
    const distance = Math.hypot(dx, dy);
    const steps = Math.max(1, Math.ceil(distance / STAMP_STEP));
    for (let i = 1; i <= steps; i += 1) {
      addStamp(state, state.lastX + (dx * i) / steps, state.lastY + (dy * i) / steps);
    }
  }

  state.lastX = x;
  state.lastY = y;
}

function loop(state: HoverRevealState): void {
  const now = performance.now();
  const { ctx, width, height, stamps } = state;

  paintMask(state);

  ctx.globalCompositeOperation = 'destination-out';
  for (let i = stamps.length - 1; i >= 0; i -= 1) {
    const stamp = stamps[i];
    const progress = (now - stamp.born) / LIFETIME;
    if (progress >= 1) {
      stamps.splice(i, 1);
      continue;
    }

    const ease = 1 - (1 - progress) ** 3;
    const radius = R_START + (stamp.rmax - R_START) * ease;
    const alpha = 1 - progress * progress;
    carveInk(ctx, stamp.x, stamp.y, radius, alpha, stamp.seed);
  }

  if (stamps.length) {
    state.rafId = requestAnimationFrame(() => loop(state));
  } else {
    state.running = false;
    state.rafId = 0;
  }
}

function startLoop(state: HoverRevealState): void {
  if (!state.running) {
    state.running = true;
    state.rafId = requestAnimationFrame(() => loop(state));
  }
}

function resize(state: HoverRevealState, root: HTMLElement): void {
  const rect = root.getBoundingClientRect();
  state.width = rect.width;
  state.height = rect.height;
  state.isGradient = root.classList.contains('nextora-advanced-container--hover-reveal-gradient');
  state.gradientCss = state.isGradient ? resolveSectionGradientCss(root) : '';
  state.maskRgb = maskRgbFromRoot(root);
  state.canvas.width = Math.round(state.width * state.dpr);
  state.canvas.height = Math.round(state.height * state.dpr);
  state.canvas.style.width = `${state.width}px`;
  state.canvas.style.height = `${state.height}px`;
  state.ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
  paintMask(state);
}

function destroyHoverReveal(root: HTMLElement): void {
  const state = stateByRoot.get(root);
  if (!state) {
    return;
  }

  if (state.rafId) {
    cancelAnimationFrame(state.rafId);
  }

  root.removeEventListener('mouseenter', state.onMouseEnter);
  root.removeEventListener('mousemove', state.onMouseMove);
  root.removeEventListener('mouseleave', state.onMouseLeave);
  window.removeEventListener('resize', state.onResize);
  window.matchMedia('(any-hover: none)').removeEventListener('change', state.onHoverChange);
  stateByRoot.delete(root);
  root.removeAttribute(INIT_ATTR);
}

export function initHoverReveal(root: HTMLElement): void {
  if (root.getAttribute(HOVER_REVEAL_ATTR) !== '1') {
    return;
  }
  if (root.getAttribute(INIT_ATTR) === '1') {
    return;
  }
  if (prefersReducedMotion()) {
    return;
  }

  const canvas = root.querySelector<HTMLCanvasElement>('.nextora-advanced-container__hover-mask');
  if (!canvas) {
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return;
  }

  const isGradient = root.classList.contains('nextora-advanced-container--hover-reveal-gradient');
  const anyHoverNoneMql = window.matchMedia('(any-hover: none)');

  const state: HoverRevealState = {
    canvas,
    ctx,
    stamps: [],
    lastX: null,
    lastY: null,
    running: false,
    width: 0,
    height: 0,
    dpr: Math.min(window.devicePixelRatio || 1, 2),
    maskRgb: maskRgbFromRoot(root),
    isGradient,
    gradientCss: isGradient ? resolveSectionGradientCss(root) : '',
    rafId: 0,
    onResize: () => resize(state, root),
    onHoverChange: () => {
      resize(state, root);
    },
    onMouseEnter: (event: MouseEvent) => {
      const rect = root.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      stampAlong(state, x, y);
      startLoop(state);
    },
    onMouseMove: (event: MouseEvent) => {
      const rect = root.getBoundingClientRect();
      stampAlong(state, event.clientX - rect.left, event.clientY - rect.top);
      startLoop(state);
    },
    onMouseLeave: () => {
      state.lastX = null;
      state.lastY = null;
    },
  };

  resize(state, root);
  root.setAttribute(INIT_ATTR, '1');
  stateByRoot.set(root, state);

  root.addEventListener('mouseenter', state.onMouseEnter);
  root.addEventListener('mousemove', state.onMouseMove);
  root.addEventListener('mouseleave', state.onMouseLeave);
  window.addEventListener('resize', state.onResize);
  anyHoverNoneMql.addEventListener('change', state.onHoverChange);
}

export function destroyAllHoverReveal(): void {
  document
    .querySelectorAll<HTMLElement>('[data-nextora-ac-hover-reveal-init="1"]')
    .forEach((root) => destroyHoverReveal(root));
}

/** Repaint masks after client-side theme variables change. */
export function refreshAllHoverReveal(): void {
  document
    .querySelectorAll<HTMLElement>(`[${INIT_ATTR}="1"]`)
    .forEach((root) => {
      const state = stateByRoot.get(root);
      if (state) {
        resize(state, root);
      }
    });
}
