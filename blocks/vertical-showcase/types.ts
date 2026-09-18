export interface VerticalShowcaseItem {
	id: string;
	title: string;
	description: string;
	imageId: number;
	imageUrl: string;
	imageAlt: string;
	showViewMore: boolean;
	link: string;
	viewMoreText: string;
}

export interface VerticalShowcaseAttributes extends Record<string, unknown> {
	items: VerticalShowcaseItem[];
	autoplay: boolean;
	autoplayDuration: number;
	titleSize: string;
	descriptionSize: string;
	showViewMore: boolean;
	showArrows: boolean;
	titleColor: string;
	inactiveTitleColor: string;
	descriptionColor: string;
	numberColor: string;
	activeIndicatorColor: string;
	buttonColor: string;
	enableScrollAnimation: boolean;
}
