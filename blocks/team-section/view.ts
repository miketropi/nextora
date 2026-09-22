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
		640: { slidesPerView: cap(tabletSpv), spaceBetween: Math.max(0, gap) },
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
			breakpointsBase: 'window',
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
				pane.classList.remove('is-exiting');
				pane.classList.toggle('is-active', i === activeIndex);
				gsap.set(pane, { clearProps: 'all' });
				const items = pane.querySelectorAll(
					'.nextora-team-section__deck-name, .nextora-team-section__deck-role, .nextora-team-section__deck-bio, .nextora-team-section__deck-social'
				);
				gsap.set(items, { clearProps: 'all' });
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

			const prevIndex = activeIndex;
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

			// Text Transition - Cinematic Cross-Fade & Typography Stagger
			const currentPane = panes[prevIndex];
			const nextPane = panes[targetIndex];

			gsap.killTweensOf(panes);
			panes.forEach((p) => {
				const items = p.querySelectorAll(
					'.nextora-team-section__deck-name, .nextora-team-section__deck-role, .nextora-team-section__deck-bio, .nextora-team-section__deck-social'
				);
				gsap.killTweensOf(items);
				gsap.set(items, { clearProps: 'all' });
			});

			// Outgoing text animation: smooth slide up and fade out
			if (currentPane && currentPane !== nextPane) {
				currentPane.classList.add('is-exiting');
				currentPane.classList.remove('is-active');
				gsap.to(currentPane, {
					opacity: 0,
					y: -8,
					duration: 0.15,
					ease: 'power2.in',
					onComplete: () => {
						currentPane.classList.remove('is-exiting');
						gsap.set(currentPane, { clearProps: 'all' });
						const items = currentPane.querySelectorAll(
							'.nextora-team-section__deck-name, .nextora-team-section__deck-role, .nextora-team-section__deck-bio, .nextora-team-section__deck-social'
						);
						gsap.set(items, { clearProps: 'all' });
					},
				});
			}

			// Clean up any other non-active panes
			panes.forEach((p, i) => {
				if (i !== prevIndex && i !== targetIndex) {
					p.classList.remove('is-active', 'is-exiting');
					gsap.set(p, { clearProps: 'all' });
					const items = p.querySelectorAll(
						'.nextora-team-section__deck-name, .nextora-team-section__deck-role, .nextora-team-section__deck-bio, .nextora-team-section__deck-social'
					);
					gsap.set(items, { clearProps: 'all' });
				}
			});

			// Incoming text animation: starts right as the card reaches apex and drops into front
			if (nextPane) {
				nextPane.classList.remove('is-exiting');
				nextPane.classList.add('is-active');

				const nextItems = Array.from(
					nextPane.querySelectorAll<HTMLElement>(
						'.nextora-team-section__deck-name, .nextora-team-section__deck-role, .nextora-team-section__deck-bio, .nextora-team-section__deck-social'
					)
				);

				gsap.set(nextPane, { clearProps: 'all' });
				gsap.set(nextItems, { clearProps: 'all' });

				if (nextItems.length > 0) {
					gsap.fromTo(
						nextItems,
						{
							opacity: 0,
							y: 10,
						},
						{
							opacity: 1,
							y: 0,
							duration: 0.32,
							stagger: 0.04,
							ease: 'power2.out',
							clearProps: 'all',
						}
					);
				} else {
					gsap.fromTo(
						nextPane,
						{ opacity: 0, y: 10 },
						{
							opacity: 1,
							y: 0,
							duration: 0.32,
							ease: 'power2.out',
							clearProps: 'all',
						}
					);
				}
			}

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

		const onDrawerOpen = () => {
			stopAutoplay();
		};
		const onDrawerClose = () => {
			if (autoplay) {
				restartAutoplay();
			}
		};
		document.addEventListener('nextora-team-drawer:opened', onDrawerOpen);
		document.addEventListener('nextora-team-drawer:closed', onDrawerClose);

		markSectionReady(section);
	});
}

type MemberPopupItem = {
	id: string;
	name: string;
	role: string;
	tags?: string[];
	bio?: string;
	detail?: string;
	photoUrl?: string;
	photoAlt?: string;
	socialLinks?: Array<{ platform: string; url: string }>;
};

const SOCIAL_ICONS: Record<string, string> = {
	linkedin:
		'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>',
	twitter:
		'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
	github:
		'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>',
	instagram:
		'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>',
	facebook:
		'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
	email:
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
	website:
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
};

function formatPlatformLabel(platform: string): string {
	const labels: Record<string, string> = {
		linkedin: 'LinkedIn',
		twitter: 'Twitter / X',
		github: 'GitHub',
		instagram: 'Instagram',
		facebook: 'Facebook',
		email: 'Email',
		website: 'Website',
	};
	return labels[platform] || platform.charAt(0).toUpperCase() + platform.slice(1);
}

function initTeamMemberDrawers(container: Element | Document = document): void {
	const sections = container.querySelectorAll<HTMLElement>(
		'.nextora-team-section[data-enable-popup="1"], .nextora-team-section--popup-enabled'
	);

	sections.forEach((section) => {
		if (section.dataset.nextoraDrawerInited === '1') {
			return;
		}

		const dataScript = section.querySelector<HTMLScriptElement>('.nextora-team-section__popup-data');
		const drawer = section.querySelector<HTMLElement>('.nextora-team-drawer');
		if (!dataScript || !drawer) {
			return;
		}

		// Teleport drawer to document.body to ensure correct fixed positioning and isolated cascade
		if (drawer.parentElement !== document.body) {
			document.body.appendChild(drawer);
		}

		let membersMap: Record<string, MemberPopupItem> = {};
		try {
			membersMap = JSON.parse(dataScript.textContent || '{}') as Record<string, MemberPopupItem>;
		} catch {
			return;
		}

		const backdrop = drawer.querySelector<HTMLElement>('.nextora-team-drawer__backdrop');
		const closeBtn = drawer.querySelector<HTMLButtonElement>('.nextora-team-drawer__close');
		const photoWrap = drawer.querySelector<HTMLElement>('.nextora-team-drawer__photo-wrap');
		const photoImg = drawer.querySelector<HTMLImageElement>('.nextora-team-drawer__photo');
		const tagsWrap = drawer.querySelector<HTMLElement>('.nextora-team-drawer__tags');
		const nameEl = drawer.querySelector<HTMLElement>('.nextora-team-drawer__name');
		const roleEl = drawer.querySelector<HTMLElement>('.nextora-team-drawer__role');
		const socialWrap = drawer.querySelector<HTMLElement>('.nextora-team-drawer__social');
		const bioWrap = drawer.querySelector<HTMLElement>('.nextora-team-drawer__bio-wrap');
		const bioEl = drawer.querySelector<HTMLElement>('.nextora-team-drawer__bio');
		const detailWrap = drawer.querySelector<HTMLElement>('.nextora-team-drawer__detail-wrap');
		const detailEl = drawer.querySelector<HTMLElement>('.nextora-team-drawer__detail');

		const drawerPlaceholderUrl = drawer.getAttribute('data-placeholder-url') || '';
		let lastTriggerCard: HTMLElement | null = null;

		const openDrawer = (memberId: string, trigger?: HTMLElement) => {
			const member = membersMap[memberId];
			if (!member) {
				return;
			}

			lastTriggerCard = trigger || null;

			// Populate photo
			if (photoWrap && photoImg) {
				const photoSrc = member.photoUrl || drawerPlaceholderUrl;
				if (photoSrc) {
					photoImg.src = photoSrc;
					photoImg.alt = member.photoAlt || member.name || 'Team member';
					photoImg.onerror = () => {
						if (drawerPlaceholderUrl && photoImg.src !== drawerPlaceholderUrl) {
							photoImg.src = drawerPlaceholderUrl;
						}
					};
					photoWrap.style.display = '';
				} else {
					photoWrap.style.display = 'none';
				}
			}

			// Populate tags
			if (tagsWrap) {
				tagsWrap.innerHTML = '';
				if (Array.isArray(member.tags) && member.tags.length > 0) {
					member.tags.forEach((tag) => {
						if (!tag) return;
						const span = document.createElement('span');
						span.className = 'nextora-team-drawer__tag';
						span.textContent = tag;
						tagsWrap.appendChild(span);
					});
					tagsWrap.style.display = '';
				} else {
					tagsWrap.style.display = 'none';
				}
			}

			// Populate name & role
			if (nameEl) {
				nameEl.textContent = member.name;
			}
			if (roleEl) {
				if (member.role) {
					roleEl.textContent = member.role;
					roleEl.style.display = '';
				} else {
					roleEl.style.display = 'none';
				}
			}

			// Populate social links
			if (socialWrap) {
				socialWrap.innerHTML = '';
				if (Array.isArray(member.socialLinks) && member.socialLinks.length > 0) {
					member.socialLinks.forEach((link) => {
						if (!link.url) return;
						const a = document.createElement('a');
						a.className = 'nextora-team-drawer__social-link';
						a.href = link.url;
						a.target = '_blank';
						a.rel = 'noopener noreferrer';
						const iconHtml = SOCIAL_ICONS[link.platform] || SOCIAL_ICONS.website;
						a.innerHTML = `${iconHtml}<span>${formatPlatformLabel(link.platform)}</span>`;
						socialWrap.appendChild(a);
					});
					socialWrap.style.display = '';
				} else {
					socialWrap.style.display = 'none';
				}
			}

			// Populate bio
			if (bioWrap && bioEl) {
				if (member.bio) {
					bioEl.textContent = member.bio;
					bioWrap.style.display = '';
				} else {
					bioWrap.style.display = 'none';
				}
			}

			// Populate detail
			if (detailWrap && detailEl) {
				if (member.detail) {
					detailEl.textContent = member.detail;
					detailWrap.style.display = '';
				} else {
					detailWrap.style.display = 'none';
				}
			}

			drawer.classList.add('is-open');
			drawer.setAttribute('aria-hidden', 'false');
			document.body.classList.add('nextora-team-drawer-open');
			document.dispatchEvent(new CustomEvent('nextora-team-drawer:opened', { detail: { memberId } }));

			if (closeBtn) {
				window.setTimeout(() => closeBtn.focus(), 80);
			}
		};

		const closeDrawer = () => {
			if (!drawer.classList.contains('is-open')) {
				return;
			}

			drawer.classList.remove('is-open');
			drawer.setAttribute('aria-hidden', 'true');

			const anyOtherOpen = document.querySelector('.nextora-team-drawer.is-open');
			if (!anyOtherOpen) {
				document.body.classList.remove('nextora-team-drawer-open');
			}
			document.dispatchEvent(new CustomEvent('nextora-team-drawer:closed'));

			if (lastTriggerCard) {
				lastTriggerCard.focus();
				lastTriggerCard = null;
			}
		};

		if (closeBtn) {
			closeBtn.addEventListener('click', (e) => {
				e.preventDefault();
				closeDrawer();
			});
		}

		if (backdrop) {
			backdrop.addEventListener('click', () => {
				closeDrawer();
			});
		}

		// Click delegation for member cards
		let startX = 0;
		let startY = 0;

		section.addEventListener('pointerdown', (e: PointerEvent) => {
			startX = e.clientX;
			startY = e.clientY;
		});

		section.addEventListener('click', (e: MouseEvent) => {
			// Don't open if dragged (e.g. Swiper swipe gesture)
			const diffX = Math.abs(e.clientX - startX);
			const diffY = Math.abs(e.clientY - startY);
			if (diffX > 10 || diffY > 10) {
				return;
			}

			const target = e.target as HTMLElement;

			// If click inside the drawer or on a regular social link, don't intercept
			if (target.closest('.nextora-team-drawer')) {
				return;
			}
			if (target.closest('a')) {
				return;
			}

			// Find clicked member card
			const card = target.closest<HTMLElement>('.nextora-team-section__card--has-popup');
			if (!card) {
				return;
			}

			const memberId = card.getAttribute('data-member-id');
			if (memberId) {
				e.preventDefault();
				openDrawer(memberId, card);
			}
		});

		// Keyboard accessibility: Enter or Space on focused card opens drawer
		section.addEventListener('keydown', (e: KeyboardEvent) => {
			if (e.key === 'Enter' || e.key === ' ') {
				const target = e.target as HTMLElement;
				const card = target.closest<HTMLElement>('.nextora-team-section__card--has-popup');
				if (card && target === card) {
					const memberId = card.getAttribute('data-member-id');
					if (memberId) {
						e.preventDefault();
						openDrawer(memberId, card);
					}
				}
			}
		});

		// Close with Escape key
		document.addEventListener('keydown', (e: KeyboardEvent) => {
			if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
				closeDrawer();
			}
		});

		section.dataset.nextoraDrawerInited = '1';
	});
}

function run(): void {
	initAllScrollReveals(document);
	initSwiperIn(document);
	initTeamSectionTemplate02(document);
	initTeamMemberDrawers(document);
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
	initTeamMemberDrawers(document);
	ScrollTrigger.refresh();
});
