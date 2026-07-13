import type { CSSProperties } from 'react';
import { useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	PanelColorSettings,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	Button,
	Modal,
	PanelBody,
	RangeControl,
	SelectControl,
	TextareaControl,
	ToggleControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import type {
	TestimonialCarouselAttributes,
	TestimonialItem,
	TrustAvatar,
} from './types';
import { TESTIMONIAL_CAROUSEL_MEDIA_TYPES } from './types';
import {
	buildSectionStyleVars,
	createTestimonialId,
	normalizeTestimonials,
	normalizeTrustAvatars,
	resolveAuthorPhotoUrl,
	resolveTrustAvatarUrl,
} from './testimonial-utils';
import TestimonialEditForm from './testimonial-edit-form';
import {
	normalizeColorForStorage,
	colorValueForPicker,
	useThemeColorPalette,
} from './color-utils';
import { ChevronLeftIcon, ChevronRightIcon, StarRating, TopIconSvg } from './icons';

interface EditProps {
	attributes: TestimonialCarouselAttributes;
	setAttributes: (attrs: Partial<TestimonialCarouselAttributes>) => void;
}

interface WPMedia {
	id?: number;
	url?: string;
	alt?: string;
}

const templateStyleOptions = [
	{ label: __('Default', 'nextora'), value: 'default' },
	{ label: __('Template 1', 'nextora'), value: 'template-1' },
];

const iconTypeOptions = [
	{ label: __('Sparkle', 'nextora'), value: 'sparkle' },
	{ label: __('Quote', 'nextora'), value: 'quote' },
	{ label: __('Star', 'nextora'), value: 'star' },
	{ label: __('Heart', 'nextora'), value: 'heart' },
	{ label: __('Custom SVG', 'nextora'), value: 'custom-svg' },
];

const effectOptions = [
	{ label: __('Fade', 'nextora'), value: 'fade' },
	{ label: __('Slide', 'nextora'), value: 'slide' },
];

const arrowPositionOptions = [
	{ label: __('Below dots', 'nextora'), value: 'below-dots' },
	{ label: __('Sides', 'nextora'), value: 'sides' },
];

const trustPositionOptions = [
	{ label: __('Below quote', 'nextora'), value: 'below-quote' },
	{ label: __('Above dots', 'nextora'), value: 'above-dots' },
	{ label: __('Bottom', 'nextora'), value: 'bottom' },
];

const avatarFallbackOptions = [
	{ label: __('Initials', 'nextora'), value: 'initials' },
	{ label: __('User icon', 'nextora'), value: 'icon' },
	{ label: __('None', 'nextora'), value: 'none' },
];

export default function TestimonialCarouselEdit({ attributes, setAttributes }: EditProps) {
	const [editingId, setEditingId] = useState<string | null>(null);
	const palette = useThemeColorPalette();

	const testimonials = normalizeTestimonials(attributes.testimonials);
	const trustAvatars = normalizeTrustAvatars(attributes.trustAvatars);
	const editingItem = editingId ? testimonials.find((t) => t.id === editingId) : undefined;

	const mediaIds = [
		...testimonials.map((t) => t.authorPhotoId).filter((id) => id > 0),
		...trustAvatars.map((a) => a.id).filter((id) => id > 0),
	];

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
		templateStyle = 'default',
		itemsPerViewDesktop = 3,
		itemsPerViewTablet = 2,
		itemsPerViewMobile = 1,
		cardGap = 22,
		showTopIcon = true,
		topIconType = 'sparkle',
		customIconSvg = '',
		topIconSize = 20,
		topIconColor = '',
		showTopLabel = true,
		topLabelText = '',
		effect = 'fade',
		speed = 600,
		autoplay = true,
		autoplayDelay = 6000,
		pauseOnHover = true,
		loop = true,
		showPagination = true,
		showArrows = false,
		arrowPosition = 'below-dots',
		showTrustIndicator = true,
		trustText = '',
		trustAvatarSize = 36,
		trustAvatarOverlap = 10,
		trustAvatarBorderWidth = 2.5,
		trustAvatarBorderColor = '',
		trustAvatarFallback = 'initials',
		trustPosition = 'below-quote',
		backgroundColor = '',
		contentMaxWidth = '680px',
		paddingTop = 80,
		paddingBottom = 80,
		paginationColor = '',
		paginationActiveColor = '',
		arrowColor = '',
		arrowBorderColor = '',
		quoteColor = '',
		labelColor = '',
		authorColor = '',
		authorNameColor = '',
		trustColor = '',
		starColor = '',
		enableScrollAnimation = true,
	} = attributes;

	const blockProps = useBlockProps({
		className: [
			'nextora-testimonial-carousel',
			'nextora-testimonial-carousel--editor',
			templateStyle === 'template-1' ? 'nextora-testimonial-carousel--template-1' : '',
			showArrows && arrowPosition === 'sides' ? 'nextora-testimonial-carousel--arrows-sides' : '',
		]
			.filter(Boolean)
			.join(' '),
		style: buildSectionStyleVars({
			backgroundColor,
			contentMaxWidth,
			topIconSize,
			topIconColor,
			paginationColor,
			paginationActiveColor,
			arrowColor,
			arrowBorderColor,
			quoteColor,
			labelColor,
			authorColor,
			authorNameColor,
			trustColor,
			starColor,
			trustAvatarSize,
			trustAvatarOverlap,
			trustAvatarBorderWidth,
			trustAvatarBorderColor,
			cardGap,
		}) as CSSProperties,
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
				authorRole: '',
				authorPhotoId: 0,
				authorPhotoUrl: '',
				authorPhotoAlt: '',
				showAuthorPhoto: false,
				rating: 0,
				quoteColor: '',
				authorColor: '',
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

	const setTrustAvatars = (next: TrustAvatar[]): void => {
		setAttributes({ trustAvatars: next });
	};

	const addTrustAvatar = (media: WPMedia | WPMedia[]): void => {
		const list = Array.isArray(media) ? media : [media];
		const next = [...trustAvatars];
		list.forEach((item) => {
			if (item?.id) {
				next.push({ id: item.id, url: '', alt: item.alt ?? '' });
			}
		});
		if (next.length !== trustAvatars.length) {
			setTrustAvatars(next);
		}
	};

	const renderTrustPreview = (): JSX.Element | null => {
		if (!showTrustIndicator) {
			return null;
		}

		return (
			<div className="nextora-testimonial-carousel__trust">
				<RichText
					tagName="span"
					className="nextora-testimonial-carousel__trust-text"
					value={trustText}
					onChange={(v) => setAttributes({ trustText: v })}
					placeholder={__('3500+ people trust us', 'nextora')}
					allowedFormats={[]}
				/>
				{trustAvatars.length > 0 && (
					<div className="nextora-testimonial-carousel__avatars">
						{trustAvatars.map((avatar, index) => {
							const url = resolveTrustAvatarUrl(avatar, mediaUrlById);
							return url ? (
								<img
									key={`${avatar.id}-${index}`}
									src={url}
									alt={avatar.alt}
									className="nextora-testimonial-carousel__avatar"
								/>
							) : (
								<span
									key={`fallback-${index}`}
									className="nextora-testimonial-carousel__avatar nextora-testimonial-carousel__avatar--initials"
								>
									{(avatar.alt || '?').charAt(0).toUpperCase()}
								</span>
							);
						})}
						<span className="nextora-testimonial-carousel__avatar nextora-testimonial-carousel__avatar--count">
							+
						</span>
					</div>
				)}
			</div>
		);
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Template', 'nextora')} initialOpen>
					<SelectControl
						label={__('Template style', 'nextora')}
						value={templateStyle}
						options={templateStyleOptions}
						onChange={(v) =>
							setAttributes({
								templateStyle:
									(v as TestimonialCarouselAttributes['templateStyle']) ?? 'default',
							})
						}
					/>
				</PanelBody>

				{templateStyle !== 'template-1' && (
				<PanelBody title={__('Top decorator', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Show icon', 'nextora')}
						checked={showTopIcon}
						onChange={(v) => setAttributes({ showTopIcon: v })}
					/>
					{showTopIcon && (
						<>
							<SelectControl
								label={__('Icon type', 'nextora')}
								value={topIconType}
								options={iconTypeOptions}
								onChange={(v) =>
									setAttributes({
										topIconType:
											(v as TestimonialCarouselAttributes['topIconType']) ??
											'sparkle',
									})
								}
							/>
							{topIconType === 'custom-svg' && (
								<TextareaControl
									label={__('Custom SVG', 'nextora')}
									value={customIconSvg}
									onChange={(v) => setAttributes({ customIconSvg: v ?? '' })}
								/>
							)}
							<RangeControl
								label={__('Icon size (px)', 'nextora')}
								value={topIconSize}
								onChange={(v) => setAttributes({ topIconSize: v ?? 20 })}
								min={12}
								max={40}
							/>
						</>
					)}
					<ToggleControl
						label={__('Show label', 'nextora')}
						checked={showTopLabel}
						onChange={(v) => setAttributes({ showTopLabel: v })}
					/>
				</PanelBody>
				)}

				<PanelBody title={__('Testimonials', 'nextora')} initialOpen>
					<p className="nextora-testimonial-carousel__inspector-help">
						{__(
							'Use Edit to open the testimonial form in a larger dialog.',
							'nextora',
						)}
					</p>
					{testimonials.map((item, index) => (
						<div key={item.id} className="nextora-testimonial-carousel__inspector-item">
							<p className="nextora-testimonial-carousel__inspector-item-name">
								{item.authorName ||
									sprintf(__('Testimonial %d', 'nextora'), index + 1)}
							</p>
							<div className="nextora-testimonial-carousel__inspector-item-actions">
								<Button variant="primary" onClick={() => setEditingId(item.id)}>
									{__('Edit', 'nextora')}
								</Button>
								<Button
									variant="secondary"
									disabled={index === 0}
									onClick={() => moveTestimonial(item.id, -1)}
								>
									{__('Up', 'nextora')}
								</Button>
								<Button
									variant="secondary"
									disabled={index >= testimonials.length - 1}
									onClick={() => moveTestimonial(item.id, 1)}
								>
									{__('Down', 'nextora')}
								</Button>
								<Button
									variant="secondary"
									isDestructive
									disabled={testimonials.length <= 1}
									onClick={() => removeTestimonial(item.id)}
								>
									{__('Remove', 'nextora')}
								</Button>
							</div>
						</div>
					))}
					<Button variant="primary" onClick={addTestimonial}>
						{__('Add testimonial', 'nextora')}
					</Button>
				</PanelBody>

				<PanelBody title={__('Carousel', 'nextora')} initialOpen={false}>
					{templateStyle !== 'template-1' && (
						<SelectControl
							label={__('Transition', 'nextora')}
							value={effect}
							options={effectOptions}
							onChange={(v) =>
								setAttributes({
									effect: (v as TestimonialCarouselAttributes['effect']) ?? 'fade',
								})
							}
						/>
					)}
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
						onChange={(v) => setAttributes({ loop: v })}
					/>

					<ToggleControl
						label={__('Enable autoplay', 'nextora')}
						checked={autoplay}
						onChange={(v) => setAttributes({ autoplay: v })}
					/>
					{autoplay && (
						<>
							<RangeControl
								label={__('Autoplay delay (ms)', 'nextora')}
								value={autoplayDelay}
								onChange={(v) => setAttributes({ autoplayDelay: v ?? 6000 })}
								min={2000}
								max={15000}
								step={500}
							/>
							<ToggleControl
								label={__('Pause on hover', 'nextora')}
								checked={pauseOnHover}
								onChange={(v) => setAttributes({ pauseOnHover: v })}
							/>
						</>
					)}

					{templateStyle === 'template-1' && (
						<>
							<RangeControl
								label={__('Slides per view — Desktop', 'nextora')}
								value={itemsPerViewDesktop}
								onChange={(v) => setAttributes({ itemsPerViewDesktop: v ?? 3 })}
								min={1}
								max={5}
							/>
							<RangeControl
								label={__('Slides per view — Tablet', 'nextora')}
								value={itemsPerViewTablet}
								onChange={(v) => setAttributes({ itemsPerViewTablet: v ?? 2 })}
								min={1}
								max={4}
							/>
							<RangeControl
								label={__('Slides per view — Mobile', 'nextora')}
								value={itemsPerViewMobile}
								onChange={(v) => setAttributes({ itemsPerViewMobile: v ?? 1 })}
								min={1}
								max={2}
							/>
							<RangeControl
								label={__('Gap (px)', 'nextora')}
								value={cardGap}
								onChange={(v) => setAttributes({ cardGap: v ?? 22 })}
								min={0}
								max={40}
							/>
						</>
					)}

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
					{showArrows && templateStyle !== 'template-1' && (
						<SelectControl
							label={__('Arrow position', 'nextora')}
							value={arrowPosition}
							options={arrowPositionOptions}
							onChange={(v) =>
								setAttributes({
									arrowPosition:
										(v as TestimonialCarouselAttributes['arrowPosition']) ??
										'below-dots',
								})
							}
						/>
					)}
				</PanelBody>

				{templateStyle !== 'template-1' && (
					<PanelBody title={__('Trust indicator', 'nextora')} initialOpen={false}>
						<ToggleControl
							label={__('Show trust indicator', 'nextora')}
							checked={showTrustIndicator}
							onChange={(v) => setAttributes({ showTrustIndicator: v })}
						/>
						{showTrustIndicator && (
							<>
								<MediaUploadCheck>
									<MediaUpload
										onSelect={addTrustAvatar}
										allowedTypes={[...TESTIMONIAL_CAROUSEL_MEDIA_TYPES]}
										multiple
										gallery
										render={({ open }) => (
											<Button variant="secondary" onClick={open}>
												{__('Add trust avatars', 'nextora')}
											</Button>
										)}
									/>
								</MediaUploadCheck>
								{trustAvatars.length > 0 && (
									<Button
										variant="secondary"
										isDestructive
										onClick={() => setTrustAvatars([])}
									>
										{__('Clear avatars', 'nextora')}
									</Button>
								)}
								<RangeControl
									label={__('Avatar size (px)', 'nextora')}
									value={trustAvatarSize}
									onChange={(v) => setAttributes({ trustAvatarSize: v ?? 36 })}
									min={24}
									max={56}
								/>
								<RangeControl
									label={__('Avatar overlap (px)', 'nextora')}
									value={trustAvatarOverlap}
									onChange={(v) => setAttributes({ trustAvatarOverlap: v ?? 10 })}
									min={0}
									max={20}
								/>
								<RangeControl
									label={__('Avatar border (px)', 'nextora')}
									value={trustAvatarBorderWidth}
									onChange={(v) =>
										setAttributes({ trustAvatarBorderWidth: v ?? 2.5 })
									}
									min={0}
									max={5}
									step={0.5}
								/>
								<SelectControl
									label={__('No-photo fallback', 'nextora')}
									value={trustAvatarFallback}
									options={avatarFallbackOptions}
									onChange={(v) =>
										setAttributes({
											trustAvatarFallback:
												(v as TestimonialCarouselAttributes['trustAvatarFallback']) ??
												'initials',
										})
									}
								/>
								<SelectControl
									label={__('Trust position', 'nextora')}
									value={trustPosition}
									options={trustPositionOptions}
									onChange={(v) =>
										setAttributes({
											trustPosition:
												(v as TestimonialCarouselAttributes['trustPosition']) ??
												'below-quote',
										})
									}
								/>
							</>
						)}
					</PanelBody>
				)}

				<PanelBody title={__('Layout', 'nextora')} initialOpen={false}>
					<RangeControl
						label={__('Content max width (px)', 'nextora')}
						value={parseInt(contentMaxWidth, 10) || 680}
						onChange={(v) => setAttributes({ contentMaxWidth: (v ?? 680) + 'px' })}
						min={200}
						max={1400}
						step={20}
					/>
				</PanelBody>

				<PanelColorSettings
					title={__('Colors', 'nextora')}
					colorSettings={[
						{
							value: colorValueForPicker(backgroundColor, palette),
							onChange: (v) => setAttributes({ backgroundColor: normalizeColorForStorage(v, palette) }),
							label: __('Background', 'nextora'),
						},
						...(templateStyle !== 'template-1'
							? [
									{
										value: colorValueForPicker(topIconColor, palette),
										onChange: (v: string | undefined) => setAttributes({ topIconColor: normalizeColorForStorage(v, palette) }),
										label: __('Top icon', 'nextora'),
									},
								]
							: []),
						...(templateStyle !== 'template-1'
							? [
									{
										value: colorValueForPicker(labelColor, palette),
										onChange: (v: string | undefined) => setAttributes({ labelColor: normalizeColorForStorage(v, palette) }),
										label: __('Label', 'nextora'),
									},
								]
							: []),
						{
							value: colorValueForPicker(quoteColor, palette),
							onChange: (v) => setAttributes({ quoteColor: normalizeColorForStorage(v, palette) }),
							label: __('Quote', 'nextora'),
						},
						{
							value: colorValueForPicker(authorNameColor, palette),
							onChange: (v) => setAttributes({ authorNameColor: normalizeColorForStorage(v, palette) }),
							label: __('Author name', 'nextora'),
						},
						{
							value: colorValueForPicker(authorColor, palette),
							onChange: (v) => setAttributes({ authorColor: normalizeColorForStorage(v, palette) }),
							label: __('Author role', 'nextora'),
						},
						{
							value: colorValueForPicker(starColor, palette),
							onChange: (v) => setAttributes({ starColor: normalizeColorForStorage(v, palette) }),
							label: __('Star rating', 'nextora'),
						},
						...(templateStyle !== 'template-1'
							? [
									{
										value: colorValueForPicker(trustColor, palette),
										onChange: (v: string | undefined) =>
											setAttributes({ trustColor: normalizeColorForStorage(v, palette) }),
										label: __('Trust text', 'nextora'),
									},
								]
							: []),
						...(showPagination
							? [
									{
										value: colorValueForPicker(paginationColor, palette),
										onChange: (v: string | undefined) =>
											setAttributes({ paginationColor: normalizeColorForStorage(v, palette) }),
										label: __('Pagination dot', 'nextora'),
									},
									{
										value: colorValueForPicker(paginationActiveColor, palette),
										onChange: (v: string | undefined) =>
											setAttributes({ paginationActiveColor: normalizeColorForStorage(v, palette) }),
										label: __('Active pagination', 'nextora'),
									},
								]
							: []),
						...(showArrows
							? [
									{
										value: colorValueForPicker(arrowColor, palette),
										onChange: (v: string | undefined) =>
											setAttributes({ arrowColor: normalizeColorForStorage(v, palette) }),
										label: __('Arrow icon', 'nextora'),
									},
									{
										value: colorValueForPicker(arrowBorderColor, palette),
										onChange: (v: string | undefined) =>
											setAttributes({ arrowBorderColor: normalizeColorForStorage(v, palette) }),
										label: __('Arrow border', 'nextora'),
									},
								]
							: []),
						...(showTrustIndicator && templateStyle !== 'template-1'
							? [
									{
										value: colorValueForPicker(trustAvatarBorderColor, palette),
										onChange: (v: string | undefined) =>
											setAttributes({ trustAvatarBorderColor: normalizeColorForStorage(v, palette) }),
										label: __('Avatar border', 'nextora'),
									},
								]
							: []),
					]}
				/>

				<PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Animate on scroll', 'nextora')}
						help={__(
							'Fade content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.',
							'nextora',
						)}
						checked={enableScrollAnimation !== false}
						onChange={(v) => setAttributes({ enableScrollAnimation: v })}
					/>
				</PanelBody>
			</InspectorControls>

			{editingItem && (
				<Modal
					className="nextora-testimonial-carousel__item-modal"
					size="large"
					title={
						editingItem.authorName
							? sprintf(__('Edit testimonial: %s', 'nextora'), editingItem.authorName)
							: __('Edit testimonial', 'nextora')
					}
					headerActions={
						<Button variant="primary" onClick={() => setEditingId(null)}>
							{__('Done', 'nextora')}
						</Button>
					}
					onRequestClose={() => setEditingId(null)}
				>
					<TestimonialEditForm
						item={editingItem}
						authorPhotoUrl={resolveAuthorPhotoUrl(editingItem, mediaUrlById)}
						onPatch={(patch) => patchItem(editingItem.id, patch)}
					/>
				</Modal>
			)}

			<div {...blockProps}>
				<div className="nextora-testimonial-carousel__inner">
					{templateStyle !== 'template-1' && (showTopIcon || showTopLabel) && (
						<div className="nextora-testimonial-carousel__top">
							{showTopIcon && (
								<div className="nextora-testimonial-carousel__icon" aria-hidden>
									{topIconType === 'custom-svg' && customIconSvg ? (
										<span
											className="nextora-testimonial-carousel__icon-custom"
											dangerouslySetInnerHTML={{ __html: customIconSvg }}
										/>
									) : (
										<TopIconSvg type={topIconType} size={topIconSize} />
									)}
								</div>
							)}
							{showTopLabel && (
								<RichText
									tagName="p"
									className="nextora-testimonial-carousel__label"
									value={topLabelText}
									onChange={(v) => setAttributes({ topLabelText: v })}
									placeholder={__('Testimonials', 'nextora')}
									allowedFormats={[]}
								/>
							)}
						</div>
					)}

					<div className={`nextora-testimonial-carousel__slides-editor${templateStyle === 'template-1' ? ' nextora-testimonial-carousel__slides-editor--template-1' : ''}`}>
						{testimonials.map((item, index) => {
							const authorPhotoUrl = resolveAuthorPhotoUrl(item, mediaUrlById);

							return (
							<article
								key={item.id}
								className={`nextora-testimonial-carousel__slide nextora-testimonial-carousel__slide--editor${templateStyle === 'template-1' ? ' nextora-testimonial-carousel__slide--t1' : ''}`}
							>
								{templateStyle !== 'template-1' && (
									<p className="nextora-testimonial-carousel__slide-badge">
										{__('Testimonial', 'nextora')} {index + 1}
									</p>
								)}
								<button
									type="button"
									className="nextora-testimonial-carousel__slide-edit"
									onClick={() => setEditingId(item.id)}
								>
									{__('Edit', 'nextora')}
								</button>
								<StarRating rating={item.rating} />
								<blockquote className="nextora-testimonial-carousel__slide-quote">
									{item.quoteText ||
										__('Write testimonial quote…', 'nextora')}
								</blockquote>
								<div className={`nextora-testimonial-carousel__slide-author${templateStyle === 'template-1' ? ' nextora-testimonial-carousel__slide-author--t1' : ''}`}>
									{item.showAuthorPhoto && authorPhotoUrl ? (
										<img
											src={authorPhotoUrl}
											alt=""
											className="nextora-testimonial-carousel__slide-author-photo"
										/>
									) : null}
									<div className="nextora-testimonial-carousel__slide-author-text">
										{item.authorName ? (
											<>
												{templateStyle !== 'template-1' && '— '}
												<strong className="nextora-testimonial-carousel__slide-author-name">
													{item.authorName}
												</strong>
												{item.authorRole ? (
													templateStyle === 'template-1' ? (
														<span className="nextora-testimonial-carousel__slide-author-role">
															{item.authorRole}
														</span>
													) : (
														<>
															{', '}
															<span className="nextora-testimonial-carousel__slide-author-role">
																{item.authorRole}
															</span>
														</>
													)
												) : null}
											</>
										) : (
											__('Author name, role', 'nextora')
										)}
									</div>
								</div>
							</article>
							);
						})}
					</div>

					{templateStyle !== 'template-1' && trustPosition === 'below-quote' && renderTrustPreview()}
					{templateStyle !== 'template-1' && trustPosition === 'above-dots' && renderTrustPreview()}
					{showPagination && (
						<div className="nextora-testimonial-carousel__pagination nextora-testimonial-carousel__pagination--preview">
							{testimonials.map((t, i) => (
								<span
									key={t.id}
									className={
										i === 0
											? 'nextora-testimonial-carousel__dot nextora-testimonial-carousel__dot--active'
											: 'nextora-testimonial-carousel__dot'
									}
								/>
							))}
						</div>
					)}
					{showArrows && (
						<div
							className={`nextora-testimonial-carousel__arrows nextora-testimonial-carousel__arrows--${templateStyle === 'template-1' ? 'below-dots' : arrowPosition}`}
						>
							<span className="nextora-testimonial-carousel__arrow">
								<ChevronLeftIcon />
							</span>
							<span className="nextora-testimonial-carousel__arrow">
								<ChevronRightIcon />
							</span>
						</div>
					)}
					{templateStyle !== 'template-1' && trustPosition === 'bottom' && renderTrustPreview()}
				</div>
			</div>
		</>
	);
}
