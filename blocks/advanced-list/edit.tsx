import { __ } from '@wordpress/i18n';
import { createElement, useState, useMemo, useEffect } from '@wordpress/element';
import type { ReactElement } from 'react';
import {
  useBlockProps,
  InspectorControls,
  PanelColorSettings,
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
import {
  colorValueForPicker,
  getMergedPaletteEntries,
  normalizeColorForStorage,
  useThemeColorPalette,
} from '../advanced-icon/color-utils';
import { IconPicker } from '../advanced-icon/icon-picker';
import type { LucideIconNode } from '../advanced-icon/types';
import { loadIconCatalog } from './icon-catalog';
import AdvancedListEditorIcon from './editor-icon';
import type { AdvancedListAttributes, AdvancedListItem } from './types';

const LUCIDE_ACTION_ICON_SIZE = 18;
const LUCIDE_ACTION_STROKE_WIDTH = 2;

function LucideActionIcon({ name }: { name: string }): ReactElement | null {
  const [nodes, setNodes] = useState<LucideIconNode[] | null>(null);

  useEffect(() => {
    let active = true;
    loadIconCatalog().then((icons) => {
      if (!active) {
        return;
      }
      const found = icons.find((icon) => icon.name === name);
      setNodes(found?.nodes ?? null);
    });
    return () => {
      active = false;
    };
  }, [name]);

  if (!nodes) {
    return null;
  }

  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: LUCIDE_ACTION_ICON_SIZE,
      height: LUCIDE_ACTION_ICON_SIZE,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: LUCIDE_ACTION_STROKE_WIDTH,
      strokeLinecap: 'round' as const,
      strokeLinejoin: 'round' as const,
    },
    ...nodes.map((node, index) => {
      const [tag, attrs, ...rest] = node;
      const children = rest.length > 0 && Array.isArray(rest[0])
        ? (rest[0] as LucideIconNode[])
        : [];
      return createElement(
        tag,
        { ...attrs, key: `${tag}-${index}` },
        ...children.map((child, childIndex) => {
          const [childTag, childAttrs] = child;
          return createElement(childTag, { ...childAttrs, key: `${childTag}-${index}-${childIndex}` });
        }),
      );
    }),
  );
}

interface EditProps {
	attributes: AdvancedListAttributes;
	setAttributes: (attrs: Partial<AdvancedListAttributes>) => void;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function createItemId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function normalizeItems(items: unknown): AdvancedListItem[] {
  if (!Array.isArray(items)) return [];
  return items.map((item, index) => ({
    id: typeof item?.id === 'string' ? item.id : `${index}`,
    text: typeof item?.text === 'string' ? item.text : '',
    iconName: typeof item?.iconName === 'string' ? item.iconName : 'check',
  }));
}

// ---------------------------------------------------------------------------
// Item Modal
// ---------------------------------------------------------------------------

interface ItemModalProps {
  item: AdvancedListItem;
  onSave: (item: AdvancedListItem) => void;
  onClose: () => void;
}

function ItemModal({ item, onSave, onClose }: ItemModalProps) {
  const [editText, setEditText] = useState(item.text);
  const [editIconName, setEditIconName] = useState(item.iconName);
  const [pickerOpen, setPickerOpen] = useState(false);

  const handleSave = () => {
    onSave({
      ...item,
      text: editText,
      iconName: editIconName,
    });
    onClose();
  };

  return (
    <Modal
      title={__('Edit list item', 'nextora')}
      onRequestClose={onClose}
      className="nextora-advanced-list-modal"
    >
      <div className="nextora-advanced-list-modal__content">
        <div className="nextora-advanced-list-modal__field">
          <label className="components-base-control__label">
            {__('Icon', 'nextora')}
          </label>
          <div className="nextora-advanced-list-modal__icon-preview">
            <div className="nextora-advanced-list__icon">
              <AdvancedListEditorIcon iconName={editIconName} iconSize={24} strokeWidth={2} />
            </div>
          </div>
          <Button variant="secondary" onClick={() => setPickerOpen(true)}>
            {__('Choose icon', 'nextora')}
          </Button>
          <p className="nextora-advanced-list-modal__icon-name">
            <code>{editIconName}</code>
          </p>
          {pickerOpen && (
            <IconPicker
              currentIcon={editIconName}
              onSelect={(name) => {
                setEditIconName(name);
                setPickerOpen(false);
              }}
              onClose={() => setPickerOpen(false)}
            />
          )}
        </div>

        <TextareaControl
          label={__('Text', 'nextora')}
          value={editText}
          onChange={(value) => setEditText(value)}
          rows={4}
        />

        <div className="nextora-advanced-list-modal__actions">
          <Button variant="primary" onClick={handleSave}>
            {__('Save', 'nextora')}
          </Button>
          <Button variant="secondary" onClick={onClose}>
            {__('Cancel', 'nextora')}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

// ---------------------------------------------------------------------------
// Main Edit Component
// ---------------------------------------------------------------------------

export default function AdvancedListEdit({ attributes, setAttributes }: EditProps) {
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const items = normalizeItems(attributes.items);

  const colorPalette = useThemeColorPalette();
  const lookupPalette = useMemo(() => getMergedPaletteEntries(colorPalette), [colorPalette]);

  const {
    iconSize = 14,
    iconCircleSize = 32,
    iconStyle = 'stacked',
    strokeWidth = 2.5,
    borderRadius = 50,
    iconColor = 'base',
    iconBackgroundColor = 'primary',
    iconBorderColor = 'primary',
    iconTextGap = 14,
    itemGap = 16,
    enableScrollAnimation = true,
  } = attributes;

  useEffect(() => {
    const needsDefaults: Partial<AdvancedListAttributes> = {};

    if (!attributes.iconColor) {
      needsDefaults.iconColor = 'base';
    }
    if (!attributes.iconBackgroundColor) {
      needsDefaults.iconBackgroundColor = 'primary';
    }
    if (!attributes.iconBorderColor) {
      needsDefaults.iconBorderColor = 'primary';
    }

    if (Object.keys(needsDefaults).length > 0) {
      setAttributes(needsDefaults);
    }
  }, []);

  const resolveColorForEditor = (colorValue: string): string => {
    if (!colorValue || colorValue === 'transparent') return 'transparent';
    const entry = lookupPalette.find((p) => p.slug === colorValue);
    if (entry?.color) return entry.color;
    if (colorValue.startsWith('#')) return colorValue;
    return `var(--wp--preset--color--${colorValue})`;
  };

  const effectiveIconColor = iconColor || (iconStyle === 'default' || iconStyle === 'framed' ? 'primary' : 'base');
  const effectiveIconBg = iconBackgroundColor || (iconStyle === 'stacked' ? 'primary' : 'transparent');

  const editorIconColor = resolveColorForEditor(effectiveIconColor) || 'var(--wp--preset--color--base, #000)';
  const editorIconBg = resolveColorForEditor(effectiveIconBg) || 'transparent';
  const editorIconBorder = resolveColorForEditor(iconBorderColor) || 'var(--wp--preset--color--primary, #0066cc)';

  const blockProps = useBlockProps({
    className: `wp-block-nextora-advanced-list--style-${iconStyle}`,
    style: {
      '--nextora-list-icon-color': editorIconColor,
      '--nextora-list-icon-bg': editorIconBg,
      '--nextora-list-icon-border': editorIconBorder,
      '--nextora-list-icon-size': `${iconSize}px`,
      '--nextora-list-icon-circle-size': `${iconCircleSize}px`,
      '--nextora-list-icon-text-gap': `${iconTextGap}px`,
      '--nextora-list-item-gap': `${itemGap}px`,
      '--nextora-list-border-radius': `${borderRadius}%`,
      '--nextora-list-stroke-width': strokeWidth,
    } as React.CSSProperties,
  });

  const editingItem = editingItemId ? items.find((item) => item.id === editingItemId) : undefined;

  const setThemeColor = (key: 'iconColor' | 'iconBackgroundColor' | 'iconBorderColor', value: string | undefined) => {
    setAttributes({
      [key]: normalizeColorForStorage(value, lookupPalette),
    } as Partial<AdvancedListAttributes>);
  };

  const addItem = () => {
    const newItem: AdvancedListItem = {
      id: createItemId(),
      text: __('New list item', 'nextora'),
      iconName: 'check',
    };
    setAttributes({ items: [...items, newItem] });
  };

  const updateItem = (updatedItem: AdvancedListItem) => {
    const newItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setAttributes({ items: newItems });
  };

  const removeItem = (id: string) => {
    setAttributes({ items: items.filter((item) => item.id !== id) });
  };

  const moveItem = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= items.length) return;

    const newItems = [...items];
    [newItems[index], newItems[newIndex]] = [newItems[newIndex], newItems[index]];
    setAttributes({ items: newItems });
  };

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
                background: 'var(--wp--preset--color--base, #fff)',
                border: '1px solid var(--wp--preset--color--contrast, #ddd)',
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
                <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center', color: 'var(--wp--preset--color--primary, #1e1e1e)' }}>
                  <AdvancedListEditorIcon iconName={item.iconName} iconSize={14} strokeWidth={2} />
                </span>
                <span
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    fontSize: '12px',
                    lineHeight: '1.4',
                  }}
                >
                  {item.text || __('(empty)', 'nextora')}
                </span>
              </div>
              <Button
                icon={<LucideActionIcon name="pencil" />}
                label={__('Edit', 'nextora')}
                onClick={() => setEditingItemId(item.id)}
                isSmall
              />
              <Button
                icon={<LucideActionIcon name="chevron-up" />}
                label={__('Move up', 'nextora')}
                onClick={() => moveItem(index, 'up')}
                disabled={index === 0}
                isSmall
              />
              <Button
                icon={<LucideActionIcon name="chevron-down" />}
                label={__('Move down', 'nextora')}
                onClick={() => moveItem(index, 'down')}
                disabled={index === items.length - 1}
                isSmall
              />
              <Button
                icon={<LucideActionIcon name="trash-2" />}
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
            icon={<LucideActionIcon name="plus" />}
            style={{ width: '100%', justifyContent: 'center', marginTop: items.length > 0 ? '4px' : '0' }}
          >
            {__('Add item', 'nextora')}
          </Button>
        </PanelBody>

        <PanelBody title={__('Settings', 'nextora')} initialOpen={false}>
          <SelectControl
            label={__('Icon style', 'nextora')}
            value={iconStyle as 'default' | 'stacked' | 'framed'}
            options={[
              { label: __('Default', 'nextora'), value: 'default' },
              { label: __('Stacked', 'nextora'), value: 'stacked' },
              { label: __('Framed', 'nextora'), value: 'framed' },
            ]}
            onChange={(value) => setAttributes({ iconStyle: value })}
            help={__(
              'Stacked adds a filled background; Framed adds a border around the icon.',
              'nextora'
            )}
          />
          <RangeControl
            label={__('Icon size', 'nextora')}
            value={iconSize}
            onChange={(value) => setAttributes({ iconSize: value || 14 })}
            min={8}
            max={32}
          />
          {(iconStyle === 'stacked' || iconStyle === 'framed') && (
            <>
              <RangeControl
                label={__('Icon circle size', 'nextora')}
                value={iconCircleSize}
                onChange={(value) => setAttributes({ iconCircleSize: value || 32 })}
                min={20}
                max={80}
              />
              <RangeControl
                label={__('Border radius', 'nextora')}
                value={borderRadius}
                onChange={(value) => setAttributes({ borderRadius: value || 50 })}
                min={0}
                max={50}
                help={__('0 = square, 50 = circle', 'nextora')}
              />
            </>
          )}
          <RangeControl
            label={__('Stroke width', 'nextora')}
            value={strokeWidth}
            onChange={(value) => setAttributes({ strokeWidth: value || 2 })}
            min={1}
            max={4}
            step={0.5}
          />
          <RangeControl
            label={__('Gap between icon and text', 'nextora')}
            value={iconTextGap}
            onChange={(value) => setAttributes({ iconTextGap: value || 14 })}
            min={4}
            max={40}
          />
          <RangeControl
            label={__('Gap between items', 'nextora')}
            value={itemGap}
            onChange={(value) => setAttributes({ itemGap: value || 16 })}
            min={4}
            max={60}
          />
        </PanelBody>

        <PanelColorSettings
          title={__('Colors', 'nextora')}
          colors={colorPalette}
          colorSettings={[
            {
              value: colorValueForPicker(iconColor, colorPalette, lookupPalette),
              onChange: (v) => setThemeColor('iconColor', v),
              label: __('Icon color', 'nextora'),
            },
            ...(iconStyle === 'stacked' ? [{
              value: colorValueForPicker(iconBackgroundColor, colorPalette, lookupPalette),
              onChange: (v: string | undefined) => setThemeColor('iconBackgroundColor', v),
              label: __('Icon background color', 'nextora'),
            }] : []),
            ...(iconStyle === 'framed' ? [
              {
                value: colorValueForPicker(iconBackgroundColor, colorPalette, lookupPalette),
                onChange: (v: string | undefined) => setThemeColor('iconBackgroundColor', v),
                label: __('Icon background color', 'nextora'),
              },
              {
                value: colorValueForPicker(iconBorderColor, colorPalette, lookupPalette),
                onChange: (v: string | undefined) => setThemeColor('iconBorderColor', v),
                label: __('Icon border color', 'nextora'),
              },
            ] : []),
          ]}
        />

        <PanelBody title={__('Animation', 'nextora')}>
          <ToggleControl
            label={__('Animate on scroll', 'nextora')}
            checked={enableScrollAnimation}
            onChange={(value) => setAttributes({ enableScrollAnimation: value })}
            help={__('Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.', 'nextora')}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <ul className="nextora-advanced-list__items">
          {items.map((item) => (
            <li key={item.id} className="nextora-advanced-list__item" data-item-id={item.id}>
              <span className={`nextora-advanced-list__icon nextora-advanced-list__icon--${iconStyle}`} aria-hidden="true">
                <AdvancedListEditorIcon iconName={item.iconName} iconSize={iconSize} strokeWidth={strokeWidth} />
              </span>
              <span className="nextora-advanced-list__text">{item.text || ''}</span>
            </li>
          ))}
        </ul>
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
