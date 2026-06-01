/**
 * Our Team section — Swiper carousel + optional scroll reveal.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import { A11y, Autoplay, FreeMode, Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const SCROLL_INIT_ATTR = 'data-nextora-team-scroll-init';
const REVEAL_START_RATIO = 0.88;
const REVEAL_FALLBACK_MS = 4000;

type SwiperOpts = {
	loop?: boolean;
	autoplay?: boolean;
	autoplayDelay?: number;
	pauseOnHover?: boolean;
	showPagination?: boolean;
	paginationType?: string;
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

function isRevealStartPassed(section: HTMLElement): boolean {
	const rect = section.getBoundingClientRect();
	const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
	return rect.top <= viewportHeight * REVEAL_START_RATIO && rect.bottom > 0;
}

function getOpts(root: HTMLElement): SwiperOpts {
	try {
		return JSON.parse(root.getAttribute('data-swiper-opts') || '{}') as SwiperOpts;
	} catch {
		return {};
	}
}

function setRevealReady(section: HTMLElement): void {
	section.classList.add('nextora-team-section--reveal-ready');
	section.classList.remove('nextora-team-section--reveal-pending');
}

function clearRevealStyles(targets: HTMLElement[]): void {
	if (targets.length === 0) {
		return;
	}
	gsap.set(targets, { clearProps: 'opacity,transform,translate,rotate,scale' });
}

function scheduleRevealFallback(section: HTMLElement, targets: HTMLElement[]): void {
	window.setTimeout(() => {
		if (section.classList.contains('nextora-team-section--reveal-ready')) {
			return;
		}
		// Avoid showing the section before the user scrolls to it.
		if (!isRevealStartPassed(section)) {
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

	const header = section.querySelector<HTMLElement>('.nextora-team-section__header');
	const carousel = section.querySelector<HTMLElement>('.nextora-team-section__carousel-root');
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
		timeline.to(
			carousel,
			{
				opacity: 1,
				y: 0,
				duration: 1.05,
			},
			header ? 0.18 : 0,
		);
	}

	let played = false;

	const playReveal = (): void => {
		if (played || section.classList.contains('nextora-team-section--reveal-ready')) {
			return;
		}
		played = true;
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

function initAllScrollReveals(container: Element | Document = document): void {
	container
		.querySelectorAll<HTMLElement>('.nextora-team-section[data-nextora-scroll-reveal="1"]')
		.forEach((section) => {
			initScrollReveal(section);
		});
}

function markSectionReady(section: HTMLElement | null): void {
	if (!section) {
		return;
	}
	section.classList.remove('nextora-team-section--loading');
	section.classList.add('nextora-team-section--ready');
	requestAnimationFrame(() => {
		ScrollTrigger.refresh();
	});
}

function initSwiperIn(container: Element | Document): void {
	const roots = container.querySelectorAll<HTMLElement>('.nextora-team-section__carousel-root');

	roots.forEach((root) => {
		if (root.dataset.nextoraTeamSwiperInited === '1' || root.dataset.nextoraTeamSwiperPending === '1') {
			return;
		}

		const section = root.closest<HTMLElement>('.nextora-team-section');
		const el = root.querySelector<HTMLElement>('.nextora-team-section__swiper');
		if (!el) {
			return;
		}

		const opts = getOpts(root);
		const slideCount = el.querySelectorAll('.swiper-slide').length;
		if (slideCount < 1) {
			markSectionReady(section);
			return;
		}

		const showArrows = opts.showArrows === true;
		const showPagination = opts.showPagination !== false;
		const prevEl = root.querySelector<HTMLElement>('.nextora-team-section__arrow--prev');
		const nextEl = root.querySelector<HTMLElement>('.nextora-team-section__arrow--next');
		const paginationEl = root.querySelector<HTMLElement>('.nextora-team-section__pagination');

		const baseSpv = roundSpv(
			typeof opts.slidesPerView === 'number' && !Number.isNaN(opts.slidesPerView)
				? opts.slidesPerView
				: 1.2,
		);
		const tabletSpv = roundSpv(
			typeof opts.slidesPerViewTablet === 'number' && !Number.isNaN(opts.slidesPerViewTablet)
				? opts.slidesPerViewTablet
				: 2.5,
		);
		const desktopSpv = roundSpv(
			typeof opts.slidesPerViewDesktop === 'number' && !Number.isNaN(opts.slidesPerViewDesktop)
				? opts.slidesPerViewDesktop
				: 4,
		);
		const gap =
			typeof opts.spaceBetween === 'number' && !Number.isNaN(opts.spaceBetween)
				? opts.spaceBetween
				: 24;

		const cap = (n: number) => Math.max(1, Math.min(roundSpv(n), Math.max(1, slideCount)));

		const defaultBreakpoints: Record<number, { slidesPerView: number; spaceBetween: number }> = {
			768: { slidesPerView: cap(tabletSpv), spaceBetween: Math.max(0, gap) },
			1024: { slidesPerView: cap(desktopSpv), spaceBetween: Math.max(0, gap) },
		};

		const wantLoop = Boolean(opts.loop) && slideCount > 1;
		const anyFractionalSpv =
			!isEffectivelyInteger(cap(baseSpv)) ||
			!isEffectivelyInteger(cap(tabletSpv)) ||
			!isEffectivelyInteger(cap(desktopSpv));
		const canLoop = wantLoop && slideCount >= 4 && !anyFractionalSpv;
		const useRewind = wantLoop && !canLoop;

		const reduced = prefersReducedMotion();
		const pagType =
			opts.paginationType === 'fraction' || opts.paginationType === 'progressbar'
				? opts.paginationType
				: 'bullets';

		root.dataset.nextoraTeamSwiperPending = '1';

		const finishSection = (): void => {
			delete root.dataset.nextoraTeamSwiperPending;
			root.dataset.nextoraTeamSwiperInited = '1';
			markSectionReady(section);
		};

		const tryMount = (tick = 0): void => {
			if (el.clientWidth < 2 && tick < 60) {
				requestAnimationFrame(() => tryMount(tick + 1));
				return;
			}

			// eslint-disable-next-line no-new
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
								delay:
									typeof opts.autoplayDelay === 'number' ? opts.autoplayDelay : 4000,
								disableOnInteraction: false,
								pauseOnMouseEnter: opts.pauseOnHover !== false,
							}
						: false,
				keyboard: { enabled: true, onlyInViewport: true },
				a11y: {
					enabled: true,
					prevSlideMessage: 'Previous team member',
					nextSlideMessage: 'Next team member',
					paginationBulletMessage: 'Go to slide {{index}}',
				},
				breakpoints: normalizeBreakpoints(opts.breakpoints, defaultBreakpoints),
				...(showArrows && prevEl && nextEl ? { navigation: { nextEl, prevEl } } : {}),
				...(showPagination && paginationEl
					? {
							pagination: {
								el: paginationEl,
								clickable: true,
								type: pagType,
							},
						}
					: {}),
			});

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
	});
}

function run(): void {
	initAllScrollReveals(document);
	initSwiperIn(document);
	ScrollTrigger.config({ autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize' });
	ScrollTrigger.refresh();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', run, { once: true });
} else {
	run();
}

window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
window.addEventListener('nextora-team-section-reinit', () => {
	initAllScrollReveals(document);
	initSwiperIn(document);
	ScrollTrigger.refresh();
});
