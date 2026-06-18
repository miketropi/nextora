import { __ } from '@wordpress/i18n';
import {
  InspectorControls,
  InnerBlocks,
  MediaUpload,
  MediaUploadCheck,
  useBlockProps,
} from '@wordpress/block-editor';
import {
  Button,
  ButtonGroup,
  ColorPalette,
  FocalPointPicker,
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  TextControl,
  __experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEffect, useMemo, useRef } from '@wordpress/element';
import type { BlockEditProps } from '@wordpress/blocks';
import type { CSSProperties } from 'react';
import {
  BACKGROUND_ANIMATION_CATALOG,
  BACKGROUND_ANIMATION_SPEED_OPTIONS,
  backgroundAnimationClassName,
  backgroundAnimationStyleVars,
  getBackgroundAnimationMeta,
  normalizeBackgroundAnimation,
  normalizeBackgroundAnimationSpeed,
} from './background-animations';
import { buildBackgroundImageStyles, normalizeBackgroundImageSize } from './background-styles';
import {
  colorValueForPicker,
  getMergedPaletteEntries,
  normalizeColorForStorage,
  storedColorToCss,
  useThemeColorPalette,
} from './color-utils';
import {
  getMergedGradientEntries,
  resolveGradientCss,
  useThemeGradients,
} from './gradient-utils';
import { buildHoverRevealImageStyles } from './hover-reveal-styles';
import SectionBackgroundFill from './section-background-fill';

type Attributes = {
  backgroundType: string;
  sectionBackgroundColor: string;
  sectionBackgroundFill: 'solid' | 'gradient';
  sectionBackgroundGradient: string;
  backgroundColor: string;
  backgroundImageId: number;
  backgroundImageUrl: string;
  backgroundImageFocalPoint: { x: number; y: number };
  backgroundImageSize: string;
  backgroundImageCustomSize: string;
  backgroundImageRepeat: boolean;
  backgroundVideoUrl: string;
  overlayColor: string;
  overlayOpacity: number;
  overlayStyle: string;
  minHeight: string;
  enableParallax: boolean;
  enableBackgroundAnimation: boolean;
  backgroundAnimation: string;
  backgroundAnimationSpeed: number;
  parallaxSpeed: number;
  enableScrollAnimation: boolean;
  enableHoverReveal: boolean;
  hoverRevealImageId: number;
  hoverRevealImageUrl: string;
  hoverRevealImageFocalPoint: { x: number; y: number };
  hoverRevealImageSize: string;
};

type ColorAttributeKey = 'sectionBackgroundColor' | 'overlayColor';

function MediaActionButtons({
  hasMedia,
  selectLabel,
  replaceLabel,
  onSelect,
  onRemove,
}: {
  hasMedia: boolean;
  selectLabel: string;
  replaceLabel: string;
  onSelect: () => void;
  onRemove: () => void;
}) {
  return (
    <div
      className={`nextora-advanced-container__media-actions${hasMedia ? '' : ' nextora-advanced-container__media-actions--single'}`}
    >
      <Button variant="primary" onClick={onSelect}>
        {hasMedia ? replaceLabel : selectLabel}
      </Button>
      {hasMedia ? (
        <Button variant="secondary" isDestructive onClick={onRemove}>
          {__('Remove', 'nextora')}
        </Button>
      ) : null}
    </div>
  );
}

function OverlayColorField({
  label,
  value,
  colors,
  lookupPalette,
  onChange,
  help,
}: {
  label: string;
  value: string;
  colors: ReturnType<typeof useThemeColorPalette>;
  lookupPalette: ReturnType<typeof getMergedPaletteEntries>;
  onChange: (next: string) => void;
  help?: string;
}) {
  return (
    <div className="nextora-advanced-container__color-field">
      <p className="components-base-control__label">{label}</p>
      <ColorPalette
        colors={colors}
        value={colorValueForPicker(value, colors, lookupPalette)}
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
    sectionBackgroundColor = '',
    sectionBackgroundFill = 'solid',
    sectionBackgroundGradient = '',
    backgroundColor: legacyBackgroundColor = '',
    backgroundImageId,
    backgroundImageUrl,
    backgroundImageFocalPoint,
    backgroundImageSize,
    backgroundImageCustomSize,
    backgroundImageRepeat,
    backgroundVideoUrl,
    overlayColor,
    overlayOpacity,
    overlayStyle,
    minHeight,
    enableParallax,
    enableBackgroundAnimation,
    backgroundAnimation,
    backgroundAnimationSpeed,
    parallaxSpeed,
    enableScrollAnimation,
    enableHoverReveal,
    hoverRevealImageId,
    hoverRevealImageUrl,
    hoverRevealImageFocalPoint,
    hoverRevealImageSize,
  } = attributes;

  const colorPalette = useThemeColorPalette();
  const lookupPalette = useMemo(() => getMergedPaletteEntries(colorPalette), [colorPalette]);
  const themeGradients = useThemeGradients();
  const lookupGradients = useMemo(() => getMergedGradientEntries(themeGradients), [themeGradients]);
  const migratedColors = useRef(false);

  const resolvedSectionBackgroundColor = sectionBackgroundColor || legacyBackgroundColor;
  const normalizedSectionFill: 'solid' | 'gradient' =
    sectionBackgroundFill === 'gradient' ? 'gradient' : 'solid';
  const normalizedBackgroundAnimation = normalizeBackgroundAnimation(backgroundAnimation);
  const normalizedBackgroundAnimationSpeed = normalizeBackgroundAnimationSpeed(backgroundAnimationSpeed);
  const selectedAnimationMeta = getBackgroundAnimationMeta(normalizedBackgroundAnimation);

  const setThemeColor = (key: ColorAttributeKey, value: string | undefined) => {
    setAttributes({
      [key]: normalizeColorForStorage(value, lookupPalette),
    });
  };

  useEffect(() => {
    if (migratedColors.current) {
      return;
    }

    migratedColors.current = true;

    const updates: Partial<Attributes> = {};

    if (legacyBackgroundColor && !sectionBackgroundColor) {
      updates.sectionBackgroundColor = normalizeColorForStorage(legacyBackgroundColor, lookupPalette);
    }

    for (const key of ['sectionBackgroundColor', 'overlayColor'] as const) {
      const val = key === 'sectionBackgroundColor' ? resolvedSectionBackgroundColor : overlayColor;
      if (!val || typeof val !== 'string') {
        continue;
      }

      if (/^[a-z0-9-]+$/i.test(val) && lookupPalette.some((entry) => entry.slug === val.toLowerCase())) {
        continue;
      }

      const slug = normalizeColorForStorage(val, lookupPalette);
      if (slug !== val && /^[a-z0-9-]+$/.test(slug)) {
        updates[key] = slug;
      }
    }

    if (Object.keys(updates).length) {
      setAttributes(updates);
    }
  }, [
    legacyBackgroundColor,
    lookupPalette,
    overlayColor,
    resolvedSectionBackgroundColor,
    sectionBackgroundColor,
    setAttributes,
  ]);

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

  const resolvedHoverRevealImageUrl = useSelect(
    (select) => {
      const url = hoverRevealImageUrl.trim();
      if (url) {
        return url;
      }
      if (hoverRevealImageId <= 0) {
        return resolvedBackgroundImageUrl;
      }
      const media = (
        select('core') as {
          getMedia?: (id: number) => { source_url?: string } | undefined;
        }
      ).getMedia?.(hoverRevealImageId);
      return typeof media?.source_url === 'string' ? media.source_url : resolvedBackgroundImageUrl;
    },
    [hoverRevealImageId, hoverRevealImageUrl, resolvedBackgroundImageUrl],
  );

  const hasHoverReveal =
    backgroundType === 'color' &&
    enableHoverReveal &&
    typeof resolvedHoverRevealImageUrl === 'string' &&
    resolvedHoverRevealImageUrl !== '';
  const normalizedHoverRevealSize = normalizeBackgroundImageSize(hoverRevealImageSize || backgroundImageSize);
  const resolvedSectionGradientCss = resolveGradientCss(sectionBackgroundGradient, lookupGradients);
  const hoverRevealMaskStyle: CSSProperties =
    normalizedSectionFill === 'gradient' && resolvedSectionGradientCss
      ? { background: resolvedSectionGradientCss }
      : {
          backgroundColor:
            storedColorToCss(resolvedSectionBackgroundColor) || 'var(--wp--preset--color--surface, #fbf7f0)',
        };
  const hoverRevealMaskCss =
    normalizedSectionFill === 'gradient' && resolvedSectionGradientCss
      ? resolvedSectionGradientCss
      : storedColorToCss(resolvedSectionBackgroundColor) || 'var(--wp--preset--color--surface, #fbf7f0)';

  const hasImage = backgroundType === 'image' && resolvedBackgroundImageUrl !== '' && !hasHoverReveal;
  const hasVideo = backgroundType === 'video' && backgroundVideoUrl.trim() !== '';
  const showOverlay = (hasImage || hasVideo) && overlayOpacity > 0;
  const normalizedBackgroundSize = normalizeBackgroundImageSize(backgroundImageSize);
  const overlayModifier =
    overlayStyle === 'fade-right' || overlayStyle === 'cinematic' ? overlayStyle : 'solid';
  const bgAnimationClass = backgroundAnimationClassName(enableBackgroundAnimation && hasImage, normalizedBackgroundAnimation);
  const bgAnimationVars = backgroundAnimationStyleVars(
    enableBackgroundAnimation && hasImage,
    normalizedBackgroundAnimation,
    normalizedBackgroundAnimationSpeed,
  );

  const backgroundImageStyles = hasImage
    ? buildBackgroundImageStyles({
        imageUrl: resolvedBackgroundImageUrl,
        focalPoint: backgroundImageFocalPoint,
        size: normalizedBackgroundSize,
        customSize: backgroundImageCustomSize,
        repeat: backgroundImageRepeat,
      })
    : undefined;

  const hoverRevealImageStyles = hasHoverReveal
    ? buildHoverRevealImageStyles({
        imageUrl: resolvedHoverRevealImageUrl,
        focalPoint: hoverRevealImageFocalPoint,
        size: normalizedHoverRevealSize,
        customSize: backgroundImageCustomSize,
        repeat: backgroundImageRepeat,
      })
    : undefined;

  const minHeightTrimmed = minHeight.trim();
  const resolvedOverlayCss = storedColorToCss(overlayColor) || 'var(--wp--preset--color--contrast, #0f172a)';
  const sectionBackgroundStyle: CSSProperties =
    backgroundType === 'color' && !hasHoverReveal
      ? normalizedSectionFill === 'gradient' && resolvedSectionGradientCss
        ? { background: resolvedSectionGradientCss }
        : { backgroundColor: storedColorToCss(resolvedSectionBackgroundColor) || undefined }
      : {};

  const blockProps = useBlockProps({
    className: [
      'nextora-advanced-container',
      hasHoverReveal ? 'nextora-advanced-container--hover-reveal' : '',
      hasHoverReveal && normalizedSectionFill === 'gradient' ? 'nextora-advanced-container--hover-reveal-gradient' : '',
      bgAnimationClass,
    ]
      .filter(Boolean)
      .join(' '),
    style: {
      ...(minHeightTrimmed ? { '--nextora-ac-min-height': minHeightTrimmed } : {}),
      ...bgAnimationVars,
      ...sectionBackgroundStyle,
      ...(hasHoverReveal
        ? normalizedSectionFill === 'gradient' && resolvedSectionGradientCss
          ? ({ '--nextora-ac-section-bg': resolvedSectionGradientCss } as CSSProperties)
          : ({ '--nextora-ac-hover-mask-color': hoverRevealMaskCss } as CSSProperties)
        : {}),
      ...(showOverlay
        ? {
            '--nextora-ac-overlay-color': resolvedOverlayCss,
            '--nextora-ac-overlay-opacity': String(overlayOpacity),
          }
        : {}),
    } as CSSProperties,
  });

  const handleParallaxChange = (value: boolean) => {
    setAttributes({
      enableParallax: value,
      ...(value ? { enableBackgroundAnimation: false } : {}),
    });
  };

  const handleBackgroundAnimationChange = (value: boolean) => {
    setAttributes({
      enableBackgroundAnimation: value,
      ...(value ? { enableParallax: false, enableHoverReveal: false } : {}),
    });
  };

  const handleHoverRevealChange = (value: boolean) => {
    const updates: Partial<Attributes> = {
      enableHoverReveal: value,
      ...(value
        ? {
            enableParallax: false,
            enableBackgroundAnimation: false,
          }
        : {}),
    };

    if (value && !hoverRevealImageUrl.trim() && resolvedBackgroundImageUrl) {
      updates.hoverRevealImageId = backgroundImageId;
      updates.hoverRevealImageUrl = resolvedBackgroundImageUrl;
    }

    setAttributes(updates);
  };

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
            onChange={(value) =>
              setAttributes({
                backgroundType: value || 'color',
                ...(value !== 'color' ? { enableHoverReveal: false } : {}),
              })
            }
          />

          {backgroundType === 'color' ? (
            <>
              <SectionBackgroundFill
                fillType={normalizedSectionFill}
                solidColor={resolvedSectionBackgroundColor}
                gradient={sectionBackgroundGradient}
                colorPalette={colorPalette}
                lookupPalette={lookupPalette}
                lookupGradients={lookupGradients}
                onFillTypeChange={(fillType) => setAttributes({ sectionBackgroundFill: fillType })}
                onSolidColorChange={(value) => setAttributes({ sectionBackgroundColor: value })}
                onGradientChange={(value) => setAttributes({ sectionBackgroundGradient: value })}
              />
              <ToggleControl
                label={__('Reveal image on hover', 'nextora')}
                checked={enableHoverReveal}
                help={__(
                  'Hide a decorative image under the section background. Moving the cursor erases the background like ink and reveals the image. Uses the background color or gradient above as the mask. Touch devices show the image directly.',
                  'nextora',
                )}
                onChange={handleHoverRevealChange}
              />
              {enableHoverReveal ? (
                <>
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={(media: any) =>
                        setAttributes({
                          hoverRevealImageId: media?.id ?? 0,
                          hoverRevealImageUrl: media?.url ?? '',
                        })
                      }
                      allowedTypes={['image']}
                      value={hoverRevealImageId > 0 ? hoverRevealImageId : undefined}
                      render={({ open }) => (
                        <MediaActionButtons
                          hasMedia={!!resolvedHoverRevealImageUrl}
                          selectLabel={__('Select reveal image', 'nextora')}
                          replaceLabel={__('Replace reveal image', 'nextora')}
                          onSelect={open}
                          onRemove={() => setAttributes({ hoverRevealImageId: 0, hoverRevealImageUrl: '' })}
                        />
                      )}
                    />
                  </MediaUploadCheck>
                  {hasHoverReveal ? (
                    <FocalPointPicker
                      label={__('Reveal image focal point', 'nextora')}
                      url={resolvedHoverRevealImageUrl}
                      value={hoverRevealImageFocalPoint}
                      onChange={(value) => setAttributes({ hoverRevealImageFocalPoint: value })}
                    />
                  ) : null}
                </>
              ) : null}
            </>
          ) : null}

          {backgroundType === 'image' ? (
            <>
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
                    <MediaActionButtons
                      hasMedia={!!backgroundImageUrl}
                      selectLabel={__('Select background image', 'nextora')}
                      replaceLabel={__('Replace background image', 'nextora')}
                      onSelect={open}
                      onRemove={() => setAttributes({ backgroundImageId: 0, backgroundImageUrl: '' })}
                    />
                  )}
                />
              </MediaUploadCheck>

              {hasImage ? (
                <>
                  <FocalPointPicker
                    label={__('Background image focal point', 'nextora')}
                    url={resolvedBackgroundImageUrl}
                    value={backgroundImageFocalPoint}
                    onChange={(value) => setAttributes({ backgroundImageFocalPoint: value })}
                  />
                  <div className="nextora-advanced-container__size-control">
                    <p className="components-base-control__label">{__('Size', 'nextora')}</p>
                    <ButtonGroup>
                      <Button
                        variant={normalizedBackgroundSize === 'cover' ? 'primary' : 'secondary'}
                        onClick={() => setAttributes({ backgroundImageSize: 'cover' })}
                      >
                        {__('Cover', 'nextora')}
                      </Button>
                      <Button
                        variant={normalizedBackgroundSize === 'contain' ? 'primary' : 'secondary'}
                        onClick={() => setAttributes({ backgroundImageSize: 'contain' })}
                      >
                        {__('Contain', 'nextora')}
                      </Button>
                      <Button
                        variant={normalizedBackgroundSize === 'tile' ? 'primary' : 'secondary'}
                        onClick={() => setAttributes({ backgroundImageSize: 'tile' })}
                      >
                        {__('Tile', 'nextora')}
                      </Button>
                    </ButtonGroup>
                    {normalizedBackgroundSize === 'cover' ? (
                      <p className="components-base-control__help">{__('Image covers the space evenly.', 'nextora')}</p>
                    ) : null}
                  </div>
                  {normalizedBackgroundSize === 'tile' ? (
                    <>
                      <UnitControl
                        label={__('Custom size', 'nextora')}
                        value={backgroundImageCustomSize || 'auto'}
                        onChange={(value) => setAttributes({ backgroundImageCustomSize: value ?? '' })}
                        units={[
                          { value: 'px', label: 'px', default: 200 },
                          { value: '%', label: '%', default: 50 },
                          { value: 'em', label: 'em', default: 10 },
                          { value: 'rem', label: 'rem', default: 10 },
                          { value: 'vw', label: 'vw', default: 10 },
                          { value: 'vh', label: 'vh', default: 10 },
                        ]}
                      />
                      <ToggleControl
                        label={__('Repeat', 'nextora')}
                        checked={backgroundImageRepeat}
                        onChange={(value) => setAttributes({ backgroundImageRepeat: value })}
                      />
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          ) : null}

          {backgroundType === 'video' ? (
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media: any) => setAttributes({ backgroundVideoUrl: media?.url ?? '' })}
                allowedTypes={['video']}
                render={({ open }) => (
                  <MediaActionButtons
                    hasMedia={!!backgroundVideoUrl}
                    selectLabel={__('Select background video', 'nextora')}
                    replaceLabel={__('Replace background video', 'nextora')}
                    onSelect={open}
                    onRemove={() => setAttributes({ backgroundVideoUrl: '' })}
                  />
                )}
              />
            </MediaUploadCheck>
          ) : null}
        </PanelBody>

        {hasImage ? (
          <PanelBody title={__('Background animation', 'nextora')} initialOpen={false}>
            <ToggleControl
              label={__('Animate background image', 'nextora')}
              checked={enableBackgroundAnimation}
              help={__(
                'Subtle motion on the background image. Disabled automatically when the visitor prefers reduced motion. Turns off parallax while active.',
                'nextora',
              )}
              onChange={handleBackgroundAnimationChange}
            />
            {enableBackgroundAnimation ? (
              <>
                <SelectControl
                  label={__('Animation effect', 'nextora')}
                  value={normalizedBackgroundAnimation}
                  options={BACKGROUND_ANIMATION_CATALOG.map((entry) => ({
                    label: __(entry.label, 'nextora'),
                    value: entry.value,
                  }))}
                  onChange={(value) =>
                    setAttributes({
                      backgroundAnimation: normalizeBackgroundAnimation(value || 'ken-burns'),
                    })
                  }
                />
                <p className="components-base-control__help nextora-advanced-container__anim-note">
                  {__(selectedAnimationMeta.description, 'nextora')}
                </p>
                <SelectControl
                  label={__('Animation speed', 'nextora')}
                  value={String(normalizedBackgroundAnimationSpeed)}
                  options={BACKGROUND_ANIMATION_SPEED_OPTIONS.map((entry) => ({
                    label: __(entry.label, 'nextora'),
                    value: String(entry.value),
                  }))}
                  onChange={(value) =>
                    setAttributes({
                      backgroundAnimationSpeed: normalizeBackgroundAnimationSpeed(parseFloat(value || '1.75')),
                    })
                  }
                />
              </>
            ) : null}
          </PanelBody>
        ) : null}

        {hasImage || hasVideo ? (
          <PanelBody title={__('Overlay', 'nextora')} initialOpen>
            <div className="nextora-advanced-container__overlay-settings">
              <SelectControl
                label={__('Overlay style', 'nextora')}
                value={overlayModifier}
                options={[
                  { label: __('Uniform', 'nextora'), value: 'solid' },
                  { label: __('Fade left to right', 'nextora'), value: 'fade-right' },
                  { label: __('Cinematic gradient', 'nextora'), value: 'cinematic' },
                ]}
                onChange={(value) => setAttributes({ overlayStyle: value || 'solid' })}
              />
              <RangeControl
                label={__('Overlay opacity', 'nextora')}
                value={overlayOpacity}
                min={0}
                max={1}
                step={0.05}
                onChange={(value) => setAttributes({ overlayOpacity: value ?? 0.3 })}
              />
              <OverlayColorField
                label={__('Overlay color', 'nextora')}
                value={overlayColor}
                colors={colorPalette}
                lookupPalette={lookupPalette}
                onChange={(value) => setThemeColor('overlayColor', value)}
                help={__('Empty = theme contrast color.', 'nextora')}
              />
            </div>
          </PanelBody>
        ) : null}

        <PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
          <ToggleControl
            label={__('Animate on scroll', 'nextora')}
            checked={enableScrollAnimation}
            help={__(
              'Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.',
              'nextora',
            )}
            onChange={(value) => setAttributes({ enableScrollAnimation: value })}
          />
          <ToggleControl
            label={__('Enable parallax', 'nextora')}
            checked={enableParallax}
            disabled={enableBackgroundAnimation || hasHoverReveal}
            help={
              hasHoverReveal
                ? __('Disabled while hover reveal is active.', 'nextora')
                : enableBackgroundAnimation
                ? __('Disabled while background animation is active.', 'nextora')
                : __(
                    'Move the background independently as the section scrolls using a smooth GSAP-driven effect. Disabled automatically when the visitor prefers reduced motion.',
                    'nextora',
                  )
            }
            onChange={handleParallaxChange}
          />
          {enableParallax ? (
            <RangeControl
              label={__('Parallax speed', 'nextora')}
              value={parallaxSpeed}
              min={0}
              max={1}
              step={0.05}
              onChange={(value) => setAttributes({ parallaxSpeed: value ?? 0.5 })}
            />
          ) : null}
        </PanelBody>
      </InspectorControls>

      <section {...blockProps}>
        {hasHoverReveal ? (
          <>
            <div className="nextora-advanced-container__bg-reveal" style={hoverRevealImageStyles} aria-hidden="true" />
            <div
              className="nextora-advanced-container__hover-mask-preview"
              style={hoverRevealMaskStyle}
              aria-hidden="true"
            />
          </>
        ) : null}
        {hasImage ? <div className="nextora-advanced-container__bg" style={backgroundImageStyles} /> : null}
        {hasVideo ? (
          <div className="nextora-advanced-container__bg nextora-advanced-container__bg--video">
            <video autoPlay muted loop playsInline src={backgroundVideoUrl} />
          </div>
        ) : null}
        {showOverlay ? (
          <div
            className={`nextora-advanced-container__overlay nextora-advanced-container__overlay--${overlayModifier}`}
            aria-hidden="true"
          />
        ) : null}
        <div className="nextora-advanced-container__inner">
          <InnerBlocks template={[['core/group', {}, []]]} />
        </div>
      </section>
    </>
  );
}
