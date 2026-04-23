import { BlockConfiguration, registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';

type Attributes = {
  gridLayout: string;
  imageIds: number[];
  columnsMobile: number;
  columnsTablet: number;
  columnsDesktop: number;
  gap: number;
  imageFit: string;
  imageAreaBackground: string;
  showCaptions: boolean;
};

registerBlockType(metadata as BlockConfiguration<Attributes>, {
  edit: Edit,
  save: () => null,
});
