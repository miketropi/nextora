/**
 * Testimonials (split layout) — content Swiper + CSS media stack + scroll reveal.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import {
	A11y,
	Autoplay,
	EffectFade,
	Keyboard,
	Navigation,
	Pagination,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const SCROLL_INIT_ATTR = 'data-nextora-testimonials-scroll-init';
/** Shrink viewport bottom ~15% so reveal fires near the 85% line (like ScrollTrigger `top 85%`). */
const REVEAL_ROOT_MARGIN = '0px 0px -15% 0px';
const FADE_UP_OFFSET = 28;

type SwiperOpts = {
	effect?: string;
	loop?: boolean;
	autoplay?: boolean;
	autoplayDelay?: number;
	pauseOnHover?: boolean;
	showPagination?: boolean;
	showArrows?: boolean;
	speed?: number;
};

function prefersReducedMotion(): boolean {
	return (
		typeof window !== 'undefined' &&
		window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
	);
}

function getOpts(root: HTMLElement): SwiperOpts {
	try {
		return JSON.parse(root.getAttribute('data-swiper-opts') || '{}') as SwiperOpts;
	} catch {
		return {};
	}
}

function setRevealReady(section: HTMLElement): void {
	section.classList.add('nextora-testimonials--reveal-ready');
	section.classList.remove('nextora-testimonials--reveal-pending');
}

function clearRevealStyles(targets: HTMLElement[]): void {
	if (targets.length === 0) {
		return;
	}
	gsap.set(targets, { clearProps: 'opacity,transform,translate,rotate,scale' });
}

function getContentRevealTargets(section: HTMLElement): HTMLElement[] {
	const contentInner = section.querySelector<HTMLElement>('.nextora-testimonials__content-inner');
	if (!contentInner) {
		return [];
	}

	return Array.from(contentInner.children).filter(
		(child): child is HTMLElement => child instanceof HTMLElement,
	);
}

function initScrollReveal(section: HTMLElement): void {
	if (section.getAttribute('data-nextora-scroll-reveal') !== '1') {
		return;
	}
	if (section.getAttribute(SCROLL_INIT_ATTR) === '1') {
		return;
	}
	section.setAttribute(SCROLL_INIT_ATTR, '1');

	if (prefersReducedMotion()) {
		setRevealReady(section);
		return;
	}

	const contentInner = section.querySelector<HTMLElement>('.nextora-testimonials__content-inner');
	const targets = getContentRevealTargets(section);

	if (!contentInner || targets.length === 0) {
		setRevealReady(section);
		return;
	}

	section.classList.add('nextora-testimonials--reveal-pending');
	gsap.set(targets, { opacity: 0, y: 28, force3D: true });

	let played = false;
	const playReveal = (): void => {
		if (played || section.classList.contains('nextora-testimonials--reveal-ready')) {
			return;
		}
		played = true;

		gsap.to(targets, {
			opacity: 1,
			y: 0,
			duration: 0.95,
			stagger: 0.12,
			ease: 'power3.out',
			onComplete: () => {
				clearRevealStyles(targets);
				setRevealReady(section);
			},
		});
	};

	if (typeof IntersectionObserver === 'undefined') {
		playReveal();
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			const entry = entries[0];
			if (!entry?.isIntersecting) {
				return;
			}
			playReveal();
			observer.disconnect();
		},
		{
			threshold: 0,
			rootMargin: REVEAL_ROOT_MARGIN,
		},
	);

	observer.observe(contentInner);
}

type SlideEffect = 'fade' | 'slide' | 'fadeUp';

function resolveSlideEffect(raw: string | undefined): SlideEffect {
	if (raw === 'slide') {
		return 'slide';
	}
	if (raw === 'fadeUp') {
		return 'fadeUp';
	}
	return 'fade';
}

function initFadeUpSlides(contentEl: HTMLElement): void {
	const slides = contentEl.querySelectorAll<HTMLElement>('.swiper-slide');
	slides.forEach((slide) => {
		gsap.set(slide, { opacity: 0, y: FADE_UP_OFFSET, force3D: true });
	});
	const active = contentEl.querySelector<HTMLElement>('.swiper-slide-active');
	if (active) {
		gsap.set(active, { opacity: 1, y: 0 });
	}
}

function runFadeUpTransition(contentEl: HTMLElement, speedMs: number): void {
	const duration = speedMs / 1000;
	contentEl.querySelectorAll<HTMLElement>('.swiper-slide').forEach((slide) => {
		if (slide.classList.contains('swiper-slide-active')) {
			gsap.to(slide, {
				opacity: 1,
				y: 0,
				duration,
				ease: 'power3.out',
				overwrite: true,
			});
			return;
		}
		gsap.to(slide, {
			opacity: 0,
			y: FADE_UP_OFFSET,
			duration: duration * 0.65,
			ease: 'power2.in',
			overwrite: true,
		});
	});
}

function syncMediaStack(root: HTMLElement, activeIndex: number): void {
	root.querySelectorAll<HTMLElement>('.nextora-testimonials__media-item').forEach((item, index) => {
		item.classList.toggle('is-active', index === activeIndex);
	});
}

function initSwiperRoot(root: HTMLElement): void {
	if (
		root.dataset.nextoraTestimonialsSwiperInited === '1' ||
		root.dataset.nextoraTestimonialsSwiperPending === '1'
	) {
		return;
	}

	const section = root.closest<HTMLElement>('.nextora-testimonials');
	const contentEl = root.querySelector<HTMLElement>('.nextora-testimonials__content-swiper');
	if (!contentEl) {
		section?.classList.remove('nextora-testimonials--loading');
		section?.classList.add('nextora-testimonials--ready');
		if (section) {
			initScrollReveal(section);
		}
		return;
	}

	const slideCount = contentEl.querySelectorAll('.swiper-slide').length;
	if (slideCount < 1) {
		section?.classList.remove('nextora-testimonials--loading');
		section?.classList.add('nextora-testimonials--ready');
		if (section) {
			initScrollReveal(section);
		}
		return;
	}

	const opts = getOpts(root);
	const showArrows = opts.showArrows === true;
	const showPagination = opts.showPagination !== false;
	let effect = resolveSlideEffect(opts.effect);
	const reduced = prefersReducedMotion();
	if (effect === 'fadeUp' && reduced) {
		effect = 'slide';
	}
	const useLoop = Boolean(opts.loop) && slideCount > 1;
	const speed = typeof opts.speed === 'number' ? opts.speed : 600;

	root.style.setProperty('--nextora-testimonials-fade-speed', `${speed}ms`);

	const prevEl = section?.querySelector<HTMLElement>('.nextora-testimonials__arrow--prev');
	const nextEl = section?.querySelector<HTMLElement>('.nextora-testimonials__arrow--next');
	const paginationEl = section?.querySelector<HTMLElement>('.nextora-testimonials__pagination');

	root.dataset.nextoraTestimonialsSwiperPending = '1';

	const finishSection = (): void => {
		delete root.dataset.nextoraTestimonialsSwiperPending;
		root.dataset.nextoraTestimonialsSwiperInited = '1';
		section?.classList.remove('nextora-testimonials--loading');
		section?.classList.add('nextora-testimonials--ready');
		if (section) {
			initScrollReveal(section);
		}
		scheduleScrollRefresh();
	};

	const tryMount = (tick = 0): void => {
		if (contentEl.clientWidth < 2 && tick < 60) {
			requestAnimationFrame(() => tryMount(tick + 1));
			return;
		}

		const modules = [Pagination, Autoplay, Keyboard, A11y];
		const swiperEffect = effect === 'fadeUp' ? 'slide' : effect;
		if (effect === 'fade') {
			modules.push(EffectFade);
		}
		if (showArrows && prevEl && nextEl) {
			modules.push(Navigation);
		}

		const swiperSpeed = effect === 'fadeUp' ? 0 : speed;

		const contentSwiper = new Swiper(contentEl, {
			modules,
			effect: swiperEffect,
			...(effect === 'fade' ? { fadeEffect: { crossFade: true } } : {}),
			slidesPerView: 1,
			loop: useLoop,
			speed: swiperSpeed,
			watchOverflow: true,
			observer: true,
			observeParents: true,
			resizeObserver: true,
			updateOnWindowResize: true,
			autoplay:
				!reduced && opts.autoplay === true
					? {
							delay: typeof opts.autoplayDelay === 'number' ? opts.autoplayDelay : 6000,
							disableOnInteraction: false,
							pauseOnMouseEnter: opts.pauseOnHover !== false,
						}
					: false,
			keyboard: { enabled: true, onlyInViewport: true },
			a11y: {
				enabled: true,
				prevSlideMessage: 'Previous testimonial',
				nextSlideMessage: 'Next testimonial',
				paginationBulletMessage: 'Go to slide {{index}}',
			},
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

		const syncMedia = (): void => {
			const targetIndex = useLoop ? contentSwiper.realIndex : contentSwiper.activeIndex;
			syncMediaStack(root, targetIndex);
		};

		if (effect === 'fadeUp') {
			initFadeUpSlides(contentEl);
			contentSwiper.on('slideChangeTransitionStart', () => {
				runFadeUpTransition(contentEl, speed);
				syncMedia();
			});
		} else {
			contentSwiper.on('slideChangeTransitionStart', syncMedia);
		}
		contentSwiper.on('slideChange', syncMedia);
		syncMedia();

		scheduleScrollRefresh();
		window.setTimeout(finishSection, 220);
	};

	tryMount();
}

let pendingScrollRefresh = false;

function scheduleScrollRefresh(): void {
	if (pendingScrollRefresh) {
		return;
	}
	pendingScrollRefresh = true;
	requestAnimationFrame(() => {
		pendingScrollRefresh = false;
		ScrollTrigger.refresh();
	});
}

function initIn(container: Element | Document): void {
	container.querySelectorAll<HTMLElement>('.nextora-testimonials__root').forEach(initSwiperRoot);
	scheduleScrollRefresh();
}

function run(): void {
	initIn(document);
	ScrollTrigger.config({ autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize' });
	ScrollTrigger.refresh();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', run, { once: true });
} else {
	run();
}

window.addEventListener(
	'load',
	() => {
		ScrollTrigger.refresh(true);
	},
	{ once: true },
);
window.addEventListener('nextora-testimonials-reinit', () => initIn(document));
