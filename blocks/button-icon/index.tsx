import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';
import type { ButtonIconAttributes } from './types';

registerBlockType( metadata as BlockConfiguration< ButtonIconAttributes >, {
	edit: Edit,
	save: Save,
} );
