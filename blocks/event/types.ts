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
