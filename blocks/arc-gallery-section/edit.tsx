// @ts-nocheck
import { __, _n, sprintf } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	AlignmentToolbar,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	PanelColorSettings,
	URLInput,
} from '@wordpress/block-editor';
import {
	Button,
	Notice,
	PanelBody,
	PanelRow,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useMemo, useCallback, useRef, useState, useEffect } from '@wordpress/element';
import { buildArcLayout } from './arc-math';
import { resolveDisplayImages, resolveArcGalleryImageSrc } from './placeholder-utils';

const ALLOWED_MEDIA = ['image'];

const HEADING_LEVELS = [
	{ label: __('H1', 'nextora'), value: 1 },
	{ label: __('H2', 'nextora'), value: 2 },
	{ label: __('H3', 'nextora'), value: 3 },
	{ label: __('H4', 'nextora'), value: 4 },
	{ label: __('H5', 'nextora'), value: 5 },
	{ label: __('H6', 'nextora'), value: 6 },
];

function clamp(n, min, max) {
	return Math.max(min, Math.min(max, n));
}

export default function ArcGallerySectionEdit({ attributes, setAttributes }) {
	const {
		images = [],
		imageWidth = 311,
		imageHeight = 416,
		imageBorderRadius = 6,
		imageBorderWidth = 3,
		imageBorderColor = '',
		arcRadius = 1500,
		arcSpread = 48,
		eyebrowText = __('Protecting People & Planet', 'nextora'),
		headingText = __(
			"Join Save the World in Creating a Future That's Worth Inheriting",
			'nextora',
		),
		descriptionText = __(
			'Save the World restores forests, protects clean water, and helps communities face climate change together.',
			'nextora',
		),
		headingLevel = 2,
		textAlign = 'center',
		contentMaxWidth = '700px',
		contentOffsetY = 0,
		showPrimaryButton = true,
		primaryButtonText = __('Donate Now', 'nextora'),
		primaryButtonUrl = '',
		primaryButtonTarget = false,
		primaryButtonStyle = 'solid',
		showSecondaryButton = true,
		secondaryButtonText = __('Learn More', 'nextora'),
		secondaryButtonUrl = '',
		secondaryButtonTarget = false,
		backgroundColor = '',
		textColor = '',
		eyebrowColor = '',
		descriptionColor = '',
		primaryButtonBg = '',
		primaryButtonColor = '',
		secondaryButtonColor = '',
		enableScrollAnimation = true,
		enableGalleryScrollAnimation = true,
	} = attributes;

	const imageList = Array.isArray(images) ? images : [];
	const displayImages = useMemo(() => resolveDisplayImages(imageList), [imageList]);
	const ids = imageList.map((img) => img?.id).filter(Boolean);

	const mediaMap = useSelect(
		(select) => {
			const { getMedia } = select('core');
			const out = {};
			ids.forEach((id) => {
				const media = getMedia(id, { context: 'view' });
				if (media) {
					out[id] = media;
				}
			});
			return out;
		},
		[ids.join(',')],
	);

	const containerRef = useRef(null);
	const [containerWidth, setContainerWidth] = useState(
		typeof window !== 'undefined' ? window.innerWidth : 1200,
	);

	useEffect(() => {
		const node = containerRef.current;
		if (!node || typeof ResizeObserver === 'undefined') {
			return undefined;
		}

		const observer = new ResizeObserver((entries) => {
			const width = entries[0]?.contentRect?.width;
			if (width && width > 0) {
				setContainerWidth(width);
			}
		});
		observer.observe(node);
		setContainerWidth(node.clientWidth || window.innerWidth);

		return () => observer.disconnect();
	}, []);

	const arcLayout = useMemo(
		() =>
			buildArcLayout(
				{
					count: displayImages.length,
					arcRadius,
					arcSpread,
					imageWidth,
					imageHeight,
					arcDirection: 'down',
				},
				containerWidth,
			),
		[
			displayImages.length,
			arcRadius,
			arcSpread,
			imageWidth,
			imageHeight,
			containerWidth,
		],
	);

	const { resolved: resolvedLayout, positions, scale: arcScale } = arcLayout;

	const cssVars = {
		'--nextora-arc-bg': backgroundColor || undefined,
		'--nextora-arc-text': textColor || undefined,
		'--nextora-arc-eyebrow': eyebrowColor || undefined,
		'--nextora-arc-description': descriptionColor || undefined,
		'--nextora-arc-link': secondaryButtonColor || undefined,
		'--nextora-arc-btn-bg': primaryButtonBg || undefined,
		'--nextora-arc-btn-color': primaryButtonColor || undefined,
		'--nextora-arc-img-radius': `${Math.max(0, Math.round(imageBorderRadius * arcScale))}px`,
		'--nextora-arc-img-border': `${Math.max(0, Math.round(imageBorderWidth * arcScale))}px`,
		'--nextora-arc-img-border-color': imageBorderColor || undefined,
		'--nextora-arc-gallery-height': `${resolvedLayout.galleryHeight}px`,
		'--nextora-arc-content-offset-y': `${Math.round(contentOffsetY * arcScale)}px`,
	};

	const blockProps = useBlockProps({
		ref: containerRef,
		className: [
			'nextora-arc-gallery',
			'nextora-arc-gallery--editor',
			`nextora-arc-gallery--align-${textAlign}`,
		]
			.filter(Boolean)
			.join(' '),
		style: cssVars,
	});

	const headingTag = `h${clamp(headingLevel, 1, 6)}`;

	const onSelectImages = useCallback(
		(mediaItems) => {
			const next = (mediaItems || []).map((m) => ({
				id: m.id,
				alt: m.alt || m.caption || '',
			}));
			setAttributes({ images: next.slice(0, 7) });
		},
		[setAttributes],
	);

	const updateImageAlt = (index, alt) => {
		const next = imageList.map((img, i) => (i === index ? { ...img, alt } : img));
		setAttributes({ images: next });
	};

	const removeImage = (index) => {
		setAttributes({ images: imageList.filter((_, i) => i !== index) });
	};

	const moveImage = (index, delta) => {
		const target = index + delta;
		if (target < 0 || target >= imageList.length) {
			return;
		}
		const next = [...imageList];
		const tmp = next[index];
		next[index] = next[target];
		next[target] = tmp;
		setAttributes({ images: next });
	};

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={textAlign}
					onChange={(value) => setAttributes({ textAlign: value || 'center' })}
				/>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={__('Gallery images', 'nextora')} initialOpen>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectImages}
							allowedTypes={ALLOWED_MEDIA}
							multiple
							gallery
							value={ids}
							render={({ open }) => (
								<Button variant="primary" onClick={open}>
									{imageList.length
										? __('Edit gallery', 'nextora')
										: __('Select images', 'nextora')}
								</Button>
							)}
						/>
					</MediaUploadCheck>
					{imageList.length > 7 && (
						<Notice status="warning" isDismissible={false}>
							{__(
								'More than 7 images can crowd the arc. Only the first 7 are used.',
								'nextora',
							)}
						</Notice>
					)}
					<div className="nextora-arc-gallery__inspector-images" style={{ marginTop: 12 }}>
						{imageList.map((img, index) => {
							const thumb = resolveArcGalleryImageSrc(img, mediaMap, 'thumbnail');
							return (
								<div key={`img-${img.id}-${index}`} className="nextora-arc-gallery__inspector-image-row">
									{thumb ? (
										<img
											className="nextora-arc-gallery__inspector-thumb"
											src={thumb}
											alt=""
										/>
									) : (
										<div
											className="nextora-arc-gallery__inspector-thumb"
											style={{ background: '#ddd' }}
										/>
									)}
									<div className="nextora-arc-gallery__inspector-image-fields">
										<TextControl
											label={sprintf(__('Alt text — image %d', 'nextora'), index + 1)}
											value={img.alt || ''}
											onChange={(alt) => updateImageAlt(index, alt)}
										/>
										<div className="nextora-arc-gallery__inspector-image-actions">
											<Button
												size="small"
												variant="secondary"
												disabled={index === 0}
												onClick={() => moveImage(index, -1)}
											>
												{__('Up', 'nextora')}
											</Button>
											<Button
												size="small"
												variant="secondary"
												disabled={index >= imageList.length - 1}
												onClick={() => moveImage(index, 1)}
											>
												{__('Down', 'nextora')}
											</Button>
											<Button
												size="small"
												variant="secondary"
												isDestructive
												onClick={() => removeImage(index)}
											>
												{__('Remove', 'nextora')}
											</Button>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</PanelBody>

				<PanelBody title={__('Arc layout', 'nextora')} initialOpen={false}>
					<RangeControl
						label={__('Arc radius', 'nextora')}
						help={__('Larger = flatter curve; smaller = more dramatic.', 'nextora')}
						value={arcRadius}
						onChange={(v) => setAttributes({ arcRadius: v ?? 1500 })}
						min={300}
						max={1500}
					/>
					<RangeControl
						label={__('Arc spread (degrees)', 'nextora')}
						help={__('Total angle of the fan.', 'nextora')}
						value={arcSpread}
						onChange={(v) => setAttributes({ arcSpread: v ?? 48 })}
						min={20}
						max={90}
					/>
				</PanelBody>

				<PanelBody title={__('Image style', 'nextora')} initialOpen={false}>
					<RangeControl
						label={__('Width (px)', 'nextora')}
						value={imageWidth}
						onChange={(v) => setAttributes({ imageWidth: v ?? 311 })}
						min={120}
						max={400}
					/>
					<RangeControl
						label={__('Height (px)', 'nextora')}
						value={imageHeight}
						onChange={(v) => setAttributes({ imageHeight: v ?? 416 })}
						min={150}
						max={500}
					/>
					<RangeControl
						label={__('Corner radius (px)', 'nextora')}
						value={imageBorderRadius}
						onChange={(v) => setAttributes({ imageBorderRadius: v ?? 6 })}
						min={0}
						max={24}
					/>
					<RangeControl
						label={__('Border width (px)', 'nextora')}
						value={imageBorderWidth}
						onChange={(v) => setAttributes({ imageBorderWidth: v ?? 3 })}
						min={0}
						max={8}
					/>
				</PanelBody>

				<PanelBody title={__('Primary button', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Show primary button', 'nextora')}
						checked={showPrimaryButton}
						onChange={(v) => setAttributes({ showPrimaryButton: v })}
					/>
					{showPrimaryButton && (
						<>
							<p className="components-base-control__label">{__('URL', 'nextora')}</p>
							<URLInput
								value={primaryButtonUrl}
								onChange={(url) => setAttributes({ primaryButtonUrl: url ?? '' })}
							/>
							<ToggleControl
								label={__('Open in new tab', 'nextora')}
								checked={primaryButtonTarget}
								onChange={(v) => setAttributes({ primaryButtonTarget: v })}
							/>
							<SelectControl
								label={__('Style', 'nextora')}
								value={primaryButtonStyle}
								options={[
									{ label: __('Solid', 'nextora'), value: 'solid' },
									{ label: __('Outline', 'nextora'), value: 'outline' },
								]}
								onChange={(v) => setAttributes({ primaryButtonStyle: v || 'solid' })}
							/>
						</>
					)}
				</PanelBody>

				<PanelBody title={__('Secondary button', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Show secondary button', 'nextora')}
						checked={showSecondaryButton}
						onChange={(v) => setAttributes({ showSecondaryButton: v })}
					/>
					{showSecondaryButton && (
						<>
							<p className="components-base-control__label">{__('URL', 'nextora')}</p>
							<URLInput
								value={secondaryButtonUrl}
								onChange={(url) => setAttributes({ secondaryButtonUrl: url ?? '' })}
							/>
							<ToggleControl
								label={__('Open in new tab', 'nextora')}
								checked={secondaryButtonTarget}
								onChange={(v) => setAttributes({ secondaryButtonTarget: v })}
							/>
						</>
					)}
				</PanelBody>

				<PanelColorSettings
					enableAlpha
					title={__('Colors', 'nextora')}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: (v) => setAttributes({ backgroundColor: v ?? '' }),
							label: __('Background', 'nextora'),
						},
						{
							value: textColor,
							onChange: (v) => setAttributes({ textColor: v ?? '' }),
							label: __('Heading', 'nextora'),
						},
						{
							value: descriptionColor,
							onChange: (v) => setAttributes({ descriptionColor: v ?? '' }),
							label: __('Description', 'nextora'),
						},
						{
							value: eyebrowColor,
							onChange: (v) => setAttributes({ eyebrowColor: v ?? '' }),
							label: __('Eyebrow', 'nextora'),
						},
						...(showPrimaryButton
							? [
									{
										value: primaryButtonBg,
										onChange: (v) => setAttributes({ primaryButtonBg: v ?? '' }),
										label: __('Primary button background', 'nextora'),
									},
									{
										value: primaryButtonColor,
										onChange: (v) => setAttributes({ primaryButtonColor: v ?? '' }),
										label: __('Primary button text', 'nextora'),
									},
								]
							: []),
						...(showSecondaryButton
							? [
									{
										value: secondaryButtonColor,
										onChange: (v) =>
											setAttributes({ secondaryButtonColor: v ?? '' }),
										label: __('Secondary button', 'nextora'),
									},
								]
							: []),
						{
							value: imageBorderColor,
							onChange: (v) => setAttributes({ imageBorderColor: v ?? '' }),
							label: __('Image border', 'nextora'),
						},
					]}
				/>

				<PanelBody title={__('Layout', 'nextora')} initialOpen={false}>
					<TextControl
						label={__('Content max width', 'nextora')}
						value={contentMaxWidth}
						onChange={(v) => setAttributes({ contentMaxWidth: v ?? '700px' })}
						help={__('e.g. 700px, 48rem', 'nextora')}
					/>
					<RangeControl
						label={__('Content vertical offset (px)', 'nextora')}
						help={__(
							'Move eyebrow, heading, description, and buttons up (negative) or down (positive).',
							'nextora',
						)}
						value={contentOffsetY}
						onChange={(v) => setAttributes({ contentOffsetY: v ?? 0 })}
						min={-300}
						max={300}
					/>
					<SelectControl
						label={__('Heading level', 'nextora')}
						value={headingLevel}
						options={HEADING_LEVELS}
						onChange={(v) => setAttributes({ headingLevel: parseInt(v, 10) || 2 })}
					/>
				</PanelBody>

				<PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Animate on scroll', 'nextora')}
						help={__(
							'Fade gallery images and content in when they enter the viewport. Disabled when the visitor prefers reduced motion.',
							'nextora',
						)}
						checked={enableScrollAnimation !== false}
						onChange={(v) => setAttributes({ enableScrollAnimation: v })}
					/>
					{displayImages.length >= 2 && (
						<ToggleControl
							label={__('Gallery scroll animation', 'nextora')}
							help={__(
								'Advance the arc gallery with scroll while the block is in view (scroll down = next, scroll up = previous). Drag and swipe still work. Disabled when the visitor prefers reduced motion.',
								'nextora',
							)}
							checked={enableGalleryScrollAnimation !== false}
							onChange={(v) => setAttributes({ enableGalleryScrollAnimation: v })}
						/>
					)}
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div
					className="nextora-arc-gallery__stage"
					style={{ height: `${resolvedLayout.galleryHeight}px` }}
				>
					{displayImages.map((img, index) => {
						const pos = positions[index];
						if (!pos) {
							return null;
						}
						const src = resolveArcGalleryImageSrc(img, mediaMap);
						const itemStyle = {
							width: `${resolvedLayout.imageWidth}px`,
							height: `${resolvedLayout.imageHeight}px`,
							left: pos.left,
							top: pos.top,
							'--nextora-arc-rotation': `${pos.rotation}deg`,
						};
						return (
							<div
								key={`arc-${img.id}-${index}`}
								className="nextora-arc-gallery__item"
								style={itemStyle}
							>
								{src ? (
									<div
										className={[
											'nextora-arc-gallery__media',
											img.isPlaceholder ? 'nextora-arc-gallery__media--placeholder' : '',
										]
											.filter(Boolean)
											.join(' ')}
										{...(img.isPlaceholder
											? { 'aria-hidden': true }
											: { role: 'img', 'aria-label': img.alt || '' })}
										style={{
											backgroundImage: `url(${src})`,
										}}
									/>
								) : null}
							</div>
						);
					})}
				</div>

				<div
					className="nextora-arc-gallery__content"
					style={{ maxWidth: contentMaxWidth }}
				>
					<RichText
						tagName="p"
						className="nextora-arc-gallery__eyebrow"
						value={eyebrowText}
						onChange={(v) => setAttributes({ eyebrowText: v })}
						placeholder={__('Eyebrow text…', 'nextora')}
						allowedFormats={[]}
						withoutInteractiveFormatting
					/>
					<RichText
						tagName={headingTag}
						className="nextora-arc-gallery__heading"
						value={headingText}
						onChange={(v) => setAttributes({ headingText: v })}
						placeholder={__('Your heading here…', 'nextora')}
						allowedFormats={[]}
						withoutInteractiveFormatting
					/>
					<RichText
						tagName="div"
						className="nextora-arc-gallery__description"
						value={descriptionText}
						onChange={(v) => setAttributes({ descriptionText: v })}
						placeholder={__('Add a short description…', 'nextora')}
						allowedFormats={['core/bold', 'core/italic', 'core/link']}
					/>
					<div className="nextora-arc-gallery__buttons">
						{showPrimaryButton && (
							<RichText
								tagName="span"
								className={`nextora-arc-gallery__btn nextora-arc-gallery__btn--primary${
									primaryButtonStyle === 'outline' ? ' is-outline' : ''
								}`}
								value={primaryButtonText}
								onChange={(v) => setAttributes({ primaryButtonText: v })}
								placeholder={__('Donate Now', 'nextora')}
								allowedFormats={[]}
								withoutInteractiveFormatting
							/>
						)}
						{showSecondaryButton && (
							<RichText
								tagName="span"
								className="nextora-arc-gallery__btn nextora-arc-gallery__btn--link"
								value={secondaryButtonText}
								onChange={(v) => setAttributes({ secondaryButtonText: v })}
								placeholder={__('Learn More', 'nextora')}
								allowedFormats={[]}
								withoutInteractiveFormatting
							/>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
