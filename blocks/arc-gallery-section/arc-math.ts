/**
 * Arc position calculator — shared by editor preview and PHP render (keep in sync).
 *
 * @package Nextora
 */

export type ArcDirection = 'down';

export interface ArcPosition {
	left: string;
	top: string;
	rotation: number;
}

/** Pixel offsets from stage center — used for carousel interpolation. */
export interface ArcPositionNumeric {
	x: number;
	y: number;
	rotation: number;
}

export interface ArcMathInput {
	count: number;
	arcRadius: number;
	arcSpread: number;
	galleryHeight: number;
	imageWidth: number;
	imageHeight: number;
	arcDirection: ArcDirection;
}

/** Minimum gap between adjacent frames along the arc (px). */
export const ARC_IMAGE_GAP = 24;

/** Viewport width at which layout uses full user settings (px). */
export const ARC_RESPONSIVE_DESKTOP_MIN = 1024;

export interface ArcLayoutBuildResult {
	scale: number;
	resolved: ArcMathInput;
	positions: ArcPosition[];
}

/**
 * Scale factor from container width (1 = desktop user settings).
 */
export function getResponsiveArcScale(viewportWidth: number): number {
	const width = Math.max(320, viewportWidth);

	if (width >= ARC_RESPONSIVE_DESKTOP_MIN) {
		return 1;
	}

	if (width >= 768) {
		const t = (width - 768) / (ARC_RESPONSIVE_DESKTOP_MIN - 768);
		return 0.72 + t * 0.28;
	}

	if (width >= 480) {
		const t = (width - 480) / (768 - 480);
		return 0.48 + t * 0.24;
	}

	const t = (width - 320) / (480 - 320);
	return 0.38 + t * 0.1;
}

/**
 * Scale user arc dimensions for tablet / mobile (spread stays in degrees).
 */
export function applyResponsiveScale(
	input: ArcMathInput,
	scale: number,
): ArcMathInput {
	if (scale >= 0.999) {
		return { ...input };
	}

	return {
		...input,
		arcRadius: Math.round(input.arcRadius * scale),
		imageWidth: clamp(Math.round(input.imageWidth * scale), 120, 400),
		imageHeight: clamp(Math.round(input.imageHeight * scale), 150, 500),
		galleryHeight: clamp(
			Math.round(input.galleryHeight * scale),
			GALLERY_HEIGHT_MIN,
			GALLERY_HEIGHT_MAX,
		),
	};
}

/**
 * Normalize → responsive scale → resolve spacing → arc positions.
 */
export function buildArcLayout(
	partial: Partial<ArcMathInput> & { count: number },
	viewportWidth: number,
): ArcLayoutBuildResult {
	const scale = getResponsiveArcScale(viewportWidth);
	const scaled = applyResponsiveScale(normalizeArcMathInput(partial), scale);
	const resolved = resolveArcLayout(scaled);
	const positions = calculateArcPositions({ ...scaled, ...resolved });

	return { scale, resolved, positions };
}

const RADIUS_MIN = 300;
const RADIUS_MAX = 1500;
const SPREAD_MIN = 20;
const SPREAD_MAX = 90;
const GALLERY_HEIGHT_MIN = 250;
const GALLERY_HEIGHT_MAX = 600;
const STAGE_PADDING = 16;

function clamp(n: number, min: number, max: number): number {
	return Math.max(min, Math.min(max, n));
}

/** Horizontal span of a rotated frame (conservative overlap check). */
export function rotatedSpan(
	width: number,
	height: number,
	rotationDeg: number,
): number {
	const rad = (rotationDeg * Math.PI) / 180;
	return (
		width * Math.abs(Math.cos(rad)) + height * Math.abs(Math.sin(rad))
	);
}

/** Largest required chord between neighbors for the current spread. */
function maxRequiredChord(
	count: number,
	spreadDeg: number,
	imageWidth: number,
	imageHeight: number,
): number {
	const spreadRad = (spreadDeg * Math.PI) / 180;
	const halfSpread = spreadRad / 2;
	let maxChord = imageWidth + ARC_IMAGE_GAP;

	for (let i = 0; i < count - 1; i++) {
		const t1 = (i / (count - 1)) * 2 - 1;
		const t2 = ((i + 1) / (count - 1)) * 2 - 1;
		const rot1 = (t1 * halfSpread * 180) / Math.PI;
		const rot2 = (t2 * halfSpread * 180) / Math.PI;
		const chord =
			(rotatedSpan(imageWidth, imageHeight, rot1) +
				rotatedSpan(imageWidth, imageHeight, rot2)) /
				2 +
			ARC_IMAGE_GAP;
		maxChord = Math.max(maxChord, chord);
	}

	return maxChord;
}

/**
 * Adjust spread / stage height for spacing. User arc radius is always used for the curve.
 */
export function resolveArcLayout(input: ArcMathInput): ArcMathInput {
	const base = normalizeArcMathInput(input);
	const { count, imageWidth, imageHeight, arcRadius } = base;

	if (count <= 1) {
		return base;
	}

	let arcSpread = base.arcSpread;
	let galleryHeight = base.galleryHeight;

	const maxChord = maxRequiredChord(
		count,
		arcSpread,
		imageWidth,
		imageHeight,
	);

	const spreadRad = (arcSpread * Math.PI) / 180;
	const angleStep = spreadRad / (count - 1);
	const sinHalf = Math.sin(angleStep / 2);

	if (sinHalf > 0.0001) {
		const chord = 2 * arcRadius * sinHalf;
		if (chord < maxChord) {
			const requiredHalfStep = 2 * Math.asin(
				clamp(maxChord / (2 * arcRadius), 0, 1),
			);
			const requiredSpread = Math.ceil(
				(requiredHalfStep * (count - 1) * 180) / Math.PI,
			);
			arcSpread = clamp(requiredSpread, SPREAD_MIN, SPREAD_MAX);
		}
	}

	const halfSpreadRad = ((arcSpread * Math.PI) / 180) / 2;
	const yArcMax = arcRadius * (1 - Math.cos(halfSpreadRad));
	const minGalleryHeight = imageHeight + yArcMax + STAGE_PADDING;

	if (minGalleryHeight > galleryHeight) {
		galleryHeight = clamp(
			Math.ceil(minGalleryHeight),
			GALLERY_HEIGHT_MIN,
			GALLERY_HEIGHT_MAX,
		);
	}

	return {
		...base,
		arcSpread,
		galleryHeight,
	};
}

/**
 * Arc coordinates for a virtual slot index (supports negative / overflow slots).
 */
export function calculateArcPositionForSlotNumeric(
	slot: number,
	count: number,
	input: ArcMathInput,
): ArcPositionNumeric {
	const resolved = resolveArcLayout({ ...input, count });

	if (count <= 0) {
		return { x: 0, y: 0, rotation: 0 };
	}

	if (count === 1) {
		return {
			x: 0,
			y: Math.round((resolved.galleryHeight - resolved.imageHeight) / 2),
			rotation: 0,
		};
	}

	const spreadRad = (resolved.arcSpread * Math.PI) / 180;
	const halfSpread = spreadRad / 2;
	const t = (slot / (count - 1)) * 2 - 1;
	const angle = t * halfSpread;
	const x = resolved.arcRadius * Math.sin(angle);
	const y = resolved.arcRadius * (1 - Math.cos(angle));
	const rotationDeg = (angle * 180) / Math.PI;

	return {
		x,
		y,
		rotation: Math.round(rotationDeg * 10) / 10,
	};
}

export function interpolateArcPositionNumeric(
	a: ArcPositionNumeric,
	b: ArcPositionNumeric,
	t: number,
): ArcPositionNumeric {
	return {
		x: a.x + (b.x - a.x) * t,
		y: a.y + (b.y - a.y) * t,
		rotation: a.rotation + (b.rotation - a.rotation) * t,
	};
}

export function arcPositionNumericAtFractionalSlot(
	slot: number,
	count: number,
	input: ArcMathInput,
): ArcPositionNumeric {
	const floorSlot = Math.floor(slot);
	const ceilSlot = Math.ceil(slot);
	if (floorSlot === ceilSlot) {
		return calculateArcPositionForSlotNumeric(floorSlot, count, input);
	}
	const t = slot - floorSlot;
	return interpolateArcPositionNumeric(
		calculateArcPositionForSlotNumeric(floorSlot, count, input),
		calculateArcPositionForSlotNumeric(ceilSlot, count, input),
		t,
	);
}

export function arcPositionNumericToCss(
	pos: ArcPositionNumeric,
	imageWidth: number,
): ArcPosition {
	return {
		left: `calc(50% + ${Math.round(pos.x - imageWidth / 2)}px)`,
		top: `${Math.round(pos.y)}px`,
		rotation: Math.round(pos.rotation * 10) / 10,
	};
}

export function calculateArcPositions(input: ArcMathInput): ArcPosition[] {
	const { count, imageWidth } = resolveArcLayout(input);

	if (count <= 0) {
		return [];
	}

	const positions: ArcPosition[] = [];

	for (let i = 0; i < count; i++) {
		positions.push(
			arcPositionNumericToCss(
				calculateArcPositionForSlotNumeric(i, count, input),
				imageWidth,
			),
		);
	}

	return positions;
}

export function normalizeArcMathInput(
	partial: Partial<ArcMathInput> & { count: number },
): ArcMathInput {
	return {
		count: Math.max(0, partial.count),
		arcRadius: clamp(partial.arcRadius ?? 1500, RADIUS_MIN, RADIUS_MAX),
		arcSpread: clamp(partial.arcSpread ?? 48, SPREAD_MIN, SPREAD_MAX),
		galleryHeight: clamp(partial.galleryHeight ?? 380, GALLERY_HEIGHT_MIN, GALLERY_HEIGHT_MAX),
		imageWidth: clamp(partial.imageWidth ?? 311, 120, 400),
		imageHeight: clamp(partial.imageHeight ?? 416, 150, 500),
		arcDirection: 'down',
	};
}
