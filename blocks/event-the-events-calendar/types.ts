export interface EventTecAttributes {
	template: string;
	template3Alternating: boolean;
	postsPerPage: number;
	category: string;
	timeframe: string;
	orderBy: string;
	order: string;
	excludeIds: string;
	showRegisterButton: boolean;
	registerButtonText: string;
	cardBackgroundColor: string;
	cardBorderColor: string;
	dateBackgroundColor: string;
	dateDayColor: string;
	dateAccentColor: string;
	titleColor: string;
	titleFontSize?: string;
	descriptionFontSize?: string;
	metaColor: string;
	metaIconColor: string;
	registerBackgroundColor: string;
	registerTextColor: string;
	registerBorderColor: string;
	registerHoverTextColor: string;
	registerHoverBackgroundColor: string;
	registerHoverBorderColor: string;
	paginationColor: string;
	paginationActiveColor: string;
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
	edgeFadeColor?: string;
}

export type EventTecColorAttribute = keyof Pick<
	EventTecAttributes,
	| 'cardBackgroundColor'
	| 'cardBorderColor'
	| 'dateBackgroundColor'
	| 'dateDayColor'
	| 'dateAccentColor'
	| 'titleColor'
	| 'metaColor'
	| 'metaIconColor'
	| 'registerBackgroundColor'
	| 'registerTextColor'
	| 'registerBorderColor'
	| 'registerHoverTextColor'
	| 'registerHoverBackgroundColor'
	| 'registerHoverBorderColor'
	| 'paginationColor'
	| 'paginationActiveColor'
	| 'edgeFadeColor'
>;
