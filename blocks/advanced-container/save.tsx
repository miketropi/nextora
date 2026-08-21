import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Serializes inner blocks. Required for dynamic blocks that use InnerBlocks
 * (see Block Editor Handbook — Using InnerBlocks with dynamic blocks).
 */
export default function save() {
  return (
    <div {...useBlockProps.save()}>
      <InnerBlocks.Content />
    </div>
  );
}
