import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';
import type { AdvancedButtonAttributes } from './types';

registerBlockType( metadata as BlockConfiguration< AdvancedButtonAttributes >, {
	edit: Edit,
	save: Save,
} );
