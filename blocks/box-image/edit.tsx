// @ts-nocheck
import type { CSSProperties } from 'react';
import { useMemo, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	Button,
	ColorPalette,
	Modal,
	PanelBody,
	RangeControl,
	SelectControl,
	TextControl,
	TextareaControl,
	ToggleControl,
} from '@wordpress/components';
import {
	colorValueForPicker,
	getMergedPaletteEntries,
	normalizeColorForStorage,
	useThemeColorPalette,
} from '../advanced-icon/color-utils';
import { buildStyleVars, createItemId, normalizeItems } from './item-utils';
import type { BoxImageAttributes, BoxImageTemplate, BoxImageScrollAnimationStyle } from './types';

interface EditProps {
	attributes: BoxImageAttributes;
	setAttributes: (attrs: Partial<BoxImageAttributes>) => void;
}

const layoutModeOptions = [
	{ label: __('Slider', 'nextora'), value: 'slider' },
	{ label: __('Grid', 'nextora'), value: 'grid' },
];

const templateOptions: { label: string; value: BoxImageTemplate }[] = [
	{ label: __('Default', 'nextora'), value: 'default' },
	{ label: __('Template 1', 'nextora'), value: 'template1' },
	{ label: __('Template 2', 'nextora'), value: 'template2' },
	{ label: __('Template 3', 'nextora'), value: 'template3' },
];

const aspectRatioOptions = [
	{ label: '3:2', value: '3/2' },
	{ label: '16:9', value: '16/9' },
	{ label: '4:3', value: '4/3' },
	{ label: '1:1', value: '1/1' },
	{ label: '2:3', value: '2/3' },
];

const imageFitOptions = [
	{ label: __('Cover', 'nextora'), value: 'cover' },
	{ label: __('Contain', 'nextora'), value: 'contain' },
	{ label: __('Fill', 'nextora'), value: 'fill' },
	{ label: __('None', 'nextora'), value: 'none' },
];

function isEmptyColor(value: string | undefined): boolean {
	return !value || value === 'currentColor';
}

function resolveEditorImage(item: { imageId: number; imageUrl: string }, placeholderUrl: string): string {
	if (item.imageUrl) {
		return item.imageUrl;
	}
	return placeholderUrl;
}

export default function BoxImageEdit({ attributes, setAttributes }: EditProps) {
	const [editingItemId, setEditingItemId] = useState<string | null>(null);
	const [panelStates, setPanelStates] = useState<Record<string, boolean>>({
		items: false,
		layout: false,
		image: false,
		animation: false,
	});

	const togglePanel = (panel: string) => (next?: boolean) => {
		setPanelStates((prev) => ({
			...prev,
			[panel]: typeof next === 'boolean' ? next : !prev[panel],
		}));
	};
	const items = normalizeItems(attributes.items);
	const editingItem = editingItemId ? items.find((item) => item.id === editingItemId) : undefined;

	const colorPalette = useThemeColorPalette();
	const lookupPalette = useMemo(() => getMergedPaletteEntries(colorPalette), [colorPalette]);

	const placeholderUrl = useMemo(() => {
		if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).nextoraBoxImage) {
			const bi = (window as unknown as Record<string, unknown>).nextoraBoxImage as {
				placeholderUrl?: string;
			};
			return bi.placeholderUrl || '';
		}
		return '';
	}, []);

	const {
		layoutMode = 'slider',
		template = 'default',
		gridColumns = 4,
		gridColumnsTablet = 2,
		gridColumnsMobile = 1,
		gridMinWidth = 981,
		disableResponsiveCarousel = false,
		imageAspectRatio = '3/2',
		imageFit = 'cover',
		cardMinHeight = 240,
		cardBorderWidth = 0,
		cardBorderRadius = 8,
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
		paginationColor = '',
		paginationActiveColor = '',
		arrowColor = '',
		badgeBackgroundColor = '',
		badgeTextColor = '',
		bulletIconColor = '',
		enableScrollAnimation = true,
		scrollAnimationStyle = 'default',
		enableCardHover = true,
	} = attributes;

	const styleVars = buildStyleVars(
		{
			gapPx: spaceBetween,
			cardMinHeight,
			cardBorderWidth,
			cardBorderRadius,
			gridColumns,
			imageAspectRatio,
			imageFit,
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
			paginationColor: isEmptyColor(paginationColor) ? '' : paginationColor,
			paginationActiveColor: isEmptyColor(paginationActiveColor) ? '' : paginationActiveColor,
			arrowColor: isEmptyColor(arrowColor) ? '' : arrowColor,
			badgeBackgroundColor: isEmptyColor(badgeBackgroundColor) ? '' : badgeBackgroundColor,
			badgeTextColor: isEmptyColor(badgeTextColor) ? '' : badgeTextColor,
			bulletIconColor: isEmptyColor(bulletIconColor) ? '' : bulletIconColor,
		},
		lookupPalette,
	);

	const blockProps = useBlockProps({
		className: [
			'nextora-box-image',
			'nextora-box-image--editor',
			layoutMode === 'slider' ? 'nextora-box-image--editor-slider' : '',
			`nextora-box-image--layout-${layoutMode}`,
			template !== 'default' ? `nextora-box-image--template-${template}` : '',
			!enableCardHover ? 'nextora-box-image--no-card-hover' : '',
		]
			.filter(Boolean)
			.join(' '),
		style: styleVars as CSSProperties,
	});

	const setThemeColor = (key: keyof BoxImageAttributes, value: string | undefined): void => {
		setAttributes({ [key]: normalizeColorForStorage(value, lookupPalette) } as Partial<BoxImageAttributes>);
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

		const template3Colors = [
			{
				value: colorValueForPicker(badgeBackgroundColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('badgeBackgroundColor', v),
				label: __('Badge background (Template 3)', 'nextora'),
			},
			{
				value: colorValueForPicker(badgeTextColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('badgeTextColor', v),
				label: __('Badge text (Template 3)', 'nextora'),
			},
			{
				value: colorValueForPicker(bulletIconColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('bulletIconColor', v),
				label: __('Bullet icon (Template 3)', 'nextora'),
			},
		];

		return [...cardColors, ...navColors, ...template3Colors];
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		cardBorderColor,
		cardBackgroundColor,
		cardTitleColor,
		cardDescriptionColor,
		linkColor,
		linkHoverColor,
		paginationColor,
		paginationActiveColor,
		arrowColor,
		badgeBackgroundColor,
		badgeTextColor,
		bulletIconColor,
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
					linkLabel: __('Read more', 'nextora'),
					linkUrl: '#',
					linkTarget: '_self',
					imageId: 0,
					imageUrl: '',
					backgroundColor: '',
					titleColor: '',
					descriptionColor: '',
					linkColor: '',
					badge: '',
					linkWrapCard: false,
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
				<PanelBody title={__('Items', 'nextora')} opened={panelStates.items} onToggle={togglePanel('items')}>
					<p className="nextora-box-image__inspector-items-help">
						{__(
							'Click Edit on a card in the canvas, or use the buttons below. Full settings open in a dialog.',
							'nextora',
						)}
					</p>
					{items.map((item, index) => (
						<div key={item.id} className="nextora-box-image__inspector-item">
							<div className="nextora-box-image__inspector-item-summary">
								<p className="nextora-box-image__inspector-item-name">
									{item.title || sprintf(__('Item %d', 'nextora'), index + 1)}
								</p>
								{item.description ? (
									<p className="nextora-box-image__inspector-item-desc">{item.description}</p>
								) : null}
							</div>
							<div className="nextora-box-image__inspector-item-actions">
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

				<PanelBody title={__('Layout', 'nextora')} opened={panelStates.layout} onToggle={togglePanel('layout')}>
					<SelectControl
						label={__('Template', 'nextora')}
						help={
							template === 'template1'
								? __(
										'Template 1-style cards with image, badge, centered content and per-item background color.',
										'nextora',
									)
								: template === 'template2'
								? __(
										'Template 2-style cards with circular avatar, title, description and inline link.',
										'nextora',
									)
								: template === 'template3'
								? __(
										'Template 3-style cards with image, number badge, bullet list and read more link — ideal for service or feature lists.',
										'nextora',
									)
								: __(
										'Default card layout.',
										'nextora',
									)
						}
						value={template}
						options={templateOptions}
						onChange={(v: string) => {
							const tpl = (v === 'template1' ? 'template1' : v === 'template2' ? 'template2' : v === 'template3' ? 'template3' : 'default') as BoxImageTemplate;
							const patch: Partial<BoxImageAttributes> = { template: tpl };
							if (tpl === 'template1') {
								patch.layoutMode = 'grid';
								patch.gridColumns = 3;
								patch.imageAspectRatio = '4/3';
								patch.cardBorderRadius = 28;
								patch.cardBorderWidth = 2;
							} else if (tpl === 'template2') {
								patch.layoutMode = 'grid';
								patch.gridColumns = 4;
								patch.imageAspectRatio = '1/1';
								patch.cardBorderRadius = 24;
								patch.cardBorderWidth = 0;
							} else if (tpl === 'template3') {
								patch.layoutMode = 'grid';
								patch.gridColumns = 4;
								patch.imageAspectRatio = '16/11';
								patch.cardBorderRadius = 20;
								patch.cardBorderWidth = 1;
								patch.cardMinHeight = 0;
							}
							setAttributes(patch);
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
						onChange={(v) => {
							const next = v === 'grid' ? 'grid' : 'slider';
							const patch: Partial<BoxImageAttributes> = { layoutMode: next };
							if (next === 'grid' && gridMinWidth < 768) {
								patch.gridMinWidth = 981;
							}
							setAttributes(patch);
						}}
					/>

					{layoutMode === 'grid' ? (
						<>
							<RangeControl
								label={__('Grid columns', 'nextora')}
								value={gridColumns}
								onChange={(v) => setAttributes({ gridColumns: v ?? 4 })}
								min={1}
								max={6}
							/>
							<RangeControl
								label={__('Grid min width (px)', 'nextora')}
								help={__(
									'Below this viewport width the cards switch from grid to a carousel.',
									'nextora',
								)}
								value={gridMinWidth}
								onChange={(v) => setAttributes({ gridMinWidth: v ?? 981 })}
								min={480}
								max={1200}
							/>
							<ToggleControl
								label={__('Keep grid on mobile', 'nextora')}
								help={__(
									'Keep the grid layout on tablet and mobile instead of switching to a carousel.',
									'nextora',
								)}
								checked={disableResponsiveCarousel}
								onChange={(v) =>
									setAttributes({ disableResponsiveCarousel: v })
								}
							/>
							{disableResponsiveCarousel ? (
								<>
									<p className="nextora-box-image__inspector-subheading">
										{__('Responsive columns', 'nextora')}
									</p>
									<RangeControl
										label={__('Grid columns (tablet)', 'nextora')}
										value={gridColumnsTablet}
										onChange={(v) =>
											setAttributes({ gridColumnsTablet: v ?? 2 })
										}
										min={1}
										max={4}
									/>
									<RangeControl
										label={__('Grid columns (mobile)', 'nextora')}
										value={gridColumnsMobile}
										onChange={(v) =>
											setAttributes({ gridColumnsMobile: v ?? 1 })
										}
										min={1}
										max={2}
									/>
								</>
							) : null}
						</>
					) : null}

					<p className="nextora-box-image__inspector-subheading">{__('Cards', 'nextora')}</p>
					<RangeControl
						label={__('Gap between cards (px)', 'nextora')}
						value={spaceBetween}
						onChange={(v) => setAttributes({ spaceBetween: v ?? 18 })}
						min={0}
						max={60}
					/>
					<RangeControl
						label={__('Card min height (px)', 'nextora')}
						value={cardMinHeight}
						onChange={(v) => setAttributes({ cardMinHeight: v ?? 240 })}
						min={0}
						max={600}
					/>
					<RangeControl
						label={__('Card border width (px)', 'nextora')}
						value={cardBorderWidth}
						onChange={(v) => setAttributes({ cardBorderWidth: v ?? 0 })}
						min={0}
						max={8}
					/>
					<RangeControl
						label={__('Card border radius (px)', 'nextora')}
						value={cardBorderRadius}
						onChange={(v) => setAttributes({ cardBorderRadius: v ?? 8 })}
						min={0}
						max={32}
					/>

					{layoutMode === 'grid' && disableResponsiveCarousel ? null : (
						<>
					<p className="nextora-box-image__inspector-subheading">
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

					<p className="nextora-box-image__inspector-subheading">{__('Autoplay', 'nextora')}</p>
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

					<p className="nextora-box-image__inspector-subheading">{__('Navigation', 'nextora')}</p>
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
						</>
					)}
				</PanelBody>

				<PanelBody title={__('Image', 'nextora')} opened={panelStates.image} onToggle={togglePanel('image')}>
					{template !== 'template2' ? (
						<SelectControl
							label={__('Aspect ratio', 'nextora')}
							value={imageAspectRatio}
							options={aspectRatioOptions}
							onChange={(v) => setAttributes({ imageAspectRatio: v as string })}
						/>
					) : null}
					<SelectControl
						label={__('Image fit', 'nextora')}
						value={imageFit}
						options={imageFitOptions}
						onChange={(v) => setAttributes({ imageFit: v as string })}
					/>
				</PanelBody>

				<PanelColorSettings
					enableAlpha
					title={__('Colors', 'nextora')}
					colors={colorPalette}
					colorSettings={colorSettings}
				/>

				<PanelBody title={__('Animation', 'nextora')} opened={panelStates.animation} onToggle={togglePanel('animation')}>
					<ToggleControl
						label={__('Animate on scroll', 'nextora')}
						help={__(
							'Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.',
							'nextora',
						)}
						checked={enableScrollAnimation !== false}
						onChange={(v) => setAttributes({ enableScrollAnimation: v })}
					/>
					{enableScrollAnimation !== false ? (
						<SelectControl
							label={__('Animation style', 'nextora')}
							value={scrollAnimationStyle}
							options={[
								{ label: __('Default', 'nextora'), value: 'default' },
								{ label: __('Sequential', 'nextora'), value: 'sequential' },
							]}
							onChange={(v) =>
								setAttributes({ scrollAnimationStyle: v as BoxImageScrollAnimationStyle })
							}
							help={__(
								'Default: the whole section fades up together. Sequential: cards appear one by one with a gentle upward motion.',
								'nextora',
							)}
						/>
					) : null}
					<ToggleControl
						label={__('Card hover effects', 'nextora')}
						help={__(
							'Background, title, description and link color changes when hovering on cards.',
							'nextora',
						)}
						checked={enableCardHover !== false}
						onChange={(v) => setAttributes({ enableCardHover: v })}
					/>
				</PanelBody>
			</InspectorControls>

			{editingItem ? (
				<Modal
					className="nextora-box-image__item-modal"
					size="large"
					title={
						editingItem.title
							? sprintf(__('Edit item: %s', 'nextora'), editingItem.title)
							: __('Edit box item', 'nextora')
					}
					onRequestClose={() => setEditingItemId(null)}
					shouldCloseOnClickOutside={false}
					headerActions={
						<div className="nextora-box-image__item-modal-header-actions">
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
					<div className="nextora-box-image__item-modal-form">
						<div className="nextora-box-image__item-modal-form-image">
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media: { id: number; url: string }) =>
										patchItem(editingItem.id, {
											imageId: media.id,
											imageUrl: media.url,
										})
									}
									allowedTypes={['image']}
									value={editingItem.imageId}
									render={({ open }) => (
										<div className="nextora-box-image__item-modal-media">
											<img
												className="nextora-box-image__item-modal-media-preview"
												src={resolveEditorImage(editingItem, placeholderUrl)}
												alt=""
											/>
											<Button variant="secondary" onClick={open}>
												{editingItem.imageUrl
													? __('Replace image', 'nextora')
													: __('Select image', 'nextora')}
											</Button>
											{editingItem.imageUrl && (
												<Button
													variant="tertiary"
													isDestructive
													onClick={() =>
														patchItem(editingItem.id, {
															imageId: 0,
															imageUrl: '',
														})
													}
												>
													{__('Remove image', 'nextora')}
												</Button>
											)}
										</div>
									)}
								/>
							</MediaUploadCheck>
						</div>
						<div className="nextora-box-image__item-modal-form-fields">
							{template === 'template1' || template === 'template3' ? (
							<TextControl
								label={__('Badge', 'nextora')}
								help={template === 'template3' ? __('Number displayed on the image (e.g. "01").', 'nextora') : __('Small label overlay on the image (e.g. "Ages 0–2").', 'nextora')}
								value={editingItem.badge}
								onChange={(badge) => patchItem(editingItem.id, { badge })}
							/>
							) : null}
							<TextControl
								label={__('Title', 'nextora')}
								value={editingItem.title}
								onChange={(title) => patchItem(editingItem.id, { title })}
							/>
							<TextareaControl
								label={__('Description', 'nextora')}
								value={editingItem.description}
								onChange={(description) => patchItem(editingItem.id, { description })}
							/>
							<ToggleControl
								label={__('Show link', 'nextora')}
								checked={editingItem.showLink}
								onChange={() =>
									patchItem(editingItem.id, { showLink: !editingItem.showLink })
								}
							/>
							{editingItem.showLink && (
								<>
									<ToggleControl
										label={__('Entire card clickable', 'nextora')}
										help={__('When enabled, clicking anywhere on the card follows the link and the label field is not needed.', 'nextora')}
										checked={!!editingItem.linkWrapCard}
										onChange={(v) =>
											patchItem(editingItem.id, { linkWrapCard: v })
										}
									/>
									{!editingItem.linkWrapCard ? (
										<TextControl
											label={__('Link label', 'nextora')}
											value={editingItem.linkLabel}
											onChange={(linkLabel) =>
												patchItem(editingItem.id, { linkLabel })
											}
										/>
									) : null}
									<TextControl
										label={__('Link URL', 'nextora')}
										value={editingItem.linkUrl}
										onChange={(linkUrl) =>
											patchItem(editingItem.id, { linkUrl })
										}
									/>
									<ToggleControl
										label={__('Open in new tab', 'nextora')}
										checked={editingItem.linkTarget === '_blank'}
										onChange={(v) =>
											patchItem(editingItem.id, {
												linkTarget: v ? '_blank' : '_self',
											})
										}
									/>
								</>
							)}
						</div>
					</div>
					<div
						style={{
							marginTop: 16,
							paddingTop: 16,
							borderTop: '1px solid color-mix(in srgb, currentColor 10%, transparent)',
						}}
					>
						<Button
							variant="secondary"
							isDestructive
							disabled={items.length <= 1}
							onClick={() => removeItem(editingItem.id)}
						>
							{__('Remove item', 'nextora')}
						</Button>
					</div>
				</Modal>
			) : null}

			<div {...blockProps}>
				<div className="nextora-box-image__inner">
					<div
						className="nextora-box-image__carousel-root"
						aria-label={__('Box content items', 'nextora')}
					>
						<div
							className={`nextora-box-image__cards${layoutMode === 'slider' ? ' nextora-box-image__cards--slider' : ''}`}
						>
							{items.map((item) => {
								const isWrapLink = !!item.linkWrapCard && item.showLink && !!item.linkUrl;
								const CardTag = isWrapLink ? 'a' : 'article';
								const wrapLinkProps = isWrapLink
									? {
											href: item.linkUrl,
											target: item.linkTarget === '_blank' ? '_blank' : undefined,
											rel: item.linkTarget === '_blank' ? 'noopener noreferrer' : undefined,
										}
									: {};

								return (
								<CardTag
									key={item.id}
									className={`nextora-box-image__card${template === 'template1' ? ' nextora-box-image__card--template1' : template === 'template2' ? ' nextora-box-image__card--template2' : template === 'template3' ? ' nextora-box-image__card--template3' : ''} nextora-box-image__card--editable${isWrapLink ? ' nextora-box-image__card-link' : ''}`}
									style={
										(item.backgroundColor || item.titleColor || item.descriptionColor || item.linkColor)
											? ({
												'--nextora-box-image-item-bg': item.backgroundColor || '',
												'--nextora-box-image-item-title-color': item.titleColor || '',
												'--nextora-box-image-item-desc-color': item.descriptionColor || '',
												'--nextora-box-image-item-link-color': item.linkColor || '',
											} as CSSProperties)
											: undefined
									}
									{...wrapLinkProps}
								>
									<button
										type="button"
										className="nextora-box-image__card-edit"
										onClick={() => setEditingItemId(item.id)}
									>
										{__('Edit item', 'nextora')}
									</button>
							{template === 'template1' ? (
										<div className="nextora-box-image__card-inner">
											<div className="nextora-box-image__image-wrap">
												<img
													className="nextora-box-image__card-image"
													src={resolveEditorImage(item, placeholderUrl)}
													alt=""
												/>
												{item.badge ? (
													<span className="nextora-box-image__badge">
														{item.badge}
													</span>
												) : null}
											</div>
											<div className="nextora-box-image__card-body">
												<h3 className="nextora-box-image__title">
													{item.title || __('Title', 'nextora')}
												</h3>
												<p className="nextora-box-image__description">
													{item.description || __('Description…', 'nextora')}
												</p>
												{!item.linkWrapCard && item.showLink && item.linkLabel ? (
													<span className="nextora-box-image__link wp-block-button__link nextora-box-image__link--static">
														{item.linkLabel}
														<span className="nextora-box-image__link-icon" aria-hidden="true">
															<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
																<path d="M5 12h14M13 6l6 6-6 6" />
															</svg>
														</span>
													</span>
												) : null}
											</div>
										</div>
									) : template === 'template2' ? (
										<>
											<div className="nextora-box-image__image-wrap">
												<img
													className="nextora-box-image__card-image"
													src={resolveEditorImage(item, placeholderUrl)}
													alt=""
												/>
											</div>
											<div className="nextora-box-image__card-body">
											<h3 className="nextora-box-image__title">
												{item.title || __('Title', 'nextora')}
											</h3>
											<p className="nextora-box-image__description">
												{item.description || __('Description…', 'nextora')}
											</p>
											{!item.linkWrapCard && item.showLink && item.linkLabel ? (
												<span className="nextora-box-image__link nextora-box-image__link--static">
													{item.linkLabel}
													<span className="nextora-box-image__link-icon" aria-hidden="true">
														<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
															<path d="M5 12h14M13 6l6 6-6 6" />
														</svg>
													</span>
												</span>
											) : null}
											</div>
										</>
									) : template === 'template3' ? (
										<>
											<div className="nextora-box-image__image-wrap">
												<img
													className="nextora-box-image__card-image"
													src={resolveEditorImage(item, placeholderUrl)}
													alt=""
												/>
												{item.badge ? (
													<span className="nextora-box-image__badge">
														{item.badge}
													</span>
												) : null}
											</div>
											<div className="nextora-box-image__card-body">
												<h3 className="nextora-box-image__title">
													{item.title || __('Title', 'nextora')}
												</h3>
												{item.description ? (
													<ul className="nextora-box-image__bullets">
														{item.description.split('\n').filter(Boolean).map((bullet, i) => (
															<li key={i}>
																<svg className="nextora-box-image__bullet-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>
																<span>{bullet.trim()}</span>
															</li>
														))}
													</ul>
												) : (
													<p className="nextora-box-image__description">
														{__('Add bullet points — one per line in the description field.', 'nextora')}
													</p>
												)}
												{!item.linkWrapCard && item.showLink && item.linkLabel ? (
													<span className="nextora-box-image__link nextora-box-image__link--template3 nextora-box-image__link--static">
														{item.linkLabel}
														<span className="nextora-box-image__link-icon" aria-hidden="true">
															<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
																<path d="M5 12h14M13 6l6 6-6 6" />
															</svg>
														</span>
													</span>
												) : null}
											</div>
										</>
									) : (
										<>
											<div className="nextora-box-image__image-wrap">
												<img
													className="nextora-box-image__card-image"
													src={resolveEditorImage(item, placeholderUrl)}
													alt=""
												/>
											</div>
											<div className="nextora-box-image__card-body">
											<h3 className="nextora-box-image__title">
												{item.title || __('Title', 'nextora')}
											</h3>
											<p className="nextora-box-image__description">
												{item.description || __('Description…', 'nextora')}
											</p>
											{!item.linkWrapCard && item.showLink && item.linkLabel ? (
												<span className="nextora-box-image__link nextora-box-image__link--static">
													{item.linkLabel}
													<span className="nextora-box-image__link-icon" aria-hidden="true">
														<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
															<path d="M5 12h14M13 6l6 6-6 6" />
														</svg>
													</span>
												</span>
											) : null}
											</div>
										</>
									)}
								</CardTag>
							);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
