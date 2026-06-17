import { BlockConfiguration, registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

type Attributes = {
  backgroundType: string;
  backgroundColor: string;
  backgroundImageId: number;
  backgroundImageUrl: string;
  backgroundVideoUrl: string;
  overlayColor: string;
  overlayOpacity: number;
  minHeight: string;
  enableParallax: boolean;
  parallaxSpeed: number;
  enableScrollAnimation: boolean;
};

registerBlockType(metadata as BlockConfiguration<Attributes>, {
  edit: Edit,
  save: Save,
});
