import type { CSSProperties } from 'react';

/**
 * Theme preset slug or custom stack → CSS font-family value.
 */
export function resolveFontFamily(raw: string | undefined): string | undefined {
	const value = (raw ?? '').trim();
	if (!value) {
		return undefined;
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

