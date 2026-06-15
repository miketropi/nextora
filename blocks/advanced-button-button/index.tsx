import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';
import type { AdvancedButtonButtonAttributes } from './types';

registerBlockType( metadata as BlockConfiguration< AdvancedButtonButtonAttributes >, {
	edit: Edit,
	save: Save,
} );
