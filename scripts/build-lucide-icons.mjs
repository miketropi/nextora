/**
 * build-lucide-icons.mjs
 * Merges Lucide nodes/tags into assets/data/lucide-icons.json.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname( fileURLToPath( import.meta.url ) );
const pkgRoot = path.join( __dirname, '../node_modules/lucide-static' );

const iconNodes = JSON.parse(
	fs.readFileSync( path.join( pkgRoot, 'icon-nodes.json' ), 'utf8' ),
);
const tags = JSON.parse(
	fs.readFileSync( path.join( pkgRoot, 'tags.json' ), 'utf8' ),
);

const output = Object.entries( iconNodes ).map( ( [ name, nodes ] ) => ( {
	name,
	tags: tags[ name ] ?? [],
	nodes,
} ) );

const dest = path.join( __dirname, '../assets/data/lucide-icons.json' );
fs.mkdirSync( path.dirname( dest ), { recursive: true } );
fs.writeFileSync( dest, JSON.stringify( output ) );
console.log( `Built ${ output.length } icons → ${ dest }` );

