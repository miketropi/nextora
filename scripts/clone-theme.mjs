#!/usr/bin/env node
/**
 * Copy Nextora to a new theme folder under wp-content/themes and rewrite identifiers.
 *
 * Usage (from this theme directory):
 *   npm run theme:clone -- --slug=my-shop --name="My Shop"
 * Optional:
 *   --namespace=MyShop   (default: PascalCase from slug, e.g. my-shop → MyShop)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname( fileURLToPath( import.meta.url ) );
const SOURCE_ROOT = path.resolve( __dirname, '..' );
const THEMES_DIR = path.resolve( SOURCE_ROOT, '..' );

function parseArgs( argv ) {
	const out = {};
	for ( let i = 2; i < argv.length; i++ ) {
		const a = argv[ i ];
		const m = a.match( /^--([^=]+)=(.*)$/ );
		if ( m ) {
			out[ m[ 1 ] ] = m[ 2 ];
		}
	}
	return out;
}

function pascalFromSlug( slug ) {
	return slug
		.split( '-' )
		.filter( Boolean )
		.map( ( p ) => p.charAt( 0 ).toUpperCase() + p.slice( 1 ).toLowerCase() )
		.join( '' );
}

function shouldCopyDir( name ) {
	return ! [ 'node_modules', 'vendor', '.git', '.phpunit.cache' ].includes( name );
}

function isProbablyTextFile( filePath ) {
	return /\.(php|css|json|html|ts|tsx|mjs|cjs|neon|xml|md|txt|dist|lock)$/i.test(
		filePath
	);
}

function walkCopy( src, dest ) {
	fs.mkdirSync( dest, { recursive: true } );
	for ( const ent of fs.readdirSync( src, { withFileTypes: true } ) ) {
		const from = path.join( src, ent.name );
		const to = path.join( dest, ent.name );
		if ( ent.isDirectory() ) {
			if ( ! shouldCopyDir( ent.name ) ) {
				continue;
			}
			walkCopy( from, to );
		} else {
			fs.copyFileSync( from, to );
		}
	}
}

function transformFile( filePath, rules ) {
	if ( ! isProbablyTextFile( filePath ) ) {
		return;
	}
	let s = fs.readFileSync( filePath, 'utf8' );
	for ( const { from, to } of rules ) {
		if ( typeof from === 'string' ) {
			s = s.split( from ).join( to );
		} else {
			s = s.replace( from, to );
		}
	}
	fs.writeFileSync( filePath, s, 'utf8' );
}

function walkTransform( dir, rules ) {
	for ( const ent of fs.readdirSync( dir, { withFileTypes: true } ) ) {
		const full = path.join( dir, ent.name );
		if ( ent.isDirectory() ) {
			if ( ! shouldCopyDir( ent.name ) ) {
				continue;
			}
			walkTransform( full, rules );
		} else {
			transformFile( full, rules );
		}
	}
}

const args = parseArgs( process.argv );
const slug = ( args.slug || '' ).trim().toLowerCase();
const displayName = ( args.name || '' ).trim();
const ns = ( args.namespace || '' ).trim() || pascalFromSlug( slug );

if ( ! slug || ! /^[a-z][a-z0-9-]*$/.test( slug ) ) {
	console.error( 'Usage: npm run theme:clone -- --slug=my-theme --name="My Theme" [--namespace=MyTheme]' );
	process.exit( 1 );
}
if ( ! displayName ) {
	console.error( 'Missing --name="Human readable theme name"' );
	process.exit( 1 );
}

const phpPrefix = slug.replace( /-/g, '_' );
const constPrefix = slug.toUpperCase().replace( /-/g, '_' );
const destRoot = path.join( THEMES_DIR, slug );

if ( fs.existsSync( destRoot ) ) {
	console.error( `Destination already exists: ${ destRoot }` );
	process.exit( 1 );
}

walkCopy( SOURCE_ROOT, destRoot );

const rules = [
	{ from: '@package Nextora', to: `@package ${ ns }` },
	{ from: 'namespace Nextora;', to: `namespace ${ ns };` },
	{ from: 'Nextora\\', to: `${ ns }\\` },
	{ from: 'NEXTORA_', to: `${ constPrefix }_` },
	{ from: 'nextora_', to: `${ phpPrefix }_` },
	{ from: /Theme Name:\s*Nextora/g, to: `Theme Name: ${ displayName }` },
	{ from: "'nextora'", to: `'${ slug }'` },
	{ from: '"nextora"', to: `"${ slug }"` },
	{ from: 'nextora-theme', to: `${ slug }-theme` },
	{ from: 'nextora/theme', to: `${ slug }/theme` },
	{ from: '/themes/nextora', to: `/themes/${ slug }` },
	{ from: /"Nextora\\": "inc\/"/, to: `"${ ns }\\": "inc/"` },
	{ from: /"Nextora\\Tests\\": "tests\/"/, to: `"${ ns }\\Tests\\": "tests/"` },
	{ from: 'Text Domain: nextora', to: `Text Domain: ${ slug }` },
	{ from: 'nextora-container', to: `${ slug }-container` },
	{ from: 'nextora-main', to: `${ slug }-main` },
	{ from: 'nextora-entry', to: `${ slug }-entry` },
	{ from: 'nextora-article', to: `${ slug }-article` },
	{ from: 'nextora-pagination-wrap', to: `${ slug }-pagination-wrap` },
	{ from: '--nextora-gutter', to: `--${ slug }-gutter` },
	{ from: '--nextora-main-pad-y', to: `--${ slug }-main-pad-y` },
	{ from: 'nextora-js', to: `${ slug }-js` },
	{ from: 'nextora antialiased', to: `${ slug } antialiased` },
];

walkTransform( destRoot, rules );

console.log( `Created ${ destRoot }` );
console.log( 'Next: cd into the new folder, run composer install && npm install && npm run build' );
