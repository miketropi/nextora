import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { BoxImageAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<BoxImageAttributes>, {
	edit: Edit,
	save: () => null,
});
