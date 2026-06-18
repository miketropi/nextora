import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';

registerBlockType(metadata as BlockConfiguration<Record<string, never>>, {
  edit: Edit,
  save: () => null,
});
