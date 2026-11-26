import { PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { colorValueForPicker, normalizeColorForStorage, storedColorToCss, useThemeColorPalette } from '../advanced-container/color-utils';
import type { CSSProperties } from 'react';

export type Divider = { type?: 'none' | 'torn-paper'; color?: string; height?: number; heightTablet?: number; heightMobile?: number; flip?: boolean };

export function DividerControls({ title, value, onChange }: { title: string; value: Divider; onChange: (value: Divider) => void }) {
  const palette = useThemeColorPalette();
  const patch = (next: Partial<Divider>) => onChange({ ...value, ...next });
  return <PanelBody title={title} initialOpen={false}>
    <SelectControl label={__('Shape', 'nextora')} value={value.type || 'none'} options={[{ label: __('None', 'nextora'), value: 'none' }, { label: __('Torn Paper', 'nextora'), value: 'torn-paper' }]} onChange={(type) => patch({ type })} />
    {value.type === 'torn-paper' && <>
      <PanelColorSettings title={__('Divider color', 'nextora')} colorSettings={[{ label: __('Color', 'nextora'), value: colorValueForPicker(value.color || '', palette, palette), onChange: (color) => patch({ color: normalizeColorForStorage(color, palette) }) }]} />
      <RangeControl label={__('Desktop height', 'nextora')} value={value.height ?? 26} min={0} max={200} onChange={(height) => patch({ height })} />
      <RangeControl label={__('Tablet height', 'nextora')} value={value.heightTablet ?? value.height ?? 26} min={0} max={200} onChange={(heightTablet) => patch({ heightTablet })} />
      <RangeControl label={__('Mobile height', 'nextora')} value={value.heightMobile ?? value.heightTablet ?? value.height ?? 26} min={0} max={200} onChange={(heightMobile) => patch({ heightMobile })} />
      <ToggleControl label={__('Flip vertically', 'nextora')} checked={!!value.flip} onChange={(flip) => patch({ flip })} />
    </>}
  </PanelBody>;
}

export function DividerElement({ value, position }: { value?: Divider; position: 'top' | 'bottom' }) {
  if (value?.type !== 'torn-paper') return null;
  const clamp = (n: number) => Math.max(0, Math.min(200, n));
  const style = { color: storedColorToCss(value.color || 'base'), '--divider-height': `${clamp(value.height ?? 26)}px`, '--divider-tablet-height': `${clamp(value.heightTablet ?? value.height ?? 26)}px`, '--divider-mobile-height': `${clamp(value.heightMobile ?? value.heightTablet ?? value.height ?? 26)}px` } as CSSProperties;
  return <span aria-hidden="true" className={`nextora-flexbox-divider nextora-flexbox-divider--${position}${value.flip ? ' nextora-flexbox-divider--flip' : ''}`} style={style} />;
}
