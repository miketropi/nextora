import { createRoot } from '@wordpress/element';
import App from './App';

const container = document.getElementById('nextora-addon-overview-root');

if (container) {
	const root = createRoot(container);
	root.render(<App />);
}
