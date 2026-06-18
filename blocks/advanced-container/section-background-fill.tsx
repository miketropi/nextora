import { __ } from '@wordpress/i18n';
import { Button, ButtonGroup, ColorPalette, GradientPicker } from '@wordpress/components';
import {
  colorValueForPicker,
  getMergedPaletteEntries,
  normalizeColorForStorage,
  type PaletteColor,
} from './color-utils';
import {
  getMergedGradientEntries,
  gradientValueForPicker,
  normalizeGradientForStorage,
  type GradientPreset,
} from './gradient-utils';

type SectionBackgroundFillProps = {
  fillType: 'solid' | 'gradient';
  solidColor: string;
  gradient: string;
  colorPalette: PaletteColor[];
  lookupPalette: PaletteColor[];
  lookupGradients: GradientPreset[];
  onFillTypeChange: (fillType: 'solid' | 'gradient') => void;
  onSolidColorChange: (value: string) => void;
  onGradientChange: (value: string) => void;
};

export default function SectionBackgroundFill({
  fillType,
  solidColor,
  gradient,
  colorPalette,
  lookupPalette,
  lookupGradients,
  onFillTypeChange,
  onSolidColorChange,
  onGradientChange,
}: SectionBackgroundFillProps) {
  return (
    <div className="nextora-advanced-container__section-fill">
      <p className="components-base-control__label">{__('Background', 'nextora')}</p>
      <ButtonGroup className="nextora-advanced-container__section-fill-tabs">
        <Button
          variant={fillType === 'solid' ? 'primary' : 'secondary'}
          onClick={() => onFillTypeChange('solid')}
        >
          {__('Color', 'nextora')}
        </Button>
        <Button
          variant={fillType === 'gradient' ? 'primary' : 'secondary'}
          onClick={() => onFillTypeChange('gradient')}
        >
          {__('Gradient', 'nextora')}
        </Button>
      </ButtonGroup>

      {fillType === 'solid' ? (
        <div className="nextora-advanced-container__section-fill-panel">
          <ColorPalette
            colors={colorPalette}
            value={colorValueForPicker(solidColor, colorPalette, lookupPalette)}
            onChange={(next) =>
              onSolidColorChange(normalizeColorForStorage(typeof next === 'string' ? next : '', lookupPalette))
            }
            clearable
          />
        </div>
      ) : (
        <div className="nextora-advanced-container__section-fill-panel">
          <GradientPicker
            value={gradientValueForPicker(gradient, lookupGradients)}
            gradients={lookupGradients}
            onChange={(next) => onGradientChange(normalizeGradientForStorage(next ?? '', lookupGradients))}
            clearable
            __experimentalIsRenderedInSidebar
          />
        </div>
      )}
    </div>
  );
}
