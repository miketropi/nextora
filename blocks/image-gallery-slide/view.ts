/**
 * Swiper 11 init for `nextora/image-gallery-slide` (front end only, bundled in view.js).
 */
import Swiper from 'swiper';
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

type SwiperOpts = {
  loop?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  showNav?: boolean;
  showPagination?: boolean;
  spaceBetween?: number;
  speed?: number;
  slidesPerView?: number;
  slidesPerViewTablet?: number;
  slidesPerViewDesktop?: number;
  breakpoints?: Record<string, { slidesPerView?: number; spaceBetween?: number }>;
};

/** Avoid float noise (1.0800000000000001) from JSON/PHP. */
function roundSpv(n: number): number {
  return Math.round(n * 1000) / 1000;
}

function isEffectivelyInteger(n: number): boolean {
  return Math.abs(n - Math.round(n)) < 0.0001;
}

/** JSON from PHP has string keys ("480") — Swiper expects numeric min-widths. */
function normalizeBreakpoints(
  raw: SwiperOpts['breakpoints'] | undefined,
  fallback: Record<number, { slidesPerView: number; spaceBetween: number }>,
): Record<number, { slidesPerView?: number; spaceBetween?: number }> {
  if (raw && typeof raw === 'object') {
    const out: Record<number, { slidesPerView?: number; spaceBetween?: number }> = {};
    for (const [k, v] of Object.entries(raw)) {
      const w = parseInt(String(k), 10);
      if (Number.isFinite(w) && w > 0 && v && typeof v === 'object') {
        const spv = typeof v.slidesPerView === 'number' && !Number.isNaN(v.slidesPerView) ? roundSpv(v.slidesPerView) : undefined;
        const sb =
          v && typeof (v as { spaceBetween?: number }).spaceBetween === 'number'
            ? (v as { spaceBetween: number }).spaceBetween
            : undefined;
        out[w] = {
          ...(spv !== undefined ? { slidesPerView: spv } : {}),
          ...(sb !== undefined ? { spaceBetween: sb } : {}),
        };
      }
    }
    if (Object.keys(out).length > 0) {
      return out;
    }
  }
  return fallback;
}

function getOpts(root: HTMLElement): SwiperOpts {
  try {
    return JSON.parse(root.getAttribute('data-swiper-opts') || '{}') as SwiperOpts;
  } catch {
    return {};
  }
}

function initIn(container: Element | Document) {
  const roots = container.querySelectorAll<HTMLElement>('.nextora-ig');
  roots.forEach((root) => {
    if (root.dataset.swiperInited === '1' || root.dataset.swiperInitPending === '1') {
      return;
    }
    const el = root.querySelector<HTMLElement>('.nextora-ig__swiper');
    if (!el) {
      return;
    }
    const opts = getOpts(root);
    const showNav = opts.showNav !== false;
    const showPagination = opts.showPagination !== false;
    const nextEl = root.querySelector<HTMLElement>('.nextora-ig__arrow--next');
    const prevEl = root.querySelector<HTMLElement>('.nextora-ig__arrow--prev');
    const paginationEl = root.querySelector<HTMLElement>('.nextora-ig__pagination');
    const slideCount = el.querySelectorAll('.swiper-slide').length;

    if (slideCount < 1) {
      return;
    }

    const baseSpv = roundSpv(
      typeof opts.slidesPerView === 'number' && !Number.isNaN(opts.slidesPerView) ? opts.slidesPerView : 1,
    );
    const tabletSpv = roundSpv(
      typeof opts.slidesPerViewTablet === 'number' && !Number.isNaN(opts.slidesPerViewTablet)
        ? opts.slidesPerViewTablet
        : 1.08,
    );
    const desktopSpv = roundSpv(
      typeof opts.slidesPerViewDesktop === 'number' && !Number.isNaN(opts.slidesPerViewDesktop)
        ? opts.slidesPerViewDesktop
        : 1.25,
    );
    const gap = typeof opts.spaceBetween === 'number' && !Number.isNaN(opts.spaceBetween) ? opts.spaceBetween : 12;

    const cap = (n: number) => Math.max(1, Math.min(roundSpv(n), Math.max(1, slideCount)));

    const defaultBreakpoints: Record<number, { slidesPerView: number; spaceBetween: number }> = {
      480: { slidesPerView: cap(tabletSpv), spaceBetween: 12 },
      900: { slidesPerView: cap(desktopSpv), spaceBetween: Math.max(0, gap) },
    };

    /**
     * Swiper's `loop` + fractional `slidesPerView` (e.g. 1.08) breaks internal slide width math
     * (observed: slide width ~1e7px on mobile/tablet). Use `rewind` for infinite feel instead.
     */
    const wantLoop = Boolean(opts.loop) && slideCount > 1;
    const anyFractionalSpv =
      !isEffectivelyInteger(cap(baseSpv)) ||
      !isEffectivelyInteger(cap(tabletSpv)) ||
      !isEffectivelyInteger(cap(desktopSpv));
    const canLoop = wantLoop && slideCount >= 4 && !anyFractionalSpv;
    const useRewind = wantLoop && !canLoop;

    // Do not set `navigation` or `pagination` to `undefined`. Swiper merges that into
    // `params` and overwrites the module defaults, so later `params.pagination.*` throws
    // and the instance breaks. Omit keys so defaults (no DOM el → effectively off) apply.
    root.dataset.swiperInitPending = '1';

    const tryMount = (tick = 0): void => {
      // Wait until the carousel has a real width (flex columns, lazy images, first paint).
      if (el.clientWidth < 2 && tick < 45) {
        requestAnimationFrame(() => tryMount(tick + 1));
        return;
      }

      // eslint-disable-next-line no-new
      const swiper = new Swiper(el, {
        modules: [Navigation, Pagination, Autoplay, Keyboard, A11y],
        loop: canLoop,
        rewind: useRewind,
        speed: typeof opts.speed === 'number' ? opts.speed : 400,
        spaceBetween: Math.max(0, gap),
        slidesPerView: cap(baseSpv),
        watchOverflow: true,
        observer: true,
        observeParents: true,
        resizeObserver: true,
        updateOnWindowResize: true,
        // Match slidesPerView to the carousel’s width (columns / sidebars), not only viewport.
        breakpointsBase: 'container',
        autoplay:
          opts.autoplay === true
            ? {
                delay: typeof opts.autoplayDelay === 'number' ? opts.autoplayDelay : 4500,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }
            : false,
        keyboard: { enabled: true, onlyInViewport: true },
        a11y: {
          enabled: true,
          nextSlideMessage: 'Next slide',
          prevSlideMessage: 'Previous slide',
          paginationBulletMessage: 'Go to slide {{index}}',
        },
        breakpoints: normalizeBreakpoints(opts.breakpoints, defaultBreakpoints),
        ...(showNav && prevEl && nextEl ? { navigation: { nextEl, prevEl } } : {}),
        ...(showPagination && paginationEl
          ? {
              pagination: {
                el: paginationEl,
                clickable: true,
                dynamicBullets: true,
              },
            }
          : {}),
      });

      const refresh = () => {
        swiper.update();
      };
      requestAnimationFrame(refresh);
      requestAnimationFrame(() => requestAnimationFrame(refresh));
      window.setTimeout(refresh, 200);

      delete root.dataset.swiperInitPending;
      root.dataset.swiperInited = '1';
    };
    tryMount();
  });
}

function run() {
  initIn(document);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', run, { once: true });
} else {
  run();
}

/** Optional: call after client-side re-render. */
window.addEventListener('nextora-image-gallery-reinit', () => initIn(document));
