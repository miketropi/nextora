export type BoxImageLayoutMode = 'slider' | 'grid';
export type BoxImageFit = 'cover' | 'contain' | 'fill' | 'none';
export type BoxImageTemplate = 'default' | 'programs';

export interface BoxImageItem {
	id: string;
	title: string;
	description: string;
	showLink: boolean;
	linkLabel: string;
	linkUrl: string;
	linkTarget: '_self' | '_blank';
	imageId: number;
	imageUrl: string;
	backgroundColor: string;
	titleColor: string;
	descriptionColor: string;
	linkColor: string;
	badge: string;
}

export interface BoxImageAttributes {
	items: BoxImageItem[];
	contentMaxWidth: string;
	layoutMode: BoxImageLayoutMode;
	template: BoxImageTemplate;
	gridColumns: number;
	gridMinWidth: number;
	imageAspectRatio: string;
	imageFit: BoxImageFit;
	cardMinHeight: number;
	cardBorderWidth: number;
	cardBorderRadius: number;
	slidesPerView: number;
	slidesPerViewTablet: number;
	slidesPerViewMobile: number;
	spaceBetween: number;
	speed: number;
	loop: boolean;
	autoplay: boolean;
	autoplayDelay: number;
	pauseOnHover: boolean;
	showPagination: boolean;
	showArrows: boolean;
	grabCursor: boolean;
	freeMode: boolean;
	cardBorderColor: string;
	cardBackgroundColor: string;
	cardHoverBackgroundColor: string;
	cardTitleColor: string;
	cardDescriptionColor: string;
	descriptionHoverColor: string;
	linkColor: string;
	linkHoverColor: string;
	paginationColor: string;
	paginationActiveColor: string;
	arrowColor: string;
	enableScrollAnimation: boolean;
}
