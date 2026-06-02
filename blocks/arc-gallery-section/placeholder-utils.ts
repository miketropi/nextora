import type { ArcGalleryImage } from './types';

declare global {
	interface Window {
		nextoraArcGallerySection?: {
			photoPlaceholderUrl?: string;
		};
	}
}

export const DEFAULT_PLACEHOLDER_IMAGE_COUNT = 5;

export interface DisplayArcGalleryImage extends ArcGalleryImage {
	isPlaceholder?: boolean;
}

export function normalizeArcGalleryImages(
	images: ArcGalleryImage[] | undefined,
): ArcGalleryImage[] {
	if (!Array.isArray(images)) {
		return [];
	}

	return images.map((raw) => ({
		id: typeof raw?.id === 'number' ? raw.id : 0,
		url: typeof raw?.url === 'string' ? raw.url : '',
		alt: typeof raw?.alt === 'string' ? raw.alt : '',
		isPlaceholder: Boolean(raw?.isPlaceholder),
	}));
}

export function resolveArcGalleryImageSrc(
	img: Pick<ArcGalleryImage, 'id' | 'url'>,
	mediaMap: Record<
		number,
		{
			source_url?: string;
			media_details?: {
				sizes?: {
					large?: { source_url?: string };
					thumbnail?: { source_url?: string };
				};
			};
		}
	>,
	size: 'large' | 'thumbnail' = 'large',
): string {
	if (img.id > 0) {
		const media = mediaMap[img.id];
		if (size === 'thumbnail') {
			return (
				media?.media_details?.sizes?.thumbnail?.source_url ||
				media?.source_url ||
				''
			);
		}
		return (
			media?.media_details?.sizes?.large?.source_url ||
			media?.source_url ||
			''
		);
	}

	const url = img.url.trim();
	return url !== '' ? url : '';
}

export function getArcGalleryPlaceholderUrl(): string {
	const url =
		typeof window !== 'undefined'
			? window.nextoraArcGallerySection?.photoPlaceholderUrl
			: undefined;
	return typeof url === 'string' && url !== '' ? url : '';
}

export function resolveDisplayImages(
	images: ArcGalleryImage[] | undefined,
): DisplayArcGalleryImage[] {
	const normalized = normalizeArcGalleryImages(images);

	if (normalized.length === 0) {
		const placeholderUrl = getArcGalleryPlaceholderUrl();
		if (!placeholderUrl) {
			return [];
		}

		return Array.from({ length: DEFAULT_PLACEHOLDER_IMAGE_COUNT }, (_, index) => ({
			id: -(index + 1),
			url: placeholderUrl,
			alt: '',
			isPlaceholder: true,
		}));
	}

	const placeholderUrl = getArcGalleryPlaceholderUrl();

	return normalized
		.map((img) => {
			if (img.id > 0 || img.url.trim() !== '') {
				return img as DisplayArcGalleryImage;
			}
			if (!placeholderUrl) {
				return null;
			}
			return {
				...img,
				url: placeholderUrl,
				isPlaceholder: true,
			};
		})
		.filter((item): item is DisplayArcGalleryImage => item !== null);
}
