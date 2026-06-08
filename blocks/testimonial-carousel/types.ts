export type TestimonialIconType = 'sparkle' | 'quote' | 'star' | 'heart' | 'custom-svg';

export type TestimonialEffect = 'fade' | 'slide';

export type TestimonialArrowPosition = 'below-dots' | 'sides';

export type TestimonialTrustPosition = 'below-quote' | 'above-dots' | 'bottom';

export type TestimonialAvatarFallback = 'initials' | 'icon' | 'none';

export interface TrustAvatar {
	id: number;
	url: string;
	alt: string;
}

export interface TestimonialItem {
	id: string;
	quoteText: string;
	authorName: string;
	authorRole: string;
	authorPhotoId: number;
	authorPhotoUrl: string;
	authorPhotoAlt: string;
	showAuthorPhoto: boolean;
	rating: number;
	quoteColor: string;
	authorColor: string;
}

export interface TestimonialCarouselAttributes {
	testimonials: TestimonialItem[];
	showTopIcon: boolean;
	topIconType: TestimonialIconType;
	customIconSvg: string;
	topIconSize: number;
	topIconColor: string;
	showTopLabel: boolean;
	topLabelText: string;
	effect: TestimonialEffect;
	speed: number;
	autoplay: boolean;
	autoplayDelay: number;
	pauseOnHover: boolean;
	loop: boolean;
	showPagination: boolean;
	showArrows: boolean;
	arrowPosition: TestimonialArrowPosition;
	showTrustIndicator: boolean;
	trustText: string;
	trustAvatars: TrustAvatar[];
	trustAvatarSize: number;
	trustAvatarOverlap: number;
	trustAvatarBorderWidth: number;
	trustAvatarBorderColor: string;
	trustAvatarFallback: TestimonialAvatarFallback;
	trustPosition: TestimonialTrustPosition;
	backgroundColor: string;
	contentMaxWidth: string;
	paddingTop: number;
	paddingBottom: number;
	paginationColor: string;
	paginationActiveColor: string;
	arrowColor: string;
	arrowBorderColor: string;
	quoteColor: string;
	labelColor: string;
	authorColor: string;
	authorNameColor: string;
	trustColor: string;
	starColor: string;
	enableScrollAnimation: boolean;
}

/** Media library types for avatars and author photos. */
export const TESTIMONIAL_CAROUSEL_MEDIA_TYPES = [
	'image',
	'image/jpeg',
	'image/png',
	'image/gif',
	'image/webp',
	'image/avif',
	'image/svg+xml',
] as const;
