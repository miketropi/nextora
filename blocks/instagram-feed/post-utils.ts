import type { InstagramFeedAttributes, InstagramPost } from './types';

export function createPostId(): string {
	if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
		return crypto.randomUUID();
	}
	return `post-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function createDefaultPost(index: number): InstagramPost {
	return {
		id: String(index + 1),
		mediaType: 'image',
		mediaId: 0,
		mediaUrl: '',
		mediaAlt: '',
		posterId: 0,
		posterUrl: '',
		videoUrl: '',
		caption: '',
		permalink: 'https://instagram.com/',
	};
}

export function normalizePosts(posts: InstagramPost[] | undefined): InstagramPost[] {
	if (!Array.isArray(posts) || posts.length === 0) {
		return [1, 2, 3, 4, 5].map((n) => ({
			...createDefaultPost(n - 1),
			id: String(n),
			caption: '',
		}));
	}

	return posts.map((raw, index) => {
		const mediaType = raw?.mediaType === 'video' ? 'video' : 'image';

		return {
			id: typeof raw?.id === 'string' && raw.id !== '' ? raw.id : String(index + 1),
			mediaType,
			mediaId: typeof raw?.mediaId === 'number' ? raw.mediaId : 0,
			mediaUrl: typeof raw?.mediaUrl === 'string' ? raw.mediaUrl : '',
			mediaAlt: typeof raw?.mediaAlt === 'string' ? raw.mediaAlt : '',
			posterId: typeof raw?.posterId === 'number' ? raw.posterId : 0,
			posterUrl: typeof raw?.posterUrl === 'string' ? raw.posterUrl : '',
			videoUrl: typeof raw?.videoUrl === 'string' ? raw.videoUrl : '',
			caption: typeof raw?.caption === 'string' ? raw.caption : '',
			permalink: typeof raw?.permalink === 'string' ? raw.permalink : '',
		};
	});
}

declare global {
	interface Window {
		nextoraInstagramFeed?: {
			placeholderUrl?: string;
		};
	}
}

export function getTilePlaceholderUrl(): string {
	const url =
		typeof window !== 'undefined' ? window.nextoraInstagramFeed?.placeholderUrl : undefined;
	return url && url.trim() !== '' ? url : '';
}

export function resolveTilePreviewUrl(
	post: InstagramPost,
	mediaUrlById: Map<number, string>,
): string {
	const mediaUrl = resolveMediaUrl(post, mediaUrlById);
	if (mediaUrl) {
		return mediaUrl;
	}
	if (post.mediaType === 'video' || isVideoPost(post)) {
		const posterUrl = resolvePosterUrl(post, mediaUrlById);
		if (posterUrl) {
			return posterUrl;
		}
	}
	return getTilePlaceholderUrl();
}

export function resolveMediaUrl(
	post: InstagramPost,
	mediaUrlById: Map<number, string>,
): string | undefined {
	if (post.mediaId > 0) {
		const fromLibrary = mediaUrlById.get(post.mediaId);
		if (fromLibrary) {
			return fromLibrary;
		}
	}

	if (post.mediaType === 'video' || isVideoPost(post)) {
		const videoUrl = post.videoUrl.trim();
		return videoUrl !== '' ? videoUrl : undefined;
	}

	const imageUrl = post.mediaUrl.trim();
	if (imageUrl !== '') {
		return imageUrl;
	}

	const legacyUrl = post.videoUrl.trim();
	return legacyUrl !== '' ? legacyUrl : undefined;
}

export function isVideoPost(post: InstagramPost): boolean {
	if (post.mediaType === 'video') {
		return true;
	}
	const url = post.videoUrl.trim().toLowerCase();
	return /\.(mp4|webm|mov|m4v|ogv)(\?|$)/.test(url);
}

export function resolvePosterUrl(
	post: InstagramPost,
	mediaUrlById: Map<number, string>,
): string | undefined {
	if (post.posterId > 0) {
		return mediaUrlById.get(post.posterId);
	}

	const posterUrl = post.posterUrl.trim();
	if (posterUrl !== '') {
		return posterUrl;
	}

	if (post.mediaType === 'image' && post.mediaId > 0) {
		return mediaUrlById.get(post.mediaId);
	}

	return resolveMediaUrl(post, mediaUrlById);
}

export function buildSectionStyleVars(attrs: Partial<InstagramFeedAttributes>): Record<string, string> {
	const vars: Record<string, string> = {
		'--nextora-instagram-max-width': attrs.contentMaxWidth || '1200px',
		'--nextora-instagram-tile-radius': `${attrs.tileBorderRadius ?? 8}px`,
		'--nextora-instagram-tile-gap': `${attrs.spaceBetween ?? 16}px`,
		'--nextora-instagram-btn-radius': `${attrs.buttonBorderRadius ?? 50}px`,
	};

	if (attrs.backgroundColor) vars['--nextora-instagram-bg'] = attrs.backgroundColor;
	if (attrs.eyebrowColor) vars['--nextora-instagram-eyebrow-color'] = attrs.eyebrowColor;
	if (attrs.handleColor) vars['--nextora-instagram-handle-color'] = attrs.handleColor;
	if (attrs.buttonTextColor) vars['--nextora-instagram-btn-text'] = attrs.buttonTextColor;
	if (attrs.buttonBorderColor) vars['--nextora-instagram-btn-border'] = attrs.buttonBorderColor;
	if (attrs.tileBackground) vars['--nextora-instagram-tile-bg'] = attrs.tileBackground;
	if (attrs.tileOverlayColor) vars['--nextora-instagram-tile-overlay'] = attrs.tileOverlayColor;
	if (attrs.paginationColor) vars['--nextora-instagram-dot-color'] = attrs.paginationColor;
	if (attrs.paginationActiveColor) vars['--nextora-instagram-dot-active'] = attrs.paginationActiveColor;
	if (attrs.lightboxSidebarBackground) {
		vars['--nextora-instagram-lightbox-sidebar-bg'] = attrs.lightboxSidebarBackground;
	}

	return vars;
}

export function formatHandle(handle: string): string {
	const trimmed = handle.trim();
	if (trimmed === '') {
		return '@yourbrand';
	}
	return trimmed.startsWith('@') ? trimmed : `@${trimmed}`;
}
