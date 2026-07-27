import { BlockConfiguration, registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';

registerBlockType(metadata as BlockConfiguration<Record<string, unknown>>, {
  edit: Edit,
  save: () => null,
});
