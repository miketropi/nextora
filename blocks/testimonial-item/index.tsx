import { BlockConfiguration, registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

registerBlockType(metadata as BlockConfiguration<Record<string, never>>, {
  edit: Edit,
  save: Save,
});
