import { BlockConfiguration, registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';

interface Attributes {
  modalId: string;
  titleText: string;
  showSubtitle: boolean;
  subtitleText: string;
  openLabel: string;
  closeLabel: string;
  formAriaLabel: string;
  iconColor: string;
}

registerBlockType(metadata as BlockConfiguration<Attributes>, { 
  edit: Edit,
  save: () => null,
});
