import { __ } from '@wordpress/i18n';
import { InspectorControls, InnerBlocks, MediaUpload, MediaUploadCheck, useBlockProps } from '@wordpress/block-editor';
import { Button, PanelBody, RangeControl, SelectControl, ToggleControl, ColorPalette, TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useMemo } from '@wordpress/element';
import type { BlockEditProps } from '@wordpress/blocks';
import type { CSSProperties } from 'react';

type Attributes = {
  backgroundType: string;
  backgroundColor: string;
  backgroundImageId: number;
  backgroundImageUrl: string;
  backgroundVideoUrl: string;
  overlayColor: string;
  overlayOpacity: number;
  minHeight: string;
  enableParallax: boolean;
  parallaxSpeed: number;
  enableScrollAnimation: boolean;
};

type PaletteColor = {
  name: string;
  slug: string;
  color: string;
};

const FALLBACK_COLORS: PaletteColor[] = [
  { name: __('Base', 'nextora'), slug: 'base', color: 'var(--wp--preset--color--base)' },
  { name: __('Contrast', 'nextora'), slug: 'contrast', color: 'var(--wp--preset--color--contrast)' },
  { name: __('Primary', 'nextora'), slug: 'primary', color: 'var(--wp--preset--color--primary)' },
  { name: __('Secondary', 'nextora'), slug: 'secondary', color: 'var(--wp--preset--color--secondary)' },
  { name: __('Accent', 'nextora'), slug: 'accent', color: 'var(--wp--preset--color--accent)' },
];

function resolveColor(raw: string): string {
  const value = raw.trim();
  if (!value) return '';
  if (/^#[0-9a-f]{3,8}$/i.test(value)) return value;
  if (/^var\(--wp--preset--color--[a-z0-9-]+\)$/i.test(value)) return value;
  if (/^rgba?\(/i.test(value) || /^hsla?\(/i.test(value)) return value;
  if (/^[a-z0-9-]+$/i.test(value)) return `var(--wp--preset--color--${value.toLowerCase()})`;
  return '';
}

function normalizeColorValue(color: string): string {
  if (!color) return '';
  if (color.startsWith('var(--wp--preset--color--')) {
    return color.replace('var(--wp--preset--color--', '').replace(')', '');
  }
  return color;
}

function useThemeColorPalette(): PaletteColor[] {
  const themeColors = useSelect((select) => {
    try {
      const settings =
        (
          select('core/block-editor') as {
            getSettings?: () => {
              colors?: PaletteColor[];
              color?: { palette?: PaletteColor[] };
            };
          }
        ).getSettings?.() ?? {};
      if (Array.isArray(settings.colors) && settings.colors.length) {
        return settings.colors;
      }
      if (Array.isArray(settings.color?.palette) && settings.color.palette.length) {
        return settings.color.palette;
      }
    } catch {
      /* getSettings unavailable in some editor contexts */
    }
    return [];
  }, []);

  return useMemo(() => {
    if (!Array.isArray(themeColors) || !themeColors.length) {
      return FALLBACK_COLORS;
    }

    const mapped = themeColors
      .filter(
        (entry): entry is { name: string; slug: string; color: string } =>
          !!entry &&
          typeof entry === 'object' &&
          typeof entry.color === 'string' &&
          typeof entry.slug === 'string' &&
          typeof entry.name === 'string',
      )
      .map((entry) => ({
        name: entry.name,
        slug: entry.slug,
        color: entry.color,
      }));

    return mapped.length ? mapped : FALLBACK_COLORS;
  }, [themeColors]);
}

function ColorField({
  label,
  value,
  colors,
  onChange,
  help,
}: {
  label: string;
  value: string;
  colors: PaletteColor[];
  onChange: (next: string) => void;
  help?: string;
}) {
  return (
    <div className="nextora-page-title__color-field">
      <p className="components-base-control__label" style={{ marginBottom: '0.5rem' }}>
        {label}
      </p>
      <ColorPalette
        colors={colors}
        value={normalizeColorValue(value)}
        onChange={(next) => onChange(typeof next === 'string' ? next : '')}
        clearable
      />
      {help ? <p className="components-base-control__help">{help}</p> : null}
    </div>
  );
}

export default function Edit({ attributes, setAttributes }: BlockEditProps<Attributes>) {
  const {
    backgroundType,
    backgroundColor,
    backgroundImageId,
    backgroundImageUrl,
    backgroundVideoUrl,
    overlayColor,
    overlayOpacity,
    minHeight,
    enableParallax,
    parallaxSpeed,
    enableScrollAnimation,
  } = attributes;

  const colorPalette = useThemeColorPalette();
  const resolvedOverlayColor = resolveColor(overlayColor);

  const resolvedBackgroundImageUrl = useSelect(
    (select) => {
      const url = backgroundImageUrl.trim();
      if (url) {
        return url;
      }
      if (backgroundImageId <= 0) {
        return '';
      }
      const media = (
        select('core') as {
          getMedia?: (id: number) => { source_url?: string } | undefined;
        }
      ).getMedia?.(backgroundImageId);
      return typeof media?.source_url === 'string' ? media.source_url : '';
    },
    [backgroundImageId, backgroundImageUrl],
  );

  const hasImage = backgroundType === 'image' && resolvedBackgroundImageUrl !== '';
  const hasVideo = backgroundType === 'video' && backgroundVideoUrl.trim() !== '';
  const showOverlay = (hasImage || hasVideo) && overlayOpacity > 0;

  const minHeightTrimmed = minHeight.trim();

  const blockProps = useBlockProps({
    className: 'nextora-page-title',
    style: {
      ...(minHeightTrimmed ? { '--nextora-page-title-min-height': minHeightTrimmed } : {}),
      backgroundColor: backgroundType === 'color' ? resolveColor(backgroundColor) || undefined : undefined,
      ...(showOverlay
        ? {
            '--nextora-page-title-overlay-color': resolvedOverlayColor || 'var(--wp--preset--color--contrast, #0f172a)',
            '--nextora-page-title-overlay-opacity': String(overlayOpacity),
          }
        : {}),
    } as CSSProperties,
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Layout', 'nextora')} initialOpen>
          <TextControl
            label={__('Minimum height', 'nextora')}
            value={minHeight}
            placeholder="268px"
            help={__(
              'Desktop (782px+). Tablet 85% and mobile 65% of this value. Empty = 268px. Use px, rem, em, %, vh, dvh, svh, or vw.',
              'nextora',
            )}
            onChange={(value) => setAttributes({ minHeight: value ?? '' })}
          />
        </PanelBody>

        <PanelBody title={__('Background', 'nextora')} initialOpen={false}>
          <SelectControl
            label={__('Background type', 'nextora')}
            value={backgroundType as 'color' | 'image' | 'video'}
            options={[
              { label: __('Color', 'nextora'), value: 'color' },
              { label: __('Image', 'nextora'), value: 'image' },
              { label: __('Video', 'nextora'), value: 'video' },
            ]}
            onChange={(value) => setAttributes({ backgroundType: value || 'color' })}
          />

          {backgroundType === 'color' ? (
            <ColorField
              label={__('Background color', 'nextora')}
              value={backgroundColor}
              colors={colorPalette}
              onChange={(value) => setAttributes({ backgroundColor: value })}
            />
          ) : null}

          {backgroundType === 'image' ? (
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media: any) =>
                  setAttributes({
                    backgroundImageId: media?.id ?? 0,
                    backgroundImageUrl: media?.url ?? '',
                  })
                }
                allowedTypes={['image']}
                value={backgroundImageId > 0 ? backgroundImageId : undefined}
                render={({ open }) => (
                  <div>
                    <Button variant="primary" onClick={open}>
                      {backgroundImageUrl ? __('Replace background image', 'nextora') : __('Select background image', 'nextora')}
                    </Button>
                    {backgroundImageUrl ? (
                      <Button
                        variant="secondary"
                        isDestructive
                        onClick={() => setAttributes({ backgroundImageId: 0, backgroundImageUrl: '' })}
                        style={{ marginLeft: '0.75rem' }}
                      >
                        {__('Remove', 'nextora')}
                      </Button>
                    ) : null}
                  </div>
                )}
              />
            </MediaUploadCheck>
          ) : null}

          {backgroundType === 'video' ? (
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media: any) => setAttributes({ backgroundVideoUrl: media?.url ?? '' })}
                allowedTypes={['video']}
                render={({ open }) => (
                  <div>
                    <Button variant="primary" onClick={open}>
                      {backgroundVideoUrl ? __('Replace background video', 'nextora') : __('Select background video', 'nextora')}
                    </Button>
                    {backgroundVideoUrl ? (
                      <Button
                        variant="secondary"
                        isDestructive
                        onClick={() => setAttributes({ backgroundVideoUrl: '' })}
                        style={{ marginLeft: '0.75rem' }}
                      >
                        {__('Remove', 'nextora')}
                      </Button>
                    ) : null}
                  </div>
                )}
              />
            </MediaUploadCheck>
          ) : null}

          {backgroundType === 'image' || backgroundType === 'video' ? (
            <>
              <ColorField
                label={__('Overlay color', 'nextora')}
                value={overlayColor}
                colors={colorPalette}
                onChange={(value) => setAttributes({ overlayColor: value })}
                help={__('Empty = theme contrast color.', 'nextora')}
              />
              <RangeControl
                label={__('Overlay opacity', 'nextora')}
                value={overlayOpacity}
                min={0}
                max={1}
                step={0.05}
                onChange={(value) => setAttributes({ overlayOpacity: value ?? 0.3 })}
              />
            </>
          ) : null}
        </PanelBody>

        <PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
          <ToggleControl
            label={__('Animate on scroll', 'nextora')}
            checked={enableScrollAnimation}
            help={__('Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.', 'nextora')}
            onChange={(value) => setAttributes({ enableScrollAnimation: value })}
          />
          <ToggleControl
            label={__('Enable parallax', 'nextora')}
            checked={enableParallax}
            help={__('Move the background more strongly as the section scrolls. Disabled automatically when the visitor prefers reduced motion.', 'nextora')}
            onChange={(value) => setAttributes({ enableParallax: value })}
          />
          {enableParallax ? (
            <RangeControl
              label={__('Parallax speed', 'nextora')}
              value={parallaxSpeed}
              min={0}
              max={1}
              step={0.05}
              onChange={(value) => setAttributes({ parallaxSpeed: value ?? 0.4 })}
            />
          ) : null}
        </PanelBody>
      </InspectorControls>

      <section {...blockProps}>
        {hasImage ? (
          <div className="nextora-page-title__bg" style={{ backgroundImage: `url(${resolvedBackgroundImageUrl})` }} />
        ) : null}
        {hasVideo ? (
          <div className="nextora-page-title__bg nextora-page-title__bg--video">
            <video autoPlay muted loop playsInline src={backgroundVideoUrl} />
          </div>
        ) : null}
        {showOverlay ? (
          <div
            className="nextora-page-title__overlay"
            style={{
              backgroundColor: resolvedOverlayColor || undefined,
              opacity: overlayOpacity,
            }}
          />
        ) : null}
        <div className="nextora-page-title__inner">
          <InnerBlocks />
        </div>
      </section>
    </>
  );
}
