import { PanelColorSettings, useSettings } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { EventAttributes } from './types';
import LabeledFontSizePicker from './labeled-font-size-picker';

type SomoniAttributes = Pick<EventAttributes,
	'showImage' | 'showDate' | 'showTime' | 'showDescription' | 'showRegisterButton' |
	'registerButtonText' | 'cardBackgroundColor' | 'cardBorderColor' | 'titleColor' |
	'compactDescriptionColor' | 'dateBackgroundColor' | 'dateDayColor' | 'dateAccentColor' |
	'registerTextColor' | 'registerBackgroundColor' | 'paginationColor' | 'paginationActiveColor' |
	'titleFontSize' | 'descriptionFontSize'
>;

export function SomoniSettings({ attributes, setAttributes }: {
	attributes: SomoniAttributes;
	setAttributes: (patch: Partial<SomoniAttributes>) => void;
}) {
	const [fontSizes = []] = useSettings('typography.fontSizes') as [Array<{ name: string; slug: string; size: string | number }>];
	const sizes = [
		['titleFontSize', __('Title size', 'nextora')],
		['descriptionFontSize', __('Description size', 'nextora')],
	] as const;
	const visibility: [keyof Pick<SomoniAttributes, 'showImage' | 'showDate' | 'showTime' | 'showDescription' | 'showRegisterButton'>, string][] = [
		['showImage', __('Show image', 'nextora')],
		['showDate', __('Show date badge', 'nextora')],
		['showTime', __('Show time badge', 'nextora')],
		['showDescription', __('Show description', 'nextora')],
		['showRegisterButton', __('Show event link', 'nextora')],
	];
	const colors: [keyof Pick<SomoniAttributes, 'cardBackgroundColor' | 'cardBorderColor' | 'titleColor' | 'compactDescriptionColor' | 'dateBackgroundColor' | 'dateDayColor' | 'dateAccentColor' | 'registerTextColor' | 'registerBackgroundColor' | 'paginationColor' | 'paginationActiveColor'>, string][] = [
		['cardBackgroundColor', __('Card background', 'nextora')],
		['cardBorderColor', __('Card border', 'nextora')],
		['titleColor', __('Title', 'nextora')],
		['compactDescriptionColor', __('Description', 'nextora')],
		['dateBackgroundColor', __('Date background', 'nextora')],
		['dateDayColor', __('Date day', 'nextora')],
		['dateAccentColor', __('Date month', 'nextora')],
		['registerTextColor', __('Link text', 'nextora')],
		['registerBackgroundColor', __('Link icon background', 'nextora')],
		['paginationColor', __('Pagination', 'nextora')],
		['paginationActiveColor', __('Active pagination', 'nextora')],
	];
	return <>
		<PanelBody title={__('Somoni Card Settings', 'nextora')} initialOpen>
			{visibility.map(([key, label]) => <ToggleControl key={key} label={label} checked={attributes[key] !== false} onChange={(value) => setAttributes({ [key]: value })} />)}
			{attributes.showRegisterButton !== false ? <TextControl label={__('Default link text', 'nextora')} value={attributes.registerButtonText} onChange={(value) => setAttributes({ registerButtonText: value })} /> : null}
		</PanelBody>
		<PanelColorSettings enableAlpha title={__('Colors', 'nextora')} colorSettings={colors.map(([key, label]) => ({ label, value: attributes[key] || '', onChange: (value?: string) => setAttributes({ [key]: value || '' }) }))} />
		<PanelBody title={__('Typography', 'nextora')} initialOpen={false}>
			{sizes.map(([key, label]) => <LabeledFontSizePicker key={key} label={label} fontSizes={fontSizes} value={attributes[key] || undefined} valueMode={fontSizes.some((size) => size.slug === attributes[key]) ? 'slug' : 'literal'} onChange={(value, selectedItem) => setAttributes({ [key]: selectedItem?.slug || (value === undefined ? '' : String(value)) })} />)}
		</PanelBody>
	</>;
}
