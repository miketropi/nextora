import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import Edit from './edit';
import metadata from './block.json';
import type { RopeGalleryAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<RopeGalleryAttributes>, {
	edit: Edit,
	// Save InnerBlocks content for persistence; PHP render.php handles the full output
	save: () => <InnerBlocks.Content />,
});
