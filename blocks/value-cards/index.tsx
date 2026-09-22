import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { ValueCardsAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<ValueCardsAttributes>, {
	edit: Edit,
	save: () => null,
});
