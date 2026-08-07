/**
 * Scroll reveal for `nextora/advanced-container` (front end).
 *
 * Dynamic blocks often do not auto-enqueue `viewScript`;
 * render.php enqueues this file when needed.
 */
import { initHoverReveal } from './hover-reveal';
import { initLightRays } from './light-rays';
import { initRipples } from './ripples';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ROOT_SELECTOR = '.wp-block-nextora-advanced-container, .nextora-advanced-container';
const INIT_ATTR = 'data-nextora-ac-init';
const SCROLL_INIT_ATTR = 'data-nextora-ac-scroll-init';
const REVEAL_START_RATIO = 0.88;
const REVEAL_FALLBACK_MS = 1500;
const PARALLAX_INIT_ATTR = 'data-nextora-ac-parallax-init';
const MAX_PARALLAX_PX = 80;
const AMBIENT_INIT_ATTR = 'data-nextora-ac-ambient-init';

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function setReady(root: HTMLElement): void {
  root.classList.add('nextora-advanced-container--ready');
  root.classList.remove('nextora-advanced-container--reveal-pending');
}

function clearRevealStyles(inner: HTMLElement): void {
  gsap.set(inner, { clearProps: 'opacity,transform,translate,rotate,scale' });
}

function isRevealStartPassed(root: HTMLElement): boolean {
  const rect = root.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= viewportHeight * REVEAL_START_RATIO && rect.bottom > 0;
}

function finishReveal(root: HTMLElement, inner: HTMLElement): void {
  clearRevealStyles(inner);
  setReady(root);
}

function playReveal(root: HTMLElement, inner: HTMLElement): gsap.core.Tween {
  return gsap.fromTo(
    inner,
    { opacity: 0, y: 28 },
    {
      opacity: 1,
      y: 0,
      duration: 0.65,
      ease: 'power3.out',
      onComplete: () => {
        finishReveal(root, inner);
      },
    },
  );
}

function scheduleRevealFallback(root: HTMLElement, inner: HTMLElement): void {
  window.setTimeout(() => {
    if (root.classList.contains('nextora-advanced-container--ready')) {
      return;
    }
    gsap.killTweensOf(inner);
    finishReveal(root, inner);
  }, REVEAL_FALLBACK_MS);
}

function initScrollReveal(root: HTMLElement): void {
  if (root.getAttribute('data-nextora-scroll-reveal') !== '1') {
    return;
  }
  if (root.getAttribute(SCROLL_INIT_ATTR) === '1') {
    return;
  }
  root.setAttribute(SCROLL_INIT_ATTR, '1');

  if (prefersReducedMotion()) {
    setReady(root);
    return;
  }

  const inner = root.querySelector<HTMLElement>('.nextora-advanced-container__inner');
  if (!inner) {
    setReady(root);
    return;
  }

  root.classList.add('nextora-advanced-container--reveal-pending');
  gsap.set(inner, { opacity: 0, y: 28 });

  if (isRevealStartPassed(root)) {
    playReveal(root, inner);
    scheduleRevealFallback(root, inner);
    return;
  }

  const tween = playReveal(root, inner);
  tween.pause();

  ScrollTrigger.create({
    trigger: root,
    start: `top ${REVEAL_START_RATIO * 100}%`,
    once: true,
    onEnter: () => {
      tween.play();
    },
  });

  ScrollTrigger.refresh();

  if (isRevealStartPassed(root)) {
    tween.play();
  }

  scheduleRevealFallback(root, inner);
}

function initParallax(root: HTMLElement): void {
  if (!root.classList.contains('nextora-advanced-container--parallax')) {
    return;
  }
  if (root.classList.contains('nextora-advanced-container--bg-anim')) {
    return;
  }
  if (root.getAttribute(PARALLAX_INIT_ATTR) === '1') {
    return;
  }
  if (prefersReducedMotion()) {
    return;
  }
  const bg = root.querySelector<HTMLElement>('.nextora-advanced-container__bg');
  if (!bg) {
    return;
  }
  const raw = root.getAttribute('data-nextora-ac-parallax-speed') || '0.5';
  const speed = Math.max(0, Math.min(1, parseFloat(raw)));
  if (isNaN(speed) || speed === 0) {
    return;
  }
  const yPx = speed * MAX_PARALLAX_PX;
  root.setAttribute(PARALLAX_INIT_ATTR, '1');
  gsap.fromTo(
    bg,
    { y: -yPx * 0.5 },
    {
      y: yPx * 0.5,
      ease: 'none',
      scrollTrigger: {
        trigger: root,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.4,
        invalidateOnRefresh: true,
      },
    },
  );
}

function bindBgImageRefresh(root: HTMLElement): void {
  const bg = root.querySelector<HTMLElement>('.nextora-advanced-container__bg');
  if (!bg || !bg.style.backgroundImage) {
    return;
  }
  const img = document.createElement('img');
  img.src = bg.style.backgroundImage.replace(/url\(["']?(.+?)["']?\)/i, '$1');
  if (img.complete) {
    return;
  }
  img.addEventListener(
    'load',
    () => {
      ScrollTrigger.refresh();
    },
    { once: true },
  );
}

function initAmbientIcons(root: HTMLElement): void {
  if (!root.classList.contains('nextora-advanced-container--ambient-icons')) {
    return;
  }
  if (root.getAttribute(AMBIENT_INIT_ATTR) === '1') {
    return;
  }
  root.setAttribute(AMBIENT_INIT_ATTR, '1');

  if (prefersReducedMotion()) {
    return;
  }

  const container = root.querySelector<HTMLElement>('.nextora-advanced-container__ambient-icons');
  if (!container) {
    return;
  }

  const icons = container.querySelectorAll<HTMLElement>('.nextora-advanced-container__ambient-icon');
  const count = icons.length;
  if (count === 0) {
    return;
  }

  const ambientContainer = container;
  const padding = 8;
  const iconSize = (icons[0] as HTMLElement).offsetWidth || 48;

  const rect = ambientContainer.getBoundingClientRect();
  const availW = Math.max(1, rect.width - padding * 2);
  const availH = Math.max(1, rect.height - padding * 2);
  const cellArea = (availW * availH) / count;
  const cellSide = Math.sqrt(cellArea);
  const minCellSide = iconSize + 30;
  const side = Math.max(minCellSide, cellSide);
  const gridCols = Math.max(1, Math.floor(availW / side));
  const gridRows = Math.ceil(count / gridCols);
  const totalCells = gridCols * gridRows;

  function cellToPosition(cellIdx: number): { left: number; top: number } {
    const idx = cellIdx % totalCells;
    const col = idx % gridCols;
    const row = Math.floor(idx / gridCols);
    const cellW = (rect.width - padding * 2) / gridCols;
    const cellH = (rect.height - padding * 2) / gridRows;
    const margin = 12;
    const left = padding + col * cellW + margin + Math.random() * Math.max(0, cellW - iconSize - margin * 2);
    const top = padding + row * cellH + margin + Math.random() * Math.max(0, cellH - iconSize - margin * 2);
    return { left, top };
  }

  const usedCells = new Set<number>();

  function pickUniqueCell(): number {
    const free = [];
    for (let i = 0; i < totalCells; i++) {
      if (!usedCells.has(i)) free.push(i);
    }
    if (free.length === 0) {
      usedCells.clear();
      for (let i = 0; i < totalCells; i++) free.push(i);
    }
    const idx = free[Math.floor(Math.random() * free.length)];
    usedCells.add(idx);
    return idx;
  }

  function cycleIcon(icon: HTMLElement, currentCell: number): void {
    const pos = cellToPosition(currentCell);
    const stayDuration = 2.5 + Math.random() * 4.5;
    const fadeDuration = 0.8 + Math.random() * 0.6;

    gsap.set(icon, {
      left: `${pos.left}px`,
      top: `${pos.top}px`,
      opacity: 0,
    });

    const tl = gsap.timeline({ onComplete: () => {
      usedCells.delete(currentCell);
      const nextCell = pickUniqueCell();
      cycleIcon(icon, nextCell);
    }});

    tl.to(icon, {
      opacity: 1,
      duration: fadeDuration,
      ease: 'power2.out',
    })
    .to(icon, {
      opacity: 1,
      duration: stayDuration,
      ease: 'none',
    })
    .to(icon, {
      opacity: 0,
      duration: fadeDuration,
      ease: 'power2.in',
    });
  }

  icons.forEach((icon, i) => {
    const cell = pickUniqueCell();
    const initialDelay = i * 0.3 + Math.random() * 1.5;
    gsap.delayedCall(initialDelay, () => cycleIcon(icon as HTMLElement, cell));
  });
}

function initRipplesWrapper(root: HTMLElement): void {
  if (!root.classList.contains('nextora-advanced-container--ripples')) {
    return;
  }
  if (root.getAttribute(AMBIENT_INIT_ATTR) === 'ripples') {
    return;
  }
  root.setAttribute(AMBIENT_INIT_ATTR, 'ripples');

  if (prefersReducedMotion()) {
    return;
  }

  try {
    initRipples(root);
  } catch { /* */ }
}

function initRoot(root: HTMLElement): void {
  if (root.getAttribute(INIT_ATTR) === '1') {
    return;
  }
  root.setAttribute(INIT_ATTR, '1');

  initScrollReveal(root);
  initParallax(root);
  initHoverReveal(root);
  initAmbientIcons(root);
  initLightRays(root);
  initRipplesWrapper(root);
  bindBgImageRefresh(root);
}

function forceRevealPendingRoots(): void {
  document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach((root) => {
    if (root.getAttribute('data-nextora-scroll-reveal') !== '1') {
      return;
    }
    if (root.classList.contains('nextora-advanced-container--ready')) {
      return;
    }

    const inner = root.querySelector<HTMLElement>('.nextora-advanced-container__inner');
    if (!inner) {
      setReady(root);
      return;
    }

    if (isRevealStartPassed(root)) {
      gsap.killTweensOf(inner);
      playReveal(root, inner);
    }
  });
}

function boot(): void {
  document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach(initRoot);
  ScrollTrigger.config({ autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load' });
  ScrollTrigger.refresh();
  forceRevealPendingRoots();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}

window.addEventListener(
  'load',
  () => {
    ScrollTrigger.refresh();
    forceRevealPendingRoots();
  },
  { once: true },
);
