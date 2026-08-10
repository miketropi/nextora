import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { ScrollingImageStripAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<ScrollingImageStripAttributes>, {
  edit: Edit,
  save: () => null,
});
