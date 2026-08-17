/**
 * build-lucide-icons.mjs
 * Merges Lucide nodes/tags and generates animated-icons-compatible node metadata.
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

const families = {
	directional: /arrow|chevron|move|corner|redo|undo|refresh|rotate/,
	'pop-envelope': /mail|message|send|forward|reply|inbox|mailbox/,
	playback: /play|pause|stop|skip|fast-forward|rewind|volume|mic|music|video|camera/,
	unfold: /file|folder|clipboard|notebook|book|bookmark/,
	toggle: /check|circle-x|^x|plus|minus|menu|maximize|minimize|expand|shrink|settings|sliders|download|upload|share|power|save|filter/,
	pulse: /alert|info|help|bell|loader|hourglass|timer|signal|wifi|bluetooth|activity|zap/,
	ambient: /sun|moon|cloud|wind|tornado|rainbow|umbrella|thermometer|snowflake|droplet|sunrise|sunset|star|sparkle/,
	'bounce-in': /home|building|warehouse|factory|key|lock|unlock|trash|archive|package|gift|shopping|coffee|car|bus|train|plane|ship|bike|rocket|lightbulb|lamp|printer|phone|laptop|monitor|tv|clock|calendar/,
	draw: /pencil|pen|eraser|highlighter|type|bold|italic|underline|align|list|copy|scissors|crop|palette|paint|ruler|compass/,
	wave: /user|users|hand|thumb|smile|frown|meh|laugh|angry|heart|eye|brain|skull|bone|fingerprint/,
	locate: /map|pin|navigation|locate|globe|earth|flag|milestone|signpost|route/,
	'chart-rise': /chart|trending|database|server|hard-drive|table|kanban|gantt|calculator|percent|hash|binary|braces/,
	shield: /shield|scan|qr-code|key-round|key-square|lock-keyhole|unlock-keyhole/,
	'type-in': /code|terminal|bug|git-|blocks|box|boxes|component|puzzle|wrench|hammer|screwdriver|cpu|chip|circuit|memory/,
};

function animationFamily( name ) {
	for ( const [ family, pattern ] of Object.entries( families ) ) {
		if ( pattern.test( name ) ) return family;
	}
	return 'toggle';
}

function nodeRole( node, index, total ) {
	const [ tag, attrs ] = node;
	const radius = Number( attrs?.r ?? 0 );
	const width = Number( attrs?.width ?? 0 );
	const height = Number( attrs?.height ?? 0 );
	if ( tag === 'circle' && radius <= 1.5 ) return 'dot';
	if ( tag === 'circle' && radius >= 4 ) return 'container';
	if ( tag === 'rect' && width >= 10 && height >= 10 ) return 'container';
	if ( tag === 'line' ) return 'detail';
	if ( index === 0 && total > 1 ) return 'container';
	if ( index === total - 1 && total > 2 ) return 'detail';
	return 'body';
}

function nodeAnimation( name, node, index, total ) {
	const family = animationFamily( name );
	const [ tag ] = node;
	const role = nodeRole( node, index, total );
	const single = total === 1;
	let anim = 'scale-pop';
	const custom = {};

	if ( name.includes( 'heart' ) ) anim = 'heart-beat';
	else if ( name.includes( 'bell' ) ) anim = 'bell-ring';
	else if ( name.includes( 'loader' ) || name.includes( 'refresh' ) || name.includes( 'rotate' ) ) anim = 'spin';
	else if ( name.includes( 'settings' ) || name.includes( 'cog' ) ) { anim = 'gear'; custom.rotation = 90; }
	else if ( name.includes( 'mail' ) && index === 0 && ! single ) anim = 'mail-flap';
	else if ( name.includes( 'mail' ) && index > 0 ) anim = 'fill';
	else if ( family === 'directional' ) {
		anim = 'nudge';
		custom.tx = name.includes( 'left' ) ? -2 : name.includes( 'right' ) ? 2 : 0;
		custom.ty = name.includes( 'up' ) ? -2 : name.includes( 'down' ) ? 2 : 0;
	} else if ( family === 'draw' ) anim = single ? 'draw' : ( index === 0 ? 'draw' : 'fade' );
	else if ( family === 'wave' ) anim = single ? 'wave' : ( tag === 'circle' ? 'fill' : 'fade' );
	else if ( family === 'locate' ) anim = name.includes( 'pin' ) ? ( index === 0 ? 'fill' : 'dot-appear' ) : 'locate';
	else if ( family === 'chart-rise' ) anim = tag === 'rect' || tag === 'line' ? 'bar' : ( role === 'container' ? 'fill' : 'fade' );
	else if ( family === 'shield' ) anim = single ? 'shield' : ( index === 0 ? 'fill' : 'fade' );
	else if ( family === 'pulse' ) anim = name.includes( 'alert' ) && role === 'container' ? 'fill' : ( single ? 'pulse-element' : 'fade' );
	else if ( family === 'ambient' ) anim = name.includes( 'sun' ) || name.includes( 'moon' ) ? 'gear' : ( single ? 'ambient' : ( index === 0 ? 'fill' : 'fade' ) );
	else if ( family === 'bounce-in' ) anim = name.includes( 'rocket' ) ? 'rocket-lift' : ( single ? 'shake' : ( index === 0 ? 'fill' : 'fade' ) );
	else if ( family === 'pop-envelope' ) anim = single ? 'scale-pop' : ( index === 0 ? 'mail-flap' : 'fill' );
	else if ( family === 'unfold' ) anim = single ? 'fade' : ( index === 0 ? 'fill' : 'fade' );

	if ( anim === 'draw' || anim === 'draw-line' ) custom.dashLen = 50;
	const colorGroup = index === 0 ? 'al-primary' : 'al-secondary';
	const styles = {};
	if ( custom.rotation !== undefined ) styles['--al-rotation'] = `${ custom.rotation }deg`;
	if ( custom.tx !== undefined ) styles['--al-tx'] = `${ custom.tx }px`;
	if ( custom.ty !== undefined ) styles['--al-ty'] = `${ custom.ty }px`;
	if ( custom.scaleX !== undefined ) styles['--al-scale-x'] = custom.scaleX;
	if ( custom.dashLen !== undefined ) styles['--al-dash-len'] = custom.dashLen;
	return { classes: [ colorGroup, `al-anim-${ anim }`, `al-delay-${ Math.min( index, 7 ) }` ], styles };
}

const output = Object.entries( iconNodes ).map( ( [ name, nodes ] ) => ( {
	name,
	tags: tags[ name ] ?? [],
	nodes,
	animation: {
		type: animationFamily( name ),
		nodes: nodes.map( ( node, index ) => nodeAnimation( name, node, index, nodes.length ) ),
	},
} ) );

const dest = path.join( __dirname, '../assets/data/lucide-icons.json' );
fs.mkdirSync( path.dirname( dest ), { recursive: true } );
fs.writeFileSync( dest, JSON.stringify( output ) );
console.log( `Built ${ output.length } icons → ${ dest }` );
