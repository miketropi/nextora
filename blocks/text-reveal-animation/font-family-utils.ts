import { __ } from '@wordpress/i18n';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

interface FontFamilyPreset {
	slug?: string;
	name?: string;
}

export interface FontFamilyOption {
	label: string;
	value: string;
}

function flattenFontFamilyPresets(grouped: unknown): FontFamilyPreset[] {
	if (Array.isArray(grouped)) {
		return grouped.filter((item): item is FontFamilyPreset => typeof item === 'object' && item !== null);
	}
	if (!grouped || typeof grouped !== 'object') {
		return [];
	}

	const presets: FontFamilyPreset[] = [];
	for (const group of Object.values(grouped as Record<string, unknown>)) {
		if (Array.isArray(group)) {
			presets.push(
				...group.filter((item): item is FontFamilyPreset => typeof item === 'object' && item !== null),
			);
		}
	}

	return presets;
}

export function useFontFamilyOptions(): FontFamilyOption[] {
	return useSelect((select) => {
		const settings = select(blockEditorStore).getSettings() as {
			typography?: { fontFamilies?: unknown };
			__experimentalFeatures?: { typography?: { fontFamilies?: unknown } };
		};
		const grouped =
			settings?.__experimentalFeatures?.typography?.fontFamilies ??
			settings?.typography?.fontFamilies;
		const options: FontFamilyOption[] = [{ label: __('Default', 'nextora'), value: '' }];
		const seen = new Set<string>();

		for (const family of flattenFontFamilyPresets(grouped)) {
			const slug = typeof family.slug === 'string' ? family.slug : '';
			if (!slug || seen.has(slug)) {
				continue;
			}
			seen.add(slug);
			options.push({
				label: typeof family.name === 'string' && family.name !== '' ? family.name : slug,
				value: slug,
			});
		}

		return options;
	}, []);
}
