import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';
import type { ButtonIconButtonAttributes } from './types';

registerBlockType( metadata as BlockConfiguration< ButtonIconButtonAttributes >, {
	edit: Edit,
	save: Save,
} );
