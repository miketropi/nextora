/**
 * Class-driven scroll animations for any Gutenberg block wrapper.
 *
 * Add utility classes via block → Advanced → Additional CSS class(es). No per-block JS required.
 *
 * @see docs/scroll-animations.md
 */
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import { INIT_ATTR, MUTATION_DEBOUNCE_MS, PARALLAX_SELECTOR, SCROLL_REVEAL_TRIGGER_ID, SPECIAL_ANIMATION_CLASS_NAMES } from "./constants";
import {
	ensureGsapPlugins,
	getFadeListGridItems,
	getInnerFadeTargets,
	getRevealGen,
	initElementAnimations,
	isElementHidden,
	nextRevealGen,
	prefersReducedMotion,
	revealBottomAnchoredTriggers,
	resolveAnimationClass,
} from "./helpers";
import { getAnimationSelector, registerScrollAnimationPreset } from "./presets";
import { parseScrollAnimationOptions } from "./parse-options";

let observer: MutationObserver | null = null;
let debounceTimer = 0;
let booted = false;

function refreshScrollTriggers(): void {
	ScrollTrigger.refresh();
	revealBottomAnchoredTriggers();
}

/** Force-play any reveal triggers whose element is already past the start point. */
function forcePlayInViewTriggers(): void {
	ScrollTrigger.getAll().forEach((st) => {
		if (st.vars?.id !== SCROLL_REVEAL_TRIGGER_ID) return;
		const tween = st.animation;
		if (!tween || st.progress > 0) return;
		// Element is already past the trigger start — play immediately
		if (st.start !== undefined && window.scrollY >= st.start) {
			st.kill(false);
			tween.play();
		}
	});
}

function collectTargets(root: ParentNode = document): HTMLElement[] {
	const selector = `${getAnimationSelector()}, ${PARALLAX_SELECTOR}`;
	const nodes = root.querySelectorAll<HTMLElement>(selector);
	return Array.from(nodes).filter((el) => {
		if (el.getAttribute(INIT_ATTR) === "1") {
			return false;
		}

		// Defer if inside a hidden container (e.g. mega menu)
		if (isElementHidden(el)) {
			if (!el.hasAttribute("data-scroll-deferred")) {
				el.setAttribute("data-scroll-deferred", "1");
			}
			return false;
		}

		return resolveAnimationClass(el) !== null || parseScrollAnimationOptions(el).parallaxSpeed !== null;
	});
}

function markPending(el: HTMLElement): void {
	const animationClass = resolveAnimationClass(el);
	if (prefersReducedMotion() || animationClass === null || isElementHidden(el)) {
		return;
	}

	if (animationClass === "animation-fade-list-grid") {
		getFadeListGridItems(el).forEach((item) => {
			item.classList.add("nextora-scroll-animation--pending");
		});
		return;
	}

	if (animationClass === "animation-inner-fade") {
		getInnerFadeTargets(el).forEach((target) => {
			target.classList.add("nextora-scroll-animation--pending");
		});
		return;
	}

	if ((SPECIAL_ANIMATION_CLASS_NAMES as readonly string[]).includes(animationClass)) {
		el.classList.add("nextora-scroll-animation--pending");
		return;
	}

	el.classList.add("nextora-scroll-animation--pending");
}

/** Scan the document (or a subtree) and initialize unmatched animation targets. */
export function scanScrollAnimations(root: ParentNode = document): number {
	const targets = collectTargets(root);
	if (!targets.length) {
		return 0;
	}

	ensureGsapPlugins();

	targets.forEach((el) => {
		markPending(el);
		initElementAnimations(el);
	});

	refreshScrollTriggers();
	return targets.length;
}

function scheduleRescan(): void {
	window.clearTimeout(debounceTimer);
	debounceTimer = window.setTimeout(() => {
		if (scanScrollAnimations() > 0) {
			refreshScrollTriggers();
		}
	}, MUTATION_DEBOUNCE_MS);
}

function observeDynamicContent(): void {
	if (observer || typeof MutationObserver === "undefined") {
		return;
	}

	observer = new MutationObserver((records) => {
		for (const record of records) {
			if (record.type === "childList" && record.addedNodes.length > 0) {
				scheduleRescan();
				return;
			}
			if (record.type === "attributes" && record.attributeName === "class") {
				scheduleRescan();
				return;
			}
		}
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true,
		attributes: true,
		attributeFilter: ["class"],
	});
}

const DEFERRED_ATTR = "data-scroll-deferred";
const REPLAY_ATTR = "data-scroll-replay";

function watchDeferredScrollElements(): void {
	const visibilityState = new WeakMap<HTMLElement, boolean>();
	let needsThrottle = false;

	const check = (): void => {
		let hasWork = false;

		// 1) Handle initially-deferred elements (immediate, no throttle)
		document
			.querySelectorAll<HTMLElement>(`[${DEFERRED_ATTR}="1"]`)
			.forEach((el) => {
				if (!isElementHidden(el)) {
					el.removeAttribute(DEFERRED_ATTR);
					el.setAttribute(REPLAY_ATTR, "1");
					markPending(el);
					initElementAnimations(el);
					refreshScrollTriggers();
					forcePlayInViewTriggers();
				}
				hasWork = true;
			});

		// 2) Toggle replay: reset when hidden, re-init when shown
		document
			.querySelectorAll<HTMLElement>(`[${REPLAY_ATTR}="1"]`)
			.forEach((el) => {
				const hidden = isElementHidden(el);
				const wasHidden = visibilityState.get(el);

				if (hidden && !wasHidden) {
					// Just became hidden — reset
					gsap.killTweensOf(el);
					Array.from(el.children).forEach((child) => {
						if (child instanceof HTMLElement) {
							gsap.killTweensOf(child);
							gsap.set(child, { clearProps: "opacity,transform,translate,rotate,scale" });
							child.classList.remove("nextora-scroll-animation--pending");
							child.classList.remove("nextora-scroll-animation--ready");
						}
					});
					gsap.set(el, { clearProps: "opacity,transform,translate,rotate,scale" });
					el.removeAttribute(INIT_ATTR);
					el.removeAttribute("data-scroll-reveal-gen");
					el.classList.remove("nextora-scroll-animation--ready");
					el.classList.add("nextora-scroll-animation--pending");
				} else if (!hidden && wasHidden) {
					// Just became visible — force clean re-init
					el.removeAttribute(INIT_ATTR);
					markPending(el);
					initElementAnimations(el);
					refreshScrollTriggers();
					forcePlayInViewTriggers();
				}

				visibilityState.set(el, hidden);
				hasWork = true;
			});

		if (needsThrottle || hasWork) {
			needsThrottle = true;
			setTimeout(() => requestAnimationFrame(check), 50);
		}
	};

	requestAnimationFrame(check);
}

function configureScrollTrigger(): void {
	ensureGsapPlugins();
	ScrollTrigger.config({
		autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
	});
	ScrollTrigger.addEventListener("scrollEnd", revealBottomAnchoredTriggers);
}

function onWindowLoad(): void {
	scanScrollAnimations();
	refreshScrollTriggers();
}

/**
 * Boot the global animation system once DOM is ready.
 * Safe to call multiple times — only the first call runs setup.
 */
export function initScrollAnimations(): void {
	const boot = (): void => {
		if (booted) {
			scanScrollAnimations();
			return;
		}
		booted = true;

		configureScrollTrigger();
		scanScrollAnimations();
		observeDynamicContent();
		watchDeferredScrollElements();

		window.addEventListener("load", onWindowLoad, { once: true });
	};

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", boot, { once: true });
	} else {
		boot();
	}
}

/** Expose preset registration for child themes / small inline scripts. */
export function attachScrollAnimationGlobals(): void {
	window.nextoraRegisterScrollAnimation = registerScrollAnimationPreset;
}

declare global {
	interface Window {
		nextoraRegisterScrollAnimation?: typeof registerScrollAnimationPreset;
	}
}
