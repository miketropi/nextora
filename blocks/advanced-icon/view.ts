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
const ICON_ANIMATION_SELECTOR = '[data-nextora-icon-animation="when-visible"], [data-nextora-icon-animation="loop"]';

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

function startIconLoop( root: HTMLElement, strokeCount: number, loopPause: number ): void {
	const strokeDuration = 700;
	const strokeStagger = 150;
	const totalDrawTime = Math.max( strokeDuration, strokeDuration + ( strokeCount - 1 ) * strokeStagger );
	const cycleTime = totalDrawTime + loopPause;

	const playCycle = () => {
		if ( root.dataset.nextoraIconLoopActive !== '1' ) {
			return;
		}

		root.setAttribute( 'data-nextora-icon-animation-state', 'idle' );

		requestAnimationFrame( () => {
			requestAnimationFrame( () => {
				if ( root.dataset.nextoraIconLoopActive !== '1' ) {
					return;
				}

				root.setAttribute( 'data-nextora-icon-animation-state', 'playing' );

				const timer = window.setTimeout( () => {
					playCycle();
				}, cycleTime );

				root.dataset.nextoraIconLoopTimer = String( timer );
			} );
		} );
	};

	root.dataset.nextoraIconLoopActive = '1';
	playCycle();
}

function stopIconLoop( root: HTMLElement ): void {
	root.dataset.nextoraIconLoopActive = '0';
	const timer = Number( root.dataset.nextoraIconLoopTimer ?? 0 );
	if ( timer ) {
		window.clearTimeout( timer );
		delete root.dataset.nextoraIconLoopTimer;
	}
	root.setAttribute( 'data-nextora-icon-animation-state', 'idle' );
}

function initIconAnimation( root: HTMLElement ): void {
	const svg = root.querySelector< SVGElement >( 'svg.animated-lucide-icon' );
	if ( ! svg ) {
		return;
	}

	const trigger = root.getAttribute( 'data-nextora-icon-animation' );
	if ( ! trigger || trigger === 'hover' || root.dataset.nextoraIconAnimInit === '1' ) {
		return;
	}

	root.dataset.nextoraIconAnimInit = '1';
	if ( prefersReducedMotion() ) {
		root.setAttribute( 'data-nextora-icon-animation-state', 'reduced' );
		return;
	}

	const strokeCount = svg.querySelectorAll( '.nextora-icon-stroke' ).length || 1;
	const loopPause = Math.max( 0, Number( root.getAttribute( 'data-nextora-icon-animation-loop-pause' ) ?? 600 ) );

	const strokeDuration = 700;
	const strokeStagger = 150;
	const totalDrawTime = Math.max( strokeDuration, strokeDuration + ( strokeCount - 1 ) * strokeStagger );

	const observer = new IntersectionObserver(
		( entries ) => {
			const entry = entries[ 0 ];
			if ( ! entry ) {
				return;
			}

			if ( entry.isIntersecting ) {
				if ( trigger === 'loop' ) {
					startIconLoop( root, strokeCount, loopPause );
				} else if ( trigger === 'when-visible' ) {
					root.setAttribute( 'data-nextora-icon-animation-state', 'playing' );
					observer.disconnect();
					window.setTimeout( () => {
						root.setAttribute( 'data-nextora-icon-animation-state', 'played' );
					}, totalDrawTime );
				}
			} else if ( trigger === 'loop' ) {
				stopIconLoop( root );
			}
		},
		{ threshold: 0.15 }
	);

	observer.observe( root );
}

function initAll(): void {
	document.querySelectorAll< HTMLElement >( BLOCK_SELECTOR ).forEach( initReveal );
	document.querySelectorAll< HTMLElement >( `${ BLOCK_SELECTOR }${ ICON_ANIMATION_SELECTOR }` ).forEach( initIconAnimation );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', initAll );
} else {
	initAll();
}



