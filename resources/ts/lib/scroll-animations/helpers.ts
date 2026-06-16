import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
	ANIMATION_CLASS_NAMES,
	DEFAULT_SCROLL_START,
	INIT_ATTR,
	SCROLL_REVEAL_ONCE,
	SCROLL_REVEAL_TRIGGER_ID,
	SPECIAL_ANIMATION_CLASS_NAMES,
} from "./constants";
import { animationPresets } from "./presets";
import { parseScrollAnimationOptions } from "./parse-options";
import { initSpecialScrollAnimation, skipSpecialScrollAnimation } from "./special-animations";
import type { AnimationClassName } from "./constants";
import type { ScrollAnimationOptions } from "./types";

let pluginRegistered = false;

/** Tweens already handed off from ScrollTrigger to time-based playback at page bottom. */
const bottomRevealPlayed = new WeakSet<gsap.core.Animation>();

export function ensureGsapPlugins(): void {
	if (pluginRegistered) {
		return;
	}
	gsap.registerPlugin(ScrollTrigger);
	pluginRegistered = true;
}

export function prefersReducedMotion(): boolean {
	return (
		typeof window !== "undefined" &&
		!!window.matchMedia &&
		window.matchMedia("(prefers-reduced-motion: reduce)").matches
	);
}

/**
 * Top-level list rows for {@link animation-fade-list-grid}: `ul > li` whose `ul`
 * is not inside another `li` (excludes category/tag sub-lists in post cards).
 */
export function getFadeListGridItems(el: HTMLElement): HTMLElement[] {
	return Array.from(el.querySelectorAll<HTMLElement>("ul > li")).filter((li) => {
		const parentUl = li.parentElement;
		if (!parentUl || parentUl.tagName !== "UL") {
			return false;
		}

		if (parentUl.closest("nav") !== null) {
			return false;
		}

		const ulInsideListItem = parentUl.closest("li");
		return !(ulInsideListItem && el.contains(ulInsideListItem));
	});
}

/** Direct children for {@link animation-inner-fade} (`> p`, `> div`, `> h4`, …). */
export function getInnerFadeTargets(el: HTMLElement): HTMLElement[] {
	return Array.from(el.children).filter((child): child is HTMLElement => child instanceof HTMLElement);
}

function isSpecialAnimationClass(className: string): className is (typeof SPECIAL_ANIMATION_CLASS_NAMES)[number] {
	return (SPECIAL_ANIMATION_CLASS_NAMES as readonly string[]).includes(className);
}

/** First matching animation utility class on the element. */
export function resolveAnimationClass(el: HTMLElement): AnimationClassName | null {
	for (const className of ANIMATION_CLASS_NAMES) {
		if (el.classList.contains(className)) {
			return className;
		}
	}
	const custom = Array.from(el.classList).find((name) => name in animationPresets);
	return (custom as AnimationClassName | undefined) ?? null;
}

function markInitialized(el: HTMLElement): void {
	el.setAttribute(INIT_ATTR, "1");
	el.classList.remove("nextora-scroll-animation--pending");
	el.classList.add("nextora-scroll-animation--ready");
}

function skipAnimation(el: HTMLElement): void {
	gsap.set(el, { clearProps: "opacity,transform,translate,rotate,scale" });
	markInitialized(el);
}

function buildScrollTweenVars(
	trigger: HTMLElement,
	options: ScrollAnimationOptions,
	target?: HTMLElement,
): gsap.TweenVars {
	const node = target ?? trigger;

	return {
		delay: options.delay,
		duration: options.duration,
		ease: options.ease,
		scrollTrigger: {
			trigger,
			start: DEFAULT_SCROLL_START,
			once: SCROLL_REVEAL_ONCE,
			id: SCROLL_REVEAL_TRIGGER_ID,
		},
		onComplete: () => {
			gsap.set(node, { clearProps: "opacity,transform,translate,rotate,scale" });
		},
	};
}

/** Each `ul > li` fades in up when it enters the viewport (same motion as `animation-fade-in-up`). */
function initFadeListGridAnimation(el: HTMLElement, options: ScrollAnimationOptions): void {
	const items = getFadeListGridItems(el);
	if (!items.length) {
		markInitialized(el);
		return;
	}

	const { from, to } = animationPresets["animation-fade-list-grid"]({ distance: options.distance });

	el.classList.remove("nextora-scroll-animation--pending");

	items.forEach((item) => {
		item.classList.add("nextora-scroll-animation--pending");
		gsap.fromTo(item, from, {
			...to,
			...buildScrollTweenVars(item, options, item),
			onComplete: () => {
				item.classList.remove("nextora-scroll-animation--pending");
				item.classList.add("nextora-scroll-animation--ready");
				gsap.set(item, { clearProps: "opacity,transform,translate,rotate,scale" });
			},
		});
	});

	markInitialized(el);
}

/** Each direct child fades in up when it enters the viewport (same motion as `animation-fade-in-up`). */
function initInnerFadeAnimation(el: HTMLElement, options: ScrollAnimationOptions): void {
	const targets = getInnerFadeTargets(el);
	if (!targets.length) {
		markInitialized(el);
		return;
	}

	const { from, to } = animationPresets["animation-inner-fade"]({ distance: options.distance });

	el.classList.remove("nextora-scroll-animation--pending");

	targets.forEach((target) => {
		target.classList.add("nextora-scroll-animation--pending");
		gsap.fromTo(target, from, {
			...to,
			...buildScrollTweenVars(target, options, target),
			onComplete: () => {
				target.classList.remove("nextora-scroll-animation--pending");
				target.classList.add("nextora-scroll-animation--ready");
				gsap.set(target, { clearProps: "opacity,transform,translate,rotate,scale" });
			},
		});
	});

	markInitialized(el);
}

/**
 * Wire one reveal animation (with optional child stagger) + optional parallax on the same node.
 */
export function initElementAnimations(el: HTMLElement): void {
	if (el.getAttribute(INIT_ATTR) === "1") {
		return;
	}

	const animationClass = resolveAnimationClass(el);
	const options = parseScrollAnimationOptions(el);
	const hasParallax = options.parallaxSpeed !== null;

	if (!animationClass && !hasParallax) {
		return;
	}

	el.setAttribute(INIT_ATTR, "1");

	if (prefersReducedMotion()) {
		if (animationClass === "animation-fade-list-grid") {
			getFadeListGridItems(el).forEach((item) => {
				gsap.set(item, { clearProps: "opacity,transform,translate,rotate,scale" });
				item.classList.remove("nextora-scroll-animation--pending");
			});
		} else if (animationClass === "animation-inner-fade") {
			getInnerFadeTargets(el).forEach((target) => {
				gsap.set(target, { clearProps: "opacity,transform,translate,rotate,scale" });
				target.classList.remove("nextora-scroll-animation--pending");
			});
		} else if (animationClass && isSpecialAnimationClass(animationClass)) {
			skipSpecialScrollAnimation(el, animationClass);
		}
		skipAnimation(el);
		return;
	}

	ensureGsapPlugins();

	if (animationClass && isSpecialAnimationClass(animationClass)) {
		initSpecialScrollAnimation(el, animationClass, markInitialized);
		return;
	}

	if (animationClass === "animation-fade-list-grid") {
		initFadeListGridAnimation(el, options);
	} else if (animationClass === "animation-inner-fade") {
		initInnerFadeAnimation(el, options);
	} else if (animationClass) {
		const factory = animationPresets[animationClass];
		if (!factory) {
			markInitialized(el);
		} else {
			const { from, to } = factory({ distance: options.distance });
			const tweenVars = buildScrollTweenVars(el, options);

			if (options.stagger !== null && el.children.length > 0) {
				const targets = Array.from(el.children) as HTMLElement[];
				el.classList.remove("nextora-scroll-animation--pending");
				targets.forEach((child) => child.classList.add("nextora-scroll-animation--pending"));
				gsap.set(targets, from);
				gsap.to(targets, {
					...to,
					...tweenVars,
					stagger: options.stagger,
					onComplete: () => {
						targets.forEach((child) => {
							child.classList.remove("nextora-scroll-animation--pending");
							child.classList.add("nextora-scroll-animation--ready");
							gsap.set(child, { clearProps: "opacity,transform,translate,rotate,scale" });
						});
					},
				});
			} else {
				gsap.fromTo(el, from, { ...to, ...tweenVars });
			}
		}
	}

	if (hasParallax && options.parallaxSpeed !== null) {
		const speed = options.parallaxSpeed;
		gsap.to(el, {
			y: () => speed * 100,
			ease: "none",
			scrollTrigger: {
				trigger: el,
				start: "top bottom",
				end: "bottom top",
				scrub: true,
			},
		});
	}

	markInitialized(el);
}

function getScrollerScrollTop(scroller: Element | Window): number {
	if (scroller === window || scroller === document.documentElement) {
		return window.scrollY;
	}

	return (scroller as Element).scrollTop;
}

function resolveMaxScroll(scroller: Element | Window): number {
	if (scroller === window || scroller === document.documentElement) {
		return ScrollTrigger.maxScroll(window);
	}

	if (scroller instanceof HTMLElement) {
		return ScrollTrigger.maxScroll(scroller);
	}

	return ScrollTrigger.maxScroll(window);
}

function isAtPageBottom(scroller: Element | Window): boolean {
	const maxScroll = resolveMaxScroll(scroller);
	const scrollTop = getScrollerScrollTop(scroller);
	return Math.abs(scrollTop - maxScroll) <= 2;
}

/** Detach scroll control and play the reveal tween with its configured duration/ease. */
function playBottomReveal(st: ScrollTrigger): void {
	const tween = st.animation;
	if (!tween || st.progress > 0 || bottomRevealPlayed.has(tween)) {
		return;
	}

	bottomRevealPlayed.add(tween);
	st.kill(false);
	tween.play();
}

/**
 * When the user has scrolled to the page bottom, play any reveal tweens that have
 * not fired yet (footer / last-section blocks where `top 85%` is unreachable).
 */
export function revealBottomAnchoredTriggers(): void {
	if (prefersReducedMotion()) {
		return;
	}

	ScrollTrigger.getAll().forEach((st) => {
		if (st.vars?.id !== SCROLL_REVEAL_TRIGGER_ID) {
			return;
		}

		const tween = st.animation;
		if (!tween || st.progress > 0 || bottomRevealPlayed.has(tween)) {
			return;
		}

		const scroller = st.scroller ?? window;
		if (!isAtPageBottom(scroller)) {
			return;
		}

		playBottomReveal(st);
	});
}
