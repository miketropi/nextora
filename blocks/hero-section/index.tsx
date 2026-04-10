import { BlockConfiguration, registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';

interface Attributes {
  heading: string;
  content: string;
}

registerBlockType(metadata as BlockConfiguration<Attributes>, {
  edit: Edit,
  // Dynamic block — front-end output handled by render.php
  save: () => null,
});
