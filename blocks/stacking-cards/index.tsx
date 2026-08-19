import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { StackingCardsAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<StackingCardsAttributes>, {
  edit: Edit,
  save: () => null,
});
