import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import type { BlockEditProps } from '@wordpress/blocks';

export default function HelloAgentEdit(_props: BlockEditProps<Record<string, never>>) {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <p style={{ margin: 0, padding: '1.5rem', textAlign: 'center' }}>
        {__('Hello Nextora agent runtime', 'nextora')}
      </p>
    </div>
  );
}
