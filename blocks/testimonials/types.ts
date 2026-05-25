export type TestimonialsEffect = 'fade' | 'slide';

export type TestimonialsImagePosition = 'left' | 'right';

export interface TestimonialItem {
	id: string;
	quoteText: string;
	authorName: string;
	authorAge: string;
	authorLocation: string;
	portraitId: number;
	portraitAlt: string;
}

export interface TestimonialsAttributes {
	testimonials: TestimonialItem[];
	headingText: string;
	headingLevel: number;
	headingFontSize: string;
	quoteFontSize: string;
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
