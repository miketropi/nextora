import { BlockConfiguration, registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

interface BlockAttributes {
  columnSplit: string;
  creativePosition: string;
  stackOrder: string;
  verticalAlign: string;
  stickyColumn: string;
  heading: string;
  content: string;
}

registerBlockType(metadata as BlockConfiguration<BlockAttributes>, {
  edit: Edit,
  save: Save,
});
