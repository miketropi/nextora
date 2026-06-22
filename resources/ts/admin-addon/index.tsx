import { createRoot } from '@wordpress/element';
import App from './App';

const container = document.getElementById('nextora-addon-root');

if (container) {
	const root = createRoot(container);
	root.render(<App />);
}
