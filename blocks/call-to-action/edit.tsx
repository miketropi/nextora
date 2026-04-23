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
  ToggleControl,
  Notice,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useMemo } from '@wordpress/element';

const MODES = [
  { label: __('Default (no background media)', 'nextora'), value: 'solid' },
  { label: __('Image', 'nextora'), value: 'image' },
  { label: __('Video', 'nextora'), value: 'video' },
  { label: __('Color mix', 'nextora'), value: 'colorMix' },
];

/** Matches render.php (border-radius on the CTA root). */
const BORDER_RADIUS_OPTIONS = [
  { label: __('None', 'nextora'), value: 'none' },
  { label: __('Small', 'nextora'), value: 'sm' },
  { label: __('Medium', 'nextora'), value: 'md' },
  { label: __('Large', 'nextora'), value: 'lg' },
  { label: __('Extra large', 'nextora'), value: 'xl' },
  { label: __('2× large', 'nextora'), value: '2xl' },
  { label: __('Pill / full', 'nextora'), value: 'full' },
];

const BORDER_RADIUS_CSS: Record<string, string> = {
  none: '',
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
  full: '9999px',
};

const COLUMN_SPLIT_OPTIONS = [
  { label: __('50% / 50%', 'nextora'), value: '50-50' },
  { label: __('40% / 60%', 'nextora'), value: '40-60' },
  { label: __('60% / 40%', 'nextora'), value: '60-40' },
  { label: __('33% / 66%', 'nextora'), value: '33-66' },
  { label: __('66% / 33%', 'nextora'), value: '66-33' },
];

const CTA_TEMPLATE = [
  [
    'core/group',
    {
      className: 'nextora-cta__column nextora-cta__column--content',
    },
    [
      [
        'core/heading',
        {
          level: 2,
          placeholder: __('Headline for your CTA', 'nextora'),
        },
      ],
      [
        'core/paragraph',
        {
          placeholder: __('One line on why the reader should act now.', 'nextora'),
        },
      ],
      [
        'core/buttons',
        {},
        [
          [
            'core/button',
            {
              text: __('Primary action', 'nextora'),
            },
          ],
        ],
      ],
    ],
  ],
  [
    'core/group',
    {
      className: 'nextora-cta__column nextora-cta__column--creative',
    },
    [
      [
        'core/paragraph',
        {
          align: 'center',
          placeholder: __(
            'Image, short stat, or secondary CTA in this column.',
            'nextora',
          ),
        },
      ],
    ],
  ],
];

const splitToCss: Record<string, string> = {
  '50-50': 'minmax(0, 1fr) minmax(0, 1fr)',
  '40-60': 'minmax(0, 2fr) minmax(0, 3fr)',
  '60-40': 'minmax(0, 3fr) minmax(0, 2fr)',
  '33-66': 'minmax(0, 1fr) minmax(0, 2fr)',
  '66-33': 'minmax(0, 2fr) minmax(0, 1fr)',
};

const alignMap: Record<string, string> = {
  top: 'start',
  center: 'center',
  bottom: 'end',
};

function buildLayoutClassName(attrs) {
  const {
    columnSplit = '50-50',
    creativePosition = 'right',
    stackOrder = 'content-first',
    verticalAlign = 'center',
    stickyColumn = 'none',
  } = attrs;
  const parts = [
    'nextora-cta--split',
    'nextora-cta--split-' + columnSplit,
    'nextora-cta--align-v-' + verticalAlign,
    creativePosition === 'left' ? 'nextora-cta--creative-left' : 'nextora-cta--creative-right',
    'nextora-cta--stack-' + stackOrder,
  ];
  if (stickyColumn === 'content' || stickyColumn === 'creative') {
    parts.push('nextora-cta--sticky-' + stickyColumn);
  }
  return parts.join(' ');
}

function buildEditorPreviewStyle(attrs) {
  const {
    backgroundMode = 'solid',
    colorMixA = '#1d4ed8',
    colorMixB = '#0f172a',
    colorMixRatio = 50,
    overlayOpacity = 40,
  } = attrs;
  const out = {};
  if (backgroundMode === 'colorMix') {
    out.background = `color-mix(in srgb, ${colorMixA} ${colorMixRatio}%, ${colorMixB})`;
  }
  if (['image', 'video', 'colorMix'].includes(backgroundMode) && overlayOpacity > 0) {
    out.boxShadow = `inset 0 0 0 9999px rgba(0,0,0,${overlayOpacity / 100})`;
  }
  return out;
}

export default function CallToActionEdit({ attributes, setAttributes }) {
  const {
    columnSplit = '50-50',
    creativePosition = 'right',
    stackOrder = 'content-first',
    verticalAlign = 'center',
    stickyColumn = 'none',
    backgroundMode = 'solid',
    backgroundImageId = 0,
    backgroundVideoId = 0,
    colorMixA = '#1d4ed8',
    colorMixB = '#0f172a',
    colorMixRatio = 50,
    overlayOpacity = 40,
    parallaxEnabled = false,
    parallaxStrength = 30,
    borderRadius = 'none',
  } = attributes;

  const layoutClass = useMemo(
    () =>
      buildLayoutClassName({
        columnSplit,
        creativePosition,
        stackOrder,
        verticalAlign,
        stickyColumn: typeof stickyColumn === 'string' ? stickyColumn : 'none',
      }),
    [columnSplit, creativePosition, stackOrder, verticalAlign, stickyColumn],
  );

  const imageMedia = useSelect(
    (select) =>
      backgroundImageId
        ? select('core').getMedia(backgroundImageId, { context: 'view' })
        : null,
    [backgroundImageId],
  );

  const videoMedia = useSelect(
    (select) =>
      backgroundVideoId
        ? select('core').getMedia(backgroundVideoId, { context: 'view' })
        : null,
    [backgroundVideoId],
  );

  const blockProps = useBlockProps({
    className: [
      'nextora-cta',
      'nextora-cta--mode-' + (backgroundMode === 'colorMix' ? 'color-mix' : backgroundMode),
      layoutClass,
      parallaxEnabled && (backgroundMode === 'image' || backgroundMode === 'video')
        ? 'nextora-cta--parallax'
        : '',
      ['image', 'video', 'colorMix'].includes(backgroundMode)
        ? 'nextora-cta--has-media'
        : 'nextora-cta--no-media-layer',
    ]
      .filter(Boolean)
      .join(' '),
    style: {
      ...buildEditorPreviewStyle(attributes),
      '--nextora-cta--cols': splitToCss[columnSplit] || splitToCss['50-50'],
      '--nextora-cta--align': alignMap[verticalAlign] || 'center',
      ...(BORDER_RADIUS_CSS[borderRadius] ? { borderRadius: BORDER_RADIUS_CSS[borderRadius] } : {}),
    },
  });

  const innerBlocksProps = useInnerBlocksProps(
    {
      className: 'nextora-cta__grid',
    },
    {
      template: CTA_TEMPLATE,
      templateLock: false,
      allowedBlocks: ['core/group'],
    },
  );

  const showParallax = backgroundMode === 'image' || backgroundMode === 'video';
  const showLegacy = !!(
    (attributes.heading && String(attributes.heading).trim()) ||
    (attributes.content && String(attributes.content).trim())
  );

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Corner radius', 'nextora')} initialOpen>
          <p className="components-base-control__help" style={{ marginTop: 0 }}>
            {__(
              'Rounds the whole banner, including the background image or video. Shown here so you do not have to use the global Styles tab.',
              'nextora',
            )}
          </p>
          <SelectControl
            label={__('Border radius', 'nextora')}
            value={borderRadius in BORDER_RADIUS_CSS ? borderRadius : 'none'}
            options={BORDER_RADIUS_OPTIONS}
            onChange={(v) => setAttributes({ borderRadius: v || 'none' })}
          />
        </PanelBody>
        <PanelBody title={__('Layout', 'nextora')} initialOpen={false}>
          <p className="components-base-control__help" style={{ marginTop: 0 }}>
            {__(
              'Two top-level groups: main copy and buttons (left by default) and a visual or secondary CTA (right). Same controls as the Hero block.',
              'nextora',
            )}
          </p>
          <SelectControl
            label={__('Column width', 'nextora')}
            value={columnSplit}
            options={COLUMN_SPLIT_OPTIONS}
            onChange={(v) => setAttributes({ columnSplit: v })}
          />
          <SelectControl
            label={__('Creative column', 'nextora')}
            value={creativePosition}
            options={[
              { label: __('Right of content', 'nextora'), value: 'right' },
              { label: __('Left of content', 'nextora'), value: 'left' },
            ]}
            onChange={(v) => setAttributes({ creativePosition: v })}
          />
          <SelectControl
            label={__('Stack order (tablet & mobile)', 'nextora')}
            value={stackOrder}
            options={[
              { label: __('Content first', 'nextora'), value: 'content-first' },
              { label: __('Creative first', 'nextora'), value: 'creative-first' },
            ]}
            onChange={(v) => setAttributes({ stackOrder: v })}
          />
          <SelectControl
            label={__('Vertical alignment (row)', 'nextora')}
            value={verticalAlign}
            options={[
              { label: __('Top', 'nextora'), value: 'top' },
              { label: __('Center', 'nextora'), value: 'center' },
              { label: __('Bottom', 'nextora'), value: 'bottom' },
            ]}
            onChange={(v) => setAttributes({ verticalAlign: v })}
          />
          <SelectControl
            label={__('Sticky column (wide layout)', 'nextora')}
            value={typeof stickyColumn === 'string' ? stickyColumn : 'none'}
            options={[
              { label: __('Off', 'nextora'), value: 'none' },
              { label: __('Content column', 'nextora'), value: 'content' },
              { label: __('Creative column', 'nextora'), value: 'creative' },
            ]}
            onChange={(v) => setAttributes({ stickyColumn: v || 'none' })}
          />
        </PanelBody>
        <PanelBody title={__('Background', 'nextora')} initialOpen={false}>
          <SelectControl
            label={__('Background type', 'nextora')}
            value={backgroundMode}
            options={MODES}
            onChange={(v) => setAttributes({ backgroundMode: v })}
          />
          {backgroundMode === 'image' && (
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(m) => setAttributes({ backgroundImageId: m?.id ? m.id : 0 })}
                allowedTypes={['image']}
                value={backgroundImageId}
                render={({ open }) => (
                  <div style={{ marginBottom: 8 }}>
                    {imageMedia?.source_url && (
                      <img
                        src={imageMedia.source_url}
                        alt=""
                        style={{ width: '100%', maxHeight: 120, objectFit: 'cover', borderRadius: 4 }}
                      />
                    )}
                    <Button variant="secondary" onClick={open}>
                      {backgroundImageId
                        ? __('Replace image', 'nextora')
                        : __('Choose image', 'nextora')}
                    </Button>
                    {!!backgroundImageId && (
                      <Button
                        variant="link"
                        isDestructive
                        onClick={() => setAttributes({ backgroundImageId: 0 })}
                      >
                        {__('Remove', 'nextora')}
                      </Button>
                    )}
                  </div>
                )}
              />
            </MediaUploadCheck>
          )}
          {backgroundMode === 'video' && (
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(m) => setAttributes({ backgroundVideoId: m?.id ? m.id : 0 })}
                allowedTypes={['video']}
                value={backgroundVideoId}
                render={({ open }) => (
                  <div style={{ marginBottom: 8 }}>
                    {videoMedia?.source_url && (
                      <video
                        src={videoMedia.source_url}
                        muted
                        playsInline
                        style={{ width: '100%', maxHeight: 120, objectFit: 'cover', borderRadius: 4 }}
                      />
                    )}
                    <Button variant="secondary" onClick={open}>
                      {backgroundVideoId
                        ? __('Replace video', 'nextora')
                        : __('Choose video', 'nextora')}
                    </Button>
                    {!!backgroundVideoId && (
                      <Button
                        variant="link"
                        isDestructive
                        onClick={() => setAttributes({ backgroundVideoId: 0 })}
                      >
                        {__('Remove', 'nextora')}
                      </Button>
                    )}
                  </div>
                )}
              />
            </MediaUploadCheck>
          )}
          {['image', 'video', 'colorMix'].includes(backgroundMode) && (
            <RangeControl
              label={__('Overlay darkness', 'nextora')}
              value={overlayOpacity}
              onChange={(v) => setAttributes({ overlayOpacity: v ?? 0 })}
              min={0}
              max={100}
              initialPosition={40}
            />
          )}
        </PanelBody>
        {backgroundMode === 'colorMix' && (
          <>
            <PanelColorSettings
              title={__('Color mix', 'nextora')}
              colorSettings={[
                {
                  value: colorMixA,
                  onChange: (c) => setAttributes({ colorMixA: c || '#1d4ed8' }),
                  label: __('Color A', 'nextora'),
                },
                {
                  value: colorMixB,
                  onChange: (c) => setAttributes({ colorMixB: c || '#0f172a' }),
                  label: __('Color B', 'nextora'),
                },
              ]}
            />
            <PanelBody>
              <RangeControl
                label={__('Mix (A %)', 'nextora')}
                value={colorMixRatio}
                onChange={(v) => setAttributes({ colorMixRatio: v ?? 50 })}
                min={0}
                max={100}
                initialPosition={50}
              />
            </PanelBody>
          </>
        )}
        {showParallax && (
          <PanelBody title={__('Parallax', 'nextora')} initialOpen={false}>
            <ToggleControl
              label={__('Parallax background', 'nextora')}
              checked={parallaxEnabled}
              onChange={(v) => setAttributes({ parallaxEnabled: v })}
            />
            {parallaxEnabled && (
              <RangeControl
                label={__('Strength', 'nextora')}
                value={parallaxStrength}
                onChange={(v) => setAttributes({ parallaxStrength: v ?? 30 })}
                min={0}
                max={100}
                initialPosition={30}
              />
            )}
          </PanelBody>
        )}
        {showLegacy && (
          <PanelBody title={__('Legacy placeholder text', 'nextora')} initialOpen={false}>
            <Notice status="info" isDismissible={false}>
              {__(
                'This block had simple heading and body fields. Rebuild the copy in the two columns; old attributes may still be used on the site until you migrate.',
                'nextora',
              )}
            </Notice>
          </PanelBody>
        )}
      </InspectorControls>

      <div {...blockProps}>
        {backgroundMode === 'image' && imageMedia?.source_url && (
          <div className="nextora-cta__bg" aria-hidden="true">
            <img className="nextora-cta__img" src={imageMedia.source_url} alt="" />
          </div>
        )}
        {backgroundMode === 'video' && videoMedia?.source_url && (
          <div className="nextora-cta__bg nextora-cta__bg--video" aria-hidden="true">
            <video
              className="nextora-cta__video"
              src={videoMedia.source_url}
              muted
              playsInline
              autoPlay
              loop
            />
          </div>
        )}
        {backgroundMode === 'colorMix' && (
          <div
            className="nextora-cta__bg nextora-cta__bg--color-mix"
            aria-hidden="true"
            style={{
              background: `color-mix(in srgb, ${colorMixA} ${colorMixRatio}%, ${colorMixB})`,
            }}
          />
        )}
        <div className="nextora-cta__body">
          <div {...innerBlocksProps} />
        </div>
      </div>
    </>
  );
}
