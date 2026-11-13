import { __ } from '@wordpress/i18n';
import { SelectControl, RangeControl, ToggleControl } from '@wordpress/components';
import { InspectorSection } from './inspector-section';
import { PanelColorSettings } from '@wordpress/block-editor';
import type { CSSProperties } from 'react';
import { colorValueForPicker, normalizeColorForStorage, storedColorToCss, useThemeColorPalette } from './color-utils';

export type ShapeDividerSettings = {
  type?: 'none' | 'curve' | 'wave';
  color?: string;
  height?: number;
  heightTablet?: number;
  heightMobile?: number;
  flip?: boolean;
};

export function ShapeDividerControls({ position, value, onChange }: {
  position: 'top' | 'bottom'; value: ShapeDividerSettings; onChange: (value: ShapeDividerSettings) => void;
}) {
  const palette = useThemeColorPalette();
  const patch = (next: Partial<ShapeDividerSettings>) => onChange({ ...value, ...next });
  return <InspectorSection title={position === 'top' ? __('Top divider', 'nextora') : __('Bottom divider', 'nextora')}>
    <SelectControl label={__('Shape', 'nextora')} value={value.type || 'none'} options={[
      { label: __('None', 'nextora'), value: 'none' }, { label: __('Curve', 'nextora'), value: 'curve' }, { label: __('Layered Wave', 'nextora'), value: 'wave' },
    ]} onChange={(type) => patch({ type: type as ShapeDividerSettings['type'] })} />
    {value.type && value.type !== 'none' && <>
      <PanelColorSettings title={__('Divider Color', 'nextora')} colorSettings={[{ label: __('Color', 'nextora'), value: colorValueForPicker(value.color || '', palette, palette), onChange: (color) => patch({ color: normalizeColorForStorage(color, palette) }) }]} />
      <RangeControl label={__('Desktop height', 'nextora')} value={value.height ?? 70} min={0} max={300} onChange={(height) => patch({ height })} />
      <RangeControl label={__('Tablet height', 'nextora')} value={value.heightTablet ?? value.height ?? 70} min={0} max={300} onChange={(heightTablet) => patch({ heightTablet })} />
      <RangeControl label={__('Mobile height', 'nextora')} value={value.heightMobile ?? 40} min={0} max={200} onChange={(heightMobile) => patch({ heightMobile })} />
      <ToggleControl label={__('Flip horizontally', 'nextora')} checked={!!value.flip} onChange={(flip) => patch({ flip })} />
    </>}
  </InspectorSection>;
}

export function ShapeDivider({ position, value }: { position: 'top' | 'bottom'; value: ShapeDividerSettings }) {
  if (!value.type || !['curve', 'wave'].includes(value.type)) return null;
  const style = {
    color: storedColorToCss(value.color || 'base'),
    '--nextora-divider-height': `${value.height ?? 70}px`,
    '--nextora-divider-height-tablet': `${value.heightTablet ?? value.height ?? 70}px`,
    '--nextora-divider-height-mobile': `${value.heightMobile ?? 40}px`,
  } as CSSProperties;
  return <div className={`nextora-advanced-container__divider nextora-advanced-container__divider--${position}${value.flip ? ' nextora-advanced-container__divider--flip' : ''}`} style={style} aria-hidden="true">
    <svg viewBox="0 0 1440 70" preserveAspectRatio="none" focusable="false">
      {value.type === 'wave' ? <><path d="M0 70V30C240 4 480 4 720 30S1200 56 1440 30V70Z" fill="currentColor" fillOpacity=".25" /><path d="M0 70V36C240 10 480 10 720 36S1200 62 1440 36V70Z" fill="currentColor" fillOpacity=".5" /><path d="M0 70V42C240 16 480 16 720 42S1200 68 1440 42V70Z" fill="currentColor" /></> : <path d="M0 70V40C200 -5 420 -10 700 25s560 40 740 -10V70Z" fill="currentColor" />}
    </svg>
  </div>;
}
