export {};

/**
 * Expanding Cards — front-end scroll animation.
 * Uses IntersectionObserver for staggered card reveal.
 */

const INITED_ATTR = 'data-nextora-excards-inited';
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initExpandingCardScroll(root: HTMLElement): void {
  root.classList.add('has-scroll-animation');

  if (REDUCED_MOTION) {
    root.classList.add('is-visible');
    return;
  }

  if (root.getAttribute('data-nextora-scroll-reveal') !== '1') {
    root.classList.add('is-visible');
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    },
  );

  observer.observe(root);
}

function initRoot(root: HTMLElement): void {
  if (root.hasAttribute(INITED_ATTR)) return;
  root.setAttribute(INITED_ATTR, '1');
  initExpandingCardScroll(root);
}

function initAll(): void {
  document
    .querySelectorAll<HTMLElement>('.wp-block-nextora-expanding-cards')
    .forEach((root) => initRoot(root));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

window.addEventListener('nextora-expanding-cards-reinit', () => {
  document
    .querySelectorAll<HTMLElement>('.wp-block-nextora-expanding-cards')
    .forEach((root) => {
      if (root.hasAttribute(INITED_ATTR)) {
        root.removeAttribute(INITED_ATTR);
      }
      initRoot(root);
    });
});
