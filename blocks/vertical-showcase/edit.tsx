import { __ } from '@wordpress/i18n';
import { useState, useCallback } from '@wordpress/element';
import {
	MediaUpload,
	MediaUploadCheck,
	PanelColorSettings,
	InspectorControls,
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
import {
	colorValueForPicker,
	getMergedPaletteEntries,
	normalizeColorForStorage,
	useThemeColorPalette,
} from '../advanced-icon/color-utils';
import type { VerticalShowcaseAttributes, VerticalShowcaseItem } from './types';

const FONT_SIZE_OPTIONS = [
	{ label: __('Small', 'nextora'), value: 'small' },
	{ label: __('Base', 'nextora'), value: 'base' },
	{ label: __('Medium', 'nextora'), value: 'medium' },
	{ label: __('Medium Plus', 'nextora'), value: 'medium-plus' },
	{ label: __('Large', 'nextora'), value: 'large' },
	{ label: __('Extra Large', 'nextora'), value: 'x-large' },
	{ label: __('Extra Extra Large', 'nextora'), value: 'xx-large' },
];

const ICONS = {
	pencil: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>',
	up: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
	down: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
	trash: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6"/><path d="M8 6V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2"/></svg>',
	plus: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
};

function InlineSvg({ name }: { name: keyof typeof ICONS }) {
	return <span dangerouslySetInnerHTML={{ __html: ICONS[name] }} aria-hidden="true" />;
}

function createItemId(): string {
	return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

function normalizeItems(items: unknown): VerticalShowcaseItem[] {
	if (!Array.isArray(items)) return [];
	return items.map((item, index) => ({
		id: typeof item?.id === 'string' ? item.id : `${index}`,
		title: typeof item?.title === 'string' ? item.title : '',
		description: typeof item?.description === 'string' ? item.description : '',
		imageId: typeof item?.imageId === 'number' ? item.imageId : 0,
		imageUrl: typeof item?.imageUrl === 'string' ? item.imageUrl : '',
		imageAlt: typeof item?.imageAlt === 'string' ? item.imageAlt : '',
		showViewMore: typeof item?.showViewMore === 'boolean' ? item.showViewMore : true,
		link: typeof item?.link === 'string' && item.link ? item.link : '#',
		viewMoreText: typeof item?.viewMoreText === 'string' && item.viewMoreText ? item.viewMoreText : __('View More', 'nextora'),
	}));
}

const EMPTY_ITEM: VerticalShowcaseItem = {
	id: '', title: '', description: '', imageId: 0, imageUrl: '', imageAlt: '', showViewMore: true, viewMoreText: __('View More', 'nextora'), link: '#',
};

interface MediaSelection { id?: number; url?: string; alt?: string; }

function ItemModal({ item, onSave, onClose }: {
	item: VerticalShowcaseItem;
	onSave: (item: VerticalShowcaseItem) => void;
	onClose: () => void;
}) {
	const [draft, setDraft] = useState({ ...item });
	const update = (patch: Partial<VerticalShowcaseItem>) => setDraft((current) => ({ ...current, ...patch }));

	const onSelectImage = useCallback((media: MediaSelection) => {
		setDraft((current) => ({ ...current, imageId: media.id ?? 0, imageUrl: media.url ?? '', imageAlt: media.alt ?? '' }));
	}, []);

	return (
		<Modal title={__('Edit showcase item', 'nextora')} onRequestClose={onClose} className="nextora-vertical-showcase-modal">
			<div className="nextora-vertical-showcase-modal__content">
				<div className="nextora-vertical-showcase-modal__image-col">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectImage}
							allowedTypes={['image']}
							value={draft.imageId > 0 ? draft.imageId : undefined}
							render={({ open }) => (
								<div className="nextora-vertical-showcase-modal__media">
									{draft.imageUrl ? <img src={draft.imageUrl} alt="" className="nextora-vertical-showcase-modal__preview" /> : <button type="button" className="nextora-vertical-showcase-modal__placeholder" onClick={open}>{__('Choose image', 'nextora')}</button>}
									<div className="nextora-vertical-showcase-modal__media-actions">
										<Button variant="secondary" size="small" onClick={open}>{draft.imageUrl ? __('Replace image', 'nextora') : __('Choose image', 'nextora')}</Button>
										{draft.imageUrl && <Button variant="link" isDestructive size="small" onClick={() => update({ imageId: 0, imageUrl: '', imageAlt: '' })}>{__('Remove', 'nextora')}</Button>}
									</div>
								</div>
							)}
						/>
					</MediaUploadCheck>
					{draft.imageUrl && <TextControl label={__('Image alt text', 'nextora')} value={draft.imageAlt} onChange={(imageAlt) => update({ imageAlt })} />}
				</div>
				<div className="nextora-vertical-showcase-modal__fields-col">
					<TextControl label={__('Title', 'nextora')} value={draft.title} onChange={(title) => update({ title })} />
					<TextareaControl label={__('Description', 'nextora')} value={draft.description} onChange={(description) => update({ description })} rows={4} />
					<ToggleControl label={__('Show View More link', 'nextora')} checked={draft.showViewMore} onChange={(showViewMore) => update({ showViewMore })} />
					{draft.showViewMore && <TextControl label={__('View More text', 'nextora')} value={draft.viewMoreText} onChange={(viewMoreText) => update({ viewMoreText })} placeholder={__('View More', 'nextora')} />}
					{draft.showViewMore && <TextControl label={__('View More URL', 'nextora')} value={draft.link} onChange={(link) => update({ link: link || '#' })} placeholder="#" />}
				</div>
			</div>
			<div className="nextora-vertical-showcase-modal__actions">
				<Button variant="primary" onClick={() => { onSave({ ...draft, id: draft.id || createItemId() }); onClose(); }}>{__('Save', 'nextora')}</Button>
				<Button variant="secondary" onClick={onClose}>{__('Cancel', 'nextora')}</Button>
			</div>
		</Modal>
	);
}

export default function VerticalShowcaseEdit({ attributes, setAttributes }: {
	attributes: VerticalShowcaseAttributes;
	setAttributes: (attrs: Partial<VerticalShowcaseAttributes>) => void;
}) {
	const [editingItemId, setEditingItemId] = useState<string | null>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const items = normalizeItems(attributes.items);
	const palette = useThemeColorPalette();
	const lookupPalette = getMergedPaletteEntries(palette);
	const titleSize = attributes.titleSize || 'medium-plus';
	const descriptionSize = attributes.descriptionSize || 'small';
	const autoplayDuration = attributes.autoplayDuration || 5000;
	const showViewMoreLinks = attributes.showViewMore !== false;

	const setColor = (key: keyof VerticalShowcaseAttributes, value: string | undefined) => {
		setAttributes({ [key]: normalizeColorForStorage(value, lookupPalette) } as Partial<VerticalShowcaseAttributes>);
	};
	const editorColor = (value: string, fallback: string) => {
		if (!value) return fallback;
		const entry = lookupPalette.find((candidate) => candidate.slug === value);
		return entry?.color || (value.startsWith('#') ? value : `var(--wp--preset--color--${value})`);
	};
	const titleColor = editorColor(attributes.titleColor, 'var(--wp--preset--color--contrast)');
	const descriptionColor = editorColor(attributes.descriptionColor, 'var(--wp--preset--color--paragraph)');
	const numberColor = editorColor(attributes.numberColor, 'var(--wp--preset--color--paragraph)');
	const indicatorColor = editorColor(attributes.activeIndicatorColor, 'var(--wp--preset--color--primary)');
	const inactiveTitleColor = editorColor(attributes.inactiveTitleColor, 'var(--wp--preset--color--paragraph)');
	const buttonColor = editorColor(attributes.buttonColor, 'var(--wp--preset--color--contrast)');

	const addItem = () => setAttributes({ items: [...items, { ...EMPTY_ITEM, id: createItemId(), title: __('New item', 'nextora') }] });
	const updateItem = (updated: VerticalShowcaseItem) => setAttributes({ items: items.map((item) => item.id === updated.id ? updated : item) });
	const removeItem = (id: string) => { if (items.length > 1) setAttributes({ items: items.filter((item) => item.id !== id) }); };
	const moveItem = (index: number, direction: 'up' | 'down') => {
		const nextIndex = direction === 'up' ? index - 1 : index + 1;
		if (nextIndex < 0 || nextIndex >= items.length) return;
		const nextItems = [...items];
		[nextItems[index], nextItems[nextIndex]] = [nextItems[nextIndex], nextItems[index]];
		setAttributes({ items: nextItems });
	};

	const blockProps = useBlockProps({
		className: 'wp-block-nextora-vertical-showcase nextora-vertical-showcase--editor',
		style: {
			'--nextora-vs-title-size': `var(--wp--preset--font-size--${titleSize})`,
			'--nextora-vs-description-size': `var(--wp--preset--font-size--${descriptionSize})`,
			'--nextora-vs-title-color': titleColor,
			'--nextora-vs-inactive-title-color': inactiveTitleColor,
			'--nextora-vs-description-color': descriptionColor,
			'--nextora-vs-number-color': numberColor,
			'--nextora-vs-active-indicator': indicatorColor,
			'--nextora-vs-button-color': buttonColor,
			'--nextora-vs-autoplay-duration': `${autoplayDuration}ms`,
		} as React.CSSProperties,
	});

	const editingItem = editingItemId ? items.find((item) => item.id === editingItemId) : undefined;
	const activeItemIndex = Math.min(activeIndex, Math.max(items.length - 1, 0));

	return <>
		<InspectorControls>
			<PanelBody title={__('Items', 'nextora')} initialOpen>
				{items.map((item, index) => <div className="nextora-vertical-showcase__editor-row" key={item.id}>
					<div className="nextora-vertical-showcase__editor-label">{item.imageUrl && <img src={item.imageUrl} alt="" />}{item.title || __('(empty)', 'nextora')}</div>
					<Button icon={<InlineSvg name="pencil" />} label={__('Edit', 'nextora')} onClick={() => setEditingItemId(item.id)} isSmall />
					<Button icon={<InlineSvg name="up" />} label={__('Move up', 'nextora')} onClick={() => moveItem(index, 'up')} disabled={index === 0} isSmall />
					<Button icon={<InlineSvg name="down" />} label={__('Move down', 'nextora')} onClick={() => moveItem(index, 'down')} disabled={index === items.length - 1} isSmall />
					<Button icon={<InlineSvg name="trash" />} label={__('Remove', 'nextora')} onClick={() => removeItem(item.id)} isSmall isDestructive />
				</div>)}
				<Button variant="secondary" icon={<InlineSvg name="plus" />} onClick={addItem} style={{ width: '100%', justifyContent: 'center' }}>{__('Add item', 'nextora')}</Button>
			</PanelBody>
			<PanelBody title={__('Settings', 'nextora')} initialOpen={false}>
				<ToggleControl label={__('Show View More links', 'nextora')} checked={attributes.showViewMore !== false} onChange={(showViewMore) => setAttributes({ showViewMore })} help={__('Display the optional link configured on each item.', 'nextora')} />
				<ToggleControl label={__('Show arrows', 'nextora')} checked={attributes.showArrows !== false} onChange={(showArrows) => setAttributes({ showArrows })} help={__('Display previous and next controls on the image.', 'nextora')} />
			</PanelBody>
			<PanelBody title={__('Autoplay', 'nextora')} initialOpen={false}>
				<ToggleControl label={__('Enable autoplay', 'nextora')} checked={attributes.autoplay} onChange={(autoplay) => setAttributes({ autoplay })} />
				{attributes.autoplay && <RangeControl label={__('Duration (ms)', 'nextora')} value={autoplayDuration} onChange={(value) => setAttributes({ autoplayDuration: value || 5000 })} min={2000} max={15000} step={250} />}
			</PanelBody>
			<PanelBody title={__('Typography', 'nextora')} initialOpen={false}>
				<SelectControl label={__('Item title font size', 'nextora')} value={titleSize} options={FONT_SIZE_OPTIONS} onChange={(value) => setAttributes({ titleSize: value })} />
				<SelectControl label={__('Description font size', 'nextora')} value={descriptionSize} options={FONT_SIZE_OPTIONS} onChange={(value) => setAttributes({ descriptionSize: value })} />
			</PanelBody>
			<PanelColorSettings enableAlpha title={__('Colors', 'nextora')} colors={palette} colorSettings={[
				{ value: colorValueForPicker(attributes.titleColor, palette, lookupPalette), onChange: (value) => setColor('titleColor', value), label: __('Title color', 'nextora') },
				{ value: colorValueForPicker(attributes.inactiveTitleColor, palette, lookupPalette), onChange: (value) => setColor('inactiveTitleColor', value), label: __('Inactive title color', 'nextora') },
				{ value: colorValueForPicker(attributes.descriptionColor, palette, lookupPalette), onChange: (value) => setColor('descriptionColor', value), label: __('Description color', 'nextora') },
				{ value: colorValueForPicker(attributes.numberColor, palette, lookupPalette), onChange: (value) => setColor('numberColor', value), label: __('Item number color', 'nextora') },
				{ value: colorValueForPicker(attributes.activeIndicatorColor, palette, lookupPalette), onChange: (value) => setColor('activeIndicatorColor', value), label: __('Active indicator color', 'nextora') },
				{ value: colorValueForPicker(attributes.buttonColor, palette, lookupPalette), onChange: (value) => setColor('buttonColor', value), label: __('View More color', 'nextora') },
			]} />
			<PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
				<ToggleControl label={__('Animate on scroll', 'nextora')} checked={attributes.enableScrollAnimation} onChange={(enableScrollAnimation) => setAttributes({ enableScrollAnimation })} help={__('Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.', 'nextora')} />
			</PanelBody>
		</InspectorControls>
		<div {...blockProps}><div className="nextora-vertical-showcase__grid"><div className="nextora-vertical-showcase__list">
			{items.map((item, index) => {
				const showItemLink = showViewMoreLinks && item.showViewMore !== false;
				const hasDetails = Boolean(item.description || showItemLink);
				return <button type="button" className={`nextora-vertical-showcase__item ${index === activeItemIndex ? 'nextora-vertical-showcase__item--active' : ''}`} key={item.id} onClick={() => setActiveIndex(index)} aria-pressed={index === activeItemIndex}>
						<span className="nextora-vertical-showcase__item-number">/{String(index + 1).padStart(2, '0')}</span><span className="nextora-vertical-showcase__item-body"><h4 className="nextora-vertical-showcase__item-title">{item.title || __('Untitled', 'nextora')}</h4>{hasDetails && <span className="nextora-vertical-showcase__item-details" aria-hidden={index === activeItemIndex ? 'false' : 'true'}>{index === activeItemIndex && item.description && <span className="nextora-vertical-showcase__item-description">{item.description}</span>}{index === activeItemIndex && showItemLink && <span className="nextora-vertical-showcase__view-more" aria-label={item.link || '#'}>{item.viewMoreText || __('View More', 'nextora')}</span>}</span>}</span>
				</button>;
			})}
		</div><div className="nextora-vertical-showcase__gallery"><div className="nextora-vertical-showcase__frame">
			{items.map((item, index) => item.imageUrl && <div className={`nextora-vertical-showcase__image-layer ${index === activeItemIndex ? 'nextora-vertical-showcase__image-layer--active' : ''}`} key={item.id}><img src={item.imageUrl} alt={item.imageAlt || item.title} className="nextora-vertical-showcase__image" /></div>)}
		</div></div></div></div>
		{editingItem && <ItemModal item={editingItem} onSave={updateItem} onClose={() => setEditingItemId(null)} />}
	</>;
}
