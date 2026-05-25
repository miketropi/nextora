import {
	DEFAULT_DISTANCE,
	DEFAULT_DURATION,
	DEFAULT_EASE,
	DEFAULT_PARALLAX_SPEED,
} from "./constants";
import type { ScrollAnimationOptions } from "./types";

function readNumber(el: HTMLElement, attr: string, fallback: number): number {
	const raw = el.getAttribute(attr);
	if (raw === null || raw.trim() === "") {
		return fallback;
	}
	const value = Number.parseFloat(raw);
	return Number.isFinite(value) ? value : fallback;
}

function readOptionalNumber(el: HTMLElement, attr: string): number | null {
	const raw = el.getAttribute(attr);
	if (raw === null || raw.trim() === "") {
		return null;
	}
	const value = Number.parseFloat(raw);
	return Number.isFinite(value) ? value : null;
}

/**
 * Read optional data-* overrides from a block wrapper or inner element.
 *
 * Supported: data-delay, data-duration, data-ease, data-stagger, data-distance, data-parallax-speed
 */
export function parseScrollAnimationOptions(el: HTMLElement): ScrollAnimationOptions {
	const parallaxFromAttr = readOptionalNumber(el, "data-parallax-speed");
	const hasParallaxClass = el.classList.contains("animation-parallax");

	return {
		delay: readNumber(el, "data-delay", 0),
		duration: readNumber(el, "data-duration", DEFAULT_DURATION),
		ease: el.getAttribute("data-ease")?.trim() || DEFAULT_EASE,
		stagger: readOptionalNumber(el, "data-stagger"),
		distance: readNumber(el, "data-distance", DEFAULT_DISTANCE),
		parallaxSpeed: parallaxFromAttr ?? (hasParallaxClass ? DEFAULT_PARALLAX_SPEED : null),
	};
}
