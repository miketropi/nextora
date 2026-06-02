/**
 * Apply scaled arc layout to the DOM (front end + editor).
 *
 * @package Nextora
 */

import {
	ARC_RESPONSIVE_DESKTOP_MIN,
	buildArcLayout,
	type ArcLayoutBuildResult,
	type ArcMathInput,
} from './arc-math';

export const MOBILE_STAGE_BOTTOM_PADDING = 0;

export interface ArcLayoutBaseConfig {
	count: number;
	arcRadius: number;
	arcSpread: number;
	galleryHeight: number;
	imageWidth: number;
	imageHeight: number;
	contentOffsetY?: number;
	imageBorderRadius?: number;
	imageBorderWidth?: number;
}

export function parseArcLayoutBase(root: HTMLElement): ArcLayoutBaseConfig | null {
	const raw = root.getAttribute('data-nextora-arc-base');
	if (!raw) {
		return null;
	}

	try {
		const parsed = JSON.parse(raw) as ArcLayoutBaseConfig;
		if (!parsed || typeof parsed !== 'object') {
			return null;
		}
		return parsed;
	} catch {
		return null;
	}
}

/** Max bottom edge of in-viewport frames (px from stage top), excluding padding. */
export function measureVisibleArcBottom(
	stage: HTMLElement,
	viewportWidth: number,
): number | null {
	const stageRect = stage.getBoundingClientRect();
	let maxBottom = 0;
	let found = false;

	for (const item of stage.querySelectorAll<HTMLElement>('.nextora-arc-gallery__item')) {
		if (item.style.visibility === 'hidden') {
			continue;
		}

		const rect = item.getBoundingClientRect();
		if (rect.width < 8 || rect.height < 8) {
			continue;
		}

		if (rect.right < -32 || rect.left > viewportWidth + 32) {
			continue;
		}

		found = true;
		maxBottom = Math.max(maxBottom, rect.bottom - stageRect.top);
	}

	if (!found || maxBottom <= 0) {
		return null;
	}

	return maxBottom;
}

export function measureVisibleArcStageHeight(
	stage: HTMLElement,
	viewportWidth: number,
	contentOffsetY = 0,
): number | null {
	const maxBottom = measureVisibleArcBottom(stage, viewportWidth);
	if (maxBottom === null) {
		return null;
	}

	// Content uses margin-top: contentOffsetY (often negative on mobile).
	return Math.ceil(maxBottom + MOBILE_STAGE_BOTTOM_PADDING - contentOffsetY);
}

export function applyMobileTightStageHeight(
	root: HTMLElement,
	stage: HTMLElement,
	resolved: ArcMathInput,
	viewportWidth: number,
): ArcMathInput {
	if (viewportWidth >= ARC_RESPONSIVE_DESKTOP_MIN) {
		return resolved;
	}

	const offsetRaw = getComputedStyle(root)
		.getPropertyValue('--nextora-arc-content-offset-y')
		.trim();
	const contentOffsetY = Number.parseFloat(offsetRaw) || 0;
	const measured = measureVisibleArcStageHeight(stage, viewportWidth, contentOffsetY);
	if (!measured || measured >= resolved.galleryHeight) {
		return resolved;
	}

	stage.style.height = `${measured}px`;
	root.style.setProperty('--nextora-arc-gallery-height', `${measured}px`);

	return { ...resolved, galleryHeight: measured };
}

export function applyArcLayoutToDom(
	root: HTMLElement,
	viewportWidth: number,
): ArcLayoutBuildResult | null {
	const base = parseArcLayoutBase(root);
	const items = root.querySelectorAll<HTMLElement>('.nextora-arc-gallery__item');
	const count = items.length;

	if (!base || count === 0) {
		return null;
	}

	const partial: Partial<ArcMathInput> & { count: number } = {
		count,
		arcRadius: base.arcRadius,
		arcSpread: base.arcSpread,
		galleryHeight: base.galleryHeight,
		imageWidth: base.imageWidth,
		imageHeight: base.imageHeight,
		arcDirection: 'down',
	};

	const layout = buildArcLayout(partial, viewportWidth);
	const { resolved, positions, scale } = layout;

	const stage = root.querySelector<HTMLElement>('.nextora-arc-gallery__stage');
	if (stage) {
		stage.style.height = `${resolved.galleryHeight}px`;
	}

	root.style.setProperty('--nextora-arc-gallery-height', `${resolved.galleryHeight}px`);

	if (typeof base.contentOffsetY === 'number') {
		const offsetY = Math.round(base.contentOffsetY * scale);
		root.style.setProperty('--nextora-arc-content-offset-y', `${offsetY}px`);
	}

	if (typeof base.imageBorderRadius === 'number') {
		const radius = Math.max(0, Math.round(base.imageBorderRadius * scale));
		root.style.setProperty('--nextora-arc-img-radius', `${radius}px`);
	}

	if (typeof base.imageBorderWidth === 'number') {
		const border = Math.max(0, Math.round(base.imageBorderWidth * scale));
		root.style.setProperty('--nextora-arc-img-border', `${border}px`);
	}

	items.forEach((item, index) => {
		const pos = positions[index];
		if (!pos) {
			return;
		}

		item.style.width = `${resolved.imageWidth}px`;
		item.style.height = `${resolved.imageHeight}px`;
		item.style.left = pos.left;
		item.style.top = pos.top;
		item.style.setProperty('--nextora-arc-rotation', `${pos.rotation}deg`);
	});

	const tightened = stage
		? applyMobileTightStageHeight(root, stage, resolved, viewportWidth)
		: resolved;

	root.dataset.nextoraArcScale = String(Math.round(scale * 1000) / 1000);

	return { scale, resolved: tightened, positions };
}
