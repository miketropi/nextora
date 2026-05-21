// @ts-nocheck
import { __, _n, sprintf } from '@wordpress/i18n';
import {
  useBlockProps,
  useInnerBlocksProps,
  InspectorControls,
  PanelColorSettings,
  BlockControls,
  InnerBlocks,
} from '@wordpress/block-editor';
import {
  PanelBody,
  RangeControl,
  SelectControl,
  TextControl,
  ToggleControl,
  ToolbarGroup,
  ToolbarButton,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';

const SLIDE_TEMPLATE = [
  ['nextora/slide-item'],
  ['nextora/slide-item'],
];

export default function SlideWrapperEdit({ attributes, setAttributes, clientId }) {
  const {
    slidesPerView = 1,
    slidesPerGroup = 1,
    spaceBetween = 0,
    speed = 500,
    loop = true,
    effect = 'slide',
    autoplay = true,
    autoplayDelay = 5000,
    pauseOnHover = true,
    showArrows = true,
    showDots = true,
    arrowStyle = 'minimal',
    arrowSize = 24,
    arrowColor = '',
    dotColor = '',
    dotActiveColor = '',
    dotSize = 10,
    sliderHeight = '80vh',
    sliderMinHeight = '500px',
  } = attributes;

  const slideCount = useSelect(
    (select) => select('core/block-editor').getBlockCount(clientId),
    [clientId],
  );

  const blockProps = useBlockProps({
    className: 'nextora-sw-editor',
    style: {
      '--nextora-sw-height': sliderHeight || '80vh',
      '--nextora-sw-min-height': sliderMinHeight || '500px',
    },
  });

  const innerBlocksProps = useInnerBlocksProps(
    { className: 'nextora-sw-editor__slides' },
    {
      allowedBlocks: ['nextora/slide-item'],
      template: SLIDE_TEMPLATE,
      orientation: 'vertical',
      renderAppender: InnerBlocks.ButtonBlockAppender,
    },
  );

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            label={sprintf(
              _n('%d slide', '%d slides', slideCount, 'nextora'),
              slideCount,
            )}
            disabled
          >
            {sprintf(_n('%d slide', '%d slides', slideCount, 'nextora'), slideCount)}
          </ToolbarButton>
        </ToolbarGroup>
      </BlockControls>

      <InspectorControls>
        <PanelBody title={__('Settings', 'nextora')} initialOpen>
          <RangeControl
            label={__('Slides per view', 'nextora')}
            value={slidesPerView}
            onChange={(v) => setAttributes({ slidesPerView: v ?? 1 })}
            min={1}
            max={5}
            step={1}
          />
          <RangeControl
            label={__('Slides per group', 'nextora')}
            value={slidesPerGroup}
            onChange={(v) => setAttributes({ slidesPerGroup: v ?? 1 })}
            min={1}
            max={5}
            step={1}
          />
          <RangeControl
            label={__('Space between slides (px)', 'nextora')}
            value={spaceBetween}
            onChange={(v) => setAttributes({ spaceBetween: v ?? 0 })}
            min={0}
            max={100}
            step={1}
          />
          <SelectControl
            label={__('Transition effect', 'nextora')}
            value={effect}
            options={[
              { label: __('Slide', 'nextora'), value: 'slide' },
              { label: __('Fade', 'nextora'), value: 'fade' },
            ]}
            onChange={(v) => setAttributes({ effect: v || 'slide' })}
          />
          <RangeControl
            label={__('Transition speed (ms)', 'nextora')}
            value={speed}
            onChange={(v) => setAttributes({ speed: v ?? 500 })}
            min={100}
            max={2000}
            step={100}
          />
          <ToggleControl
            label={__('Loop', 'nextora')}
            checked={loop}
            onChange={(v) => setAttributes({ loop: v })}
          />
        </PanelBody>

        <PanelBody title={__('Autoplay', 'nextora')} initialOpen={false}>
          <ToggleControl
            label={__('Enable autoplay', 'nextora')}
            checked={autoplay}
            onChange={(v) => setAttributes({ autoplay: v })}
          />
          {autoplay && (
            <>
              <RangeControl
                label={__('Autoplay delay (ms)', 'nextora')}
                value={autoplayDelay}
                onChange={(v) => setAttributes({ autoplayDelay: v ?? 5000 })}
                min={1000}
                max={15000}
                step={500}
              />
              <ToggleControl
                label={__('Pause on hover', 'nextora')}
                checked={pauseOnHover}
                onChange={(v) => setAttributes({ pauseOnHover: v })}
              />
            </>
          )}
        </PanelBody>

        <PanelBody title={__('Navigation', 'nextora')} initialOpen={false}>
          <ToggleControl
            label={__('Show navigation', 'nextora')}
            checked={showArrows}
            onChange={(v) => setAttributes({ showArrows: v })}
          />
          {showArrows && (
            <>
              <SelectControl
                label={__('Arrow style', 'nextora')}
                value={arrowStyle}
                options={[
                  { label: __('Minimal', 'nextora'), value: 'minimal' },
                  { label: __('Circle', 'nextora'), value: 'circle' },
                  { label: __('Square', 'nextora'), value: 'square' },
                ]}
                onChange={(v) => setAttributes({ arrowStyle: v || 'minimal' })}
              />
              <RangeControl
                label={__('Arrow size (px)', 'nextora')}
                value={arrowSize}
                onChange={(v) => setAttributes({ arrowSize: v ?? 24 })}
                min={16}
                max={48}
                step={1}
              />
            </>
          )}
        </PanelBody>

        <PanelBody title={__('Pagination', 'nextora')} initialOpen={false}>
          <ToggleControl
            label={__('Show pagination', 'nextora')}
            checked={showDots}
            onChange={(v) => setAttributes({ showDots: v })}
          />
          {showDots && (
            <RangeControl
              label={__('Dot size (px)', 'nextora')}
              value={dotSize}
              onChange={(v) => setAttributes({ dotSize: v ?? 10 })}
              min={6}
              max={20}
              step={1}
            />
          )}
        </PanelBody>

        <PanelBody title={__('Appearance', 'nextora')} initialOpen={false}>
          <p className="components-base-control__help" style={{ marginTop: 0 }}>
            {__('Empty uses theme default.', 'nextora')}
          </p>
          <PanelColorSettings
            title={__('Colors', 'nextora')}
            colorSettings={[
              {
                value: arrowColor,
                onChange: (v) => setAttributes({ arrowColor: v || '' }),
                label: __('Arrow color', 'nextora'),
              },
              {
                value: dotColor,
                onChange: (v) => setAttributes({ dotColor: v || '' }),
                label: __('Dot color', 'nextora'),
              },
              {
                value: dotActiveColor,
                onChange: (v) => setAttributes({ dotActiveColor: v || '' }),
                label: __('Active dot color', 'nextora'),
              },
            ]}
          />
        </PanelBody>

        <PanelBody title={__('Dimensions', 'nextora')} initialOpen={false}>
          <TextControl
            label={__('Slider height', 'nextora')}
            help={__('CSS value, e.g. 80vh, 600px, auto.', 'nextora')}
            value={sliderHeight}
            onChange={(v) => setAttributes({ sliderHeight: v || '80vh' })}
          />
          <TextControl
            label={__('Minimum height', 'nextora')}
            value={sliderMinHeight}
            onChange={(v) => setAttributes({ sliderMinHeight: v || '500px' })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <p className="nextora-sw-editor__hint components-base-control__help">
          {__(
            'Slides stack here for editing. The carousel runs on the site, not in the editor.',
            'nextora',
          )}
        </p>
        <div {...innerBlocksProps} />
      </div>
    </>
  );
}
