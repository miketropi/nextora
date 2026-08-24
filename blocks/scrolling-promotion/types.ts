export type ScrollingPromotionItemType = 'text' | 'image' | 'text-image' | 'icon-text';

export interface ScrollingPromotionItem {
	itemType: ScrollingPromotionItemType;
	text: string;
	imageId: number;
	imageUrl: string;
	imageAlt: string;
	iconName: string;
	iconSize: number;
}

export interface ScrollingPromotionAttributes {
	items: ScrollingPromotionItem[];
	direction: string;
	speed: number;
	pauseOnHover: boolean;
	separatorType: string;
	customSeparator: string;
	separatorIcon?: string;
	separatorIconSize?: number;
	separatorBadgeSize?: number;
	separatorIconStrokeWidth?: number;
	separatorSize: number;
	separatorColor?: string;
	separatorBgColor?: string;
	separatorBackgroundColor?: string;
	fontSize: string | number;
	customFontSize?: number;
	fontWeight: string;
	textTransform: string;
	letterSpacing: number;
	marqueeTextColor?: string;
	marqueeBackgroundColor?: string;
	marqueeBorderColor?: string;
	textColor?: string;
	backgroundColor?: string;
	borderColor?: string;
	paddingVertical: number;
	itemGap: number;
	imageHeight: number;
	showBorders: boolean;
	borderWidth: number;
	ariaLabel: string;
}

/** Media library types accepted for logo / image items (incl. SVG when uploads are allowed). */
export const SCROLLING_PROMOTION_ITEM_MEDIA_TYPES = [
	'image',
	'image/jpeg',
	'image/png',
	'image/gif',
	'image/webp',
	'image/avif',
	'image/svg+xml',
] as const;
