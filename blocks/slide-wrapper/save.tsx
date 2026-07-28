import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Serializes inner slide blocks. Required for dynamic blocks that use InnerBlocks.
 */
export default function Save() {
  return (
    <div {...useBlockProps.save()}>
      <InnerBlocks.Content />
    </div>
  );
}
