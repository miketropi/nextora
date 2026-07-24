import { BlockConfiguration, registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';

registerBlockType(metadata as BlockConfiguration<Record<string, unknown>>, {
  edit: Edit,
  // Dynamic block — front-end output handled by render.php
  save: () => null,
});
