import { __, sprintf } from '@wordpress/i18n';
import { useState, useCallback } from '@wordpress/element';
import {
  useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck, PanelColorSettings,
} from '@wordpress/block-editor';
import {
  Button, Modal, PanelBody, RangeControl, SelectControl, TextControl,
  TextareaControl, ToggleControl,
} from '@wordpress/components';
import {
  colorValueForPicker, getMergedPaletteEntries, normalizeColorForStorage,
  useThemeColorPalette,
} from '../advanced-icon/color-utils';
import type { StackingCardItem, StackingCardsAttributes } from './types';

const SIZES = [
  ['Small', 'small'], ['Base', 'base'], ['Medium', 'medium'], ['Medium Plus', 'medium-plus'],
  ['Large', 'large'], ['Extra Large', 'x-large'], ['Extra Extra Large', 'xx-large'],
].map(([label, value]) => ({ label: __(label, 'nextora'), value }));
const WEIGHTS = ['400', '500', '600', '700', '800'].map((value) => ({ label: value, value }));
const ICONS = {
  pencil: '<svg viewBox="0 0 24 24"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>',
  up: '<svg viewBox="0 0 24 24"><path d="m18 15-6-6-6 6"/></svg>',
  down: '<svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>',
  trash: '<svg viewBox="0 0 24 24"><path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-2-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M5 12h14M12 5v14"/></svg>',
};

function Icon({ name }: { name: keyof typeof ICONS }) {
  return <span className="nextora-stacking-cards__icon" dangerouslySetInnerHTML={{ __html: ICONS[name] }} />;
}
function createId(): string { return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`; }
function normalizeCards(value: unknown): StackingCardItem[] {
  if (!Array.isArray(value)) return [];
  return value.map((item, index) => ({
    id: typeof item?.id === 'string' ? item.id : `${index}`,
    heading: typeof item?.heading === 'string' ? item.heading : '',
    description: typeof item?.description === 'string' ? item.description : '',
    linkText: typeof item?.linkText === 'string' ? item.linkText : 'Read more',
    linkUrl: typeof item?.linkUrl === 'string' ? item.linkUrl : '',
    imageId: typeof item?.imageId === 'number' ? item.imageId : 0,
    imageUrl: typeof item?.imageUrl === 'string' ? item.imageUrl : '',
    imageAlt: typeof item?.imageAlt === 'string' ? item.imageAlt : '',
    backgroundColor: typeof item?.backgroundColor === 'string' ? item.backgroundColor : '',
    headingColor: typeof item?.headingColor === 'string' ? item.headingColor : '',
    descriptionColor: typeof item?.descriptionColor === 'string' ? item.descriptionColor : '',
    linkColor: typeof item?.linkColor === 'string' ? item.linkColor : '',
  }));
}
const EMPTY: StackingCardItem = { id: '', heading: '', description: '', linkText: 'Read more', linkUrl: '', imageId: 0, imageUrl: '', imageAlt: '', backgroundColor: '', headingColor: '', descriptionColor: '', linkColor: '' };

function ItemModal({ item, onSave, onClose }: { item: StackingCardItem; onSave: (item: StackingCardItem) => void; onClose: () => void }) {
  const [edit, setEdit] = useState({ ...item });
  const palette = useThemeColorPalette();
  const lookup = getMergedPaletteEntries(palette);
  const set = (key: keyof StackingCardItem, value: string | number) => setEdit((current) => ({ ...current, [key]: value }));
  const selectImage = useCallback((media: { id?: number; url?: string; alt?: string }) => {
    setEdit((current) => ({ ...current, imageId: media.id ?? 0, imageUrl: media.url ?? '', imageAlt: media.alt ?? '' }));
  }, []);
  return <Modal title={__('Edit card', 'nextora')} onRequestClose={onClose} className="nextora-stacking-cards-modal">
    <div className="nextora-stacking-cards-modal__content">
      <div className="nextora-stacking-cards-modal__image-col">
        <MediaUploadCheck><MediaUpload allowedTypes={['image']} value={edit.imageId || undefined} onSelect={selectImage} render={({ open }) => <div className="nextora-stacking-cards-modal__media">
          {edit.imageUrl ? <img src={edit.imageUrl} alt="" className="nextora-stacking-cards-modal__media-preview" /> : <button type="button" className="nextora-stacking-cards-modal__media-placeholder" onClick={open}>{__('Choose image', 'nextora')}</button>}
          <div className="nextora-stacking-cards-modal__media-actions"><Button variant="secondary" size="small" onClick={open}>{edit.imageUrl ? __('Replace image', 'nextora') : __('Choose image', 'nextora')}</Button>{edit.imageUrl && <Button variant="link" isDestructive size="small" onClick={() => setEdit((current) => ({ ...current, imageId: 0, imageUrl: '', imageAlt: '' }))}>{__('Remove', 'nextora')}</Button>}</div>
        </div>} /></MediaUploadCheck>
        {edit.imageUrl && <TextControl label={__('Image alt text', 'nextora')} value={edit.imageAlt} onChange={(value) => set('imageAlt', value)} />}
      </div>
      <div className="nextora-stacking-cards-modal__fields-col">
        <TextControl label={__('Heading', 'nextora')} value={edit.heading} onChange={(value) => set('heading', value)} />
        <TextareaControl label={__('Description', 'nextora')} value={edit.description} rows={4} onChange={(value) => set('description', value)} />
        <TextControl label={__('Link text', 'nextora')} value={edit.linkText} onChange={(value) => set('linkText', value)} />
        <TextControl label={__('Link URL', 'nextora')} value={edit.linkUrl} placeholder="https://" onChange={(value) => set('linkUrl', value)} />
        <PanelColorSettings
          enableAlpha
          title={__('Card colors', 'nextora')}
          colors={palette}
          colorSettings={([
            ['backgroundColor', __('Background', 'nextora')],
            ['headingColor', __('Heading', 'nextora')],
            ['descriptionColor', __('Description', 'nextora')],
            ['linkColor', __('Link', 'nextora')],
          ] as const).map(([key, label]) => ({
            value: colorValueForPicker(edit[key], palette, lookup),
            onChange: (value: string | undefined) => setEdit((current) => ({
              ...current,
              [key]: normalizeColorForStorage(value, lookup),
            })),
            label,
          }))}
        />
      </div>
    </div>
    <div className="nextora-stacking-cards-modal__actions"><Button variant="primary" onClick={() => { onSave({ ...edit, id: edit.id || createId() }); onClose(); }}>{__('Save', 'nextora')}</Button><Button variant="secondary" onClick={onClose}>{__('Cancel', 'nextora')}</Button></div>
  </Modal>;
}

export default function StackingCardsEdit({ attributes, setAttributes }: { attributes: StackingCardsAttributes; setAttributes: (attrs: Partial<StackingCardsAttributes>) => void }) {
  const cards = normalizeCards(attributes.cards);
  const [editingId, setEditingId] = useState<string | null>(null);
  const palette = useThemeColorPalette();
  const lookup = getMergedPaletteEntries(palette);
  const rawAttributes = attributes as Partial<StackingCardsAttributes>;
  const a = {
    cardHeight: rawAttributes.cardHeight ?? 520, cardGap: rawAttributes.cardGap ?? 32, stackOffset: rawAttributes.stackOffset ?? 24, stickyTopOffset: rawAttributes.stickyTopOffset ?? 24,
    cardRadius: rawAttributes.cardRadius ?? 20, contentPadding: rawAttributes.contentPadding ?? 48, imageWidth: rawAttributes.imageWidth ?? 50,
    contentMaxWidth: rawAttributes.contentMaxWidth ?? '1200px', mobileCardHeight: rawAttributes.mobileCardHeight ?? 460,
    mobileContentPadding: rawAttributes.mobileContentPadding ?? 24, mobileImageHeight: rawAttributes.mobileImageHeight ?? 240,
    mobileStackOffset: rawAttributes.mobileStackOffset ?? 16, headingSize: rawAttributes.headingSize ?? 'medium-plus',
    descriptionSize: rawAttributes.descriptionSize ?? 'base', linkSize: rawAttributes.linkSize ?? 'small',
    headingWeight: rawAttributes.headingWeight ?? '600',
    showLink: rawAttributes.showLink ?? true, openLinksInNewTab: rawAttributes.openLinksInNewTab ?? false,
    imageObjectFit: rawAttributes.imageObjectFit ?? 'cover',
    enableSticky: rawAttributes.enableSticky ?? true, enableScrollAnimation: rawAttributes.enableScrollAnimation ?? true,
    cardBackgroundColor: rawAttributes.cardBackgroundColor ?? '', headingColor: rawAttributes.headingColor ?? '',
    descriptionColor: rawAttributes.descriptionColor ?? '', linkColor: rawAttributes.linkColor ?? '',
  };
  const update = (id: string, item: StackingCardItem) => setAttributes({ cards: cards.map((card) => card.id === id ? item : card) });
  const set = (key: keyof StackingCardsAttributes, value: unknown) => setAttributes({ [key]: value } as Partial<StackingCardsAttributes>);
  const color = (value: string, fallback: string) => value ? (lookup.find((entry) => entry.slug === value)?.color || (value.startsWith('#') ? value : `var(--wp--preset--color--${value})`)) : fallback;
  const blockProps = useBlockProps({ className: `wp-block-nextora-stacking-cards nextora-stacking-cards--editor${a.enableSticky ? '' : ' nextora-stacking-cards--no-sticky'}`, style: {
    '--nextora-sc-card-height': `${a.cardHeight}px`, '--nextora-sc-card-gap': `${a.cardGap}px`, '--nextora-sc-stack-offset': `${a.stackOffset}px`, '--nextora-sc-sticky-top-offset': `${a.stickyTopOffset}px`, '--nextora-sc-card-radius': `${a.cardRadius}px`, '--nextora-sc-content-padding': `${a.contentPadding}px`, '--nextora-sc-image-width': `${a.imageWidth}%`, '--nextora-sc-card-bg': color(a.cardBackgroundColor, 'var(--wp--preset--color--surface, #f4f1eb)'), '--nextora-sc-heading-color': color(a.headingColor, 'var(--wp--preset--color--contrast)'), '--nextora-sc-description-color': color(a.descriptionColor, 'var(--wp--preset--color--paragraph)'), '--nextora-sc-link-color': color(a.linkColor, 'var(--wp--preset--color--primary)'), '--nextora-sc-heading-size': `var(--wp--preset--font-size--${a.headingSize})`, '--nextora-sc-description-size': `var(--wp--preset--font-size--${a.descriptionSize})`, '--nextora-sc-link-size': `var(--wp--preset--font-size--${a.linkSize})`, '--nextora-sc-heading-weight': a.headingWeight,
  } as React.CSSProperties });
  const editing = editingId ? cards.find((card) => card.id === editingId) : undefined;
  const changeColor = (key: keyof StackingCardsAttributes, value: string | undefined) => set(key, normalizeColorForStorage(value, lookup));
  return <>
    <InspectorControls>
      <PanelBody title={__('Cards', 'nextora')} initialOpen>
        {cards.map((card, index) => <div className="nextora-stacking-cards__item-row" key={card.id}><div className="nextora-stacking-cards__item-label">{card.imageUrl && <img src={card.imageUrl} alt="" />}{card.heading || sprintf(__('Card %d', 'nextora'), index + 1)}</div><Button icon={<Icon name="pencil" />} label={__('Edit', 'nextora')} onClick={() => setEditingId(card.id)} isSmall /><Button icon={<Icon name="up" />} label={__('Move up', 'nextora')} onClick={() => { const next = [...cards]; [next[index - 1], next[index]] = [next[index], next[index - 1]]; set('cards', next); }} disabled={!index} isSmall /><Button icon={<Icon name="down" />} label={__('Move down', 'nextora')} onClick={() => { const next = [...cards]; [next[index], next[index + 1]] = [next[index + 1], next[index]]; set('cards', next); }} disabled={index === cards.length - 1} isSmall /><Button icon={<Icon name="trash" />} label={__('Remove', 'nextora')} onClick={() => cards.length > 1 && set('cards', cards.filter((entry) => entry.id !== card.id))} isSmall isDestructive /></div>)}
        <Button variant="secondary" icon={<Icon name="plus" />} onClick={() => set('cards', [...cards, { ...EMPTY, id: createId(), heading: __('New card', 'nextora') }])} style={{ width: '100%', justifyContent: 'center' }}>{__('Add card', 'nextora')}</Button>
      </PanelBody>
      <PanelBody title={__('Layout', 'nextora')} initialOpen={false}>
        <RangeControl label={__('Card height (px)', 'nextora')} value={a.cardHeight} min={280} max={760} step={10} onChange={(v) => set('cardHeight', v ?? 520)} />
        <RangeControl label={__('Card gap (px)', 'nextora')} value={a.cardGap} min={0} max={120} step={4} onChange={(v) => set('cardGap', v ?? 32)} />
        <RangeControl label={__('Stack offset (px)', 'nextora')} value={a.stackOffset} min={0} max={80} step={4} onChange={(v) => set('stackOffset', v ?? 24)} />
        <RangeControl label={__('Sticky top offset (px)', 'nextora')} help={__('Distance from the top of the viewport when the first card sticks.', 'nextora')} value={a.stickyTopOffset} min={0} max={160} step={4} onChange={(v) => set('stickyTopOffset', v ?? 24)} />
        <RangeControl label={__('Card radius (px)', 'nextora')} value={a.cardRadius} min={0} max={40} step={2} onChange={(v) => set('cardRadius', v ?? 20)} />
        <RangeControl label={__('Content padding (px)', 'nextora')} value={a.contentPadding} min={16} max={96} step={4} onChange={(v) => set('contentPadding', v ?? 48)} />
        <RangeControl label={__('Image width (%)', 'nextora')} value={a.imageWidth} min={30} max={70} step={5} onChange={(v) => set('imageWidth', v ?? 50)} />
        <TextControl label={__('Content max width', 'nextora')} value={a.contentMaxWidth} onChange={(v) => set('contentMaxWidth', v)} />
        <RangeControl label={__('Mobile card height (px)', 'nextora')} value={a.mobileCardHeight} min={240} max={700} step={10} onChange={(v) => set('mobileCardHeight', v ?? 460)} />
        <RangeControl label={__('Mobile image height (px)', 'nextora')} value={a.mobileImageHeight} min={140} max={420} step={10} onChange={(v) => set('mobileImageHeight', v ?? 240)} />
        <RangeControl label={__('Mobile stack offset (px)', 'nextora')} value={a.mobileStackOffset} min={0} max={48} step={4} onChange={(v) => set('mobileStackOffset', v ?? 16)} />
      </PanelBody>
      <PanelBody title={__('Typography', 'nextora')} initialOpen={false}><SelectControl label={__('Heading size', 'nextora')} value={a.headingSize} options={SIZES} onChange={(v) => set('headingSize', v)} /><SelectControl label={__('Description size', 'nextora')} value={a.descriptionSize} options={SIZES.slice(0, 5)} onChange={(v) => set('descriptionSize', v)} /><SelectControl label={__('Link size', 'nextora')} value={a.linkSize} options={SIZES.slice(0, 4)} onChange={(v) => set('linkSize', v)} /><SelectControl label={__('Heading weight', 'nextora')} value={a.headingWeight} options={WEIGHTS} onChange={(v) => set('headingWeight', v)} /></PanelBody>
      <PanelBody title={__('Display', 'nextora')} initialOpen={false}><ToggleControl label={__('Show links', 'nextora')} checked={a.showLink} onChange={(v) => set('showLink', v)} /><ToggleControl label={__('Open links in new tab', 'nextora')} checked={a.openLinksInNewTab} onChange={(v) => set('openLinksInNewTab', v)} /><ToggleControl label={__('Enable sticky stacking', 'nextora')} checked={a.enableSticky} onChange={(v) => set('enableSticky', v)} /><SelectControl label={__('Image fit', 'nextora')} value={a.imageObjectFit as 'cover' | 'contain'} options={[{ label: 'Cover', value: 'cover' }, { label: 'Contain', value: 'contain' }]} onChange={(v) => set('imageObjectFit', v as 'cover' | 'contain')} /></PanelBody>
      <PanelColorSettings enableAlpha title={__('Colors', 'nextora')} colors={palette} colorSettings={([['cardBackgroundColor', __('Card background', 'nextora')], ['headingColor', __('Heading', 'nextora')], ['descriptionColor', __('Description', 'nextora')], ['linkColor', __('Link', 'nextora')]] as const).map(([key, label]) => ({ value: colorValueForPicker(a[key] as string, palette, lookup), onChange: (value: string | undefined) => changeColor(key, value), label }))} />
      <PanelBody title={__('Animation', 'nextora')} initialOpen={false}><ToggleControl label={__('Animate on scroll', 'nextora')} checked={a.enableScrollAnimation} onChange={(v) => set('enableScrollAnimation', v)} help={__('Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.', 'nextora')} /></PanelBody>
    </InspectorControls>
    <div {...blockProps} className={blockProps.className}><div className="nextora-stacking-cards__list">{cards.map((card, index) => <article className="nextora-stacking-cards__card" key={card.id} style={{ '--nextora-sc-index': index, '--nextora-sc-card-bg': card.backgroundColor ? color(card.backgroundColor, '') : undefined, '--nextora-sc-heading-color': card.headingColor ? color(card.headingColor, '') : undefined, '--nextora-sc-description-color': card.descriptionColor ? color(card.descriptionColor, '') : undefined, '--nextora-sc-link-color': card.linkColor ? color(card.linkColor, '') : undefined } as React.CSSProperties}><div className="nextora-stacking-cards__content"><h2 className="nextora-stacking-cards__heading">{card.heading || sprintf(__('Card %d', 'nextora'), index + 1)}</h2><p className="nextora-stacking-cards__description">{card.description || __('Add a description in the card settings.', 'nextora')}</p>{a.showLink && <span className="nextora-stacking-cards__link">{card.linkText || __('Read more', 'nextora')}</span>}</div><div className="nextora-stacking-cards__media">{card.imageUrl ? <img className="nextora-stacking-cards__image" src={card.imageUrl} alt="" /> : <span className="nextora-stacking-cards__media-placeholder">{__('Choose an image', 'nextora')}</span>}</div></article>)}</div></div>
    {editing && <ItemModal item={editing} onSave={(item) => update(editing.id, item)} onClose={() => setEditingId(null)} />}
  </>;
}
