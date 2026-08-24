/**
 * Text Reveal Animation Block view script
 * GSAP + ScrollTrigger reveal controller + Dynamic Width Auto-Fit
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ROOT_SELECTOR = '.wp-block-nextora-text-reveal-animation';
const INIT_ATTR = 'data-nextora-tra-inited';

function prefersReducedMotion(): boolean {
	return (
		typeof window !== 'undefined' &&
		window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
	);
}

function isElementInViewport(el: HTMLElement): boolean {
	const rect = el.getBoundingClientRect();
	const windowHeight = window.innerHeight || document.documentElement.clientHeight;
	return rect.top < windowHeight * 0.85 && rect.bottom > 0;
}

function measureAccurateRowWidth(row: HTMLElement, baseFontSize: number): number {
	const textEl = row.querySelector<HTMLElement>('.nextora-tra__text');
	if (!textEl) {
		return 0;
	}

	let width = 0;
	Array.from(textEl.children).forEach((item) => {
		const el = item as HTMLElement;
		if (el.classList.contains('nextora-tra__char')) {
			width += el.getBoundingClientRect().width;
		} else if (el.classList.contains('nextora-tra__img-wrap')) {
			const customWidthStr =
				el.style.getPropertyValue('--tra-img-custom-width') ||
				el.style.getPropertyValue('--tra-el-width');
			const parsedWidth =
				parseFloat(customWidthStr) ||
				(el.classList.contains('small') || el.classList.contains('nextora-tra__img-wrap--small')
					? 100
					: 200);
			const emWidth = (parsedWidth / 200) * 1.05;
			width += emWidth * baseFontSize + 0.36 * baseFontSize;
		}
	});

	return width;
}

function autoFitBlock(root: HTMLElement): void {
	const container = root.querySelector<HTMLElement>('.nextora-tra__container');
	if (!container) {
		return;
	}

	const rows = Array.from(container.querySelectorAll<HTMLElement>('.nextora-tra__row'));
	if (!rows.length) {
		return;
	}

	const calculateFit = (): void => {
		const containerWidth = container.clientWidth;
		if (!containerWidth) {
			return;
		}

		// Set base font-size to 100px for precise element measurement
		container.style.fontSize = '100px';

		let maxRowWidth = 0;
		rows.forEach((r) => {
			const w = measureAccurateRowWidth(r, 100);
			if (w > maxRowWidth) {
				maxRowWidth = w;
			}
		});

		if (maxRowWidth > 0) {
			const baseScale = (containerWidth * 0.95) / maxRowWidth;
			const baseFontSize = Math.round(100 * baseScale);
			const finalSize = Math.max(14, Math.min(130, baseFontSize));

			container.style.setProperty('--tra-auto-font-size', `${finalSize}px`);
			container.style.fontSize = `${finalSize}px`;

			// Find max accurate row width among all rows for equal divider length
			const rowWrappers = Array.from(
				container.querySelectorAll<HTMLElement>('.nextora-tra__row-wrapper'),
			);
			let longestTextWidth = 0;
			rowWrappers.forEach((rw) => {
				const w = Math.round(measureAccurateRowWidth(rw, finalSize));
				if (w > longestTextWidth) {
					longestTextWidth = w;
				}
			});

			// Set all dividers to equal the longest row's width
			rowWrappers.forEach((rw) => {
				const divider = rw.querySelector<HTMLElement>('.nextora-tra__divider');
				if (divider && longestTextWidth > 0) {
					divider.style.setProperty('--tra-divider-text-width', `${longestTextWidth}px`);
					divider.style.width = `${longestTextWidth}px`;
				}
			});
		}
	};

	calculateFit();

	if (typeof ResizeObserver !== 'undefined') {
		const ro = new ResizeObserver(() => {
			calculateFit();
		});
		ro.observe(root);
	}
}

function initBlock(root: HTMLElement): void {
	autoFitBlock(root);

	if (root.getAttribute(INIT_ATTR) === '1') {
		return;
	}
	root.setAttribute(INIT_ATTR, '1');

	if (prefersReducedMotion()) {
		root.classList.add('is-revealed');
		return;
	}

	const reveal = (): void => {
		root.classList.add('is-revealed');
	};

	if (root.getAttribute('data-nextora-scroll-reveal') !== '1') {
		reveal();
		return;
	}

	if (isElementInViewport(root)) {
		reveal();
		return;
	}

	ScrollTrigger.create({
		trigger: root,
		start: 'top 85%',
		once: true,
		onEnter: reveal,
	});
}

function boot(): void {
	document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach(initBlock);
	ScrollTrigger.config({
		autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize',
	});
	ScrollTrigger.refresh();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
	boot();
}

window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
