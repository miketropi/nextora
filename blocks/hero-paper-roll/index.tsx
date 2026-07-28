import { BlockConfiguration, registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

interface BlockAttributes {
  minHeight: string;
  bgOverlayColor: string;
  bgOverlayOpacity: number;
  contentMaxWidth: string;
}

registerBlockType(metadata as BlockConfiguration<BlockAttributes>, {
  edit: Edit,
  save: Save,
});
