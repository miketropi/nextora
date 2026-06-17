/**
 * Box Content — Swiper carousel / responsive grid + scroll reveal.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import { A11y, Autoplay, FreeMode, Keyboard, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const SCROLL_INIT_ATTR = 'data-nextora-box-content-scroll-init';
const REVEAL_START_RATIO = 0.88;
const REVEAL_FALLBACK_MS = 4000;

type SwiperOpts = {
	loop?: boolean;
	autoplay?: boolean;
	autoplayDelay?: number;
	pauseOnHover?: boolean;
	showPagination?: boolean;
	showArrows?: boolean;
	spaceBetween?: number;
	speed?: number;
	freeMode?: boolean;
	grabCursor?: boolean;
	slidesPerView?: number;
	slidesPerViewTablet?: number;
	slidesPerViewDesktop?: number;
	breakpoints?: Record<string, { slidesPerView?: number; spaceBetween?: number }>;
};

const swiperByRoot = new WeakMap<HTMLElement, SwiperInstance>();

function roundSpv(n: number): number {
	return Math.round(n * 1000) / 1000;
}

function isEffectivelyInteger(n: number): boolean {
	return Math.abs(n - Math.round(n)) < 0.0001;
}

function normalizeBreakpoints(
	raw: SwiperOpts['breakpoints'] | undefined,
	fallback: Record<number, { slidesPerView: number; spaceBetween: number }>,
): Record<number, { slidesPerView?: number; spaceBetween?: number }> {
	if (raw && typeof raw === 'object') {
		const out: Record<number, { slidesPerView?: number; spaceBetween?: number }> = {};
		for (const [k, v] of Object.entries(raw)) {
			const w = parseInt(String(k), 10);
			if (Number.isFinite(w) && w > 0 && v && typeof v === 'object') {
				const spv =
					typeof v.slidesPerView === 'number' && !Number.isNaN(v.slidesPerView)
						? roundSpv(v.slidesPerView)
						: undefined;
				const sb =
					typeof (v as { spaceBetween?: number }).spaceBetween === 'number'
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

function getGridMinWidth(root: HTMLElement): number {
	const raw = parseInt(root.getAttribute('data-grid-min-width') || '981', 10);
	return Number.isFinite(raw) ? raw : 981;
}

function getLayoutMode(root: HTMLElement): 'slider' | 'grid' {
	const mode = root.getAttribute('data-layout-mode');
	return mode === 'grid' ? 'grid' : 'slider';
}

function shouldUseSwiper(root: HTMLElement): boolean {
	if (getLayoutMode(root) === 'slider') {
		return true;
	}
	return window.innerWidth < getGridMinWidth(root);
}

function setRevealReady(section: HTMLElement): void {
	section.classList.add('nextora-box-content--reveal-ready');
	section.classList.remove('nextora-box-content--reveal-pending');
}

function clearRevealStyles(targets: HTMLElement[]): void {
	if (targets.length === 0) {
		return;
	}
	gsap.set(targets, { clearProps: 'opacity,transform,translate,rotate,scale' });
}

function isRevealStartPassed(section: HTMLElement): boolean {
	const rect = section.getBoundingClientRect();
	const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
	return rect.top <= viewportHeight * REVEAL_START_RATIO && rect.bottom > 0;
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

	const header = section.querySelector<HTMLElement>('.nextora-box-content__header');
	const carousel = section.querySelector<HTMLElement>('.nextora-box-content__carousel-root');
	const targets = [header, carousel].filter((el): el is HTMLElement => el !== null);

	if (targets.length === 0) {
		setRevealReady(section);
		return;
	}

	gsap.set(targets, { opacity: 0, y: 32, force3D: true });

	const timeline = gsap.timeline({
		paused: true,
		defaults: { ease: 'power3.out' },
		onComplete: () => {
			clearRevealStyles(targets);
			setRevealReady(section);
		},
	});

	if (header) {
		timeline.to(header, { opacity: 1, y: 0, duration: 1 }, 0);
	}
	if (carousel) {
		timeline.to(carousel, { opacity: 1, y: 0, duration: 1.05 }, header ? 0.18 : 0);
	}

	let played = false;
	const playReveal = (): void => {
		if (played || section.classList.contains('nextora-box-content--reveal-ready')) {
			return;
		}
		played = true;
		timeline.play();
	};

	window.setTimeout(() => {
		if (section.classList.contains('nextora-box-content--reveal-ready')) {
			return;
		}
		if (!isRevealStartPassed(section)) {
			return;
		}
		gsap.killTweensOf(targets);
		clearRevealStyles(targets);
		setRevealReady(section);
	}, REVEAL_FALLBACK_MS);

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
}

function markSectionReady(section: HTMLElement | null): void {
	if (!section) {
		return;
	}
	section.classList.remove('nextora-box-content--loading');
	section.classList.add('nextora-box-content--ready');
	requestAnimationFrame(() => {
		ScrollTrigger.refresh();
	});
}

function destroySwiper(root: HTMLElement): void {
	const existing = swiperByRoot.get(root);
	if (existing) {
		existing.destroy(true, true);
		swiperByRoot.delete(root);
	}
	delete root.dataset.nextoraBoxContentSwiperInited;
	delete root.dataset.nextoraBoxContentSwiperPending;
}

function clearSwiperInlineStyles(root: HTMLElement): void {
	root.querySelectorAll<HTMLElement>('.swiper-slide').forEach((slide) => {
		slide.style.removeProperty('width');
		slide.style.removeProperty('height');
		slide.style.removeProperty('margin-right');
	});
	const wrapper = root.querySelector<HTMLElement>('.swiper-wrapper');
	if (wrapper) {
		wrapper.style.removeProperty('transform');
		wrapper.style.removeProperty('width');
		wrapper.style.removeProperty('transition-duration');
	}
}

function setGridMode(root: HTMLElement, active: boolean): void {
	if (active) {
		clearSwiperInlineStyles(root);
	}
	root.classList.toggle('nextora-box-content__carousel-root--grid-active', active);
	const section = root.closest<HTMLElement>('.nextora-box-content');
	if (section) {
		section.classList.toggle('nextora-box-content--grid-active', active);
	}
}

function mountSwiper(root: HTMLElement): void {
	if (root.dataset.nextoraBoxContentSwiperInited === '1' || root.dataset.nextoraBoxContentSwiperPending === '1') {
		return;
	}

	const section = root.closest<HTMLElement>('.nextora-box-content');
	const el = root.querySelector<HTMLElement>('.nextora-box-content__swiper');
	if (!el) {
		markSectionReady(section);
		return;
	}

	const opts = getOpts(root);
	const slideCount = el.querySelectorAll('.swiper-slide').length;
	if (slideCount < 1) {
		markSectionReady(section);
		return;
	}

	setGridMode(root, false);

	const showArrows = opts.showArrows === true;
	const showPagination = opts.showPagination !== false;
	const prevEl = root.querySelector<HTMLElement>('.nextora-box-content__arrow--prev');
	const nextEl = root.querySelector<HTMLElement>('.nextora-box-content__arrow--next');
	const paginationEl = root.querySelector<HTMLElement>('.nextora-box-content__pagination');

	const baseSpv = roundSpv(
		typeof opts.slidesPerView === 'number' && !Number.isNaN(opts.slidesPerView) ? opts.slidesPerView : 1.15,
	);
	const tabletSpv = roundSpv(
		typeof opts.slidesPerViewTablet === 'number' && !Number.isNaN(opts.slidesPerViewTablet)
			? opts.slidesPerViewTablet
			: 2,
	);
	const desktopSpv = roundSpv(
		typeof opts.slidesPerViewDesktop === 'number' && !Number.isNaN(opts.slidesPerViewDesktop)
			? opts.slidesPerViewDesktop
			: 4,
	);
	const gap = typeof opts.spaceBetween === 'number' && !Number.isNaN(opts.spaceBetween) ? opts.spaceBetween : 18;

	const cap = (n: number) => Math.max(1, Math.min(roundSpv(n), Math.max(1, slideCount)));

	const gridMin = getGridMinWidth(root);
	const defaultBreakpoints: Record<number, { slidesPerView: number; spaceBetween: number }> = {
		768: { slidesPerView: cap(tabletSpv), spaceBetween: Math.max(0, gap) },
		[gridMin]: { slidesPerView: cap(desktopSpv), spaceBetween: Math.max(0, gap) },
	};

	const wantLoop = Boolean(opts.loop) && slideCount > 1;
	const anyFractionalSpv =
		!isEffectivelyInteger(cap(baseSpv)) ||
		!isEffectivelyInteger(cap(tabletSpv)) ||
		!isEffectivelyInteger(cap(desktopSpv));
	const canLoop = wantLoop && slideCount >= 4 && !anyFractionalSpv;
	const useRewind = wantLoop && !canLoop;
	const reduced = prefersReducedMotion();

	root.dataset.nextoraBoxContentSwiperPending = '1';

	const finishSection = (): void => {
		delete root.dataset.nextoraBoxContentSwiperPending;
		root.dataset.nextoraBoxContentSwiperInited = '1';
		markSectionReady(section);
	};

	const tryMount = (tick = 0): void => {
		if (el.clientWidth < 2 && tick < 60) {
			requestAnimationFrame(() => tryMount(tick + 1));
			return;
		}

		const swiper = new Swiper(el, {
			modules: [Navigation, Pagination, Autoplay, Keyboard, A11y, FreeMode],
			loop: canLoop,
			rewind: useRewind,
			speed: typeof opts.speed === 'number' ? opts.speed : 500,
			spaceBetween: Math.max(0, gap),
			slidesPerView: cap(baseSpv),
			watchOverflow: true,
			observer: true,
			observeParents: true,
			resizeObserver: true,
			updateOnWindowResize: true,
			breakpointsBase: 'container',
			freeMode: opts.freeMode === true,
			grabCursor: opts.grabCursor !== false && !reduced,
			autoplay:
				!reduced && opts.autoplay === true
					? {
							delay: typeof opts.autoplayDelay === 'number' ? opts.autoplayDelay : 4000,
							disableOnInteraction: false,
							pauseOnMouseEnter: opts.pauseOnHover !== false,
						}
					: false,
			keyboard: { enabled: true, onlyInViewport: true },
			a11y: {
				enabled: true,
				prevSlideMessage: 'Previous slide',
				nextSlideMessage: 'Next slide',
				paginationBulletMessage: 'Go to slide {{index}}',
			},
			breakpoints: normalizeBreakpoints(opts.breakpoints, defaultBreakpoints),
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

		swiperByRoot.set(root, swiper);

		const refresh = (): void => {
			swiper.update();
			ScrollTrigger.refresh();
		};
		requestAnimationFrame(refresh);
		requestAnimationFrame(() => requestAnimationFrame(refresh));
		window.setTimeout(refresh, 200);
		window.setTimeout(finishSection, 220);
	};

	tryMount();
}

function syncCarouselRoot(root: HTMLElement): void {
	if (shouldUseSwiper(root)) {
		if (root.dataset.nextoraBoxContentSwiperInited !== '1') {
			mountSwiper(root);
		}
		return;
	}

	destroySwiper(root);
	setGridMode(root, true);
	const section = root.closest<HTMLElement>('.nextora-box-content');
	markSectionReady(section);
}

function initCarouselRoots(container: Element | Document = document): void {
	container
		.querySelectorAll<HTMLElement>('.nextora-box-content__carousel-root')
		.forEach((root) => {
			syncCarouselRoot(root);
		});
}

function initAllScrollReveals(container: Element | Document = document): void {
	container
		.querySelectorAll<HTMLElement>('.nextora-box-content[data-nextora-scroll-reveal="1"]')
		.forEach((section) => {
			initScrollReveal(section);
		});
}

let resizeTimer = 0;
function onResize(): void {
	window.clearTimeout(resizeTimer);
	resizeTimer = window.setTimeout(() => {
		document.querySelectorAll<HTMLElement>('.nextora-box-content__carousel-root').forEach((root) => {
			if (shouldUseSwiper(root)) {
				if (root.dataset.nextoraBoxContentSwiperInited === '1') {
					const swiper = swiperByRoot.get(root);
					swiper?.update();
					setGridMode(root, false);
				} else {
					syncCarouselRoot(root);
				}
			} else {
				syncCarouselRoot(root);
			}
		});
		ScrollTrigger.refresh();
	}, 150);
}

function run(): void {
	initAllScrollReveals(document);
	initCarouselRoots(document);
	ScrollTrigger.config({ autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize' });
	ScrollTrigger.refresh();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', run, { once: true });
} else {
	run();
}

window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
window.addEventListener('resize', onResize);
window.addEventListener('nextora-box-content-reinit', () => {
	initAllScrollReveals(document);
	initCarouselRoots(document);
	ScrollTrigger.refresh();
});
