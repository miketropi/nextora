import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

interface SaveProps {
	attributes: {
		linkType?: string;
	};
}

/**
 * Serializes popup inner blocks when link type is modal.
 */
export default function save( { attributes }: SaveProps ) {
	if ( attributes.linkType !== 'modal' ) {
		return null;
	}

	return (
		<div
			{ ...useBlockProps.save( {
				className: 'nextora-button-icon-modal__save',
			} ) }
		>
			<InnerBlocks.Content />
		</div>
	);
}
