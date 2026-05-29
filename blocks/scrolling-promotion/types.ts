export type ScrollingPromotionItemType = 'text' | 'image' | 'text-image';

export interface ScrollingPromotionItem {
	itemType: ScrollingPromotionItemType;
	text: string;
	imageId: number;
	imageUrl: string;
	imageAlt: string;
}

export interface ScrollingPromotionAttributes {
	items: ScrollingPromotionItem[];
	direction: string;
	speed: number;
	pauseOnHover: boolean;
	separatorType: string;
	customSeparator: string;
	separatorSize: number;
	separatorColor: string;
	fontSize: number;
	fontWeight: string;
	textTransform: string;
	letterSpacing: number;
	textColor: string;
	backgroundColor: string;
	paddingVertical: number;
	itemGap: number;
	imageHeight: number;
	showBorders: boolean;
	borderColor: string;
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
