import { createElement } from '@wordpress/element';
import type { ReactNode } from 'react';
import type { LucideIconNode } from './types';

function buildNode( node: LucideIconNode, index: number ): ReactNode {
	const [ tag, attrs, ...rest ] = node;
	const children = rest.length > 0 && Array.isArray( rest[ 0 ] )
		? ( rest[ 0 ] as LucideIconNode[] )
		: [];

	return createElement(
		tag,
		{ ...attrs, key: `${ tag }-${ index }` },
		...children.map( ( child, childIndex ) => buildNode( child, childIndex ) ),
	);
}

interface LucideSvgPreviewProps {
	nodes: LucideIconNode[];
	size?: number;
	color?: string;
	strokeWidth?: number;
	className?: string;
}

export function LucideSvgPreview( {
	nodes,
	size = 24,
	color = 'currentColor',
	strokeWidth = 2,
	className,
}: LucideSvgPreviewProps ) {
	return createElement(
		'svg',
		{
			xmlns: 'http://www.w3.org/2000/svg',
			width: size,
			height: size,
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: color,
			strokeWidth,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
			className,
			'aria-hidden': true,
			focusable: false,
		},
		...nodes.map( ( node, index ) => buildNode( node, index ) ),
	);
}
