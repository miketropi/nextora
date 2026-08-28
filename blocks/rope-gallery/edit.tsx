import { __ } from '@wordpress/i18n';
import { useState, useCallback } from '@wordpress/element';
import { useBlockProps, useInnerBlocksProps, InspectorControls, MediaUpload, MediaUploadCheck, PanelColorSettings } from '@wordpress/block-editor';
import { Button, Modal, PanelBody, RangeControl, TextControl, ToggleControl } from '@wordpress/components';
import type { CSSProperties } from 'react';
import type { RopeGalleryAttributes, RopeGalleryItem } from './types';

const ALLOWED_BLOCKS = [
	'core/heading',
	'core/paragraph',
	'core/buttons',
	'core/button',
	'core/group',
	'core/image',
	'core/spacer',
	'core/separator',
];

const ICONS = {
	pencil: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>',
	chevronUp: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
	chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
	trash: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',
	plus: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
};

function InlineSvg({ name, className }: { name: keyof typeof ICONS; className?: string }) {
	return (
		<span
			className={className}
			dangerouslySetInnerHTML={{ __html: ICONS[name] }}
			style={{ display: 'inline-flex', alignItems: 'center' }}
		/>
	);
}

interface EditProps {
	attributes: RopeGalleryAttributes;
	setAttributes: (attrs: Partial<RopeGalleryAttributes>) => void;
}

interface WPMediaSelection {
	id?: number;
	url?: string;
	alt?: string;
}

function createItemId(): string {
	return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function normalizeItems(items: unknown): RopeGalleryItem[] {
	if (!Array.isArray(items)) return [];
	return items.map((item, index) => ({
		id: typeof item?.id === 'string' && item.id !== '' ? item.id : `${index}`,
		title: typeof item?.title === 'string' ? item.title : '',
		subtitle: typeof item?.subtitle === 'string' ? item.subtitle : '',
		link: typeof item?.link === 'string' ? item.link : '',
		imageId: typeof item?.imageId === 'number' ? item.imageId : 0,
		imageUrl: typeof item?.imageUrl === 'string' ? item.imageUrl : '',
		imageAlt: typeof item?.imageAlt === 'string' ? item.imageAlt : '',
	}));
}

const EMPTY_ITEM: RopeGalleryItem = {
	id: '',
	title: '',
	subtitle: '',
	link: '',
	imageId: 0,
	imageUrl: '',
	imageAlt: '',
};

interface ItemModalProps {
	item: RopeGalleryItem;
	onSave: (item: RopeGalleryItem) => void;
	onClose: () => void;
}

function ItemModal({ item, onSave, onClose }: ItemModalProps) {
	const [edit, setEdit] = useState<RopeGalleryItem>({ ...item });

	const onSelectImage = useCallback((media: WPMediaSelection) => {
		setEdit((prev) => ({
			...prev,
			imageId: media.id ?? 0,
			imageUrl: media.url ?? '',
			imageAlt: media.alt ?? '',
		}));
	}, []);

	return (
		<Modal
			title={__('Edit gallery item', 'nextora')}
			onRequestClose={onClose}
			className="nextora-rope-gallery__item-modal"
		>
			<div className="nextora-rope-gallery__item-modal-fields">
				<TextControl
					label={__('Title', 'nextora')}
					value={edit.title}
					onChange={(v: string) => setEdit((prev) => ({ ...prev, title: v }))}
					help={__('Shown below the card image.', 'nextora')}
				/>
				<TextControl
					label={__('Subtitle', 'nextora')}
					value={edit.subtitle}
					onChange={(v: string) => setEdit((prev) => ({ ...prev, subtitle: v }))}
				/>
				<TextControl
					label={__('Link URL (optional)', 'nextora')}
					value={edit.link}
					onChange={(v: string) => setEdit((prev) => ({ ...prev, link: v }))}
					type="url"
					help={__('Opens when the card is clicked.', 'nextora')}
				/>

				<MediaUploadCheck>
					<MediaUpload
						onSelect={onSelectImage}
						allowedTypes={['image']}
						value={edit.imageId}
						render={({ open }) => (
							<div className="nextora-rope-gallery__item-modal-image">
								{edit.imageUrl ? (
									<img src={edit.imageUrl} alt={edit.imageAlt || ''} className="nextora-rope-gallery__item-modal-image-preview" />
								) : (
									<div className="nextora-rope-gallery__item-modal-image-empty">
										{__('No image — procedural card art is used.', 'nextora')}
									</div>
								)}
								<Button variant="secondary" onClick={open}>
									{edit.imageUrl ? __('Replace image', 'nextora') : __('Choose image', 'nextora')}
								</Button>
								{edit.imageUrl ? (
									<Button
										variant="tertiary"
										isDestructive
										onClick={() => setEdit((prev) => ({ ...prev, imageId: 0, imageUrl: '', imageAlt: '' }))}
									>
										{__('Remove image', 'nextora')}
									</Button>
								) : null}
							</div>
						)}
					/>
				</MediaUploadCheck>
			</div>

			<div className="nextora-rope-gallery__item-modal-actions">
				<Button variant="secondary" onClick={onClose}>
					{__('Cancel', 'nextora')}
				</Button>
				<Button variant="primary" onClick={() => onSave(edit)}>
					{__('Save item', 'nextora')}
				</Button>
			</div>
		</Modal>
	);
}

function hueForIndex(index: number): number {
	return (index * 47 + 15) % 360;
}

export default function RopeGalleryEdit({ attributes, setAttributes }: EditProps) {
	const { items, cardCount, ropeColor, ropeAccentColor, accentColor, animationEnabled, enableScrollAnimation } = attributes;

	const [editingIndex, setEditingIndex] = useState<number | null>(null);

	const blockProps = useBlockProps({
		className: 'nextora-rope-gallery--editor',
	});

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'nextora-rope-gallery__content',
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
		},
	);

	const updateItem = (index: number, item: RopeGalleryItem): void => {
		const next = [...items];
		next[index] = item;
		setAttributes({ items: next });
		setEditingIndex(null);
	};

	const removeItem = (index: number): void => {
		setAttributes({ items: items.filter((_, i) => i !== index) });
	};

	const addItem = (): void => {
		setAttributes({ items: [...items, { ...EMPTY_ITEM, id: createItemId() }] });
	};

	const moveItem = (index: number, dir: -1 | 1): void => {
		const next = [...items];
		const target = index + dir;
		if (target < 0 || target >= next.length) return;
		[next[index], next[target]] = [next[target], next[index]];
		setAttributes({ items: next });
	};

	const previewItems = items.length > 0 ? items.slice(0, 16) : [EMPTY_ITEM];

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Gallery Settings', 'nextora')} initialOpen>
					<RangeControl
						label={__('Number of cards', 'nextora')}
						help={__('Visible card slots hanging on the rope.', 'nextora')}
						value={cardCount}
						onChange={(v: number | undefined) => setAttributes({ cardCount: v ?? 8 })}
						min={3}
						max={20}
					/>
					<ToggleControl
						label={__('Physics animation', 'nextora')}
						help={__('Sway, sag, and drag momentum. Disabled automatically when the visitor prefers reduced motion.', 'nextora')}
						checked={animationEnabled}
						onChange={(v: boolean) => setAttributes({ animationEnabled: v })}
					/>
				</PanelBody>

				<PanelColorSettings
					title={__('Colors', 'nextora')}
					colorSettings={[
						{
							value: ropeColor,
							onChange: (v: string | undefined) => setAttributes({ ropeColor: v ?? '#D2CEC4' }),
							label: __('Rope color', 'nextora'),
						},
						{
							value: ropeAccentColor,
							onChange: (v: string | undefined) => setAttributes({ ropeAccentColor: v ?? '#9C978B' }),
							label: __('Rope accent color', 'nextora'),
						},
						{
							value: accentColor,
							onChange: (v: string | undefined) => setAttributes({ accentColor: v ?? '#20BF49' }),
							label: __('Paperclip color', 'nextora'),
						},
					]}
				/>

				<PanelBody title={__('Items', 'nextora')} initialOpen={false}>
					{items.length === 0 ? (
						<p className="nextora-rope-gallery__editor-empty">{__('No items yet — add your first gallery card.', 'nextora')}</p>
					) : (
						<ul className="nextora-rope-gallery__editor-list">
							{items.map((item, index) => (
								<li key={item.id || index} className="nextora-rope-gallery__editor-list-item">
									<div className="nextora-rope-gallery__editor-thumb">
										{item.imageUrl ? (
											<img src={item.imageUrl} alt="" />
										) : (
											<span
												className="nextora-rope-gallery__editor-thumb-fallback"
												style={{ '--nextora-rg-hue': hueForIndex(index) } as CSSProperties}
											/>
										)}
									</div>
									<div className="nextora-rope-gallery__editor-item-info">
										<strong>{item.title || __('Untitled', 'nextora')}</strong>
										<span>{item.subtitle || __('No subtitle', 'nextora')}</span>
									</div>
									<div className="nextora-rope-gallery__editor-item-actions">
										<Button
											icon={<InlineSvg name="chevronUp" />}
											label={__('Move up', 'nextora')}
											onClick={() => moveItem(index, -1)}
											disabled={index === 0}
										/>
										<Button
											icon={<InlineSvg name="chevronDown" />}
											label={__('Move down', 'nextora')}
											onClick={() => moveItem(index, 1)}
											disabled={index === items.length - 1}
										/>
										<Button icon={<InlineSvg name="pencil" />} label={__('Edit', 'nextora')} onClick={() => setEditingIndex(index)} />
										<Button icon={<InlineSvg name="trash" />} label={__('Remove', 'nextora')} onClick={() => removeItem(index)} isDestructive />
									</div>
								</li>
							))}
						</ul>
					)}
					<Button variant="secondary" onClick={addItem}>
						<InlineSvg name="plus" /> {__('Add item', 'nextora')}
					</Button>
				</PanelBody>

				<PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Animate on scroll', 'nextora')}
						help={__('Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.', 'nextora')}
						checked={enableScrollAnimation !== false}
						onChange={(v: boolean) => setAttributes({ enableScrollAnimation: v })}
					/>
				</PanelBody>
			</InspectorControls>

			{editingIndex !== null && items[editingIndex] ? (
				<ItemModal
					item={items[editingIndex]}
					onSave={(item) => updateItem(editingIndex, item)}
					onClose={() => setEditingIndex(null)}
				/>
			) : null}

			<div {...blockProps}>
				<div {...innerBlocksProps} />
				<div className="nextora-rope-gallery__editor-rope-area">
					<div
						className="nextora-rope-gallery__editor-rope"
						style={{ '--nextora-rg-rope': ropeColor, '--nextora-rg-rope-accent': ropeAccentColor } as CSSProperties}
						aria-hidden="true"
					/>
					<div className="nextora-rope-gallery__editor-cards">
						{previewItems.map((item, index) => (
							<div className="nextora-rope-gallery__editor-card" key={item.id || index}>
								<div className="nextora-rope-gallery__editor-card-media">
									{item.imageUrl ? (
										<img src={item.imageUrl} alt={item.imageAlt || ''} />
									) : (
										<span
											className="nextora-rope-gallery__editor-card-fallback"
											style={{ '--nextora-rg-hue': hueForIndex(index) } as CSSProperties}
										/>
									)}
								</div>
								{item.title ? <span className="nextora-rope-gallery__editor-card-title">{item.title}</span> : null}
							</div>
						))}
					</div>
					<p className="nextora-rope-gallery__editor-note">
						{__('Content blocks above — 3D rope gallery below on the front end.', 'nextora')}
					</p>
				</div>
			</div>
		</>
	);
}
