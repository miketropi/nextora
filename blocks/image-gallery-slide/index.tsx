import { BlockConfiguration, registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';

type Attributes = {
  imageIds: number[];
  showNav: boolean;
  showPagination: boolean;
  loop: boolean;
  autoplay: boolean;
  autoplayDelay: number;
  spaceBetween: number;
  slidesPerView: number;
  slidesPerViewTablet: number;
  slidesPerViewDesktop: number;
  slideImageFit: string;
  slideAreaBackground: string;
};

registerBlockType(metadata as BlockConfiguration<Attributes>, {
  edit: Edit,
  save: () => null,
});
