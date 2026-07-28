import { __ } from '@wordpress/i18n';
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
import type { TextListHoverImageAttributes, TextListHoverImageItem } from './types';

const FONT_SIZE_OPTIONS = [
  { label: __('Small', 'nextora'), value: 'small' },
  { label: __('Base', 'nextora'), value: 'base' },
  { label: __('Medium', 'nextora'), value: 'medium' },
  { label: __('Medium Plus', 'nextora'), value: 'medium-plus' },
  { label: __('Large', 'nextora'), value: 'large' },
  { label: __('Extra Large', 'nextora'), value: 'x-large' },
  { label: __('Extra Extra Large', 'nextora'), value: 'xx-large' },
];

const FONT_WEIGHT_OPTIONS = [
  { label: '400', value: '400' },
  { label: '500', value: '500' },
  { label: '600', value: '600' },
  { label: '700', value: '700' },
  { label: '800', value: '800' },
  { label: '900', value: '900' },
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
  attributes: TextListHoverImageAttributes;
  setAttributes: (attrs: Partial<TextListHoverImageAttributes>) => void;
}

interface WPMediaSelection {
  id?: number;
  url?: string;
  alt?: string;
}

function createItemId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function normalizeItems(items: unknown): TextListHoverImageItem[] {
  if (!Array.isArray(items)) return [];
  return items.map((item, index) => ({
    id: typeof item?.id === 'string' ? item.id : `${index}`,
    title: typeof item?.title === 'string' ? item.title : '',
    description: typeof item?.description === 'string' ? item.description : '',
    year: typeof item?.year === 'string' ? item.year : '',
    link: typeof item?.link === 'string' ? item.link : '',
    imageId: typeof item?.imageId === 'number' ? item.imageId : 0,
    imageUrl: typeof item?.imageUrl === 'string' ? item.imageUrl : '',
    imageAlt: typeof item?.imageAlt === 'string' ? item.imageAlt : '',
  }));
}

const EMPTY_ITEM: TextListHoverImageItem = {
  id: '',
  title: '',
  description: '',
  year: '',
  link: '',
  imageId: 0,
  imageUrl: '',
  imageAlt: '',
};

interface ItemModalProps {
  item: TextListHoverImageItem;
  onSave: (item: TextListHoverImageItem) => void;
  onClose: () => void;
}

function ItemModal({ item, onSave, onClose }: ItemModalProps) {
  const [edit, setEdit] = useState<TextListHoverImageItem>({ ...item });

  const onSelectImage = useCallback(
    (media: WPMediaSelection) => {
      setEdit((prev) => ({
        ...prev,
        imageId: media.id ?? 0,
        imageUrl: media.url ?? '',
        imageAlt: media.alt ?? '',
      }));
    },
    [],
  );

  const handleSave = () => {
    onSave({
      ...edit,
      id: edit.id || createItemId(),
    });
    onClose();
  };

  return (
    <Modal
      title={__('Edit list item', 'nextora')}
      onRequestClose={onClose}
      className="nextora-text-list-hover-image-modal"
    >
      <div className="nextora-text-list-hover-image-modal__content">
        <div className="nextora-text-list-hover-image-modal__image-col">
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectImage}
              allowedTypes={['image']}
              value={edit.imageId > 0 ? edit.imageId : undefined}
              render={({ open }) => (
                <div className="nextora-text-list-hover-image-modal__media">
                  {edit.imageUrl ? (
                    <img
                      src={edit.imageUrl}
                      alt=""
                      className="nextora-text-list-hover-image-modal__media-preview"
                    />
                  ) : (
                    <div
                      className="nextora-text-list-hover-image-modal__media-placeholder"
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
                  <div className="nextora-text-list-hover-image-modal__media-actions">
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

        <div className="nextora-text-list-hover-image-modal__fields-col">
          <TextControl
            label={__('Title', 'nextora')}
            value={edit.title}
            onChange={(title) => setEdit((prev) => ({ ...prev, title: title ?? '' }))}
          />

          <TextareaControl
            label={__('Description', 'nextora')}
            value={edit.description}
            onChange={(description) => setEdit((prev) => ({ ...prev, description: description ?? '' }))}
            rows={3}
          />

          <TextControl
            label={__('Year / Tag', 'nextora')}
            value={edit.year}
            onChange={(year) => setEdit((prev) => ({ ...prev, year: year ?? '' }))}
          />

          <TextControl
            label={__('Link', 'nextora')}
            value={edit.link}
            onChange={(link) => setEdit((prev) => ({ ...prev, link: link ?? '' }))}
            placeholder="https://"
          />
        </div>
      </div>

      <div className="nextora-text-list-hover-image-modal__actions">
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

export default function TextListHoverImageEdit({ attributes, setAttributes }: EditProps) {
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const items = normalizeItems(attributes.items);

  const colorPalette = useThemeColorPalette();
  const lookupPalette = getMergedPaletteEntries(colorPalette);

  const {
    titleSize = 'medium',
    descriptionSize = 'small',
    titleWeight = '500',
    imageWidth = 280,
    imageHeight = 180,
    titleColor = '',
    descriptionColor = '',
    hoverHighlightColor = '',
    numberColor = '',
    enableScrollAnimation = true,
  } = attributes;

  const setThemeColor = (key: string, value: string | undefined) => {
    setAttributes({
      [key]: normalizeColorForStorage(value, lookupPalette),
    } as Partial<TextListHoverImageAttributes>);
  };

  const resolveColorForEditor = (colorValue: string, fallbackCssVar: string): string => {
    if (!colorValue) return fallbackCssVar;
    if (colorValue === 'transparent') return 'transparent';
    const entry = lookupPalette.find((p) => p.slug === colorValue);
    if (entry?.color) return entry.color;
    if (colorValue.startsWith('#')) return colorValue;
    return `var(--wp--preset--color--${colorValue})`;
  };

  const addItem = () => {
    const newItem: TextListHoverImageItem = {
      ...EMPTY_ITEM,
      id: createItemId(),
      title: __('New item', 'nextora'),
    };
    setAttributes({ items: [...items, newItem] });
  };

  const updateItem = (updatedItem: TextListHoverImageItem) => {
    const newItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item,
    );
    setAttributes({ items: newItems });
  };

  const removeItem = (id: string) => {
    if (items.length <= 1) return;
    setAttributes({ items: items.filter((item) => item.id !== id) });
  };

  const moveItem = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= items.length) return;
    const newItems = [...items];
    [newItems[index], newItems[newIndex]] = [newItems[newIndex], newItems[index]];
    setAttributes({ items: newItems });
  };

  const editorTitleColor = resolveColorForEditor(titleColor, 'var(--wp--preset--color--contrast)');
  const editorDescriptionColor = resolveColorForEditor(descriptionColor, 'var(--wp--preset--color--paragraph)');
  const editorHoverHighlightColor = resolveColorForEditor(hoverHighlightColor, 'transparent');
  const editorNumberColor = resolveColorForEditor(numberColor, 'var(--wp--preset--color--primary)');

  const blockProps = useBlockProps({
    className: 'wp-block-nextora-text-list-hover-image',
    style: {
      '--nextora-thli-title-color': editorTitleColor,
      '--nextora-thli-description-color': editorDescriptionColor,
      '--nextora-thli-hover-bg': editorHoverHighlightColor,
      '--nextora-thli-number-color': editorNumberColor,
      '--nextora-thli-image-width': `${imageWidth}px`,
      '--nextora-thli-image-height': `${imageHeight}px`,
      '--nextora-thli-title-size': `var(--wp--preset--font-size--${titleSize})`,
      '--nextora-thli-description-size': `var(--wp--preset--font-size--${descriptionSize})`,
      '--nextora-thli-title-weight': titleWeight,
    } as React.CSSProperties,
  });

  const editingItem = editingItemId ? items.find((item) => item.id === editingItemId) : undefined;

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('List Items', 'nextora')} initialOpen>
          {items.length === 0 && (
            <p className="components-base-control__help" style={{ marginBottom: '8px' }}>
              {__('No items yet. Click "Add item" to create one.', 'nextora')}
            </p>
          )}
          {items.map((item, index) => (
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
                  {item.title || __('(empty)', 'nextora')}
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
                onClick={() => moveItem(index, 'up')}
                disabled={index === 0}
                isSmall
              />
              <Button
                icon={<InlineSvg name="chevronDown" />}
                label={__('Move down', 'nextora')}
                onClick={() => moveItem(index, 'down')}
                disabled={index === items.length - 1}
                isSmall
              />
              <Button
                icon={<InlineSvg name="trash" />}
                label={__('Remove', 'nextora')}
                onClick={() => removeItem(item.id)}
                isSmall
                isDestructive
              />
            </div>
          ))}
          <Button
            variant="secondary"
            onClick={addItem}
            icon={<InlineSvg name="plus" />}
            style={{ width: '100%', justifyContent: 'center', marginTop: items.length > 0 ? '4px' : '0' }}
          >
            {__('Add item', 'nextora')}
          </Button>
        </PanelBody>

        <PanelBody title={__('Typography', 'nextora')} initialOpen={false}>
          <SelectControl
            label={__('Item title font size', 'nextora')}
            value={titleSize}
            options={FONT_SIZE_OPTIONS}
            onChange={(value) => setAttributes({ titleSize: value })}
          />
          <SelectControl
            label={__('Title font weight', 'nextora')}
            value={titleWeight}
            options={FONT_WEIGHT_OPTIONS}
            onChange={(value) => setAttributes({ titleWeight: value })}
          />
          <SelectControl
            label={__('Description font size', 'nextora')}
            value={descriptionSize}
            options={FONT_SIZE_OPTIONS}
            onChange={(value) => setAttributes({ descriptionSize: value })}
          />
        </PanelBody>

        <PanelBody title={__('Layout', 'nextora')} initialOpen={false}>
          <RangeControl
            label={__('Hover image width (px)', 'nextora')}
            value={imageWidth}
            onChange={(value) => setAttributes({ imageWidth: value || 280 })}
            min={120}
            max={600}
          />
          <RangeControl
            label={__('Hover image height (px)', 'nextora')}
            value={imageHeight}
            onChange={(value) => setAttributes({ imageHeight: value || 180 })}
            min={80}
            max={400}
          />
        </PanelBody>

        <PanelColorSettings
          title={__('Colors', 'nextora')}
          colors={colorPalette}
          colorSettings={[
            {
              value: colorValueForPicker(titleColor, colorPalette, lookupPalette),
              onChange: (v) => setThemeColor('titleColor', v),
              label: __('Title color', 'nextora'),
            },
            {
              value: colorValueForPicker(descriptionColor, colorPalette, lookupPalette),
              onChange: (v) => setThemeColor('descriptionColor', v),
              label: __('Description color', 'nextora'),
            },
            {
              value: colorValueForPicker(hoverHighlightColor, colorPalette, lookupPalette),
              onChange: (v) => setThemeColor('hoverHighlightColor', v),
              label: __('Hover highlight color', 'nextora'),
            },
            {
              value: colorValueForPicker(numberColor, colorPalette, lookupPalette),
              onChange: (v) => setThemeColor('numberColor', v),
              label: __('Item number color', 'nextora'),
            },
          ]}
        />

        <PanelBody title={__('Animation', 'nextora')}>
          <ToggleControl
            label={__('Animate on scroll', 'nextora')}
            checked={enableScrollAnimation}
            onChange={(value) => setAttributes({ enableScrollAnimation: value })}
            help={__(
              'Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.',
              'nextora',
            )}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="nextora-text-list-hover-image__items">
          {items.map((item) => (
            <div key={item.id} className="nextora-text-list-hover-image__item">
              <div className="nextora-text-list-hover-image__item-border" />
              <span className="nextora-text-list-hover-image__item-number" aria-hidden="true" />
              <div className="nextora-text-list-hover-image__item-content">
                <div className="nextora-text-list-hover-image__item-main">
                  <h3
                    className="nextora-text-list-hover-image__item-title"
                    style={{
                      fontSize: `var(--wp--preset--font-size--${titleSize})`,
                      fontWeight: titleWeight,
                      color: editorTitleColor,
                    }}
                  >
                    {item.title || __('Untitled', 'nextora')}
                  </h3>
                </div>
                {item.description && (
                  <p
                    className="nextora-text-list-hover-image__item-description"
                    style={{
                      fontSize: `var(--wp--preset--font-size--${descriptionSize})`,
                      color: editorDescriptionColor,
                    }}
                  >
                    {item.description}
                  </p>
                )}
              </div>
              <div className="nextora-text-list-hover-image__item-action">
                <svg
                  className="nextora-text-list-hover-image__item-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {editingItem && (
        <ItemModal
          item={editingItem}
          onSave={updateItem}
          onClose={() => setEditingItemId(null)}
        />
      )}
    </>
  );
}
