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
const ICON_ANIMATION_SELECTOR = '[data-nextora-icon-animation]:not([data-nextora-icon-animation="off"])';

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
	document.querySelectorAll< HTMLElement >( `${ BLOCK_SELECTOR }${ ICON_ANIMATION_SELECTOR }` ).forEach( initIconAnimation );
}

function playIconAnimation( root: HTMLElement ): void {
	root.setAttribute( 'data-nextora-icon-animation-state', 'playing' );
}

function stopIconAnimationLoop( root: HTMLElement ): void {
	const timer = Number( root.dataset.nextoraIconAnimationTimer ?? 0 );
	if ( timer ) {
		window.clearTimeout( timer );
		delete root.dataset.nextoraIconAnimationTimer;
	}
	root.setAttribute( 'data-nextora-icon-animation-state', 'idle' );
}

function startIconAnimationLoop( root: HTMLElement ): void {
	if ( root.getAttribute( 'data-nextora-icon-animation-state' ) === 'playing' ) {
		return;
	}

	const getAnimationTime = (): number => {
		let longest = 0;
		root.querySelectorAll< SVGElement >( '.animated-lucide-icon *' ).forEach( ( node ) => {
			const styles = getComputedStyle( node );
			const duration = parseFloat( styles.animationDuration ) || 0;
			const delay = parseFloat( styles.animationDelay ) || 0;
			longest = Math.max( longest, ( duration + delay ) * 1000 );
		} );
		return longest;
	};
	const loopPause = Math.max( 0, Number( root.dataset.nextoraIconAnimationLoopPause ?? 600 ) || 0 );

	const restart = () => {
		if ( root.getAttribute( 'data-nextora-icon-animation-state' ) !== 'playing' ) {
			return;
		}

		root.setAttribute( 'data-nextora-icon-animation-state', 'idle' );
		requestAnimationFrame( () => {
			playIconAnimation( root );
			root.dataset.nextoraIconAnimationTimer = String( window.setTimeout( restart, getAnimationTime() + loopPause ) );
		} );
	};

	playIconAnimation( root );
	requestAnimationFrame( () => {
		root.dataset.nextoraIconAnimationTimer = String( window.setTimeout( restart, getAnimationTime() + loopPause ) );
	} );
}

function initIconAnimation( root: HTMLElement ): void {
	if ( ! root.querySelector( 'svg.animated-lucide-icon' ) ) {
		return;
	}

	const trigger = root.getAttribute( 'data-nextora-icon-animation' );
	if ( ! trigger || trigger === 'hover' || root.dataset.nextoraIconAnimationInit === '1' ) {
		return;
	}

	root.dataset.nextoraIconAnimationInit = '1';
	if ( prefersReducedMotion() ) {
		root.setAttribute( 'data-nextora-icon-animation-state', 'reduced' );
		return;
	}

	const observer = new IntersectionObserver( ( entries ) => {
		const entry = entries[ 0 ];
		if ( ! entry ) {
			return;
		}

		if ( entry.isIntersecting ) {
			if ( trigger === 'loop' ) {
				startIconAnimationLoop( root );
			} else {
				playIconAnimation( root );
			}
			if ( trigger === 'when-visible' ) {
				observer.disconnect();
				window.setTimeout( () => {
					root.setAttribute( 'data-nextora-icon-animation-state', 'played' );
				}, 1000 );
			}
		} else if ( trigger === 'loop' ) {
			stopIconAnimationLoop( root );
		}
	}, { threshold: 0.2 } );

	observer.observe( root );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', initAll );
} else {
	initAll();
}
