// @ts-nocheck
import { __, _n, sprintf } from '@wordpress/i18n';
import { Path, SVG } from '@wordpress/primitives';
import {
  useBlockProps,
  MediaUpload,
  MediaUploadCheck,
  InspectorControls,
  BlockControls,
  PanelColorSettings,
} from '@wordpress/block-editor';
import {
  Button,
  Notice,
  PanelBody,
  Placeholder,
  RangeControl,
  ToggleControl,
  SelectControl,
  ToolbarGroup,
  ToolbarButton,
  __experimentalHStack as HStack,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useCallback, useEffect } from '@wordpress/element';

/**
 * `fill="currentColor"` so editor CSS can set a high-contrast `color` on the control
 * (especially on the dark thumb overlay).
 */
const imageIcon = (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z" />
  </SVG>
);
const chevronUpIcon = (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <Path d="M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z" />
  </SVG>
);
const chevronDownIcon = (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <Path d="M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z" />
  </SVG>
);
const trashIcon = (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z"
    />
  </SVG>
);

const ALLOWED = ['image'];

type Props = {
  attributes: Record<string, unknown>;
  setAttributes: (a: Record<string, unknown>) => void;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

const CREATIVE_LAYOUTS = ['bento', 'spotlight', 'editorial'] as const;

function isCreativeLayout(layout: string) {
  return CREATIVE_LAYOUTS.includes(layout as (typeof CREATIVE_LAYOUTS)[number]);
}

export default function ImageGalleryGridEdit({ attributes, setAttributes }: Props) {
  const {
    gridLayout = 'classic',
    imageIds = [],
    columnsMobile = 2,
    columnsTablet = 3,
    columnsDesktop = 4,
    gap = 12,
    imageFit = 'cover',
    imageAreaBackground = '',
    showCaptions = true,
  } = attributes;

  const idList: number[] = Array.isArray(imageIds) ? imageIds.map((id) => parseInt(String(id), 10)).filter((n) => n > 0) : [];

  const layoutKey = typeof gridLayout === 'string' && gridLayout ? gridLayout : 'classic';
  const creative = isCreativeLayout(layoutKey);

  useEffect(() => {
    if (!creative) {
      return;
    }
    if (!Array.isArray(imageIds) || imageIds.length <= 6) {
      return;
    }
    const next = imageIds
      .map((id) => parseInt(String(id), 10))
      .filter((n) => n > 0)
      .slice(0, 6);
    if (next.length === imageIds.length) {
      return;
    }
    setAttributes({ imageIds: next });
  }, [creative, imageIds, setAttributes]);

  const media = useSelect(
    (select) => {
      if (!idList.length) return [];
      return idList
        .map((id) => (select as any)('core').getMedia(id, { context: 'view' }))
        .filter(Boolean);
    },
    [idList],
  ) as { id: number; source_url: string; alt_text?: string }[];

  const onSelectImages = (items) => {
    if (!Array.isArray(items) || !items.length) return;
    const next = items.map((f) => f.id);
    setAttributes({ imageIds: creative ? next.slice(0, 6) : next });
  };

  const move = useCallback(
    (index: number, dir: -1 | 1) => {
      const next = [...idList];
      const j = index + dir;
      if (j < 0 || j >= next.length) return;
      [next[index], next[j]] = [next[j], next[index]];
      setAttributes({ imageIds: next });
    },
    [idList, setAttributes],
  );

  const removeAt = useCallback(
    (index: number) => {
      setAttributes({ imageIds: idList.filter((_, i) => i !== index) });
    },
    [idList, setAttributes],
  );

  const blockProps = useBlockProps({
    className: [
      'nextora-igg',
      'nextora-igg--editor',
      `nextora-igg--layout-${layoutKey}`,
      imageFit === 'contain' ? 'nextora-igg--fit-contain' : '',
    ]
      .filter(Boolean)
      .join(' '),
    style: {
      '--nextora-igg-gap': `${typeof gap === 'number' ? gap : 12}px`,
      '--nextora-igg-cols-m': String(clamp(typeof columnsMobile === 'number' ? columnsMobile : 2, 1, 4)),
      '--nextora-igg-cols-t': String(clamp(typeof columnsTablet === 'number' ? columnsTablet : 3, 1, 6)),
      '--nextora-igg-cols-d': String(clamp(typeof columnsDesktop === 'number' ? columnsDesktop : 4, 1, 6)),
      '--nextora-igg-count': String(idList.length),
      ...(imageAreaBackground ? { '--nextora-igg-image-bg': imageAreaBackground } : {}),
    },
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Layout', 'nextora')} initialOpen>
          <SelectControl
            label={__('Gallery layout', 'nextora')}
            value={layoutKey}
            help={__(
              'Bento: tiled cards with slight rotation and strong shadow. Editorial: a narrow magazine column with side accents and alternating alignment. Spotlight: hero row + supporting tiles. Creative layouts need 3–6 images.',
              'nextora',
            )}
            options={[
              { label: __('Classic grid', 'nextora'), value: 'classic' },
              { label: __('Bento mosaic', 'nextora'), value: 'bento' },
              { label: __('Spotlight', 'nextora'), value: 'spotlight' },
              { label: __('Editorial', 'nextora'), value: 'editorial' },
            ]}
            onChange={(v) => setAttributes({ gridLayout: v || 'classic' })}
          />
          {creative && idList.length > 0 && idList.length < 3 && (
            <Notice status="warning" isDismissible={false}>
              {__(
                'Add at least 3 images (and at most 6) for this layout. Until then, the front end may fall back to a simple grid.',
                'nextora',
              )}
            </Notice>
          )}
          {creative && idList.length > 6 && (
            <Notice status="info" isDismissible={false}>
              {__('Only the first 6 images are used for creative layouts.', 'nextora')}
            </Notice>
          )}
          {!creative && (
            <p className="components-base-control__help" style={{ marginTop: 0 }}>
              {__(
                'Smaller than 600px, then 600–959px, then 960px and up. Order in the list matches the grid.',
                'nextora',
              )}
            </p>
          )}
          {creative && (
            <p className="components-base-control__help" style={{ marginTop: 0 }}>
              {__(
                'Order matches the composition. On small screens layouts stack; from tablet up the designed grid appears.',
                'nextora',
              )}
            </p>
          )}
          {!creative && (
            <>
              <RangeControl
                label={__('Columns — small screens', 'nextora')}
                value={columnsMobile}
                onChange={(v) => setAttributes({ columnsMobile: v != null ? clamp(v, 1, 4) : 2 })}
                min={1}
                max={4}
                step={1}
              />
              <RangeControl
                label={__('Columns — medium (600px+)', 'nextora')}
                value={columnsTablet}
                onChange={(v) => setAttributes({ columnsTablet: v != null ? clamp(v, 1, 6) : 3 })}
                min={1}
                max={6}
                step={1}
              />
              <RangeControl
                label={__('Columns — large (960px+)', 'nextora')}
                value={columnsDesktop}
                onChange={(v) => setAttributes({ columnsDesktop: v != null ? clamp(v, 1, 6) : 4 })}
                min={1}
                max={6}
                step={1}
              />
            </>
          )}
          <RangeControl
            label={__('Gap between images (px)', 'nextora')}
            value={gap}
            onChange={(v) => setAttributes({ gap: v != null ? clamp(v, 0, 48) : 12 })}
            min={0}
            max={48}
            step={1}
          />
        </PanelBody>

        <PanelBody title={__('Appearance', 'nextora')} initialOpen>
          <SelectControl
            label={__('Image fit', 'nextora')}
            value={imageFit === 'contain' ? 'contain' : 'cover'}
            help={__(
              'Cover: each image keeps its real aspect ratio (full width of the cell). Contain: same, but very tall images are height-capped; use background for any letterboxing.',
              'nextora',
            )}
            options={[
              { label: __('Cover', 'nextora'), value: 'cover' },
              { label: __('Contain (letterbox)', 'nextora'), value: 'contain' },
            ]}
            onChange={(v) => setAttributes({ imageFit: v })}
          />
          <PanelColorSettings
            title={__('Image area', 'nextora')}
            colorSettings={[
              {
                value: typeof imageAreaBackground === 'string' ? imageAreaBackground : '',
                onChange: (c) => setAttributes({ imageAreaBackground: c || '' }),
                label: __('Background', 'nextora'),
              },
            ]}
          />
          <ToggleControl
            label={__('Show media captions', 'nextora')}
            checked={!!showCaptions}
            onChange={(v) => setAttributes({ showCaptions: v })}
            help={__('Uses each image’s “Caption” from the media library.', 'nextora')}
          />
        </PanelBody>
      </InspectorControls>

      <MediaUploadCheck>
        <MediaUpload
          onSelect={onSelectImages}
          allowedTypes={ALLOWED}
          value={idList}
          multiple
          render={({ open }) => (
            <>
              <BlockControls>
                <ToolbarGroup>
                  <ToolbarButton
                    icon={imageIcon as any}
                    label={
                      idList.length
                        ? __('Replace images', 'nextora')
                        : __('Choose images', 'nextora')
                    }
                    onClick={open}
                  />
                </ToolbarGroup>
              </BlockControls>

              <div {...blockProps}>
                {idList.length === 0 && (
                  <div className="nextora-igg-editor__frame nextora-igg-editor__frame--empty">
                    <Placeholder
                      className="nextora-igg-editor__placeholder"
                      icon={imageIcon as any}
                      label={__('Image gallery', 'nextora')}
                      instructions={__(
                        'Add images; they’ll appear in a grid on the site.',
                        'nextora',
                      )}
                    >
                      <Button variant="secondary" onClick={open}>
                        {__('Add images', 'nextora')}
                      </Button>
                    </Placeholder>
                  </div>
                )}

                {idList.length > 0 && (
                  <div className="nextora-igg-editor__frame">
                    <div className="nextora-igg-editor__head">
                      <p className="nextora-igg-editor__head-text" aria-live="polite">
                        {sprintf(
                          _n('%d image', '%d images', idList.length, 'nextora'),
                          idList.length,
                        )}
                      </p>
                      <Button variant="secondary" onClick={open} icon={imageIcon as any}>
                        {__('Edit', 'nextora')}
                      </Button>
                    </div>

                    <ul
                      className="nextora-igg-editor__thumbs"
                      aria-label={__('Images in order', 'nextora')}
                    >
                      {idList.map((id, i) => {
                        const m = media.find((x) => x && x.id === id);
                        const src = m?.source_url;
                        return (
                          <li key={id} className="nextora-igg-editor__thumb">
                            <div className="nextora-igg-editor__thumb-preview">
                              {src ? (
                                <img
                                  className="nextora-igg-editor__img"
                                  src={src}
                                  alt={m?.alt_text || ''}
                                />
                              ) : (
                                <div className="nextora-igg-editor__thumb-skeleton" aria-hidden>
                                  …
                                </div>
                              )}
                            </div>
                            <HStack
                              className="nextora-igg-editor__thumb-actions"
                              spacing={0}
                              justify="center"
                            >
                              <Button
                                className="nextora-igg-editor__reorder"
                                icon={chevronUpIcon as any}
                                isSmall
                                label={__('Move earlier', 'nextora')}
                                onClick={() => move(i, -1)}
                                disabled={i === 0}
                              />
                              <Button
                                className="nextora-igg-editor__reorder"
                                icon={chevronDownIcon as any}
                                isSmall
                                label={__('Move later', 'nextora')}
                                onClick={() => move(i, 1)}
                                disabled={i === idList.length - 1}
                              />
                              <Button
                                className="nextora-igg-editor__reorder"
                                icon={trashIcon as any}
                                isSmall
                                isDestructive
                                label={__('Remove from gallery', 'nextora')}
                                onClick={() => removeAt(i)}
                              />
                            </HStack>
                          </li>
                        );
                      })}
                    </ul>

                    <p className="nextora-igg-editor__hint components-base-control__help">
                      {creative
                        ? __(
                            'Creative layout and gap apply on the site. Reorder with the controls on each thumbnail.',
                            'nextora',
                          )
                        : __(
                            'Columns and gap use your sidebar settings. Reorder on each image; the grid is previewed on the site.',
                            'nextora',
                          )}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        />
      </MediaUploadCheck>
    </>
  );
}
