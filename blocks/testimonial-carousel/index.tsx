import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { TestimonialCarouselAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<TestimonialCarouselAttributes>, {
	edit: Edit,
	save: () => null,
});
