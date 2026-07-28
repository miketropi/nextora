/**
 * nextora/related-posts — front-end view script.
 *
 * Mouse-follow floating thumbnail on card hover, powered by GSAP quickTo.
 * List layout: thumbnail appears only on hover. Grid layout: floating
 * enlarged thumbnail overlays the static card image.
 *
 * Respects prefers-reduced-motion — falls back to static display.
 */
import gsap from 'gsap';

export {};

const INIT_ATTR = 'data-nextora-rp-inited';
const THUMB_ATTR = 'data-nextora-rp-thumb';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function isTouchDevice(): boolean {
  return (
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0)
  );
}

// ---------------------------------------------------------------------------
// Create floating thumbnail element (singleton, reused across cards)
// ---------------------------------------------------------------------------

function createThumbnail(): HTMLDivElement {
  const el = document.createElement('div');
  el.className = 'nextora-related-posts__floating-thumb';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = '<img class="nextora-related-posts__floating-thumb-img" src="" alt="" />';
  el.style.cssText =
    'position:fixed;top:0;left:0;pointer-events:none;z-index:9999;';
  document.body.appendChild(el);
  return el;
}

// ---------------------------------------------------------------------------
// Card hover handlers
// ---------------------------------------------------------------------------

function bindCard(
  card: HTMLElement,
  thumbEl: HTMLDivElement,
  thumbImg: HTMLImageElement,
  reduceMotion: boolean,
) {
  const thumbUrl = card.getAttribute(THUMB_ATTR);
  if (!thumbUrl) return;

  // GSAP quickTo instances for position tracking
  const xTo = gsap.quickTo(thumbEl, 'x', { duration: 0.15, ease: 'power1.out' });
  const yTo = gsap.quickTo(thumbEl, 'y', { duration: 0.15, ease: 'power1.out' });

  // Thumbnail dimensions (matches CSS: 220×140px)
  const THUMB_W = 220;
  const THUMB_H = 140;
  const GAP = 24;
  const EDGE_PAD = 20;

  let active = false;

  function getThumbPos(cx: number, cy: number): { x: number; y: number } {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Default: thumbnail to the upper-right of cursor
    let x = cx + GAP;
    let y = cy - THUMB_H / 2;

    // Flip to left side if overflowing right edge
    if (x + THUMB_W > vw - EDGE_PAD) {
      x = cx - THUMB_W - GAP;
    }

    // Clamp vertical to viewport
    if (y < EDGE_PAD) {
      y = EDGE_PAD;
    } else if (y + THUMB_H > vh - EDGE_PAD) {
      y = vh - THUMB_H - EDGE_PAD;
    }

    return { x, y };
  }

  function onMove(e: MouseEvent): void {
    const { x, y } = getThumbPos(e.clientX, e.clientY);
    xTo(x);
    yTo(y);
  }

  function onEnter(e: MouseEvent): void {
    if (active || reduceMotion || isTouchDevice()) return;
    active = true;

    // Set image source
    if (thumbImg.src !== thumbUrl!) {
      thumbImg.src = thumbUrl!;
    }

    // Position + reveal in a single tween (avoids transform conflict between set and fromTo)
    const { x, y } = getThumbPos(e.clientX, e.clientY);
    gsap.fromTo(
      thumbEl,
      { opacity: 0, scale: 0.85, x, y },
      { opacity: 1, scale: 1, x, y, duration: 0.25, ease: 'power2.out' },
    );

    // Card accent
    gsap.to(card, {
      borderLeftColor: 'var(--wp--preset--color--primary, currentColor)',
      backgroundColor: 'rgba(0,0,0,0.015)',
      duration: 0.3,
      ease: 'power2.out',
    });

    card.addEventListener('mousemove', onMove, { passive: true });
  }

  function onLeave(): void {
    if (!active) return;
    active = false;

    card.removeEventListener('mousemove', onMove);

    gsap.killTweensOf(thumbEl, 'opacity,scale');
    gsap.to(thumbEl, {
      opacity: 0,
      scale: 0.9,
      duration: 0.2,
      ease: 'power2.in',
    });

    // Reset card accent
    gsap.to(card, {
      borderLeftColor: 'transparent',
      backgroundColor: 'rgba(0,0,0,0)',
      duration: 0.3,
      ease: 'power2.out',
    });
  }

  card.addEventListener('mouseenter', onEnter);
  card.addEventListener('mouseleave', onLeave);

  // Store cleanup reference
  (card as any).__rpCleanup = () => {
    card.removeEventListener('mouseenter', onEnter);
    card.removeEventListener('mouseleave', onLeave);
    card.removeEventListener('mousemove', onMove);
  };
}

// ---------------------------------------------------------------------------
// Init per root
// ---------------------------------------------------------------------------

function initRoot(root: HTMLElement): void {
  if (root.getAttribute(INIT_ATTR) === '1') return;
  root.setAttribute(INIT_ATTR, '1');

  const reduceMotion = prefersReducedMotion();

  // Touch / reduced-motion: no floating thumbnails, just static display
  if (isTouchDevice() || reduceMotion) {
    // Ensure cards have proper border transition via CSS fallback
    return;
  }

  const thumbEl = createThumbnail();
  const thumbImg = thumbEl.querySelector<HTMLImageElement>('.nextora-related-posts__floating-thumb-img');
  if (!thumbImg) return;

  const cards = root.querySelectorAll<HTMLElement>('.nextora-related-posts__card');

  cards.forEach((card) => bindCard(card, thumbEl, thumbImg, reduceMotion));
}

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------

function boot(): void {
  document.querySelectorAll<HTMLElement>('.nextora-related-posts').forEach(initRoot);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
