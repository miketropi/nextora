/**
 * MiMo Code–style typewriter reveal ({@link https://mimo.xiaomi.com/coder} `.hero__subtitle`).
 * Characters print left-to-right with a blinking caret when the block enters the viewport.
 */

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { DEFAULT_SCROLL_START } from "./constants";
import { parseScrollAnimationOptions } from "./parse-options";

const TYPEWRITER_MOBILE_MAX_WIDTH = 700;
const TYPEWRITER_DONE_TAIL_MS = 150;

type TypewriterState = {
	originalText: string;
	charEls: HTMLElement[];
	caretEl: HTMLElement | null;
	played: boolean;
	timeouts: number[];
};

const typewriterState = new WeakMap<HTMLElement, TypewriterState>();

function prefersReducedMotion(): boolean {
	return (
		typeof window !== "undefined" &&
		!!window.matchMedia &&
		window.matchMedia("(prefers-reduced-motion: reduce)").matches
	);
}

function isTypewriterMobile(): boolean {
	return (
		typeof window !== "undefined" &&
		!!window.matchMedia &&
		window.matchMedia(`(max-width: ${TYPEWRITER_MOBILE_MAX_WIDTH}px)`).matches
	);
}

function clearTypewriterTimeouts(state: TypewriterState): void {
	state.timeouts.forEach((id) => window.clearTimeout(id));
	state.timeouts = [];
}

function snapShowTypewriter(el: HTMLElement, state: TypewriterState): void {
	clearTypewriterTimeouts(state);
	state.charEls.forEach((char) => char.classList.add("is-typed"));
	el.classList.add("is-typing", "is-done");
	state.played = true;
}

function playTypewriter(el: HTMLElement, state: TypewriterState, startDelayMs: number, charDelayMs: number): void {
	if (state.played) {
		return;
	}

	state.played = true;
	el.classList.add("is-typing");

	state.charEls.forEach((char, index) => {
		const id = window.setTimeout(() => {
			char.classList.add("is-typed");
		}, startDelayMs + index * charDelayMs);
		state.timeouts.push(id);
	});

	const doneId = window.setTimeout(
		() => el.classList.add("is-done"),
		startDelayMs + state.charEls.length * charDelayMs + TYPEWRITER_DONE_TAIL_MS,
	);
	state.timeouts.push(doneId);
}

function prepareTypewriterElement(el: HTMLElement): TypewriterState | null {
	const originalText = el.textContent?.trim() ?? "";
	if (!originalText) {
		return null;
	}

	const state: TypewriterState = {
		originalText,
		charEls: [],
		caretEl: null,
		played: false,
		timeouts: [],
	};

	el.textContent = "";

	for (const char of originalText) {
		const span = document.createElement("span");
		span.className = "nextora-typewriter-char";
		span.textContent = char;
		el.appendChild(span);
		state.charEls.push(span);
	}

	const caret = document.createElement("span");
	caret.className = "nextora-typewriter-caret";
	caret.setAttribute("aria-hidden", "true");
	el.appendChild(caret);
	state.caretEl = caret;

	typewriterState.set(el, state);
	return state;
}

/** Restore plain text if this element was prepared for typewriter. */
export function revertTypewriterText(el: HTMLElement): void {
	const state = typewriterState.get(el);
	if (!state) {
		return;
	}

	clearTypewriterTimeouts(state);
	el.classList.remove("is-typing", "is-done", "nextora-typewriter");
	el.textContent = state.originalText;
	typewriterState.delete(el);
}

function shouldPlayImmediately(el: HTMLElement): boolean {
	const rect = el.getBoundingClientRect();
	const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
	return rect.top <= viewportHeight * 0.85 && rect.bottom > 0;
}

/**
 * Split text into characters, then type on scroll (or immediately if already in view).
 */
export function initTextTypewriter(el: HTMLElement, markInitialized: (node: HTMLElement) => void): void {
	revertTypewriterText(el);

	const options = parseScrollAnimationOptions(el);
	const startDelayMs = (el.hasAttribute("data-delay") ? options.delay : 0.35) * 1000;
	const charDelayMs = (el.hasAttribute("data-stagger") ? (options.stagger ?? 0.055) : 0.055) * 1000;

	const state = prepareTypewriterElement(el);
	if (!state) {
		markInitialized(el);
		return;
	}

	el.classList.add("nextora-typewriter");
	el.classList.remove("nextora-scroll-animation--pending");

	if (prefersReducedMotion() || isTypewriterMobile()) {
		snapShowTypewriter(el, state);
		markInitialized(el);
		return;
	}

	const run = () => playTypewriter(el, state, startDelayMs, charDelayMs);

	ScrollTrigger.create({
		trigger: el,
		start: DEFAULT_SCROLL_START,
		once: true,
		onEnter: run,
	});

	if (shouldPlayImmediately(el)) {
		run();
	}

	markInitialized(el);
}

export function skipTypewriterText(el: HTMLElement): void {
	const state = typewriterState.get(el);
	if (state) {
		snapShowTypewriter(el, state);
		return;
	}

	revertTypewriterText(el);
}
