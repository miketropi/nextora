import { PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, RangeControl, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { EventAttributes } from './types';

type TabocheAttributes = Pick<
	EventAttributes,
	| 'showDate'
	| 'showTime'
	| 'showOrganizer'
	| 'showLocation'
	| 'showRegisterButton'
	| 'registerButtonText'
	| 'itemGap'
	| 'dateBackgroundColor'
	| 'dateDayColor'
	| 'dateAccentColor'
	| 'cardBackgroundColor'
	| 'cardBorderColor'
	| 'titleColor'
	| 'metaColor'
	| 'metaIconColor'
	| 'registerBackgroundColor'
	| 'registerTextColor'
	| 'registerBorderColor'
	| 'registerHoverBackgroundColor'
	| 'registerHoverTextColor'
	| 'registerHoverBorderColor'
>;

export function TabocheSettings({
	attributes,
	setAttributes,
}: {
	attributes: TabocheAttributes;
	setAttributes: (patch: Partial<TabocheAttributes>) => void;
}) {
	const visibility: [
		keyof Pick<
			TabocheAttributes,
			| 'showDate'
			| 'showTime'
			| 'showOrganizer'
			| 'showLocation'
			| 'showRegisterButton'
		>,
		string,
	][] = [
		['showDate', __('Show date box', 'nextora')],
		['showTime', __('Show event time', 'nextora')],
		['showOrganizer', __('Show organizer', 'nextora')],
		['showLocation', __('Show location', 'nextora')],
		['showRegisterButton', __('Show view event button', 'nextora')],
	];

	const colors: [
		keyof Pick<
			TabocheAttributes,
			| 'dateBackgroundColor'
			| 'dateDayColor'
			| 'dateAccentColor'
			| 'cardBackgroundColor'
			| 'cardBorderColor'
			| 'titleColor'
			| 'metaColor'
			| 'metaIconColor'
			| 'registerBackgroundColor'
			| 'registerTextColor'
			| 'registerBorderColor'
			| 'registerHoverBackgroundColor'
			| 'registerHoverTextColor'
			| 'registerHoverBorderColor'
		>,
		string,
	][] = [
		['dateBackgroundColor', __('Date background', 'nextora')],
		['dateDayColor', __('Date day', 'nextora')],
		['dateAccentColor', __('Date month', 'nextora')],
		['cardBackgroundColor', __('Card background', 'nextora')],
		['cardBorderColor', __('Card border', 'nextora')],
		['titleColor', __('Title color', 'nextora')],
		['metaColor', __('Meta text', 'nextora')],
		['metaIconColor', __('Meta icon', 'nextora')],
		['registerBackgroundColor', __('Button background', 'nextora')],
		['registerTextColor', __('Button text', 'nextora')],
		['registerBorderColor', __('Button border', 'nextora')],
		['registerHoverBackgroundColor', __('Button hover background', 'nextora')],
		['registerHoverTextColor', __('Button hover text', 'nextora')],
		['registerHoverBorderColor', __('Button hover border', 'nextora')],
	];

	return (
		<>
			<PanelBody title={__('Template 6 Settings', 'nextora')} initialOpen>
				{visibility.map(([key, label]) => (
					<ToggleControl
						key={key}
						label={label}
						checked={attributes[key] !== false}
						onChange={(value) => setAttributes({ [key]: value })}
					/>
				))}
				<RangeControl
					label={__('Item gap (px)', 'nextora')}
					value={attributes.itemGap ?? 20}
					onChange={(value) => setAttributes({ itemGap: value ?? 20 })}
					min={8}
					max={48}
				/>
				{attributes.showRegisterButton !== false && (
					<TextControl
						label={__('Button text', 'nextora')}
						value={attributes.registerButtonText || ''}
						placeholder={__('View event', 'nextora')}
						onChange={(value) => setAttributes({ registerButtonText: value })}
					/>
				)}
			</PanelBody>

			<PanelColorSettings
				enableAlpha
				title={__('Colors', 'nextora')}
				colorSettings={colors.map(([key, label]) => ({
					label,
					value: attributes[key] || '',
					onChange: (value?: string) => setAttributes({ [key]: value || '' }),
				}))}
			/>
		</>
	);
}
