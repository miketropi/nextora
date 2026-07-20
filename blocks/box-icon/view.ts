/**
 * Box Icon — Swiper carousel / responsive grid + scroll reveal.
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

const SCROLL_INIT_ATTR = 'data-nextora-box-icon-scroll-init';
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

function getGridColumns(root: HTMLElement): number {
	const raw = parseInt(root.getAttribute('data-grid-columns') || '4', 10);
	return Number.isFinite(raw) ? Math.max(1, Math.min(6, raw)) : 4;
}

function getLayoutMode(root: HTMLElement): 'slider' | 'grid' {
	const mode = root.getAttribute('data-layout-mode');
	return mode === 'grid' ? 'grid' : 'slider';
}

function shouldUseSwiper(root: HTMLElement): boolean {
	if (getLayoutMode(root) === 'slider') {
		return true;
	}
	if (root.getAttribute('data-disable-responsive-carousel') === '1') {
		return false;
	}
	return window.innerWidth < getGridMinWidth(root);
}

function setRevealReady(section: HTMLElement): void {
	// Never mark as ready if the container is currently hidden (reset in progress)
	if (isElementHidden(section)) return;
	section.classList.add('nextora-box-icon--reveal-ready');
	section.classList.remove('nextora-box-icon--reveal-pending');
}

function nextRevealGen(section: HTMLElement): number {
	const raw = section.getAttribute('data-reveal-gen');
	const gen = raw ? parseInt(raw, 10) + 1 : 1;
	section.setAttribute('data-reveal-gen', String(gen));
	return gen;
}

function getRevealGen(section: HTMLElement): number {
	const raw = section.getAttribute('data-reveal-gen');
	return raw ? parseInt(raw, 10) : 0;
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

	// Defer if section is inside a hidden container
	if (isElementHidden(section)) {
		if (!section.hasAttribute('data-deferred-reveal')) {
			section.setAttribute('data-deferred-reveal', '1');
		}
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

	const header = section.querySelector<HTMLElement>('.nextora-box-icon__header');
	const carousel = section.querySelector<HTMLElement>('.nextora-box-icon__carousel-root');
	const style = section.getAttribute('data-nextora-scroll-reveal-style') || 'default';

	if (style === 'sequential') {
		initSequentialReveal(section, header, carousel);
		return;
	}

	const targets = [header, carousel].filter((el): el is HTMLElement => el !== null);

	if (targets.length === 0) {
		setRevealReady(section);
		return;
	}

	gsap.set(targets, { opacity: 0, y: 32, force3D: true });

	const gen = nextRevealGen(section);
	const timeline = gsap.timeline({
		paused: true,
		defaults: { ease: 'power3.out' },
		onComplete: () => {
			if (getRevealGen(section) !== gen) return;
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

	playRevealOnEnter(section, targets, timeline);
}

function initSequentialReveal(
	section: HTMLElement,
	header: HTMLElement | null,
	carousel: HTMLElement | null,
): void {
	let played = false;

	const playReveal = (): void => {
		if (played || section.classList.contains('nextora-box-icon--reveal-ready')) {
			return;
		}
		played = true;

		const cards = carousel
			? Array.from(carousel.querySelectorAll<HTMLElement>('.swiper-slide'))
			: [];

		const targets = [header, ...cards].filter((el): el is HTMLElement => el !== null);

		if (targets.length === 0) {
			setRevealReady(section);
			return;
		}

		gsap.set(targets, { opacity: 0, y: 40, force3D: true });

		// Reveal carousel-root wrapper so card stagger is visible
		gsap.set(carousel, { opacity: 1, y: 0 });

		const gen = nextRevealGen(section);

		const timeline = gsap.timeline({
			defaults: { ease: 'power3.out' },
			onComplete: () => {
				if (getRevealGen(section) !== gen) return;
				clearRevealStyles(targets);
				if (carousel) {
					gsap.set(carousel, { clearProps: 'opacity,transform,translate' });
				}
				setRevealReady(section);
			},
		});

		if (header) {
			timeline.to(header, { opacity: 1, y: 0, duration: 0.85 }, 0);
		}

		if (cards.length > 0) {
			timeline.to(
				cards,
				{
					opacity: 1,
					y: 0,
					duration: 0.75,
					stagger: { each: 0.14, from: 'start' },
				},
				header ? 0.12 : 0,
			);
		}
	};

	window.setTimeout(() => {
		if (section.classList.contains('nextora-box-icon--reveal-ready')) {
			return;
		}
		if (!isRevealStartPassed(section)) {
			return;
		}
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

function playRevealOnEnter(
	section: HTMLElement,
	targets: HTMLElement[],
	timeline: gsap.core.Timeline,
): void {
	let played = false;
	const playReveal = (): void => {
		if (played || section.classList.contains('nextora-box-icon--reveal-ready')) {
			return;
		}
		played = true;
		timeline.play();
	};

	window.setTimeout(() => {
		if (section.classList.contains('nextora-box-icon--reveal-ready')) {
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
	section.classList.remove('nextora-box-icon--loading');
	section.classList.add('nextora-box-icon--ready');
	requestAnimationFrame(() => {
		ScrollTrigger.refresh();
	});
}

function removeSwiperClasses(root: HTMLElement): void {
	const el = root.querySelector<HTMLElement>('.nextora-box-icon__swiper');
	if (!el) return;
	el.classList.remove(
		'swiper-initialized',
		'swiper-horizontal',
		'swiper-vertical',
		'swiper-backface-hidden',
		'swiper-free-mode',
		'swiper-css-mode',
		'swiper-android',
		'swiper-ios',
		'swiper-watch-progress',
		'swiper-pointer-events',
		'swiper-rtl',
		'swiper-autoheight',
		'swiper-grid',
	);
}

function destroySwiper(root: HTMLElement): void {
	const existing = swiperByRoot.get(root);
	if (existing) {
		existing.destroy(true, true);
		swiperByRoot.delete(root);
	}
	clearSwiperInlineStyles(root);
	removeSwiperClasses(root);
	delete root.dataset.nextoraBoxIconSwiperInited;
	delete root.dataset.nextoraBoxIconSwiperPending;
}

function clearSwiperInlineStyles(root: HTMLElement): void {
	root.querySelectorAll<HTMLElement>('.swiper-wrapper, .swiper-slide').forEach((el) => {
		el.removeAttribute('style');
	});
}

function setGridMode(root: HTMLElement, active: boolean): void {
	if (active) {
		clearSwiperInlineStyles(root);
		removeSwiperClasses(root);
	}
	root.classList.toggle('nextora-box-icon__carousel-root--grid-active', active);
	const section = root.closest<HTMLElement>('.nextora-box-icon');
	if (section) {
		section.classList.toggle('nextora-box-icon--grid-active', active);
	}
	if (active && root.getAttribute('data-disable-responsive-carousel') === '1') {
		applyResponsiveGridColumns(root);
	}
}

function applyResponsiveGridColumns(wrapper: HTMLElement): void {
	const w = window.innerWidth;
	let cols: string;
	if (w >= 1024) {
		cols = wrapper.getAttribute('data-grid-columns') || '4';
	} else if (w >= 768) {
		cols = wrapper.getAttribute('data-grid-columns-tablet') || '2';
	} else {
		cols = wrapper.getAttribute('data-grid-columns-mobile') || '1';
	}
	wrapper.style.setProperty('--nextora-box-icon-cols', cols);
}

function mountSwiper(root: HTMLElement): void {
	if (root.dataset.nextoraBoxIconSwiperInited === '1' || root.dataset.nextoraBoxIconSwiperPending === '1') {
		return;
	}

	const section = root.closest<HTMLElement>('.nextora-box-icon');
	const el = root.querySelector<HTMLElement>('.nextora-box-icon__swiper');
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
	const prevEl = root.querySelector<HTMLElement>('.nextora-box-icon__arrow--prev');
	const nextEl = root.querySelector<HTMLElement>('.nextora-box-icon__arrow--next');
	const paginationEl = root.querySelector<HTMLElement>('.nextora-box-icon__pagination');

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

	const gridCols = getGridColumns(root);
	const gridMin = getGridMinWidth(root);
	const isGridMode = getLayoutMode(root) === 'grid';

	const effectiveDesktopSpv =
		isGridMode ? Math.max(cap(tabletSpv), Math.min(gridCols, slideCount)) : cap(desktopSpv);

	const swiperBreakpoints: Record<number, { slidesPerView: number; spaceBetween: number }> = {};
	swiperBreakpoints[768] = { slidesPerView: cap(tabletSpv), spaceBetween: Math.max(0, gap) };

	if (isGridMode) {
		if (gridMin > 768) {
			const bp = gridMin - 1;
			swiperBreakpoints[bp] = { slidesPerView: effectiveDesktopSpv, spaceBetween: Math.max(0, gap) };
		}
	} else {
		const desktopBp = Math.max(gridMin, 1024);
		swiperBreakpoints[desktopBp] = { slidesPerView: cap(desktopSpv), spaceBetween: Math.max(0, gap) };
	}

	const wantLoop = Boolean(opts.loop) && slideCount > 1;
	const anyFractionalSpv =
		!isEffectivelyInteger(cap(baseSpv)) ||
		!isEffectivelyInteger(cap(tabletSpv)) ||
		!isEffectivelyInteger(effectiveDesktopSpv);
	const canLoop = wantLoop && slideCount >= 4 && !anyFractionalSpv;
	const useRewind = wantLoop && !canLoop;
	const reduced = prefersReducedMotion();

	root.dataset.nextoraBoxIconSwiperPending = '1';

	const finishSection = (): void => {
		delete root.dataset.nextoraBoxIconSwiperPending;
		root.dataset.nextoraBoxIconSwiperInited = '1';
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
			breakpoints: normalizeBreakpoints(opts.breakpoints, swiperBreakpoints),
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

function isElementHidden(el: HTMLElement): boolean {
	// display:none or zero dimensions
	if (el.offsetWidth === 0 && el.offsetHeight === 0) {
		return true;
	}
	// visibility:hidden on element or any ancestor
	let current: HTMLElement | null = el;
	while (current) {
		if (window.getComputedStyle(current).visibility === 'hidden') {
			return true;
		}
		current = current.parentElement;
	}
	return false;
}

function syncCarouselRoot(root: HTMLElement): void {
	// Defer if root is inside a hidden container (e.g. mega menu)
	if (isElementHidden(root)) {
		if (!root.hasAttribute('data-deferred')) {
			root.setAttribute('data-deferred', '1');
		}
		return;
	}

	if (shouldUseSwiper(root)) {
		if (root.dataset.nextoraBoxIconSwiperInited !== '1') {
			mountSwiper(root);
		}
		return;
	}

	destroySwiper(root);
	setGridMode(root, true);
	const section = root.closest<HTMLElement>('.nextora-box-icon');
	markSectionReady(section);
}

function initCarouselRoots(container: Element | Document = document): void {
	container
		.querySelectorAll<HTMLElement>('.nextora-box-icon__carousel-root')
		.forEach((root) => {
			syncCarouselRoot(root);
		});
}

function initAllScrollReveals(container: Element | Document = document): void {
	container
		.querySelectorAll<HTMLElement>('.nextora-box-icon[data-nextora-scroll-reveal="1"]')
		.forEach((section) => {
			initScrollReveal(section);
		});
}

let resizeTimer = 0;
function onResize(): void {
	window.clearTimeout(resizeTimer);
	resizeTimer = window.setTimeout(() => {
		document.querySelectorAll<HTMLElement>('.nextora-box-icon__carousel-root').forEach((root) => {
			if (shouldUseSwiper(root)) {
				if (root.dataset.nextoraBoxIconSwiperInited === '1') {
					const swiper = swiperByRoot.get(root);
					swiper?.update();
					setGridMode(root, false);
				} else {
					syncCarouselRoot(root);
				}
			} else {
				syncCarouselRoot(root);
				if (root.getAttribute('data-disable-responsive-carousel') === '1') {
					applyResponsiveGridColumns(root);
				}
			}
		});
		ScrollTrigger.refresh();
	}, 150);
}

function run(): void {
	initCarouselRoots(document);
	initAllScrollReveals(document);
	watchDeferredElements();
	ScrollTrigger.config({ autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize' });
	ScrollTrigger.refresh();
}

function watchDeferredElements(): void {
	// Track per-element visibility state for replay
	const visibilityState = new WeakMap<HTMLElement, boolean>();

	const check = (): void => {
		let hasWork = false;

		// 1) Handle initially-deferred carousel roots
		document
			.querySelectorAll<HTMLElement>('.nextora-box-icon__carousel-root[data-deferred="1"]')
			.forEach((root) => {
				if (!isElementHidden(root)) {
					root.removeAttribute('data-deferred');
					root.setAttribute('data-deferred-replay', '1');
					syncCarouselRoot(root);
					const section = root.closest<HTMLElement>('.nextora-box-icon');
					if (section) {
						section.setAttribute('data-deferred-replay', '1');
						initScrollReveal(section);
					}
				}
				hasWork = true;
			});

		// 2) Handle initially-deferred reveal sections
		document
			.querySelectorAll<HTMLElement>('.nextora-box-icon[data-deferred-reveal="1"]')
			.forEach((section) => {
				if (!isElementHidden(section)) {
					section.removeAttribute('data-deferred-reveal');
					section.setAttribute('data-deferred-replay', '1');
					initScrollReveal(section);
				}
				hasWork = true;
			});

		// 3) Toggle replay: reset when hidden, re-init when shown
		document
			.querySelectorAll<HTMLElement>(
				'.nextora-box-icon__carousel-root[data-deferred-replay="1"]',
			)
			.forEach((root) => {
				const hidden = isElementHidden(root);
				const wasHidden = visibilityState.get(root);

				if (hidden && !wasHidden) {
					// Just became hidden — reset carousel + grid + animations
					const section = root.closest<HTMLElement>('.nextora-box-icon');
					const cards = Array.from(root.querySelectorAll<HTMLElement>('.swiper-slide'));
					const headerEl = section?.querySelector<HTMLElement>('.nextora-box-icon__header');

					// Kill all active GSAP tweens
					const allTargets: (HTMLElement | HTMLElement[])[] = [];
					if (cards.length) allTargets.push(cards as unknown as HTMLElement[]);
					if (headerEl) allTargets.push(headerEl);
					allTargets.push(root);
					if (section) allTargets.push(section);
					allTargets.forEach((t) => gsap.killTweensOf(t));

					// Clear inline styles from cards
					if (cards.length > 0) clearRevealStyles(cards);
					if (headerEl) clearRevealStyles([headerEl]);
					clearRevealStyles([root]);

					destroySwiper(root);
					setGridMode(root, false);
					root.classList.remove('nextora-box-icon__carousel-root--grid-active');
					if (section) {
						section.removeAttribute(SCROLL_INIT_ATTR);
						section.removeAttribute('data-reveal-gen');
						section.classList.remove('nextora-box-icon--grid-active');
						section.classList.remove('nextora-box-icon--reveal-ready');
						section.classList.add('nextora-box-icon--reveal-pending');
					}
				} else if (!hidden && wasHidden) {
					// Just became visible — force clean re-init
					const section = root.closest<HTMLElement>('.nextora-box-icon');
					// Remove stale scroll-init marker so initScrollReveal never skips
					if (section) section.removeAttribute(SCROLL_INIT_ATTR);
					syncCarouselRoot(root);
					if (section) {
						initScrollReveal(section);
					}
				}

				visibilityState.set(root, hidden);
				hasWork = true;
			});

		// 4) Toggle replay for reveal-only sections
		document
			.querySelectorAll<HTMLElement>('.nextora-box-icon[data-deferred-replay="1"]')
			.forEach((section) => {
				// Skip if already handled via carousel root above
				if (section.querySelector('.nextora-box-icon__carousel-root[data-deferred-replay="1"]')) {
					return;
				}

				const hidden = isElementHidden(section);
				const wasHidden = visibilityState.get(section);

				if (hidden && !wasHidden) {
					const cards = Array.from(section.querySelectorAll<HTMLElement>('.swiper-slide'));
					const headerEl = section.querySelector<HTMLElement>('.nextora-box-icon__header');
					const allTargets: (HTMLElement | HTMLElement[])[] = [];
					if (cards.length) allTargets.push(cards as unknown as HTMLElement[]);
					if (headerEl) allTargets.push(headerEl);
					allTargets.push(section);
					allTargets.forEach((t) => gsap.killTweensOf(t));
					if (cards.length > 0) clearRevealStyles(cards);
					if (headerEl) clearRevealStyles([headerEl]);
					section.removeAttribute(SCROLL_INIT_ATTR);
					section.removeAttribute('data-reveal-gen');
					section.classList.remove('nextora-box-icon--reveal-ready');
					section.classList.add('nextora-box-icon--reveal-pending');
				} else if (!hidden && wasHidden) {
					// Force clean re-init
					section.removeAttribute(SCROLL_INIT_ATTR);
					initScrollReveal(section);
				}

				visibilityState.set(section, hidden);
				hasWork = true;
			});

		if (hasWork) {
			setTimeout(() => requestAnimationFrame(check), 200);
		}
	};

	setTimeout(() => requestAnimationFrame(check), 200);
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', run, { once: true });
} else {
	run();
}

window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
window.addEventListener('resize', onResize);
window.addEventListener('nextora-box-icon-reinit', () => {
	initCarouselRoots(document);
	initAllScrollReveals(document);
	ScrollTrigger.refresh();
});
