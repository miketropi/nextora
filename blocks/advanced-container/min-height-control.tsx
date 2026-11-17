import { __ } from '@wordpress/i18n';
import { SelectControl, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

const UNITS = ['px', 'rem', 'em', '%', 'vh', 'dvh', 'svh', 'vw'] as const;
type HeightUnit = typeof UNITS[number];

const RANGES: Record<HeightUnit, { max: number; step: number }> = {
  px: { max: 1200, step: 1 },
  rem: { max: 80, step: 0.5 },
  em: { max: 80, step: 0.5 },
  '%': { max: 200, step: 1 },
  vh: { max: 200, step: 1 },
  dvh: { max: 200, step: 1 },
  svh: { max: 200, step: 1 },
  vw: { max: 200, step: 1 },
};

export function MinHeightControl({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const [emptyUnit, setEmptyUnit] = useState<HeightUnit>('px');
  const trimmed = value.trim();
  const match = trimmed.match(/^([+-]?(?:\d+(?:\.\d*)?|\.\d+))(px|rem|em|%|dvh|svh|vh|vw)$/i);
  const legacyValue = trimmed !== '' && !match;
  const unit = (match ? match[2].toLowerCase() : emptyUnit) as HeightUnit;
  const number = match ? Number(match[1]) : undefined;
  const range = RANGES[unit];
  const sliderValue = number === undefined ? (unit === 'px' ? 268 : 0) : Math.max(0, Math.min(range.max, number));

  if (legacyValue) {
    return <TextControl
      label={__('Minimum height', 'nextora')}
      value={value}
      help={__('This existing value is shown as text to preserve it. Enter a number with px, rem, em, %, vh, dvh, svh, or vw to use the slider.', 'nextora')}
      onChange={(next) => onChange(next ?? '')}
    />;
  }

  return <div className="nextora-ac-min-height-control">
    <label className="components-base-control__label">{__('Minimum height', 'nextora')}
    <input
      type="range"
      min={0}
      max={range.max}
      step={range.step}
      value={sliderValue}
      aria-valuetext={number === undefined ? __('Default: 268px', 'nextora') : `${number}${unit}`}
      onChange={(event) => onChange(`${event.currentTarget.value}${unit}`)}
    />
    </label>
    <div className="nextora-ac-min-height-control__fields">
      <TextControl
        label={__('Minimum height value', 'nextora')}
        hideLabelFromVision
        type="number"
        step="any"
        value={match ? match[1] : ''}
        placeholder={unit === 'px' ? '268' : ''}
        onChange={(next) => onChange(next ? `${next}${unit}` : '')}
      />
      <SelectControl
        label={__('Minimum height unit', 'nextora')}
        hideLabelFromVision
        value={unit}
        options={UNITS.map((item) => ({ label: item, value: item }))}
        onChange={(next) => {
          const nextUnit = next as HeightUnit;
          setEmptyUnit(nextUnit);
          if (match) onChange(`${match[1]}${nextUnit}`);
        }}
      />
    </div>
    <p className="components-base-control__help">{__('Content can make the section taller. Empty uses 268px.', 'nextora')}</p>
    <p className="components-base-control__help">{__('Desktop (782px+) 100% · Tablet (600–781px) 85% · Mobile (under 600px) 65%.', 'nextora')}</p>
    {number !== undefined && (number < 0 || number > range.max) ? <p className="components-base-control__help">{__('The saved value is outside the slider range; use the number field to edit it without limits.', 'nextora')}</p> : null}
  </div>;
}
