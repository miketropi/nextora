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
	Modal,
	PanelBody,
	RangeControl,
	SelectControl,
	TextControl,
	TextareaControl,
} from '@wordpress/components';
import {
	colorValueForPicker,
	getMergedPaletteEntries,
	normalizeColorForStorage,
	useThemeColorPalette,
} from '../advanced-icon/color-utils';
import type { ValueCard, ValueCardsAttributes } from './types';

interface EditProps {
	attributes: ValueCardsAttributes;
	setAttributes: (attrs: Partial<ValueCardsAttributes>) => void;
}

function isEmptyColor(value: string | undefined): boolean {
	return !value || value === 'currentColor';
}

function createItemId(): string {
	return 'vc-' + Math.random().toString(36).substring(2, 11);
}

/** Resolve a stored color (slug or hex) to a CSS value for inline styles. */
function resolveColorForCSS(value: string): string {
	if (!value || value === 'currentColor') return '';
	if (/^#[0-9a-fA-F]{3,8}$/.test(value)) return value;
	if (/^[a-z0-9-]+$/.test(value)) return `var(--wp--preset--color--${value})`;
	return value;
}

const DEFAULT_CARD: ValueCard = {
	id: '',
	title: '',
	description: '',
	mediaType: 'image',
	mediaId: 0,
	mediaUrl: '',
	videoPosterId: 0,
	videoPosterUrl: '',
	rotation: 0,
};

/* ------------------------------------------------------------------ */
/* CardMediaPreview — shared media thumbnail for the card editor      */
/* ------------------------------------------------------------------ */

interface CardMediaPreviewProps {
	mediaUrl: string;
	mediaType: 'image' | 'video';
	/** When true, renders a compact poster-style preview (16:9). */
	compact?: boolean;
}

function CardMediaPreview({ mediaUrl, mediaType, compact }: CardMediaPreviewProps) {
	const sizeClass = compact
		? 'nextora-value-cards__item-modal-media-preview nextora-value-cards__item-modal-media-preview--small'
		: 'nextora-value-cards__item-modal-media-preview';

	if (!mediaUrl) {
		return (
			<div className="nextora-value-cards__item-modal-media-placeholder">
				{mediaType === 'video'
					? __('No video selected', 'nextora')
					: __('No image selected', 'nextora')}
			</div>
		);
	}

	if (mediaType === 'video') {
		return (
			<video
				className={sizeClass}
				src={mediaUrl}
				muted
				autoPlay
				loop
				playsInline
			/>
		);
	}

	return <img className={sizeClass} src={mediaUrl} alt="" />;
}

/* ------------------------------------------------------------------ */
/* Inline SVG icons for inspector buttons                             */
/* ------------------------------------------------------------------ */

const IconPencil = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
		<path d="m15 5 4 4" />
	</svg>
);

const IconTrash = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d="M3 6h18" />
		<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
		<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
		<line x1="10" y1="11" x2="10" y2="17" />
		<line x1="14" y1="11" x2="14" y2="17" />
	</svg>
);

const IconPlus = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<line x1="12" y1="5" x2="12" y2="19" />
		<line x1="5" y1="12" x2="19" y2="12" />
	</svg>
);

const IconChevronUp = () => (
	<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<polyline points="18 15 12 9 6 15" />
	</svg>
);

const IconChevronDown = () => (
	<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<polyline points="6 9 12 15 18 9" />
	</svg>
);

/* ------------------------------------------------------------------ */
/* Main editor component                                              */
/* ------------------------------------------------------------------ */

export default function ValueCardsEdit({ attributes, setAttributes }: EditProps) {
	const [editingCardId, setEditingCardId] = useState<string | null>(null);
	const [panelStates, setPanelStates] = useState<Record<string, boolean>>({
		cards: true,
		layout: false,
		interaction: false,
	});

	const togglePanel = (panel: string) => (next?: boolean) => {
		setPanelStates((prev) => ({
			...prev,
			[panel]: typeof next === 'boolean' ? next : !prev[panel],
		}));
	};

	const cards: ValueCard[] = useMemo(() => {
		if (!Array.isArray(attributes.cards) || attributes.cards.length === 0) {
			return [];
		}
		return attributes.cards.map((card, index) => ({
			...DEFAULT_CARD,
			...card,
			id: card.id || `vc-${index}`,
		}));
	}, [attributes.cards]);

	const editingCard = editingCardId ? cards.find((c) => c.id === editingCardId) : undefined;

	const colorPalette = useThemeColorPalette();
	const lookupPalette = useMemo(() => getMergedPaletteEntries(colorPalette), [colorPalette]);

	const {
		maxTilt = 12,
		hoverScale = 1.06,
		cardMinWidth = 180,
		cardMaxWidth = 240,
		cardBorderRadius = 20,
		perspective = 1000,
		gap = 20,
		cardBackgroundColor = '',
		cardTitleColor = '',
		cardDescriptionColor = '',
		cardBorderColor = '',
	} = attributes;

	const setThemeColor = (key: keyof ValueCardsAttributes, value: string | undefined): void => {
		setAttributes({ [key]: normalizeColorForStorage(value, lookupPalette) } as Partial<ValueCardsAttributes>);
	};

	const colorSettings = useMemo(
		() => [
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
				value: colorValueForPicker(cardBorderColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('cardBorderColor', v),
				label: __('Card border color', 'nextora'),
			},
		],
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[cardBackgroundColor, cardTitleColor, cardDescriptionColor, cardBorderColor, colorPalette, lookupPalette],
	);

	const patchCard = (id: string, patch: Partial<ValueCard>): void => {
		setAttributes({
			cards: cards.map((card) => (card.id === id ? { ...card, ...patch } : card)),
		});
	};

	const addCard = (): void => {
		const id = createItemId();
		setAttributes({
			cards: [...cards, { ...DEFAULT_CARD, id }],
		});
		setEditingCardId(id);
	};

	const removeCard = (id: string): void => {
		if (cards.length <= 1) return;
		setAttributes({ cards: cards.filter((card) => card.id !== id) });
		if (editingCardId === id) setEditingCardId(null);
	};

	const moveCard = (id: string, delta: number): void => {
		const index = cards.findIndex((card) => card.id === id);
		const target = index + delta;
		if (index < 0 || target < 0 || target >= cards.length) return;
		const next = [...cards];
		const tmp = next[index];
		next[index] = next[target];
		next[target] = tmp;
		setAttributes({ cards: next });
	};

	// Build CSS custom properties for the block wrapper — resolve slugs to CSS vars
	const styleVars: Record<string, string> = {};
	const resolvedBg = resolveColorForCSS(cardBackgroundColor);
	const resolvedTitle = resolveColorForCSS(cardTitleColor);
	const resolvedDesc = resolveColorForCSS(cardDescriptionColor);
	const resolvedBorder = resolveColorForCSS(cardBorderColor);
	if (resolvedBg) styleVars['--nextora-value-card-bg'] = resolvedBg;
	if (resolvedTitle) styleVars['--nextora-value-card-title-color'] = resolvedTitle;
	if (resolvedDesc) styleVars['--nextora-value-card-desc-color'] = resolvedDesc;
	if (resolvedBorder) styleVars['--nextora-value-card-border-color'] = resolvedBorder;

	const blockProps = useBlockProps({
		className: 'nextora-value-cards nextora-value-cards--editor',
		style: {
			...styleVars,
			'--nextora-value-cards-perspective': `${perspective}px`,
			'--nextora-value-cards-gap': `${gap}px`,
			'--nextora-value-cards-min-width': `${cardMinWidth}px`,
			'--nextora-value-cards-max-width': `${cardMaxWidth}px`,
			'--nextora-value-cards-radius': `${cardBorderRadius}px`,
			'--nextora-value-cards-max-tilt': `${maxTilt}`,
			'--nextora-value-cards-hover-scale': `${hoverScale}`,
		} as CSSProperties,
	});

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Cards', 'nextora')}
					opened={panelStates.cards}
					onToggle={togglePanel('cards')}
				>
					<div className="nextora-value-cards__inspector-list">
						{cards.map((card, index) => (
							<div key={card.id} className="nextora-value-cards__inspector-pill">
								<button
									type="button"
									className="nextora-value-cards__inspector-pill-label"
									onClick={() => setEditingCardId(card.id)}
									title={card.title || sprintf(__('Card %d', 'nextora'), index + 1)}
								>
									<span className="nextora-value-cards__inspector-pill-title">
										{card.title || sprintf(__('Card %d', 'nextora'), index + 1)}
									</span>
									<span className="nextora-value-cards__inspector-pill-badge">
										{card.rotation > 0 ? '+' : ''}{card.rotation}°
									</span>
								</button>
								<div className="nextora-value-cards__inspector-pill-actions">
									<Button
										icon={<IconChevronUp />}
										label={__('Move up', 'nextora')}
										size="compact"
										disabled={index === 0}
										onClick={() => moveCard(card.id, -1)}
									/>
									<Button
										icon={<IconChevronDown />}
										label={__('Move down', 'nextora')}
										size="compact"
										disabled={index >= cards.length - 1}
										onClick={() => moveCard(card.id, 1)}
									/>
									<Button
										icon={<IconPencil />}
										label={__('Edit card', 'nextora')}
										size="compact"
										onClick={() => setEditingCardId(card.id)}
									/>
									<Button
										icon={<IconTrash />}
										label={__('Delete card', 'nextora')}
										size="compact"
										isDestructive
										disabled={cards.length <= 1}
										onClick={() => removeCard(card.id)}
									/>
								</div>
							</div>
						))}
					</div>
					<Button
						icon={<IconPlus />}
						variant="secondary"
						className="nextora-value-cards__inspector-add"
						onClick={addCard}
					>
						{__('Add card', 'nextora')}
					</Button>
				</PanelBody>

				<PanelBody
					title={__('Layout', 'nextora')}
					opened={panelStates.layout}
					onToggle={togglePanel('layout')}
				>
					<RangeControl
						label={__('Perspective (px)', 'nextora')}
						help={__('Higher values create a more subtle 3D effect.', 'nextora')}
						value={perspective}
						onChange={(v) => setAttributes({ perspective: v ?? 1000 })}
						min={400}
						max={2000}
					/>
					<RangeControl
						label={__('Gap between cards (px)', 'nextora')}
						value={gap}
						onChange={(v) => setAttributes({ gap: v ?? 20 })}
						min={0}
						max={60}
					/>
					<RangeControl
						label={__('Card min width (px)', 'nextora')}
						value={cardMinWidth}
						onChange={(v) => setAttributes({ cardMinWidth: v ?? 180 })}
						min={120}
						max={400}
					/>
					<RangeControl
						label={__('Card max width (px)', 'nextora')}
						value={cardMaxWidth}
						onChange={(v) => setAttributes({ cardMaxWidth: v ?? 240 })}
						min={160}
						max={600}
					/>
					<RangeControl
						label={__('Card border radius (px)', 'nextora')}
						value={cardBorderRadius}
						onChange={(v) => setAttributes({ cardBorderRadius: v ?? 20 })}
						min={0}
						max={40}
					/>
				</PanelBody>

				<PanelBody
					title={__('Interaction', 'nextora')}
					opened={panelStates.interaction}
					onToggle={togglePanel('interaction')}
				>
					<RangeControl
						label={__('Max tilt (degrees)', 'nextora')}
						help={__('How far the card tilts on hover.', 'nextora')}
						value={maxTilt}
						onChange={(v) => setAttributes({ maxTilt: v ?? 12 })}
						min={2}
						max={30}
					/>
					<RangeControl
						label={__('Hover scale', 'nextora')}
						help={__('Scale multiplier when hovering over a card.', 'nextora')}
						value={hoverScale}
						onChange={(v) => setAttributes({ hoverScale: v ?? 1.06 })}
						min={1}
						max={1.2}
						step={0.01}
					/>
				</PanelBody>

				<PanelColorSettings
					title={__('Colors', 'nextora')}
					colors={colorPalette}
					colorSettings={colorSettings}
				/>
			</InspectorControls>

			{editingCard ? (
				<Modal
					className="nextora-value-cards__item-modal"
					size="large"
					title={
						editingCard.title
							? sprintf(__('Edit card: %s', 'nextora'), editingCard.title)
							: __('Edit value card', 'nextora')
					}
					onRequestClose={() => setEditingCardId(null)}
					shouldCloseOnClickOutside={false}
					headerActions={
						<div className="nextora-value-cards__item-modal-header-actions">
							<Button
								size="compact"
								variant="primary"
								onClick={() => setEditingCardId(null)}
							>
								{__('Done', 'nextora')}
							</Button>
						</div>
					}
				>
					<div className="nextora-value-cards__item-modal-form">
						<div className="nextora-value-cards__item-modal-form-image">
							<SelectControl
								label={__('Media type', 'nextora')}
								value={editingCard.mediaType}
								options={[
									{ label: __('Image', 'nextora'), value: 'image' },
									{ label: __('Video', 'nextora'), value: 'video' },
								]}
								onChange={(v) =>
									patchCard(editingCard.id, {
										mediaType: v as 'image' | 'video',
									})
								}
							/>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media: { id: number; url: string }) =>
										patchCard(editingCard.id, {
											mediaId: media.id,
											mediaUrl: media.url,
										})
									}
									allowedTypes={editingCard.mediaType === 'video' ? ['video'] : ['image']}
									value={editingCard.mediaId}
									render={({ open }) => (
										<div className="nextora-value-cards__item-modal-media">
											<CardMediaPreview
												mediaUrl={editingCard.mediaUrl}
												mediaType={editingCard.mediaType}
											/>
											<Button variant="secondary" onClick={open}>
												{editingCard.mediaUrl
													? sprintf(
															/* translators: %s: media type (image/video) */
															__('Replace %s', 'nextora'),
															editingCard.mediaType === 'video' ? __('video', 'nextora') : __('image', 'nextora'),
														)
													: sprintf(
															/* translators: %s: media type (image/video) */
															__('Select %s', 'nextora'),
															editingCard.mediaType === 'video' ? __('video', 'nextora') : __('image', 'nextora'),
														)}
											</Button>
											{editingCard.mediaUrl && (
												<Button
													variant="tertiary"
													isDestructive
													onClick={() =>
														patchCard(editingCard.id, {
															mediaId: 0,
															mediaUrl: '',
														})
													}
												>
													{editingCard.mediaType === 'video'
														? __('Remove video', 'nextora')
														: __('Remove image', 'nextora')}
												</Button>
											)}
										</div>
									)}
								/>
							</MediaUploadCheck>
							{editingCard.mediaType === 'video' && (
								<MediaUploadCheck>
									<MediaUpload
										onSelect={(media: { id: number; url: string }) =>
											patchCard(editingCard.id, {
												videoPosterId: media.id,
												videoPosterUrl: media.url,
											})
										}
										allowedTypes={['image']}
										value={editingCard.videoPosterId}
										render={({ open }) => (
											<div className="nextora-value-cards__item-modal-poster">
												<p className="nextora-value-cards__item-modal-poster-label">
													{__('Video poster image (optional)', 'nextora')}
												</p>
												{editingCard.videoPosterUrl ? (
													<CardMediaPreview
														mediaUrl={editingCard.videoPosterUrl}
														mediaType="image"
														compact
													/>
												) : null}
												<div className="nextora-value-cards__item-modal-poster-actions">
													<Button variant="secondary" onClick={open} size="compact">
														{editingCard.videoPosterUrl
															? __('Replace poster', 'nextora')
															: __('Select poster', 'nextora')}
													</Button>
													{editingCard.videoPosterUrl && (
														<Button
															variant="tertiary"
															isDestructive
															size="compact"
															onClick={() =>
																patchCard(editingCard.id, {
																	videoPosterId: 0,
																	videoPosterUrl: '',
																})
															}
														>
															{__('Remove poster', 'nextora')}
														</Button>
													)}
												</div>
											</div>
										)}
									/>
								</MediaUploadCheck>
							)}
						</div>
						<div className="nextora-value-cards__item-modal-form-fields">
							<TextControl
								label={__('Title', 'nextora')}
								value={editingCard.title}
								onChange={(title) => patchCard(editingCard.id, { title })}
							/>
							<TextareaControl
								label={__('Description', 'nextora')}
								value={editingCard.description}
								onChange={(description) => patchCard(editingCard.id, { description })}
							/>
							<RangeControl
								label={__('Default rotation (degrees)', 'nextora')}
								help={__('Starting rotation of the card before hover.', 'nextora')}
								value={editingCard.rotation}
								onChange={(v) => patchCard(editingCard.id, { rotation: v ?? 0 })}
								min={-10}
								max={10}
							/>
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
							disabled={cards.length <= 1}
							onClick={() => removeCard(editingCard.id)}
						>
							{__('Delete card', 'nextora')}
						</Button>
					</div>
				</Modal>
			) : null}

			<div {...blockProps}>
				<div className="nextora-value-cards__inner">
					<div className="nextora-value-cards__deck">
						{cards.map((card) => (
							<article
								key={card.id}
								className="nextora-value-cards__card nextora-value-cards__card--editable"
								style={{
									transform: `rotateZ(${card.rotation}deg)`,
								}}
								data-rotation={card.rotation}
							>
								<button
									type="button"
									className="nextora-value-cards__card-edit"
									onClick={() => setEditingCardId(card.id)}
								>
									{__('Edit card', 'nextora')}
								</button>
								<div className="nextora-value-cards__media">
									{card.mediaUrl ? (
										card.mediaType === 'video' ? (
											<video
												src={card.mediaUrl}
												muted
												autoPlay
												loop
												playsInline
												poster={card.videoPosterUrl || undefined}
											/>
										) : (
											<img src={card.mediaUrl} alt="" />
										)
									) : (
										<div className="nextora-value-cards__media-placeholder">
											{card.mediaType === 'video'
												? __('No video', 'nextora')
												: __('No image', 'nextora')}
										</div>
									)}
								</div>
								<div className="nextora-value-cards__content">
									<h3 className="nextora-value-cards__title">
										{card.title || __('Card title', 'nextora')}
									</h3>
									<p className="nextora-value-cards__description">
										{card.description || __('Card description…', 'nextora')}
									</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
