import { createBlock, registerBlockType, registerBlockVariation, type BlockConfiguration } from '@wordpress/blocks';
import { InspectorControls, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import * as blockEditor from '@wordpress/block-editor';
import { Button, Notice, PanelBody, RangeControl, SelectControl, TextControl, ToggleControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import metadata from './block.json';
import SectionBackgroundFill from '../advanced-container/section-background-fill';
import { getMergedPaletteEntries, storedColorToCss, useThemeColorPalette } from '../advanced-container/color-utils';
import { getMergedGradientEntries, useThemeGradients } from '../advanced-container/gradient-utils';

const SpacingSizesControl = (blockEditor as unknown as { __experimentalSpacingSizesControl: React.ComponentType<any> }).__experimentalSpacingSizesControl;

type Device = 'desktop' | 'tablet' | 'mobile';
type Settings = Record<string, string>;
type Attributes = { tagName: string; desktop: Settings; tablet: Settings; mobile: Settings; ariaLabel: string; useContentWidth?: boolean; chooseLayout?: boolean; overlayColor?: string; overlayGradient?: string; overlayType?: string; overlayOpacity?: number; layout?: { type?: string; inherit?: boolean } };
type Props = { attributes: Attributes; setAttributes: (value: Partial<Attributes>) => void; clientId: string };

const fields: Record<string, string> = {
  display: 'display', direction: 'flex-direction', justify: 'justify-content', align: 'align-items',
  wrap: 'flex-wrap', columnGap: 'column-gap', rowGap: 'row-gap', columns: 'grid-template-columns',
  width: 'width', minWidth: 'min-width', maxWidth: 'max-width', height: 'height', minHeight: 'min-height', maxHeight: 'max-height', overflow: 'overflow',
  position: 'position', top: 'top', right: 'right', bottom: 'bottom', left: 'left', zIndex: 'z-index',
};
const tags = ['div', 'section', 'article', 'aside', 'header', 'footer', 'main', 'nav'];
const lengthPattern = /^(?:0|(?:\d*\.)?\d+(?:px|%|em|rem|vw|vh|vmin|vmax|ch|ex))$/;
const offsetPattern = /^-?(?:0|(?:\d*\.)?\d+(?:px|%|em|rem|vw|vh|vmin|vmax|ch|ex))$/;
function cssValue(key: string, value: string): string {
  if (key === 'columns') return /^[1-9]$|^1[0-2]$/.test(value) ? `repeat(${value}, minmax(0, 1fr))` : '';
  if (key === 'columnGap' || key === 'rowGap') {
    const preset = /^var:preset\|spacing\|([a-zA-Z0-9-]+)$/.exec(value);
    if (preset) return `var(--wp--preset--spacing--${preset[1]})`;
  }
  if (['columnGap', 'rowGap', 'width', 'minWidth', 'maxWidth', 'height', 'minHeight', 'maxHeight'].includes(key)) return lengthPattern.test(value) || (['width', 'height'].includes(key) && value === 'auto') ? value : '';
  if (['top', 'right', 'bottom', 'left'].includes(key)) return offsetPattern.test(value) || value === 'auto' ? value : '';
  if (key === 'zIndex') return /^-?\d+$/.test(value) ? value : '';
  const allowed: Record<string, string[]> = {
    display: ['flex', 'block', 'grid', 'inline-block', 'inline-flex', 'none'], direction: ['row', 'column', 'row-reverse', 'column-reverse'],
    justify: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    align: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'], wrap: ['nowrap', 'wrap', 'wrap-reverse'],
    position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
    overflow: ['visible', 'hidden', 'auto'],
  };
  return allowed[key]?.includes(value) ? value : '';
}
function previousStyle(attributes: Attributes): Record<string, string> {
  const style: Record<string, string> = {};
  Object.entries(attributes.desktop || {}).forEach(([key, value]) => {
    const valid = cssValue(key, value);
    if (fields[key] && valid) style[`--flexbox-${fields[key]}`] = valid;
  });
  const settings = attributes.desktop || {};
  const minWidth = settings.gridMinWidth || '';
  if (lengthPattern.test(minWidth) && parseFloat(minWidth) > 0) {
    const columns = /^[1-9]$|^1[0-2]$/.test(settings.columns || '') ? Number(settings.columns) : 3;
    const gap = cssValue('columnGap', settings.columnGap || '') || '0px';
    style['--flexbox-grid-template-columns'] = `repeat(auto-fit, minmax(min(100%, max(${minWidth}, calc((100% - ${columns - 1} * ${gap}) / ${columns}))), 1fr))`;
  } else if (settings.display === 'grid' && !settings.columns) {
    style['--flexbox-grid-template-columns'] = 'repeat(3, minmax(0, 1fr))';
  }
  return style;
}
const responsiveKeys = ['direction', 'justify', 'align', 'wrap', 'columnGap', 'rowGap', 'columns', 'width'];
function deviceLabel(device: Device) {
  return device === 'mobile' ? __('Editing: Mobile', 'nextora') : device === 'tablet' ? __('Editing: Tablet', 'nextora') : __('Editing: Desktop', 'nextora');
}
function responsiveLabel(label: string, device: Device) {
  return <>{label} <span className="nextora-flexbox-responsive-indicator" title={deviceLabel(device)}><svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{device === 'desktop' ? <><rect x="2" y="3" width="20" height="14" rx="1" /><path d="M12 17v4M8 21h8" /></> : device === 'tablet' ? <><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M11 19h2" /></> : <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>}</svg><span className="screen-reader-text">{deviceLabel(device)}</span></span></>;
}
function blockStyle(attributes: Attributes): Record<string, string> {
  const style = previousStyle(attributes);
  const desktop = attributes.desktop || {};
  if (desktop.gridMinWidth && parseFloat(desktop.gridMinWidth) > 0 && desktop.columnGap === '0') {
    style['--flexbox-grid-template-columns'] = style['--flexbox-grid-template-columns'].replace('* 0)', '* 0px)');
  }
  (['tablet', 'mobile'] as const).forEach((device) => {
    const settings = attributes[device] || {};
    responsiveKeys.forEach((key) => {
      const value = cssValue(key, settings[key] || '');
      if (value) style[`--flexbox-${device}-${fields[key]}`] = value;
    });
    // Grid sizing depends on the effective column count and gap at each breakpoint.
    if (settings.columns || settings.columnGap) {
      const effective = { ...desktop, ...(device === 'mobile' ? attributes.tablet : {}), ...settings };
      const grid = previousStyle({ ...attributes, desktop: effective });
      if (grid['--flexbox-grid-template-columns']) {
        style[`--flexbox-${device}-grid-template-columns`] = grid['--flexbox-grid-template-columns'].replace('* 0)', '* 0px)');
      }
    }
  });
  return style;
}
function overlayStyle(attributes: Attributes): Record<string, string> {
  const value = attributes.overlayType === 'gradient' ? attributes.overlayGradient : attributes.overlayColor;
  if (!value) return {};
  const background = attributes.overlayType === 'gradient'
    ? (/^[a-z0-9-]+$/i.test(value) ? `var(--wp--preset--gradient--${value})` : value)
    : storedColorToCss(value);
  if (!background) return {};
  return { '--flexbox-overlay-background': background, '--flexbox-overlay-opacity': String(Math.max(0, Math.min(100, attributes.overlayOpacity ?? 50)) / 100) };
}
// Preserve validation of markup saved by the initial responsive implementation.
function legacyStyle(attributes: Attributes): Record<string, string> {
  const style: Record<string, string> = {};
  (['desktop', 'tablet', 'mobile'] as Device[]).forEach((device) => {
    Object.entries(fields).filter(([key]) => key !== 'maxHeight' && key !== 'overflow').forEach(([, field]) => { style[`--flexbox-${device}-${field}`] = 'initial'; });
    Object.entries(attributes[device] || {}).forEach(([key, value]) => {
      const valid = cssValue(key, value);
      if (fields[key] && valid) style[`--flexbox-${device}-${fields[key]}`] = valid;
    });
  });
  return style;
}
function Edit({ attributes, setAttributes, clientId }: Props) {
  const { insertBlocks } = useDispatch('core/block-editor');
  const palette = useThemeColorPalette();
  const gradients = useThemeGradients();
  useEffect(() => {
    if (attributes.useContentWidth && attributes.layout?.type !== 'constrained') {
      setAttributes({ layout: { type: 'constrained', inherit: true } });
    }
  }, [attributes.useContentWidth, attributes.layout?.type]);
  const isEmpty = useSelect((select) => (select('core/block-editor' as never) as unknown as { getBlockOrder: (id: string) => string[] }).getBlockOrder(clientId).length === 0, [clientId]);
  const device = useSelect((select) => {
    const editor = select('core/editor' as never) as unknown as { getDeviceType?: () => string };
    const preview = editor?.getDeviceType?.()?.toLowerCase();
    return (preview === 'tablet' || preview === 'mobile' ? preview : 'desktop') as Device;
  }, []);
  const desktop = attributes.desktop || {};
  const overrides = attributes[device] || {};
  const settings = { ...desktop, ...(device === 'mobile' ? attributes.tablet : {}), ...(device === 'desktop' ? {} : overrides) };
  if (device === 'mobile') settings.width = overrides.width || '100%';
  const set = (key: string, value: string) => {
    const target = responsiveKeys.includes(key) ? device : 'desktop';
    const next = { ...(attributes[target] || {}) };
    if (value === '') delete next[key]; else next[key] = value;
    setAttributes({ [target]: next });
  };
  const reset = (key: string) => <Button variant="link" onClick={() => set(key, '')}>{__('Reset to inherited', 'nextora')}</Button>;
  const paths: Record<string, string> = {
    'display:flex': 'M5 7a3 3 0 1 1 6 0c0 2-6 2-6 4a3 3 0 1 0 6 0c0-2-6-2-6-4zM13 7a3 3 0 1 1 6 0c0 2-6 2-6 4a3 3 0 1 0 6 0c0-2-6-2-6-4z',
    'display:block': 'M4 6h16v12H4z', 'display:grid': 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
    'display:inline-block': 'M3 9h8v7H3zM14 10h7M14 14h7', 'display:inline-flex': 'M2 8h5v8H2zM9 8h5v8H9zM17 10h5M17 14h5',
    'direction:row': 'M4 12h15m-5-5 5 5-5 5', 'direction:column': 'M12 4v15m-5-5 5 5 5-5',
    'direction:row-reverse': 'M20 12H5m5-5-5 5 5 5', 'direction:column-reverse': 'M12 20V5m-5 5 5-5 5 5',
    'wrap:nowrap': 'M4 12h15m-5-5 5 5-5 5', 'wrap:wrap': 'M4 7h10a4 4 0 0 1 0 8H8m4-4-4 4 4 4', 'wrap:wrap-reverse': 'M4 17h10a4 4 0 0 0 0-8H8m4-4L8 9l4 4',
    'justify:flex-start': 'M4 4v16M7 8h11v3H7zM7 13h7v3H7z', 'justify:center': 'M12 4v16M7 8h10v3H7zM9 13h6v3H9z',
    'justify:flex-end': 'M20 4v16M6 8h11v3H6zM10 13h7v3h-7z', 'justify:space-between': 'M4 4v16M20 4v16M6 9h3v6H6zM15 9h3v6h-3z',
    'justify:space-around': 'M3 4v16M21 4v16M7 9h3v6H7zM14 9h3v6h-3z', 'justify:space-evenly': 'M3 4v16M21 4v16M7 9h3v6H7zM14 9h3v6h-3zM12 5v14',
    'align:stretch': 'M4 4v16M20 4v16M7 9h10v6H7z', 'align:flex-start': 'M4 4v16M7 9h10v6H7z', 'align:center': 'M12 4v16M7 9h10v6H7z',
    'align:flex-end': 'M20 4v16M7 9h10v6H7z', 'align:baseline': 'M4 18h16M7 6v9m0-9h7a3 3 0 0 1 0 6H7',
    'position:static': 'M5 5h14v14H5z', 'position:relative': 'M5 5h14v14H5zM12 8v8m-4-4h8',
    'position:absolute': 'M4 4h16v16H4zM9 9h6v6H9z', 'position:fixed': 'M5 5h14v14H5zM12 9v6m-3-3h6', 'position:sticky': 'M4 5h16M12 5v14m-4-4 4 4 4-4',
    'overflow:visible': 'M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12zm10-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
    'overflow:hidden': 'M3 3l18 18M4 8c-1 1-2 3-2 4 0 0 4 6 10 6 2 0 4-.6 5-1M8 6.6A11 11 0 0 1 12 6c6 0 10 6 10 6s-1 2-3 3',
    'overflow:auto': 'M7 3h10v18H7zM12 6v12m-3-9 3-3 3 3m-6 6 3 3 3-3',
  };
  const defaults: Record<string, string> = { display: 'flex', direction: 'column', justify: 'flex-start', align: 'stretch', wrap: 'wrap', position: 'static', overflow: 'visible' };
  const select = (key: string, label: string, options: [string, string][]) => <fieldset className={`nextora-flexbox-options nextora-flexbox-options--${key}`}>
    <legend>{responsiveKeys.includes(key) ? responsiveLabel(label, device) : label}</legend>
    <div className="nextora-flexbox-options__buttons" role="group" aria-label={label}>
      {options.map(([value, text]) => <Button key={value} className="nextora-flexbox-options__button" label={text} showTooltip aria-pressed={(settings[key] || defaults[key]) === value} isPressed={(settings[key] || defaults[key]) === value} onClick={() => set(key, value)}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={paths[`${key}:${value}`]} /></svg></Button>)}
    </div>
    {device !== 'desktop' && responsiveKeys.includes(key) && (overrides[key] ? reset(key) : <p className="components-base-control__help">{__('Inherited from a larger screen.', 'nextora')}</p>)}
  </fieldset>;
  const input = (key: string, label: string, help: string = __('Use a CSS length, for example 20px, 2rem or 50%. Leave empty to inherit.', 'nextora')) => <TextControl label={label} value={settings[key] || ''} help={help} onChange={(v: string) => set(key, v)} />;
  const effective = (key: string) => settings[key] || ''; 
  const display = effective('display') || 'flex';
  const position = effective('position');
  const Tag = (tags.includes(attributes.tagName) ? attributes.tagName : 'div') as 'div';
  const overlay = overlayStyle(attributes);
  const editorStyle = { ...blockStyle(attributes), ...overlay };
  // Hidden containers remain editable in the block editor.
  if (editorStyle['--flexbox-display'] === 'none') editorStyle['--flexbox-display'] = 'flex';
  const blockProps = useBlockProps({ style: editorStyle, className: [isEmpty && 'nextora-flexbox--empty', attributes.useContentWidth && 'nextora-flexbox--content-width', overlay['--flexbox-overlay-background'] && 'nextora-flexbox--overlay'].filter(Boolean).join(' ') || undefined });
  const showLayouts = !!attributes.chooseLayout && isEmpty;
  const innerProps = useInnerBlocksProps(blockProps, { renderAppender: showLayouts ? () => null : undefined });
  const chooseLayout = (widths: string[]) => {
    if (widths.length) {
      setAttributes({ desktop: { ...desktop, direction: 'row' }, chooseLayout: false });
      insertBlocks(widths.map((width) => createBlock('nextora/flexbox', {
        ...(width ? { desktop: { width } } : {}),
        style: { spacing: { padding: { top: 'var:preset|spacing|10', right: 'var:preset|spacing|10', bottom: 'var:preset|spacing|10', left: 'var:preset|spacing|10' } } },
      })), 0, clientId);
      return;
    }
    setAttributes({ chooseLayout: false });
  };
  return <>
    <InspectorControls group="background">
      <PanelBody className="nextora-flexbox-overlay-panel" title={__('Background overlay', 'nextora')} initialOpen={false}>
        <SectionBackgroundFill fillType={attributes.overlayType === 'gradient' ? 'gradient' : 'solid'} solidColor={attributes.overlayColor || ''} gradient={attributes.overlayGradient || ''} colorPalette={palette} lookupPalette={getMergedPaletteEntries(palette)} lookupGradients={getMergedGradientEntries(gradients)} onFillTypeChange={(overlayType) => setAttributes({ overlayType })} onSolidColorChange={(overlayColor) => setAttributes({ overlayColor })} onGradientChange={(overlayGradient) => setAttributes({ overlayGradient })} />
        <RangeControl label={__('Overlay opacity', 'nextora')} value={attributes.overlayOpacity ?? 50} min={0} max={100} onChange={(overlayOpacity) => setAttributes({ overlayOpacity: overlayOpacity ?? 50 })} />
      </PanelBody>
    </InspectorControls>
    <InspectorControls>
      <PanelBody title={__('Layout', 'nextora')} initialOpen={true}>
        <ToggleControl label={__('Inner blocks use content width', 'nextora')} checked={!!attributes.useContentWidth} onChange={(value: boolean) => setAttributes({ useContentWidth: value, layout: value ? { type: 'constrained', inherit: true } : undefined })} help={__('Uses the theme content and wide widths. Inner blocks are stacked instead of using Flex or Grid.', 'nextora')} />
        {attributes.useContentWidth && <Notice status="info" isDismissible={false}>{__('Flex and Grid layout settings are preserved but do not apply while content width is enabled.', 'nextora')}</Notice>}
        <p>{device === 'desktop' ? __('Editing: Desktop', 'nextora') : device === 'tablet' ? __('Editing: Tablet', 'nextora') : __('Editing: Mobile', 'nextora')}</p>
        {device !== 'desktop' && <p className="components-base-control__help">{__('Display and minimum column width apply to all devices. Other layout settings inherit unless changed.', 'nextora')}</p>}
        {select('display', __('Display', 'nextora'), [['flex', __('Flex', 'nextora')], ['block', __('Block', 'nextora')], ['grid', __('Grid', 'nextora')], ['inline-block', __('Inline block', 'nextora')], ['inline-flex', __('Inline flex', 'nextora')]])}
        {display === 'none' && <Notice status="warning" isDismissible={false}>{__('This container and its contents are hidden on the front end.', 'nextora')}</Notice>}
        {(display === 'flex' || display === 'inline-flex') && <>
          {select('direction', __('Direction', 'nextora'), [['row', __('Row', 'nextora')], ['column', __('Column', 'nextora')], ['row-reverse', __('Row reverse', 'nextora')], ['column-reverse', __('Column reverse', 'nextora')]])}
          {select('wrap', __('Wrap', 'nextora'), [['nowrap', __('No wrap', 'nextora')], ['wrap', __('Wrap', 'nextora')], ['wrap-reverse', __('Wrap reverse', 'nextora')]])}
        </>}
        {(display === 'flex' || display === 'inline-flex' || display === 'grid') && <>
          {display === 'grid' && <>
            <div className="nextora-flexbox-responsive-control" data-device={device} title={deviceLabel(device)}><RangeControl label={__('Max. columns', 'nextora')} value={Number(settings.columns) || 3} min={1} max={12} onChange={(value: number | undefined) => set('columns', String(value ?? 3))} /><span className="screen-reader-text">{deviceLabel(device)}</span></div>
            {device !== 'desktop' && overrides.columns && reset('columns')}
            <UnitControl label={__('Min. column width', 'nextora')} value={settings.gridMinWidth || ''} min={0} units={[{ value: 'px', label: 'px', default: 0 }, { value: 'rem', label: 'rem', default: 0 }, { value: '%', label: '%', default: 0 }]} onChange={(value: string | undefined) => set('gridMinWidth', value ?? '')} />
            <p className="components-base-control__help">{__('Columns will wrap to fewer per row when they can no longer maintain the minimum width.', 'nextora')}</p>
          </>}
          {select('justify', __('Justify content', 'nextora'), [['flex-start', __('Start', 'nextora')], ['center', __('Center', 'nextora')], ['flex-end', __('End', 'nextora')], ['space-between', __('Space between', 'nextora')], ['space-around', __('Space around', 'nextora')], ['space-evenly', __('Space evenly', 'nextora')]])}
          {select('align', __('Align items', 'nextora'), [['stretch', __('Stretch', 'nextora')], ['flex-start', __('Start', 'nextora')], ['center', __('Center', 'nextora')], ['flex-end', __('End', 'nextora')], ['baseline', __('Baseline', 'nextora')]])}
          <div className="nextora-flexbox-responsive-control" data-device={device} title={deviceLabel(device)}><SpacingSizesControl
            label={__('Gap', 'nextora')}
            sides={['vertical', 'horizontal']}
            values={{ top: settings.rowGap || undefined, bottom: settings.rowGap || undefined, left: settings.columnGap || undefined, right: settings.columnGap || undefined }}
            onChange={(values: { top?: string; left?: string }) => {
              const next = { ...(attributes[device] || {}) };
              if (values.top !== settings.rowGap) { if (values.top) next.rowGap = values.top; else delete next.rowGap; }
              if (values.left !== settings.columnGap) { if (values.left) next.columnGap = values.left; else delete next.columnGap; }
              setAttributes({ [device]: next });
            }}
          /><span className="screen-reader-text">{deviceLabel(device)}</span></div>
          {device !== 'desktop' && overrides.rowGap && <Button variant="link" onClick={() => set('rowGap', '')}>{__('Reset row gap to inherited', 'nextora')}</Button>}
          {device !== 'desktop' && overrides.columnGap && <Button variant="link" onClick={() => set('columnGap', '')}>{__('Reset column gap to inherited', 'nextora')}</Button>}
        </>}
        <Button variant="secondary" onClick={() => { const next = { ...(attributes[device] || {}) }; (device === 'desktop' ? ['display', ...responsiveKeys.filter((key) => key !== 'width'), 'gridMinWidth'] : responsiveKeys.filter((key) => key !== 'width')).forEach((key) => delete next[key]); setAttributes({ [device]: next }); }}>{__('Reset layout settings', 'nextora')}</Button>
      </PanelBody>
      <PanelBody title={__('Dimensions', 'nextora')} initialOpen={false}>
        {device !== 'desktop' && <p className="components-base-control__help">{__('Only width changes by device. Other dimensions apply to all devices.', 'nextora')}</p>}
        <div className="nextora-flexbox-dimensions">
          {([
            ['width', __('Width', 'nextora')], ['height', __('Height', 'nextora')],
            ['minWidth', __('Min. width', 'nextora')], ['minHeight', __('Min. height', 'nextora')],
            ['maxWidth', __('Max. width', 'nextora')], ['maxHeight', __('Max. height', 'nextora')],
          ] as [string, string][]).map(([key, label]) => <div key={key} className={key === 'width' ? 'nextora-flexbox-responsive-control' : undefined} data-device={key === 'width' ? device : undefined} title={key === 'width' ? deviceLabel(device) : undefined}><UnitControl label={label} value={settings[key] || ''} min={0} units={[
            { value: 'px', label: 'px', default: 0 }, { value: '%', label: '%', default: 0 }, { value: 'rem', label: 'rem', default: 0 },
            ...(settings[key] && /(?:em|vw|vh|vmin|vmax|ch|ex)$/.test(settings[key]) ? [{ value: settings[key].match(/[a-z]+$/)?.[0] || 'px', label: settings[key].match(/[a-z]+$/)?.[0] || 'px', default: 0 }] : []),
          ]} onChange={(value: string | undefined) => set(key, value || '')} />{key === 'width' && <span className="screen-reader-text">{deviceLabel(device)}</span>}</div>)}
        </div>
        {device !== 'desktop' && overrides.width && reset('width')}
        {select('overflow', __('Overflow', 'nextora'), [['visible', __('Visible', 'nextora')], ['hidden', __('Hidden', 'nextora')], ['auto', __('Auto', 'nextora')]])}
      </PanelBody>
      <PanelBody title={__('Position', 'nextora')} initialOpen={false}>
        <SelectControl label={__('Position', 'nextora')} value={(position || 'static') as 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'} options={[
          { value: 'static', label: __('Default', 'nextora') }, { value: 'relative', label: __('Relative', 'nextora') },
          { value: 'absolute', label: __('Absolute', 'nextora') }, { value: 'fixed', label: __('Fixed', 'nextora') },
          { value: 'sticky', label: __('Sticky', 'nextora') },
        ]} onChange={(value: string) => set('position', value)} />
        {position && position !== 'static' && <>
          <div className="nextora-flexbox-dimensions">
            {([['top', __('Top', 'nextora')], ['right', __('Right', 'nextora')], ['bottom', __('Bottom', 'nextora')], ['left', __('Left', 'nextora')]] as [string, string][]).map(([key, label]) => {
              const currentUnit = settings[key]?.match(/[a-z]+$/)?.[0];
              const units = ['px', '%', 'rem', ...(currentUnit && !['px', 'rem'].includes(currentUnit) && ['em', 'vw', 'vh', 'vmin', 'vmax', 'ch', 'ex'].includes(currentUnit) ? [currentUnit] : [])];
              return <UnitControl key={key} label={label} value={settings[key] || ''} units={units.map((unit) => ({ value: unit, label: unit, default: 0 }))} onChange={(value: string | undefined) => set(key, value || '')} />;
            })}
          </div>
          <TextControl type="number" step={1} label={__('Z-index', 'nextora')} value={settings.zIndex || ''} onChange={(value: string) => set('zIndex', value)} />
        </>}
      </PanelBody>
      <PanelBody title={__('HTML element', 'nextora')} initialOpen={false}>
        <SelectControl label={__('HTML tag', 'nextora')} value={attributes.tagName} options={tags.map((tag) => ({ label: tag, value: tag }))} onChange={(v: string) => setAttributes({ tagName: v })} />
        <TextControl label={__('Accessible label', 'nextora')} value={attributes.ariaLabel} onChange={(v: string) => setAttributes({ ariaLabel: v })} help={__('Use a descriptive label for navigation or other landmarks when needed. Use only one main landmark per page.', 'nextora')} />
      </PanelBody>
    </InspectorControls>
    <Tag {...innerProps} aria-label={attributes.ariaLabel || undefined}>
      {isEmpty && <span className="nextora-flexbox-empty-guide" aria-hidden="true" />}
      {showLayouts && <div className="nextora-flexbox-layout-picker" role="group" aria-label={__('Choose a Flexbox layout', 'nextora')}>
        {([
          [__('Single container', 'nextora'), []],
          [__('Two equal columns', 'nextora'), ['', '']],
          [__('Three equal columns', 'nextora'), ['', '', '']],
          [__('Two thirds and one third', 'nextora'), ['66.6667%', '33.3333%']],
        ] as [string, string[]][]).map(([label, widths]) => <Button key={label} className="nextora-flexbox-layout-picker__option" label={label} showTooltip onClick={() => chooseLayout(widths)}>
          {(widths.length ? widths : ['']).map((width, index) => <span key={index} aria-hidden="true" style={{ flexGrow: width ? parseFloat(width) : 1 }} />)}
        </Button>)}
      </div>}
      {innerProps.children}
    </Tag>
  </>;
}
function Save({ attributes }: { attributes: Attributes }) {
  const Tag = (tags.includes(attributes.tagName) ? attributes.tagName : 'div') as 'div';
  const overlay = overlayStyle(attributes);
  const props = useBlockProps.save({ style: { ...blockStyle(attributes), ...overlay }, className: [attributes.useContentWidth && 'nextora-flexbox--content-width', overlay['--flexbox-overlay-background'] && 'nextora-flexbox--overlay'].filter(Boolean).join(' ') || undefined, 'aria-label': attributes.ariaLabel || undefined });
  return <Tag {...useInnerBlocksProps.save(props)} />;
}
registerBlockType(metadata as BlockConfiguration<Attributes>, {
  edit: Edit,
  save: Save,
  deprecated: [{
    attributes: metadata.attributes,
    supports: metadata.supports,
    save: ({ attributes }: { attributes: Attributes }) => {
      const Tag = (tags.includes(attributes.tagName) ? attributes.tagName : 'div') as 'div';
      const props = useBlockProps.save({ style: previousStyle(attributes), 'aria-label': attributes.ariaLabel || undefined });
      return <Tag {...useInnerBlocksProps.save(props)} />;
    },
  }, {
    attributes: metadata.attributes,
    supports: metadata.supports,
    save: ({ attributes }: { attributes: Attributes }) => {
      const Tag = (tags.includes(attributes.tagName) ? attributes.tagName : 'div') as 'div';
      const props = useBlockProps.save({ style: legacyStyle(attributes), 'aria-label': attributes.ariaLabel || undefined });
      return <Tag {...useInnerBlocksProps.save(props)} />;
    },
  }],
} as unknown as BlockConfiguration<Attributes>);
registerBlockVariation('nextora/flexbox', {
  name: 'default',
  title: 'Flexbox',
  isDefault: true,
  attributes: { chooseLayout: true, style: { spacing: { padding: { top: 'var:preset|spacing|10', right: 'var:preset|spacing|10', bottom: 'var:preset|spacing|10', left: 'var:preset|spacing|10' } } } },
});
