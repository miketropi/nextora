import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { BoxIconAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<BoxIconAttributes>, {
	edit: Edit,
	save: () => null,
});
