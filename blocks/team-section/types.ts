export type TeamHeaderLayout = 'split' | 'stacked' | 'left-aligned';

export type TeamButtonStyle = 'outline' | 'solid' | 'link';

export type TeamPaginationType = 'bullets' | 'fraction' | 'progressbar';

export type TeamSocialPlatform =
	| 'linkedin'
	| 'twitter'
	| 'github'
	| 'website'
	| 'email'
	| 'instagram'
	| 'facebook';

export interface TeamSocialLink {
	platform: TeamSocialPlatform | string;
	url: string;
}

export interface TeamMember {
	id: string;
	photoId: number;
	photoAlt: string;
	name: string;
	role: string;
	tags: string[];
	bio: string;
	bioLineClamp: number;
	showSocialLinks: boolean;
	socialLinks: TeamSocialLink[];
	cardBorderRadius: number;
}

export interface TeamSectionAttributes {
	members: TeamMember[];
	eyebrowText: string;
	headingText: string;
	headingLevel: number;
	descriptionText: string;
	headerLayout: TeamHeaderLayout;
	contentMaxWidth: string;
	showButton: boolean;
	buttonText: string;
	buttonUrl: string;
	buttonTarget: boolean;
	buttonStyle: TeamButtonStyle;
	buttonBorderColor: string;
	buttonTextColor: string;
	buttonBorderRadius: number;
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
	paginationType: TeamPaginationType;
	showArrows: boolean;
	freeMode: boolean;
	grabCursor: boolean;
	backgroundColor: string;
	headingColor: string;
	descriptionColor: string;
	eyebrowColor: string;
	paginationColor: string;
	paginationActiveColor: string;
	cardBackgroundColor: string;
	tagBackgroundColor: string;
	tagTextColor: string;
	cardBorderRadius: number;
	enableScrollAnimation: boolean;
}

/** Media library types for member photos. */
export const TEAM_SECTION_MEDIA_TYPES = [
	'image',
	'image/jpeg',
	'image/png',
	'image/gif',
	'image/webp',
	'image/avif',
	'image/svg+xml',
] as const;
