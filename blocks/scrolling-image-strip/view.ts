/**
 * Scrolling image strip — marquee fill + scroll reveal (front end only).
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ROOT_SELECTOR = '.nextora-sis:not([data-nextora-sis-ready])';
const READY_ATTR = 'data-nextora-sis-ready';
const PRIMARY_HALF_SEL = '[data-nextora-sis-half="primary"]';
const DUPLICATE_HALF_SEL = '[data-nextora-sis-half="duplicate"]';
const TRACK_SEL = '.nextora-sis__track';
const REVEAL_START_RATIO = 0.88;
const REVEAL_FALLBACK_MS = 1800;

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
  );
}

// ── Image readiness ──

function whenImagesReady(root: HTMLElement): Promise<void> {
  const imgs = [...root.querySelectorAll<HTMLImageElement>('img')];
  if (imgs.length === 0) return Promise.resolve();

  imgs.forEach((img) => {
    if (img.loading === 'lazy') {
      img.loading = 'eager';
    }
  });

  const imagePromises = imgs.map(
    (img) =>
      new Promise<void>((resolve) => {
        if (img.complete && img.naturalWidth > 0) {
          resolve();
          return;
        }
        if (typeof img.decode === 'function') {
          img.decode()
            .then(() => resolve())
            .catch(() => resolve());
          return;
        }
        const done = (): void => {
          img.removeEventListener('load', done);
          img.removeEventListener('error', done);
          resolve();
        };
        img.addEventListener('load', done, { once: true });
        img.addEventListener('error', done, { once: true });
      }),
  );

  const timeoutPromise = new Promise<void>((resolve) => {
    setTimeout(resolve, 600);
  });

  return Promise.race([Promise.all(imagePromises).then(() => undefined), timeoutPromise]);
}

// ── Marquee fill ──

function fillHalf(half: HTMLElement, minWidth: number): void {
  let template = half.dataset.nextoraSisTemplate ?? '';
  if (template === '') {
    template = half.innerHTML.trim();
    if (template === '') return;
    half.dataset.nextoraSisTemplate = template;
  } else {
    half.innerHTML = template;
  }

  let safety = 0;
  while (half.scrollWidth < minWidth && safety < 64) {
    half.insertAdjacentHTML('beforeend', template);
    safety += 1;
  }
}

function syncDuplicateHalf(primary: HTMLElement, duplicate: HTMLElement): void {
  duplicate.innerHTML = primary.innerHTML;
  duplicate.setAttribute('aria-hidden', 'true');
}

function fillScrollingImageStrip(root: HTMLElement): void {
  const track = root.querySelector<HTMLElement>(TRACK_SEL);
  const primary = root.querySelector<HTMLElement>(PRIMARY_HALF_SEL);
  const duplicate = root.querySelector<HTMLElement>(DUPLICATE_HALF_SEL);

  if (!track || !primary || !duplicate) return;
  if (prefersReducedMotion()) return;

  const minWidth = Math.max(track.clientWidth, 1);
  fillHalf(primary, minWidth);
  syncDuplicateHalf(primary, duplicate);
}

// ── Scroll reveal ──

function initScrollReveal(root: HTMLElement): void {
  if (root.getAttribute('data-nextora-scroll-reveal') !== '1') return;
  if (prefersReducedMotion()) {
    root.classList.add('nextora-sis--ready');
    root.classList.remove('nextora-sis--reveal-pending');
    return;
  }

  root.classList.add('nextora-sis--reveal-pending');

  const rect = root.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  if (rect.top <= vh * REVEAL_START_RATIO && rect.bottom > 0) {
    root.classList.add('nextora-sis--ready');
    root.classList.remove('nextora-sis--reveal-pending');
    return;
  }

  const fallbackTimer = window.setTimeout(() => {
    if (root.classList.contains('nextora-sis--ready')) return;
    gsap.killTweensOf(root);
    root.classList.add('nextora-sis--ready');
    root.classList.remove('nextora-sis--reveal-pending');
  }, REVEAL_FALLBACK_MS);

  ScrollTrigger.create({
    trigger: root,
    start: `top ${Math.round(REVEAL_START_RATIO * 100)}%`,
    once: true,
    onEnter: () => {
      window.clearTimeout(fallbackTimer);
      gsap.fromTo(
        root,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power3.out',
          onComplete: () => {
            root.classList.add('nextora-sis--ready');
            root.classList.remove('nextora-sis--reveal-pending');
          },
        },
      );
    },
  });
}

// ── Init ──

async function initRoot(root: HTMLElement): Promise<void> {
  if (root.getAttribute(READY_ATTR) === '1') return;

  await whenImagesReady(root);
  fillScrollingImageStrip(root);
  root.setAttribute(READY_ATTR, '1');
  root.classList.remove('nextora-sis--loading');
  root.classList.add('nextora-sis--ready');

  initScrollReveal(root);
}

// ── Resize observer ──

function observeResize(root: HTMLElement): void {
  const track = root.querySelector<HTMLElement>(TRACK_SEL);
  if (!track || typeof ResizeObserver === 'undefined') return;

  let frame = 0;
  let lastWidth = Math.round(track.getBoundingClientRect().width);

  const observer = new ResizeObserver((entries) => {
    if (prefersReducedMotion()) return;
    for (const entry of entries) {
      const newWidth = Math.round(entry.contentRect.width);
      if (newWidth === lastWidth || newWidth === 0) continue;
      lastWidth = newWidth;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        fillScrollingImageStrip(root);
      });
    }
  });
  observer.observe(track);
}

// ── Boot ──

function initAll(): void {
  document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach((root) => {
    void initRoot(root).then(() => observeResize(root));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll, { once: true });
} else {
  initAll();
}
