export type IconSource = 'theme' | 'upload';

export type ButtonStyle = 'fill' | 'outline';

export type IconPosition = 'left' | 'right' | 'only';

export type IconStyle = 'default' | 'stacked' | 'framed';

export type LinkTarget = '_self' | '_blank';

export type LinkType = 'url' | 'modal' | 'click-event';

export type HoverEffect = 'opacity' | 'none' | 'color-swap' | 'lift';

export const MODAL_WIDTH_MIN = 320;
export const MODAL_WIDTH_MAX = 1200;
export const MODAL_WIDTH_DEFAULT = 896;

export interface AdvancedButtonButtonAttributes extends Record< string, unknown > {
	text: string;
	url: string;
	linkTarget: LinkTarget;
	rel: string;
	linkType: LinkType;
	modalId: string;
	modalTitle: string;
	modalWidth: number;
	clickEventId: string;
	clickEventScript: string;
	buttonStyle: ButtonStyle;
	borderRadius: number;
	iconPosition: IconPosition;
	iconSource: IconSource;
	iconName: string;
	uploadedIconUrl: string;
	uploadedIconId: number;
	iconSize: number;
	iconColor: string;
	strokeWidth: number;
	iconStyle: IconStyle;
	iconBorderRadius: number;
	iconBackgroundColor: string;
	buttonBackgroundColor: string;
	buttonTextColor: string;
	buttonBorderColor: string;
	/** @deprecated Legacy alias — migrated to buttonBackgroundColor. */
	backgroundColor?: string;
	/** @deprecated Legacy alias — migrated to buttonTextColor. */
	textColor?: string;
	/** @deprecated Legacy alias — migrated to buttonBorderColor. */
	borderColor?: string;
	hoverEffect: HoverEffect;
	hoverBackgroundColor: string;
	hoverTextColor: string;
	hoverBorderColor: string;
	hoverIconColor: string;
	ariaLabel: string;
	showIcon: boolean;
}

declare global {
	interface Window {
		nextoraIconBlock?: {
			iconsUrl: string;
			paletteEntries?: Array<{
				slug: string;
				color: string;
				name?: string;
			}>;
		};
	}
}

export const HOVER_EFFECTS_WITH_COLORS: HoverEffect[] = [ 'color-swap' ];
