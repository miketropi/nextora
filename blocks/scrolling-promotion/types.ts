export interface ScrollingPromotionItem {
	text: string;
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
	showBorders: boolean;
	borderColor: string;
	borderWidth: number;
	ariaLabel: string;
}
