/**
 * Scroll reveal for `nextora/plugin-notice` (front end).
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ROOT_SELECTOR =
	'.wp-block-nextora-plugin-notice[data-nextora-scroll-reveal="1"]:not([data-nextora-plugin-notice-scroll-init="1"])';
const INIT_ATTR = 'data-nextora-plugin-notice-scroll-init';

function prefersReducedMotion(): boolean {
	return (
		typeof window !== 'undefined' &&
		window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
	);
}

function initRoot(root: HTMLElement): void {
	if (root.getAttribute(INIT_ATTR) === '1') {
		return;
	}
	if (root.getAttribute('data-nextora-scroll-reveal') !== '1') {
		return;
	}
	if (prefersReducedMotion()) {
		return;
	}

	root.setAttribute(INIT_ATTR, '1');
	gsap.fromTo(
		root,
		{ opacity: 0, y: 28 },
		{
			opacity: 1,
			y: 0,
			duration: 0.95,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: root,
				start: 'top 88%',
				once: true,
			},
		},
	);
}

function initAll(): void {
	document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach(initRoot);
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initAll);
} else {
	initAll();
}
