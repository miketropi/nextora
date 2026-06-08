/**
 * Arc gallery — responsive arc layout, image reveal, soft scroll motion.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initArcCarousel, type ArcCarouselController } from './arc-carousel';
import { applyArcLayoutToDom } from './arc-layout-dom';

gsap.registerPlugin(ScrollTrigger);

const ROOT_SELECTOR = '.nextora-arc-gallery[data-nextora-arc-base]';
const ANIMATE_SELECTOR = '.nextora-arc-gallery[data-nextora-arc-animate="1"]';
const CAROUSEL_SELECTOR = '.nextora-arc-gallery[data-nextora-arc-carousel="1"]';
const INIT_ATTR = 'data-nextora-arc-gsap-init';
const LAYOUT_ATTR = 'data-nextora-arc-layout-bound';
const CAROUSEL_INIT_ATTR = 'data-nextora-arc-carousel-inited';
const SCROLL_CAROUSEL_ATTR = 'data-nextora-arc-scroll-carousel-init';
const GALLERY_SCROLL_SELECTOR =
	'.nextora-arc-gallery[data-nextora-arc-gallery-scroll="1"]';
const CONTENT_INIT_ATTR = 'data-nextora-arc-content-init';
const PRELOAD_TIMEOUT_MS = 5000;

const layoutObservers = new WeakMap<HTMLElement, ResizeObserver>();
const carouselControllers = new WeakMap<HTMLElement, ArcCarouselController>();

function prefersReducedMotion(): boolean {
	return (
		typeof window !== 'undefined' &&
		window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
	);
}

function getMediaUrl(media: HTMLElement): string | null {
	const fromData = media.getAttribute('data-nextora-arc-media-url');
	if (fromData) {
		return fromData;
	}
	const bg = window.getComputedStyle(media).backgroundImage;
	const match = bg.match(/url\(["']?([^"')]+)["']?\)/);
	return match?.[1] ?? null;
}

function preloadImages(medias: HTMLElement[]): Promise<void> {
	const urls = [
		...new Set(
			medias
				.map((el) => getMediaUrl(el))
				.filter((url): url is string => Boolean(url)),
		),
	];

	if (!urls.length) {
		return Promise.resolve();
	}

	const loads = urls.map(
		(url) =>
			new Promise<void>((resolve) => {
				const img = new Image();
				const done = (): void => resolve();
				img.onload = done;
				img.onerror = done;
				img.src = url;
			}),
	);

	return Promise.race([
		Promise.all(loads).then(() => undefined),
		new Promise<void>((resolve) => {
			window.setTimeout(resolve, PRELOAD_TIMEOUT_MS);
		}),
	]);
}

function bindResponsiveLayout(root: HTMLElement): void {
	if (root.getAttribute(CAROUSEL_INIT_ATTR) === '1') {
		return;
	}

	if (root.getAttribute(LAYOUT_ATTR) === '1') {
		applyArcLayoutToDom(root, root.clientWidth);
		return;
	}

	const run = (): void => {
		applyArcLayoutToDom(root, root.clientWidth);
		ScrollTrigger.refresh();
	};

	run();

	const observer = new ResizeObserver(() => {
		window.requestAnimationFrame(run);
	});
	observer.observe(root);
	layoutObservers.set(root, observer);
	root.setAttribute(LAYOUT_ATTR, '1');
}

function initContentReveal(root: HTMLElement): void {
	const content = root.querySelector<HTMLElement>(
		'[data-nextora-scroll-reveal="1"]',
	);
	if (!content || content.getAttribute(CONTENT_INIT_ATTR) === '1') {
		return;
	}
	content.setAttribute(CONTENT_INIT_ATTR, '1');

	gsap.from(content, {
		opacity: 0,
		y: 22,
		duration: 0.8,
		ease: 'power2.out',
		scrollTrigger: {
			trigger: content,
			start: 'top 88%',
			once: true,
		},
	});
}

function isGalleryStageInViewport(stage: HTMLElement): boolean {
	const rect = stage.getBoundingClientRect();
	const viewportHeight =
		window.innerHeight || document.documentElement.clientHeight;
	return rect.bottom > 0 && rect.top < viewportHeight;
}

function maybeInitScrollLinkedCarousel(root: HTMLElement): void {
	if (!root.matches(GALLERY_SCROLL_SELECTOR) || !root.matches(CAROUSEL_SELECTOR)) {
		return;
	}

	const carousel = carouselControllers.get(root);
	const stage = root.querySelector<HTMLElement>('.nextora-arc-gallery__stage');
	if (!carousel || !stage || prefersReducedMotion()) {
		return;
	}

	initScrollLinkedCarousel(root, carousel, stage);
}

function initScrollLinkedCarousel(
	root: HTMLElement,
	carousel: ArcCarouselController,
	stage: HTMLElement,
): void {
	if (root.getAttribute(SCROLL_CAROUSEL_ATTR) === '1') {
		return;
	}
	root.setAttribute(SCROLL_CAROUSEL_ATTR, '1');

	const baseOffset = carousel.getBaseOffset();
	const travel = carousel.getRealCount();

	const applyProgress = (progress: number): void => {
		carousel.applyFractionalOffset(baseOffset + progress * travel);
	};

	const st = ScrollTrigger.create({
		trigger: stage,
		start: 'top bottom',
		end: 'bottom top',
		scrub: 0.2,
		invalidateOnRefresh: true,
		onUpdate: (self) => {
			if (!self.isActive) {
				return;
			}
			applyProgress(self.progress);
		},
		onRefresh: (self) => {
			if (!self.isActive) {
				return;
			}
			applyProgress(self.progress);
		},
	});

	if (st.isActive) {
		applyProgress(st.progress);
	}
}

function initScrollParallax(root: HTMLElement, stage: HTMLElement): void {
	const isCarousel = root.getAttribute('data-nextora-arc-carousel') === '1';

	gsap.fromTo(
		stage,
		{ y: 32 },
		{
			y: -32,
			ease: 'none',
			scrollTrigger: {
				trigger: root,
				start: 'top bottom',
				end: 'bottom top',
				scrub: 0.7,
				invalidateOnRefresh: true,
			},
		},
	);

	if (isCarousel) {
		return;
	}

	const medias = root.querySelectorAll<HTMLElement>('.nextora-arc-gallery__media');
	const center = (medias.length - 1) / 2;

	medias.forEach((media, index) => {
		const spread = (index - center) * 5;
		gsap.fromTo(
			media,
			{ y: spread * 0.35 },
			{
				y: -spread * 0.35,
				ease: 'none',
				scrollTrigger: {
					trigger: root,
					start: 'top bottom',
					end: 'bottom top',
					scrub: 0.9,
					invalidateOnRefresh: true,
				},
			},
		);
	});
}

function revealGalleryImages(
	root: HTMLElement,
	medias: NodeListOf<HTMLElement>,
	onComplete: () => void,
): void {
	root.classList.add('is-arc-ready');

	const tl = gsap.timeline({
		defaults: { ease: 'power2.out' },
		onComplete,
	});

	tl.to(medias, {
		opacity: 1,
		scale: 1,
		duration: 0.95,
		stagger: {
			each: 0.11,
			from: 'center',
		},
	});
}

function initGalleryAnimations(root: HTMLElement): void {
	if (root.getAttribute(INIT_ATTR) === '1') {
		return;
	}
	root.setAttribute(INIT_ATTR, '1');

	const stage = root.querySelector<HTMLElement>('.nextora-arc-gallery__stage');
	const medias = root.querySelectorAll<HTMLElement>('.nextora-arc-gallery__media');

	if (prefersReducedMotion()) {
		root.classList.add('is-arc-ready');
		return;
	}

	if (!stage || !medias.length) {
		root.classList.add('is-arc-ready');
		initContentReveal(root);
		return;
	}

	gsap.set(medias, {
		opacity: 0,
		scale: 0.9,
		transformOrigin: 'center center',
		force3D: true,
	});

	let revealed = false;

	const runReveal = (): void => {
		if (revealed) {
			return;
		}
		revealed = true;
		ScrollTrigger.refresh();
		revealGalleryImages(root, medias, () => {
			if (!root.matches(CAROUSEL_SELECTOR)) {
				initScrollParallax(root, stage);
			}
			ScrollTrigger.refresh();
		});
	};

	const scheduleReveal = (): void => {
		if (isGalleryStageInViewport(stage)) {
			runReveal();
			return;
		}

		ScrollTrigger.create({
			trigger: stage,
			start: 'top bottom',
			once: true,
			onEnter: runReveal,
		});
	};

	preloadImages([...medias]).then(() => {
		requestAnimationFrame(scheduleReveal);
	});

	initContentReveal(root);
}

function initRoot(root: HTMLElement): void {
	const stage = root.querySelector<HTMLElement>('.nextora-arc-gallery__stage');
	const itemCount =
		stage?.querySelectorAll<HTMLElement>('.nextora-arc-gallery__item').length ?? 0;
	const useCarousel =
		root.matches(CAROUSEL_SELECTOR) && itemCount >= 2;

	if (useCarousel) {
		const carousel = initArcCarousel(root);
		if (carousel) {
			carouselControllers.set(root, carousel);
		}
	} else {
		bindResponsiveLayout(root);
	}

	if (root.matches(ANIMATE_SELECTOR)) {
		initGalleryAnimations(root);
	} else {
		root.classList.add('is-arc-ready');
	}

	maybeInitScrollLinkedCarousel(root);
}

function boot(): void {
	document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach(initRoot);
	ScrollTrigger.config({
		autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize',
	});
	ScrollTrigger.refresh();
}

function onReady(): void {
	boot();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', onReady, { once: true });
} else {
	onReady();
}

window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
