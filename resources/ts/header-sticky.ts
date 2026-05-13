/**
 * Sticky header (scroll-up hide/show) for `nextora/header` when
 * `.nextora-header-block--sticky-scroll-up` is present.
 *
 * @package Nextora
 */

declare global {
	interface Window {
		nextoraHeaderSticky?: { hideAfter?: number };
	}
}

const HEADER_SEL = ".nextora-header-block--sticky-scroll-up";
const HIDDEN_CLASS = "nextora-header-block--scroll-hidden";

export function initHeaderSticky(): void {
	const headers = document.querySelectorAll<HTMLElement>(HEADER_SEL);
	if (!headers.length) {
		return;
	}

	const raw = window.nextoraHeaderSticky?.hideAfter;
	const hideAfter = typeof raw === "number" && raw >= 0 ? raw : 72;
	const deltaThreshold = 6;

	let lastY = window.scrollY;
	let ticking = false;

	const apply = (): void => {
		ticking = false;
		const y = window.scrollY;
		const delta = y - lastY;
		lastY = y;

		for (const el of headers) {
			if (y < hideAfter) {
				el.classList.remove(HIDDEN_CLASS);
				continue;
			}
			if (delta > deltaThreshold) {
				el.classList.add(HIDDEN_CLASS);
			} else if (delta < -deltaThreshold) {
				el.classList.remove(HIDDEN_CLASS);
			}
		}
	};

	const onScroll = (): void => {
		if (ticking) {
			return;
		}
		ticking = true;
		requestAnimationFrame(apply);
	};

	window.addEventListener("scroll", onScroll, { passive: true });
	window.addEventListener(
		"resize",
		() => {
			lastY = window.scrollY;
			for (const el of headers) {
				if (window.scrollY < hideAfter) {
					el.classList.remove(HIDDEN_CLASS);
				}
			}
		},
		{ passive: true },
	);
}
