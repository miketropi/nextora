import type { LucideIconNode } from '../advanced-icon/types';

let cachedIcons: LucideIconEntry[] | null = null;

export interface LucideIconEntry {
	name: string;
	nodes: LucideIconNode[];
}

export async function loadIconCatalog(): Promise<LucideIconEntry[]> {
	if (cachedIcons) {
		return cachedIcons;
	}

	const iconsUrl = window.nextoraIconBlock?.iconsUrl ?? '';
	if (!iconsUrl) {
		return [];
	}

	const response = await fetch(iconsUrl);
	if (!response.ok) {
		return [];
	}

	const data = (await response.json()) as LucideIconEntry[];
	cachedIcons = Array.isArray(data) ? data : [];
	return cachedIcons;
}

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
