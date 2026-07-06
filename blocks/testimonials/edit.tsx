import type { CSSProperties } from 'react';
import { useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
	FontSizePicker,
	InspectorControls,
	PanelColorSettings,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	BaseControl,
	Button,
	Modal,
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import type {
	TestimonialItem,
	TestimonialsAttributes,
} from './types';
import {
	buildAuthorMeta,
	buildSectionStyleVars,
	createTestimonialId,
	normalizeTestimonials,
	resolvePortraitUrl,
} from './testimonial-utils';
import { buildTypographyStyleVars } from './testimonials-styles';
import TestimonialEditForm from './testimonial-edit-form';
import {
	normalizeColorForStorage,
	colorValueForPicker,
	useThemeColorPalette,
} from './color-utils';
import { useFontFamilyOptions } from '../box-icon/font-family-utils';

interface EditProps {
	attributes: TestimonialsAttributes;
	setAttributes: (attrs: Partial<TestimonialsAttributes>) => void;
}

const templateOptions = [
	{ label: __('Default', 'nextora'), value: 'default' },
	{ label: __('Story (Quote style)', 'nextora'), value: 'story' },
];

const effectOptions = [
	{ label: __('Fade', 'nextora'), value: 'fade' },
	{ label: __('Fade up', 'nextora'), value: 'fadeUp' },
	{ label: __('Slide', 'nextora'), value: 'slide' },
];

const imagePositionOptions = [
	{ label: __('Left', 'nextora'), value: 'left' },
	{ label: __('Right', 'nextora'), value: 'right' },
];

function normalizeFontSizeAttribute(
	value: number | string | undefined,
	selectedItem?: { slug?: string },
): string {
	if (value === undefined) {
		return '';
	}
	if (selectedItem?.slug) {
		return selectedItem.slug;
	}
	return String(value);
}

interface TestimonialEditorItemProps {
	item: TestimonialItem;
	index: number;
	total: number;
	portraitUrl?: string;
	imagePosition: 'left' | 'right';
	onEdit: () => void;
	onMoveUp: () => void;
	onMoveDown: () => void;
	onRemove: () => void;
}

function TestimonialEditorItem({
	item,
	index,
	total,
	portraitUrl,
	imagePosition,
	onEdit,
	onMoveUp,
	onMoveDown,
	onRemove,
}: TestimonialEditorItemProps) {
	const authorMeta = buildAuthorMeta(item.authorAge, item.authorLocation);

	return (
		<article className="nextora-testimonials__editor-item">
			<div className="nextora-testimonials__editor-item-controls">
				<button
					type="button"
					className="nextora-testimonials__editor-item-edit"
					onClick={onEdit}
				>
					{__('Edit', 'nextora')}
				</button>
				<button
					type="button"
					className="nextora-testimonials__editor-item-remove"
					onClick={onRemove}
					disabled={total <= 1}
					aria-label={__('Remove testimonial', 'nextora')}
				>
					{__('Remove', 'nextora')}
				</button>
			</div>

			<div
				className={[
					'nextora-testimonials__layout',
					'nextora-testimonials__layout--item-preview',
					`nextora-testimonials--image-${imagePosition}`,
				].join(' ')}
			>
				<div className="nextora-testimonials__media">
					<figure className="nextora-testimonials__figure">
						{portraitUrl ? (
							<img src={portraitUrl} alt="" className="nextora-testimonials__portrait" />
						) : (
							<div className="nextora-testimonials__portrait-placeholder" aria-hidden />
						)}
					</figure>
				</div>

				<div className="nextora-testimonials__content">
					<div className="nextora-testimonials__content-inner">
						<div className="nextora-testimonials__quote">
							<p>
								{item.quoteText ||
									__('Click Edit to add a quote…', 'nextora')}
							</p>
						</div>	
						{(item.authorName || authorMeta) && (
							<footer className="nextora-testimonials__author">
								{item.authorName && (
									<strong className="nextora-testimonials__author-name">
										{item.authorName}
									</strong>
								)}
								{authorMeta && (
									<span className="nextora-testimonials__author-meta">{authorMeta}</span>
								)}
							</footer>
						)}
					</div>
				</div>
			</div>

			<div className="nextora-testimonials__editor-item-toolbar">
				<span className="nextora-testimonials__editor-item-index">
					{sprintf(/* translators: %d: slide number */ __('Item %d', 'nextora'), index + 1)}
				</span>
				<div className="nextora-testimonials__editor-item-actions">
					<Button
						icon="arrow-up-alt2"
						label={__('Move up', 'nextora')}
						onClick={onMoveUp}
						disabled={index === 0}
						size="small"
					/>
					<Button
						icon="arrow-down-alt2"
						label={__('Move down', 'nextora')}
						onClick={onMoveDown}
						disabled={index >= total - 1}
						size="small"
					/>
				</div>
			</div>
		</article>
	);
}

export default function TestimonialsEdit({ attributes, setAttributes }: EditProps) {
	const [editingId, setEditingId] = useState<string | null>(null);
	const palette = useThemeColorPalette();
	const fontFamilyOptions = useFontFamilyOptions();

	const testimonials = normalizeTestimonials(attributes.testimonials);
	const editingItem = editingId ? testimonials.find((t) => t.id === editingId) : undefined;

	const mediaIds = testimonials.map((t) => t.portraitId).filter((id) => id > 0);

	const mediaRecords = useSelect(
		(select) => {
			const { getMedia } = select('core') as {
				getMedia: (id: number) => { source_url?: string } | undefined;
			};
			return mediaIds.map((id) => getMedia(id));
		},
		[mediaIds.join(',')],
	);

	const mediaUrlById = new Map<number, string>();
	mediaIds.forEach((id, i) => {
		const url = mediaRecords[i]?.source_url;
		if (url) {
			mediaUrlById.set(id, url);
		}
	});

	const {
		template = 'default',
		headingText = '',
		headingLevel = 2,
		headingFontSize = '',
		quoteFontSize = '',
		quoteFontFamily = '',
		imagePosition = 'left',
		imageColumnRatio = 50,
		showPagination = true,
		showArrows = false,
		contentBackgroundColor = '',
		effect = 'fade',
		speed = 600,
		loop = true,
		autoplay = true,
		autoplayDelay = 6000,
		pauseOnHover = true,
		headingColor = '',
		quoteColor = '',
		authorNameColor = '',
		authorMetaColor = '',
		paginationColor = '',
		paginationActiveColor = '',
		enableScrollAnimation = true,
	} = attributes;

	const typographyVars = buildTypographyStyleVars({
		headingFontSize,
		quoteFontSize,
		quoteFontFamily,
	});

	const blockProps = useBlockProps({
		className: [
			'nextora-testimonials',
			'nextora-testimonials--editor',
			`nextora-testimonials--template-${template}`,
			`nextora-testimonials--image-${imagePosition}`,
		].join(' '),
		style: {
			...buildSectionStyleVars({
				imageColumnRatio,
				contentBackgroundColor,
				headingColor,
				quoteColor,
				authorNameColor,
				authorMetaColor,
				paginationColor,
				paginationActiveColor,
			}),
			...typographyVars,
		} as CSSProperties,
	});

	const setTestimonials = (next: TestimonialItem[]): void => {
		setAttributes({ testimonials: next });
	};

	const patchItem = (id: string, patch: Partial<TestimonialItem>): void => {
		setTestimonials(testimonials.map((t) => (t.id === id ? { ...t, ...patch } : t)));
	};

	const addTestimonial = (): void => {
		const id = createTestimonialId();
		setTestimonials([
			...testimonials,
			{
				id,
				quoteText: '',
				authorName: '',
				authorAge: '',
				authorLocation: '',
				portraitId: 0,
				portraitUrl: '',
				portraitAlt: '',
			},
		]);
		setEditingId(id);
	};

	const removeTestimonial = (id: string): void => {
		if (testimonials.length <= 1) {
			return;
		}
		setTestimonials(testimonials.filter((t) => t.id !== id));
		if (editingId === id) {
			setEditingId(null);
		}
	};

	const moveTestimonial = (id: string, delta: number): void => {
		const index = testimonials.findIndex((t) => t.id === id);
		const target = index + delta;
		if (index < 0 || target < 0 || target >= testimonials.length) {
			return;
		}
		const next = [...testimonials];
		const tmp = next[index];
		next[index] = next[target];
		next[target] = tmp;
		setTestimonials(next);
	};

	const headingTag = `h${Math.max(2, Math.min(4, headingLevel))}` as 'h2' | 'h3' | 'h4';

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Content', 'nextora')} initialOpen>
					<Button variant="secondary" onClick={addTestimonial}>
						{__('Add testimonial', 'nextora')}
					</Button>
				</PanelBody>

				<PanelBody title={__('Layout', 'nextora')} initialOpen={false}>
					<SelectControl
						label={__('Template', 'nextora')}
						value={template}
						options={templateOptions}
						onChange={(v) =>
							setAttributes({ template: (v as 'default' | 'story') ?? 'default' })
						}
						help={__(
							'Story template shows a large quote mark and elegant typography.',
							'nextora',
						)}
					/>
					<SelectControl
						label={__('Portrait position', 'nextora')}
						value={imagePosition}
						options={imagePositionOptions}
						onChange={(v) =>
							setAttributes({ imagePosition: (v as 'left' | 'right') ?? 'left' })
						}
					/>
					<RangeControl
						label={__('Portrait column width (%)', 'nextora')}
						value={imageColumnRatio}
						onChange={(v) => setAttributes({ imageColumnRatio: v ?? 50 })}
						min={40}
						max={60}
					/>
				</PanelBody>

				<PanelBody title={__('Carousel', 'nextora')} initialOpen={false}>
					<SelectControl
						label={__('Transition', 'nextora')}
						value={effect}
						options={effectOptions}
						onChange={(v) =>
							setAttributes({
								effect: (v as TestimonialsAttributes['effect']) ?? 'fade',
							})
						}
					/>
					<RangeControl
						label={__('Speed (ms)', 'nextora')}
						value={speed}
						onChange={(v) => setAttributes({ speed: v ?? 600 })}
						min={200}
						max={2000}
						step={100}
					/>
					<ToggleControl
						label={__('Loop', 'nextora')}
						checked={loop}
						onChange={(loopValue) => setAttributes({ loop: loopValue })}
					/>
				</PanelBody>

				<PanelBody title={__('Autoplay', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Enable autoplay', 'nextora')}
						checked={autoplay}
						onChange={(autoplayValue) => setAttributes({ autoplay: autoplayValue })}
					/>
					{autoplay && (
						<>
							<RangeControl
								label={__('Delay (ms)', 'nextora')}
								value={autoplayDelay}
								onChange={(v) => setAttributes({ autoplayDelay: v ?? 6000 })}
								min={2000}
								max={15000}
								step={500}
							/>
							<ToggleControl
								label={__('Pause on hover', 'nextora')}
								checked={pauseOnHover}
								onChange={(pauseOnHoverValue) =>
									setAttributes({ pauseOnHover: pauseOnHoverValue })
								}
							/>
						</>
					)}
				</PanelBody>

				<PanelBody title={__('Navigation', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Show pagination', 'nextora')}
						checked={showPagination}
						onChange={(showPaginationValue) =>
							setAttributes({ showPagination: showPaginationValue })
						}
					/>
					<ToggleControl
						label={__('Show arrows', 'nextora')}
						checked={showArrows}
						onChange={(showArrowsValue) => setAttributes({ showArrows: showArrowsValue })}
					/>
				</PanelBody>

			<PanelColorSettings
				title={__('Colors', 'nextora')}
				colorSettings={[
					...(template === 'default'
						? [
								{
									value: colorValueForPicker(contentBackgroundColor, palette),
									onChange: (v: string | undefined) =>
										setAttributes({
											contentBackgroundColor: normalizeColorForStorage(v, palette),
										}),
									label: __('Content panel background', 'nextora'),
								},
								{
									value: colorValueForPicker(headingColor, palette),
									onChange: (v: string | undefined) =>
										setAttributes({ headingColor: normalizeColorForStorage(v, palette) }),
									label: __('Heading color', 'nextora'),
								},
							]
						: []),
					{
						value: colorValueForPicker(quoteColor, palette),
						onChange: (v) =>
							setAttributes({ quoteColor: normalizeColorForStorage(v, palette) }),
						label: __('Quote color', 'nextora'),
					},
					{
						value: colorValueForPicker(authorNameColor, palette),
						onChange: (v) =>
							setAttributes({ authorNameColor: normalizeColorForStorage(v, palette) }),
						label: __('Author name color', 'nextora'),
					},
					{
						value: colorValueForPicker(authorMetaColor, palette),
						onChange: (v) =>
							setAttributes({ authorMetaColor: normalizeColorForStorage(v, palette) }),
						label: __('Author meta color', 'nextora'),
					},
					{
						value: colorValueForPicker(paginationColor, palette),
						onChange: (v) =>
							setAttributes({ paginationColor: normalizeColorForStorage(v, palette) }),
						label: __('Pagination ring color', 'nextora'),
					},
					{
						value: colorValueForPicker(paginationActiveColor, palette),
						onChange: (v) =>
							setAttributes({
								paginationActiveColor: normalizeColorForStorage(v, palette),
							}),
						label: __('Active pagination color', 'nextora'),
					},
				]}
			/>

				<PanelBody title={__('Typography', 'nextora')} initialOpen={false}>
					{template !== 'story' && (
						<BaseControl
							className="nextora-testimonials__font-size-control"
							label={__('Heading font size', 'nextora')}
							id="nextora-testimonials-heading-font-size"
							help={__(
								'Default uses the theme Extra Large preset.',
								'nextora',
							)}
						>
							<FontSizePicker
								value={headingFontSize || undefined}
								valueMode="slug"
								onChange={(value, selectedItem) =>
									setAttributes({
										headingFontSize: normalizeFontSizeAttribute(value, selectedItem),
									})
								}
							/>
						</BaseControl>
					)}
					<BaseControl
						className="nextora-testimonials__font-size-control"
						label={__('Quote font size', 'nextora')}
						id="nextora-testimonials-quote-font-size"
						help={
							template === 'story'
								? __(
										'Default uses the theme heading font with large size for story template.',
										'nextora',
									)
								: __(
										'Default uses the theme Medium preset.',
										'nextora',
									)
						}
					>
						<FontSizePicker
							value={quoteFontSize || undefined}
							valueMode="slug"
							onChange={(value, selectedItem) =>
								setAttributes({
									quoteFontSize: normalizeFontSizeAttribute(value, selectedItem),
								})
							}
						/>
					</BaseControl>
					{template === 'story' && (
						<SelectControl
							label={__('Quote font family', 'nextora')}
							value={quoteFontFamily}
							options={fontFamilyOptions}
							onChange={(value) =>
								setAttributes({
									quoteFontFamily: value ?? '',
								})
							}
							help={__(
								'Default uses the theme heading font.',
								'nextora',
							)}
						/>
					)}
				</PanelBody>

				<PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Animate on scroll', 'nextora')}
						help={__(
							'Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.',
							'nextora',
						)}
						checked={enableScrollAnimation}
						onChange={(enableScrollAnimationValue) =>
							setAttributes({ enableScrollAnimation: enableScrollAnimationValue })
						}
					/>
				</PanelBody>
			</InspectorControls>

			{editingItem && (
				<Modal
					className="nextora-testimonials__item-modal"
					title={
						editingItem.authorName
							? sprintf(__('Edit testimonial: %s', 'nextora'), editingItem.authorName)
							: __('Edit testimonial', 'nextora')
					}
					onRequestClose={() => setEditingId(null)}
					shouldCloseOnClickOutside={false}
					headerActions={
						<div className="nextora-testimonials__item-modal-header-actions">
							<Button size="compact" variant="tertiary" onClick={() => setEditingId(null)}>
								{__('Cancel', 'nextora')}
							</Button>
							<Button size="compact" variant="primary" onClick={() => setEditingId(null)}>
								{__('Save', 'nextora')}
							</Button>
						</div>
					}
				>
					<TestimonialEditForm
						item={editingItem}
						portraitUrl={resolvePortraitUrl(editingItem, mediaUrlById)}
						onPatch={(patch) => patchItem(editingItem.id, patch)}
					/>
				</Modal>
			)}

			<div {...blockProps}>
				<div className="nextora-testimonials__editor-section">
					<div className="nextora-testimonials__content nextora-testimonials__content--section-preview">
						<div className="nextora-testimonials__content-inner">
							<div className="nextora-testimonials__header">
								<RichText
									tagName={headingTag}
									className="nextora-testimonials__heading"
									value={headingText}
									onChange={(v) => setAttributes({ headingText: v })}
									placeholder={__('Section heading…', 'nextora')}
									allowedFormats={[]}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="nextora-testimonials__editor-list" aria-label={__('Testimonials', 'nextora')}>
					{testimonials.map((item, index) => (
						<TestimonialEditorItem
							key={item.id}
							item={item}
							index={index}
							total={testimonials.length}
							portraitUrl={resolvePortraitUrl(item, mediaUrlById)}
							imagePosition={imagePosition}
							onEdit={() => setEditingId(item.id)}
							onMoveUp={() => moveTestimonial(item.id, -1)}
							onMoveDown={() => moveTestimonial(item.id, 1)}
							onRemove={() => removeTestimonial(item.id)}
						/>
					))}
				</div>

				<div className="nextora-testimonials__editor-add">
					<Button variant="secondary" onClick={addTestimonial}>
						{__('Add testimonial', 'nextora')}
					</Button>
				</div>
			</div>
		</>
	);
}
