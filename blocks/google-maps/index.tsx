import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { GoogleMapsAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<GoogleMapsAttributes>, {
	edit: Edit,
	save: () => null,
});
