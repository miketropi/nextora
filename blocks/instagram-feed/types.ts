export type InstagramPaginationType = 'bullets' | 'fraction' | 'progressbar';

export type InstagramMediaType = 'image' | 'video';

export interface InstagramPost {
	id: string;
	mediaType: InstagramMediaType;
	mediaId: number;
	mediaUrl: string;
	mediaAlt: string;
	posterId: number;
	posterUrl: string;
	videoUrl: string;
	caption: string;
	permalink: string;
}

export interface InstagramFeedAttributes {
	posts: InstagramPost[];
	contentMaxWidth: string;
	tileBorderRadius: number;
	tileBackground: string;
	showTileOverlay: boolean;
	tileImageSize: string;
	slidesPerView: number;
	slidesPerViewTablet: number;
	slidesPerViewMobile: number;
	spaceBetween: number;
	speed: number;
	loop: boolean;
	freeMode: boolean;
	grabCursor: boolean;
	autoplay: boolean;
	autoplayDelay: number;
	pauseOnHover: boolean;
	showPagination: boolean;
	paginationType: InstagramPaginationType;
	showArrows: boolean;
	arrowStyle: string;
	enableLightbox: boolean;
	lightboxShowArrows: boolean;
	lightboxShowCaption: boolean;
	lightboxLinkText: string;
	lightboxHandleOverride: string;
	backgroundColor: string;
	tileOverlayColor: string;
	paginationColor: string;
	paginationActiveColor: string;
	lightboxSidebarBackground: string;
	enableScrollAnimation: boolean;
}

export const INSTAGRAM_IMAGE_MEDIA_TYPES = [
	'image',
	'image/jpeg',
	'image/png',
	'image/gif',
	'image/webp',
	'image/avif',
] as const;

export const INSTAGRAM_VIDEO_MEDIA_TYPES = ['video', 'video/mp4', 'video/webm', 'video/quicktime'] as const;

export interface InstagramPostPayload {
	mediaType: InstagramMediaType;
	mediaUrl: string;
	posterUrl: string;
	mediaAlt: string;
	caption: string;
	permalink: string;
}
