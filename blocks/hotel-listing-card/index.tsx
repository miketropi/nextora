import { BlockConfiguration, registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { HotelListingCardAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<HotelListingCardAttributes>, {
  edit: Edit,
  save: () => null,
});
