#!/usr/bin/env node
/**
 * Package the theme into a distributable ZIP for WordPress.
 *
 * Reads NEXTORA_VERSION from inc/bootstrap/version.php and creates
 * nextora-v{version}.zip in the theme root directory.
 *
 * Usage:
 *   npm run build:package
 *   node scripts/build-package.mjs
 */

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname( fileURLToPath( import.meta.url ) );
const ROOT = path.resolve( __dirname, '..' );
const THEME_SLUG = path.basename( ROOT );

function readVersion() {
	const versionPhp = fs.readFileSync(
		path.join( ROOT, 'inc', 'bootstrap', 'version.php' ),
		'utf8',
	);
	const m = versionPhp.match( /define\(\s*'NEXTORA_VERSION'\s*,\s*'([^']+)'\s*\)/ );
	if ( ! m ) {
		console.error( 'Could not parse NEXTORA_VERSION from inc/bootstrap/version.php' );
		process.exit( 1 );
	}
	return m[ 1 ];
}

function run( cmd, opts = {} ) {
	return execSync( cmd, { stdio: 'inherit', cwd: ROOT, ...opts } );
}

const version = readVersion();
const zipName = `${ THEME_SLUG }-v${ version }.zip`;
const zipPath = path.join( ROOT, zipName );

if ( fs.existsSync( zipPath ) ) {
	fs.unlinkSync( zipPath );
}

const excludes = [
	// Tooling & deps
	`${ THEME_SLUG }/node_modules/*`,
	`${ THEME_SLUG }/vendor/*`,
	'*.zip',

	// VCS & CI
	`${ THEME_SLUG }/.git/*`,
	`${ THEME_SLUG }/.github/*`,
	`${ THEME_SLUG }/.husky/*`,
	`${ THEME_SLUG }/.gitignore`,
	`${ THEME_SLUG }/.nvmrc`,
	`${ THEME_SLUG }/.lintstagedrc.cjs`,

	// Agent config (Cursor / OpenCode / Claude)
	`${ THEME_SLUG }/.cursor/*`,
	`${ THEME_SLUG }/.opencode/*`,
	`${ THEME_SLUG }/.codegraph/*`,
	`${ THEME_SLUG }/.claude/*`,
	`${ THEME_SLUG }/AGENTS.md`,
	`${ THEME_SLUG }/opencode.jsonc`,
	`${ THEME_SLUG }/.mcp.json`,
	`${ THEME_SLUG }/README.md`,

	// Source (compiled output lives in assets/ and blocks/*/index.js)
	`${ THEME_SLUG }/resources/*`,
	`${ THEME_SLUG }/scripts/*`,
	`${ THEME_SLUG }/docs/*`,

	// Block TypeScript / editor source (not needed at runtime)
	`${ THEME_SLUG }/blocks/*/*.ts`,
	`${ THEME_SLUG }/blocks/*/*.tsx`,
	`${ THEME_SLUG }/blocks/*/*.d.ts`,

	// Test tooling
	`${ THEME_SLUG }/tests/*`,
	`${ THEME_SLUG }/stubs/*`,
	`${ THEME_SLUG }/.phpunit.cache/*`,
	`${ THEME_SLUG }/phpunit.xml.dist`,

	// Dev tool config
	`${ THEME_SLUG }/composer.json`,
	`${ THEME_SLUG }/composer.lock`,
	`${ THEME_SLUG }/package.json`,
	`${ THEME_SLUG }/package-lock.json`,
	`${ THEME_SLUG }/phpstan-bootstrap.php`,
	`${ THEME_SLUG }/phpstan.neon`,
	`${ THEME_SLUG }/tsconfig.json`,
	`${ THEME_SLUG }/postcss.config.mjs`,
	`${ THEME_SLUG }/tailwind-watch.config.json`,
	`${ THEME_SLUG }/.php-cs-fixer.dist.php`,
	`${ THEME_SLUG }/.php-cs-fixer.cache`,

	// Built sourcemaps (not needed in production)
	`${ THEME_SLUG }/assets/js/*.map`,
];

const excludeArgs = excludes.map( ( e ) => `-x "${ e }"` ).join( ' ' );
const cmd = `cd "${ path.dirname( ROOT ) }" && zip -r "${ zipPath }" "${ THEME_SLUG }/" ${ excludeArgs }`;

console.log( `Packaging ${ THEME_SLUG } v${ version } → ${ zipName }` );
run( cmd );
console.log( `Created ${ zipPath }` );
