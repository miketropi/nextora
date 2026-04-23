/**
 * Parallax (GSAP) for `nextora/call-to-action` when image/video + parallax is enabled.
 *
 * Dynamic blocks often do not auto-enqueue `viewScript`; render.php enqueues this file
 * when needed. We also refresh ScrollTrigger after images/layout settle.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const INIT = 'data-nextora-cta-gsap';

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function initRoot(root: HTMLElement) {
  if (root.getAttribute(INIT) === '1') {
    return;
  }
  if (!root.classList.contains('nextora-cta--parallax')) {
    return;
  }
  if (prefersReducedMotion()) {
    return;
  }
  const bg = root.querySelector<HTMLElement>('.nextora-cta__bg');
  if (!bg) {
    return;
  }
  const raw = root.getAttribute('data-nextora-cta-strength') || '30';
  const n = Math.max(0, Math.min(100, parseInt(raw, 10) || 30));
  const yPx = (n / 100) * 80;
  root.setAttribute(INIT, '1');
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

function bindBgImageRefresh(root: HTMLElement) {
  const img = root.querySelector<HTMLImageElement>('.nextora-cta__bg .nextora-cta__img');
  if (!img || img.complete) {
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

function boot() {
  document.querySelectorAll<HTMLElement>('.nextora-cta--parallax').forEach((el) => {
    initRoot(el);
    bindBgImageRefresh(el);
  });
  ScrollTrigger.config({ autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load' });
  ScrollTrigger.refresh();
}

function onReady() {
  boot();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onReady, { once: true });
} else {
  onReady();
}

window.addEventListener(
  'load',
  () => {
    boot();
    ScrollTrigger.refresh();
  },
  { once: true },
);
