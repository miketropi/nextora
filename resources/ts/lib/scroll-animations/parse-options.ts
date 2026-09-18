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
 * Resolves animation delay in seconds.
 * Supports:
 * 1. data-delay="0.2" (seconds) or data-delay="200" / data-delay="200ms" (milliseconds)
 * 2. Utility classes: animation-delay-100, animation-delay-200, delay-100, delay-200 (any ms value)
 */
export function resolveDelay(el: HTMLElement): number {
	// 1. Check data-delay attribute
	const rawAttr = el.getAttribute("data-delay");
	if (rawAttr !== null && rawAttr.trim() !== "") {
		const val = Number.parseFloat(rawAttr);
		if (Number.isFinite(val)) {
			if (rawAttr.includes("ms") || val >= 10) {
				return val / 1000;
			}
			return val;
		}
	}

	// 2. Check utility classes (animation-delay-* or delay-*)
	for (const cls of el.classList) {
		const match = cls.match(/^(?:animation-)?delay-(\d+)(ms|s)?$/);
		if (match) {
			const amount = Number.parseFloat(match[1]);
			const unit = match[2];
			if (unit === "s") {
				return amount;
			}
			return amount >= 10 ? amount / 1000 : amount;
		}
	}

	return 0;
}

/**
 * Read optional data-* overrides or utility classes from a block wrapper or inner element.
 *
 * Supported: data-delay, animation-delay-*, data-duration, data-ease, data-stagger, data-distance, data-parallax-speed
 */
export function parseScrollAnimationOptions(el: HTMLElement): ScrollAnimationOptions {
	const parallaxFromAttr = readOptionalNumber(el, "data-parallax-speed");
	const hasParallaxClass = el.classList.contains("animation-parallax");

	return {
		delay: resolveDelay(el),
		duration: readNumber(el, "data-duration", DEFAULT_DURATION),
		ease: el.getAttribute("data-ease")?.trim() || DEFAULT_EASE,
		stagger: readOptionalNumber(el, "data-stagger"),
		distance: readNumber(el, "data-distance", DEFAULT_DISTANCE),
		parallaxSpeed: parallaxFromAttr ?? (hasParallaxClass ? DEFAULT_PARALLAX_SPEED : null),
	};
}

