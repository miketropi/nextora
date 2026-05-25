/**
 * Class-driven scroll animations for any Gutenberg block wrapper.
 *
 * Add utility classes via block → Advanced → Additional CSS class(es). No per-block JS required.
 *
 * @see docs/scroll-animations.md
 */
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { INIT_ATTR, MUTATION_DEBOUNCE_MS, PARALLAX_SELECTOR } from "./constants";
import {
	ensureGsapPlugins,
	initElementAnimations,
	prefersReducedMotion,
	resolveAnimationClass,
} from "./helpers";
import { getAnimationSelector, registerScrollAnimationPreset } from "./presets";
import { parseScrollAnimationOptions } from "./parse-options";

let observer: MutationObserver | null = null;
let debounceTimer = 0;
let booted = false;

function collectTargets(root: ParentNode = document): HTMLElement[] {
	const selector = `${getAnimationSelector()}, ${PARALLAX_SELECTOR}`;
	const nodes = root.querySelectorAll<HTMLElement>(selector);
	return Array.from(nodes).filter((el) => {
		if (el.getAttribute(INIT_ATTR) === "1") {
			return false;
		}
		return resolveAnimationClass(el) !== null || parseScrollAnimationOptions(el).parallaxSpeed !== null;
	});
}

function markPending(el: HTMLElement): void {
	if (prefersReducedMotion() || resolveAnimationClass(el) === null) {
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

	ScrollTrigger.refresh();
	return targets.length;
}

function scheduleRescan(): void {
	window.clearTimeout(debounceTimer);
	debounceTimer = window.setTimeout(() => {
		if (scanScrollAnimations() > 0) {
			ScrollTrigger.refresh();
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

function configureScrollTrigger(): void {
	ensureGsapPlugins();
	ScrollTrigger.config({
		autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
	});
}

function onWindowLoad(): void {
	scanScrollAnimations();
	ScrollTrigger.refresh();
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
