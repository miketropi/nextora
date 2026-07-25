// @ts-nocheck
import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  useInnerBlocksProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  PanelColorSettings,
} from '@wordpress/block-editor';
import {
  Button,
  PanelBody,
  RangeControl,
  SelectControl,
  TextControl,
  GradientPicker,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useMemo, useState } from '@wordpress/element';

const ALLOWED_BLOCKS = [
  'core/heading',
  'core/paragraph',
  'core/buttons',
  'core/button',
  'core/image',
  'core/spacer',
  'core/group',
  'core/columns',
];

const TEMPLATE = [
  ['core/heading', { level: 2, placeholder: __('Slide heading…', 'nextora'), textColor: 'base' }],
  ['core/paragraph', { placeholder: __('Slide description…', 'nextora'), textColor: 'base' }],
  [
    'core/buttons',
    {},
    [['core/button', { text: __('Donate now', 'nextora'), className: 'is-style-outline' }]],
  ],
];

const POSITION_OPTIONS = [
  { label: __('Center', 'nextora'), value: 'center center' },
  { label: __('Top', 'nextora'), value: 'center top' },
  { label: __('Bottom', 'nextora'), value: 'center bottom' },
  { label: __('Left', 'nextora'), value: 'left center' },
  { label: __('Right', 'nextora'), value: 'right center' },
  { label: __('Top left', 'nextora'), value: 'left top' },
  { label: __('Top right', 'nextora'), value: 'right top' },
  { label: __('Bottom left', 'nextora'), value: 'left bottom' },
  { label: __('Bottom right', 'nextora'), value: 'right bottom' },
];

const INNER_BLOCKS_OPTIONS = {
  allowedBlocks: ALLOWED_BLOCKS,
  template: TEMPLATE,
  templateLock: false,
};

function normalizeBackgroundPosition(raw) {
  if (typeof raw !== 'string' || !raw.trim()) {
    return 'center center';
  }
  if (POSITION_OPTIONS.some((option) => option.value === raw)) {
    return raw;
  }
  return 'center center';
}

export default function SlideItemEdit({ attributes, setAttributes }) {
  const {
    backgroundType = 'image',
    backgroundImageId = 0,
    backgroundImageAlt = '',
    backgroundVideoId = 0,
    backgroundPosition = 'center center',
    backgroundSize = 'cover',
    backgroundColor = '',
    overlayColor = '',
    overlayOpacity = 0.4,
    overlayGradient = '',
    overlayMode = 'color',
  } = attributes;

  const [editorImageUrl, setEditorImageUrl] = useState('');

  const imageMedia = useSelect(
    (select) => {
      if (!backgroundImageId) {
        return null;
      }
      return select('core').getMedia(backgroundImageId);
    },
    [backgroundImageId],
  );

  const videoMedia = useSelect(
    (select) => {
      if (!backgroundVideoId) {
        return null;
      }
      return select('core').getMedia(backgroundVideoId);
    },
    [backgroundVideoId],
  );

  const imageUrl = imageMedia?.source_url || editorImageUrl || '';
  const videoUrl = videoMedia?.source_url || '';
  const hasBackgroundImage = Number(backgroundImageId) > 0;
  const backgroundPositionValue = normalizeBackgroundPosition(backgroundPosition);

  const themeGradients = useSelect(
    (select) => {
      const settings = select('core/block-editor').getSettings();
      return settings?.gradients || [];
    },
    [],
  );

  const overlayStyle = useMemo(() => {
    if (overlayMode === 'gradient' && overlayGradient) {
      return { background: overlayGradient };
    }
    const base = overlayColor || 'var(--wp--preset--color--contrast, #000)';
    return { backgroundColor: base, opacity: overlayOpacity };
  }, [overlayColor, overlayOpacity, overlayGradient, overlayMode]);

  const blockProps = useBlockProps({
    className: 'nextora-slide nextora-slide--editor',
  });

  const innerBlocksProps = useInnerBlocksProps(
    {
      className: 'nextora-slide__content',
    },
    INNER_BLOCKS_OPTIONS,
  );

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Background', 'nextora')} initialOpen>
          <SelectControl
            label={__('Background type', 'nextora')}
            value={backgroundType}
            options={[
              { label: __('Image', 'nextora'), value: 'image' },
              { label: __('Video', 'nextora'), value: 'video' },
              { label: __('Color', 'nextora'), value: 'color' },
            ]}
            onChange={(v) => setAttributes({ backgroundType: v || 'image' })}
          />

          {backgroundType === 'image' && (
            <>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) => {
                    setEditorImageUrl(media?.url || media?.source_url || '');
                    setAttributes({
                      backgroundImageId: media?.id ? Number(media.id) : 0,
                      backgroundImageAlt: media?.alt || media?.title || '',
                    });
                  }}
                  allowedTypes={['image']}
                  value={hasBackgroundImage ? Number(backgroundImageId) : undefined}
                  render={({ open }) => (
                    <Button variant="secondary" onClick={open} style={{ marginBottom: '1rem' }}>
                      {hasBackgroundImage
                        ? __('Replace background image', 'nextora')
                        : __('Choose background image', 'nextora')}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
              {hasBackgroundImage && (
                <>
                  <SelectControl
                    label={__('Background position', 'nextora')}
                    value={backgroundPositionValue}
                    options={POSITION_OPTIONS}
                    onChange={(v) => setAttributes({ backgroundPosition: v || 'center center' })}
                  />
                  <SelectControl
                    label={__('Background size', 'nextora')}
                    value={backgroundSize}
                    options={[
                      { label: __('Cover', 'nextora'), value: 'cover' },
                      { label: __('Contain', 'nextora'), value: 'contain' },
                      { label: __('Auto', 'nextora'), value: 'auto' },
                    ]}
                    onChange={(v) => setAttributes({ backgroundSize: v || 'cover' })}
                  />
                  <TextControl
                    label={__('Image alt text', 'nextora')}
                    value={backgroundImageAlt}
                    onChange={(v) => setAttributes({ backgroundImageAlt: v || '' })}
                  />
                </>
              )}
              {hasBackgroundImage && !imageUrl && (
                <p className="components-base-control__help">
                  {__('Loading image…', 'nextora')}
                </p>
              )}
            </>
          )}

          {backgroundType === 'video' && (
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) => setAttributes({ backgroundVideoId: media?.id || 0 })}
                allowedTypes={['video']}
                value={backgroundVideoId || undefined}
                render={({ open }) => (
                  <Button variant="secondary" onClick={open}>
                    {backgroundVideoId
                      ? __('Replace background video', 'nextora')
                      : __('Choose background video', 'nextora')}
                  </Button>
                )}
              />
            </MediaUploadCheck>
          )}

          {backgroundType === 'color' && (
            <PanelColorSettings
              title={__('Background color', 'nextora')}
              colorSettings={[
                {
                  value: backgroundColor,
                  onChange: (v) => setAttributes({ backgroundColor: v || '' }),
                  label: __('Background', 'nextora'),
                },
              ]}
            />
          )}
        </PanelBody>

        <PanelBody title={__('Overlay', 'nextora')} initialOpen={false}>
          <SelectControl
            label={__('Overlay mode', 'nextora')}
            value={overlayMode}
            options={[
              { label: __('Solid color', 'nextora'), value: 'color' },
              { label: __('Gradient', 'nextora'), value: 'gradient' },
            ]}
            onChange={(v) => setAttributes({ overlayMode: v || 'color' })}
          />
          {overlayMode === 'color' && (
            <>
              <PanelColorSettings
                title={__('Overlay color', 'nextora')}
                colorSettings={[
                  {
                    value: overlayColor,
                    onChange: (v) => setAttributes({ overlayColor: v || '' }),
                    label: __('Color', 'nextora'),
                  },
                ]}
              />
              <RangeControl
                label={__('Overlay opacity', 'nextora')}
                value={overlayOpacity}
                onChange={(v) => setAttributes({ overlayOpacity: v ?? 0.4 })}
                min={0}
                max={1}
                step={0.05}
              />
            </>
          )}
          {overlayMode === 'gradient' && (
            <GradientPicker
              value={overlayGradient || null}
              gradients={themeGradients}
              onChange={(v) => setAttributes({ overlayGradient: v || '' })}
              clearable
            />
          )}
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        {backgroundType === 'image' && imageUrl && (
          <div
            className="nextora-slide__background"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundPosition: backgroundPositionValue,
              backgroundSize: backgroundSize || 'cover',
            }}
            role="img"
            aria-label={backgroundImageAlt || undefined}
          />
        )}
        {backgroundType === 'image' && hasBackgroundImage && !imageUrl && (
            <div className="nextora-slide__background nextora-slide__background--placeholder" aria-hidden="true" />
        )}
        {backgroundType === 'video' && videoUrl && (
          <div className="nextora-slide__background nextora-slide__background--video">
            <video muted playsInline aria-hidden="true" poster={imageUrl || undefined}>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        )}
        {backgroundType === 'color' && backgroundColor && (
          <div
            className="nextora-slide__background nextora-slide__background--color"
            style={{ backgroundColor: backgroundColor }}
          />
        )}
        <div className="nextora-slide__overlay" style={overlayStyle} aria-hidden="true" />
        <div className="nextora-slide__content-container">
          <div {...innerBlocksProps} />
        </div>
      </div>
    </>
  );
}
