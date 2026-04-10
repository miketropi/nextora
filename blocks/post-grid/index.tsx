import { BlockConfiguration, registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { PostGridAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<PostGridAttributes>, {
  edit: Edit,
  save: () => null,
});
