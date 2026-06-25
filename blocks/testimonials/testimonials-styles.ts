/**
 * Theme preset slug → `var(--wp--preset--font-size--{slug})`.
 */
export function presetFontSizeVar(slug: string): string {
	return `var(--wp--preset--font-size--${slug})`;
}

/** Default heading size when attribute is empty. */
export const DEFAULT_HEADING_FONT_SIZE_PRESET = 'x-large';

/** Default quote size when attribute is empty. */
export const DEFAULT_QUOTE_FONT_SIZE_PRESET = 'medium';

/**
 * Preset slug or custom CSS size → font-size value.
 */
export function resolveFontSize(raw: string): string | undefined {
	const value = raw.trim();
	if (!value) {
		return undefined;
	}
	if (/^[a-z0-9-]+$/.test(value)) {
		return presetFontSizeVar(value);
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
	headingFontSize?: string;
	quoteFontSize?: string;
	quoteFontFamily?: string;
}): Record<string, string> {
	const vars: Record<string, string> = {};
	const { headingFontSize, quoteFontSize, quoteFontFamily } = attrs;

	const resolvedHeadingSize = resolveFontSize(headingFontSize ?? '');
	if (resolvedHeadingSize) {
		vars['--nextora-testimonials-heading-size'] = resolvedHeadingSize;
	}

	const resolvedQuoteSize = resolveFontSize(quoteFontSize ?? '');
	if (resolvedQuoteSize) {
		vars['--nextora-testimonials-quote-size'] = resolvedQuoteSize;
	}

	if (quoteFontFamily && quoteFontFamily.trim() !== '') {
		vars['--nextora-testimonials-quote-font-family'] = quoteFontFamily.trim();
	}

	return vars;
}
