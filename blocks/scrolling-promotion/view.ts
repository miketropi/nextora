/**
 * Scrolling promotion — fill marquee loop on the front end when content is narrower than the track.
 */
import {
	fillScrollingPromotionMarquee,
	initScrollingPromotionMarquee,
	prefersReducedMotion,
} from './marquee-loop';

const ROOT_SELECTOR =
	'.nextora-scrolling-promotion:not([data-nextora-marquee-ready])';

function observeResize(root: HTMLElement): void {
	const track = root.querySelector<HTMLElement>('.nextora-scrolling-promotion__track');
	if (!track || typeof ResizeObserver === 'undefined') {
		return;
	}

	let frame = 0;
	let lastWidth = Math.round(track.getBoundingClientRect().width);

	const observer = new ResizeObserver((entries) => {
		if (prefersReducedMotion()) {
			return;
		}
		for (const entry of entries) {
			const newWidth = Math.round(entry.contentRect.width);
			if (newWidth === lastWidth || newWidth === 0) {
				continue;
			}
			lastWidth = newWidth;
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				fillScrollingPromotionMarquee(root);
			});
		}
	});

	observer.observe(track);
}

function initIn(container: ParentNode = document): void {
	container.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach((root) => {
		void initScrollingPromotionMarquee(root).then(() => {
			observeResize(root);
		});
	});
}

function initAll(): void {
	initIn(document);
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initAll, { once: true });
} else {
	initAll();
}
