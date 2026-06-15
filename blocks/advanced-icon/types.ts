export type IconSource = 'theme' | 'upload';

export type IconAlign = 'left' | 'center' | 'right';

export type IconStyle = 'default' | 'stacked' | 'framed';

export type LucideIconNode = [
	string,
	Record< string, string | number >,
	...LucideIconNode[],
];

export interface LucideIconEntry {
	name: string;
	tags: string[];
	nodes: LucideIconNode[];
}

export type IconLinkTarget = '_self' | '_blank';

export interface IconAttributes extends Record< string, unknown > {
	iconSource: IconSource;
	iconName: string;
	uploadedIconUrl: string;
	uploadedIconId: number;
	iconSize: number;
	iconColor: string;
	strokeWidth: number;
	iconAlign: IconAlign;
	iconStyle: IconStyle;
	borderRadius: number;
	backgroundColor: string;
	borderColor: string;
	linkUrl: string;
	linkTarget: IconLinkTarget;
	ariaLabel: string;
	cssClass: string;
	enableScrollAnimation: boolean;
	textColor?: string;
}

declare global {
	interface Window {
		nextoraIconBlock?: {
			iconsUrl: string;
		};
	}
}
