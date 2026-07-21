import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {
	Button,
	TextControl,
	TextareaControl,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';
import { URLInput, MediaUpload, MediaUploadCheck, PanelColorSettings } from '@wordpress/block-editor';
import { IconPicker } from '../advanced-icon/icon-picker';
import {
	colorValueForPicker,
	getMergedPaletteEntries,
	normalizeColorForStorage,
	useThemeColorPalette,
} from '../advanced-icon/color-utils';
import BoxIconEditorIcon from './editor-icon';
import type { BoxIconIconStyle, BoxIconItem, BoxIconCardTemplate } from './types';

export interface ItemModalFormProps {
	item: BoxIconItem;
	onPatch: (patch: Partial<BoxIconItem>) => void;
	iconStyle: BoxIconIconStyle;
	iconSize: number;
	strokeWidth: number;
	iconCircleSize: number;
	iconCircleRadius: number;
	blockIconColor: string;
	blockIconSurfaceBackgroundColor: string;
	blockIconSurfaceBorderColor: string;
	cardTemplate: BoxIconCardTemplate;
}

export default function ItemModalForm({
	item,
	onPatch,
	iconStyle,
	iconSize,
	strokeWidth,
	iconCircleSize,
	iconCircleRadius,
	blockIconColor,
	blockIconSurfaceBackgroundColor,
	blockIconSurfaceBorderColor,
	cardTemplate,
}: ItemModalFormProps) {
	const [pickerOpen, setPickerOpen] = useState(false);
	const iconSource = item.iconSource === 'upload' ? 'upload' : 'theme';
	const colorPalette = useThemeColorPalette();
	const lookupPalette = getMergedPaletteEntries(colorPalette);

	const setItemColor = (key: 'iconColor' | 'iconSurfaceBackgroundColor', value: string | undefined) => {
		onPatch({ [key]: normalizeColorForStorage(value, lookupPalette) });
	};

	return (
		<div className="nextora-box-icon__item-modal-form">
			<div className="nextora-box-icon__item-modal-form-icon">
				<p className="nextora-box-icon__item-modal-form-heading">{__('Icon', 'nextora')}</p>
				<div className="nextora-box-icon__item-modal-icon-preview">
					<BoxIconEditorIcon
						iconSource={iconSource}
						iconName={item.iconName}
						uploadedIconUrl={item.uploadedIconUrl}
						iconSize={iconSize}
						strokeWidth={strokeWidth}
						iconStyle={iconStyle}
						iconCircleSize={iconCircleSize}
						iconCircleRadius={iconCircleRadius}
						iconColor={item.iconColor || blockIconColor}
						iconSurfaceBackgroundColor={
							item.iconSurfaceBackgroundColor || blockIconSurfaceBackgroundColor
						}
						iconSurfaceBorderColor={blockIconSurfaceBorderColor}
						lookupPalette={lookupPalette}
					/>
				</div>
				<SelectControl
					label={__('Icon source', 'nextora')}
					value={iconSource}
					options={[
						{ label: __('Theme icon (Lucide)', 'nextora'), value: 'theme' },
						{ label: __('Custom upload', 'nextora'), value: 'upload' },
					]}
					onChange={(v) => onPatch({ iconSource: v === 'upload' ? 'upload' : 'theme' })}
				/>
				{iconSource === 'theme' ? (
					<div className="nextora-box-icon__item-modal-icon-picker">
						<Button variant="secondary" onClick={() => setPickerOpen(true)}>
							{__('Choose icon', 'nextora')}
						</Button>
						<p className="nextora-box-icon__item-modal-icon-name">
							<code>{item.iconName || 'star'}</code>
						</p>
						{pickerOpen ? (
							<IconPicker
								currentIcon={item.iconName || 'star'}
								onSelect={(name) => {
									onPatch({ iconName: name });
									setPickerOpen(false);
								}}
								onClose={() => setPickerOpen(false)}
							/>
						) : null}
					</div>
				) : (
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => {
								const m = media as { id?: number; url?: string };
								onPatch({
									uploadedIconId: typeof m.id === 'number' ? m.id : 0,
									uploadedIconUrl: typeof m.url === 'string' ? m.url : '',
								});
							}}
							allowedTypes={['image']}
							value={item.uploadedIconId || undefined}
							render={({ open }) => (
								<div className="nextora-box-icon__item-modal-media">
									{item.uploadedIconUrl ? (
										<img
											src={item.uploadedIconUrl}
											alt=""
											className="nextora-box-icon__item-modal-media-preview"
										/>
									) : (
										<div className="nextora-box-icon__item-modal-media-empty">
											{__('No icon image selected', 'nextora')}
										</div>
									)}
									<Button variant="secondary" onClick={open}>
										{item.uploadedIconUrl
											? __('Replace icon image', 'nextora')
											: __('Upload icon image', 'nextora')}
									</Button>
								</div>
							)}
						/>
					</MediaUploadCheck>
				)}
				{cardTemplate === 'default' || cardTemplate === 'minimal' ? (
					<PanelColorSettings
						title={__('Icon colors', 'nextora')}
						colors={colorPalette}
						colorSettings={[
							{
								value: colorValueForPicker(item.iconColor, colorPalette, lookupPalette),
								onChange: (v: string | undefined) => setItemColor('iconColor', v),
								label: __('Icon color', 'nextora'),
							},
							{
								value: colorValueForPicker(
									item.iconSurfaceBackgroundColor,
									colorPalette,
									lookupPalette,
								),
								onChange: (v: string | undefined) => setItemColor('iconSurfaceBackgroundColor', v),
								label: __('Icon circle background', 'nextora'),
							},
						]}
					/>
				) : null}
				{cardTemplate === 'highlights' ? (
					<PanelColorSettings
						title={__('Accent color', 'nextora')}
						colors={colorPalette}
						colorSettings={[
							{
								value: colorValueForPicker(item.highlightAccentColor, colorPalette, lookupPalette),
								onChange: (v: string | undefined) =>
									onPatch({
										highlightAccentColor: normalizeColorForStorage(v, lookupPalette),
									}),
								label: __('Card accent', 'nextora'),
							},
						]}
					/>
				) : null}
			</div>

			<div className="nextora-box-icon__item-modal-form-fields">
				{cardTemplate === 'highlights' ? (
					<div className="nextora-box-icon__item-modal-form-group">
						<p className="nextora-box-icon__item-modal-form-heading">{__('Number', 'nextora')}</p>
						<TextControl
							label={__('Stat number', 'nextora')}
							value={item.number}
							onChange={(number) => onPatch({ number: number ?? '' })}
							help={__('Large number shown above the label (e.g. 1200+).', 'nextora')}
						/>
					</div>
				) : null}
				<div className="nextora-box-icon__item-modal-form-group">
					<p className="nextora-box-icon__item-modal-form-heading">{__('Content', 'nextora')}</p>
					<TextControl
						label={cardTemplate === 'highlights' ? __('Stat label', 'nextora') : __('Title', 'nextora')}
						value={item.title}
						onChange={(title) => onPatch({ title: title ?? '' })}
					/>
					<TextareaControl
						label={cardTemplate === 'highlights' ? __('Stat subtitle', 'nextora') : __('Description', 'nextora')}
						value={item.description}
						onChange={(description) => onPatch({ description: description ?? '' })}
						help={cardTemplate === 'highlights' ? __('Short supporting text shown below the label.', 'nextora') : __('Short body copy shown on the card.', 'nextora')}
						rows={4}
					/>
				</div>

				<div className="nextora-box-icon__item-modal-form-group">
					{cardTemplate !== 'highlights' ? (
						<>
							<p className="nextora-box-icon__item-modal-form-heading">{__('Link', 'nextora')}</p>
							<ToggleControl
								label={__('Show link', 'nextora')}
								checked={item.showLink}
								onChange={(showLink) => onPatch({ showLink })}
							/>
							{item.showLink ? (
								<>
									{cardTemplate !== 'minimal' ? (
										<TextControl
											label={__('Link label', 'nextora')}
											value={item.linkLabel}
											onChange={(linkLabel) => onPatch({ linkLabel: linkLabel ?? '' })}
										/>
									) : null}
									<p className="components-base-control__label">{__('Link URL', 'nextora')}</p>
									<URLInput
										value={item.linkUrl}
										onChange={(linkUrl) => onPatch({ linkUrl: linkUrl ?? '' })}
									/>
									<ToggleControl
										label={__('Open in new tab', 'nextora')}
										checked={item.linkTarget === '_blank'}
										onChange={(open) => onPatch({ linkTarget: open ? '_blank' : '_self' })}
									/>
								</>
							) : null}
						</>
					) : null}
				</div>
			</div>
		</div>
	);
}
