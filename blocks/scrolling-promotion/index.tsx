import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { ScrollingPromotionAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<ScrollingPromotionAttributes>, {
	edit: Edit,
	save: () => null,
});
