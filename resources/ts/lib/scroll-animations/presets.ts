import type { AnimationClassName } from "./constants";
import type { AnimationPresetFactory } from "./types";

/**
 * GSAP preset registry keyed by utility class name.
 *
 * Extend at runtime with {@link registerScrollAnimationPreset} — no GSAP boilerplate duplication.
 */
export const animationPresets: Record<AnimationClassName, AnimationPresetFactory> = {
	"animation-fade-in": () => ({
		from: { opacity: 0 },
		to: { opacity: 1 },
	}),

	"animation-fade-in-up": ({ distance }) => ({
		from: { opacity: 0, y: distance },
		to: { opacity: 1, y: 0 },
	}),

	"animation-fade-in-down": ({ distance }) => ({
		from: { opacity: 0, y: -distance },
		to: { opacity: 1, y: 0 },
	}),

	"animation-fade-in-left": ({ distance }) => ({
		from: { opacity: 0, x: -distance },
		to: { opacity: 1, x: 0 },
	}),

	"animation-fade-in-right": ({ distance }) => ({
		from: { opacity: 0, x: distance },
		to: { opacity: 1, x: 0 },
	}),

	"animation-zoom-in": () => ({
		from: { opacity: 0, scale: 0.85 },
		to: { opacity: 1, scale: 1 },
	}),

	"animation-zoom-out": () => ({
		from: { opacity: 0, scale: 1.15 },
		to: { opacity: 1, scale: 1 },
	}),

	/** Same motion as `animation-fade-in-up`; each `ul > li` has its own viewport trigger. */
	"animation-fade-list-grid": ({ distance }) => ({
		from: { opacity: 0, y: distance },
		to: { opacity: 1, y: 0 },
	}),

	/** Direct children `> *` (wired in helpers). */
	"animation-inner-fade": ({ distance }) => ({
		from: { opacity: 0, y: distance },
		to: { opacity: 1, y: 0 },
	}),
};

/**
 * Register a custom animation class (child themes / plugins via inline script after main.js).
 *
 * @example
 * window.nextoraRegisterScrollAnimation?.('animation-flip-in', ({ distance }) => ({
 *   from: { opacity: 0, rotateX: 45, y: distance },
 *   to: { opacity: 1, rotateX: 0, y: 0 },
 * }));
 */
export function registerScrollAnimationPreset(
	className: string,
	factory: AnimationPresetFactory,
): void {
	animationPresets[className as AnimationClassName] = factory;
}

/** CSS selector for all registered animation utility classes. */
export function getAnimationSelector(): string {
	return Object.keys(animationPresets)
		.map((className) => `.${className}`)
		.join(", ");
}
