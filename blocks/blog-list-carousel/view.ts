/**
 * Blog list carousel — Swiper init + optional scroll reveal.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const SCROLL_INIT_ATTR = 'data-nextora-blc-scroll-init';
const REVEAL_FALLBACK_MS = 1800;

type SwiperOpts = {
	slidesPerView?: number;
	slidesPerViewTablet?: number;
	slidesPerViewMobile?: number;
	spaceBetween?: number;
	speed?: number;
	loop?: boolean;
	freeMode?: boolean;
	grabCursor?: boolean;
	autoplay?: boolean;
	autoplayDelay?: number;
	pauseOnHover?: boolean;
	showPagination?: boolean;
	showArrows?: boolean;
	arrowStyle?: string;
};

function prefersReducedMotion(): boolean {
	return (
		typeof window !== 'undefined' &&
		window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
	);
}

function roundSpv(n: number): number {
	return Math.round(n * 1000) / 1000;
}

function getOpts(root: HTMLElement): SwiperOpts {
	try {
		return JSON.parse(root.getAttribute('data-swiper-opts') || '{}') as SwiperOpts;
	} catch {
		return {};
	}
}

function bindBrokenImageFallback(container: Element | Document): void {
	container.querySelectorAll<HTMLElement>('.nextora-blog-list-carousel').forEach((section) => {
		const fallbackSrc =
			section.dataset.nextoraBlcPlaceholderSrc ||
			section.querySelector<HTMLImageElement>('.nextora-blc__card-img-placeholder')?.src ||
			'';

		if (!fallbackSrc) {
			return;
		}

		section
			.querySelectorAll<HTMLImageElement>(
				'.nextora-blc__card-img:not(.nextora-blc__card-img-placeholder)',
			)
			.forEach((img) => {
				if (img.dataset.nextoraBlcFallbackBound === '1') {
					return;
				}
				img.dataset.nextoraBlcFallbackBound = '1';

				const src = img.dataset.nextoraBlcFallbackSrc || fallbackSrc;
				img.addEventListener(
					'error',
					() => {
						img.onerror = null;
						img.src = src;
						img.alt = '';
						img.setAttribute('aria-hidden', 'true');
						img.classList.add('nextora-blc__card-img-placeholder');
					},
					{ once: true },
				);
			});
	});
}

function isRevealStartPassed(section: HTMLElement): boolean {
	const rect = section.getBoundingClientRect();
	const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
	return rect.top <= viewportHeight * 0.85 && rect.bottom > 0;
}

function setRevealReady(section: HTMLElement): void {
	section.classList.add('nextora-blog-list-carousel--reveal-ready');
	section.classList.remove('nextora-blog-list-carousel--reveal-pending');
}

function clearRevealStyles(targets: HTMLElement[]): void {
	if (targets.length === 0) {
		return;
	}
	gsap.set(targets, { clearProps: 'opacity,transform,translate,rotate,scale' });
}

function scheduleRevealFallback(section: HTMLElement, targets: HTMLElement[]): void {
	window.setTimeout(() => {
		if (section.classList.contains('nextora-blog-list-carousel--reveal-ready')) {
			return;
		}
		gsap.killTweensOf(targets);
		clearRevealStyles(targets);
		setRevealReady(section);
	}, REVEAL_FALLBACK_MS);
}

// ── Scroll reveal ──
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

	const header = section.querySelector<HTMLElement>('.nextora-blc__header');
	const carousel = section.querySelector<HTMLElement>('.nextora-blc__carousel-root');
	const pagination = section.querySelector<HTMLElement>('.nextora-blc__pagination');

	const targets = [header, carousel, pagination].filter(
		(el): el is HTMLElement => el !== null,
	);

	if (targets.length === 0) {
		setRevealReady(section);
		return;
	}

	section.classList.add('nextora-blog-list-carousel--reveal-pending');
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
			{ opacity: 1, y: 0, duration: 0.95 },
			index * 0.12,
		);
	});

	scheduleRevealFallback(section, targets);

	if (isRevealStartPassed(section)) {
		timeline.play();
		return;
	}

	ScrollTrigger.create({
		trigger: section,
		start: 'top 85%',
		once: true,
		onEnter: () => timeline.play(),
	});

	ScrollTrigger.refresh();

	if (isRevealStartPassed(section)) {
		timeline.play();
	}
}

// ── Swiper init ──
function initSwiperIn(container: Element | Document): void {
	const roots = container.querySelectorAll<HTMLElement>(
		'.nextora-blc__carousel-root',
	);

	roots.forEach((root) => {
		if (
			root.dataset.nextoraBlcSwiperInited === '1' ||
			root.dataset.nextoraBlcSwiperPending === '1'
		) {
			return;
		}

		const section = root.closest<HTMLElement>('.nextora-blog-list-carousel');
		const el = root.querySelector<HTMLElement>('.nextora-blc__swiper');
		if (!el) {
			return;
		}

		const opts = getOpts(root);
		const slideCount = el.querySelectorAll('.swiper-slide').length;
		if (slideCount < 1) {
			section?.classList.remove('nextora-blog-list-carousel--loading');
			section?.classList.add('nextora-blog-list-carousel--ready');
			if (section) {
				initScrollReveal(section);
			}
			return;
		}

		const showArrows = opts.showArrows === true;
		const showPagination = opts.showPagination !== false;
		const reduced = prefersReducedMotion();

		const nextEl = root.querySelector<HTMLElement>('.nextora-blc__arrow--next');
		const prevEl = root.querySelector<HTMLElement>('.nextora-blc__arrow--prev');
		const paginationEl = section?.querySelector<HTMLElement>('.nextora-blc__pagination');

		root.dataset.nextoraBlcSwiperPending = '1';

		const finishSection = (): void => {
			delete root.dataset.nextoraBlcSwiperPending;
			root.dataset.nextoraBlcSwiperInited = '1';
			section?.classList.remove('nextora-blog-list-carousel--loading');
			section?.classList.add('nextora-blog-list-carousel--ready');
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

			const baseSpv = roundSpv(
				typeof opts.slidesPerView === 'number' && !Number.isNaN(opts.slidesPerView)
					? opts.slidesPerView : 3,
			);
			const tabletSpv = roundSpv(
				typeof opts.slidesPerViewTablet === 'number' && !Number.isNaN(opts.slidesPerViewTablet)
					? opts.slidesPerViewTablet : 2,
			);
			const mobileSpv = roundSpv(
				typeof opts.slidesPerViewMobile === 'number' && !Number.isNaN(opts.slidesPerViewMobile)
					? opts.slidesPerViewMobile : 1.15,
			);
			const gap = typeof opts.spaceBetween === 'number' && !Number.isNaN(opts.spaceBetween)
				? opts.spaceBetween : 24;

			const cap = (n: number) => Math.max(1, Math.min(roundSpv(n), Math.max(1, slideCount)));

			// eslint-disable-next-line no-new
			new Swiper(el, {
				modules: [Pagination, Navigation, Autoplay, Keyboard, A11y],
				slidesPerView: cap(mobileSpv),
				spaceBetween: Math.max(0, gap),
				speed: typeof opts.speed === 'number' ? opts.speed : 500,
				loop: Boolean(opts.loop) && slideCount >= 4,
				freeMode: opts.freeMode === true,
				grabCursor: opts.grabCursor !== false,
				watchOverflow: true,
				observer: true,
				observeParents: true,
				resizeObserver: true,
				updateOnWindowResize: true,
				breakpointsBase: 'container',
				breakpoints: {
					480: {
						slidesPerView: cap(mobileSpv),
						spaceBetween: Math.max(0, Math.min(12, gap)),
					},
					768: {
						slidesPerView: cap(tabletSpv),
						spaceBetween: Math.max(0, Math.min(24, gap)),
					},
					1024: {
						slidesPerView: cap(baseSpv),
						spaceBetween: Math.max(0, gap),
					},
				},
				autoplay:
					!reduced && opts.autoplay === true
						? {
								delay:
									typeof opts.autoplayDelay === 'number'
										? opts.autoplayDelay
										: 5000,
								disableOnInteraction: true,
								pauseOnMouseEnter: opts.pauseOnHover !== false,
							}
						: false,
				keyboard: { enabled: true, onlyInViewport: true },
				a11y: {
					enabled: true,
					prevSlideMessage: 'Previous posts',
					nextSlideMessage: 'Next posts',
					paginationBulletMessage: 'Go to slide {{index}}',
				},
				...(showArrows && prevEl && nextEl ? { navigation: { nextEl, prevEl } } : {}),
				...(showPagination && paginationEl
					? { pagination: { el: paginationEl, clickable: true } }
					: {}),
			});

			requestAnimationFrame(() => ScrollTrigger.refresh());
			window.setTimeout(finishSection, 220);
		};

		tryMount();
	});
}

function initIn(container: Element | Document): void {
	bindBrokenImageFallback(container);
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
window.addEventListener('nextora-blog-list-carousel-reinit', () => initIn(document));
