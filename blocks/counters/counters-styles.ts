import type { CSSProperties } from 'react';

/**
 * Theme preset slug → `var(--wp--preset--font-size--{slug})`.
 */
export function presetFontSizeVar(slug: string): string {
	return `var(--wp--preset--font-size--${slug})`;
}

/**
 * Theme preset slug → `var(--wp--preset--font-family--{slug})`.
 */
export function presetFontFamilyVar(slug: string): string {
	return `var(--wp--preset--font-family--${slug})`;
}

/**
 * Theme preset slug → `var(--wp--preset--color--{slug})`.
 */
export function presetColorVar(slug: string): string {
	return `var(--wp--preset--color--${slug})`;
}

/**
 * Preset slug, CSS variable, or hex/rgb → CSS color value.
 */
export function resolveColor(raw: string): string | undefined {
	const value = raw.trim();
	if (!value) {
		return undefined;
	}
	if (
		value === 'transparent' ||
		value === 'rgba(0,0,0,0)' ||
		value === '#00000000'
	) {
		return 'transparent';
	}
	const presetMatch = value.match(/^var:preset\|color\|([a-z0-9_-]+)$/i);
	if (presetMatch) {
		const slug = presetMatch[1].toLowerCase();
		return slug === 'transparent' ? 'transparent' : presetColorVar(slug);
	}
	const varMatch = value.match(/^var\(\s*--wp--preset--color--([a-z0-9_-]+)\s*\)$/i);
	if (varMatch) {
		const slug = varMatch[1].toLowerCase();
		return slug === 'transparent' ? 'transparent' : presetColorVar(slug);
	}
	if (value.startsWith('#') || value.startsWith('rgb') || value.startsWith('hsl')) {
		return value;
	}
	const slug = value.toLowerCase();
	return slug === 'transparent' ? 'transparent' : presetColorVar(slug);
}

/**
 * Preset slug or custom font-family stack → CSS font-family value.
 */
export function resolveFontFamily(raw: string): string | undefined {
	const value = raw.trim();
	if (!value) {
		return undefined;
	}
	const presetMatch = value.match(/^var:preset\|font-family\|([a-z0-9_-]+)$/i);
	if (presetMatch) {
		return presetFontFamilyVar(presetMatch[1].toLowerCase());
	}
	const varMatch = value.match(/^var\(\s*--wp--preset--font-family--([a-z0-9_-]+)\s*\)$/i);
	if (varMatch) {
		return presetFontFamilyVar(varMatch[1].toLowerCase());
	}
	if (/^[a-z0-9-]+$/i.test(value)) {
		return presetFontFamilyVar(value.toLowerCase());
	}
	return value;
}

/**
 * Preset slug or custom CSS size → font-size value.
 */
export function resolveFontSize(raw: string): string | undefined {
	const value = raw.trim();
	if (!value) {
		return undefined;
	}
	const presetMatch = value.match(/^var:preset\|font-size\|([a-z0-9_-]+)$/i);
	if (presetMatch) {
		return presetFontSizeVar(presetMatch[1].toLowerCase());
	}
	const varMatch = value.match(/^var\(\s*--wp--preset--font-size--([a-z0-9_-]+)\s*\)$/i);
	if (varMatch) {
		return presetFontSizeVar(varMatch[1].toLowerCase());
	}
	if (/^[a-z0-9-]+$/i.test(value) && !/^\d+$/.test(value)) {
		return presetFontSizeVar(value.toLowerCase());
	}
	if (/^clamp\(.+\)$/i.test(value) || /^[\d.]+(?:rem|px|em|vw|vh|%)$/i.test(value)) {
		return value;
	}
	if (/^[\d.]+$/.test(value)) {
		return `${value}px`;
	}
	return undefined;
}

export function buildTypographyStyleVars(attrs: {
	numberColor?: string;
	labelColor?: string;
	numberFontSize?: string;
	labelFontSize?: string;
	numberFontFamily?: string;
	labelFontFamily?: string;
}): Record<string, string> {
	const vars: Record<string, string> = {};
	const {
		numberColor,
		labelColor,
		numberFontSize,
		labelFontSize,
		numberFontFamily,
		labelFontFamily,
	} = attrs;

	if (numberColor) {
		const resolved = resolveColor(numberColor);
		if (resolved) {
			vars['--nextora-counters-number-color'] = resolved;
		}
	}

	if (labelColor) {
		const resolved = resolveColor(labelColor);
		if (resolved) {
			vars['--nextora-counters-label-color'] = resolved;
		}
	}

	const resolvedNumberSize = resolveFontSize(numberFontSize ?? '');
	if (resolvedNumberSize) {
		vars['--nextora-counters-number-size'] = resolvedNumberSize;
	}

	const resolvedLabelSize = resolveFontSize(labelFontSize ?? '');
	if (resolvedLabelSize) {
		vars['--nextora-counters-label-size'] = resolvedLabelSize;
	}

	const resolvedNumberFamily = resolveFontFamily(numberFontFamily ?? '');
	if (resolvedNumberFamily) {
		vars['--nextora-counters-number-font-family'] = resolvedNumberFamily;
	}

	const resolvedLabelFamily = resolveFontFamily(labelFontFamily ?? '');
	if (resolvedLabelFamily) {
		vars['--nextora-counters-label-font-family'] = resolvedLabelFamily;
	}

	return vars;
}

/**
 * Resolves element typography (color, font size, font family) into Gutenberg classes & styles for editor preview.
 */
export function getElementTypographyProps(attrs: {
	color?: string;
	fontSize?: string;
	fontFamily?: string;
}): {
	className: string;
	style: CSSProperties;
} {
	const { color = '', fontSize = '', fontFamily = '' } = attrs;
	const classes: string[] = [];
	const style: CSSProperties = {};

	// Color
	const trimmedColor = color.trim();
	if (trimmedColor) {
		if (
			trimmedColor === 'transparent' ||
			trimmedColor === 'rgba(0,0,0,0)' ||
			trimmedColor === '#00000000'
		) {
			classes.push('has-text-color', 'has-transparent-color');
			style.color = 'transparent';
		} else {
			let colorSlug = '';
			const presetColorMatch = trimmedColor.match(/^var:preset\|color\|([a-z0-9_-]+)$/i);
			if (presetColorMatch) {
				colorSlug = presetColorMatch[1].toLowerCase();
			} else if (trimmedColor.match(/^var\(\s*--wp--preset--color--([a-z0-9_-]+)\s*\)$/i)) {
				const m = trimmedColor.match(/^var\(\s*--wp--preset--color--([a-z0-9_-]+)\s*\)$/i);
				if (m) colorSlug = m[1].toLowerCase();
			} else if (/^[a-z0-9-]+$/i.test(trimmedColor) && !/^#[0-9a-f]{3,8}$/i.test(trimmedColor)) {
				colorSlug = trimmedColor.toLowerCase();
			}

			if (colorSlug === 'transparent') {
				classes.push('has-text-color', 'has-transparent-color');
				style.color = 'transparent';
			} else if (colorSlug) {
				classes.push('has-text-color', `has-${colorSlug}-color`);
				style.color = `var(--wp--preset--color--${colorSlug})`;
			} else {
				classes.push('has-text-color');
				style.color = trimmedColor;
			}
		}
	}

	// Font Size
	const trimmedSize = fontSize.trim();
	if (trimmedSize) {
		let sizeSlug = '';
		const presetSizeMatch = trimmedSize.match(/^var:preset\|font-size\|([a-z0-9_-]+)$/i);
		if (presetSizeMatch) {
			sizeSlug = presetSizeMatch[1].toLowerCase();
		} else if (trimmedSize.match(/^var\(\s*--wp--preset--font-size--([a-z0-9_-]+)\s*\)$/i)) {
			const m = trimmedSize.match(/^var\(\s*--wp--preset--font-size--([a-z0-9_-]+)\s*\)$/i);
			if (m) sizeSlug = m[1].toLowerCase();
		} else if (/^[a-z0-9-]+$/i.test(trimmedSize) && !/^\d+$/.test(trimmedSize)) {
			sizeSlug = trimmedSize.toLowerCase();
		}

		if (sizeSlug) {
			classes.push(`has-${sizeSlug}-font-size`);
			style.fontSize = `var(--wp--preset--font-size--${sizeSlug})`;
		} else {
			style.fontSize = /^\d+$/.test(trimmedSize) ? `${trimmedSize}px` : trimmedSize;
		}
	}

	// Font Family
	const trimmedFamily = fontFamily.trim();
	if (trimmedFamily) {
		let familySlug = '';
		const presetFamilyMatch = trimmedFamily.match(/^var:preset\|font-family\|([a-z0-9_-]+)$/i);
		if (presetFamilyMatch) {
			familySlug = presetFamilyMatch[1].toLowerCase();
		} else if (trimmedFamily.match(/^var\(\s*--wp--preset--font-family--([a-z0-9_-]+)\s*\)$/i)) {
			const m = trimmedFamily.match(/^var\(\s*--wp--preset--font-family--([a-z0-9_-]+)\s*\)$/i);
			if (m) familySlug = m[1].toLowerCase();
		} else if (/^[a-z0-9-]+$/i.test(trimmedFamily)) {
			familySlug = trimmedFamily.toLowerCase();
		}

		if (familySlug) {
			classes.push(`has-${familySlug}-font-family`);
			style.fontFamily = `var(--wp--preset--font-family--${familySlug})`;
		} else {
			style.fontFamily = trimmedFamily;
		}
	}

	return {
		className: classes.join(' '),
		style,
	};
}
