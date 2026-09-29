/**
 * Sticky `nextora/header` inside `header.wp-block-template-part`.
 *
 * Pin geometry from the header shell; scroll-up show/hide runs on the block root
 * while pinned (`position: fixed`) so `transform` does not break pre-pin sticky.
 *
 * @package Nextora
 */

declare global {
	interface Window {
		nextoraHeaderSticky?: { hideAfter?: number };
	}
}

const STICKY_SEL =
	".nextora-header-block--sticky-always, .nextora-header-block--sticky-scroll-up";
const SCROLL_UP_SEL = ".nextora-header-block--sticky-scroll-up";
const HEADER_SHELL_SEL = "header.wp-block-template-part, .wp-block-template-part";
const PINNED_CLASS = "nextora-header-block--is-pinned";
const HIDDEN_CLASS = "nextora-header-block--scroll-hidden";
const SPACER_CLASS = "nextora-header-block__sticky-spacer";

const VAR_TOP = "--nextora-header-sticky-top";
const VAR_LEFT = "--nextora-header-sticky-left";
const VAR_WIDTH = "--nextora-header-sticky-width";
const VAR_TRANSLATE_Y = "--nextora-header-sticky-translate-y";

/** Minimum accumulated downward scroll before hiding the header (px). */
const HIDE_DELTA_THRESHOLD = 15;
/** Minimum accumulated upward scroll before revealing the header (px). */
const SHOW_DELTA_THRESHOLD = 15;
const DEFAULT_HIDE_AFTER = 72;

type StickyEntry = {
	el: HTMLElement;
	shell: HTMLElement;
	spacer: HTMLElement | null;
	/** Document scrollY when the block should pin. */
	pinScrollY: number;
};

function getHeaderShell(block: HTMLElement): HTMLElement {
	return (
		block.closest<HTMLElement>(HEADER_SHELL_SEL) ??
		block.closest<HTMLElement>("header") ??
		block.parentElement ??
		block
	);
}

/** Viewport Y (px) where the block should stick — below admin bar when visible. */
function measurePinTop(): number {
	const bar = document.getElementById("wpadminbar");
	if (!bar || !document.body.classList.contains("admin-bar")) {
		return 0;
	}
	const rect = bar.getBoundingClientRect();
	if (rect.height <= 0 || rect.bottom <= 0) {
		return 0;
	}
	return Math.round(rect.bottom);
}

/**
 * Document scrollY when the block top reaches the pin line.
 */
function measurePinScrollY(element: HTMLElement, pinTop: number): number {
	const top = element.getBoundingClientRect().top;
	return Math.max(0, Math.round(window.scrollY + top - pinTop));
}

function refreshPinScrollY(entry: StickyEntry, pinTop: number): void {
	if (entry.el.classList.contains(PINNED_CLASS)) {
		if (entry.spacer) {
			entry.pinScrollY = measurePinScrollY(entry.spacer, pinTop);
		}
		return;
	}
	entry.pinScrollY = measurePinScrollY(entry.el, pinTop);
}

function updateGeometry(
	entry: StickyEntry,
	pinTop: number,
	refreshBox: boolean,
): void {
	const { el, shell } = entry;
	el.style.setProperty(VAR_TOP, `${pinTop}px`);
	if (!refreshBox) {
		return;
	}
	const box = shell.getBoundingClientRect();
	if (box.width > 0) {
		el.style.setProperty(VAR_LEFT, `${Math.round(box.left)}px`);
		el.style.setProperty(VAR_WIDTH, `${Math.round(box.width)}px`);
	}
}

function setPinned(entry: StickyEntry, pinned: boolean): void {
	const { el } = entry;
	const wasPinned = el.classList.contains(PINNED_CLASS);
	if (wasPinned === pinned) {
		return;
	}

	el.classList.toggle(PINNED_CLASS, pinned);

	if (pinned) {
		let spacer = entry.spacer;
		if (!spacer) {
			spacer = document.createElement("div");
			spacer.className = SPACER_CLASS;
			spacer.setAttribute("aria-hidden", "true");
			el.insertAdjacentElement("beforebegin", spacer);
			entry.spacer = spacer;
		}
		spacer.style.height = `${el.offsetHeight}px`;
		return;
	}

	el.classList.remove(HIDDEN_CLASS);
	el.style.setProperty(VAR_TRANSLATE_Y, "0px");

	if (entry.spacer) {
		entry.spacer.remove();
		entry.spacer = null;
	}
}

/** Scroll-up show/hide on the block root (`.nextora-header-block`). */
function setHidden(entry: StickyEntry, hidden: boolean): void {
	const { el } = entry;
	if (el.classList.contains(HIDDEN_CLASS) === hidden) {
		return;
	}
	el.classList.toggle(HIDDEN_CLASS, hidden);
}

function collectEntries(): StickyEntry[] {
	return Array.from(document.querySelectorAll<HTMLElement>(STICKY_SEL)).map(
		(el) => ({
			el,
			shell: getHeaderShell(el),
			spacer: null,
			pinScrollY: 0,
		}),
	);
}

export function initHeaderSticky(): void {
	const entries = collectEntries();
	if (!entries.length) {
		return;
	}

	const scrollUpEntries = entries.filter((entry) =>
		entry.el.matches(SCROLL_UP_SEL),
	);

	const raw = window.nextoraHeaderSticky?.hideAfter;
	const hideAfter =
		typeof raw === "number" && Number.isFinite(raw) && raw >= 0
			? raw
			: DEFAULT_HIDE_AFTER;

	const hiddenState = new Map<StickyEntry, boolean>();
	let lastY = Math.max(0, window.scrollY);
	let accumulatedDelta = 0;
	let ticking = false;

	const syncLayout = (): void => {
		const pinTop = measurePinTop();
		for (const entry of entries) {
			refreshPinScrollY(entry, pinTop);
			const pinned = window.scrollY >= entry.pinScrollY - 1;
			// Crucial: ALWAYS refreshBox = true on resize/sync so width/left never freeze!
			updateGeometry(entry, pinTop, true);
			setPinned(entry, pinned);
			if (pinned && entry.spacer) {
				entry.spacer.style.height = `${entry.el.offsetHeight}px`;
			}
			if (hiddenState.get(entry)) {
				setHidden(entry, true);
			}
		}
	};

	const applyScroll = (): void => {
		ticking = false;
		const y = Math.max(0, window.scrollY);
		const delta = y - lastY;
		lastY = y;

		const pinTop = measurePinTop();

		for (const entry of entries) {
			refreshPinScrollY(entry, pinTop);
			const pinned = y >= entry.pinScrollY - 1;
			const wasPinned = entry.el.classList.contains(PINNED_CLASS);
			updateGeometry(entry, pinTop, !pinned || !wasPinned);
			setPinned(entry, pinned);

			if (!pinned) {
				hiddenState.set(entry, false);
			}
		}

		for (const entry of scrollUpEntries) {
			if (!entry.el.classList.contains(PINNED_CLASS)) {
				accumulatedDelta = 0;
				setHidden(entry, false);
				continue;
			}

			const hideThreshold = entry.pinScrollY + hideAfter;

			// Elastic overscroll or near the top: always keep visible.
			if (y < hideThreshold) {
				accumulatedDelta = 0;
				hiddenState.set(entry, false);
				setHidden(entry, false);
				continue;
			}

			// Accumulate delta for intentional scroll direction detection (no micro-jitter).
			if (delta > 0) {
				accumulatedDelta = accumulatedDelta < 0 ? delta : accumulatedDelta + delta;
				if (accumulatedDelta >= HIDE_DELTA_THRESHOLD) {
					hiddenState.set(entry, true);
					setHidden(entry, true);
				}
			} else if (delta < 0) {
				accumulatedDelta = accumulatedDelta > 0 ? delta : accumulatedDelta + delta;
				if (accumulatedDelta <= -SHOW_DELTA_THRESHOLD) {
					hiddenState.set(entry, false);
					setHidden(entry, false);
				}
			}
		}
	};

	const onScroll = (): void => {
		if (ticking) {
			return;
		}
		ticking = true;
		requestAnimationFrame(applyScroll);
	};

	for (const entry of scrollUpEntries) {
		setHidden(entry, false);
	}

	syncLayout();
	applyScroll();

	window.addEventListener("scroll", onScroll, { passive: true });
	window.addEventListener(
		"resize",
		() => {
			lastY = Math.max(0, window.scrollY);
			accumulatedDelta = 0;
			syncLayout();
		},
		{ passive: true },
	);

	if (typeof ResizeObserver !== "undefined") {
		const ro = new ResizeObserver(() => syncLayout());
		for (const entry of entries) {
			ro.observe(entry.shell);
		}
		const adminBar = document.getElementById("wpadminbar");
		if (adminBar) {
			ro.observe(adminBar);
		}
	}
}
