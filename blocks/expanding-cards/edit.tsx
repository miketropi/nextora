import { __, sprintf } from '@wordpress/i18n';
import { useState, useCallback } from '@wordpress/element';
import {
  useBlockProps,
  InspectorControls,
  PanelColorSettings,
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
  ToggleControl,
} from '@wordpress/components';
import {
  colorValueForPicker,
  getMergedPaletteEntries,
  normalizeColorForStorage,
  useThemeColorPalette,
} from '../advanced-icon/color-utils';
import type { ExpandingCardsAttributes, ExpandingCardItem } from './types';

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
  pencil:
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>',
  chevronUp:
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
  chevronDown:
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  trash:
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',
  plus:
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
  pawPrint:
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/></svg>',
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
  attributes: ExpandingCardsAttributes;
  setAttributes: (attrs: Partial<ExpandingCardsAttributes>) => void;
}

interface WPMediaSelection {
  id?: number;
  url?: string;
  alt?: string;
}

function createItemId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function normalizeCards(items: unknown): ExpandingCardItem[] {
  if (!Array.isArray(items)) return [];
  return items.map((item, index) => ({
    id: typeof item?.id === 'string' ? item.id : `${index}`,
    imageId: typeof item?.imageId === 'number' ? item.imageId : 0,
    imageUrl: typeof item?.imageUrl === 'string' ? item.imageUrl : '',
    imageAlt: typeof item?.imageAlt === 'string' ? item.imageAlt : '',
    heading: typeof item?.heading === 'string' ? item.heading : '',
    description: typeof item?.description === 'string' ? item.description : '',
    buttonText: typeof item?.buttonText === 'string' && item.buttonText !== '' ? item.buttonText : 'Start adoption',
    buttonUrl: typeof item?.buttonUrl === 'string' && item.buttonUrl !== '' ? item.buttonUrl : '#',
  }));
}

const EMPTY_ITEM: ExpandingCardItem = {
  id: '',
  imageId: 0,
  imageUrl: '',
  imageAlt: '',
  heading: '',
  description: '',
  buttonText: 'Start adoption',
  buttonUrl: '#',
};

interface ItemModalProps {
  item: ExpandingCardItem;
  onSave: (item: ExpandingCardItem) => void;
  onClose: () => void;
}

function ItemModal({ item, onSave, onClose }: ItemModalProps) {
  const [edit, setEdit] = useState<ExpandingCardItem>({ ...item });

  const onSelectImage = useCallback((media: WPMediaSelection) => {
    setEdit((prev) => ({
      ...prev,
      imageId: media.id ?? 0,
      imageUrl: media.url ?? '',
      imageAlt: media.alt ?? '',
    }));
  }, []);

  const handleSave = () => {
    onSave({
      ...edit,
      id: edit.id || createItemId(),
      buttonText: edit.buttonText || 'Start adoption',
      buttonUrl: edit.buttonUrl || '#',
    });
    onClose();
  };

  return (
    <Modal
      title={__('Edit card', 'nextora')}
      onRequestClose={onClose}
      className="nextora-expanding-cards-modal"
    >
      <div className="nextora-expanding-cards-modal__content">
        <div className="nextora-expanding-cards-modal__image-col">
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectImage}
              allowedTypes={['image']}
              value={edit.imageId > 0 ? edit.imageId : undefined}
              render={({ open }) => (
                <div className="nextora-expanding-cards-modal__media">
                  {edit.imageUrl ? (
                    <img
                      src={edit.imageUrl}
                      alt=""
                      className="nextora-expanding-cards-modal__media-preview"
                    />
                  ) : (
                    <div
                      className="nextora-expanding-cards-modal__media-placeholder"
                      onClick={open}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') open();
                      }}
                    >
                      <span>{__('Choose image', 'nextora')}</span>
                    </div>
                  )}
                  <div className="nextora-expanding-cards-modal__media-actions">
                    <Button variant="secondary" onClick={open} size="small">
                      {edit.imageUrl
                        ? __('Replace image', 'nextora')
                        : __('Choose image', 'nextora')}
                    </Button>
                    {edit.imageUrl ? (
                      <Button
                        variant="link"
                        isDestructive
                        size="small"
                        onClick={() =>
                          setEdit((prev) => ({
                            ...prev,
                            imageId: 0,
                            imageUrl: '',
                            imageAlt: '',
                          }))
                        }
                      >
                        {__('Remove', 'nextora')}
                      </Button>
                    ) : null}
                  </div>
                </div>
              )}
            />
          </MediaUploadCheck>
          {edit.imageUrl ? (
            <TextControl
              label={__('Image alt text', 'nextora')}
              value={edit.imageAlt}
              onChange={(imageAlt) =>
                setEdit((prev) => ({ ...prev, imageAlt: imageAlt ?? '' }))
              }
            />
          ) : null}
        </div>

        <div className="nextora-expanding-cards-modal__fields-col">
          <TextControl
            label={__('Heading', 'nextora')}
            value={edit.heading}
            onChange={(heading) =>
              setEdit((prev) => ({ ...prev, heading: heading ?? '' }))
            }
          />
          <TextareaControl
            label={__('Description', 'nextora')}
            value={edit.description}
            onChange={(description) =>
              setEdit((prev) => ({ ...prev, description: description ?? '' }))
            }
            rows={3}
          />
          <TextControl
            label={__('Button text', 'nextora')}
            value={edit.buttonText}
            onChange={(buttonText) =>
              setEdit((prev) => ({
                ...prev,
                buttonText: buttonText ?? 'Start adoption',
              }))
            }
          />
          <TextControl
            label={__('Button URL', 'nextora')}
            value={edit.buttonUrl}
            onChange={(buttonUrl) =>
              setEdit((prev) => ({
                ...prev,
                buttonUrl: buttonUrl ?? '#',
              }))
            }
            placeholder="#"
          />
        </div>
      </div>

      <div className="nextora-expanding-cards-modal__actions">
        <Button variant="primary" onClick={handleSave}>
          {__('Save', 'nextora')}
        </Button>
        <Button variant="secondary" onClick={onClose}>
          {__('Cancel', 'nextora')}
        </Button>
      </div>
    </Modal>
  );
}

export default function ExpandingCardsEdit({ attributes, setAttributes }: EditProps) {
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const cards = normalizeCards(attributes.cards);

  const colorPalette = useThemeColorPalette();
  const lookupPalette = getMergedPaletteEntries(colorPalette);

  const {
    cardHeight = 400,
    cardGap = 10,
    cardBorderRadius = 12,
    inactiveOverlayOpacity = 0.7,
    contentPaddingY = 24,
    contentPaddingX = 24,
    headingSize = 'medium',
    descriptionSize = 'small',
    buttonSize = 'small',
    headingColor = '',
    descriptionColor = '',
    overlayBackgroundColor = '',
    buttonTextColor = '',
    buttonBackgroundColor = '',
    buttonBorderColor = '',
    activeCardIndex = 0,
    enableScrollAnimation = true,
  } = attributes;

  const setThemeColor = (key: string, value: string | undefined) => {
    setAttributes({
      [key]: normalizeColorForStorage(value, lookupPalette),
    } as Partial<ExpandingCardsAttributes>);
  };

  const resolveColorForEditor = (colorValue: string, fallbackCssVar: string): string => {
    if (!colorValue) return fallbackCssVar;
    if (colorValue === 'transparent') return 'transparent';
    const entry = lookupPalette.find((p) => p.slug === colorValue);
    if (entry?.color) return entry.color;
    if (colorValue.startsWith('#')) return colorValue;
    return `var(--wp--preset--color--${colorValue})`;
  };

  const addCard = () => {
    const newItem: ExpandingCardItem = {
      ...EMPTY_ITEM,
      id: createItemId(),
      heading: __('New card', 'nextora'),
    };
    setAttributes({ cards: [...cards, newItem] });
  };

  const updateCard = (updatedItem: ExpandingCardItem) => {
    const newItems = cards.map((item) =>
      item.id === updatedItem.id ? updatedItem : item,
    );
    setAttributes({ cards: newItems });
  };

  const removeCard = (id: string) => {
    if (cards.length <= 1) return;
    setAttributes({ cards: cards.filter((item) => item.id !== id) });
  };

  const moveCard = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= cards.length) return;
    const newItems = [...cards];
    [newItems[index], newItems[newIndex]] = [newItems[newIndex], newItems[index]];
    setAttributes({ cards: newItems });
  };

  const editorOverlayBg = resolveColorForEditor(overlayBackgroundColor, '#000000');
  const editorHeadingColor = resolveColorForEditor(headingColor, '#ffffff');
  const editorDescriptionColor = resolveColorForEditor(descriptionColor, 'rgba(255,255,255,0.85)');
  const editorBtnTextColor = resolveColorForEditor(buttonTextColor, '#ffffff');
  const editorBtnBgColor = resolveColorForEditor(buttonBackgroundColor, 'transparent');
  const editorBtnBorderColor = resolveColorForEditor(buttonBorderColor, '#ffffff');

  const blockProps = useBlockProps({
    className: 'wp-block-nextora-expanding-cards nextora-expanding-cards--editor',
    style: {
      '--nextora-ec-height': `${cardHeight}px`,
      '--nextora-ec-gap': `${cardGap}px`,
      '--nextora-ec-radius': `${cardBorderRadius}px`,
      '--nextora-ec-overlay-opacity': `${inactiveOverlayOpacity}`,
      '--nextora-ec-overlay-bg': editorOverlayBg,
      '--nextora-ec-content-padding-y': `${contentPaddingY}px`,
      '--nextora-ec-content-padding-x': `${contentPaddingX}px`,
      '--nextora-ec-heading-color': editorHeadingColor,
      '--nextora-ec-description-color': editorDescriptionColor,
      '--nextora-ec-button-text-color': editorBtnTextColor,
      '--nextora-ec-button-bg-color': editorBtnBgColor,
      '--nextora-ec-button-border-color': editorBtnBorderColor,
      '--nextora-ec-heading-size': `var(--wp--preset--font-size--${headingSize})`,
      '--nextora-ec-description-size': `var(--wp--preset--font-size--${descriptionSize})`,
      '--nextora-ec-button-size': `var(--wp--preset--font-size--${buttonSize})`,
    } as React.CSSProperties,
  });

  const editingItem = editingItemId ? cards.find((item) => item.id === editingItemId) : undefined;

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Cards', 'nextora')} initialOpen>
          {cards.length === 0 && (
            <p className="components-base-control__help" style={{ marginBottom: '8px' }}>
              {__('No cards yet. Click "Add card" to create one.', 'nextora')}
            </p>
          )}
          {cards.map((item, index) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '6px',
                padding: '6px 8px',
                background: '#f9f9f9',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  overflow: 'hidden',
                  minWidth: 0,
                }}
              >
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt=""
                    style={{
                      width: '32px',
                      height: '24px',
                      objectFit: 'cover',
                      borderRadius: '2px',
                      flexShrink: 0,
                    }}
                  />
                ) : null}
                <span
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    fontSize: '12px',
                    lineHeight: '1.4',
                    fontWeight: 500,
                  }}
                >
                  {item.heading || sprintf(__('Card %d', 'nextora'), index + 1)}
                </span>
              </div>
              <Button
                icon={<InlineSvg name="pencil" />}
                label={__('Edit', 'nextora')}
                onClick={() => setEditingItemId(item.id)}
                isSmall
              />
              <Button
                icon={<InlineSvg name="chevronUp" />}
                label={__('Move up', 'nextora')}
                onClick={() => moveCard(index, 'up')}
                disabled={index === 0}
                isSmall
              />
              <Button
                icon={<InlineSvg name="chevronDown" />}
                label={__('Move down', 'nextora')}
                onClick={() => moveCard(index, 'down')}
                disabled={index === cards.length - 1}
                isSmall
              />
              <Button
                icon={<InlineSvg name="trash" />}
                label={__('Remove', 'nextora')}
                onClick={() => removeCard(item.id)}
                isSmall
                isDestructive
              />
            </div>
          ))}
          <Button
            variant="secondary"
            onClick={addCard}
            icon={<InlineSvg name="plus" />}
            style={{ width: '100%', justifyContent: 'center', marginTop: cards.length > 0 ? '4px' : '0' }}
          >
            {__('Add card', 'nextora')}
          </Button>
        </PanelBody>

        <PanelBody title={__('Layout', 'nextora')} initialOpen={false}>
          <RangeControl
            label={__('Card height (px)', 'nextora')}
            value={cardHeight}
            onChange={(v) => setAttributes({ cardHeight: v ?? 400 })}
            min={200}
            max={800}
            step={10}
          />
          <RangeControl
            label={__('Card gap (px)', 'nextora')}
            value={cardGap}
            onChange={(v) => setAttributes({ cardGap: v ?? 10 })}
            min={0}
            max={30}
            step={2}
          />
          <RangeControl
            label={__('Border radius (px)', 'nextora')}
            value={cardBorderRadius}
            onChange={(v) => setAttributes({ cardBorderRadius: v ?? 12 })}
            min={0}
            max={24}
            step={2}
          />
          <RangeControl
            label={__('Inactive overlay opacity', 'nextora')}
            value={inactiveOverlayOpacity}
            onChange={(v) => setAttributes({ inactiveOverlayOpacity: v ?? 0.7 })}
            min={0}
            max={1}
            step={0.05}
          />
          <RangeControl
            label={__('Content padding — vertical (px)', 'nextora')}
            value={contentPaddingY}
            onChange={(v) => setAttributes({ contentPaddingY: v ?? 24 })}
            min={8}
            max={80}
            step={4}
          />
          <RangeControl
            label={__('Content padding — horizontal (px)', 'nextora')}
            value={contentPaddingX}
            onChange={(v) => setAttributes({ contentPaddingX: v ?? 24 })}
            min={8}
            max={80}
            step={4}
          />
          <RangeControl
            label={__('Default active card', 'nextora')}
            help={__('Which card is expanded when the page first loads.', 'nextora')}
            value={activeCardIndex + 1}
            onChange={(v) => setAttributes({ activeCardIndex: (v ?? 1) - 1 })}
            min={1}
            max={cards.length}
          />
        </PanelBody>

        <PanelBody title={__('Typography', 'nextora')} initialOpen={false}>
          <SelectControl
            label={__('Heading font size', 'nextora')}
            value={headingSize}
            options={FONT_SIZE_OPTIONS}
            onChange={(v) => setAttributes({ headingSize: v ?? 'medium' })}
          />
          <SelectControl
            label={__('Description font size', 'nextora')}
            value={descriptionSize}
            options={FONT_SIZE_OPTIONS}
            onChange={(v) => setAttributes({ descriptionSize: v ?? 'small' })}
          />
          <SelectControl
            label={__('Button font size', 'nextora')}
            value={buttonSize}
            options={FONT_SIZE_OPTIONS}
            onChange={(v) => setAttributes({ buttonSize: v ?? 'small' })}
          />
        </PanelBody>

        <PanelColorSettings
          enableAlpha
          title={__('Colors', 'nextora')}
          colors={colorPalette}
          colorSettings={[
            {
              value: colorValueForPicker(headingColor, colorPalette, lookupPalette),
              onChange: (v) => setThemeColor('headingColor', v),
              label: __('Heading', 'nextora'),
            },
            {
              value: colorValueForPicker(descriptionColor, colorPalette, lookupPalette),
              onChange: (v) => setThemeColor('descriptionColor', v),
              label: __('Description', 'nextora'),
            },
            {
              value: colorValueForPicker(overlayBackgroundColor, colorPalette, lookupPalette),
              onChange: (v) => setThemeColor('overlayBackgroundColor', v),
              label: __('Overlay', 'nextora'),
            },
            {
              value: colorValueForPicker(buttonTextColor, colorPalette, lookupPalette),
              onChange: (v) => setThemeColor('buttonTextColor', v),
              label: __('Button text', 'nextora'),
            },
            {
              value: colorValueForPicker(buttonBackgroundColor, colorPalette, lookupPalette),
              onChange: (v) => setThemeColor('buttonBackgroundColor', v),
              label: __('Button background', 'nextora'),
            },
            {
              value: colorValueForPicker(buttonBorderColor, colorPalette, lookupPalette),
              onChange: (v) => setThemeColor('buttonBorderColor', v),
              label: __('Button border', 'nextora'),
            },
          ]}
        />

        <PanelBody title={__('Animation', 'nextora')}>
          <ToggleControl
            label={__('Animate on scroll', 'nextora')}
            checked={enableScrollAnimation}
            onChange={(v) => setAttributes({ enableScrollAnimation: v })}
            help={__(
              'Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.',
              'nextora',
            )}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="nextora-expanding-cards__row">
          {cards.map((item, index) => (
            <div
              key={item.id}
              className={`nextora-expanding-cards__card nextora-expanding-cards__card--editor${index === activeCardIndex ? ' nextora-expanding-cards__card--active' : ''}`}
            >
              <span
                className="nextora-expanding-cards__card-bg"
                aria-hidden="true"
                style={
                  item.imageUrl
                    ? { backgroundImage: `url(${item.imageUrl})` }
                    : undefined
                }
              />
              {!item.imageUrl && (
                <span className="nextora-expanding-cards__card-placeholder">
                  {sprintf(__('Card %d', 'nextora'), index + 1)}
                </span>
              )}
              <span className="nextora-expanding-cards__card-overlay" aria-hidden="true" />
              <span className="nextora-expanding-cards__card-content">
                <span className="nextora-expanding-cards__card-heading">
                  {item.heading || sprintf(__('Card %d', 'nextora'), index + 1)}
                </span>
                {item.description && (
                  <span className="nextora-expanding-cards__card-description">
                    {item.description}
                  </span>
                )}
                <span className="nextora-expanding-cards__card-button">
                  <InlineSvg name="pawPrint" className="nextora-expanding-cards__card-button-icon" />
                  {item.buttonText || __('Start adoption', 'nextora')}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {editingItem && (
        <ItemModal
          item={editingItem}
          onSave={updateCard}
          onClose={() => setEditingItemId(null)}
        />
      )}
    </>
  );
}
