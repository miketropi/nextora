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
import { afterInitialLayout, isInInitialRevealViewport } from "./initial-layout";
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
	const revealImmediately = isInInitialRevealViewport(el);
	const play = (): void => {
		gsap.to(split.chars, {
			x: 0,
			y: 0,
			rotateX: 0,
			opacity: 1,
			duration: resolved.duration,
			delay: resolved.delay,
			ease: resolved.ease,
			stagger: resolved.stagger ?? 0.02,
			onComplete: () => {
				el.classList.add("nextora-scroll-animation--ready");
				gsap.set(el, { clearProps: "perspective" });
				split.chars.forEach((char) => {
					gsap.set(char, { clearProps: "opacity,transform,translate,rotate" });
				});
			},
		});
	};

	if (revealImmediately) {
		afterInitialLayout(play);
	} else {
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
	}

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

function getSvgStrokeTargets(el: HTMLElement): SVGElement[] {
	const svgs =
		el instanceof SVGElement && el.tagName.toLowerCase() === "svg"
			? [el]
			: Array.from(el.querySelectorAll<SVGElement>("svg"));

	const targets: SVGElement[] = [];
	svgs.forEach((svg) => {
		svg.style.overflow = "visible";
		const nodes = Array.from(
			svg.querySelectorAll<SVGElement>(
				"path, line, polyline, polygon, circle, ellipse, rect",
			),
		);
		if (nodes.length > 0) {
			targets.push(...nodes);
		}
	});

	return targets;
}

function resolveSvgDrawTiming(
	el: HTMLElement,
	options: ScrollAnimationOptions,
): { duration: number; stagger: number; delay: number; ease: string } {
	const speedProfiles: Record<string, { duration: number; stagger: number }> = {
		fast: { duration: 0.7, stagger: 0.12 },
		normal: { duration: 1.4, stagger: 0.22 },
		slow: { duration: 2.2, stagger: 0.35 },
		slower: { duration: 3.2, stagger: 0.5 },
	};

	let profile = speedProfiles.normal;
	const speedAttr = el.getAttribute("data-speed")?.toLowerCase();

	if (
		el.classList.contains("animation-speed-fast") ||
		el.classList.contains("animation-svg-draw--fast") ||
		speedAttr === "fast"
	) {
		profile = speedProfiles.fast;
	} else if (
		el.classList.contains("animation-speed-slower") ||
		el.classList.contains("animation-svg-draw--slower") ||
		speedAttr === "slower"
	) {
		profile = speedProfiles.slower;
	} else if (
		el.classList.contains("animation-speed-slow") ||
		el.classList.contains("animation-svg-draw--slow") ||
		speedAttr === "slow"
	) {
		profile = speedProfiles.slow;
	}

	return {
		duration: el.hasAttribute("data-duration") ? options.duration : profile.duration,
		stagger: el.hasAttribute("data-stagger") ? (options.stagger ?? profile.stagger) : profile.stagger,
		delay: options.delay,
		ease: el.hasAttribute("data-ease") ? options.ease : "power2.out",
	};
}

function classifySvgShape(node: SVGElement): "stroke" | "fill" | "both" {
	const strokeAttr = node.getAttribute("stroke");
	const fillAttr = node.getAttribute("fill");
	const computed = typeof window !== "undefined" ? window.getComputedStyle(node) : null;

	const strokeVal = strokeAttr ?? computed?.stroke ?? "";
	const fillVal = fillAttr ?? computed?.fill ?? "";

	const hasStroke =
		strokeVal !== "" &&
		strokeVal !== "none" &&
		strokeVal !== "transparent" &&
		strokeVal !== "rgba(0, 0, 0, 0)";
	const hasFill =
		fillVal !== "" &&
		fillVal !== "none" &&
		fillVal !== "transparent" &&
		fillVal !== "rgba(0, 0, 0, 0)";

	if (hasStroke && hasFill) return "both";
	if (hasFill && !hasStroke) return "fill";
	return "stroke";
}

/** `animation-svg-draw` — SVG stroke drawing and filled shape reveal animation with configurable speed levels. */
export function initSvgDrawAnimation(
	el: HTMLElement,
	options: ScrollAnimationOptions,
	markInitialized: MarkInitialized,
): void {
	const timing = resolveSvgDrawTiming(el, options);

	const targets = getSvgStrokeTargets(el);
	if (!targets.length) {
		markInitialized(el);
		return;
	}

	el.classList.remove("nextora-scroll-animation--pending");

	const shapeTargets = targets.map((node) => {
		const type = classifySvgShape(node);
		if (type === "stroke" || type === "both") {
			node.setAttribute("pathLength", "1");
			node.style.strokeDasharray = "1.05 3";
			node.style.strokeDashoffset = "1.3";
			if (type === "both") {
				gsap.set(node, { fillOpacity: 0 });
			}
		} else if (type === "fill") {
			node.style.transformBox = "fill-box";
			node.style.transformOrigin = "50% 50%";
			gsap.set(node, { scale: 0, opacity: 0 });
		}
		return { node, type };
	});

	const onComplete = (): void => {
		el.classList.add("nextora-scroll-animation--ready");
		shapeTargets.forEach(({ node, type }) => {
			if (type === "stroke" || type === "both") {
				node.style.strokeDashoffset = "0";
				if (type === "both") {
					gsap.set(node, { clearProps: "fillOpacity" });
				}
			} else if (type === "fill") {
				gsap.set(node, { clearProps: "scale,opacity,transformBox,transformOrigin" });
			}
		});
	};

	const revealImmediately = isInInitialRevealViewport(el);
	const stVars = revealImmediately ? undefined : buildRevealScrollTrigger(el, "top 85%");
	const tl = gsap.timeline({
		scrollTrigger: stVars,
		delay: timing.delay > 0 ? timing.delay : undefined,
		onComplete,
	});

	shapeTargets.forEach(({ node, type }, index) => {
		const pos = index * timing.stagger;
		if (type === "stroke") {
			tl.to(
				node,
				{
					strokeDashoffset: 0,
					duration: timing.duration,
					ease: timing.ease,
				},
				pos,
			);
		} else if (type === "fill") {
			tl.to(
				node,
				{
					scale: 1,
					opacity: 1,
					duration: Math.min(timing.duration, 0.8),
					ease: "back.out(1.7)",
				},
				pos,
			);
		} else if (type === "both") {
			tl.to(
				node,
				{
					strokeDashoffset: 0,
					fillOpacity: 1,
					duration: timing.duration,
					ease: timing.ease,
				},
				pos,
			);
		}
	});

	if (revealImmediately) {
		tl.pause();
		afterInitialLayout(() => {
			tl.play();
		});
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
		case "animation-svg-draw":
			initSvgDrawAnimation(el, options, markInitialized);
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

	if (animationClass === "animation-svg-draw") {
		const targets = getSvgStrokeTargets(el);
		targets.forEach((node) => {
			node.style.strokeDashoffset = "0";
			node.style.strokeDasharray = "";
			gsap.set(node, { clearProps: "scale,opacity,fillOpacity,transformBox,transformOrigin" });
		});
	}
}
