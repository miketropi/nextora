/**
 * Testimonial carousel — Swiper fade/slide + optional scroll reveal.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import { A11y, Autoplay, EffectFade, Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const SCROLL_INIT_ATTR = 'data-nextora-testimonial-scroll-init';
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
	arrowPosition?: string;
	templateStyle?: string;
	itemsPerViewDesktop?: number;
	itemsPerViewTablet?: number;
	itemsPerViewMobile?: number;
	cardGap?: number;
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
	section.classList.add('nextora-testimonial-carousel--reveal-ready');
	section.classList.remove('nextora-testimonial-carousel--reveal-pending');
}

function clearRevealStyles(targets: HTMLElement[]): void {
	if (targets.length === 0) {
		return;
	}
	gsap.set(targets, { clearProps: 'opacity,transform,translate,rotate,scale' });
}

function scheduleRevealFallback(section: HTMLElement, targets: HTMLElement[]): void {
	window.setTimeout(() => {
		if (section.classList.contains('nextora-testimonial-carousel--reveal-ready')) {
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

	const top = section.querySelector<HTMLElement>('.nextora-testimonial-carousel__top');
	const carousel = section.querySelector<HTMLElement>('.nextora-testimonial-carousel__carousel-root');
	const trust = section.querySelector<HTMLElement>('.nextora-testimonial-carousel__trust');
	const pagination = section.querySelector<HTMLElement>('.nextora-testimonial-carousel__pagination');
	const arrows = section.querySelector<HTMLElement>('.nextora-testimonial-carousel__arrows');
	const targets = [top, carousel, trust, pagination, arrows].filter(
		(el): el is HTMLElement => el !== null,
	);

	if (targets.length === 0) {
		setRevealReady(section);
		return;
	}

	section.classList.add('nextora-testimonial-carousel--reveal-pending');
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
		if (section.classList.contains('nextora-testimonial-carousel--reveal-ready')) {
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

function initSwiperIn(container: Element | Document): void {
	const roots = container.querySelectorAll<HTMLElement>(
		'.nextora-testimonial-carousel__carousel-root',
	);

	roots.forEach((root) => {
		if (
			root.dataset.nextoraTestimonialSwiperInited === '1' ||
			root.dataset.nextoraTestimonialSwiperPending === '1'
		) {
			return;
		}

		const section = root.closest<HTMLElement>('.nextora-testimonial-carousel');
		const el = root.querySelector<HTMLElement>('.nextora-testimonial-carousel__swiper');
		if (!el) {
			return;
		}

		const opts = getOpts(root);
		const slideCount = el.querySelectorAll('.swiper-slide').length;
		if (slideCount < 1) {
			section?.classList.remove('nextora-testimonial-carousel--loading');
			section?.classList.add('nextora-testimonial-carousel--ready');
			if (section) {
				initScrollReveal(section);
			}
			return;
		}

		const showArrows = opts.showArrows === true;
		const showPagination = opts.showPagination !== false;
		const effect = opts.effect === 'slide' ? 'slide' : 'fade';
		const arrowPosition = opts.arrowPosition === 'sides' ? 'sides' : 'below-dots';

		const prevEl =
			arrowPosition === 'sides'
				? root.querySelector<HTMLElement>('.nextora-testimonial-carousel__arrow--prev')
				: section?.querySelector<HTMLElement>(
						'.nextora-testimonial-carousel__arrows--below-dots .nextora-testimonial-carousel__arrow--prev',
					);
		const nextEl =
			arrowPosition === 'sides'
				? root.querySelector<HTMLElement>('.nextora-testimonial-carousel__arrow--next')
				: section?.querySelector<HTMLElement>(
						'.nextora-testimonial-carousel__arrows--below-dots .nextora-testimonial-carousel__arrow--next',
					);
		const paginationEl = section?.querySelector<HTMLElement>(
			'.nextora-testimonial-carousel__pagination',
		);

		const reduced = prefersReducedMotion();
		const useLoop = Boolean(opts.loop) && slideCount > 1;

		root.dataset.nextoraTestimonialSwiperPending = '1';

		const finishSection = (): void => {
			delete root.dataset.nextoraTestimonialSwiperPending;
			root.dataset.nextoraTestimonialSwiperInited = '1';
			section?.classList.remove('nextora-testimonial-carousel--loading');
			section?.classList.add('nextora-testimonial-carousel--ready');
			if (section) {
				initScrollReveal(section);
			}
			ScrollTrigger.refresh();
		};

		const tryMount = (tick = 0): void => {
			if (el.clientWidth < 2 && tick < 60) {
				requestAnimationFrame(() => tryMount(tick + 1));
				return;
			}

			const isTemplate1 = opts.templateStyle === 'template-1';
			const modules = [Pagination, Autoplay, Keyboard, A11y];
			if (!isTemplate1 && effect === 'fade') {
				modules.push(EffectFade);
			}
			if (showArrows && prevEl && nextEl) {
				modules.push(Navigation);
			}

			const slidesPerViewCfg = isTemplate1
				? {
						slidesPerView: opts.itemsPerViewMobile ?? 1,
						spaceBetween: opts.cardGap ?? 22,
						breakpoints: {
							768: {
								slidesPerView: opts.itemsPerViewTablet ?? 2,
							},
							1024: {
								slidesPerView: opts.itemsPerViewDesktop ?? 3,
							},
						},
					}
				: { slidesPerView: 1 };

			// eslint-disable-next-line no-new
			new Swiper(el, {
				modules,
				effect: isTemplate1 ? 'slide' : effect,
				...(effect === 'fade' && !isTemplate1 ? { fadeEffect: { crossFade: true } } : {}),
				...slidesPerViewCfg,
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
									typeof opts.autoplayDelay === 'number' ? opts.autoplayDelay : 6000,
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

			requestAnimationFrame(() => ScrollTrigger.refresh());
			window.setTimeout(finishSection, 220);
		};

		tryMount();
	});
}

function initIn(container: Element | Document): void {
	initSwiperIn(container);
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
window.addEventListener('nextora-testimonial-carousel-reinit', () => initIn(document));
