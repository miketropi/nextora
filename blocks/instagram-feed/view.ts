/**
 * Instagram Feed — Swiper carousel, lightbox modal, scroll reveal.
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

const SCROLL_INIT_ATTR = 'data-nextora-instagram-scroll-init';
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

type PostPayload = {
	mediaType: 'image' | 'video';
	mediaUrl: string;
	posterUrl: string;
	mediaAlt: string;
	caption: string;
	permalink: string;
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

function getOpts(root: HTMLElement): SwiperOpts {
	try {
		return JSON.parse(root.getAttribute('data-swiper-opts') || '{}') as SwiperOpts;
	} catch {
		return {};
	}
}

function getPosts(section: HTMLElement): PostPayload[] {
	try {
		return JSON.parse(section.getAttribute('data-nextora-instagram-posts') || '[]') as PostPayload[];
	} catch {
		return [];
	}
}

function bindBrokenImageFallback(container: Element | Document): void {
	container.querySelectorAll<HTMLElement>('.nextora-instagram-feed').forEach((section) => {
		const fallbackSrc =
			section.dataset.nextoraInstagramPlaceholderSrc ||
			section.querySelector<HTMLImageElement>('.nextora-instagram-feed__tile-img--placeholder')?.src ||
			'';

		if (!fallbackSrc) {
			return;
		}

		section
			.querySelectorAll<HTMLImageElement>(
				'.nextora-instagram-feed__tile-img:not(.nextora-instagram-feed__tile-img--placeholder)',
			)
			.forEach((img) => {
				if (img.dataset.nextoraInstagramFallbackBound === '1') {
					return;
				}
				img.dataset.nextoraInstagramFallbackBound = '1';

				const src = img.dataset.nextoraInstagramFallbackSrc || fallbackSrc;
				img.addEventListener(
					'error',
					() => {
						img.onerror = null;
						img.src = src;
						img.alt = '';
						img.setAttribute('aria-hidden', 'true');
						img.classList.add('nextora-instagram-feed__tile-img--placeholder');
					},
					{ once: true },
				);
			});
	});
}

function playFeedVideo(video: HTMLVideoElement): void {
	video.muted = true;
	video.defaultMuted = true;
	video.playsInline = true;
	video.loop = true;
	video.setAttribute('playsinline', '');
	video.setAttribute('webkit-playsinline', '');

	const start = (): void => {
		void video.play().catch(() => {});
	};

	if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
		start();
		return;
	}

	video.addEventListener('loadeddata', start, { once: true });
	video.load();
}

function initFeedVideoPlayback(container: Element | Document): void {
	const reduced = prefersReducedMotion();

	container.querySelectorAll<HTMLElement>('.nextora-instagram-feed').forEach((section) => {
		const videos = section.querySelectorAll<HTMLVideoElement>('.nextora-instagram-feed__tile-video');
		if (videos.length === 0) {
			return;
		}

		if (reduced) {
			videos.forEach((video) => {
				video.removeAttribute('autoplay');
				video.pause();
			});
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const video = entry.target as HTMLVideoElement;
					if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
						playFeedVideo(video);
					} else {
						video.pause();
					}
				});
			},
			{ threshold: [0, 0.35, 0.6, 1] },
		);

		videos.forEach((video) => {
			observer.observe(video);
			if (video.getBoundingClientRect().width > 0) {
				playFeedVideo(video);
			}
		});
	});
}

function setRevealReady(section: HTMLElement): void {
	section.classList.add('nextora-instagram-feed--reveal-ready');
	section.classList.remove('nextora-instagram-feed--reveal-pending');
}

function clearRevealStyles(targets: HTMLElement[]): void {
	if (targets.length === 0) {
		return;
	}
	gsap.set(targets, { clearProps: 'opacity,transform,translate,rotate,scale' });
}

function scheduleRevealFallback(section: HTMLElement, targets: HTMLElement[]): void {
	window.setTimeout(() => {
		if (section.classList.contains('nextora-instagram-feed--reveal-ready')) {
			return;
		}
		const rect = section.getBoundingClientRect();
		const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
		if (rect.top > viewportHeight * REVEAL_START_RATIO) {
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

	const carousel = section.querySelector<HTMLElement>('.nextora-instagram-feed__carousel-root');
	const targets = [carousel].filter((el): el is HTMLElement => el !== null);

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

	timeline.to(carousel, { opacity: 1, y: 0, duration: 1.05 }, 0);

	let played = false;
	const playReveal = (): void => {
		if (played || section.classList.contains('nextora-instagram-feed--reveal-ready')) {
			return;
		}
		played = true;
		timeline.play();
	};

	scheduleRevealFallback(section, targets);

	const rect = section.getBoundingClientRect();
	const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
	if (rect.top <= viewportHeight * REVEAL_START_RATIO && rect.bottom > 0) {
		playReveal();
		return;
	}

	ScrollTrigger.create({
		trigger: section,
		start: `top ${REVEAL_START_RATIO * 100}%`,
		once: true,
		onEnter: playReveal,
	});
}

function markSectionReady(section: HTMLElement | null): void {
	if (!section) {
		return;
	}
	section.classList.remove('nextora-instagram-feed--loading');
	section.classList.add('nextora-instagram-feed--ready');
	requestAnimationFrame(() => ScrollTrigger.refresh());
}

function pauseLightboxVideo(container: HTMLElement | null): void {
	if (!container) {
		return;
	}
	const video = container.querySelector('video');
	if (video) {
		video.pause();
		video.currentTime = 0;
	}
}

function renderLightboxMedia(inner: HTMLElement, post: PostPayload): void {
	inner.replaceChildren();
	pauseLightboxVideo(inner);

	if (post.mediaType === 'video' && post.mediaUrl) {
		const video = document.createElement('video');
		video.className = 'nextora-instagram-feed__lightbox-video';
		video.controls = true;
		video.playsInline = true;
		if (post.posterUrl) {
			video.poster = post.posterUrl;
		}
		video.setAttribute('aria-label', post.mediaAlt || post.caption || 'Instagram video');

		const source = document.createElement('source');
		source.src = post.mediaUrl;
		source.type = post.mediaUrl.toLowerCase().includes('.webm') ? 'video/webm' : 'video/mp4';
		video.appendChild(source);

		inner.appendChild(video);
		void video.play().catch(() => {});
		return;
	}

	if (post.mediaUrl) {
		const img = document.createElement('img');
		img.className = 'nextora-instagram-feed__lightbox-img';
		img.src = post.mediaUrl;
		img.alt = post.mediaAlt || post.caption || '';
		img.decoding = 'async';
		inner.appendChild(img);
	}
}

function updateLightboxContent(
	section: HTMLElement,
	modal: HTMLElement,
	index: number,
	posts: PostPayload[],
): void {
	const post = posts[index];
	if (!post) {
		return;
	}

	modal.dataset.nextoraInstagramActiveIndex = String(index);

	const inner = modal.querySelector<HTMLElement>('[data-nextora-instagram-lightbox-media-inner]');
	if (inner) {
		renderLightboxMedia(inner, post);
	}

	const captionEl = modal.querySelector<HTMLElement>('[data-nextora-instagram-lightbox-caption]');
	if (captionEl) {
		if (post.caption.trim()) {
			captionEl.hidden = false;
			captionEl.textContent = post.caption;
		} else {
			captionEl.hidden = true;
			captionEl.textContent = '';
		}
	}

	const linkEl = modal.querySelector<HTMLAnchorElement>('[data-nextora-instagram-lightbox-link]');
	if (linkEl) {
		if (post.permalink.trim()) {
			linkEl.href = post.permalink;
			linkEl.hidden = false;
		} else {
			linkEl.hidden = true;
			linkEl.removeAttribute('href');
		}
	}
}

function initLightbox(section: HTMLElement): void {
	const modal = section.querySelector<HTMLElement>('.nextora-instagram-feed__lightbox');
	if (!modal || section.dataset.nextoraInstagramLightboxInited === '1') {
		return;
	}

	const posts = getPosts(section);
	if (posts.length === 0) {
		return;
	}

	section.dataset.nextoraInstagramLightboxInited = '1';

	let activeIndex = 0;
	let lastTrigger: HTMLElement | null = null;

	const openAt = (index: number, trigger: HTMLElement | null): void => {
		activeIndex = ((index % posts.length) + posts.length) % posts.length;
		lastTrigger = trigger;
		updateLightboxContent(section, modal, activeIndex, posts);

		const modalId = modal.id;
		if (modalId && typeof window.nextoraOpenModal === 'function') {
			window.nextoraOpenModal(modalId);
		}
	};

	const step = (delta: number): void => {
		openAt(activeIndex + delta, lastTrigger);
	};

	section.querySelectorAll<HTMLElement>('[data-nextora-instagram-open]').forEach((btn) => {
		btn.addEventListener('click', () => {
			const raw = btn.getAttribute('data-nextora-instagram-open');
			const index = raw !== null ? parseInt(raw, 10) : 0;
			openAt(Number.isNaN(index) ? 0 : index, btn);
		});
	});

	const prevBtn = modal.querySelector<HTMLElement>('[data-nextora-instagram-lightbox-prev]');
	const nextBtn = modal.querySelector<HTMLElement>('[data-nextora-instagram-lightbox-next]');

	prevBtn?.addEventListener('click', (e) => {
		e.preventDefault();
		step(-1);
	});
	nextBtn?.addEventListener('click', (e) => {
		e.preventDefault();
		step(1);
	});

	modal.addEventListener('keydown', (e) => {
		if (!modal.classList.contains('nextora-modal--open')) {
			return;
		}
		if (e.key === 'ArrowLeft') {
			e.preventDefault();
			step(-1);
		} else if (e.key === 'ArrowRight') {
			e.preventDefault();
			step(1);
		}
	});

	modal.addEventListener('nextora:modalclose', () => {
		const inner = modal.querySelector<HTMLElement>('[data-nextora-instagram-lightbox-media-inner]');
		pauseLightboxVideo(inner);
	});
}

function initSwiperIn(container: Element | Document): void {
	const roots = container.querySelectorAll<HTMLElement>('.nextora-instagram-feed__carousel-root');

	roots.forEach((root) => {
		if (
			root.dataset.nextoraInstagramSwiperInited === '1' ||
			root.dataset.nextoraInstagramSwiperPending === '1'
		) {
			return;
		}

		const section = root.closest<HTMLElement>('.nextora-instagram-feed');
		const el = root.querySelector<HTMLElement>('.nextora-instagram-feed__swiper');
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
		const showPagination = opts.showPagination === true;
		const prevEl = root.querySelector<HTMLElement>('.nextora-instagram-feed__arrow--prev');
		const nextEl = root.querySelector<HTMLElement>('.nextora-instagram-feed__arrow--next');
		const paginationEl = root.querySelector<HTMLElement>('.nextora-instagram-feed__pagination');

		const baseSpv = roundSpv(
			typeof opts.slidesPerView === 'number' && !Number.isNaN(opts.slidesPerView)
				? opts.slidesPerView
				: 2.15,
		);
		const tabletSpv = roundSpv(
			typeof opts.slidesPerViewTablet === 'number' && !Number.isNaN(opts.slidesPerViewTablet)
				? opts.slidesPerViewTablet
				: 3,
		);
		const desktopSpv = roundSpv(
			typeof opts.slidesPerViewDesktop === 'number' && !Number.isNaN(opts.slidesPerViewDesktop)
				? opts.slidesPerViewDesktop
				: 5,
		);
		const gap =
			typeof opts.spaceBetween === 'number' && !Number.isNaN(opts.spaceBetween)
				? opts.spaceBetween
				: 16;

		const cap = (n: number) => Math.max(1, Math.min(roundSpv(n), Math.max(1, slideCount)));

		/*
		 * `breakpointsBase: 'container'` compares against the swiper element, which is
		 * narrower than the viewport (section max-width + inner padding). Thresholds are
		 * lowered so tablet kicks in at ~768px viewports and desktop at ~1024px.
		 */
		const defaultBreakpoints: Record<number, { slidesPerView: number; spaceBetween: number }> = {
			640: { slidesPerView: cap(tabletSpv), spaceBetween: Math.max(0, gap) },
			940: { slidesPerView: cap(desktopSpv), spaceBetween: Math.max(0, gap) },
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

		root.dataset.nextoraInstagramSwiperPending = '1';

		const finishSection = (): void => {
			delete root.dataset.nextoraInstagramSwiperPending;
			root.dataset.nextoraInstagramSwiperInited = '1';
			markSectionReady(section);
			if (section) {
				bindBrokenImageFallback(section);
				initFeedVideoPlayback(section);
				initLightbox(section);
			}
		};

		const tryMount = (tick = 0): void => {
			if (el.clientWidth < 2 && tick < 60) {
				requestAnimationFrame(() => tryMount(tick + 1));
				return;
			}

			// eslint-disable-next-line no-new
			new Swiper(el, {
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
									typeof opts.autoplayDelay === 'number' ? opts.autoplayDelay : 5000,
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
								type: pagType,
							},
						}
					: {}),
			});

			window.setTimeout(finishSection, 220);
		};

		tryMount();
	});
}

function run(): void {
	document.querySelectorAll<HTMLElement>('.nextora-instagram-feed[data-nextora-scroll-reveal="1"]').forEach((section) => {
		initScrollReveal(section);
	});
	bindBrokenImageFallback(document);
	initFeedVideoPlayback(document);
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
window.addEventListener('nextora-instagram-feed-reinit', () => {
	document.querySelectorAll<HTMLElement>('.nextora-instagram-feed[data-nextora-scroll-reveal="1"]').forEach((section) => {
		initScrollReveal(section);
	});
	bindBrokenImageFallback(document);
	initFeedVideoPlayback(document);
	initSwiperIn(document);
	ScrollTrigger.refresh();
});

declare global {
	interface Window {
		nextoraOpenModal?: (id: string) => boolean;
	}
}
