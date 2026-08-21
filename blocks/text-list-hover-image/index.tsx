import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { TextListHoverImageAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<TextListHoverImageAttributes>, {
  edit: Edit,
  save: () => null,
});
