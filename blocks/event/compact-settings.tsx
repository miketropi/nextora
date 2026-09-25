import { PanelColorSettings } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {
	colorValueForPicker,
	getMergedPaletteEntries,
	normalizeColorForStorage,
	useThemeColorPalette,
} from '../advanced-icon/color-utils';

export interface CompactColorAttributes {
	showDate?: boolean;
	showImage?: boolean;
	showLocation?: boolean;
	showTime?: boolean;
	showDescription?: boolean;
	showRegisterButton?: boolean;
	cardBackgroundColor?: string;
	cardBorderColor?: string;
	dateBackgroundColor?: string;
	dateDayColor?: string;
	dateAccentColor?: string;
	titleColor?: string;
	compactDescriptionColor?: string;
	metaColor?: string;
	metaIconColor?: string;
	registerBackgroundColor?: string;
	registerTextColor?: string;
	registerBorderColor?: string;
	registerHoverBackgroundColor?: string;
	registerHoverTextColor?: string;
	registerHoverBorderColor?: string;
}

export default function CompactColorSettings({
	attributes,
	setAttributes,
}: {
	attributes: CompactColorAttributes;
	setAttributes: (patch: Partial<CompactColorAttributes>) => void;
}) {
	const palette = useThemeColorPalette();
	const lookup = getMergedPaletteEntries(palette);

	const showDate = attributes.showDate !== false;
	const showDescription = attributes.showDescription !== false;
	const showMeta = attributes.showLocation !== false || attributes.showTime !== false;
	const showRegisterButton = attributes.showRegisterButton !== false;

	const makeSetting = (
		key: keyof CompactColorAttributes,
		label: string,
	) => ({
		label,
		value: colorValueForPicker((attributes[key] as string) || '', palette, lookup),
		onChange: (value: string | undefined) =>
			setAttributes({ [key]: normalizeColorForStorage(value, lookup) }),
	});

	const colorSettings = [
		makeSetting('cardBackgroundColor', __('Card background', 'nextora')),
		makeSetting('cardBorderColor', __('Card border', 'nextora')),
		...(showDate
			? [
					makeSetting('dateBackgroundColor', __('Date badge background', 'nextora')),
					makeSetting('dateDayColor', __('Date day number', 'nextora')),
					makeSetting('dateAccentColor', __('Date month and year', 'nextora')),
			  ]
			: []),
		makeSetting('titleColor', __('Event title', 'nextora')),
		...(showDescription
			? [makeSetting('compactDescriptionColor', __('Description', 'nextora'))]
			: []),
		...(showMeta
			? [
					makeSetting('metaColor', __('Location & time text', 'nextora')),
					makeSetting('metaIconColor', __('Location & time icons', 'nextora')),
			  ]
			: []),
		...(showRegisterButton
			? [
					makeSetting(
						'registerBackgroundColor',
						__('Arrow background (default: alternating pastels)', 'nextora'),
					),
					makeSetting('registerTextColor', __('Arrow color', 'nextora')),
					makeSetting('registerBorderColor', __('Arrow border', 'nextora')),
					makeSetting(
						'registerHoverBackgroundColor',
						__('Arrow hover background', 'nextora'),
					),
					makeSetting(
						'registerHoverTextColor',
						__('Arrow hover color', 'nextora'),
					),
					makeSetting(
						'registerHoverBorderColor',
						__('Arrow hover border', 'nextora'),
					),
			  ]
			: []),
	];

	return (
		<PanelColorSettings
			enableAlpha
			title={__('Colors', 'nextora')}
			colorSettings={colorSettings}
		/>
	);
}
