import type { CSSProperties } from 'react';

export function normalizeFontSize(value: string | number | undefined, selectedItem?: { slug?: string }): string {
	if (value === undefined || value === '') return '';
	if (selectedItem?.slug) return selectedItem.slug;
	const size = String(value).trim();
	return /^\d+(?:\.\d+)?$/.test(size) ? `${size}px` : size;
}

/** Presets stay linked to Global Styles; custom sizes use inline styles. */
export function getFontSizeProps(raw: string): { className: string; style: CSSProperties } {
	const size = raw.trim();
	const preset = size.match(/^var:preset\|font-size\|([a-z0-9_-]+)$/i)
		?? size.match(/^var\(\s*--wp--preset--font-size--([a-z0-9_-]+)\s*\)$/i)
		?? size.match(/^([a-z][a-z0-9_-]*)$/i);
	if (preset) return { className: `has-${preset[1].toLowerCase()}-font-size`, style: {} };
	return { className: '', style: size ? { fontSize: normalizeFontSize(size) } : {} };
}
