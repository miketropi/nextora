import { BlockConfiguration, registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

type Attributes = {
  heading: string;
  headingLevel: number;
  showAccent: boolean;
  accentColor: string;
  autoplay: boolean;
  autoplayDelay: number;
  speed: number;
  showPagination: boolean;
  showNav: boolean;
  loop: boolean;
  pauseOnHover: boolean;
  effect: string;
  enableScrollAnimation: boolean;
};

registerBlockType(metadata as BlockConfiguration<Attributes>, {
  edit: Edit,
  save: Save,
});
