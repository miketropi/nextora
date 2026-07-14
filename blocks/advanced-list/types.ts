export interface AdvancedListItem {
	id: string;
	text: string;
	iconName: string;
}

export interface AdvancedListAttributes extends Record<string, unknown> {
	items: AdvancedListItem[];
	iconSource: string;
	iconSize: number;
	iconCircleSize: number;
	iconStyle: string;
	strokeWidth: number;
	borderRadius: number;
	iconColor: string;
	iconBackgroundColor: string;
	iconBorderColor: string;
	iconTextGap: number;
	itemGap: number;
	enableScrollAnimation: boolean;
}
