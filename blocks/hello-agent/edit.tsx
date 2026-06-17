import { useBlockProps } from '@wordpress/block-editor';
import type { BlockEditProps } from '@wordpress/blocks';

export default function HelloAgentEdit({
  attributes,
  setAttributes,
}: BlockEditProps<Record<string, unknown>>) {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <p className="hello-agent__message">Hello Nextora agent runtime</p>
    </div>
  );
}
