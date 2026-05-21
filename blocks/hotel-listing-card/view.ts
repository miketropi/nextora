/**
 * Scroll reveal for `nextora/hotel-listing-card`.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const INIT_ATTR = 'data-nextora-hotel-listing-card-scroll-init';

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function initRoot(root: HTMLElement) {
  if (root.getAttribute(INIT_ATTR) === '1') {
    return;
  }
  if (prefersReducedMotion()) {
    return;
  }
  if (root.getAttribute('data-nextora-scroll-reveal') !== '1') {
    return;
  }

  const card = root.querySelector<HTMLElement>('.nextora-hlc__card');
  if (!card) {
    return;
  }

  root.setAttribute(INIT_ATTR, '1');

  gsap.from(card, {
    opacity: 0,
    y: 28,
    duration: 0.65,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: root,
      start: 'top 88%',
      once: true,
    },
  });
}

function boot() {
  document
    .querySelectorAll<HTMLElement>('.wp-block-nextora-hotel-listing-card[data-nextora-scroll-reveal="1"]')
    .forEach(initRoot);
}

function onReady() {
  boot();
  ScrollTrigger.refresh();
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
