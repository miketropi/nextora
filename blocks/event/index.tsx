import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { EventAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<EventAttributes>, {
	edit: Edit,
	save: () => null,
});
