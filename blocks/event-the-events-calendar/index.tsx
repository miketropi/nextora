import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { EventTecAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<EventTecAttributes>, {
	edit: Edit,
	save: () => null,
});
