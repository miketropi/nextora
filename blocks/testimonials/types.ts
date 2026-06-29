export type TestimonialsEffect = 'fade' | 'slide' | 'fadeUp';

export type TestimonialsImagePosition = 'left' | 'right';

export type TestimonialsTemplate = 'default' | 'story';

export interface TestimonialItem {
	id: string;
	quoteText: string;
	authorName: string;
	authorAge: string;
	authorLocation: string;
	portraitId: number;
	portraitUrl: string;
	portraitAlt: string;
}

export interface TestimonialsAttributes {
	testimonials: TestimonialItem[];
	template: TestimonialsTemplate;
	headingText: string;
	headingLevel: number;
	headingFontSize: string;
	quoteFontSize: string;
	quoteFontFamily: string;
	imagePosition: TestimonialsImagePosition;
	imageColumnRatio: number;
	showPagination: boolean;
	showArrows: boolean;
	contentBackgroundColor: string;
	effect: TestimonialsEffect;
	speed: number;
	loop: boolean;
	autoplay: boolean;
	autoplayDelay: number;
	pauseOnHover: boolean;
	headingColor: string;
	quoteColor: string;
	authorNameColor: string;
	authorMetaColor: string;
	paginationColor: string;
	paginationActiveColor: string;
	enableScrollAnimation: boolean;
}

export const TESTIMONIALS_MEDIA_TYPES = [
	'image',
	'image/jpeg',
	'image/png',
	'image/gif',
	'image/webp',
	'image/avif',
] as const;
