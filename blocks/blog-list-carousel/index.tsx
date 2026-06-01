import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { BlogListCarouselAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<BlogListCarouselAttributes>, {
	edit: Edit,
	save: () => null,
});
