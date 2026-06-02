/**
 * Scrolling promotion — fill marquee loop on the front end when content is narrower than the track.
 */
import { initScrollingPromotionMarquee, prefersReducedMotion } from './marquee-loop';

const ROOT_SELECTOR =
	'.nextora-scrolling-promotion:not([data-nextora-marquee-ready])';

function observeResize(root: HTMLElement): void {
	const track = root.querySelector<HTMLElement>('.nextora-scrolling-promotion__track');
	if (!track || typeof ResizeObserver === 'undefined') {
		return;
	}

	let frame = 0;
	const observer = new ResizeObserver(() => {
		if (prefersReducedMotion()) {
			return;
		}
		cancelAnimationFrame(frame);
		frame = requestAnimationFrame(() => {
			delete root.dataset.nextoraMarqueeReady;
			root.classList.remove('nextora-scrolling-promotion--ready');
			void initScrollingPromotionMarquee(root);
		});
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
