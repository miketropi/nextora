import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, useBlockProps } from '@wordpress/block-editor';
import { Disabled, PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

interface Attributes {
  modalId: string;
  titleText: string;
  showSubtitle: boolean;
  subtitleText: string;
  openLabel: string;
  closeLabel: string;
  formAriaLabel: string;
  iconColor: string;
}

interface EditProps {
  attributes: Attributes;
  setAttributes: (attrs: Partial<Attributes>) => void;
}

export default function SpotlightSearchEdit({ attributes, setAttributes }: EditProps) {
  const blockProps = useBlockProps({
    className: 'nextora-spotlight-search-block--editor',
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Spotlight search', 'nextora')} initialOpen>
          <TextControl
            label={__('Modal ID (optional)', 'nextora')}
            value={attributes.modalId}
            onChange={(modalId) => setAttributes({ modalId })}
            help={__(
              'Only needed if you use more than one spotlight block. Letters, numbers, hyphens.',
              'nextora'
            )}
          />
          <TextControl
            label={__('Dialog title', 'nextora')}
            value={attributes.titleText}
            onChange={(titleText) => setAttributes({ titleText })}
            placeholder={__('Leave empty for default', 'nextora')}
          />
          <ToggleControl
            label={__('Show subtitle', 'nextora')}
            checked={attributes.showSubtitle}
            onChange={(showSubtitle) => setAttributes({ showSubtitle })}
          />
          {attributes.showSubtitle && (
            <TextControl
              label={__('Subtitle', 'nextora')}
              value={attributes.subtitleText}
              onChange={(subtitleText) => setAttributes({ subtitleText })}
              placeholder={__('Leave empty for default', 'nextora')}
            />
          )}
        </PanelBody>
        <PanelColorSettings
          title={__('Icon', 'nextora')}
          colorSettings={[
            {
              value: attributes.iconColor,
              onChange: (iconColor) => setAttributes({ iconColor: iconColor ?? '' }),
              label: __('Search icon color', 'nextora'),
            },
          ]}
        />
        <PanelBody title={__('Labels', 'nextora')} initialOpen={false}>
          <TextControl
            label={__('Open button (screen reader)', 'nextora')}
            value={attributes.openLabel}
            onChange={(openLabel) => setAttributes({ openLabel })}
            placeholder={__('Leave empty for default', 'nextora')}
          />
          <TextControl
            label={__('Close button (screen reader)', 'nextora')}
            value={attributes.closeLabel}
            onChange={(closeLabel) => setAttributes({ closeLabel })}
            placeholder={__('Leave empty for default', 'nextora')}
          />
          <TextControl
            label={__('Search field label', 'nextora')}
            value={attributes.formAriaLabel}
            onChange={(formAriaLabel) => setAttributes({ formAriaLabel })}
            placeholder={__('Leave empty for default', 'nextora')}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <Disabled>
          <ServerSideRender
            block="nextora/spotlight-search"
            attributes={attributes as unknown as Record<string, unknown>}
          />
        </Disabled>
      </div>
    </>
  );
}
