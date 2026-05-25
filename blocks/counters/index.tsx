import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { CountersAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<CountersAttributes>, {
	edit: Edit,
	save: () => null,
});
