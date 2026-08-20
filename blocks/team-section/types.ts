export type TeamLayoutMode = 'carousel' | 'grid';

export type TeamCardTemplate = 'default' | 'overlay-social' | 'template-02';

export type TeamPhotoAspectRatio = '3/4' | '4/3' | '1/1' | '16/9';

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
	photoUrl: string;
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
	layoutMode: TeamLayoutMode;
	gridColumns: number;
	gridMinWidth: number;
	gridColumnGap: number;
	gridRowGap: number;
	cardTemplate: TeamCardTemplate;
	photoAspectRatio: TeamPhotoAspectRatio;
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
	sectionBackgroundColor: string;
	paginationColor: string;
	paginationActiveColor: string;
	cardBackgroundColor: string;
	tagBackgroundColor: string;
	tagTextColor: string;
	cardBorderRadius: number;
	nameColor: string;
	roleColor: string;
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
