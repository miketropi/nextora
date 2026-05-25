// @ts-nocheck
import { __ } from '@wordpress/i18n';
import {
  InspectorControls,
  InnerBlocks,
  RichText,
  useBlockProps,
  useInnerBlocksProps,
} from '@wordpress/block-editor';
import {
  ColorPalette,
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useMemo } from '@wordpress/element';

const ITEMS_TEMPLATE = [['nextora/testimonial-item', {}]];

const HEADING_LEVEL_OPTIONS = [
  { label: __('H1', 'nextora'), value: '1' },
  { label: __('H2', 'nextora'), value: '2' },
  { label: __('H3', 'nextora'), value: '3' },
  { label: __('H4', 'nextora'), value: '4' },
  { label: __('H5', 'nextora'), value: '5' },
  { label: __('H6', 'nextora'), value: '6' },
];

const FALLBACK_COLORS = [
  { name: __('Primary', 'nextora'), slug: 'primary', color: 'var(--wp--preset--color--primary)' },
  { name: __('Contrast', 'nextora'), slug: 'contrast', color: 'var(--wp--preset--color--contrast)' },
  { name: __('Secondary', 'nextora'), slug: 'secondary', color: 'var(--wp--preset--color--secondary)' },
];

function resolveAccentColor(raw) {
  const value = String(raw || '').trim();
  if (!value) {
    return 'var(--wp--preset--color--primary)';
  }
  if (/^#[0-9a-f]{3,8}$/i.test(value)) {
    return value;
  }
  if (/^var\(--wp--preset--color--[a-z0-9-]+\)$/i.test(value)) {
    return value;
  }
  if (/^[a-z0-9-]+$/i.test(value)) {
    return `var(--wp--preset--color--${value.toLowerCase()})`;
  }
  return 'var(--wp--preset--color--primary)';
}

function normalizePaletteValue(color) {
  if (!color) {
    return '';
  }
  if (color.startsWith('var(--wp--preset--color--')) {
    return color.replace('var(--wp--preset--color--', '').replace(')', '');
  }
  return color;
}

function useThemeColorPalette() {
  const themeColors = useSelect((select) => {
    try {
      const settings = select('core/block-editor')?.getSettings?.() ?? {};
      if (Array.isArray(settings.colors) && settings.colors.length) {
        return settings.colors;
      }
      if (Array.isArray(settings.color?.palette) && settings.color.palette.length) {
        return settings.color.palette;
      }
    } catch {
      /* noop */
    }
    return [];
  }, []);

  return useMemo(() => {
    if (!Array.isArray(themeColors) || !themeColors.length) {
      return FALLBACK_COLORS;
    }
    return themeColors.filter(
      (entry) =>
        entry &&
        typeof entry.color === 'string' &&
        typeof entry.slug === 'string' &&
        typeof entry.name === 'string',
    );
  }, [themeColors]);
}

function AccentSvg({ color }) {
  return (
    <div className="nextora-testimonials__accent" aria-hidden="true" style={{ color }}>
      <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 12 C12 2, 22 22, 32 12 S52 2, 62 12 S72 22, 78 12"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default function Edit({ attributes, setAttributes }) {
  const {
    heading,
    headingLevel = 2,
    showAccent = true,
    accentColor = '',
    autoplay = false,
    autoplayDelay = 5000,
    speed = 600,
    showPagination = true,
    showNav = false,
    loop = true,
    pauseOnHover = true,
    effect = 'slide',
    enableScrollAnimation = true,
  } = attributes;

  const palette = useThemeColorPalette();
  const accentResolved = resolveAccentColor(accentColor);
  const headingTag = `h${Math.min(6, Math.max(1, headingLevel || 2))}`;

  const blockProps = useBlockProps({
    className: 'nextora-testimonials nextora-testimonials--editor',
    style: { '--nextora-testimonials-accent': accentResolved },
  });

  const innerBlocksProps = useInnerBlocksProps(
    { className: 'nextora-testimonials__items-editor' },
    {
      allowedBlocks: ['nextora/testimonial-item'],
      template: ITEMS_TEMPLATE,
      templateLock: false,
      renderAppender: InnerBlocks.ButtonBlockAppender,
    },
  );

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Content', 'nextora')} initialOpen>
          <SelectControl
            label={__('Heading level', 'nextora')}
            value={String(headingLevel)}
            options={HEADING_LEVEL_OPTIONS}
            onChange={(value) => setAttributes({ headingLevel: parseInt(value || '2', 10) })}
          />
          <ToggleControl
            label={__('Show accent', 'nextora')}
            checked={showAccent !== false}
            onChange={(value) => setAttributes({ showAccent: value })}
          />
        </PanelBody>

        <PanelBody title={__('Colors', 'nextora')} initialOpen={false}>
          <p className="components-base-control__label">{__('Accent color', 'nextora')}</p>
          <ColorPalette
            colors={palette}
            value={normalizePaletteValue(accentColor)}
            onChange={(value) => setAttributes({ accentColor: typeof value === 'string' ? value : '' })}
            clearable
          />
          <p className="components-base-control__help">
            {__('Decorative line above the section heading. Empty = theme default.', 'nextora')}
          </p>
        </PanelBody>

        <PanelBody title={__('Settings', 'nextora')} initialOpen={false}>
          <SelectControl
            label={__('Effect', 'nextora')}
            value={effect}
            options={[
              { label: __('Slide', 'nextora'), value: 'slide' },
              { label: __('Fade', 'nextora'), value: 'fade' },
            ]}
            onChange={(value) => setAttributes({ effect: value || 'slide' })}
          />
          <ToggleControl
            label={__('Loop', 'nextora')}
            checked={loop !== false}
            onChange={(value) => setAttributes({ loop: value })}
          />
          <RangeControl
            label={__('Speed (ms)', 'nextora')}
            value={speed}
            onChange={(value) => setAttributes({ speed: value ?? 600 })}
            min={100}
            max={2000}
            step={50}
          />
        </PanelBody>

        <PanelBody title={__('Autoplay', 'nextora')} initialOpen={false}>
          <ToggleControl
            label={__('Enable autoplay', 'nextora')}
            checked={autoplay === true}
            onChange={(value) => setAttributes({ autoplay: value })}
          />
          {autoplay ? (
            <>
              <RangeControl
                label={__('Autoplay interval (ms)', 'nextora')}
                value={autoplayDelay}
                onChange={(value) => setAttributes({ autoplayDelay: value ?? 5000 })}
                min={1000}
                max={10000}
                step={250}
              />
              <ToggleControl
                label={__('Pause on hover', 'nextora')}
                checked={pauseOnHover !== false}
                onChange={(value) => setAttributes({ pauseOnHover: value })}
              />
            </>
          ) : null}
        </PanelBody>

        <PanelBody title={__('Navigation', 'nextora')} initialOpen={false}>
          <ToggleControl
            label={__('Show pagination', 'nextora')}
            checked={showPagination !== false}
            onChange={(value) => setAttributes({ showPagination: value })}
          />
          <ToggleControl
            label={__('Show navigation', 'nextora')}
            checked={showNav === true}
            onChange={(value) => setAttributes({ showNav: value })}
          />
        </PanelBody>

        <PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
          <ToggleControl
            label={__('Animate on scroll', 'nextora')}
            help={__(
              'Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.',
              'nextora',
            )}
            checked={enableScrollAnimation !== false}
            onChange={(value) => setAttributes({ enableScrollAnimation: value })}
          />
        </PanelBody>
      </InspectorControls>

      <section {...blockProps}>
        <div className="nextora-testimonials__layout">
          <div className="nextora-testimonials__heading-panel">
            {showAccent !== false ? <AccentSvg color={accentResolved} /> : null}
            <RichText
              tagName={headingTag}
              className="nextora-testimonials__heading"
              value={heading}
              onChange={(value) => setAttributes({ heading: value })}
              placeholder={__('Real Lives, Lasting Change', 'nextora')}
              allowedFormats={[]}
            />
          </div>
          <div className="nextora-testimonials__carousel-editor">
            <div {...innerBlocksProps} />
            <p className="nextora-testimonials__editor-hint components-base-control__help">
              {__('Slider motion runs on the site, not in the editor.', 'nextora')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
