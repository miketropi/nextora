/**
 * Value Cards — vanilla JS 3D tilt engine + click-to-modal (no GSAP).
 *
 * On mousemove: calculate tiltX/tiltY based on cursor position relative to
 * card center, apply scale+rotateX+rotateY+rotateZ transforms.
 * On mouseleave: reset to default rotation.
 * On click: open a modal with the full card content.
 *
 * Responsive:
 *   Desktop (>1023px) — full tilt + rotation
 *   Tablet (768-1023px) — 50% tilt + reduced rotation
 *   Mobile (<768px) — no 3D tilt, vertical stack, tap-to-open modal
 *
 * Honors prefers-reduced-motion (static) and touch devices (no tilt).
 */

export {};

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */

interface TiltState {
	card: HTMLElement;
	maxTilt: number;
	hoverScale: number;
	defaultRotation: number;
	boundMouseMove: (e: MouseEvent) => void;
	boundMouseLeave: () => void;
	boundMouseEnter: (e: MouseEvent) => void;
}

interface ModalElements {
	overlay: HTMLDivElement;
	dialog: HTMLDivElement;
	closeBtn: HTMLButtonElement;
	mediaContainer: HTMLDivElement;
	titleEl: HTMLHeadingElement;
	descEl: HTMLParagraphElement;
}

/* ------------------------------------------------------------------ */
/* Globals                                                            */
/* ------------------------------------------------------------------ */

const tiltStates: TiltState[] = [];
let globalModal: ModalElements | null = null;
let lastFocusedCard: HTMLElement | null = null;
let modalOpenClass = 'nextora-value-cards__modal-overlay--open';

/* ------------------------------------------------------------------ */
/* Utilities                                                          */
/* ------------------------------------------------------------------ */

function prefersReducedMotion(): boolean {
	return (
		typeof window !== 'undefined' &&
		window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
	);
}

function isTouchDevice(): boolean {
	return (
		typeof window !== 'undefined' &&
		('ontouchstart' in window || navigator.maxTouchPoints > 0)
	);
}

function clamp(val: number, min: number, max: number): number {
	return Math.max(min, Math.min(max, val));
}

function getCSSVar(el: HTMLElement, name: string, fallback: number): number {
	const val = getComputedStyle(el).getPropertyValue(name).trim();
	if (!val) return fallback;
	const num = parseFloat(val);
	return Number.isNaN(num) ? fallback : num;
}

/** Returns 1.0 for desktop, 0.5 for tablet, 0 for mobile (no tilt). */
function getViewportTiltMultiplier(): number {
	if (typeof window === 'undefined') return 0;
	const w = window.innerWidth;
	if (w < 768) return 0;
	if (w < 1024) return 0.5;
	return 1.0;
}

/** True when the current viewport is mobile (<768px). */
function isMobileViewport(): boolean {
	return typeof window !== 'undefined' && window.innerWidth < 768;
}

/** Scrollbar width compensation for body-scroll lock. */
function getScrollbarWidth(): number {
	return window.innerWidth - document.documentElement.clientWidth;
}

/* ------------------------------------------------------------------ */
/* 3D Tilt engine                                                     */
/* ------------------------------------------------------------------ */

function createTilt(card: HTMLElement): void {
	if (prefersReducedMotion() || isTouchDevice()) {
		return;
	}

	const multiplier = getViewportTiltMultiplier();
	if (multiplier === 0) return; // mobile — no tilt

	const container = card.closest<HTMLElement>('.nextora-value-cards');
	const rawMaxTilt = container ? getCSSVar(container, '--nextora-value-cards-max-tilt', 12) : 12;
	const maxTilt = rawMaxTilt * multiplier;
	const hoverScale = container ? getCSSVar(container, '--nextora-value-cards-hover-scale', 1.06) : 1.06;
	const rawRotation = parseFloat(card.getAttribute('data-rotation') || '0') || 0;
	const defaultRotation = rawRotation * multiplier;

	const onMouseMove = (e: MouseEvent): void => {
		const rect = card.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		const relX = e.clientX - centerX;
		const relY = e.clientY - centerY;

		const normX = clamp(relX / (rect.width / 2), -1, 1);
		const normY = clamp(relY / (rect.height / 2), -1, 1);

		const tiltX = normY * -maxTilt;
		const tiltY = normX * maxTilt;

		card.style.transform = `perspective(var(--nextora-value-cards-perspective, 1000px)) rotateX(${tiltX}deg) rotateY(${tiltY}deg) rotateZ(${defaultRotation}deg) scale(${hoverScale})`;
	};

	const onMouseLeave = (): void => {
		const container = card.closest<HTMLElement>('.nextora-value-cards');
		const dur = container
			? getComputedStyle(container).getPropertyValue('--nextora-value-cards-transition-duration').trim() || '0.45s'
			: '0.45s';
		card.style.transition = `transform ${dur} cubic-bezier(0.2, 0.8, 0.2, 1)`;
		card.style.transform = `perspective(var(--nextora-value-cards-perspective, 1000px)) rotateX(0deg) rotateY(0deg) rotateZ(${defaultRotation}deg) scale(1)`;

		const onTransitionEnd = (): void => {
			card.style.transition = '';
			card.removeEventListener('transitionend', onTransitionEnd);
		};
		card.addEventListener('transitionend', onTransitionEnd, { once: true });
	};

	const onMouseEnter = (): void => {
		card.style.transition = '';
	};

	card.addEventListener('mouseenter', onMouseEnter);
	card.addEventListener('mousemove', onMouseMove);
	card.addEventListener('mouseleave', onMouseLeave);

	// Apply initial static rotation
	card.style.transform = `perspective(var(--nextora-value-cards-perspective, 1000px)) rotateX(0deg) rotateY(0deg) rotateZ(${defaultRotation}deg) scale(1)`;

	tiltStates.push({
		card,
		maxTilt,
		hoverScale,
		defaultRotation,
		boundMouseMove: onMouseMove,
		boundMouseLeave: onMouseLeave,
		boundMouseEnter: onMouseEnter,
	});
}

function destroyTilt(card: HTMLElement): void {
	const idx = tiltStates.findIndex((s) => s.card === card);
	if (idx === -1) return;

	const state = tiltStates[idx];
	card.removeEventListener('mousemove', state.boundMouseMove);
	card.removeEventListener('mouseleave', state.boundMouseLeave);
	card.removeEventListener('mouseenter', state.boundMouseEnter);
	card.style.transform = '';
	card.style.transition = '';
	tiltStates.splice(idx, 1);
}

function initCards(container: Element | Document = document): void {
	container
		.querySelectorAll<HTMLElement>('.nextora-value-cards__card')
		.forEach((card) => {
			if (tiltStates.some((s) => s.card === card)) return;
			createTilt(card);
		});
}

function destroyAll(): void {
	while (tiltStates.length > 0) {
		destroyTilt(tiltStates[0].card);
	}
}

/* ------------------------------------------------------------------ */
/* Click-to-Modal system                                              */
/* ------------------------------------------------------------------ */

const FOCUSABLE_SELECTOR =
	'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"]), video[controls], audio[controls]';

function getFocusableElements(container: HTMLElement): HTMLElement[] {
	const els = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
	return Array.from(els).filter((el) => {
		if (el.hidden) return false;
		const style = getComputedStyle(el);
		if (style.display === 'none' || style.visibility === 'hidden') return false;
		// Check if any ancestor is hidden
		let parent: HTMLElement | null = el.parentElement;
		while (parent && parent !== container) {
			if (parent.hidden) return false;
			parent = parent.parentElement;
		}
		return true;
	});
}

function trapFocus(modal: HTMLElement, e: KeyboardEvent): void {
	if (e.key !== 'Tab') return;

	const focusable = getFocusableElements(modal);
	if (focusable.length === 0) return;

	const first = focusable[0];
	const last = focusable[focusable.length - 1];

	if (e.shiftKey) {
		if (document.activeElement === first) {
			e.preventDefault();
			last.focus();
		}
	} else {
		if (document.activeElement === last) {
			e.preventDefault();
			first.focus();
		}
	}
}

function lockBodyScroll(): void {
	const scrollbarWidth = getScrollbarWidth();
	document.documentElement.style.setProperty('--ncvc-scrollbar-width', `${scrollbarWidth}px`);
	document.body.style.overflow = 'hidden';
	if (scrollbarWidth > 0) {
		document.body.style.paddingRight = `${scrollbarWidth}px`;
	}
}

function unlockBodyScroll(): void {
	document.body.style.overflow = '';
	document.body.style.paddingRight = '';
}

function getOrCreateModal(): ModalElements {
	if (globalModal) return globalModal;

	// Overlay
	const overlay = document.createElement('div');
	overlay.className = 'nextora-value-cards__modal-overlay';
	overlay.setAttribute('aria-hidden', 'true');

	// Dialog
	const dialog = document.createElement('div');
	dialog.className = 'nextora-value-cards__modal';
	dialog.setAttribute('role', 'dialog');
	dialog.setAttribute('aria-modal', 'true');
	dialog.setAttribute('aria-labelledby', 'nextora-value-cards__modal-title');

	// Close button
	const closeBtn = document.createElement('button');
	closeBtn.className = 'nextora-value-cards__modal-close';
	closeBtn.type = 'button';
	closeBtn.setAttribute('aria-label', 'Close dialog');
	closeBtn.innerHTML =
		'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
	closeBtn.addEventListener('click', closeCardModal);

	// Media container
	const mediaContainer = document.createElement('div');
	mediaContainer.className = 'nextora-value-cards__modal-media';

	// Title
	const titleEl = document.createElement('h2');
	titleEl.className = 'nextora-value-cards__modal-title';
	titleEl.id = 'nextora-value-cards__modal-title';

	// Description
	const descEl = document.createElement('p');
	descEl.className = 'nextora-value-cards__modal-description';

	// Assemble
	dialog.appendChild(closeBtn);
	dialog.appendChild(mediaContainer);
	dialog.appendChild(titleEl);
	dialog.appendChild(descEl);
	overlay.appendChild(dialog);

	// Click overlay to close
	overlay.addEventListener('click', (e) => {
		if (e.target === overlay) {
			closeCardModal();
		}
	});

	// Keyboard handler
	overlay.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			e.preventDefault();
			closeCardModal();
			return;
		}
		trapFocus(dialog, e);
	});

	document.body.appendChild(overlay);
	globalModal = { overlay, dialog, closeBtn, mediaContainer, titleEl, descEl };
	return globalModal;
}

function openCardModal(card: HTMLElement): void {
	const modal = getOrCreateModal();

	// Extract data from card
	const title = card.getAttribute('data-vc-title') || '';
	const description = card.getAttribute('data-vc-description') || '';
	const mediaType = card.getAttribute('data-vc-media-type') || 'image';
	const mediaUrl = card.getAttribute('data-vc-media-url') || '';
	const videoPosterUrl = card.getAttribute('data-vc-video-poster-url') || '';

	// Populate modal
	modal.titleEl.textContent = title;
	modal.descEl.textContent = description;

	// Build media
	modal.mediaContainer.innerHTML = '';
	if (mediaUrl) {
		if (mediaType === 'video') {
			const video = document.createElement('video');
			video.src = mediaUrl;
			video.controls = true;
			video.playsInline = true;
			video.className = 'nextora-value-cards__modal-media-element';
			if (videoPosterUrl) {
				video.poster = videoPosterUrl;
			}
			modal.mediaContainer.appendChild(video);
		} else {
			const img = document.createElement('img');
			img.src = mediaUrl;
			img.alt = title;
			img.className = 'nextora-value-cards__modal-media-element';
			img.loading = 'lazy';
			modal.mediaContainer.appendChild(img);
		}
	}

	// Store reference to restore focus later
	lastFocusedCard = card;

	// Lock body scroll
	lockBodyScroll();

	// Show
	modal.overlay.style.display = 'flex';
	modal.overlay.setAttribute('aria-hidden', 'false');

	// Trigger animation on next frame
	requestAnimationFrame(() => {
		requestAnimationFrame(() => {
			modal.overlay.classList.add(modalOpenClass);
			// Focus the close button
			modal.closeBtn.focus();
		});
	});
}

function closeCardModal(): void {
	if (!globalModal) return;

	globalModal.overlay.classList.remove(modalOpenClass);
	globalModal.overlay.setAttribute('aria-hidden', 'true');

	// Pause any playing video
	const video = globalModal.mediaContainer.querySelector('video');
	if (video) {
		video.pause();
	}

	// Wait for transition, then hide
	const onTransitionEnd = (): void => {
		globalModal!.overlay.style.display = 'none';
		globalModal!.overlay.removeEventListener('transitionend', onTransitionEnd);

		// Restore focus
		if (lastFocusedCard) {
			lastFocusedCard.focus({ preventScroll: true });
			lastFocusedCard = null;
		}

		// Unlock body scroll
		unlockBodyScroll();
	};

	globalModal.overlay.addEventListener('transitionend', onTransitionEnd, { once: true });

	// Fallback: if transitionend doesn't fire (e.g. prefers-reduced-motion),
	// clean up after a timeout
	setTimeout(() => {
		if (globalModal && !globalModal.overlay.classList.contains(modalOpenClass)) {
			globalModal.overlay.style.display = 'none';
			unlockBodyScroll();
		}
	}, 400);
}

function attachCardClickListeners(container: Element | Document = document): void {
	container
		.querySelectorAll<HTMLElement>('.nextora-value-cards__card')
		.forEach((card) => {
			// Avoid double-attach
			if (card.dataset.vcModalBound === '1') return;
			card.dataset.vcModalBound = '1';

			card.addEventListener('click', () => {
				openCardModal(card);
			});

			// Keyboard: Enter/Space to open
			card.addEventListener('keydown', (e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					openCardModal(card);
				}
			});

			// Make cards focusable for keyboard navigation
			if (!card.hasAttribute('tabindex')) {
				card.setAttribute('tabindex', '0');
			}
			if (!card.getAttribute('role')) {
				card.setAttribute('role', 'button');
			}
			if (!card.getAttribute('aria-label')) {
				const title = card.getAttribute('data-vc-title') || 'Card';
				card.setAttribute('aria-label', `Open ${title}`);
			}
		});
}

/* ------------------------------------------------------------------ */
/* Scroll-triggered entrance animation                                */
/* ------------------------------------------------------------------ */

const ENTRANCE_STAGGER_MS = 120;
const ENTRANCE_CLASS = 'nextora-value-cards__card--revealed';

function initScrollReveal(container: HTMLElement): void {
	const deck = container.querySelector<HTMLElement>('.nextora-value-cards__deck');
	if (!deck) return;

	const cards = Array.from(
		deck.querySelectorAll<HTMLElement>('.nextora-value-cards__card'),
	);
	if (cards.length === 0) return;

	// Already revealed (re-init skipped)
	if (cards[0].classList.contains(ENTRANCE_CLASS)) return;

	if (prefersReducedMotion()) {
		// No animation — reveal instantly
		for (const card of cards) {
			card.classList.add(ENTRANCE_CLASS);
		}
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			if (!entries[0].isIntersecting) return;

			for (let i = 0; i < cards.length; i++) {
				const delay = i * ENTRANCE_STAGGER_MS;
				setTimeout(() => {
					cards[i].classList.add(ENTRANCE_CLASS);
				}, delay);
			}

			observer.disconnect();
		},
		{ rootMargin: '0px 0px -50px 0px', threshold: 0 },
	);

	observer.observe(deck);
}

/* ------------------------------------------------------------------ */
/* Viewport-resize handler                                            */
/* ------------------------------------------------------------------ */

let resizeTimeout: ReturnType<typeof setTimeout> | null = null;
function onViewportResize(): void {
	if (resizeTimeout) clearTimeout(resizeTimeout);
	resizeTimeout = setTimeout(() => {
		if (isMobileViewport()) {
			// Destroy all tilt on mobile
			destroyAll();
		} else {
			// Rebuild tilt with the correct multiplier
			destroyAll();
			initCards(document);
		}
	}, 200);
}

/* ------------------------------------------------------------------ */
/* Init / reinit                                                      */
/* ------------------------------------------------------------------ */

function reinit(): void {
	initCards(document);
	attachCardClickListeners(document);
}

function run(): void {
	const containers = document.querySelectorAll<HTMLElement>('.nextora-value-cards');

	// Enable entrance animation (cards hidden until revealed)
	for (const el of containers) {
		el.classList.add('nextora-value-cards--animate');
	}

	if (prefersReducedMotion()) {
		for (const el of containers) {
			el.classList.add('nextora-value-cards--reduced-motion');
			initScrollReveal(el);
		}
		attachCardClickListeners(document);
		return;
	}

	if (isTouchDevice()) {
		for (const el of containers) {
			el.classList.add('nextora-value-cards--touch');
			initScrollReveal(el);
		}
		attachCardClickListeners(document);
		return;
	}

	initCards(document);
	attachCardClickListeners(document);

	for (const el of containers) {
		initScrollReveal(el);
	}
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', run, { once: true });
} else {
	run();
}

// Public API for external re-initialization
window.addEventListener('nextora-value-cards-reinit', () => {
	destroyAll();
	reinit();
});

// Reduced-motion preference changes
window.matchMedia?.('(prefers-reduced-motion: reduce)')?.addEventListener('change', (e) => {
	if (e.matches) {
		destroyAll();
		document.querySelectorAll<HTMLElement>('.nextora-value-cards').forEach((el) => {
			el.classList.add('nextora-value-cards--reduced-motion');
		});
	} else {
		document.querySelectorAll<HTMLElement>('.nextora-value-cards').forEach((el) => {
			el.classList.remove('nextora-value-cards--reduced-motion');
		});
		reinit();
		// Re-run entrance reveal for containers that may already be visible
		document.querySelectorAll<HTMLElement>('.nextora-value-cards').forEach((el) => {
			initScrollReveal(el);
		});
	}
});

// Viewport resize for responsive tilt
window.addEventListener('resize', onViewportResize, { passive: true });
