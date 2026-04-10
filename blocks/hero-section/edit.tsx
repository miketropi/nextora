// @ts-nocheck
import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Attributes {
  heading: string;
  content: string;
}

interface EditProps {
  attributes: Attributes;
  setAttributes: (attrs: Partial<Attributes>) => void;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function HeroSectionEdit({ attributes, setAttributes }: EditProps) {
  const { heading, content } = attributes;

  /**
   * useBlockProps injects:
   *  - default block class: wp-block-nextora-hero-section
   *  - inline styles from Global Styles (color, spacing, typography)
   */
  const blockProps = useBlockProps();

  return (
    <>
      {/* Sidebar controls */}
      <InspectorControls>
        <PanelBody title={__('Hero Section Settings', 'nextora')} initialOpen>
          {/* Add custom sidebar controls here */}
        </PanelBody>
      </InspectorControls>

      {/* Editor UI */}
      <div {...blockProps}>
        <RichText
          tagName="h2"
          value={heading}
          onChange={(val: string) => setAttributes({ heading: val })}
          placeholder={__('Enter heading…', 'nextora')}
          allowedFormats={['core/bold', 'core/italic']}
        />
        <RichText
          tagName="p"
          value={content}
          onChange={(val: string) => setAttributes({ content: val })}
          placeholder={__('Enter content…', 'nextora')}
        />
      </div>
    </>
  );
}
