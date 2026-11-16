/** Marks elements already wired by {@link initScrollAnimations}. */
export const INIT_ATTR = "data-nextora-scroll-animation-init";

/** Default ScrollTrigger start — element top hits 85% of viewport height. */
export const DEFAULT_SCROLL_START = "top 85%";

/** Reveal animations fire once and stay visible (no reverse on scroll up). */
export const SCROLL_REVEAL_ONCE = true;

/** ScrollTrigger id for class-driven reveal tweens (excludes parallax). */
export const SCROLL_REVEAL_TRIGGER_ID = "nextora-scroll-reveal";

export const DEFAULT_DURATION = 0.8;
export const DEFAULT_EASE = "power3.out";
export const DEFAULT_DISTANCE = 40;
export const DEFAULT_PARALLAX_SPEED = 0.35;

/** Debounce delay for MutationObserver rescans (dynamic blocks, AJAX). */
export const MUTATION_DEBOUNCE_MS = 150;

/** CSS class names that map to GSAP presets (keep in sync with presets.ts). */
export const ANIMATION_CLASS_NAMES = [
	"animation-fade-in",
	"animation-fade-in-up",
	"animation-fade-in-down",
	"animation-fade-in-left",
	"animation-fade-in-right",
	"animation-zoom-in",
	"animation-zoom-out",
	"animation-fade-list-grid",
	"animation-inner-fade",
	"animation-image-clip-reveal",
	"animation-image-border-reveal",
	"animation-text-reveal-words",
	"animation-text-reveal-chars",
	"animation-text-reveal-chars-rise",
	"animation-text-reveal-chars-scrub",
	"animation-text-typewriter",
	"animation-scroll-reveal",
	"animation-svg-draw",
] as const;

/** Preset classes handled outside the from/to registry in presets.ts. */
export const SPECIAL_ANIMATION_CLASS_NAMES = [
	"animation-image-clip-reveal",
	"animation-image-border-reveal",
	"animation-text-reveal-words",
	"animation-text-reveal-chars",
	"animation-text-reveal-chars-rise",
	"animation-text-reveal-chars-scrub",
	"animation-text-typewriter",
	"animation-scroll-reveal",
	"animation-svg-draw",
] as const;

export type SpecialAnimationClassName = (typeof SPECIAL_ANIMATION_CLASS_NAMES)[number];

export type AnimationClassName = (typeof ANIMATION_CLASS_NAMES)[number];

/** Query selector built from preset class list. */
export const ANIMATION_SELECTOR = ANIMATION_CLASS_NAMES.map((c) => `.${c}`).join(", ");

/** Parallax via class or data attribute. */
export const PARALLAX_SELECTOR = ".animation-parallax, [data-parallax-speed]";
