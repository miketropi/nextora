import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { InstagramFeedAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<InstagramFeedAttributes>, {
	edit: Edit,
	save: () => null,
});
