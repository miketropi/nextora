import { PanelColorSettings, useSettings } from '@wordpress/block-editor';
import { PanelBody, RangeControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import LabeledFontSizePicker from './labeled-font-size-picker';
import { colorValueForPicker, getMergedPaletteEntries, normalizeColorForStorage, useThemeColorPalette } from '../advanced-icon/color-utils';
import type { ChangtseAttributes } from './changtse-list';

export default function ChangtseSettings({ attributes, setAttributes }: {
	attributes: ChangtseAttributes;
	setAttributes: (patch: Partial<ChangtseAttributes>) => void;
}) {
	const palette = useThemeColorPalette();
	const entries = getMergedPaletteEntries(palette);
	const [fontSizes = []] = useSettings('typography.fontSizes') as [Array<{ name: string; slug: string; size: string | number }>];
	const visibility = [
		['showImage', __('Show image', 'nextora')],
		['changtseShowCategory', __('Show categories', 'nextora')],
		['showLocation', __('Show location', 'nextora')],
		['showDate', __('Show date', 'nextora')],
	] as const;
	const colors = [
		['cardBackgroundColor', __('Card background', 'nextora')],
		['titleColor', __('Title', 'nextora')],
		['changtseCategoryColor', __('Categories', 'nextora')],
		['changtseLabelColor', __('Metadata labels', 'nextora')],
		['metaColor', __('Location and date', 'nextora')],
	] as const;
	const sizes = [
		['titleFontSize', __('Title size', 'nextora')],
		['changtseCategoryFontSize', __('Category size', 'nextora')],
		['metaFontSize', __('Meta size', 'nextora')],
	] as const;
	return <>
		<PanelBody title={__('Changtse List Settings', 'nextora')} initialOpen>
			<RangeControl label={__('Item gap (px)', 'nextora')} value={attributes.changtseItemGap ?? 30} min={0} max={100} onChange={(value) => setAttributes({ changtseItemGap: value ?? 30 })} />
			{visibility.map(([key, label]) => <ToggleControl key={key} label={label} checked={attributes[key] !== false} onChange={(value) => setAttributes({ [key]: value })} />)}
		</PanelBody>
		<PanelColorSettings enableAlpha title={__('Colors', 'nextora')} colorSettings={colors.map(([key, label]) => ({ label, value: colorValueForPicker(attributes[key] || '', palette, entries), onChange: (value?: string) => setAttributes({ [key]: normalizeColorForStorage(value, entries) }) }))} />
		<PanelBody title={__('Typography', 'nextora')} initialOpen={false}>
			{sizes.map(([key, label]) => <LabeledFontSizePicker key={key} label={label} fontSizes={fontSizes} value={attributes[key] || undefined} valueMode={fontSizes.some((size) => size.slug === attributes[key]) ? 'slug' : 'literal'} onChange={(value, selectedItem) => setAttributes({ [key]: selectedItem?.slug || (value === undefined ? '' : String(value)) })} />)}
		</PanelBody>
	</>;
}
