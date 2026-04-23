import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

registerBlockType(metadata as BlockConfiguration<Record<string, unknown>>, {
  edit: Edit,
  save: Save,
  // Front-end output is still produced by render.php
});
