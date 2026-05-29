/** Parsed per-element overrides from data-* attributes. */
export type ScrollAnimationOptions = {
	delay: number;
	duration: number;
	ease: string;
	stagger: number | null;
	distance: number;
	parallaxSpeed: number | null;
};

/** GSAP tween vars for preset from/to states. */
export type AnimationTweenVars = Record<string, unknown>;

/** Factory receives resolved options (distance, etc.) and returns GSAP from/to vars. */
export type AnimationPresetFactory = (options: Pick<ScrollAnimationOptions, "distance">) => {
	from: AnimationTweenVars;
	to: AnimationTweenVars;
};
