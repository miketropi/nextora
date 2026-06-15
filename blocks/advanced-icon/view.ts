/**
 * Scroll reveal for `nextora/advanced-icon` (front end).
 *
 * When Animate on scroll is off, opts out of parent theme class-driven animations too.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin( ScrollTrigger );

const BLOCK_SELECTOR = '.wp-block-nextora-advanced-icon.nextora-advanced-icon';
const BLOCK_INIT_ATTR = 'data-nextora-advanced-icon-scroll-init';
const GLOBAL_INIT_ATTR = 'data-nextora-scroll-animation-init';

function prefersReducedMotion(): boolean {
	return (
		typeof window !== 'undefined' &&
		window.matchMedia?.( '(prefers-reduced-motion: reduce)' ).matches === true
	);
}

function optOutScrollAnimation( root: HTMLElement ): void {
	root.setAttribute( BLOCK_INIT_ATTR, '1' );
	root.setAttribute( GLOBAL_INIT_ATTR, '1' );
	root.classList.remove( 'nextora-scroll-animation--pending' );
	root.classList.remove( 'nextora-advanced-icon--reveal-pending' );
	root.classList.add( 'nextora-scroll-animation--ready' );
	root.classList.add( 'nextora-advanced-icon--reveal-ready' );
	gsap.killTweensOf( root );
	gsap.set( root, { clearProps: 'opacity,transform,translate,rotate,scale' } );
}

function initReveal( root: HTMLElement ): void {
	if ( root.getAttribute( 'data-nextora-scroll-reveal' ) !== '1' ) {
		optOutScrollAnimation( root );
		return;
	}

	if ( root.getAttribute( BLOCK_INIT_ATTR ) === '1' ) {
		return;
	}

	if ( prefersReducedMotion() ) {
		optOutScrollAnimation( root );
		return;
	}

	root.setAttribute( BLOCK_INIT_ATTR, '1' );
	root.classList.add( 'nextora-advanced-icon--reveal-pending' );

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
			onComplete: () => {
				root.classList.remove( 'nextora-advanced-icon--reveal-pending' );
				root.classList.add( 'nextora-advanced-icon--reveal-ready' );
			},
		},
	);
}

function initAll(): void {
	document.querySelectorAll< HTMLElement >( BLOCK_SELECTOR ).forEach( initReveal );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', initAll );
} else {
	initAll();
}
