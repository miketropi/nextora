/**
 * Events block — scroll reveal stagger for list items.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SCROLL_INIT_ATTR = 'data-nextora-event-scroll-init';
const REVEAL_START_RATIO = 0.82;
const REVEAL_FALLBACK_MS = 1800;

function prefersReducedMotion(): boolean {
	return (
		typeof window !== 'undefined' &&
		window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
	);
}

function isRevealStartPassed(root: HTMLElement): boolean {
	const rect = root.getBoundingClientRect();
	const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
	return rect.top <= viewportHeight * REVEAL_START_RATIO && rect.bottom > 0;
}

function setRevealReady(root: HTMLElement): void {
	root.classList.add('nextora-event--reveal-ready');
	root.classList.remove('nextora-event--reveal-pending');
}

function clearRevealStyles(targets: HTMLElement[]): void {
	if (targets.length === 0) {
		return;
	}
	gsap.set(targets, { clearProps: 'opacity,transform,translate,rotate,scale' });
}

function scheduleRevealFallback(root: HTMLElement, targets: HTMLElement[]): void {
	window.setTimeout(() => {
		if (root.classList.contains('nextora-event--reveal-ready')) {
			return;
		}
		gsap.killTweensOf(targets);
		clearRevealStyles(targets);
		setRevealReady(root);
	}, REVEAL_FALLBACK_MS);
}

function initScrollReveal(root: HTMLElement): void {
	if (root.getAttribute('data-nextora-scroll-reveal') !== '1') {
		return;
	}
	if (root.getAttribute(SCROLL_INIT_ATTR) === '1') {
		return;
	}
	root.setAttribute(SCROLL_INIT_ATTR, '1');

	if (prefersReducedMotion()) {
		setRevealReady(root);
		return;
	}

	const items = Array.from(root.querySelectorAll<HTMLElement>('.nextora-event__item'));
	const targets = items;

	if (targets.length === 0) {
		setRevealReady(root);
		return;
	}

	root.classList.add('nextora-event--reveal-pending');
	gsap.set(targets, { opacity: 0, y: 44, force3D: true });

	const playReveal = (): void => {
		if (root.classList.contains('nextora-event--reveal-ready')) {
			return;
		}
		gsap.to(targets, {
			opacity: 1,
			y: 0,
			duration: 0.7,
			stagger: 0.1,
			ease: 'power3.out',
			onComplete: () => {
				clearRevealStyles(targets);
				setRevealReady(root);
			},
		});
	};

	scheduleRevealFallback(root, targets);

	if (isRevealStartPassed(root)) {
		playReveal();
		return;
	}

	ScrollTrigger.create({
		trigger: root,
		start: `top ${REVEAL_START_RATIO * 100}%`,
		once: true,
		onEnter: playReveal,
	});

	ScrollTrigger.refresh();

	if (isRevealStartPassed(root)) {
		playReveal();
	}
}

function initRoot(root: HTMLElement): void {
	initScrollReveal(root);
}

function init(container: Element | Document = document): void {
	container
		.querySelectorAll<HTMLElement>('.wp-block-nextora-event, .nextora-event')
		.forEach((root) => initRoot(root));
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => init());
} else {
	init();
}

export { init };
