/**
 * Scroll reveal + parallax for `nextora/page-title` (front end).
 *
 * Page title sections sit above the fold, so reveal runs on load when already
 * visible — not only on scroll. Dynamic blocks often do not auto-enqueue
 * `viewScript`; render.php enqueues this file when needed.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ROOT_SELECTOR = '.wp-block-nextora-page-title, .nextora-page-title';
const INIT_ATTR = 'data-nextora-page-title-init';
const SCROLL_INIT_ATTR = 'data-nextora-page-title-scroll-init';
const PARALLAX_INIT_ATTR = 'data-nextora-page-title-parallax-init';
const REVEAL_START_RATIO = 0.88;
const REVEAL_FALLBACK_MS = 1500;

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function setReady(root: HTMLElement): void {
  root.classList.add('nextora-page-title--ready');
  root.classList.remove('nextora-page-title--reveal-pending');
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
    if (root.classList.contains('nextora-page-title--ready')) {
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

  const inner = root.querySelector<HTMLElement>('.nextora-page-title__inner');
  if (!inner) {
    setReady(root);
    return;
  }

  root.classList.add('nextora-page-title--reveal-pending');
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
  if (root.getAttribute('data-nextora-page-title-parallax') !== '1') {
    return;
  }
  if (prefersReducedMotion()) {
    return;
  }
  if (root.getAttribute(PARALLAX_INIT_ATTR) === '1') {
    return;
  }

  const bg = root.querySelector<HTMLElement>('.nextora-page-title__bg');
  if (!bg) {
    return;
  }

  root.setAttribute(PARALLAX_INIT_ATTR, '1');
  registerParallaxInstance(root, bg, parseParallaxSpeed(root.getAttribute('data-nextora-page-title-parallax-speed')));
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function parseParallaxSpeed(raw: string | null): number {
  const parsed = Number.parseFloat(raw || '0.4');
  if (!Number.isFinite(parsed)) {
    return 0.4;
  }
  return clamp(parsed, 0, 1);
}

type ParallaxInstance = {
  root: HTMLElement;
  bg: HTMLElement;
  speed: number;
  active: boolean;
  progress: number;
};

const parallaxInstances = new Set<ParallaxInstance>();
const parallaxInstancesByRoot = new WeakMap<HTMLElement, ParallaxInstance>();
let parallaxFrame = 0;
let parallaxListenersBound = false;
let parallaxObserver: IntersectionObserver | null = null;
let lastScrollY = 0;

function getScrollY(): number {
  return window.scrollY || document.documentElement.scrollTop || 0;
}

function getParallaxMetrics(instance: ParallaxInstance): { travel: number; scaleDelta: number } {
  const sectionHeight = Math.max(instance.root.getBoundingClientRect().height, 1);
  const travel = clamp(sectionHeight * 0.18, 24, 160) * Math.max(instance.speed, 0.1);
  const scaleDelta = clamp((travel / sectionHeight) * (0.85 + instance.speed * 0.35), 0.06, 0.22);
  return { travel, scaleDelta };
}

function applyParallaxStyles(instance: ParallaxInstance): void {
  const { travel, scaleDelta } = getParallaxMetrics(instance);

  instance.bg.style.setProperty('--nextora-page-title-parallax-progress', instance.progress.toFixed(4));
  instance.bg.style.setProperty('--nextora-page-title-parallax-travel', `${travel.toFixed(2)}px`);
  instance.bg.style.setProperty('--nextora-page-title-parallax-scale-delta', scaleDelta.toFixed(4));
}

function resetParallaxInstance(instance: ParallaxInstance): void {
  instance.progress = 0;
  applyParallaxStyles(instance);
}

function handleParallaxScroll(): void {
  const scrollY = getScrollY();
  const delta = scrollY - lastScrollY;
  lastScrollY = scrollY;

  if (delta === 0) {
    return;
  }

  // Scroll down → progress up (zoom in). Scroll up → progress down (back to rest).
  parallaxInstances.forEach((instance) => {
    if (!instance.active) {
      return;
    }

    const instanceSensitivity = 0.0025 * (0.25 + instance.speed * 0.75);
    instance.progress = clamp(instance.progress + delta * instanceSensitivity, 0, 1);
    applyParallaxStyles(instance);
  });
}

function scheduleParallaxUpdate(): void {
  if (parallaxFrame) {
    return;
  }

  parallaxFrame = window.requestAnimationFrame(() => {
    parallaxFrame = 0;
    handleParallaxScroll();
  });
}

function refreshParallaxMetrics(): void {
  parallaxInstances.forEach((instance) => {
    if (instance.active) {
      applyParallaxStyles(instance);
    }
  });
}

function bindParallaxListeners(): void {
  if (parallaxListenersBound) {
    return;
  }

  parallaxListenersBound = true;
  lastScrollY = getScrollY();
  window.addEventListener('scroll', scheduleParallaxUpdate, { passive: true });
  window.addEventListener('resize', refreshParallaxMetrics);
  window.addEventListener('orientationchange', refreshParallaxMetrics);
  window.addEventListener('load', refreshParallaxMetrics, { once: true });
}

function ensureParallaxObserver(): IntersectionObserver | null {
  if (parallaxObserver || !('IntersectionObserver' in window)) {
    return parallaxObserver;
  }

  parallaxObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const root = entry.target as HTMLElement;
        const instance = parallaxInstancesByRoot.get(root);
        if (!instance) {
          return;
        }

        instance.active = entry.isIntersecting;
        if (entry.isIntersecting) {
          lastScrollY = getScrollY();
          applyParallaxStyles(instance);
        } else {
          resetParallaxInstance(instance);
        }
      });
    },
    {
      root: null,
      rootMargin: '25% 0px 25% 0px',
      threshold: 0.01,
    },
  );

  return parallaxObserver;
}

function registerParallaxInstance(root: HTMLElement, bg: HTMLElement, speed: number): void {
  const instance: ParallaxInstance = {
    root,
    bg,
    speed,
    active: false,
    progress: 0,
  };

  parallaxInstances.add(instance);
  parallaxInstancesByRoot.set(root, instance);
  bindParallaxListeners();

  const observer = ensureParallaxObserver();
  if (observer) {
    observer.observe(root);
  }

  instance.active = true;
  lastScrollY = getScrollY();
  applyParallaxStyles(instance);
}

function bindBgImageRefresh(root: HTMLElement): void {
  const bg = root.querySelector<HTMLElement>('.nextora-page-title__bg');
  if (!bg || !bg.style.backgroundImage) {
    return;
  }

  const match = bg.style.backgroundImage.match(/url\(["']?(.+?)["']?\)/);
  if (!match?.[1]) {
    return;
  }

  const img = new Image();
  img.addEventListener(
    'load',
    () => {
      ScrollTrigger.refresh();
    },
    { once: true },
  );
  img.src = match[1];
}

function initRoot(root: HTMLElement): void {
  if (root.getAttribute(INIT_ATTR) === '1') {
    return;
  }
  root.setAttribute(INIT_ATTR, '1');

  const inner = root.querySelector<HTMLElement>('.nextora-page-title__inner');

  if (prefersReducedMotion()) {
    if (inner) {
      clearRevealStyles(inner);
    }
    setReady(root);
    return;
  }

  initScrollReveal(root);
  initParallax(root);
  bindBgImageRefresh(root);
}

function forceRevealPendingRoots(): void {
  document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach((root) => {
    if (root.getAttribute('data-nextora-scroll-reveal') !== '1') {
      return;
    }
    if (root.classList.contains('nextora-page-title--ready')) {
      return;
    }

    const inner = root.querySelector<HTMLElement>('.nextora-page-title__inner');
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
  lastScrollY = getScrollY();
  document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach(initRoot);
  ScrollTrigger.config({ autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load' });
  ScrollTrigger.refresh();
  refreshParallaxMetrics();
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
    lastScrollY = getScrollY();
    ScrollTrigger.refresh();
    refreshParallaxMetrics();
    forceRevealPendingRoots();
  },
  { once: true },
);
