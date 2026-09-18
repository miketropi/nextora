import { Button } from '@wordpress/components';
import { PluginMoreMenuItem, PluginSidebar } from '@wordpress/edit-post';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { CloudIcon } from '../cloud-templates/components/icons';
import { CloudLibraryModal } from './cloud-library-modal';

function NextoraCloudEditorPlugin() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Add to the top 3-dots editor options menu */}
			{typeof PluginMoreMenuItem !== 'undefined' && (
				<PluginMoreMenuItem
					icon={<CloudIcon width={18} height={18} />}
					onClick={() => setIsOpen(true)}
				>
					{__('Nextora Cloud Library', 'nextora')}
				</PluginMoreMenuItem>
			)}

			{/* Modal viewer for catalog & 1-click insertion */}
			<CloudLibraryModal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</>
	);
}

// Register as a Gutenberg editor plugin
try {
	registerPlugin('nextora-cloud-library', {
		render: NextoraCloudEditorPlugin,
		icon: <CloudIcon width={20} height={20} />,
	});
} catch {
	// Fallback if editor plugins API is unavailable in some contexts
}
