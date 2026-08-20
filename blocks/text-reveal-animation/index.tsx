import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { TextRevealAnimationAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<TextRevealAnimationAttributes>, {
	edit: Edit,
	save: () => null,
});
