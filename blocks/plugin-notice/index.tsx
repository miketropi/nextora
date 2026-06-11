import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { Attributes } from './types';

registerBlockType(metadata as BlockConfiguration<Attributes>, {
	edit: Edit,
	save: () => null,
});
