import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
	ANIMATION_CLASS_NAMES,
	DEFAULT_SCROLL_START,
	INIT_ATTR,
	SCROLL_REVEAL_ONCE,
} from "./constants";
import { animationPresets } from "./presets";
import { parseScrollAnimationOptions } from "./parse-options";
import type { AnimationClassName } from "./constants";
import type { ScrollAnimationOptions } from "./types";

let pluginRegistered = false;

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
	el: HTMLElement,
	options: ScrollAnimationOptions,
): gsap.TweenVars {
	return {
		delay: options.delay,
		duration: options.duration,
		ease: options.ease,
		scrollTrigger: {
			trigger: el,
			start: DEFAULT_SCROLL_START,
			once: SCROLL_REVEAL_ONCE,
		},
		onComplete: () => {
			gsap.set(el, { clearProps: "opacity,transform,translate,rotate,scale" });
		},
	};
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
		skipAnimation(el);
		return;
	}

	ensureGsapPlugins();

	if (animationClass) {
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
