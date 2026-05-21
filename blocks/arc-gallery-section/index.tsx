import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { ArcGallerySectionAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<ArcGallerySectionAttributes>, {
	edit: Edit,
	save: () => null,
});
