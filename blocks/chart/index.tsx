import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { ChartAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<ChartAttributes>, {
    edit: Edit,
    save: () => null,
});
