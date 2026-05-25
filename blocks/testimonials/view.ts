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
const REVEAL_START_RATIO = 0.85;
const REVEAL_FALLBACK_MS = 1800;

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

function isRevealStartPassed(section: HTMLElement): boolean {
	const rect = section.getBoundingClientRect();
	const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
	return rect.top <= viewportHeight * REVEAL_START_RATIO && rect.bottom > 0;
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

function scheduleRevealFallback(section: HTMLElement, targets: HTMLElement[]): void {
	window.setTimeout(() => {
		if (section.classList.contains('nextora-testimonials--reveal-ready')) {
			return;
		}
		gsap.killTweensOf(targets);
		clearRevealStyles(targets);
		setRevealReady(section);
	}, REVEAL_FALLBACK_MS);
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

	const media = section.querySelector<HTMLElement>('.nextora-testimonials__media');
	const content = section.querySelector<HTMLElement>('.nextora-testimonials__content-inner');
	const targets = [media, content].filter((el): el is HTMLElement => el !== null);

	if (targets.length === 0) {
		setRevealReady(section);
		return;
	}

	section.classList.add('nextora-testimonials--reveal-pending');
	gsap.set(targets, { opacity: 0, y: 28, force3D: true });

	const timeline = gsap.timeline({
		paused: true,
		defaults: { ease: 'power3.out' },
		onComplete: () => {
			clearRevealStyles(targets);
			setRevealReady(section);
		},
	});

	targets.forEach((target, index) => {
		timeline.to(
			target,
			{
				opacity: 1,
				y: 0,
				duration: 0.95,
			},
			index * 0.12,
		);
	});

	const playReveal = (): void => {
		if (section.classList.contains('nextora-testimonials--reveal-ready')) {
			return;
		}
		timeline.play();
	};

	scheduleRevealFallback(section, targets);

	if (isRevealStartPassed(section)) {
		playReveal();
		return;
	}

	ScrollTrigger.create({
		trigger: section,
		start: `top ${REVEAL_START_RATIO * 100}%`,
		once: true,
		onEnter: playReveal,
	});

	ScrollTrigger.refresh();

	if (isRevealStartPassed(section)) {
		playReveal();
	}
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
	const effect = opts.effect === 'slide' ? 'slide' : 'fade';
	const reduced = prefersReducedMotion();
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
		ScrollTrigger.refresh();
	};

	const tryMount = (tick = 0): void => {
		if (contentEl.clientWidth < 2 && tick < 60) {
			requestAnimationFrame(() => tryMount(tick + 1));
			return;
		}

		const modules = [Pagination, Autoplay, Keyboard, A11y];
		if (effect === 'fade') {
			modules.push(EffectFade);
		}
		if (showArrows && prevEl && nextEl) {
			modules.push(Navigation);
		}

		const contentSwiper = new Swiper(contentEl, {
			modules,
			effect,
			...(effect === 'fade' ? { fadeEffect: { crossFade: true } } : {}),
			slidesPerView: 1,
			loop: useLoop,
			speed,
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

		contentSwiper.on('slideChangeTransitionStart', syncMedia);
		contentSwiper.on('slideChange', syncMedia);
		syncMedia();

		requestAnimationFrame(() => ScrollTrigger.refresh());
		window.setTimeout(finishSection, 220);
	};

	tryMount();
}

function initIn(container: Element | Document): void {
	container.querySelectorAll<HTMLElement>('.nextora-testimonials__root').forEach(initSwiperRoot);
}

function run(): void {
	initIn(document);
	ScrollTrigger.config({ autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load' });
	ScrollTrigger.refresh();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', run, { once: true });
} else {
	run();
}

window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
window.addEventListener('nextora-testimonials-reinit', () => initIn(document));
