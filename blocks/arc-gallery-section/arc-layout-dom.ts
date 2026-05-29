/**
 * Apply scaled arc layout to the DOM (front end + editor).
 *
 * @package Nextora
 */

import {
	buildArcLayout,
	type ArcLayoutBuildResult,
	type ArcMathInput,
} from './arc-math';

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

	root.dataset.nextoraArcScale = String(Math.round(scale * 1000) / 1000);

	return layout;
}
