import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { AdvancedListAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<AdvancedListAttributes>, {
	edit: Edit,
	// Dynamic block — front-end output handled by render.php
	save: () => null,
});
