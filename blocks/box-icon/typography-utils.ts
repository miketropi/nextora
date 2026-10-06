import type { CSSProperties } from 'react';

/**
 * Theme preset slug or custom stack → CSS font-family value.
 */
export function resolveFontFamily(raw: string | undefined): string | undefined {
	const value = (raw ?? '').trim();
	if (!value) {
		return undefined;
	}
	if (value === 'font-body' || value === 'body') {
		return 'var(--nextora-font-body)';
	}
	if (value === 'font-heading' || value === 'heading') {
		return 'var(--nextora-font-heading)';
	}
	if (/^[a-z0-9-]+$/.test(value)) {
		return `var(--wp--preset--font-family--${value})`;
	}
	return value;
}

export function buildHeadingFontFamilyVar(
	headingFontFamily: string | undefined,
): Record<string, string> {
	const resolved = resolveFontFamily(headingFontFamily);
	if (!resolved) {
		return {};
	}
	return {
		'--nextora-box-icon-heading-font-family': resolved,
	};
}

/**
 * Standard Gutenberg font-family class or custom inline style.
 */
export function getGutenbergFontFamilyProps(raw: string | undefined): {
	className: string;
	style: CSSProperties;
} {
	const val = (raw ?? '').trim();
	if (!val) {
		return { className: '', style: {} };
	}
	if (val === 'font-body' || val === 'body') {
		return {
			className: '',
			style: { fontFamily: 'var(--nextora-font-body)' },
		};
	}
	if (val === 'font-heading' || val === 'heading') {
		return {
			className: '',
			style: { fontFamily: 'var(--nextora-font-heading)' },
		};
	}
	if (/^[a-z0-9_-]+$/i.test(val)) {
		return {
			className: `has-${val.toLowerCase()}-font-family`,
			style: {},
		};
	}
	return {
		className: '',
		style: { fontFamily: val },
	};
}

export const PRESET_FONT_SIZE_SLUGS = new Set([
	'small',
	'base',
	'medium',
	'medium-plus',
	'large',
	'x-large',
	'xx-large',
]);

export function isPresetFontSize(
	val: string | undefined,
	fontSizes: Array<{ slug?: string }> = [],
): boolean {
	if (!val) {
		return false;
	}
	const lower = val.trim().toLowerCase();
	if (/^[\d.]+(?:px|rem|em|vw|vh|%)?$/i.test(lower) || /^clamp\(/i.test(lower)) {
		return false;
	}
	return (
		PRESET_FONT_SIZE_SLUGS.has(lower) ||
		fontSizes.some((item) => item.slug?.toLowerCase() === lower)
	);
}

export function normalizeFontSizeAttribute(
	value: number | string | undefined,
	selectedItem?: { slug?: string },
): string {
	if (value === undefined || value === '') {
		return '';
	}
	if (selectedItem?.slug) {
		return selectedItem.slug;
	}
	const str = String(value).trim();
	if (/^\d+(\.\d+)?$/.test(str)) {
		return `${str}px`;
	}
	return str;
}

/**
 * Standard Gutenberg font-size class or custom inline style.
 */
export function getGutenbergFontSizeProps(raw: string | undefined): {
	className: string;
	style: CSSProperties;
} {
	const val = (raw ?? '').trim();
	if (!val) {
		return { className: '', style: {} };
	}
	const presetMatch =
		val.match(/^var:preset\|font-size\|([a-z0-9_-]+)$/i) ??
		val.match(/^var\(\s*--wp--preset--font-size--([a-z0-9_-]+)\s*\)$/i);
	if (presetMatch) {
		return {
			className: `has-${presetMatch[1].toLowerCase()}-font-size`,
			style: {},
		};
	}
	if (
		!/^(?:[\d.]+(?:px|rem|em|vw|vh|%)|clamp\(.+\))$/i.test(val) &&
		!/^\d+(\.\d+)?$/.test(val) &&
		/^[a-z0-9-]+$/i.test(val)
	) {
		return {
			className: `has-${val.toLowerCase()}-font-size`,
			style: {},
		};
	}
	const size = /^\d+(\.\d+)?$/.test(val) ? `${val}px` : val;
	return {
		className: '',
		style: { fontSize: size },
	};
}

