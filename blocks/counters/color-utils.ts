import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useMemo } from '@wordpress/element';

export type PaletteColor = {
	name: string;
	slug: string;
	color: string;
};

const FALLBACK_COLORS: PaletteColor[] = [
	{ name: __('Base', 'nextora'), slug: 'base', color: 'var(--wp--preset--color--base)' },
	{ name: __('Contrast', 'nextora'), slug: 'contrast', color: 'var(--wp--preset--color--contrast)' },
	{ name: __('Primary', 'nextora'), slug: 'primary', color: 'var(--wp--preset--color--primary)' },
	{ name: __('Secondary', 'nextora'), slug: 'secondary', color: 'var(--wp--preset--color--secondary)' },
	{ name: __('Surface', 'nextora'), slug: 'surface', color: 'var(--wp--preset--color--surface)' },
];

function normalizeHex(hex: string): string {
	const value = hex.trim().toLowerCase();
	if (!value.startsWith('#')) {
		return value;
	}
	if (value.length === 4) {
		return `#${value[1]}${value[1]}${value[2]}${value[2]}${value[3]}${value[3]}`;
	}
	return value;
}

function paletteColorMatches(entry: PaletteColor, candidate: string): boolean {
	const normalized = candidate.trim().toLowerCase();
	if (entry.slug === normalized) {
		return true;
	}
	if (entry.color.trim().toLowerCase() === normalized) {
		return true;
	}
	if (/^#[0-9a-f]{3,8}$/i.test(normalized) && /^#[0-9a-f]{3,8}$/i.test(entry.color)) {
		return normalizeHex(entry.color) === normalizeHex(normalized);
	}
	return false;
}

export function normalizeColorForStorage(
	value: string | undefined,
	palette: PaletteColor[],
): string {
	if (!value) {
		return '';
	}

	const trimmed = value.trim();
	if (!trimmed) {
		return '';
	}

	const presetMatch = trimmed.match(/^var:preset\|color\|([a-z0-9_-]+)$/i);
	if (presetMatch) {
		return presetMatch[1].toLowerCase();
	}

	const varMatch = trimmed.match(/^var\(\s*--wp--preset--color--([a-z0-9_-]+)\s*\)$/i);
	if (varMatch) {
		return varMatch[1].toLowerCase();
	}

	if (/^[a-z0-9-]+$/i.test(trimmed)) {
		const slug = trimmed.toLowerCase();
		if (palette.some((entry) => entry.slug === slug)) {
			return slug;
		}
	}

	const paletteMatch = palette.find((entry) => paletteColorMatches(entry, trimmed));
	if (paletteMatch) {
		return paletteMatch.slug;
	}

	return trimmed;
}

export function colorValueForPicker(
	stored: string,
	currentPalette: PaletteColor[],
): string {
	if (!stored) {
		return '';
	}

	const slug = stored.trim().toLowerCase();
	const currentEntry = currentPalette.find((entry) => entry.slug === slug);

	if (currentEntry) {
		if (/^#[0-9a-f]{3,8}$/i.test(currentEntry.color)) {
			return currentEntry.color;
		}
		return slug;
	}

	if (/^#[0-9a-f]{3,8}$/i.test(stored)) {
		return stored;
	}

	if (/^[a-z0-9-]+$/i.test(stored)) {
		return stored;
	}

	return stored;
}

export function useThemeColorPalette(): PaletteColor[] {
	const themeColors = useSelect((select) => {
		try {
			const settings =
				(
					select('core/block-editor') as {
						getSettings?: () => {
							colors?: PaletteColor[];
							color?: { palette?: PaletteColor[] };
						};
					}
				).getSettings?.() ?? {};
			if (Array.isArray(settings.colors) && settings.colors.length) {
				return settings.colors;
			}
			if (Array.isArray(settings.color?.palette) && settings.color.palette.length) {
				return settings.color.palette;
			}
		} catch {
			/* getSettings unavailable in some editor contexts */
		}
		return [];
	}, []);

	return useMemo(() => {
		if (!Array.isArray(themeColors) || !themeColors.length) {
			return FALLBACK_COLORS;
		}

		const mapped = themeColors
			.filter(
				(entry): entry is PaletteColor =>
					!!entry &&
					typeof entry === 'object' &&
					typeof entry.color === 'string' &&
					typeof entry.slug === 'string' &&
					typeof entry.name === 'string',
			)
			.map((entry) => ({
				name: entry.name,
				slug: entry.slug,
				color: entry.color,
			}));

		return mapped.length ? mapped : FALLBACK_COLORS;
	}, [themeColors]);
}
