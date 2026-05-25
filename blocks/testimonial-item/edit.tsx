// @ts-nocheck
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = ['core/image', 'core/heading', 'core/paragraph'];

const INNER_TEMPLATE = [
  [
    'core/image',
    {
      align: 'full',
      sizeSlug: 'large',
      linkDestination: 'none',
      className: 'nextora-testimonial-item__image',
    },
  ],
  [
    'core/heading',
    {
      level: 3,
      placeholder: __('Heading', 'nextora'),
      className: 'nextora-testimonial-item__heading',
    },
  ],
  [
    'core/paragraph',
    {
      placeholder: __('Write testimonial text…', 'nextora'),
      className: 'nextora-testimonial-item__paragraph',
    },
  ],
];

export default function Edit() {
  const blockProps = useBlockProps({ className: 'nextora-testimonial-item' });

  const innerBlocksProps = useInnerBlocksProps(
    { className: 'nextora-testimonial-item__inner' },
    {
      allowedBlocks: ALLOWED_BLOCKS,
      template: INNER_TEMPLATE,
      templateLock: 'contentOnly',
    },
  );

  return (
    <div {...blockProps}>
      <div className="nextora-testimonial-item__grid">
        <div {...innerBlocksProps} />
      </div>
    </div>
  );
}
