import { createRoot } from '@wordpress/element';
import App from './App';

const container = document.getElementById('nextora-cloud-templates-root');

if (container) {
	const root = createRoot(container);
	root.render(<App />);
}
