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

function getGridMinWidth(root: HTMLElement): number {
	const raw = parseInt(root.getAttribute('data-grid-min-width') || '981', 10);
	return Number.isFinite(raw) ? raw : 981;
}

function getLayoutMode(root: HTMLElement): 'carousel' | 'grid' {
	const mode = root.getAttribute('data-layout-mode');
	return mode === 'grid' ? 'grid' : 'carousel';
}

function shouldUseSwiper(root: HTMLElement): boolean {
	if (getLayoutMode(root) === 'carousel') {
		return true;
	}
	return window.innerWidth < getGridMinWidth(root);
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
	const content = section.querySelector<HTMLElement>(
		'.nextora-team-section__carousel-root, .nextora-team-section__deck-container'
	);
	const targets = [header, content].filter((el): el is HTMLElement => el !== null);

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

	if (content) {
		timeline.to(
			content,
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

const swiperByRoot = new WeakMap<HTMLElement, Swiper>();

function destroySwiper(root: HTMLElement): void {
	const existing = swiperByRoot.get(root);
	if (existing) {
		existing.destroy(true, true);
		swiperByRoot.delete(root);
	}
	delete root.dataset.nextoraTeamSwiperInited;
	delete root.dataset.nextoraTeamSwiperPending;
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
	root.classList.toggle('nextora-team-section__carousel-root--grid-active', active);
	const section = root.closest<HTMLElement>('.nextora-team-section');
	if (section) {
		section.classList.toggle('nextora-team-section--grid-active', active);
	}
}

function mountSwiper(root: HTMLElement): void {
	if (root.dataset.nextoraTeamSwiperInited === '1' || root.dataset.nextoraTeamSwiperPending === '1') {
		return;
	}

	const section = root.closest<HTMLElement>('.nextora-team-section');
	const el = root.querySelector<HTMLElement>('.nextora-team-section__swiper');
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

function ensureCorrectLayout(root: HTMLElement): void {
	const needSwiper = shouldUseSwiper(root);
	const hasSwiper = swiperByRoot.has(root);

	if (needSwiper && !hasSwiper) {
		// Need carousel but don't have it yet - mount
		mountSwiper(root);
	} else if (!needSwiper && hasSwiper) {
		// Don't need carousel but have it - destroy and enable grid
		destroySwiper(root);
		setGridMode(root, true);
		const section = root.closest<HTMLElement>('.nextora-team-section');
		markSectionReady(section);
	} else if (!needSwiper && !hasSwiper) {
		// Grid mode and no swiper - just setup grid
		setGridMode(root, true);
		const section = root.closest<HTMLElement>('.nextora-team-section');
		markSectionReady(section);
	}
	// else: needSwiper && hasSwiper - already correct, do nothing
}

function initSwiperIn(container: Element | Document): void {
	const roots = container.querySelectorAll<HTMLElement>('.nextora-team-section__carousel-root');

	roots.forEach((root) => {
		ensureCorrectLayout(root);

		const mq = window.matchMedia(`(min-width: ${getGridMinWidth(root)}px)`);
		const onChange = (): void => {
			ensureCorrectLayout(root);
			ScrollTrigger.refresh();
		};

		if (typeof mq.addEventListener === 'function') {
			mq.addEventListener('change', onChange);
		} else if (typeof mq.addListener === 'function') {
			mq.addListener(onChange);
		}
	});
}

function initTeamSectionTemplate02(container: Element | Document = document): void {
	const decks = container.querySelectorAll<HTMLElement>('.nextora-team-section__deck-container');

	decks.forEach((deck) => {
		if (deck.dataset.nextoraDeckInited === '1') {
			return;
		}
		deck.dataset.nextoraDeckInited = '1';

		const section = deck.closest<HTMLElement>('.nextora-team-section');
		const cards = Array.from(deck.querySelectorAll<HTMLElement>('.nextora-team-section__deck-photo-card'));
		const panes = Array.from(deck.querySelectorAll<HTMLElement>('.nextora-team-section__deck-info-pane'));
		const prevBtn = deck.querySelector<HTMLButtonElement>('.nextora-team-section__deck-nav-btn--prev');
		const nextBtn = deck.querySelector<HTMLButtonElement>('.nextora-team-section__deck-nav-btn--next');

		const total = cards.length;
		if (total === 0) {
			markSectionReady(section);
			return;
		}

		const autoplay = deck.getAttribute('data-autoplay') === '1';
		const autoplayDelay = parseInt(deck.getAttribute('data-autoplay-delay') || '4000', 10);
		const pauseOnHover = deck.getAttribute('data-pause-on-hover') !== '0';
		const loop = deck.getAttribute('data-loop') === '1';
		const speedMs = parseInt(deck.getAttribute('data-speed') || '500', 10);
		const speedSec = Math.max(0.1, (Number.isFinite(speedMs) ? speedMs : 500) / 1000);
		const reduced = prefersReducedMotion();

		let activeIndex = 0;
		let autoplayTimer: number | null = null;
		let isHovered = false;

		const rotations = [-7, 6, -5, 7, -4, 6, -6, 5];
		const getCardRotation = (index: number) => rotations[index % rotations.length];

		const startAutoplay = () => {
			if (!autoplay || total <= 1) return;
			stopAutoplay();
			autoplayTimer = window.setInterval(() => {
				if (!pauseOnHover || !isHovered) {
					next(false);
				}
			}, autoplayDelay);
		};

		const stopAutoplay = () => {
			if (autoplayTimer !== null) {
				clearInterval(autoplayTimer);
				autoplayTimer = null;
			}
		};

		const restartAutoplay = () => {
			if (autoplay) {
				startAutoplay();
			}
		};

		const updateDeck = (instant = false): void => {
			cards.forEach((card, i) => {
				const offset = (i - activeIndex + total) % total;
				const isCurrent = offset === 0;

				card.classList.toggle('is-active', isCurrent);
				card.style.pointerEvents = isCurrent ? 'auto' : 'none';

				if (instant || reduced) {
					card.style.transform = isCurrent
						? 'none'
						: `rotate(${getCardRotation(i)}deg) scale(${Math.max(0.86, 0.95 - offset * 0.03)})`;
					card.style.zIndex = isCurrent ? '30' : String(Math.max(1, 20 - offset));
					card.style.opacity = isCurrent ? '1' : offset > 3 ? '0' : String(Math.max(0.4, 0.85 - offset * 0.15));
					card.style.transformOrigin = 'bottom center';
				} else {
					gsap.to(card, {
						scale: isCurrent ? 1 : Math.max(0.86, 0.95 - offset * 0.03),
						rotation: isCurrent ? 0 : getCardRotation(i),
						zIndex: isCurrent ? 30 : Math.max(1, 20 - offset),
						opacity: isCurrent ? 1 : offset > 3 ? 0 : Math.max(0.4, 0.85 - offset * 0.15),
						y: 0,
						duration: speedSec,
						ease: 'power2.out',
					});
				}
			});

			panes.forEach((pane, i) => {
				pane.classList.toggle('is-active', i === activeIndex);
			});
		};

		const animDuration = Math.min(0.24, Math.max(0.15, speedSec * 0.45));

		const goTo = (newIndex: number, dir: 1 | -1 = 1, isUserAction = true): void => {
			if (total <= 1) return;
			if (!loop && (newIndex < 0 || newIndex >= total)) return;

			const targetIndex = (newIndex + total) % total;
			if (targetIndex === activeIndex) return;

			if (isUserAction) {
				restartAutoplay();
			}

			activeIndex = targetIndex;

			if (reduced) {
				updateDeck(true);
				return;
			}

			const targetCard = cards[targetIndex];

			// 21st.dev True Card Lift Animation:
			// The incoming target card jumps up, rotates straight, scales up to 1, and drops over the front
			gsap.killTweensOf(cards);
			gsap.set(targetCard, { zIndex: 40, pointerEvents: 'auto' });

			const cardTl = gsap.timeline({
				onComplete: () => {
					cards.forEach((card, i) => {
						const offset = (i - activeIndex + total) % total;
						const isCurrent = offset === 0;
						card.classList.toggle('is-active', isCurrent);
						card.style.pointerEvents = isCurrent ? 'auto' : 'none';
						card.style.zIndex = isCurrent ? '30' : String(Math.max(1, 20 - offset));
					});
				},
			});

			// Lift and straighten
			cardTl.fromTo(
				targetCard,
				{
					y: 0,
					scale: 0.94,
					rotation: getCardRotation(targetIndex),
					opacity: 0.85,
				},
				{
					y: -65,
					rotation: 0,
					scale: 1,
					opacity: 1,
					duration: animDuration,
					ease: 'power2.out',
				}
			);

			// Drop down to front
			cardTl.to(targetCard, {
				y: 0,
				duration: animDuration,
				ease: 'power2.inOut',
			});

			// Other cards animate to their new positions in the stack
			cards.forEach((card, i) => {
				if (i === targetIndex) return;
				const offset = (i - targetIndex + total) % total;
				gsap.to(card, {
					scale: Math.max(0.86, 0.95 - offset * 0.03),
					rotation: getCardRotation(i),
					zIndex: Math.max(1, 20 - offset),
					opacity: offset > 3 ? 0 : Math.max(0.4, 0.85 - offset * 0.15),
					y: 0,
					duration: animDuration * 1.6,
					ease: 'power2.out',
				});
			});

			// Text Transition - Smooth Direct Fade
			gsap.killTweensOf(panes);
			panes.forEach((p, i) => {
				const isCurrent = i === targetIndex;
				p.classList.toggle('is-active', isCurrent);
				if (isCurrent) {
					gsap.fromTo(
						p,
						{ opacity: 0 },
						{
							opacity: 1,
							duration: 0.22,
							ease: 'power1.out',
							clearProps: 'opacity',
						}
					);
				} else {
					p.removeAttribute('style');
				}
			});

			cards.forEach((card, i) => {
				const isCurrent = i === targetIndex;
				card.classList.toggle('is-active', isCurrent);
				card.style.pointerEvents = isCurrent ? 'auto' : 'none';
			});
		};

		const next = (isUserAction = true) => goTo(activeIndex + 1, 1, isUserAction);
		const prev = (isUserAction = true) => goTo(activeIndex - 1, -1, isUserAction);

		if (nextBtn) nextBtn.addEventListener('click', () => next(true));
		if (prevBtn) prevBtn.addEventListener('click', () => prev(true));

		let touchStartX = 0;
		deck.addEventListener(
			'touchstart',
			(e: TouchEvent) => {
				touchStartX = e.touches[0].clientX;
			},
			{ passive: true }
		);
		deck.addEventListener(
			'touchend',
			(e: TouchEvent) => {
				const touchEndX = e.changedTouches[0].clientX;
				const diff = touchEndX - touchStartX;
				if (Math.abs(diff) > 40) {
					if (diff < 0) next(true);
					else prev(true);
				}
			},
			{ passive: true }
		);

		if (autoplay) {
			startAutoplay();
			if (pauseOnHover) {
				deck.addEventListener('mouseenter', () => {
					isHovered = true;
				});
				deck.addEventListener('mouseleave', () => {
					isHovered = false;
				});
			}
		}

		updateDeck(true);
		markSectionReady(section);
	});
}

function run(): void {
	initAllScrollReveals(document);
	initSwiperIn(document);
	initTeamSectionTemplate02(document);
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
	initTeamSectionTemplate02(document);
	ScrollTrigger.refresh();
});
