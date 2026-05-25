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
	TextControl,
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
} from './testimonial-utils';
import TestimonialEditForm from './testimonial-edit-form';
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
			showArrows && arrowPosition === 'sides' ? 'nextora-testimonial-carousel--arrows-sides' : '',
		]
			.filter(Boolean)
			.join(' '),
		style: buildSectionStyleVars({
			backgroundColor,
			paddingTop,
			paddingBottom,
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
				next.push({ id: item.id, alt: item.alt ?? '' });
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
							const url = avatar.id > 0 ? mediaUrlById.get(avatar.id) : undefined;
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
				</PanelBody>

				<PanelBody title={__('Autoplay', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Enable autoplay', 'nextora')}
						checked={autoplay}
						onChange={(v) => setAttributes({ autoplay: v })}
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
								onChange={(v) => setAttributes({ pauseOnHover: v })}
							/>
						</>
					)}
				</PanelBody>

				<PanelBody title={__('Navigation', 'nextora')} initialOpen={false}>
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
					{showArrows && (
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

				<PanelBody title={__('Layout', 'nextora')} initialOpen={false}>
					<TextControl
						label={__('Content max width', 'nextora')}
						value={contentMaxWidth}
						onChange={(v) => setAttributes({ contentMaxWidth: v ?? '680px' })}
						help={__('e.g. 680px, 42rem', 'nextora')}
					/>
					<RangeControl
						label={__('Padding top (px)', 'nextora')}
						value={paddingTop}
						onChange={(v) => setAttributes({ paddingTop: v ?? 80 })}
						min={0}
						max={200}
					/>
					<RangeControl
						label={__('Padding bottom (px)', 'nextora')}
						value={paddingBottom}
						onChange={(v) => setAttributes({ paddingBottom: v ?? 80 })}
						min={0}
						max={200}
					/>
				</PanelBody>

				<PanelColorSettings
					title={__('Colors', 'nextora')}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: (v) => setAttributes({ backgroundColor: v ?? '' }),
							label: __('Background', 'nextora'),
						},
						{
							value: topIconColor,
							onChange: (v) => setAttributes({ topIconColor: v ?? '' }),
							label: __('Top icon', 'nextora'),
						},
						{
							value: labelColor,
							onChange: (v) => setAttributes({ labelColor: v ?? '' }),
							label: __('Label', 'nextora'),
						},
						{
							value: quoteColor,
							onChange: (v) => setAttributes({ quoteColor: v ?? '' }),
							label: __('Quote', 'nextora'),
						},
						{
							value: authorNameColor,
							onChange: (v) => setAttributes({ authorNameColor: v ?? '' }),
							label: __('Author name', 'nextora'),
						},
						{
							value: authorColor,
							onChange: (v) => setAttributes({ authorColor: v ?? '' }),
							label: __('Author role', 'nextora'),
						},
						{
							value: starColor,
							onChange: (v) => setAttributes({ starColor: v ?? '' }),
							label: __('Star rating', 'nextora'),
						},
						{
							value: trustColor,
							onChange: (v) => setAttributes({ trustColor: v ?? '' }),
							label: __('Trust text', 'nextora'),
						},
						...(showPagination
							? [
									{
										value: paginationColor,
										onChange: (v: string | undefined) =>
											setAttributes({ paginationColor: v ?? '' }),
										label: __('Pagination dot', 'nextora'),
									},
									{
										value: paginationActiveColor,
										onChange: (v: string | undefined) =>
											setAttributes({ paginationActiveColor: v ?? '' }),
										label: __('Active pagination', 'nextora'),
									},
								]
							: []),
						...(showArrows
							? [
									{
										value: arrowColor,
										onChange: (v: string | undefined) =>
											setAttributes({ arrowColor: v ?? '' }),
										label: __('Arrow icon', 'nextora'),
									},
									{
										value: arrowBorderColor,
										onChange: (v: string | undefined) =>
											setAttributes({ arrowBorderColor: v ?? '' }),
										label: __('Arrow border', 'nextora'),
									},
								]
							: []),
						...(showTrustIndicator
							? [
									{
										value: trustAvatarBorderColor,
										onChange: (v: string | undefined) =>
											setAttributes({ trustAvatarBorderColor: v ?? '' }),
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
					title={
						editingItem.authorName
							? sprintf(__('Edit testimonial: %s', 'nextora'), editingItem.authorName)
							: __('Edit testimonial', 'nextora')
					}
					onRequestClose={() => setEditingId(null)}
				>
					<TestimonialEditForm
						item={editingItem}
						authorPhotoUrl={
							editingItem.authorPhotoId > 0
								? mediaUrlById.get(editingItem.authorPhotoId)
								: undefined
						}
						onPatch={(patch) => patchItem(editingItem.id, patch)}
					/>
					<div className="nextora-testimonial-carousel__item-modal-footer">
						<Button variant="primary" onClick={() => setEditingId(null)}>
							{__('Done', 'nextora')}
						</Button>
					</div>
				</Modal>
			)}

			<div {...blockProps}>
				<div className="nextora-testimonial-carousel__inner">
					{(showTopIcon || showTopLabel) && (
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

					<div className="nextora-testimonial-carousel__slides-editor">
						{testimonials.map((item, index) => (
							<article
								key={item.id}
								className="nextora-testimonial-carousel__slide nextora-testimonial-carousel__slide--editor"
							>
								<p className="nextora-testimonial-carousel__slide-badge">
									{__('Testimonial', 'nextora')} {index + 1}
								</p>
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
								<div className="nextora-testimonial-carousel__slide-author">
									{item.showAuthorPhoto &&
									item.authorPhotoId > 0 &&
									mediaUrlById.get(item.authorPhotoId) ? (
										<img
											src={mediaUrlById.get(item.authorPhotoId)}
											alt=""
											className="nextora-testimonial-carousel__slide-author-photo"
										/>
									) : null}
									<p className="nextora-testimonial-carousel__slide-author-line">
										{item.authorName ? (
											<>
												—{' '}
												<strong className="nextora-testimonial-carousel__slide-author-name">
													{item.authorName}
												</strong>
												{item.authorRole ? (
													<>
														{', '}
														<span className="nextora-testimonial-carousel__slide-author-role">
															{item.authorRole}
														</span>
													</>
												) : null}
											</>
										) : (
											__('Author name, role', 'nextora')
										)}
									</p>
								</div>
							</article>
						))}
					</div>

					{trustPosition === 'below-quote' && renderTrustPreview()}
					{trustPosition === 'above-dots' && renderTrustPreview()}
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
							className={`nextora-testimonial-carousel__arrows nextora-testimonial-carousel__arrows--${arrowPosition}`}
						>
							<span className="nextora-testimonial-carousel__arrow">
								<ChevronLeftIcon />
							</span>
							<span className="nextora-testimonial-carousel__arrow">
								<ChevronRightIcon />
							</span>
						</div>
					)}
					{trustPosition === 'bottom' && renderTrustPreview()}
				</div>
			</div>
		</>
	);
}
