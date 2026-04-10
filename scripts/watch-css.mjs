/**
 * Runs chokidar-cli against paths from tailwind-watch.config.json (optional).
 * Edit that file when you add theme folders that contain Tailwind classes.
 *
 * @see resources/css/app.css @source — keep @source and watch paths in sync.
 */

import { spawn } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const configPath = join(root, 'tailwind-watch.config.json');

const defaultPaths = [
	'resources/css',
	'blocks',
	'inc',
	'template-parts',
	'parts',
	'templates',
];

/** Always ignored so builds stay fast and stable. */
const alwaysIgnore = ['**/node_modules/**', '**/vendor/**', 'assets'];

let paths = [...defaultPaths];
let extraIgnore = [];

if ( existsSync( configPath ) ) {
	try {
		const user = JSON.parse( readFileSync( configPath, 'utf8' ) );
		if ( Array.isArray( user.paths ) && user.paths.length > 0 ) {
			paths = user.paths.map( ( p ) => String( p ).trim() ).filter( Boolean );
		}
		if ( Array.isArray( user.ignore ) ) {
			extraIgnore = user.ignore.map( ( p ) => String( p ).trim() ).filter( Boolean );
		}
	} catch {
		console.warn( '[watch-css] Invalid tailwind-watch.config.json — using defaults.' );
	}
}

const ignore = [...new Set( [...alwaysIgnore, ...extraIgnore] )];

/** Omit --verbose here so watch output stays compact (use `npm run build:css` for details). */
const postcssCmd = 'postcss ./resources/css/app.css -o ./assets/css/app.css';

const args = [
	...paths,
	...ignore.flatMap( ( pattern ) => ['-i', pattern] ),
	'-c',
	postcssCmd,
];

const chokidarBin = join( root, 'node_modules', 'chokidar-cli', 'index.js' );

if ( ! existsSync( chokidarBin ) ) {
	console.error( 'Missing chokidar-cli. Run npm install in the theme directory.' );
	process.exit( 1 );
}

console.log(
	`Watching ${ paths.length } path(s) → assets/css/app.css (edit tailwind-watch.config.json to add folders)`
);

const child = spawn( process.execPath, [chokidarBin, ...args], {
	cwd: root,
	stdio: 'inherit',
} );

child.on( 'exit', ( code ) => process.exit( code ?? 0 ) );
