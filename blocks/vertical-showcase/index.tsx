import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { VerticalShowcaseAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<VerticalShowcaseAttributes>, {
	edit: Edit,
	save: () => null,
});
