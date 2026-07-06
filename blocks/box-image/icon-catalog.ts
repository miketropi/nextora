export function storedColorToCss(value: string, palette: { slug: string; color: string }[]): string {
	if (!value || value === 'currentColor') {
		return '';
	}
	if (value.startsWith('#') || value.startsWith('rgb') || value.startsWith('var(')) {
		return value;
	}
	const entry = palette.find((p) => p.slug === value);
	if (entry?.color) {
		return entry.color;
	}
	return `var(--wp--preset--color--${value})`;
}
