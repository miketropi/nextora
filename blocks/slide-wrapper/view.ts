/**
 * Swiper 11 init for `nextora/slide-wrapper` (front end only).
 */
import Swiper from 'swiper';
import { A11y, Autoplay, EffectFade, Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './style.css';

type SwiperOpts = {
  loop?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  showNav?: boolean;
  showPagination?: boolean;
  spaceBetween?: number;
  speed?: number;
  slidesPerView?: number;
  slidesPerGroup?: number;
  effect?: string;
};

function getOpts(root: HTMLElement): SwiperOpts {
  try {
    return JSON.parse(root.getAttribute('data-swiper-opts') || '{}') as SwiperOpts;
  } catch {
    return {};
  }
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function initIn(container: Element | Document) {
  const roots = container.querySelectorAll<HTMLElement>('.nextora-slider');
  roots.forEach((root) => {
    if (root.dataset.swiperInited === '1' || root.dataset.swiperInitPending === '1') {
      return;
    }

    const el = root.querySelector<HTMLElement>('.nextora-slider__swiper');
    if (!el) {
      return;
    }

    const opts = getOpts(root);
    const reduced = prefersReducedMotion();
    const showNav = opts.showNav !== false;
    const showPagination = opts.showPagination !== false;
    const nextEl = root.querySelector<HTMLElement>('.nextora-slider__arrow--next');
    const prevEl = root.querySelector<HTMLElement>('.nextora-slider__arrow--prev');
    const paginationEl = root.querySelector<HTMLElement>('.nextora-slider__pagination');
    const slideCount = el.querySelectorAll('.swiper-slide').length;

    if (slideCount < 1) {
      return;
    }

    const spv = Math.max(1, Math.min(typeof opts.slidesPerView === 'number' ? opts.slidesPerView : 1, slideCount));
    const spg = Math.max(1, typeof opts.slidesPerGroup === 'number' ? opts.slidesPerGroup : 1);
    const gap = typeof opts.spaceBetween === 'number' && !Number.isNaN(opts.spaceBetween) ? opts.spaceBetween : 0;
    const wantLoop = Boolean(opts.loop) && slideCount > 1;
    const useFade = opts.effect === 'fade' && slideCount > 1;

    const modules = [Navigation, Pagination, Autoplay, Keyboard, A11y];
    if (useFade) {
      modules.push(EffectFade);
    }

    root.dataset.swiperInitPending = '1';

    const tryMount = (tick = 0): void => {
      if (el.clientWidth < 2 && tick < 45) {
        requestAnimationFrame(() => tryMount(tick + 1));
        return;
      }

      const speed = reduced ? 0 : typeof opts.speed === 'number' ? opts.speed : 500;

      // eslint-disable-next-line no-new
      const swiper = new Swiper(el, {
        modules,
        loop: wantLoop,
        effect: useFade ? 'fade' : 'slide',
        fadeEffect: useFade ? { crossFade: true } : undefined,
        speed,
        spaceBetween: Math.max(0, gap),
        slidesPerView: spv,
        slidesPerGroup: spg,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        resizeObserver: true,
        updateOnWindowResize: true,
        breakpointsBase: 'container',
        autoplay:
          !reduced && opts.autoplay === true
            ? {
                delay: typeof opts.autoplayDelay === 'number' ? opts.autoplayDelay : 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: opts.pauseOnHover !== false,
              }
            : false,
        keyboard: { enabled: true, onlyInViewport: true },
        a11y: {
          enabled: true,
          nextSlideMessage: 'Next slide',
          prevSlideMessage: 'Previous slide',
          paginationBulletMessage: 'Go to slide {{index}}',
        },
        ...(showNav && prevEl && nextEl ? { navigation: { nextEl, prevEl } } : {}),
        ...(showPagination && paginationEl
          ? {
              pagination: {
                el: paginationEl,
                clickable: true,
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
      root.classList.remove('nextora-slider--loading');
      root.classList.add('nextora-slider--ready');
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

window.addEventListener('nextora-slide-wrapper-reinit', () => initIn(document));
