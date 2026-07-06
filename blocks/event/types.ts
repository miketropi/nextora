export interface EventItem {
	id: string;
	day: string;
	month: string;
	title: string;
	location: string;
	time: string;
	price: string;
	imageId: number;
	imageUrl: string;
	imageAlt: string;
	linkUrl: string;
	linkTarget: string;
	registerLabel: string;
}

export interface EventAttributes {
	template: string;
	events: EventItem[];
	showRegisterButton: boolean;
	registerButtonText: string;
	cardBackgroundColor: string;
	cardBorderColor: string;
	dateBackgroundColor: string;
	dateDayColor: string;
	dateAccentColor: string;
	titleColor: string;
	metaColor: string;
	metaIconColor: string;
	registerTextColor: string;
	registerBorderColor: string;
	registerHoverTextColor: string;
	registerHoverBackgroundColor: string;
	enableScrollAnimation: boolean;
	autoplay: boolean;
	autoplayDelay: number;
	loop: boolean;
	speed: number;
	showArrows: boolean;
	showPagination: boolean;
	slidesPerView: number;
	spaceBetween: number;
	tabletSlides: number;
	mobileSlides: number;
}

export type EventColorAttribute = keyof Pick<
	EventAttributes,
	| 'cardBackgroundColor'
	| 'cardBorderColor'
	| 'dateBackgroundColor'
	| 'dateDayColor'
	| 'dateAccentColor'
	| 'titleColor'
	| 'metaColor'
	| 'metaIconColor'
	| 'registerTextColor'
	| 'registerBorderColor'
	| 'registerHoverTextColor'
	| 'registerHoverBackgroundColor'
>;
