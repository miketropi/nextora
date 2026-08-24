import { __, sprintf } from '@wordpress/i18n';
import { useEffect, useMemo, useRef, useState } from '@wordpress/element';
import type { CSSProperties } from 'react';
import {
	BlockControls,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	PanelColorSettings,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	Button,
	Disabled,
	PanelBody,
	PanelRow,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
	ToolbarButton,
	ToolbarGroup,
} from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import { IconPicker } from '../advanced-icon/icon-picker';
import {
	colorValueForPicker,
	getMergedPaletteEntries,
	normalizeColorForStorage,
	useThemeColorPalette,
} from '../advanced-icon/color-utils';
import type {
	ScrollingPromotionAttributes,
	ScrollingPromotionItem,
	ScrollingPromotionItemType,
} from './types';
import { SCROLLING_PROMOTION_ITEM_MEDIA_TYPES } from './types';
import { initScrollingPromotionMarquee } from './marquee-loop';

interface EditProps {
	attributes: ScrollingPromotionAttributes;
	setAttributes: (attrs: Partial<ScrollingPromotionAttributes>) => void;
}

interface WPMediaSelection {
	id?: number;
	url?: string;
	alt?: string;
}

const directionOptions = [
	{ label: __('Left', 'nextora'), value: 'left' },
	{ label: __('Right', 'nextora'), value: 'right' },
];

const separatorOptions = [
	{ label: __('Icon (Circle Badge)', 'nextora'), value: 'icon' },
	{ label: __('Dot', 'nextora'), value: 'dot' },
	{ label: __('Dash', 'nextora'), value: 'dash' },
	{ label: __('Pipe', 'nextora'), value: 'pipe' },
	{ label: __('Star', 'nextora'), value: 'star' },
	{ label: __('Custom character', 'nextora'), value: 'custom' },
	{ label: __('None', 'nextora'), value: 'none' },
];

const fontSizeOptions = [
	{ label: __('Theme default (Base)', 'nextora'), value: '' },
	{ label: __('Small', 'nextora'), value: 'small' },
	{ label: __('Base', 'nextora'), value: 'base' },
	{ label: __('Medium', 'nextora'), value: 'medium' },
	{ label: __('Medium Plus', 'nextora'), value: 'medium-plus' },
	{ label: __('Large', 'nextora'), value: 'large' },
	{ label: __('Extra Large', 'nextora'), value: 'x-large' },
	{ label: __('2XL', 'nextora'), value: 'xx-large' },
	{ label: __('Custom (px)', 'nextora'), value: 'custom' },
];

const itemTypeOptions = [
	{ label: __('Text', 'nextora'), value: 'text' },
	{ label: __('Image', 'nextora'), value: 'image' },
	{ label: __('Text + image', 'nextora'), value: 'text-image' },
	{ label: __('Icon + text', 'nextora'), value: 'icon-text' },
];

const fontWeightOptions = [
	{ label: '400', value: '400' },
	{ label: '500', value: '500' },
	{ label: '600', value: '600' },
	{ label: '700', value: '700' },
	{ label: '800', value: '800' },
	{ label: '900', value: '900' },
];

const textTransformOptions = [
	{ label: __('None', 'nextora'), value: 'none' },
	{ label: __('Uppercase', 'nextora'), value: 'uppercase' },
	{ label: __('Lowercase', 'nextora'), value: 'lowercase' },
	{ label: __('Capitalize', 'nextora'), value: 'capitalize' },
];

const EMPTY_ITEM: ScrollingPromotionItem = {
	itemType: 'text',
	text: '',
	imageId: 0,
	imageUrl: '',
	imageAlt: '',
	iconName: '',
	iconSize: 24,
};

function normalizeItemType(raw: unknown): ScrollingPromotionItemType {
	if (raw === 'image' || raw === 'text-image' || raw === 'icon-text') {
		return raw;
	}
	return 'text';
}

function normalizeItems(items: ScrollingPromotionItem[] | undefined): ScrollingPromotionItem[] {
	if (!Array.isArray(items) || items.length === 0) {
		return [{ ...EMPTY_ITEM, text: __('Your promotion here', 'nextora') }];
	}
	return items.map((item) => ({
		itemType: normalizeItemType(item?.itemType),
		text: typeof item?.text === 'string' ? item.text : '',
		imageId: typeof item?.imageId === 'number' ? item.imageId : 0,
		imageUrl: typeof item?.imageUrl === 'string' ? item.imageUrl : '',
		imageAlt: typeof item?.imageAlt === 'string' ? item.imageAlt : '',
		iconName: typeof item?.iconName === 'string' ? item.iconName : '',
		iconSize: typeof item?.iconSize === 'number' ? item.iconSize : 24,
	}));
}

export default function ScrollingPromotionEdit({
	attributes,
	setAttributes,
}: EditProps) {
	const [previewAnimating, setPreviewAnimating] = useState(false);
	const [iconPickerIndex, setIconPickerIndex] = useState<number | null>(null);
	const [separatorIconPickerOpen, setSeparatorIconPickerOpen] = useState(false);
	const editorRootRef = useRef<HTMLDivElement>(null);
	const items = normalizeItems(attributes.items);
	const imageHeight = attributes.imageHeight ?? 32;

	const colorPalette = useThemeColorPalette();
	const lookupPalette = useMemo(() => getMergedPaletteEntries(colorPalette), [colorPalette]);

	const {
		direction = 'left',
		speed = 30,
		pauseOnHover = true,
		separatorType = 'icon',
		customSeparator = '✦',
		separatorSize = 6,
		separatorIcon = 'arrow-up-right',
		separatorIconSize = 16,
		separatorBadgeSize = 36,
		separatorIconStrokeWidth = 2,
		separatorColor = '',
		separatorBgColor: rawSepBgColor = '',
		separatorBackgroundColor = '',
		fontSize: rawFontSize = 'base',
		customFontSize = 16,
		fontWeight = '500',
		textTransform = 'none',
		letterSpacing = 0,
		marqueeTextColor: rawTextColor = '',
		marqueeBackgroundColor: rawBgColor = '',
		marqueeBorderColor: rawBorderColor = '',
		textColor = '',
		backgroundColor = '',
		borderColor = '',
		paddingVertical = 16,
		itemGap = 40,
		showBorders = false,
		borderWidth = 1,
		ariaLabel = '',
	} = attributes;

	const effectiveTextColor = rawTextColor || textColor || '';
	const effectiveBgColor = rawBgColor || backgroundColor || '';
	const effectiveBorderColor = rawBorderColor || borderColor || '';
	const effectiveSepBgColor = rawSepBgColor || separatorBackgroundColor || '';

	const isCustomFontSize =
		rawFontSize === 'custom' ||
		(typeof rawFontSize === 'number' &&
			!['small', 'base', 'medium', 'medium-plus', 'large', 'x-large', 'xx-large'].includes(
				String(rawFontSize),
			));

	useEffect(() => {
		if (!previewAnimating) {
			return;
		}

		const root = editorRootRef.current?.querySelector<HTMLElement>(
			'.nextora-scrolling-promotion',
		);
		if (!root) {
			return;
		}

		delete root.dataset.nextoraMarqueeReady;
		root.classList.remove('nextora-scrolling-promotion--ready');
		void initScrollingPromotionMarquee(root);
	}, [previewAnimating, attributes]);

	const blockProps = useBlockProps({
		ref: editorRootRef,
		className: [
			'nextora-scrolling-promotion--editor',
			previewAnimating ? 'is-preview-animating' : '',
		]
			.filter(Boolean)
			.join(' '),
		style: {
			'--nextora-marquee-image-height': `${imageHeight}px`,
		} as CSSProperties,
	});

	const patchItem = (index: number, patch: Partial<ScrollingPromotionItem>): void => {
		const next = items.map((item, i) => (i === index ? { ...item, ...patch } : item));
		setAttributes({ items: next });
	};

	const addItem = (): void => {
		setAttributes({ items: [...items, { ...EMPTY_ITEM }] });
	};

	const removeItem = (index: number): void => {
		if (items.length <= 1) {
			return;
		}
		setAttributes({ items: items.filter((_, i) => i !== index) });
	};

	const moveItem = (index: number, delta: number): void => {
		const target = index + delta;
		if (target < 0 || target >= items.length) {
			return;
		}
		const next = [...items];
		const tmp = next[index];
		next[index] = next[target];
		next[target] = tmp;
		setAttributes({ items: next });
	};

	const onSelectItemImage = (index: number, media: WPMediaSelection): void => {
		patchItem(index, {
			imageId: media.id ?? 0,
			imageUrl: media.url ?? '',
			imageAlt: media.alt ?? '',
		});
	};

	const showTextField = (type: ScrollingPromotionItemType): boolean =>
		type === 'text' || type === 'text-image' || type === 'icon-text';

	const showImageField = (type: ScrollingPromotionItemType): boolean =>
		type === 'image' || type === 'text-image';

	const showIconField = (type: ScrollingPromotionItemType): boolean =>
		type === 'icon-text';

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={previewAnimating ? 'controls-pause' : 'controls-play'}
						label={
							previewAnimating
								? __('Stop animation preview', 'nextora')
								: __('Preview animation', 'nextora')
						}
						onClick={() => setPreviewAnimating((v) => !v)}
					/>
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={__('Promotion items', 'nextora')} initialOpen>
					<div className="nextora-scrolling-promotion__inspector-items">
						{items.map((item, index) => (
							<div
								key={`item-${index}`}
								className="nextora-scrolling-promotion__inspector-item"
							>
								<SelectControl
									label={__('Item', 'nextora') + ` ${index + 1} — ` + __('Type', 'nextora')}
									value={item.itemType}
									options={itemTypeOptions}
									onChange={(itemType) =>
										patchItem(index, {
											itemType: normalizeItemType(itemType),
										})
									}
								/>
								{showTextField(item.itemType) && (
									<TextControl
										label={__('Text', 'nextora')}
										value={item.text}
										onChange={(text) => patchItem(index, { text: text ?? '' })}
									/>
								)}
								{showIconField(item.itemType) && (
									<div className="nextora-scrolling-promotion__inspector-icon">
										<Button
											variant="secondary"
											onClick={() => setIconPickerIndex(index)}
										>
											{item.iconName
												? __('Change icon', 'nextora')
												: __('Choose icon', 'nextora')}
										</Button>
										{item.iconName ? (
											<Button
												variant="link"
												isDestructive
												onClick={() =>
													patchItem(index, { iconName: '', iconSize: 24 })
												}
											>
												{__('Remove icon', 'nextora')}
											</Button>
										) : null}
										{iconPickerIndex !== null && iconPickerIndex === index ? (
											<IconPicker
												currentIcon={item.iconName}
												onSelect={(iconName) => {
													patchItem(index, { iconName });
													setIconPickerIndex(null);
												}}
												onClose={() => setIconPickerIndex(null)}
											/>
										) : null}
									</div>
								)}
								{showImageField(item.itemType) && (
									<MediaUploadCheck>
										<MediaUpload
											onSelect={(media) => onSelectItemImage(index, media)}
											allowedTypes={[...SCROLLING_PROMOTION_ITEM_MEDIA_TYPES]}
											value={item.imageId > 0 ? item.imageId : undefined}
											render={({ open }) => (
												<div className="nextora-scrolling-promotion__inspector-media">
													{item.imageUrl ? (
														<img
															src={item.imageUrl}
															alt=""
															className="nextora-scrolling-promotion__inspector-media-preview"
														/>
													) : null}
													<Button variant="secondary" onClick={open}>
														{item.imageUrl
															? __('Replace image', 'nextora')
															: __('Choose image', 'nextora')}
													</Button>
													{item.imageUrl ? (
														<Button
															variant="link"
															isDestructive
															onClick={() =>
																patchItem(index, {
																	imageId: 0,
																	imageUrl: '',
																	imageAlt: '',
																})
															}
														>
															{__('Remove image', 'nextora')}
														</Button>
													) : null}
													<p className="components-base-control__help">
														{__(
															'JPEG, PNG, GIF, WebP, AVIF, or SVG (when allowed in Media).',
															'nextora',
														)}
													</p>
												</div>
											)}
										/>
									</MediaUploadCheck>
								)}
								{showImageField(item.itemType) && item.imageUrl ? (
									<TextControl
										label={__('Image alt text', 'nextora')}
										value={item.imageAlt}
										onChange={(imageAlt) =>
											patchItem(index, { imageAlt: imageAlt ?? '' })
										}
									/>
								) : null}
								<div className="nextora-scrolling-promotion__inspector-item-actions">
									<Button
										variant="secondary"
										size="small"
										disabled={index === 0}
										onClick={() => moveItem(index, -1)}
									>
										{__('Up', 'nextora')}
									</Button>
									<Button
										variant="secondary"
										size="small"
										disabled={index >= items.length - 1}
										onClick={() => moveItem(index, 1)}
									>
										{__('Down', 'nextora')}
									</Button>
									<Button
										variant="secondary"
										size="small"
										isDestructive
										disabled={items.length <= 1}
										onClick={() => removeItem(index)}
									>
										{__('Remove', 'nextora')}
									</Button>
								</div>
							</div>
						))}
					</div>
					<PanelRow>
						<Button variant="primary" onClick={addItem}>
							{__('Add item', 'nextora')}
						</Button>
					</PanelRow>
				</PanelBody>

				<PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
					<SelectControl
						label={__('Direction', 'nextora')}
						value={direction}
						options={directionOptions}
						onChange={(dir) =>
							setAttributes({ direction: dir ?? 'left' })
						}
					/>
					<RangeControl
						label={__('Speed (seconds per cycle)', 'nextora')}
						help={__('Higher values scroll more slowly.', 'nextora')}
						value={speed}
						onChange={(val) => setAttributes({ speed: val ?? 30 })}
						min={5}
						max={120}
					/>
					<ToggleControl
						label={__('Pause on hover', 'nextora')}
						checked={pauseOnHover !== false}
						onChange={(val) => setAttributes({ pauseOnHover: val })}
					/>
				</PanelBody>

				<PanelBody title={__('Separator', 'nextora')} initialOpen={false}>
					<SelectControl
						label={__('Type', 'nextora')}
						value={separatorType}
						options={separatorOptions}
						onChange={(type) =>
							setAttributes({ separatorType: type ?? 'icon' })
						}
					/>
					{separatorType === 'icon' && (
						<div className="nextora-scrolling-promotion__inspector-icon-settings" style={{ marginBottom: '12px' }}>
							<p className="components-base-control__label" style={{ marginBottom: '6px' }}>
								{__('Separator icon', 'nextora')}
							</p>
							<div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
								<Button
									variant="secondary"
									onClick={() => setSeparatorIconPickerOpen(true)}
								>
									{separatorIcon
										? sprintf(__('Icon: %s', 'nextora'), separatorIcon)
										: __('Choose icon', 'nextora')}
								</Button>
								{separatorIcon !== 'arrow-up-right' ? (
									<Button
										variant="link"
										isDestructive
										onClick={() =>
											setAttributes({
												separatorIcon: 'arrow-up-right',
												separatorIconSize: 16,
												separatorBadgeSize: 36,
											})
										}
									>
										{__('Reset icon', 'nextora')}
									</Button>
								) : null}
							</div>
							{separatorIconPickerOpen ? (
								<IconPicker
									currentIcon={separatorIcon}
									onSelect={(iconName) => {
										setAttributes({ separatorIcon: iconName });
										setSeparatorIconPickerOpen(false);
									}}
									onClose={() => setSeparatorIconPickerOpen(false)}
								/>
							) : null}
							<RangeControl
								label={__('Badge circle size (px)', 'nextora')}
								value={separatorBadgeSize}
								onChange={(val) =>
									setAttributes({ separatorBadgeSize: val ?? 36 })
								}
								min={20}
								max={80}
								step={2}
							/>
							<RangeControl
								label={__('Icon size (px)', 'nextora')}
								value={separatorIconSize}
								onChange={(val) =>
									setAttributes({ separatorIconSize: val ?? 16 })
								}
								min={10}
								max={48}
								step={1}
							/>
							<RangeControl
								label={__('Icon stroke width', 'nextora')}
								value={separatorIconStrokeWidth}
								onChange={(val) =>
									setAttributes({ separatorIconStrokeWidth: val ?? 2 })
								}
								min={0.5}
								max={4}
								step={0.5}
							/>
						</div>
					)}
					{separatorType === 'custom' && (
						<TextControl
							label={__('Custom character', 'nextora')}
							value={customSeparator}
							onChange={(custom) =>
								setAttributes({ customSeparator: custom ?? '✦' })
							}
						/>
					)}
					{separatorType !== 'none' && separatorType !== 'icon' && (
						<RangeControl
							label={__('Size (px)', 'nextora')}
							value={separatorSize}
							onChange={(size) =>
								setAttributes({ separatorSize: size ?? 6 })
							}
							min={4}
							max={16}
						/>
					)}
				</PanelBody>

				<PanelBody title={__('Typography', 'nextora')} initialOpen={false}>
					<SelectControl
						label={__('Font size', 'nextora')}
						value={
							isCustomFontSize
								? 'custom'
								: typeof rawFontSize === 'string' && rawFontSize
								? rawFontSize
								: ''
						}
						options={fontSizeOptions}
						onChange={(val) => {
							if (val === 'custom') {
								setAttributes({
									fontSize: 'custom',
									customFontSize:
										typeof rawFontSize === 'number'
											? rawFontSize
											: customFontSize ?? 16,
								});
							} else {
								setAttributes({ fontSize: val || 'base' });
							}
						}}
					/>
					{isCustomFontSize && (
						<RangeControl
							label={__('Custom font size (px)', 'nextora')}
							value={
								typeof rawFontSize === 'number'
									? rawFontSize
									: customFontSize ?? 16
							}
							onChange={(val) =>
								setAttributes({ customFontSize: val ?? 16, fontSize: 'custom' })
							}
							min={12}
							max={120}
						/>
					)}
					<SelectControl
						label={__('Font weight', 'nextora')}
						value={fontWeight}
						options={fontWeightOptions}
						onChange={(weight) =>
							setAttributes({ fontWeight: weight ?? '500' })
						}
					/>
					<SelectControl
						label={__('Text transform', 'nextora')}
						value={textTransform}
						options={textTransformOptions}
						onChange={(transform) =>
							setAttributes({ textTransform: transform ?? 'none' })
						}
					/>
					<RangeControl
						label={__('Letter spacing (px)', 'nextora')}
						value={letterSpacing}
						onChange={(spacing) =>
							setAttributes({ letterSpacing: spacing ?? 0 })
						}
						min={0}
						max={10}
						step={0.5}
					/>
				</PanelBody>

				<PanelColorSettings
					enableAlpha
					title={__('Colors', 'nextora')}
					colorSettings={[
						{
							value: colorValueForPicker(effectiveTextColor, colorPalette, lookupPalette),
							onChange: (color) =>
								setAttributes({
									marqueeTextColor: normalizeColorForStorage(color, lookupPalette),
								}),
							label: __('Text', 'nextora'),
						},
						{
							value: colorValueForPicker(effectiveBgColor, colorPalette, lookupPalette),
							onChange: (color) =>
								setAttributes({
									marqueeBackgroundColor: normalizeColorForStorage(color, lookupPalette),
								}),
							label: __('Background', 'nextora'),
						},
						...(separatorType !== 'none'
							? [
									{
										value: colorValueForPicker(
											separatorColor,
											colorPalette,
											lookupPalette,
										),
										onChange: (color: string | undefined) =>
											setAttributes({
												separatorColor: normalizeColorForStorage(
													color,
													lookupPalette,
												),
											}),
										label:
											separatorType === 'icon'
												? __('Separator icon color', 'nextora')
												: __('Separator color', 'nextora'),
									},
									...(separatorType === 'icon'
										? [
												{
													value: colorValueForPicker(
														effectiveSepBgColor,
														colorPalette,
														lookupPalette,
													),
													onChange: (color: string | undefined) =>
														setAttributes({
															separatorBgColor: normalizeColorForStorage(
																color,
																lookupPalette,
															),
														}),
													label: __('Separator badge background', 'nextora'),
												},
										  ]
										: []),
							  ]
							: []),
					]}
				/>

				<PanelBody title={__('Layout', 'nextora')} initialOpen={false}>
					<RangeControl
						label={__('Vertical padding (px)', 'nextora')}
						value={paddingVertical}
						onChange={(val) =>
							setAttributes({ paddingVertical: val ?? 16 })
						}
						min={0}
						max={60}
					/>
					<RangeControl
						label={__('Item gap (px)', 'nextora')}
						value={itemGap}
						onChange={(val) => setAttributes({ itemGap: val ?? 40 })}
						min={16}
						max={120}
					/>
					<RangeControl
						label={__('Image height (px)', 'nextora')}
						help={__(
							'Height for image and text + image items. Width scales automatically.',
							'nextora',
						)}
						value={imageHeight}
						onChange={(v) => setAttributes({ imageHeight: v ?? 32 })}
						min={16}
						max={120}
					/>
					<ToggleControl
						label={__('Show top and bottom borders', 'nextora')}
						checked={showBorders}
						onChange={(val) => setAttributes({ showBorders: val })}
					/>
					{showBorders && (
						<RangeControl
							label={__('Border width (px)', 'nextora')}
							value={borderWidth}
							onChange={(val) =>
								setAttributes({ borderWidth: val ?? 1 })
							}
							min={1}
							max={3}
						/>
					)}
				</PanelBody>

				{showBorders && (
					<PanelColorSettings
						enableAlpha
						title={__('Border', 'nextora')}
						colorSettings={[
							{
								value: colorValueForPicker(
									effectiveBorderColor,
									colorPalette,
									lookupPalette,
								),
								onChange: (color) =>
									setAttributes({
										marqueeBorderColor: normalizeColorForStorage(
											color,
											lookupPalette,
										),
									}),
								label: __('Border color', 'nextora'),
							},
						]}
					/>
				)}

				<PanelBody title={__('Accessibility', 'nextora')} initialOpen={false}>
					<TextControl
						label={__('Region label', 'nextora')}
						value={ariaLabel}
						onChange={(val) => setAttributes({ ariaLabel: val ?? '' })}
						placeholder={__('Promotional announcements', 'nextora')}
						help={__(
							'Describes this strip for screen readers. Leave empty for the default.',
							'nextora',
						)}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<Disabled>
					<ServerSideRender
						block="nextora/scrolling-promotion"
						attributes={attributes as unknown as Record<string, unknown>}
					/>
				</Disabled>
			</div>
		</>
	);
}
