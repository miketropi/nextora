/**
 * Theme preset slug → `var(--wp--preset--font-size--{slug})`.
 */
export function presetFontSizeVar(slug: string): string {
	return `var(--wp--preset--font-size--${slug})`;
}

/**
 * Preset slug or hex/rgb → CSS color value.
 */
export function resolveColor(raw: string): string | undefined {
	const value = raw.trim();
	if (!value) {
		return undefined;
	}
	if (value.startsWith('#') || value.startsWith('rgb') || value.startsWith('hsl')) {
		return value;
	}
	return `var(--wp--preset--color--${value})`;
}

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
	numberColor?: string;
	labelColor?: string;
	numberFontSize?: string;
	labelFontSize?: string;
}): Record<string, string> {
	const vars: Record<string, string> = {};
	const { numberColor, labelColor, numberFontSize, labelFontSize } = attrs;

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

	return vars;
}
