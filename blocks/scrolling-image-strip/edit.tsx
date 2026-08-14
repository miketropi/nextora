import { __, _n, sprintf } from '@wordpress/i18n';
import { useMemo, useCallback } from '@wordpress/element';
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  PanelColorSettings,
  BlockControls,
} from '@wordpress/block-editor';
import {
  Button,
  PanelBody,
  Placeholder,
  RangeControl,
  ToggleControl,
  SelectControl,
  TextControl,
  ToolbarGroup,
  ToolbarButton,
  __experimentalHStack as HStack,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';

import type { ScrollingImageStripAttributes } from './types';
import {
  type PaletteColor,
  normalizeColorForStorage,
  colorValueForPicker,
  getMergedPaletteEntries,
  useThemeColorPalette,
} from '../advanced-icon/color-utils';

interface EditProps {
  attributes: ScrollingImageStripAttributes;
  setAttributes: (attrs: Partial<ScrollingImageStripAttributes>) => void;
}

interface Attachment {
  id: number;
  url: string;
  source_url?: string;
  alt_text?: string;
  caption?: { raw?: string } | string;
}

const directionOptions = [
  { label: __('Left', 'nextora'), value: 'left' },
  { label: __('Right', 'nextora'), value: 'right' },
];

const aspectRatioOptions = [
  { label: '3:4', value: '3/4' },
  { label: '1:1', value: '1/1' },
  { label: '4:5', value: '4/5' },
  { label: '16:9', value: '16/9' },
  { label: '9:16', value: '9/16' },
  { label: __('Auto', 'nextora'), value: 'auto' },
];

const imageFitOptions = [
  { label: __('Cover', 'nextora'), value: 'cover' },
  { label: __('Contain', 'nextora'), value: 'contain' },
];

const heightUnitOptions = [
  { label: 'px', value: 'px' },
  { label: 'rem', value: 'rem' },
  { label: 'vh', value: 'vh' },
];

const maskDirectionOptions = [
  { label: __('Horizontal', 'nextora'), value: 'horizontal' },
  { label: __('Vertical — top', 'nextora'), value: 'vertical-top' },
  { label: __('Vertical — bottom', 'nextora'), value: 'vertical-bottom' },
  { label: __('Vertical — both', 'nextora'), value: 'vertical-both' },
  { label: __('Both', 'nextora'), value: 'both' },
];

const overlayStyleOptions = [
  { label: __('Solid', 'nextora'), value: 'solid' },
  { label: __('Fade right', 'nextora'), value: 'fade-right' },
  { label: __('Cinematic', 'nextora'), value: 'cinematic' },
  { label: __('Diagonal', 'nextora'), value: 'diagonal' },
];

const imageIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z" />
  </svg>
);

const chevronUpIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z" />
  </svg>
);

const chevronDownIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z" />
  </svg>
);

const trashIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z" />
  </svg>
);

const ALLOWED = ['image'];

export default function ScrollingImageStripEdit({ attributes, setAttributes }: EditProps) {
  const {
    imageIds,
    imageHeight,
    imageHeightUnit,
    imageAspectRatio,
    imageFit,
    imageBorderRadius,
    imageGap,
    enableTilt,
    tiltEvenAngle,
    tiltOddAngle,
    direction,
    speed,
    pauseOnHover,
    enableFadeMask,
    fadeMaskDirection,
    fadeMaskLeft,
    fadeMaskRight,
    overlayColor,
    overlayOpacity,
    overlayStyle,
    sectionBackgroundColor,
    paddingVertical,
    sectionMinHeight,
    sectionHeight,
    showBorders,
    borderColor,
    borderWidth,
    enableScrollAnimation,
    ariaLabel,
  } = attributes;

  const blockProps = useBlockProps();

  const currentPalette = useThemeColorPalette();

  const allPalette = useMemo(
    () => getMergedPaletteEntries(currentPalette),
    [currentPalette],
  );

  const media = useSelect(
    (select) => {
      if (!imageIds || imageIds.length === 0) return [];
      try {
        const { getMedia } = select('core') as { getMedia?: (id: number) => Attachment | null };
        if (typeof getMedia !== 'function') return [];
        return imageIds
          .map((id) => getMedia(id))
          .filter(Boolean) as Attachment[];
      } catch {
        return [];
      }
    },
    [imageIds],
  );

  const idList: number[] = imageIds || [];

  const hasImages = idList.length > 0;

  const onSelectImages = (mediaList: { id: number }[]): void => {
    const ids = mediaList.map((m) => m.id).filter((id) => typeof id === 'number' && id > 0);
    setAttributes({ imageIds: ids });
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

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Images', 'nextora')} initialOpen>
          <RangeControl
            label={__('Image height', 'nextora')}
            value={imageHeight}
            onChange={(v) => setAttributes({ imageHeight: v ?? 200 })}
            min={80}
            max={600}
          />
          <SelectControl
            label={__('Height unit', 'nextora')}
            value={imageHeightUnit}
            options={heightUnitOptions}
            onChange={(v) => setAttributes({ imageHeightUnit: v })}
          />
          <SelectControl
            label={__('Aspect ratio', 'nextora')}
            value={imageAspectRatio}
            options={aspectRatioOptions}
            onChange={(v) => setAttributes({ imageAspectRatio: v })}
          />
          <SelectControl
            label={__('Image fit', 'nextora')}
            value={imageFit}
            options={imageFitOptions}
            onChange={(v) => setAttributes({ imageFit: v })}
          />
          <RangeControl
            label={__('Border radius', 'nextora')}
            value={imageBorderRadius}
            onChange={(v) => setAttributes({ imageBorderRadius: v ?? 16 })}
            min={0}
            max={48}
          />
          <RangeControl
            label={__('Gap', 'nextora')}
            value={imageGap}
            onChange={(v) => setAttributes({ imageGap: v ?? 16 })}
            min={0}
            max={64}
          />
        </PanelBody>

        <PanelBody title={__('Scrolling', 'nextora')} initialOpen={false}>
          <SelectControl
            label={__('Direction', 'nextora')}
            value={direction}
            options={directionOptions}
            onChange={(v) => setAttributes({ direction: v })}
          />
          <RangeControl
            label={__('Speed (seconds per cycle)', 'nextora')}
            value={speed}
            onChange={(v) => setAttributes({ speed: v ?? 40 })}
            min={10}
            max={120}
          />
          <ToggleControl
            label={__('Pause on hover', 'nextora')}
            checked={pauseOnHover}
            onChange={(v) => setAttributes({ pauseOnHover: v })}
          />
        </PanelBody>

        <PanelBody title={__('Tilt', 'nextora')} initialOpen={false}>
          <ToggleControl
            label={__('Enable tilt', 'nextora')}
            checked={enableTilt}
            onChange={(v) => setAttributes({ enableTilt: v })}
          />
          <RangeControl
            label={__('Angle for even-index images (0, 2, 4…)', 'nextora')}
            help={__('Default: −2°', 'nextora')}
            value={tiltEvenAngle}
            onChange={(v) => setAttributes({ tiltEvenAngle: v ?? -2 })}
            min={-15}
            max={15}
          />
          <RangeControl
            label={__('Angle for odd-index images (1, 3, 5…)', 'nextora')}
            help={__('Default: 5°', 'nextora')}
            value={tiltOddAngle}
            onChange={(v) => setAttributes({ tiltOddAngle: v ?? 5 })}
            min={-15}
            max={15}
          />
        </PanelBody>

        <PanelBody title={__('Fade mask', 'nextora')} initialOpen={false}>
          <ToggleControl
            label={__('Enable fade mask', 'nextora')}
            checked={enableFadeMask}
            onChange={(v) => setAttributes({ enableFadeMask: v })}
          />
          {enableFadeMask && (
            <>
              <SelectControl
                label={__('Fade direction', 'nextora')}
                value={fadeMaskDirection}
                options={maskDirectionOptions}
                onChange={(v) => setAttributes({ fadeMaskDirection: v })}
              />
              {(fadeMaskDirection === 'horizontal' || fadeMaskDirection === 'both') && (
                <>
                  <RangeControl
                    label={__('Left fade amount', 'nextora')}
                    help={__('How far the mask fades in from the left edge.', 'nextora')}
                    value={fadeMaskLeft}
                    onChange={(v) => setAttributes({ fadeMaskLeft: v ?? 20 })}
                    min={0}
                    max={50}
                  />
                  <RangeControl
                    label={__('Right fade amount', 'nextora')}
                    help={__('How far the mask fades out toward the right edge.', 'nextora')}
                    value={fadeMaskRight}
                    onChange={(v) => setAttributes({ fadeMaskRight: v ?? 20 })}
                    min={0}
                    max={50}
                  />
                </>
              )}
            </>
          )}
        </PanelBody>

        <PanelColorSettings
          title={__('Overlay', 'nextora')}
          enableAlpha
          colorSettings={[
            {
              value: colorValueForPicker(overlayColor, currentPalette, allPalette),
              onChange: (val) =>
                setAttributes({ overlayColor: normalizeColorForStorage(val, allPalette) }),
              label: __('Overlay color', 'nextora'),
            },
          ]}
        >
          <RangeControl
            label={__('Overlay opacity', 'nextora')}
            value={overlayOpacity}
            onChange={(v) => setAttributes({ overlayOpacity: v ?? 0 })}
            min={0}
            max={1}
            step={0.05}
          />
          <SelectControl
            label={__('Overlay style', 'nextora')}
            value={overlayStyle}
            options={overlayStyleOptions}
            onChange={(v) => setAttributes({ overlayStyle: v })}
          />
        </PanelColorSettings>

        <PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
          <ToggleControl
            label={__('Animate on scroll', 'nextora')}
            help={__(
              'Fade in when entering the viewport. Disabled automatically when the visitor prefers reduced motion.',
              'nextora',
            )}
            checked={enableScrollAnimation !== false}
            onChange={(v) => setAttributes({ enableScrollAnimation: v })}
          />
        </PanelBody>

        <PanelBody title={__('Accessibility', 'nextora')} initialOpen={false}>
          <TextControl
            label={__('ARIA label', 'nextora')}
            help={__(
              "Describes the image gallery for screen readers. Falls back to 'Featured image gallery' when empty.",
              'nextora',
            )}
            value={ariaLabel}
            onChange={(v) => setAttributes({ ariaLabel: v })}
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
                      hasImages
                        ? __('Edit images', 'nextora')
                        : __('Choose images', 'nextora')
                    }
                    onClick={open}
                  />
                </ToolbarGroup>
              </BlockControls>

              <div {...blockProps}>
                {!hasImages ? (
                  <div className="nextora-sis-editor__frame nextora-sis-editor__frame--empty">
                    <Placeholder
                      className="nextora-sis-editor__placeholder"
                      icon={imageIcon as any}
                      label={__('Scrolling Image Strip', 'nextora')}
                      instructions={__('Add images; they will scroll in a continuous strip on the site.', 'nextora')}
                    >
                      <Button variant="secondary" onClick={open}>
                        {__('Add images', 'nextora')}
                      </Button>
                    </Placeholder>
                  </div>
                ) : (
                  <div className="nextora-sis-editor__frame">
                    <div className="nextora-sis-editor__head">
                      <p className="nextora-sis-editor__head-text" aria-live="polite">
                        {sprintf(
                          _n('%d image', '%d images', idList.length, 'nextora'),
                          idList.length,
                        )}
                      </p>
                      <Button variant="secondary" onClick={open} icon={imageIcon as any}>
                        {__('Edit', 'nextora')}
                      </Button>
                    </div>

                    <ul className="nextora-sis-editor__thumbs" aria-label={__('Images in order', 'nextora')}>
                      {idList.map((id, i) => {
                        const m = media.find((x) => x && x.id === id);
                        const src = m?.source_url;

                        return (
                          <li key={id} className="nextora-sis-editor__thumb">
                            <div className="nextora-sis-editor__thumb-preview">
                              {src ? (
                                <img
                                  className="nextora-sis-editor__img"
                                  src={src}
                                  alt={m?.alt_text || ''}
                                />
                              ) : (
                                <div className="nextora-sis-editor__thumb-skeleton" aria-hidden>
                                  …
                                </div>
                              )}
                            </div>
                            <HStack
                              className="nextora-sis-editor__thumb-actions"
                              spacing={0}
                              justify="center"
                            >
                              <Button
                                className="nextora-sis-editor__reorder"
                                icon={chevronUpIcon as any}
                                isSmall
                                label={__('Move earlier', 'nextora')}
                                onClick={() => move(i, -1)}
                                disabled={i === 0}
                              />
                              <Button
                                className="nextora-sis-editor__reorder"
                                icon={chevronDownIcon as any}
                                isSmall
                                label={__('Move later', 'nextora')}
                                onClick={() => move(i, 1)}
                                disabled={i === idList.length - 1}
                              />
                              <Button
                                className="nextora-sis-editor__reorder"
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

                    <p className="nextora-sis-editor__hint">
                      {__(
                        'Images scroll continuously on the site, not in the editor.',
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
