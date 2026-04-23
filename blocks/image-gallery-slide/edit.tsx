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
import { useCallback } from '@wordpress/element';

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

export default function ImageGallerySlideEdit({ attributes, setAttributes }: Props) {
  const {
    imageIds = [],
    showNav = true,
    showPagination = true,
    loop = true,
    autoplay = false,
    autoplayDelay = 4500,
    spaceBetween = 12,
    slidesPerView = 1,
    slidesPerViewTablet = 1.08,
    slidesPerViewDesktop = 1.25,
    slideImageFit = 'cover',
    slideAreaBackground = '',
  } = attributes;

  const idList: number[] = Array.isArray(imageIds) ? imageIds.map((id) => parseInt(String(id), 10)).filter((n) => n > 0) : [];

  const media = useSelect(
    (select) => {
      if (!idList.length) {
        return [];
      }
      return idList
        .map((id) => (select as any)('core').getMedia(id, { context: 'view' }))
        .filter(Boolean);
    },
    [idList],
  ) as { id: number; source_url: string; alt_text?: string; caption?: { raw: string } }[];

  const onSelectImages = (items) => {
    if (!Array.isArray(items) || !items.length) {
      return;
    }
    setAttributes({ imageIds: items.map((f) => f.id) });
  };

  const move = useCallback(
    (index: number, dir: -1 | 1) => {
      const next = [...idList];
      const j = index + dir;
      if (j < 0 || j >= next.length) {
        return;
      }
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
      'nextora-ig',
      'nextora-ig--editor',
      slideImageFit === 'contain' ? 'nextora-ig--fit-contain' : '',
    ]
      .filter(Boolean)
      .join(' '),
    style: slideAreaBackground
      ? { '--nextora-ig-slide-bg': slideAreaBackground }
      : undefined,
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Appearance', 'nextora')} initialOpen>
          <SelectControl
            label={__('Image fit', 'nextora')}
            value={slideImageFit === 'contain' ? 'contain' : 'cover'}
            help={__(
              'Cover fills the frame. Contain shows the whole image; set a background for letterboxing.',
              'nextora',
            )}
            options={[
              { label: __('Cover', 'nextora'), value: 'cover' },
              { label: __('Contain (letterbox)', 'nextora'), value: 'contain' },
            ]}
            onChange={(v) => setAttributes({ slideImageFit: v })}
          />
          <PanelColorSettings
            title={__('Slide background', 'nextora')}
            colorSettings={[
              {
                value: typeof slideAreaBackground === 'string' ? slideAreaBackground : '',
                onChange: (c) => setAttributes({ slideAreaBackground: c || '' }),
                label: __('Color', 'nextora'),
              },
            ]}
          />
        </PanelBody>

        <PanelBody title={__('Navigation & playback', 'nextora')} initialOpen>
          <ToggleControl
            label={__('Arrows', 'nextora')}
            checked={!!showNav}
            onChange={(v) => setAttributes({ showNav: v })}
            help={__('Hidden when there is only one image.', 'nextora')}
          />
          <ToggleControl
            label={__('Pagination dots', 'nextora')}
            checked={!!showPagination}
            onChange={(v) => setAttributes({ showPagination: v })}
          />
          <ToggleControl
            label={__('Loop / rewind', 'nextora')}
            checked={!!loop}
            onChange={(v) => setAttributes({ loop: v })}
          />
          <ToggleControl
            label={__('Autoplay', 'nextora')}
            checked={!!autoplay}
            onChange={(v) => setAttributes({ autoplay: v })}
          />
          {autoplay && (
            <RangeControl
              label={__('Autoplay delay (ms)', 'nextora')}
              value={autoplayDelay}
              onChange={(v) => setAttributes({ autoplayDelay: v ?? 4500 })}
              min={2000}
              max={12000}
              step={500}
            />
          )}
        </PanelBody>

        <PanelBody title={__('Layout & breakpoints', 'nextora')} initialOpen={false}>
          <RangeControl
            label={__('Space between slides (px)', 'nextora')}
            value={spaceBetween}
            onChange={(v) => setAttributes({ spaceBetween: v ?? 12 })}
            min={0}
            max={48}
            step={1}
          />
          <p className="components-base-control__help" style={{ marginTop: 0 }}>
            {__(
              'More than one slide per view at 480px and 900px. Slight overlap shows a “peek” of the next image.',
              'nextora',
            )}
          </p>
          <RangeControl
            label={__('Mobile — slides per view', 'nextora')}
            value={slidesPerView}
            onChange={(v) => setAttributes({ slidesPerView: v ?? 1 })}
            min={1}
            max={3}
            step={0.05}
          />
          <RangeControl
            label={__('Tablet (480px+)', 'nextora')}
            value={slidesPerViewTablet}
            onChange={(v) => setAttributes({ slidesPerViewTablet: v ?? 1.08 })}
            min={1}
            max={2.5}
            step={0.05}
          />
          <RangeControl
            label={__('Desktop (900px+)', 'nextora')}
            value={slidesPerViewDesktop}
            onChange={(v) => setAttributes({ slidesPerViewDesktop: v ?? 1.25 })}
            min={1}
            max={3}
            step={0.05}
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
                  <div className="nextora-ig-editor__frame nextora-ig-editor__frame--empty">
                    <Placeholder
                      className="nextora-ig-editor__placeholder"
                      icon={imageIcon as any}
                      label={__('Image gallery', 'nextora')}
                      instructions={__(
                        'Add images; they’ll appear as a carousel on the site.',
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
                  <div className="nextora-ig-editor__frame">
                    <div className="nextora-ig-editor__head">
                      <p className="nextora-ig-editor__head-text" aria-live="polite">
                        {sprintf(
                          _n('%d image', '%d images', idList.length, 'nextora'),
                          idList.length,
                        )}
                      </p>
                      <Button variant="secondary" onClick={open} icon={imageIcon as any}>
                        {__('Edit', 'nextora')}
                      </Button>
                    </div>

                    <ul className="nextora-ig-editor__thumbs" aria-label={__('Slides in order', 'nextora')}>
                      {idList.map((id, i) => {
                        const m = media.find((x) => x && x.id === id);
                        const src = m?.source_url;
                        return (
                          <li key={id} className="nextora-ig-editor__thumb">
                            <div className="nextora-ig-editor__thumb-preview">
                              {src ? (
                                <img
                                  className="nextora-ig-editor__img"
                                  src={src}
                                  alt={m?.alt_text || ''}
                                />
                              ) : (
                                <div className="nextora-ig-editor__thumb-skeleton" aria-hidden>
                                  …
                                </div>
                              )}
                            </div>
                            <HStack
                              className="nextora-ig-editor__thumb-actions"
                              spacing={0}
                              justify="center"
                            >
                              <Button
                                className="nextora-ig-editor__reorder"
                                icon={chevronUpIcon as any}
                                isSmall
                                label={__('Move earlier', 'nextora')}
                                onClick={() => move(i, -1)}
                                disabled={i === 0}
                              />
                              <Button
                                className="nextora-ig-editor__reorder"
                                icon={chevronDownIcon as any}
                                isSmall
                                label={__('Move later', 'nextora')}
                                onClick={() => move(i, 1)}
                                disabled={i === idList.length - 1}
                              />
                              <Button
                                className="nextora-ig-editor__reorder"
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

                    <p className="nextora-ig-editor__hint components-base-control__help">
                      {__(
                        'Swipe and autoplay run on the site, not in the editor.',
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
