/**
 * Blog list carousel — Swiper init + scroll reveal + mega menu deferred loading.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import type { Swiper as SwiperInstance } from 'swiper';
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const SCROLL_INIT_ATTR = 'data-nextora-blc-scroll-init';
const REVEAL_FALLBACK_MS = 4000;
const REVEAL_START_RATIO = 0.88;

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

const swiperByRoot = new WeakMap<HTMLElement, SwiperInstance>();

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

		if (!fallbackSrc) return;

		section
			.querySelectorAll<HTMLImageElement>(
				'.nextora-blc__card-img:not(.nextora-blc__card-img-placeholder)',
			)
			.forEach((img) => {
				if (img.dataset.nextoraBlcFallbackBound === '1') return;
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

// ── Hidden element detection ──
function isElementHidden(el: HTMLElement): boolean {
	if (el.offsetWidth === 0 && el.offsetHeight === 0) return true;
	let current: HTMLElement | null = el;
	while (current) {
		if (window.getComputedStyle(current).visibility === 'hidden') return true;
		current = current.parentElement;
	}
	return false;
}

// ── Reveal helpers ──
function setRevealReady(section: HTMLElement): void {
	if (isElementHidden(section)) return;
	section.classList.add('nextora-blog-list-carousel--reveal-ready');
	section.classList.remove('nextora-blog-list-carousel--reveal-pending');
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
	if (targets.length === 0) return;
	gsap.set(targets, { clearProps: 'opacity,transform,translate,rotate,scale' });
}

function isRevealStartPassed(section: HTMLElement): boolean {
	const rect = section.getBoundingClientRect();
	const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
	return rect.top <= viewportHeight * REVEAL_START_RATIO && rect.bottom > 0;
}

// ── Scroll reveal — default (section fade-in) ──
function initDefaultReveal(
	section: HTMLElement,
	header: HTMLElement | null,
	carousel: HTMLElement | null,
	pagination: HTMLElement | null,
): void {
	const targets = [header, carousel, pagination].filter(
		(el): el is HTMLElement => el !== null,
	);

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
	if (pagination) {
		timeline.to(pagination, { opacity: 1, y: 0, duration: 0.85 }, header ? 0.24 : 0.18);
	}

	playRevealOnEnter(section, targets, timeline);
}

// ── Scroll reveal — sequential (stagger per card) ──
function initSequentialReveal(
	section: HTMLElement,
	header: HTMLElement | null,
	carousel: HTMLElement | null,
): void {
	let played = false;

	const playReveal = (): void => {
		if (played || section.classList.contains('nextora-blog-list-carousel--reveal-ready')) return;
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
		if (section.classList.contains('nextora-blog-list-carousel--reveal-ready')) return;
		if (!isRevealStartPassed(section)) return;
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
		if (played || section.classList.contains('nextora-blog-list-carousel--reveal-ready')) return;
		played = true;
		timeline.play();
	};

	window.setTimeout(() => {
		if (section.classList.contains('nextora-blog-list-carousel--reveal-ready')) return;
		if (!isRevealStartPassed(section)) return;
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

// ── Scroll reveal — main entry ──
function initScrollReveal(section: HTMLElement): void {
	if (section.getAttribute('data-nextora-scroll-reveal') !== '1') return;

	if (isElementHidden(section)) {
		if (!section.hasAttribute('data-deferred-reveal')) {
			section.setAttribute('data-deferred-reveal', '1');
		}
		return;
	}

	if (section.getAttribute(SCROLL_INIT_ATTR) === '1') return;
	section.setAttribute(SCROLL_INIT_ATTR, '1');

	if (prefersReducedMotion()) {
		setRevealReady(section);
		return;
	}

	const header = section.querySelector<HTMLElement>('.nextora-blc__header');
	const carousel = section.querySelector<HTMLElement>('.nextora-blc__carousel-root');
	const pagination = section.querySelector<HTMLElement>('.nextora-blc__pagination');
	const style = section.getAttribute('data-nextora-scroll-reveal-style') || 'default';

	if (style === 'sequential') {
		initSequentialReveal(section, header, carousel);
		return;
	}

	initDefaultReveal(section, header, carousel, pagination);
}

// ── Grid / Carousel logic ──
function shouldUseGrid(root: HTMLElement): boolean {
	const layoutMode = root.getAttribute('data-layout-mode') || 'carousel';
	if (layoutMode !== 'grid') return false;
	const gridMinWidth = parseInt(root.getAttribute('data-grid-min-width') || '981', 10);
	return window.innerWidth >= gridMinWidth;
}

function updateGridActiveClass(root: HTMLElement): void {
	const section = root.closest<HTMLElement>('.nextora-blog-list-carousel');
	if (!section) return;
	if (shouldUseGrid(root)) {
		section.classList.add('nextora-blog-list-carousel--grid-active');
	} else {
		section.classList.remove('nextora-blog-list-carousel--grid-active');
	}
}

function markSectionReady(section: HTMLElement | null): void {
	if (!section) return;
	section.classList.remove('nextora-blog-list-carousel--loading');
	section.classList.add('nextora-blog-list-carousel--ready');
	requestAnimationFrame(() => ScrollTrigger.refresh());
}

function clearSwiperInlineStyles(root: HTMLElement): void {
	root.querySelectorAll<HTMLElement>('.swiper-wrapper, .swiper-slide').forEach((el) => {
		el.removeAttribute('style');
	});
}

function removeSwiperClasses(root: HTMLElement): void {
	const el = root.querySelector<HTMLElement>('.nextora-blc__swiper');
	if (!el) return;
	el.classList.remove(
		'swiper-initialized',
		'swiper-horizontal',
		'swiper-free-mode',
		'swiper-android',
		'swiper-ios',
		'swiper-watch-progress',
		'swiper-pointer-events',
	);
}

function setGridMode(root: HTMLElement, active: boolean): void {
	if (active) {
		clearSwiperInlineStyles(root);
		removeSwiperClasses(root);
	}

	const section = root.closest<HTMLElement>('.nextora-blog-list-carousel');
	if (section) {
		section.classList.toggle('nextora-blog-list-carousel--grid-active', active);
	}
}

// ── Destroy Swiper (per-root) ──
function destroySwiper(root: HTMLElement): void {
	const existing = swiperByRoot.get(root);
	if (existing) {
		existing.destroy(true, true);
		swiperByRoot.delete(root);
	}
	clearSwiperInlineStyles(root);
	removeSwiperClasses(root);
	delete root.dataset.nextoraBlcSwiperInited;
	delete root.dataset.nextoraBlcSwiperPending;
}

// ── Mount Swiper ──
function mountSwiper(root: HTMLElement): void {
	if (
		root.dataset.nextoraBlcSwiperInited === '1' ||
		root.dataset.nextoraBlcSwiperPending === '1'
	) {
		return;
	}

	const section = root.closest<HTMLElement>('.nextora-blog-list-carousel');
	const el = root.querySelector<HTMLElement>('.nextora-blc__swiper');
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
	const reduced = prefersReducedMotion();

	const nextEl = root.querySelector<HTMLElement>('.nextora-blc__arrow--next');
	const prevEl = root.querySelector<HTMLElement>('.nextora-blc__arrow--prev');
	const paginationEl = section?.querySelector<HTMLElement>('.nextora-blc__pagination');

	root.dataset.nextoraBlcSwiperPending = '1';

	const finishSection = (): void => {
		delete root.dataset.nextoraBlcSwiperPending;
		root.dataset.nextoraBlcSwiperInited = '1';
		markSectionReady(section);
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
		const gap =
			typeof opts.spaceBetween === 'number' && !Number.isNaN(opts.spaceBetween)
				? opts.spaceBetween : 24;

		const cap = (n: number) => Math.max(1, roundSpv(n));

		const swiper = new Swiper(el, {
			modules: [Pagination, Navigation, Autoplay, Keyboard, A11y],
			slidesPerView: cap(mobileSpv),
			spaceBetween: Math.max(0, gap),
			speed: typeof opts.speed === 'number' ? opts.speed : 500,
			loop: Boolean(opts.loop) && slideCount >= 4,
			freeMode: opts.freeMode === true,
			grabCursor: opts.grabCursor !== false && !reduced,
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

// ── Per-root sync (deferred-aware) ──
function syncCarouselRoot(root: HTMLElement): void {
	if (isElementHidden(root)) {
		if (!root.hasAttribute('data-deferred')) {
			root.setAttribute('data-deferred', '1');
		}
		return;
	}

	if (shouldUseGrid(root)) {
		destroySwiper(root);
		setGridMode(root, true);
		const section = root.closest<HTMLElement>('.nextora-blog-list-carousel');
		markSectionReady(section);
		return;
	}

	if (root.dataset.nextoraBlcSwiperInited !== '1') {
		mountSwiper(root);
	}
}

function initCarouselRoots(container: Element | Document = document): void {
	container
		.querySelectorAll<HTMLElement>('.nextora-blc__carousel-root')
		.forEach((root) => syncCarouselRoot(root));
}

function initAllScrollReveals(container: Element | Document = document): void {
	container
		.querySelectorAll<HTMLElement>('.nextora-blog-list-carousel[data-nextora-scroll-reveal="1"]')
		.forEach((section) => initScrollReveal(section));
}

// ── Resize handler ──
let resizeTimer = 0;
function onResize(): void {
	window.clearTimeout(resizeTimer);
	resizeTimer = window.setTimeout(() => {
		document.querySelectorAll<HTMLElement>('.nextora-blc__carousel-root').forEach((root) => {
			updateGridActiveClass(root);
			syncCarouselRoot(root);
		});
		ScrollTrigger.refresh();
	}, 200);
}

// ── Deferred element watcher (mega menu / tabs) ──
function watchDeferredElements(): void {
	const visibilityState = new WeakMap<HTMLElement, boolean>();

	const check = (): void => {
		let hasWork = false;

		// 1) Initially-deferred carousel roots
		document
			.querySelectorAll<HTMLElement>('.nextora-blc__carousel-root[data-deferred="1"]')
			.forEach((root) => {
				if (!isElementHidden(root)) {
					root.removeAttribute('data-deferred');
					root.setAttribute('data-deferred-replay', '1');
					syncCarouselRoot(root);
					const section = root.closest<HTMLElement>('.nextora-blog-list-carousel');
					if (section) {
						section.setAttribute('data-deferred-replay', '1');
						initScrollReveal(section);
					}
				}
				hasWork = true;
			});

		// 2) Initially-deferred reveal sections
		document
			.querySelectorAll<HTMLElement>('.nextora-blog-list-carousel[data-deferred-reveal="1"]')
			.forEach((section) => {
				if (!isElementHidden(section)) {
					section.removeAttribute('data-deferred-reveal');
					section.setAttribute('data-deferred-replay', '1');
					initScrollReveal(section);
				}
				hasWork = true;
			});

		// 3) Toggle replay for carousel roots
		document
			.querySelectorAll<HTMLElement>(
				'.nextora-blc__carousel-root[data-deferred-replay="1"]',
			)
			.forEach((root) => {
				const hidden = isElementHidden(root);
				const wasHidden = visibilityState.get(root);

				if (hidden && !wasHidden) {
					const section = root.closest<HTMLElement>('.nextora-blog-list-carousel');
					const cards = Array.from(root.querySelectorAll<HTMLElement>('.swiper-slide'));
					const headerEl = section?.querySelector<HTMLElement>('.nextora-blc__header');

					const allTargets: (HTMLElement | HTMLElement[])[] = [];
					if (cards.length) allTargets.push(cards as unknown as HTMLElement[]);
					if (headerEl) allTargets.push(headerEl);
					allTargets.push(root);
					allTargets.forEach((t) => gsap.killTweensOf(t));

					if (cards.length > 0) clearRevealStyles(cards);
					if (headerEl) clearRevealStyles([headerEl]);
					clearRevealStyles([root]);

					destroySwiper(root);

					if (section) {
						section.removeAttribute(SCROLL_INIT_ATTR);
						section.removeAttribute('data-reveal-gen');
						section.classList.remove('nextora-blog-list-carousel--grid-active');
						section.classList.remove('nextora-blog-list-carousel--reveal-ready');
						section.classList.add('nextora-blog-list-carousel--reveal-pending');
						section.classList.add('nextora-blog-list-carousel--loading');
						section.classList.remove('nextora-blog-list-carousel--ready');
					}
				} else if (!hidden && wasHidden) {
					const section = root.closest<HTMLElement>('.nextora-blog-list-carousel');
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
			.querySelectorAll<HTMLElement>('.nextora-blog-list-carousel[data-deferred-replay="1"]')
			.forEach((section) => {
				if (section.querySelector('.nextora-blc__carousel-root[data-deferred-replay="1"]')) {
					return;
				}

				const hidden = isElementHidden(section);
				const wasHidden = visibilityState.get(section);

				if (hidden && !wasHidden) {
					const cards = Array.from(section.querySelectorAll<HTMLElement>('.swiper-slide'));
					const headerEl = section.querySelector<HTMLElement>('.nextora-blc__header');
					const allTargets: (HTMLElement | HTMLElement[])[] = [];
					if (cards.length) allTargets.push(cards as unknown as HTMLElement[]);
					if (headerEl) allTargets.push(headerEl);
					allTargets.push(section);
					allTargets.forEach((t) => gsap.killTweensOf(t));
					if (cards.length > 0) clearRevealStyles(cards);
					if (headerEl) clearRevealStyles([headerEl]);
					section.removeAttribute(SCROLL_INIT_ATTR);
					section.removeAttribute('data-reveal-gen');
					section.classList.remove('nextora-blog-list-carousel--reveal-ready');
					section.classList.add('nextora-blog-list-carousel--reveal-pending');
				} else if (!hidden && wasHidden) {
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

function run(): void {
	bindBrokenImageFallback(document);
	initCarouselRoots(document);
	initAllScrollReveals(document);
	watchDeferredElements();
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
window.addEventListener('nextora-blog-list-carousel-reinit', () => {
	initCarouselRoots(document);
	initAllScrollReveals(document);
	ScrollTrigger.refresh();
});
