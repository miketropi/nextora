/**
 * Infinite arc gallery carousel — triple buffer + drag recenter.
 *
 * @package Nextora
 */

import {
	ARC_RESPONSIVE_DESKTOP_MIN,
	arcPositionNumericAtFractionalSlot,
	arcPositionNumericToCss,
	buildArcLayout,
	calculateArcPositionForSlotNumeric,
	type ArcMathInput,
} from './arc-math';
import { parseArcLayoutBase, applyMobileTightStageHeight } from './arc-layout-dom';

const CAROUSEL_INIT_ATTR = 'data-nextora-arc-carousel-inited';
const CLONE_BEFORE = 'buffer-before';
const CLONE_AFTER = 'buffer-after';

const SNAP_DURATION_MS = 420;
const DRAG_THRESHOLD_PX = 4;

function prefersReducedMotion(): boolean {
	return (
		typeof window !== 'undefined' &&
		window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
	);
}

function easeOutCubic(t: number): number {
	return 1 - (1 - t) ** 3;
}

interface CarouselLayout {
	resolved: ArcMathInput;
	realCount: number;
	centerSlot: number;
	stepPx: number;
	scale: number;
}

export interface ArcCarouselController {
	applyFractionalOffset: (fractional: number) => void;
	getFractionalOffset: () => number;
	getBaseOffset: () => number;
	getRealCount: () => number;
	destroy: () => void;
}

interface TrackSetup {
	trackItems: HTMLElement[];
	realCount: number;
	baseOffset: number;
}

function buildCarouselLayout(
	root: HTMLElement,
	realCount: number,
): CarouselLayout | null {
	const base = parseArcLayoutBase(root);
	if (!base || realCount < 1) {
		return null;
	}

	const partial: Partial<ArcMathInput> & { count: number } = {
		count: realCount,
		arcRadius: base.arcRadius,
		arcSpread: base.arcSpread,
		galleryHeight: base.galleryHeight,
		imageWidth: base.imageWidth,
		imageHeight: base.imageHeight,
		arcDirection: 'down',
	};

	const { resolved, scale } = buildArcLayout(partial, root.clientWidth);
	const pos0 = calculateArcPositionForSlotNumeric(0, realCount, resolved);
	const pos1 = calculateArcPositionForSlotNumeric(
		Math.min(1, realCount - 1),
		realCount,
		resolved,
	);
	const stepPx =
		Math.abs(pos1.x - pos0.x) ||
		Math.max(48, Math.round(resolved.imageWidth * 0.45));

	return {
		resolved,
		realCount,
		centerSlot: (realCount - 1) / 2,
		stepPx,
		scale,
	};
}

function applyStageMetrics(root: HTMLElement, layout: CarouselLayout): void {
	const base = parseArcLayoutBase(root);
	const { resolved, scale } = layout;
	const stage = root.querySelector<HTMLElement>('.nextora-arc-gallery__stage');
	if (stage) {
		stage.style.height = `${resolved.galleryHeight}px`;
	}
	root.style.setProperty(
		'--nextora-arc-gallery-height',
		`${resolved.galleryHeight}px`,
	);

	if (base && typeof base.contentOffsetY === 'number') {
		root.style.setProperty(
			'--nextora-arc-content-offset-y',
			`${Math.round(base.contentOffsetY * scale)}px`,
		);
	}

	if (base && typeof base.imageBorderRadius === 'number') {
		root.style.setProperty(
			'--nextora-arc-img-radius',
			`${Math.max(0, Math.round(base.imageBorderRadius * scale))}px`,
		);
	}

	if (base && typeof base.imageBorderWidth === 'number') {
		root.style.setProperty(
			'--nextora-arc-img-border',
			`${Math.max(0, Math.round(base.imageBorderWidth * scale))}px`,
		);
	}

	root.dataset.nextoraArcScale = String(Math.round(scale * 1000) / 1000);
}

function applyItemLayout(
	item: HTMLElement,
	slot: number,
	layout: CarouselLayout,
): void {
	const { resolved, realCount, centerSlot } = layout;
	const pos = arcPositionNumericAtFractionalSlot(slot, realCount, resolved);
	const css = arcPositionNumericToCss(pos, resolved.imageWidth);
	const zIndex = Math.round(100 - Math.abs(slot - centerSlot) * 12);
	const onArc = slot >= -0.65 && slot <= realCount - 0.35;

	item.style.width = `${resolved.imageWidth}px`;
	item.style.height = `${resolved.imageHeight}px`;
	item.style.left = css.left;
	item.style.top = css.top;
	item.style.transform = `rotate(${css.rotation}deg)`;
	item.style.setProperty('--nextora-arc-rotation', `${css.rotation}deg`);
	item.style.zIndex = String(Math.max(1, zIndex));
	item.style.transition = 'none';
	item.style.visibility = onArc ? 'visible' : 'hidden';
	item.style.pointerEvents = onArc ? 'auto' : 'none';
}

function markClone(item: HTMLElement, kind: string): void {
	item.setAttribute('data-nextora-arc-clone', kind);
	item.setAttribute('aria-hidden', 'true');
	item.querySelectorAll<HTMLElement>('.nextora-arc-gallery__media').forEach((media) => {
		media.setAttribute('aria-hidden', 'true');
		media.removeAttribute('role');
		media.removeAttribute('aria-label');
	});
}

/**
 * [copy₀…copyₙ₋₁] + [real₀…realₙ₋₁] + [copy₀…copyₙ₋₁] — always n frames on the arc.
 */
function setupTrackBuffer(stage: HTMLElement): TrackSetup {
	stage.querySelectorAll<HTMLElement>('[data-nextora-arc-clone]').forEach((node) => {
		node.remove();
	});

	const realItems = [
		...stage.querySelectorAll<HTMLElement>(
			'.nextora-arc-gallery__item:not([data-nextora-arc-clone])',
		),
	];
	const realCount = realItems.length;

	if (realCount < 2) {
		return { trackItems: realItems, realCount, baseOffset: 0 };
	}

	const anchor = realItems[0];

	for (let i = realCount - 1; i >= 0; i -= 1) {
		const clone = realItems[i].cloneNode(true) as HTMLElement;
		markClone(clone, CLONE_BEFORE);
		stage.insertBefore(clone, anchor);
	}

	realItems.forEach((item) => {
		const clone = item.cloneNode(true) as HTMLElement;
		markClone(clone, CLONE_AFTER);
		stage.appendChild(clone);
	});

	return {
		trackItems: [...stage.querySelectorAll<HTMLElement>('.nextora-arc-gallery__item')],
		realCount,
		baseOffset: realCount,
	};
}

export function initArcCarousel(root: HTMLElement): ArcCarouselController | null {
	if (root.getAttribute(CAROUSEL_INIT_ATTR) === '1') {
		return null;
	}

	const stage = root.querySelector<HTMLElement>('.nextora-arc-gallery__stage');
	if (!stage) {
		return null;
	}

	const { trackItems, realCount, baseOffset } = setupTrackBuffer(stage);

	if (realCount < 2) {
		return null;
	}

	root.setAttribute(CAROUSEL_INIT_ATTR, '1');
	stage.classList.add('nextora-arc-gallery__stage--carousel');
	stage.tabIndex = 0;

	let layout = buildCarouselLayout(root, realCount);
	if (!layout) {
		return null;
	}

	applyStageMetrics(root, layout);

	/** trackItems[offset] sits at arc slot 0; middle copy starts at baseOffset. */
	let offset = baseOffset;
	let dragDelta = 0;
	let pointerId: number | null = null;
	let startX = 0;
	let didDrag = false;
	let snapFrame = 0;

	const getFractionalOffset = (): number => offset - dragDelta / layout!.stepPx;

	const recenterDuringDrag = (): void => {
		if (!layout) {
			return;
		}

		const { realCount: n, stepPx } = layout;
		let fractional = getFractionalOffset();
		let guard = 0;

		while (fractional >= 2 * n && guard < 4) {
			offset -= n;
			dragDelta += n * stepPx;
			fractional = getFractionalOffset();
			guard += 1;
		}

		guard = 0;
		while (fractional < n && guard < 4) {
			offset += n;
			dragDelta -= n * stepPx;
			fractional = getFractionalOffset();
			guard += 1;
		}
	};

	const positionAll = (): void => {
		if (!layout) {
			return;
		}
		recenterDuringDrag();
		const fractional = getFractionalOffset();
		trackItems.forEach((item, index) => {
			applyItemLayout(item, index - fractional, layout!);
		});

		if (root.clientWidth < ARC_RESPONSIVE_DESKTOP_MIN) {
			const tightened = applyMobileTightStageHeight(
				root,
				stage,
				layout.resolved,
				root.clientWidth,
			);
			if (tightened.galleryHeight !== layout.resolved.galleryHeight) {
				layout = { ...layout, resolved: tightened };
			}
		}
	};

	const normalizeAfterSnap = (target: number): number => {
		if (target >= 2 * realCount) {
			return target - realCount;
		}
		if (target < realCount) {
			return target + realCount;
		}
		return target;
	};

	const updateSlideIndicator = (): void => {
		const slideIndex =
			((((offset - baseOffset) % realCount) + realCount) % realCount) + 1;
		stage.dataset.nextoraArcSlide = String(slideIndex);
	};

	const finishSnap = (target: number): void => {
		const normalized = normalizeAfterSnap(target);
		offset = normalized;
		dragDelta = 0;
		positionAll();
		updateSlideIndicator();
	};

	const snapTo = (target: number): void => {
		if (snapFrame) {
			cancelAnimationFrame(snapFrame);
			snapFrame = 0;
		}

		if (prefersReducedMotion()) {
			finishSnap(target);
			return;
		}

		const start = getFractionalOffset();
		const startTime = performance.now();

		const tick = (now: number): void => {
			const elapsed = now - startTime;
			const t = Math.min(1, elapsed / SNAP_DURATION_MS);
			const eased = easeOutCubic(t);
			const current = start + (target - start) * eased;

			trackItems.forEach((item, index) => {
				applyItemLayout(item, index - current, layout!);
			});

			if (t < 1) {
				snapFrame = requestAnimationFrame(tick);
				return;
			}

			snapFrame = 0;
			finishSnap(target);
		};

		snapFrame = requestAnimationFrame(tick);
	};

	const applyFractionalOffset = (fractional: number): void => {
		if (pointerId !== null || !layout) {
			return;
		}

		if (snapFrame) {
			cancelAnimationFrame(snapFrame);
			snapFrame = 0;
		}

		offset = fractional;
		dragDelta = 0;
		positionAll();
		updateSlideIndicator();
	};

	const onPointerDown = (event: PointerEvent): void => {
		if (event.button !== 0 && event.pointerType === 'mouse') {
			return;
		}
		if (snapFrame) {
			cancelAnimationFrame(snapFrame);
			snapFrame = 0;
		}

		pointerId = event.pointerId;
		startX = event.clientX;
		dragDelta = 0;
		didDrag = false;
		stage.setPointerCapture(event.pointerId);
		stage.classList.add('is-arc-dragging');
	};

	const onPointerMove = (event: PointerEvent): void => {
		if (pointerId === null || event.pointerId !== pointerId) {
			return;
		}

		const dx = event.clientX - startX;
		if (Math.abs(dx) > DRAG_THRESHOLD_PX) {
			didDrag = true;
			if (event.cancelable) {
				event.preventDefault();
			}
		}

		dragDelta = dx;
		positionAll();
	};

	const endDrag = (): void => {
		if (pointerId === null) {
			return;
		}

		try {
			stage.releasePointerCapture(pointerId);
		} catch {
			// Pointer may already be released.
		}

		pointerId = null;
		stage.classList.remove('is-arc-dragging');

		const fractional = getFractionalOffset();
		const target = Math.round(fractional);
		snapTo(target);
	};

	const onPointerUp = (event: PointerEvent): void => {
		if (pointerId === null || event.pointerId !== pointerId) {
			return;
		}
		endDrag();
	};

	const onPointerCancel = (event: PointerEvent): void => {
		if (pointerId === null || event.pointerId !== pointerId) {
			return;
		}
		endDrag();
	};

	const onClick = (event: MouseEvent): void => {
		if (didDrag) {
			event.preventDefault();
			event.stopPropagation();
			didDrag = false;
		}
	};

	const onKeyDown = (event: KeyboardEvent): void => {
		if (snapFrame || pointerId !== null) {
			return;
		}

		if (event.key === 'ArrowRight') {
			event.preventDefault();
			snapTo(offset + 1);
		} else if (event.key === 'ArrowLeft') {
			event.preventDefault();
			snapTo(offset - 1);
		}
	};

	const onResize = (): void => {
		const next = buildCarouselLayout(root, realCount);
		if (!next) {
			return;
		}
		layout = next;
		applyStageMetrics(root, layout);
		positionAll();
	};

	const resizeObserver = new ResizeObserver(() => {
		requestAnimationFrame(onResize);
	});
	resizeObserver.observe(root);

	stage.addEventListener('pointerdown', onPointerDown);
	stage.addEventListener('pointermove', onPointerMove);
	stage.addEventListener('pointerup', onPointerUp);
	stage.addEventListener('pointercancel', onPointerCancel);
	stage.addEventListener('click', onClick, true);
	stage.addEventListener('keydown', onKeyDown);

	positionAll();
	updateSlideIndicator();

	const destroy = (): void => {
		resizeObserver.disconnect();
		stage.removeEventListener('pointerdown', onPointerDown);
		stage.removeEventListener('pointermove', onPointerMove);
		stage.removeEventListener('pointerup', onPointerUp);
		stage.removeEventListener('pointercancel', onPointerCancel);
		stage.removeEventListener('click', onClick, true);
		stage.removeEventListener('keydown', onKeyDown);
		if (snapFrame) {
			cancelAnimationFrame(snapFrame);
		}
	};

	return {
		applyFractionalOffset,
		getFractionalOffset,
		getBaseOffset: () => baseOffset,
		getRealCount: () => realCount,
		destroy,
	};
}
