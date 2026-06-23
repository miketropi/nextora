// @ts-nocheck
import type { CSSProperties } from 'react';
import { useMemo, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
	__experimentalSpacingSizesControl as SpacingSizesControl,
} from '@wordpress/block-editor';
import {
	Button,
	Modal,
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';
import {
	colorValueForPicker,
	getMergedPaletteEntries,
	normalizeColorForStorage,
	useThemeColorPalette,
} from '../advanced-icon/color-utils';
import ItemModalForm from './item-modal-form';
import BoxContentEditorIcon from './editor-icon';
import { buildStyleVars, createItemId, normalizeItems } from './item-utils';
import { normalizeCardPadding } from './spacing-utils';
import {
	BOX_CONTENT_TEMPLATE_OPTIONS,
	formatCardGhostIndex,
	getTemplateDefaultAttributes,
	normalizeCardTemplate,
} from './template-utils';
import { useFontFamilyOptions } from './font-family-utils';
import type { BoxContentAttributes, BoxContentIconStyle } from './types';

interface EditProps {
	attributes: BoxContentAttributes;
	setAttributes: (attrs: Partial<BoxContentAttributes>) => void;
}

const iconStyleOptions = [
	{ label: __('Default', 'nextora'), value: 'default' },
	{ label: __('Stacked', 'nextora'), value: 'stacked' },
	{ label: __('Framed', 'nextora'), value: 'framed' },
];

const layoutModeOptions = [
	{ label: __('Slider', 'nextora'), value: 'slider' },
	{ label: __('Grid', 'nextora'), value: 'grid' },
];

function isEmptyColor(value: string | undefined): boolean {
	return !value || value === 'currentColor';
}

export default function BoxContentEdit({ attributes, setAttributes }: EditProps) {
	const [editingItemId, setEditingItemId] = useState<string | null>(null);
	const items = normalizeItems(attributes.items);
	const editingItem = editingItemId ? items.find((item) => item.id === editingItemId) : undefined;

	const colorPalette = useThemeColorPalette();
	const lookupPalette = useMemo(() => getMergedPaletteEntries(colorPalette), [colorPalette]);
	const fontFamilyOptions = useFontFamilyOptions();

	const {
		cardTemplate: cardTemplateRaw = 'default',
		layoutMode = 'slider',
		gridColumns = 4,
		cardMinHeight = 240,
		cardPadding = {},
		cardBorderWidth = 2,
		cardBorderRadius = 8,
		iconSize = 25,
		strokeWidth = 2,
		iconCircleSize = 54,
		iconCircleRadius = 50,
		iconStyle = 'stacked',
		slidesPerView = 4,
		slidesPerViewTablet = 2,
		slidesPerViewMobile = 1.15,
		spaceBetween = 18,
		speed = 500,
		loop = false,
		autoplay = false,
		autoplayDelay = 4000,
		pauseOnHover = true,
		showPagination = true,
		showArrows = false,
		grabCursor = true,
		freeMode = false,
		cardBorderColor = '',
		cardBackgroundColor = '',
		cardHoverBackgroundColor = '',
		cardTitleColor = '',
		cardDescriptionColor = '',
		descriptionHoverColor = '',
		linkColor = '',
		linkHoverColor = '',
		waysAccentColor1 = '',
		waysAccentColor2 = '',
		waysAccentColor3 = '',
		paginationColor = '',
		paginationActiveColor = '',
		arrowColor = '',
		iconColor = '',
		iconSurfaceBackgroundColor = '',
		iconSurfaceBorderColor = '',
		iconHoverColor = '',
		iconHoverSurfaceBackgroundColor = '',
		headingFontFamily = '',
		enableScrollAnimation = true,
	} = attributes;

	const cardTemplate = normalizeCardTemplate(cardTemplateRaw);
	const templateOptions = BOX_CONTENT_TEMPLATE_OPTIONS.map((option) => ({
		label: __(option.labelKey, 'nextora'),
		value: option.value,
	}));

	const cardPaddingValues = useMemo(
		() => normalizeCardPadding(cardPadding),
		[cardPadding],
	);

	const styleVars = buildStyleVars(
		{
			gapPx: spaceBetween,
			cardMinHeight,
			cardPadding,
			cardBorderWidth,
			cardBorderRadius,
			gridColumns,
			iconCircleSize,
			iconSize,
			eyebrowColor: '',
			headingColor: '',
			descriptionColor: '',
			cardBorderColor: isEmptyColor(cardBorderColor) ? '' : cardBorderColor,
			cardBackgroundColor: isEmptyColor(cardBackgroundColor) ? '' : cardBackgroundColor,
			cardHoverBackgroundColor: isEmptyColor(cardHoverBackgroundColor)
				? ''
				: cardHoverBackgroundColor,
			cardTitleColor: isEmptyColor(cardTitleColor) ? '' : cardTitleColor,
			cardDescriptionColor: isEmptyColor(cardDescriptionColor) ? '' : cardDescriptionColor,
			descriptionHoverColor: isEmptyColor(descriptionHoverColor) ? '' : descriptionHoverColor,
			linkColor: isEmptyColor(linkColor) ? '' : linkColor,
			linkHoverColor: isEmptyColor(linkHoverColor) ? '' : linkHoverColor,
			waysAccentColor1: isEmptyColor(waysAccentColor1) ? '' : waysAccentColor1,
			waysAccentColor2: isEmptyColor(waysAccentColor2) ? '' : waysAccentColor2,
			waysAccentColor3: isEmptyColor(waysAccentColor3) ? '' : waysAccentColor3,
			paginationColor: isEmptyColor(paginationColor) ? '' : paginationColor,
			paginationActiveColor: isEmptyColor(paginationActiveColor) ? '' : paginationActiveColor,
			arrowColor: isEmptyColor(arrowColor) ? '' : arrowColor,
			iconColor: isEmptyColor(iconColor) ? '' : iconColor,
			iconSurfaceBackgroundColor: isEmptyColor(iconSurfaceBackgroundColor)
				? ''
				: iconSurfaceBackgroundColor,
			iconSurfaceBorderColor: isEmptyColor(iconSurfaceBorderColor) ? '' : iconSurfaceBorderColor,
			iconHoverColor: isEmptyColor(iconHoverColor) ? '' : iconHoverColor,
			iconHoverSurfaceBackgroundColor: isEmptyColor(iconHoverSurfaceBackgroundColor)
				? ''
				: iconHoverSurfaceBackgroundColor,
			headingFontFamily,
		},
		lookupPalette,
	);

	const blockProps = useBlockProps({
		className: [
			'nextora-box-content',
			'nextora-box-content--editor',
			layoutMode === 'slider' ? 'nextora-box-content--editor-slider' : '',
			`nextora-box-content--layout-${layoutMode}`,
			`nextora-box-content--template-${cardTemplate}`,
			headingFontFamily.trim() !== '' ? 'nextora-box-content--has-heading-font' : '',
		]
			.filter(Boolean)
			.join(' '),
		style: styleVars as CSSProperties,
	});

	const setThemeColor = (key: keyof BoxContentAttributes, value: string | undefined): void => {
		setAttributes({ [key]: normalizeColorForStorage(value, lookupPalette) } as Partial<BoxContentAttributes>);
	};

	const colorSettings = useMemo(() => {
		const cardColors = [
			{
				value: colorValueForPicker(cardBorderColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('cardBorderColor', v),
				label: __('Card border color', 'nextora'),
			},
			{
				value: colorValueForPicker(cardBackgroundColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('cardBackgroundColor', v),
				label: __('Card background', 'nextora'),
			},
			{
				value: colorValueForPicker(cardTitleColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('cardTitleColor', v),
				label: __('Card title color', 'nextora'),
			},
			{
				value: colorValueForPicker(cardDescriptionColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('cardDescriptionColor', v),
				label: __('Card description color', 'nextora'),
			},
		];

		const navColors = [
			{
				value: colorValueForPicker(paginationColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('paginationColor', v),
				label: __('Pagination color', 'nextora'),
			},
			{
				value: colorValueForPicker(paginationActiveColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('paginationActiveColor', v),
				label: __('Pagination active color', 'nextora'),
			},
			{
				value: colorValueForPicker(arrowColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('arrowColor', v),
				label: __('Arrow color', 'nextora'),
			},
		];

		if (cardTemplate === 'ways') {
			return [
				...cardColors,
				{
					value: colorValueForPicker(linkColor, colorPalette, lookupPalette),
					onChange: (v: string | undefined) => setThemeColor('linkColor', v),
					label: __('Link color', 'nextora'),
				},
				{
					value: colorValueForPicker(waysAccentColor1, colorPalette, lookupPalette),
					onChange: (v: string | undefined) => setThemeColor('waysAccentColor1', v),
					label: __('Accent color (cards 1, 4, 7…)', 'nextora'),
				},
				{
					value: colorValueForPicker(waysAccentColor2, colorPalette, lookupPalette),
					onChange: (v: string | undefined) => setThemeColor('waysAccentColor2', v),
					label: __('Accent color (cards 2, 5, 8…)', 'nextora'),
				},
				{
					value: colorValueForPicker(waysAccentColor3, colorPalette, lookupPalette),
					onChange: (v: string | undefined) => setThemeColor('waysAccentColor3', v),
					label: __('Accent color (cards 3, 6, 9…)', 'nextora'),
				},
				{
					value: colorValueForPicker(iconColor, colorPalette, lookupPalette),
					onChange: (v: string | undefined) => setThemeColor('iconColor', v),
					label: __('Icon color', 'nextora'),
				},
				...navColors,
			];
		}

		if (cardTemplate === 'minimal') {
			return [
				...cardColors,
				{
					value: colorValueForPicker(iconColor, colorPalette, lookupPalette),
					onChange: (v: string | undefined) => setThemeColor('iconColor', v),
					label: __('Icon color', 'nextora'),
				},
				{
					value: colorValueForPicker(iconSurfaceBackgroundColor, colorPalette, lookupPalette),
					onChange: (v: string | undefined) => setThemeColor('iconSurfaceBackgroundColor', v),
					label: __('Icon circle background', 'nextora'),
				},
				...navColors,
			];
		}

		return [
			...cardColors,
			{
				value: colorValueForPicker(cardHoverBackgroundColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('cardHoverBackgroundColor', v),
				label: __('Card hover background', 'nextora'),
			},
			{
				value: colorValueForPicker(descriptionHoverColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('descriptionHoverColor', v),
				label: __('Description hover color', 'nextora'),
			},
			{
				value: colorValueForPicker(linkColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('linkColor', v),
				label: __('Link color', 'nextora'),
			},
			{
				value: colorValueForPicker(linkHoverColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('linkHoverColor', v),
				label: __('Link hover color', 'nextora'),
			},
			{
				value: colorValueForPicker(iconColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('iconColor', v),
				label: __('Icon color', 'nextora'),
			},
			...(iconStyle === 'stacked' || iconStyle === 'framed'
				? [
						{
							value: colorValueForPicker(
								iconSurfaceBackgroundColor,
								colorPalette,
								lookupPalette,
							),
							onChange: (v: string | undefined) =>
								setThemeColor('iconSurfaceBackgroundColor', v),
							label: __('Icon circle background', 'nextora'),
						},
					]
				: []),
			...(iconStyle === 'framed'
				? [
						{
							value: colorValueForPicker(
								iconSurfaceBorderColor,
								colorPalette,
								lookupPalette,
							),
							onChange: (v: string | undefined) =>
								setThemeColor('iconSurfaceBorderColor', v),
							label: __('Icon border color', 'nextora'),
						},
					]
				: []),
			{
				value: colorValueForPicker(iconHoverColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('iconHoverColor', v),
				label: __('Icon hover color', 'nextora'),
			},
			...(iconStyle === 'stacked' || iconStyle === 'framed'
				? [
						{
							value: colorValueForPicker(
								iconHoverSurfaceBackgroundColor,
								colorPalette,
								lookupPalette,
							),
							onChange: (v: string | undefined) =>
								setThemeColor('iconHoverSurfaceBackgroundColor', v),
							label: __('Icon circle hover background', 'nextora'),
						},
					]
				: []),
			...navColors,
		];
		// eslint-disable-next-line react-hooks/exhaustive-deps -- setThemeColor is stable enough for inspector picks
	}, [
		cardTemplate,
		iconStyle,
		cardBorderColor,
		cardBackgroundColor,
		cardTitleColor,
		cardDescriptionColor,
		cardHoverBackgroundColor,
		descriptionHoverColor,
		linkColor,
		linkHoverColor,
		waysAccentColor1,
		waysAccentColor2,
		waysAccentColor3,
		iconColor,
		iconSurfaceBackgroundColor,
		iconSurfaceBorderColor,
		iconHoverColor,
		iconHoverSurfaceBackgroundColor,
		paginationColor,
		paginationActiveColor,
		arrowColor,
		colorPalette,
		lookupPalette,
	]);

	const patchItem = (id: string, patch: Partial<(typeof items)[0]>): void => {
		setAttributes({
			items: items.map((item) => (item.id === id ? { ...item, ...patch } : item)),
		});
	};

	const addItem = (): void => {
		const id = createItemId();
		setAttributes({
			items: [
				...items,
				{
					id,
					title: '',
					description: '',
					showLink: true,
					linkLabel: '',
					linkUrl: '',
					linkTarget: '_self',
					iconName: 'star',
					uploadedIconId: 0,
					uploadedIconUrl: '',
					iconColor: '',
					iconSurfaceBackgroundColor: '',
				},
			],
		});
		setEditingItemId(id);
	};

	const removeItem = (id: string): void => {
		if (items.length <= 1) {
			return;
		}
		setAttributes({ items: items.filter((item) => item.id !== id) });
		if (editingItemId === id) {
			setEditingItemId(null);
		}
	};

	const moveItem = (id: string, delta: number): void => {
		const index = items.findIndex((item) => item.id === id);
		const target = index + delta;
		if (index < 0 || target < 0 || target >= items.length) {
			return;
		}
		const next = [...items];
		const tmp = next[index];
		next[index] = next[target];
		next[target] = tmp;
		setAttributes({ items: next });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Items', 'nextora')} initialOpen>
					<p className="nextora-box-content__inspector-items-help">
						{__(
							'Click Edit on a card in the canvas, or use the buttons below. Full settings open in a dialog.',
							'nextora',
						)}
					</p>
					{items.map((item, index) => (
						<div key={item.id} className="nextora-box-content__inspector-item">
							<div className="nextora-box-content__inspector-item-summary">
								<p className="nextora-box-content__inspector-item-name">
									{item.title || sprintf(__('Item %d', 'nextora'), index + 1)}
								</p>
								{item.description ? (
									<p className="nextora-box-content__inspector-item-desc">{item.description}</p>
								) : null}
							</div>
							<div className="nextora-box-content__inspector-item-actions">
								<Button variant="primary" onClick={() => setEditingItemId(item.id)}>
									{__('Edit', 'nextora')}
								</Button>
								<Button
									variant="secondary"
									disabled={index === 0}
									onClick={() => moveItem(item.id, -1)}
								>
									{__('Up', 'nextora')}
								</Button>
								<Button
									variant="secondary"
									disabled={index >= items.length - 1}
									onClick={() => moveItem(item.id, 1)}
								>
									{__('Down', 'nextora')}
								</Button>
								<Button
									variant="secondary"
									isDestructive
									disabled={items.length <= 1}
									onClick={() => removeItem(item.id)}
								>
									{__('Remove', 'nextora')}
								</Button>
							</div>
						</div>
					))}
					<Button variant="primary" onClick={addItem}>
						{__('Add item', 'nextora')}
					</Button>
				</PanelBody>

				<PanelBody title={__('Layout', 'nextora')} initialOpen>
					<SelectControl
						label={__('Template', 'nextora')}
						value={cardTemplate}
						options={templateOptions}
						onChange={(value) => {
							const next = normalizeCardTemplate(value);
							if (next === cardTemplate) {
								return;
							}
							setAttributes({
								cardTemplate: next,
								...getTemplateDefaultAttributes(next),
							});
						}}
					/>
					<SelectControl
						label={__('Desktop layout', 'nextora')}
						help={
							layoutMode === 'grid'
								? __(
										'Desktop shows a grid; tablet and mobile use a carousel.',
										'nextora',
									)
								: __(
										'All screen sizes use a carousel.',
										'nextora',
									)
						}
						value={layoutMode}
						options={layoutModeOptions}
						onChange={(v) =>
							setAttributes({ layoutMode: v === 'grid' ? 'grid' : 'slider' })
						}
					/>

					{layoutMode === 'grid' ? (
						<RangeControl
							label={__('Grid columns', 'nextora')}
							value={gridColumns}
							onChange={(v) => setAttributes({ gridColumns: v ?? 4 })}
							min={1}
							max={6}
						/>
					) : null}

					<p className="nextora-box-content__inspector-subheading">{__('Cards', 'nextora')}</p>
					<RangeControl
						label={__('Gap between cards (px)', 'nextora')}
						value={spaceBetween}
						onChange={(v) => setAttributes({ spaceBetween: v ?? 18 })}
						min={0}
						max={60}
					/>
					{cardTemplate !== 'minimal' ? (
						<RangeControl
							label={__('Card min height (px)', 'nextora')}
							value={cardMinHeight}
							onChange={(v) => setAttributes({ cardMinHeight: v ?? 240 })}
							min={160}
							max={400}
						/>
					) : null}
					<SpacingSizesControl
						label={__('Card padding', 'nextora')}
						values={cardPaddingValues}
						onChange={(next) =>
							setAttributes({
								cardPadding: next && typeof next === 'object' ? next : {},
							})
						}
						sides={['horizontal', 'vertical']}
						minimumCustomValue={0}
					/>
					<RangeControl
						label={__('Card border width (px)', 'nextora')}
						value={cardBorderWidth}
						onChange={(v) => setAttributes({ cardBorderWidth: v ?? 2 })}
						min={0}
						max={4}
					/>
					<RangeControl
						label={__('Card border radius (px)', 'nextora')}
						value={cardBorderRadius}
						onChange={(v) => setAttributes({ cardBorderRadius: v ?? 8 })}
						min={0}
						max={24}
					/>

					<p className="nextora-box-content__inspector-subheading">
						{layoutMode === 'grid'
							? __('Carousel (tablet & mobile)', 'nextora')
							: __('Carousel', 'nextora')}
					</p>
					{layoutMode === 'slider' ? (
						<RangeControl
							label={__('Slides per view (desktop)', 'nextora')}
							value={slidesPerView}
							onChange={(v) => setAttributes({ slidesPerView: v ?? 4 })}
							min={1}
							max={6}
							step={0.05}
						/>
					) : null}
					<RangeControl
						label={__('Slides per view (tablet)', 'nextora')}
						value={slidesPerViewTablet}
						onChange={(v) => setAttributes({ slidesPerViewTablet: v ?? 2 })}
						min={1}
						max={4}
						step={0.05}
					/>
					<RangeControl
						label={__('Slides per view (mobile)', 'nextora')}
						value={slidesPerViewMobile}
						onChange={(v) => setAttributes({ slidesPerViewMobile: v ?? 1.15 })}
						min={1}
						max={2}
						step={0.05}
					/>
					<RangeControl
						label={__('Transition speed (ms)', 'nextora')}
						value={speed}
						onChange={(v) => setAttributes({ speed: v ?? 500 })}
						min={100}
						max={2000}
						step={100}
					/>
					<ToggleControl
						label={__('Loop', 'nextora')}
						checked={loop}
						onChange={(v) => setAttributes({ loop: v })}
					/>
					<ToggleControl
						label={__('Grab cursor', 'nextora')}
						checked={grabCursor}
						onChange={(v) => setAttributes({ grabCursor: v })}
					/>
					<ToggleControl
						label={__('Free mode', 'nextora')}
						checked={freeMode}
						onChange={(v) => setAttributes({ freeMode: v })}
					/>

					<p className="nextora-box-content__inspector-subheading">{__('Autoplay', 'nextora')}</p>
					<ToggleControl
						label={__('Autoplay', 'nextora')}
						checked={autoplay}
						onChange={(v) => setAttributes({ autoplay: v })}
					/>
					<RangeControl
						label={__('Autoplay delay (ms)', 'nextora')}
						value={autoplayDelay}
						onChange={(v) => setAttributes({ autoplayDelay: v ?? 4000 })}
						min={1000}
						max={10000}
						step={500}
						disabled={!autoplay}
					/>
					<ToggleControl
						label={__('Pause on hover', 'nextora')}
						checked={pauseOnHover}
						onChange={(v) => setAttributes({ pauseOnHover: v })}
						disabled={!autoplay}
					/>

					<p className="nextora-box-content__inspector-subheading">{__('Navigation', 'nextora')}</p>
					<ToggleControl
						label={__('Show pagination', 'nextora')}
						checked={showPagination}
						onChange={(v) => setAttributes({ showPagination: v })}
					/>
					<ToggleControl
						label={__('Show arrows', 'nextora')}
						checked={showArrows}
						onChange={(v) => setAttributes({ showArrows: v })}
					/>
				</PanelBody>

				<PanelBody title={__('Icons', 'nextora')} initialOpen>
					{cardTemplate === 'ways' ? (
						<p className="nextora-box-content__inspector-items-help">
							{__(
								'Ways template uses accent gradients on icon circles. Adjust sizes below.',
								'nextora',
							)}
						</p>
					) : cardTemplate === 'minimal' ? (
						<p className="nextora-box-content__inspector-items-help">
							{__(
								'Minimal template uses compact icon squares beside each badge label.',
								'nextora',
							)}
						</p>
					) : (
						<>
							<SelectControl
								label={__('Theme style', 'nextora')}
								value={iconStyle}
								options={iconStyleOptions}
								onChange={(v) =>
									setAttributes({ iconStyle: v as BoxContentIconStyle })
								}
								help={__(
									'Stacked adds a filled background; Framed adds a border around the icon.',
									'nextora',
								)}
							/>
							{(iconStyle === 'stacked' || iconStyle === 'framed') && (
								<RangeControl
									label={__('Border radius (%)', 'nextora')}
									value={iconCircleRadius}
									onChange={(v) => setAttributes({ iconCircleRadius: v ?? 50 })}
									min={0}
									max={50}
								/>
							)}
						</>
					)}
					<RangeControl
						label={__('Icon size (px)', 'nextora')}
						value={iconSize}
						onChange={(v) => setAttributes({ iconSize: v ?? 25 })}
						min={12}
						max={48}
					/>
					<RangeControl
						label={__('Icon circle size (px)', 'nextora')}
						value={iconCircleSize}
						onChange={(v) => setAttributes({ iconCircleSize: v ?? 54 })}
						min={32}
						max={80}
					/>
					<RangeControl
						label={__('Stroke width', 'nextora')}
						value={strokeWidth}
						onChange={(v) => setAttributes({ strokeWidth: v ?? 2 })}
						min={1}
						max={4}
						step={0.5}
					/>
				</PanelBody>

				<PanelColorSettings
					title={__('Colors', 'nextora')}
					colors={colorPalette}
					colorSettings={colorSettings}
				/>

				<PanelBody title={__('Typography', 'nextora')} initialOpen={false}>
					<SelectControl
						label={__('Heading font', 'nextora')}
						value={headingFontFamily}
						options={fontFamilyOptions}
						onChange={(value) => setAttributes({ headingFontFamily: value ?? '' })}
						help={__(
							'Applies to the section heading and card titles. Default uses the theme heading font from the H tag.',
							'nextora',
						)}
					/>
				</PanelBody>

				<PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Animate on scroll', 'nextora')}
						help={__(
							'Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.',
							'nextora',
						)}
						checked={enableScrollAnimation !== false}
						onChange={(v) => setAttributes({ enableScrollAnimation: v })}
					/>
				</PanelBody>
			</InspectorControls>

			{editingItem ? (
				<Modal
					className="nextora-box-content__item-modal"
					size="large"
					title={
						editingItem.title
							? sprintf(__('Edit item: %s', 'nextora'), editingItem.title)
							: __('Edit box item', 'nextora')
					}
					onRequestClose={() => setEditingItemId(null)}
					shouldCloseOnClickOutside={false}
					headerActions={
						<div className="nextora-box-content__item-modal-header-actions">
							<Button
								size="compact"
								variant="primary"
								onClick={() => setEditingItemId(null)}
							>
								{__('Done', 'nextora')}
							</Button>
						</div>
					}
				>
					<ItemModalForm
						item={editingItem}
						onPatch={(patch) => patchItem(editingItem.id, patch)}
						iconStyle={iconStyle}
						iconSize={iconSize}
						strokeWidth={strokeWidth}
						iconCircleSize={iconCircleSize}
						iconCircleRadius={iconCircleRadius}
						blockIconColor={iconColor}
						blockIconSurfaceBackgroundColor={iconSurfaceBackgroundColor}
						blockIconSurfaceBorderColor={iconSurfaceBorderColor}
						cardTemplate={cardTemplate}
					/>
				</Modal>
			) : null}

			<div {...blockProps}>
				<div
					className="nextora-box-content__cards"
					aria-label={__('Box content items', 'nextora')}
				>
					{items.map((item, index) => (
						<article
							key={item.id}
							className="nextora-box-content__card nextora-box-content__card--editable"
						>
							<button
								type="button"
								className="nextora-box-content__card-edit"
								onClick={() => setEditingItemId(item.id)}
							>
								{__('Edit item', 'nextora')}
							</button>
							{cardTemplate === 'ways' ? (
								<h5 className="nextora-box-content__card-ghost" aria-hidden="true">
									{formatCardGhostIndex(index)}
								</h5>
							) : null}
							<BoxContentEditorIcon
								iconSource={item.iconSource}
								iconName={item.iconName}
								uploadedIconUrl={item.uploadedIconUrl}
								iconSize={iconSize}
								strokeWidth={strokeWidth}
								iconStyle={iconStyle}
								iconCircleSize={iconCircleSize}
								iconCircleRadius={iconCircleRadius}
								iconColor={item.iconColor || iconColor}
								iconSurfaceBackgroundColor={
									item.iconSurfaceBackgroundColor || iconSurfaceBackgroundColor
								}
								iconSurfaceBorderColor={iconSurfaceBorderColor}
								lookupPalette={lookupPalette}
							/>
							{cardTemplate === 'minimal' ? (
								<div className="nextora-box-content__card-body">
									<h3 className="nextora-box-content__title">
										{item.title || __('Title', 'nextora')}
									</h3>
									<p className="nextora-box-content__description">
										{item.description || __('Description…', 'nextora')}
									</p>
								</div>
							) : (
								<>
									<h3 className="nextora-box-content__title">
										{item.title || __('Title', 'nextora')}
									</h3>
									<p className="nextora-box-content__description">
										{item.description || __('Description…', 'nextora')}
									</p>
								</>
							)}
							{item.showLink && item.linkLabel && cardTemplate !== 'minimal' ? (
								<span className="nextora-box-content__link nextora-box-content__link--static">
									{item.linkLabel}
									<span className="nextora-box-content__link-icon" aria-hidden="true">
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
											<path d="M5 12h14M13 6l6 6-6 6" />
										</svg>
									</span>
								</span>
							) : null}
						</article>
					))}
				</div>
			</div>
		</>
	);
}
