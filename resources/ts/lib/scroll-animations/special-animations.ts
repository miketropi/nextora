import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
	DEFAULT_SCROLL_START,
	SCROLL_REVEAL_ONCE,
	SCROLL_REVEAL_TRIGGER_ID,
} from "./constants";
import { parseScrollAnimationOptions } from "./parse-options";
import { revertElementTextSplit, splitElementText } from "./split-text";
import { initTextTypewriter, skipTypewriterText } from "./typewriter-text";
import type { ScrollAnimationOptions } from "./types";

type MarkInitialized = (el: HTMLElement) => void;

function withSpecialDefaults(
	el: HTMLElement,
	options: ScrollAnimationOptions,
	defaults: Partial<ScrollAnimationOptions>,
): ScrollAnimationOptions {
	return {
		delay: el.hasAttribute("data-delay") ? options.delay : (defaults.delay ?? options.delay),
		duration: el.hasAttribute("data-duration") ? options.duration : (defaults.duration ?? options.duration),
		ease: el.hasAttribute("data-ease") ? options.ease : (defaults.ease ?? options.ease),
		stagger: el.hasAttribute("data-stagger") ? options.stagger : (defaults.stagger ?? options.stagger),
		distance: el.hasAttribute("data-distance") ? options.distance : (defaults.distance ?? options.distance),
		parallaxSpeed: options.parallaxSpeed,
	};
}

function buildRevealScrollTrigger(
	trigger: HTMLElement,
	start: string,
	once = SCROLL_REVEAL_ONCE,
): ScrollTrigger.Vars {
	return {
		trigger,
		start,
		once,
		id: SCROLL_REVEAL_TRIGGER_ID,
	};
}

function getImageTargets(el: HTMLElement): HTMLImageElement[] {
	if (el instanceof HTMLImageElement) {
		return [el];
	}

	return Array.from(el.querySelectorAll<HTMLImageElement>("img"));
}

/** `animation-image-clip-reveal` — horizontal clip-path wipe on nested `img`. */
export function initImageClipReveal(
	el: HTMLElement,
	options: ScrollAnimationOptions,
	markInitialized: MarkInitialized,
): void {
	const resolved = withSpecialDefaults(el, options, {
		duration: 1.5,
		ease: "power2.out",
	});
	const images = getImageTargets(el);
	if (!images.length) {
		markInitialized(el);
		return;
	}

	el.classList.remove("nextora-scroll-animation--pending");

	images.forEach((img) => {
		img.classList.add("nextora-scroll-animation--pending");
		gsap.set(img, { clipPath: "inset(0 100% 0 0)" });
		gsap.to(img, {
			clipPath: "inset(0 0% 0 0)",
			autoAlpha: 1,
			duration: resolved.duration,
			delay: resolved.delay,
			ease: resolved.ease,
			scrollTrigger: buildRevealScrollTrigger(img, "top 90%"),
			onComplete: () => {
				img.classList.remove("nextora-scroll-animation--pending");
				img.classList.add("nextora-scroll-animation--ready");
				gsap.set(img, { clearProps: "clipPath,opacity,visibility" });
			},
		});
	});

	markInitialized(el);
}

/** `animation-image-border-reveal` — chasing-light conic-gradient border around nested `img`. */
export function initImageBorderReveal(
	el: HTMLElement,
	options: ScrollAnimationOptions,
	markInitialized: MarkInitialized,
): void {
	const resolved = withSpecialDefaults(el, options, {
		duration: 1.5,
		ease: "power2.out",
	});
	const images = getImageTargets(el);
	if (!images.length) {
		markInitialized(el);
		return;
	}

	el.classList.remove("nextora-scroll-animation--pending");

	if (getComputedStyle(el).position === "static") {
		el.style.position = "relative";
	}

	images.forEach((img) => {
		const br = getComputedStyle(img).borderRadius;
		if (br && br !== "0px" && br !== "0px 0px 0px 0px") {
			el.style.borderRadius = br;
		}

		img.classList.add("nextora-scroll-animation--pending");

		const st = buildRevealScrollTrigger(img, "top 90%");

		gsap.fromTo(el,
			{ "--nextora-border-opacity": 0 },
			{
				"--nextora-border-opacity": 1,
				duration: resolved.duration,
				delay: resolved.delay,
				ease: resolved.ease,
				scrollTrigger: st,
			},
		);

		gsap.fromTo(img, { autoAlpha: 0 }, {
			autoAlpha: 1,
			duration: resolved.duration,
			delay: resolved.delay,
			ease: resolved.ease,
			scrollTrigger: st,
			onComplete: () => {
				img.classList.remove("nextora-scroll-animation--pending");
				img.classList.add("nextora-scroll-animation--ready");
				gsap.set(img, { clearProps: "opacity,visibility" });
			},
		});
	});

	markInitialized(el);
}

function initTextWordReveal(
	el: HTMLElement,
	options: ScrollAnimationOptions,
	markInitialized: MarkInitialized,
): void {
	const resolved = withSpecialDefaults(el, options, {
		duration: 1,
		delay: 0.5,
		stagger: 0.05,
		distance: 20,
	});
	revertElementTextSplit(el);
	const split = splitElementText(el, "words");
	if (!split.words.length) {
		markInitialized(el);
		return;
	}

	el.classList.remove("nextora-scroll-animation--pending");

	gsap.from(split.words, {
		duration: resolved.duration,
		delay: resolved.delay,
		x: resolved.distance,
		autoAlpha: 0,
		stagger: resolved.stagger ?? 0.05,
		ease: resolved.ease,
		scrollTrigger: buildRevealScrollTrigger(el, DEFAULT_SCROLL_START),
		onComplete: () => {
			el.classList.add("nextora-scroll-animation--ready");
			split.words.forEach((word) => {
				gsap.set(word, { clearProps: "opacity,transform,translate,visibility" });
			});
		},
	});

	markInitialized(el);
}

function initTextCharReveal(
	el: HTMLElement,
	options: ScrollAnimationOptions,
	markInitialized: MarkInitialized,
): void {
	const resolved = withSpecialDefaults(el, options, {
		duration: 1,
		delay: 0.1,
		stagger: 0.03,
		distance: 20,
		ease: "power2.out",
	});
	revertElementTextSplit(el);
	const split = splitElementText(el, "chars");
	if (!split.chars.length) {
		markInitialized(el);
		return;
	}

	el.classList.remove("nextora-scroll-animation--pending");

	gsap.from(split.chars, {
		duration: resolved.duration,
		delay: resolved.delay,
		x: resolved.distance,
		autoAlpha: 0,
		stagger: resolved.stagger ?? 0.03,
		ease: resolved.ease,
		scrollTrigger: buildRevealScrollTrigger(el, DEFAULT_SCROLL_START),
		onComplete: () => {
			el.classList.add("nextora-scroll-animation--ready");
			split.chars.forEach((char) => {
				gsap.set(char, { clearProps: "opacity,transform,translate,visibility" });
			});
		},
	});

	markInitialized(el);
}

function initTextCharRiseReveal(
	el: HTMLElement,
	options: ScrollAnimationOptions,
	markInitialized: MarkInitialized,
): void {
	const resolved = withSpecialDefaults(el, options, {
		duration: 1,
		stagger: 0.02,
		distance: 50,
		ease: "back.out(1.7)",
	});
	revertElementTextSplit(el);
	const split = splitElementText(el, "chars");
	if (!split.chars.length) {
		markInitialized(el);
		return;
	}

	el.classList.remove("nextora-scroll-animation--pending");
	gsap.set(el, { perspective: 400 });
	gsap.set(split.chars, { opacity: 0, x: resolved.distance });

	gsap.to(split.chars, {
		x: 0,
		y: 0,
		rotateX: 0,
		opacity: 1,
		duration: resolved.duration,
		delay: resolved.delay,
		ease: resolved.ease,
		stagger: resolved.stagger ?? 0.02,
		scrollTrigger: buildRevealScrollTrigger(el, "top 90%"),
		onComplete: () => {
			el.classList.add("nextora-scroll-animation--ready");
			gsap.set(el, { clearProps: "perspective" });
			split.chars.forEach((char) => {
				gsap.set(char, { clearProps: "opacity,transform,translate,rotate" });
			});
		},
	});

	markInitialized(el);
}

function initTextCharScrubReveal(
	el: HTMLElement,
	options: ScrollAnimationOptions,
	markInitialized: MarkInitialized,
): void {
	const resolved = withSpecialDefaults(el, options, {
		duration: 0.7,
		stagger: 0.2,
		ease: "power2.out",
	});
	revertElementTextSplit(el);
	const split = splitElementText(el, "chars");
	if (!split.chars.length) {
		markInitialized(el);
		return;
	}

	el.classList.remove("nextora-scroll-animation--pending");
	gsap.set(split.chars, { opacity: 0.3, x: -7 });

	gsap.to(split.chars, {
		x: 0,
		y: 0,
		opacity: 1,
		duration: resolved.duration,
		ease: resolved.ease,
		stagger: resolved.stagger ?? 0.2,
		scrollTrigger: {
			trigger: el,
			start: "top 92%",
			end: "top 60%",
			scrub: 1,
		},
		onComplete: () => {
			el.classList.add("nextora-scroll-animation--ready");
			split.chars.forEach((char) => {
				gsap.set(char, { clearProps: "opacity,transform,translate" });
			});
		},
	});

	markInitialized(el);
}

/** `animation-scroll-reveal` — scrubbed container rotation + word opacity + optional blur. */
function initScrollReveal(
	el: HTMLElement,
	markInitialized: MarkInitialized,
): void {
	const enableBlur = el.getAttribute("data-enable-blur") !== "false";
	const baseOpacity = parseFloat(el.getAttribute("data-base-opacity") ?? "0.1");
	const baseRotation = parseFloat(el.getAttribute("data-base-rotation") ?? "3");
	const blurStrength = parseFloat(el.getAttribute("data-blur-strength") ?? "4");
	const rotationEnd = el.getAttribute("data-rotation-end") ?? "bottom bottom";
	const wordAnimationEnd = el.getAttribute("data-word-animation-end") ?? "bottom 65%";

	revertElementTextSplit(el);
	const split = splitElementText(el, "words");
	if (!split.words.length) {
		markInitialized(el);
		return;
	}

	el.classList.remove("nextora-scroll-animation--pending");

	gsap.fromTo(el,
		{ transformOrigin: "0% 50%", rotate: baseRotation },
		{
			ease: "none",
			rotate: 0,
			scrollTrigger: {
				trigger: el,
				start: "top bottom",
				end: rotationEnd,
				scrub: true,
			},
			onComplete: () => {
				gsap.set(el, { clearProps: "transformOrigin,rotate" });
			},
		},
	);

	gsap.fromTo(split.words,
		{ opacity: baseOpacity, willChange: "opacity" },
		{
			ease: "none",
			opacity: 1,
			stagger: 0.2,
			scrollTrigger: {
				trigger: el,
				start: "top bottom-=30%",
				end: wordAnimationEnd,
				scrub: true,
			},
			onComplete: () => {
				el.classList.add("nextora-scroll-animation--ready");
				split.words.forEach((word) => {
					gsap.set(word, { clearProps: "opacity,willChange" });
				});
			},
		},
	);

	if (enableBlur) {
		gsap.fromTo(split.words,
			{ filter: `blur(${blurStrength}px)` },
			{
				ease: "none",
				filter: "blur(0px)",
				stagger: 0.2,
				scrollTrigger: {
					trigger: el,
					start: "top bottom-=30%",
					end: wordAnimationEnd,
					scrub: true,
				},
				onComplete: () => {
					split.words.forEach((word) => {
						gsap.set(word, { clearProps: "filter" });
					});
				},
			},
		);
	}

	markInitialized(el);
}

/** Route text/image special presets by utility class name. */
export function initSpecialScrollAnimation(
	el: HTMLElement,
	animationClass: string,
	markInitialized: MarkInitialized,
): boolean {
	const options = parseScrollAnimationOptions(el);

	switch (animationClass) {
		case "animation-image-clip-reveal":
			initImageClipReveal(el, options, markInitialized);
			return true;
		case "animation-image-border-reveal":
			initImageBorderReveal(el, options, markInitialized);
			return true;
		case "animation-text-reveal-words":
			initTextWordReveal(el, options, markInitialized);
			return true;
		case "animation-text-reveal-chars":
			initTextCharReveal(el, options, markInitialized);
			return true;
		case "animation-text-reveal-chars-rise":
			initTextCharRiseReveal(el, options, markInitialized);
			return true;
		case "animation-text-reveal-chars-scrub":
			initTextCharScrubReveal(el, options, markInitialized);
			return true;
		case "animation-text-typewriter":
			initTextTypewriter(el, markInitialized);
			return true;
		case "animation-scroll-reveal":
			initScrollReveal(el, markInitialized);
			return true;
		default:
			return false;
	}
}

/** Clear split markup and inline styles when reduced motion is enabled. */
export function skipSpecialScrollAnimation(el: HTMLElement, animationClass: string): void {
	if (animationClass.startsWith("animation-text-reveal-") || animationClass === "animation-scroll-reveal") {
		revertElementTextSplit(el);
	}

	if (animationClass === "animation-text-typewriter") {
		skipTypewriterText(el);
	}

	if (animationClass === "animation-image-clip-reveal") {
		getImageTargets(el).forEach((img) => {
			img.classList.remove("nextora-scroll-animation--pending");
			gsap.set(img, { clearProps: "clipPath,opacity,visibility" });
		});
	}

	if (animationClass === "animation-image-border-reveal") {
		if (getComputedStyle(el).position === "static") {
			el.style.position = "relative";
		}
		getImageTargets(el).forEach((img) => {
			const br = getComputedStyle(img).borderRadius;
			if (br && br !== "0px" && br !== "0px 0px 0px 0px") {
				el.style.borderRadius = br;
			}
			img.classList.remove("nextora-scroll-animation--pending");
			gsap.set(img, { clearProps: "opacity,visibility" });
		});
		gsap.set(el, { "--nextora-border-opacity": 1 });
	}
}
