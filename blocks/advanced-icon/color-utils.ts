import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useMemo } from '@wordpress/element';
import './types';

export type PaletteColor = {
	name: string;
	slug: string;
	color: string;
};

const FALLBACK_COLORS: PaletteColor[] = [
	{ name: __( 'Base', 'nextora' ), slug: 'base', color: 'var(--wp--preset--color--base)' },
	{ name: __( 'Contrast', 'nextora' ), slug: 'contrast', color: 'var(--wp--preset--color--contrast)' },
	{ name: __( 'Primary', 'nextora' ), slug: 'primary', color: 'var(--wp--preset--color--primary)' },
	{ name: __( 'Secondary', 'nextora' ), slug: 'secondary', color: 'var(--wp--preset--color--secondary)' },
	{ name: __( 'Surface', 'nextora' ), slug: 'surface', color: 'var(--wp--preset--color--surface)' },
];

function normalizeHex( hex: string ): string {
	const value = hex.trim().toLowerCase();
	if ( ! value.startsWith( '#' ) ) {
		return value;
	}
	if ( value.length === 4 ) {
		return `#${ value[1] }${ value[1] }${ value[2] }${ value[2] }${ value[3] }${ value[3] }`;
	}
	if ( value.length === 9 ) {
		return value.slice( 0, 7 );
	}
	return value;
}

function stripHexAlpha( hex: string ): string {
	const trimmed = hex.trim().toLowerCase();
	if ( ! trimmed.startsWith( '#' ) ) {
		return trimmed;
	}
	if ( trimmed.length === 9 ) {
		return trimmed.slice( 0, 7 );
	}
	return trimmed;
}

function paletteColorMatches( entry: PaletteColor, candidate: string ): boolean {
	const normalized = candidate.trim().toLowerCase();
	if ( entry.slug === normalized ) {
		return true;
	}
	if ( entry.color.trim().toLowerCase() === normalized ) {
		return true;
	}
	const entryIsHex  = /^#[0-9a-f]{3,8}$/i.test( entry.color );
	const candIsHex   = /^#[0-9a-f]{3,8}$/i.test( normalized );
	if ( entryIsHex && candIsHex ) {
		return normalizeHex( entry.color ) === normalizeHex( normalized );
	}
	if ( entryIsHex ) {
		return normalizeHex( entry.color ) === stripHexAlpha( normalized );
	}
	if ( candIsHex ) {
		return normalizeHex( normalized ) === stripHexAlpha( entry.color );
	}
	return false;
}

/** Active editor palette + all style-variation entries from PHP. */
export function getMergedPaletteEntries( currentPalette: PaletteColor[] ): PaletteColor[] {
	const fromPhp = window.nextoraIconBlock?.paletteEntries ?? [];
	const seen    = new Set<string>();
	const merged: PaletteColor[] = [];

	const push = ( entry: PaletteColor ): void => {
		if ( ! entry.slug || ! entry.color ) {
			return;
		}

		const key = `${ entry.slug }|${ entry.color.toLowerCase() }`;
		if ( seen.has( key ) ) {
			return;
		}

		seen.add( key );
		merged.push( entry );
	};

	for ( const entry of currentPalette ) {
		push( entry );
	}

	for ( const entry of fromPhp ) {
		push( {
			name: entry.name ?? entry.slug,
			slug: entry.slug,
			color: entry.color,
		} );
	}

	return merged;
}

/**
 * Store theme preset slugs (e.g. "secondary") so CSS vars follow style variations.
 * Custom hex / rgb values are kept as-is.
 */
export function normalizeColorForStorage(
	value: string | undefined,
	palette: PaletteColor[],
): string {
	if ( ! value ) {
		return '';
	}

	const trimmed = value.trim();
	if ( ! trimmed ) {
		return '';
	}

	const presetMatch = trimmed.match( /^var:preset\|color\|([a-z0-9_-]+)$/i );
	if ( presetMatch ) {
		return presetMatch[1].toLowerCase();
	}

	const varMatch = trimmed.match(
		/^var\(\s*--wp--preset--color--([a-z0-9_-]+)\s*\)$/i,
	);
	if ( varMatch ) {
		return varMatch[1].toLowerCase();
	}

	if ( /^[a-z0-9-]+$/i.test( trimmed ) ) {
		const slug = trimmed.toLowerCase();
		if ( palette.some( ( entry ) => entry.slug === slug ) ) {
			return slug;
		}
	}

	const paletteMatch = palette.find( ( entry ) => paletteColorMatches( entry, trimmed ) );
	if ( paletteMatch ) {
		if ( /^#[0-9a-f]{8}$/i.test( trimmed ) && ! trimmed.endsWith( 'ff' ) ) {
			return trimmed;
		}
		return paletteMatch.slug;
	}

	return trimmed;
}

/**
 * Value for ColorPalette / PanelColorSettings — uses the active palette hex when possible.
 */
export function colorValueForPicker(
	stored: string,
	currentPalette: PaletteColor[],
	lookupPalette: PaletteColor[],
): string {
	if ( ! stored ) {
		return '';
	}

	const slug         = normalizeColorForStorage( stored, lookupPalette );
	const currentEntry = currentPalette.find( ( entry ) => entry.slug === slug );

	if ( currentEntry ) {
		if ( /^#[0-9a-f]{3,8}$/i.test( currentEntry.color ) ) {
			return currentEntry.color;
		}

		return slug;
	}

	if ( /^#[0-9a-f]{3,8}$/i.test( stored ) ) {
		return stored;
	}

	if ( /^[a-z0-9-]+$/i.test( stored ) ) {
		return stored;
	}

	return stored;
}

export function useThemeColorPalette(): PaletteColor[] {
	const themeColors = useSelect( ( select ) => {
		try {
			const settings =
				(
					select( 'core/block-editor' ) as {
						getSettings?: () => {
							colors?: PaletteColor[];
							color?: { palette?: PaletteColor[] };
						};
					}
				).getSettings?.() ?? {};
			if ( Array.isArray( settings.colors ) && settings.colors.length ) {
				return settings.colors;
			}
			if (
				Array.isArray( settings.color?.palette ) &&
				settings.color.palette.length
			) {
				return settings.color.palette;
			}
		} catch {
			/* getSettings unavailable in some editor contexts */
		}
		return [];
	}, [] );

	return useMemo( () => {
		if ( ! Array.isArray( themeColors ) || ! themeColors.length ) {
			return FALLBACK_COLORS;
		}

		const mapped = themeColors
			.filter(
				( entry ): entry is PaletteColor =>
					!! entry &&
					typeof entry === 'object' &&
					typeof entry.color === 'string' &&
					typeof entry.slug === 'string' &&
					typeof entry.name === 'string',
			)
			.map( ( entry ) => ( {
				name: entry.name,
				slug: entry.slug,
				color: entry.color,
			} ) );

		return mapped.length ? mapped : FALLBACK_COLORS;
	}, [ themeColors ] );
}

export type GradientPreset = {
	name: string;
	slug: string;
	gradient: string;
};

function normalizeGradientCss( value: string ): string {
	return value.replace( /\s+/g, ' ' ).trim().toLowerCase();
}

/**
 * Store gradient preset slugs; keep custom linear/radial CSS as-is.
 */
export function normalizeGradientForStorage(
	value: string | undefined,
	gradients: GradientPreset[],
): string {
	if ( ! value ) {
		return '';
	}

	const trimmed = value.trim();
	if ( ! trimmed ) {
		return '';
	}

	const normalizedCss = normalizeGradientCss( trimmed );
	for ( const preset of gradients ) {
		if ( normalizeGradientCss( preset.gradient ) === normalizedCss ) {
			return preset.slug;
		}
	}

	if ( /^(linear|radial|conic)-gradient\(/i.test( trimmed ) ) {
		return trimmed;
	}

	return '';
}

export function gradientValueForPicker(
	stored: string,
	gradients: GradientPreset[],
): string | undefined {
	if ( ! stored ) {
		return undefined;
	}

	for ( const preset of gradients ) {
		if ( preset.slug === stored ) {
			return preset.gradient;
		}
	}

	if ( /^(linear|radial|conic)-gradient\(/i.test( stored ) ) {
		return stored;
	}

	return undefined;
}
