// @ts-nocheck
import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  useInnerBlocksProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  PanelColorSettings,
  BlockControls,
  AlignmentControl,
} from '@wordpress/block-editor';
import {
  Button,
  PanelBody,
  RangeControl,
  SelectControl,
  TextControl,
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
    contentMaxWidth = '600px',
    contentAlign = 'left',
    contentVerticalAlign = 'center',
    contentPaddingTop = 60,
    contentPaddingBottom = 60,
    contentPaddingLeft = 80,
    contentPaddingRight = 80,
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

  const valignClass =
    contentVerticalAlign === 'top'
      ? 'nextora-si--valign-top'
      : contentVerticalAlign === 'bottom'
        ? 'nextora-si--valign-bottom'
        : 'nextora-si--valign-center';

  const overlayStyle = useMemo(() => {
    if (overlayGradient) {
      return { background: overlayGradient };
    }
    const base = overlayColor || 'var(--wp--preset--color--contrast, #000)';
    return { backgroundColor: base, opacity: overlayOpacity };
  }, [overlayColor, overlayOpacity, overlayGradient]);

  const blockProps = useBlockProps({
    className: `nextora-si nextora-si--editor ${valignClass}`,
    style: {
      padding: `${contentPaddingTop}px ${contentPaddingRight}px ${contentPaddingBottom}px ${contentPaddingLeft}px`,
    },
  });

  const innerBlocksProps = useInnerBlocksProps(
    {
      className: 'nextora-si__content',
      style: {
        maxWidth: contentMaxWidth || '600px',
        textAlign: contentAlign || 'left',
        marginInline: contentAlign === 'center' ? 'auto' : contentAlign === 'right' ? '0 0 0 auto' : undefined,
      },
    },
    INNER_BLOCKS_OPTIONS,
  );

  return (
    <>
      <BlockControls group="block">
        <AlignmentControl
          value={contentAlign}
          onChange={(v) => setAttributes({ contentAlign: v || 'left' })}
        />
      </BlockControls>

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
          <TextControl
            label={__('Gradient overlay (optional)', 'nextora')}
            help={__(
              'CSS gradient, e.g. linear-gradient(...). Overrides solid color when set.',
              'nextora',
            )}
            value={overlayGradient}
            onChange={(v) => setAttributes({ overlayGradient: v || '' })}
          />
        </PanelBody>

        <PanelBody title={__('Content layout', 'nextora')} initialOpen={false}>
          <TextControl
            label={__('Content max width', 'nextora')}
            value={contentMaxWidth}
            onChange={(v) => setAttributes({ contentMaxWidth: v || '600px' })}
          />
          <SelectControl
            label={__('Vertical alignment', 'nextora')}
            value={contentVerticalAlign}
            options={[
              { label: __('Top', 'nextora'), value: 'top' },
              { label: __('Center', 'nextora'), value: 'center' },
              { label: __('Bottom', 'nextora'), value: 'bottom' },
            ]}
            onChange={(v) => setAttributes({ contentVerticalAlign: v || 'center' })}
          />
          <RangeControl
            label={__('Padding top (px)', 'nextora')}
            value={contentPaddingTop}
            onChange={(v) => setAttributes({ contentPaddingTop: v ?? 60 })}
            min={0}
            max={200}
          />
          <RangeControl
            label={__('Padding bottom (px)', 'nextora')}
            value={contentPaddingBottom}
            onChange={(v) => setAttributes({ contentPaddingBottom: v ?? 60 })}
            min={0}
            max={200}
          />
          <RangeControl
            label={__('Padding left (px)', 'nextora')}
            value={contentPaddingLeft}
            onChange={(v) => setAttributes({ contentPaddingLeft: v ?? 80 })}
            min={0}
            max={200}
          />
          <RangeControl
            label={__('Padding right (px)', 'nextora')}
            value={contentPaddingRight}
            onChange={(v) => setAttributes({ contentPaddingRight: v ?? 80 })}
            min={0}
            max={200}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        {backgroundType === 'image' && imageUrl && (
          <div
            className="nextora-si__background"
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
          <div className="nextora-si__background nextora-si__background--placeholder" aria-hidden="true" />
        )}
        {backgroundType === 'video' && videoUrl && (
          <div className="nextora-si__background nextora-si__background--video">
            <video muted playsInline aria-hidden="true" poster={imageUrl || undefined}>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        )}
        {backgroundType === 'color' && backgroundColor && (
          <div
            className="nextora-si__background nextora-si__background--color"
            style={{ backgroundColor: backgroundColor }}
          />
        )}
        <div className="nextora-si__overlay" style={overlayStyle} aria-hidden="true" />
        <div {...innerBlocksProps} />
      </div>
    </>
  );
}
