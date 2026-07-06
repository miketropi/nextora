/**
 * Events block — scroll reveal stagger for list items + Swiper slider for template1.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

const SCROLL_INIT_ATTR = 'data-nextora-event-scroll-init';
const REVEAL_START_RATIO = 0.82;
const REVEAL_FALLBACK_MS = 1800;

type SwiperOpts = {
	autoplay?: boolean;
	autoplayDelay?: number;
	loop?: boolean;
	speed?: number;
	showArrows?: boolean;
	showPagination?: boolean;
	slidesPerView?: number;
	spaceBetween?: number;
	tabletSlides?: number;
	mobileSlides?: number;
};

function prefersReducedMotion(): boolean {
	return (
		typeof window !== 'undefined' &&
		window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
	);
}

function isRevealStartPassed(root: HTMLElement): boolean {
	const rect = root.getBoundingClientRect();
	const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
	return rect.top <= viewportHeight * REVEAL_START_RATIO && rect.bottom > 0;
}

function setRevealReady(root: HTMLElement): void {
	root.classList.add('nextora-event--reveal-ready');
	root.classList.remove('nextora-event--reveal-pending');
}

function clearRevealStyles(targets: HTMLElement[]): void {
	if (targets.length === 0) {
		return;
	}
	gsap.set(targets, { clearProps: 'opacity,transform,translate,rotate,scale' });
}

function scheduleRevealFallback(root: HTMLElement, targets: HTMLElement[]): void {
	window.setTimeout(() => {
		if (root.classList.contains('nextora-event--reveal-ready')) {
			return;
		}
		gsap.killTweensOf(targets);
		clearRevealStyles(targets);
		setRevealReady(root);
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
		setRevealReady(root);
		return;
	}

	const items = Array.from(root.querySelectorAll<HTMLElement>('.nextora-event__item'));
	const targets = items;

	if (targets.length === 0) {
		setRevealReady(root);
		return;
	}

	root.classList.add('nextora-event--reveal-pending');
	gsap.set(targets, { opacity: 0, y: 44, force3D: true });

	const playReveal = (): void => {
		if (root.classList.contains('nextora-event--reveal-ready')) {
			return;
		}
		gsap.to(targets, {
			opacity: 1,
			y: 0,
			duration: 0.7,
			stagger: 0.1,
			ease: 'power3.out',
			onComplete: () => {
				clearRevealStyles(targets);
				setRevealReady(root);
			},
		});
	};

	scheduleRevealFallback(root, targets);

	if (isRevealStartPassed(root)) {
		playReveal();
		return;
	}

	ScrollTrigger.create({
		trigger: root,
		start: `top ${REVEAL_START_RATIO * 100}%`,
		once: true,
		onEnter: playReveal,
	});

	ScrollTrigger.refresh();

	if (isRevealStartPassed(root)) {
		playReveal();
	}
}

// --- Template 1: Swiper slider ---

function parseOpts(root: HTMLElement): SwiperOpts {
	try {
		return JSON.parse(root.getAttribute('data-swiper-opts') || '{}') as SwiperOpts;
	} catch {
		return {};
	}
}

function breakpointsForSlides(
	desktop: number,
	tablet: number,
	mobile: number,
	gap: number,
): Record<number, { slidesPerView: number; spaceBetween: number }> {
	return {
		320: { slidesPerView: mobile, spaceBetween: gap },
		640: { slidesPerView: tablet, spaceBetween: gap },
		1024: { slidesPerView: desktop, spaceBetween: gap },
	};
}

function initTemplate1Swiper(root: HTMLElement): void {
	const carouselRoot = root.querySelector<HTMLElement>('.nextora-event__carousel-root');
	if (!carouselRoot) {
		return;
	}

	if (
		carouselRoot.dataset.nextoraEventSwiperInited === '1' ||
		carouselRoot.dataset.nextoraEventSwiperPending === '1'
	) {
		return;
	}

	const el = carouselRoot.querySelector<HTMLElement>('.nextora-event__swiper');
	if (!el) {
		return;
	}

	const opts = parseOpts(carouselRoot);
	const slideCount = el.querySelectorAll('.swiper-slide').length;
	if (slideCount < 1) {
		root.classList.remove('nextora-event--loading');
		root.classList.add('nextora-event--ready');
		return;
	}

	const showArrows = opts.showArrows === true;
	const showPagination = opts.showPagination !== false;
	const slidesPerView = typeof opts.slidesPerView === 'number' ? opts.slidesPerView : 3;
	const spaceBetween = typeof opts.spaceBetween === 'number' ? opts.spaceBetween : 24;
	const tabletSlides = typeof opts.tabletSlides === 'number' ? opts.tabletSlides : 2;
	const mobileSlides = typeof opts.mobileSlides === 'number' ? opts.mobileSlides : 1;

	const prevEl = root.querySelector<HTMLElement>('.nextora-event__arrow--prev');
	const nextEl = root.querySelector<HTMLElement>('.nextora-event__arrow--next');
	const paginationEl = root.querySelector<HTMLElement>('.nextora-event__pagination');

	const reduced = prefersReducedMotion();
	const useLoop = Boolean(opts.loop) && slideCount > 1;

	carouselRoot.dataset.nextoraEventSwiperPending = '1';

	const finish = (): void => {
		delete carouselRoot.dataset.nextoraEventSwiperPending;
		carouselRoot.dataset.nextoraEventSwiperInited = '1';
		root.classList.remove('nextora-event--loading');
		root.classList.add('nextora-event--ready');
		ScrollTrigger.refresh();
	};

	const tryMount = (tick = 0): void => {
		if (el.clientWidth < 2 && tick < 60) {
			requestAnimationFrame(() => tryMount(tick + 1));
			return;
		}

		const modules = [Pagination, Autoplay, Keyboard, A11y];
		if (showArrows && prevEl && nextEl) {
			modules.push(Navigation);
		}

		// eslint-disable-next-line no-new
		new Swiper(el, {
			modules,
			slidesPerView: 1,
			spaceBetween,
			loop: useLoop,
			speed: typeof opts.speed === 'number' ? opts.speed : 600,
			watchOverflow: true,
			observer: true,
			observeParents: true,
			resizeObserver: true,
			updateOnWindowResize: true,
			autoplay:
				!reduced && opts.autoplay === true
					? {
							delay:
								typeof opts.autoplayDelay === 'number' ? opts.autoplayDelay : 5000,
							disableOnInteraction: false,
							pauseOnMouseEnter: true,
						}
					: false,
			keyboard: { enabled: true, onlyInViewport: true },
			a11y: {
				enabled: true,
				prevSlideMessage: 'Previous events',
				nextSlideMessage: 'Next events',
				paginationBulletMessage: 'Go to slide {{index}}',
			},
			breakpoints: breakpointsForSlides(slidesPerView, tabletSlides, mobileSlides, spaceBetween),
			...(showArrows && prevEl && nextEl ? { navigation: { nextEl, prevEl } } : {}),
			...(showPagination && paginationEl
				? {
						pagination: {
							el: paginationEl,
							clickable: true,
							type: 'bullets',
						},
					}
				: {}),
		});

		requestAnimationFrame(() => ScrollTrigger.refresh());
		window.setTimeout(finish, 220);
	};

	tryMount();
}

function initRoot(root: HTMLElement): void {
	if (root.getAttribute('data-nextora-event-template') === 'template1') {
		initTemplate1Swiper(root);
	} else {
		initScrollReveal(root);
	}
}

function init(container: Element | Document = document): void {
	container
		.querySelectorAll<HTMLElement>('.wp-block-nextora-event, .nextora-event')
		.forEach((root) => initRoot(root));
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => init());
} else {
	init();
}

export { init };
