import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { BoxContentAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<BoxContentAttributes>, {
	edit: Edit,
	save: () => null,
});
