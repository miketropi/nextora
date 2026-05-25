/**
 * Swiper + scroll reveal for `nextora/testimonials`.
 */
import Swiper from 'swiper';
import { A11y, Autoplay, EffectFade, Keyboard, Navigation, Pagination } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

type SwiperOpts = {
  loop?: boolean;
  rewind?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  showNav?: boolean;
  showPagination?: boolean;
  speed?: number;
  effect?: string;
  pauseOnHover?: boolean;
};

const ROOT_SELECTOR = '.nextora-testimonials';
const SCROLL_INIT_ATTR = 'data-nextora-testimonials-scroll-init';

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function getOpts(carousel: HTMLElement): SwiperOpts {
  try {
    return JSON.parse(carousel.getAttribute('data-swiper-opts') || '{}') as SwiperOpts;
  } catch {
    return {};
  }
}

function setReady(section: HTMLElement): void {
  section.classList.remove('nextora-testimonials--loading');
  section.classList.add('nextora-testimonials--ready');
}

function initScrollReveal(section: HTMLElement): void {
  if (section.getAttribute('data-nextora-scroll-reveal') !== '1') {
    return;
  }
  if (section.getAttribute(SCROLL_INIT_ATTR) === '1') {
    return;
  }
  if (prefersReducedMotion()) {
    return;
  }

  section.setAttribute(SCROLL_INIT_ATTR, '1');
  const panel = section.querySelector<HTMLElement>('.nextora-testimonials__heading-panel');
  const carousel = section.querySelector<HTMLElement>('.nextora-testimonials__carousel');
  const targets = [panel, carousel].filter(Boolean) as HTMLElement[];

  if (!targets.length) {
    return;
  }

  gsap.from(targets, {
    opacity: 0,
    y: 28,
    duration: 0.65,
    stagger: 0.08,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 88%',
      once: true,
    },
  });
}

function initSwiper(section: HTMLElement): void {
  const carousel = section.querySelector<HTMLElement>('.nextora-testimonials__carousel');
  if (!carousel) {
    setReady(section);
    return;
  }
  if (carousel.dataset.nextoraTestimonialsInited === '1' || carousel.dataset.nextoraTestimonialsInitPending === '1') {
    return;
  }

  const el = carousel.querySelector<HTMLElement>('.nextora-testimonials__swiper');
  if (!el) {
    setReady(section);
    return;
  }

  const opts = getOpts(carousel);
  const slideCount = el.querySelectorAll('.swiper-slide').length;
  if (slideCount < 1) {
    setReady(section);
    return;
  }

  const showNav = opts.showNav === true;
  const showPagination = opts.showPagination !== false;
  const nextEl = carousel.querySelector<HTMLElement>('.nextora-testimonials__arrow--next');
  const prevEl = carousel.querySelector<HTMLElement>('.nextora-testimonials__arrow--prev');
  const paginationEl = carousel.querySelector<HTMLElement>('.nextora-testimonials__pagination');
  const wantLoop = Boolean(opts.loop) && slideCount > 1;
  const canLoop = wantLoop && slideCount >= 4;
  const useRewind = Boolean(opts.rewind) || (wantLoop && !canLoop);
  const reduced = prefersReducedMotion();
  const effect = opts.effect === 'fade' ? 'fade' : 'slide';
  const modules = [Navigation, Pagination, Autoplay, Keyboard, A11y];
  if (effect === 'fade') {
    modules.push(EffectFade);
  }

  carousel.dataset.nextoraTestimonialsInitPending = '1';

  const tryMount = (tick = 0): void => {
    if (el.clientWidth < 2 && tick < 45) {
      requestAnimationFrame(() => tryMount(tick + 1));
      return;
    }

    // eslint-disable-next-line no-new
    new Swiper(el, {
      modules,
      effect,
      fadeEffect: effect === 'fade' ? { crossFade: true } : undefined,
      loop: canLoop,
      rewind: useRewind,
      speed: reduced ? 0 : typeof opts.speed === 'number' ? opts.speed : 600,
      watchOverflow: true,
      observer: true,
      observeParents: true,
      resizeObserver: true,
      autoplay:
        !reduced && opts.autoplay === true && slideCount > 1
          ? {
              delay: typeof opts.autoplayDelay === 'number' ? opts.autoplayDelay : 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: opts.pauseOnHover !== false,
            }
          : false,
      keyboard: { enabled: true, onlyInViewport: true },
      a11y: { enabled: true },
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

    delete carousel.dataset.nextoraTestimonialsInitPending;
    carousel.dataset.nextoraTestimonialsInited = '1';
    setReady(section);
  };

  tryMount();
}

function initRoot(section: HTMLElement): void {
  initSwiper(section);
  initScrollReveal(section);
}

function initIn(container: Element | Document): void {
  container.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach(initRoot);
}

function run(): void {
  initIn(document);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', run, { once: true });
} else {
  run();
}

window.addEventListener('nextora-testimonials-reinit', () => initIn(document));
