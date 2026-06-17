import { BlockConfiguration, registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

type Attributes = {
  backgroundType: string;
  sectionBackgroundColor: string;
  sectionBackgroundFill: 'solid' | 'gradient';
  sectionBackgroundGradient: string;
  backgroundColor: string;
  backgroundImageId: number;
  backgroundImageUrl: string;
  backgroundImageFocalPoint: { x: number; y: number };
  backgroundImageSize: string;
  backgroundImageCustomSize: string;
  backgroundImageRepeat: boolean;
  backgroundVideoUrl: string;
  overlayColor: string;
  overlayOpacity: number;
  overlayStyle: string;
  minHeight: string;
  enableParallax: boolean;
  enableBackgroundAnimation: boolean;
  backgroundAnimation: string;
  backgroundAnimationSpeed: number;
  parallaxSpeed: number;
  enableScrollAnimation: boolean;
  enableHoverReveal: boolean;
  hoverRevealImageId: number;
  hoverRevealImageUrl: string;
  hoverRevealImageFocalPoint: { x: number; y: number };
  hoverRevealImageSize: string;
};

registerBlockType(metadata as BlockConfiguration<Attributes>, {
  edit: Edit,
  save: Save,
});
