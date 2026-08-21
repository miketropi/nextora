import { BlockConfiguration, registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';

type Attributes = {
  title: string;
  selector: string;
  showH1: boolean;
  showH2: boolean;
  showH3: boolean;
  showH4: boolean;
  showH5: boolean;
  showH6: boolean;
  collapsible: boolean;
  listStyle: 'ol' | 'ul';
  stickyTop: string;
};

registerBlockType(metadata as BlockConfiguration<Attributes>, {
  edit: Edit,
  // Dynamic block — front-end output handled by render.php
  save: () => null,
});
