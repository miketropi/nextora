import type { TestimonialItem, TrustAvatar } from './types';

function resolveColorValue(raw: string): string {
	const trimmed = raw.trim();
	if (trimmed === '') {
		return '';
	}
	if (/^#[0-9a-fA-F]{3,8}$/.test(trimmed)) {
		return trimmed;
	}
	if (/^[a-z0-9-]+$/.test(trimmed)) {
		return `var(--wp--preset--color--${trimmed})`;
	}
	return '';
}

function resolveFontSizeValue(raw: string): string | undefined {
	const value = raw.trim();
	if (!value) {
		return undefined;
	}
	if (/^clamp\(.+\)$/i.test(value) || /^[\d.]+(?:rem|px|em|vw|vh|%)$/i.test(value)) {
		return value;
	}
	if (/^[\d.]+$/.test(value)) {
		return `${value}px`;
	}
	if (/^[a-z][a-z0-9-]*$/.test(value)) {
		return `var(--wp--preset--font-size--${value})`;
	}
	return value;
}

export function createTestimonialId(): string {
	if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
		return crypto.randomUUID();
	}
	return `testimonial-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function normalizeTestimonials(items: TestimonialItem[] | undefined): TestimonialItem[] {
	if (!Array.isArray(items) || items.length === 0) {
		return [];
	}

	return items.map((raw, index) => ({
		id: typeof raw?.id === 'string' && raw.id !== '' ? raw.id : String(index + 1),
		quoteText: typeof raw?.quoteText === 'string' ? raw.quoteText : '',
		authorName: typeof raw?.authorName === 'string' ? raw.authorName : '',
		authorRole: typeof raw?.authorRole === 'string' ? raw.authorRole : '',
		authorPhotoId: typeof raw?.authorPhotoId === 'number' ? raw.authorPhotoId : 0,
		authorPhotoUrl: typeof raw?.authorPhotoUrl === 'string' ? raw.authorPhotoUrl : '',
		authorPhotoAlt: typeof raw?.authorPhotoAlt === 'string' ? raw.authorPhotoAlt : '',
		showAuthorPhoto: Boolean(raw?.showAuthorPhoto),
		rating:
			typeof raw?.rating === 'number' ? Math.max(0, Math.min(5, Math.round(raw.rating))) : 0,
		quoteColor: typeof raw?.quoteColor === 'string' ? raw.quoteColor : '',
		authorColor: typeof raw?.authorColor === 'string' ? raw.authorColor : '',
	}));
}

export function resolveAuthorPhotoUrl(
	item: Pick<TestimonialItem, 'authorPhotoId' | 'authorPhotoUrl'>,
	mediaUrlById: Map<number, string>,
): string | undefined {
	if (item.authorPhotoId > 0) {
		return mediaUrlById.get(item.authorPhotoId);
	}
	const url = item.authorPhotoUrl.trim();
	return url !== '' ? url : undefined;
}

export function normalizeTrustAvatars(avatars: TrustAvatar[] | undefined): TrustAvatar[] {
	if (!Array.isArray(avatars)) {
		return [];
	}

	return avatars
		.filter((a) => a && typeof a === 'object')
		.map((a, index) => ({
			id: typeof a.id === 'number' ? a.id : 0,
			url: typeof a.url === 'string' ? a.url : '',
			alt: typeof a.alt === 'string' ? a.alt : `Avatar ${index + 1}`,
		}));
}

export function resolveTrustAvatarUrl(
	avatar: TrustAvatar,
	mediaUrlById: Map<number, string>,
): string | undefined {
	if (avatar.id > 0) {
		return mediaUrlById.get(avatar.id);
	}
	const url = avatar.url.trim();
	return url !== '' ? url : undefined;
}

export function buildSectionStyleVars(attrs: {
	backgroundColor?: string;
	contentMaxWidth?: string;
	topIconSize?: number;
	topIconColor?: string;
	paginationColor?: string;
	paginationActiveColor?: string;
	arrowColor?: string;
	arrowBorderColor?: string;
	quoteColor?: string;
	quoteFontFamily?: string;
	quoteFontSize?: string;
	labelColor?: string;
	authorColor?: string;
	authorNameColor?: string;
	trustColor?: string;
	starColor?: string;
	trustAvatarSize?: number;
	trustAvatarOverlap?: number;
	trustAvatarBorderWidth?: number;
	trustAvatarBorderColor?: string;
	cardGap?: number;
}): Record<string, string> {
	const vars: Record<string, string> = {
		'--nextora-testimonial-max-width': attrs.contentMaxWidth || '680px',
		'--nextora-testimonial-icon-size': `${attrs.topIconSize ?? 20}px`,
		'--nextora-testimonial-avatar-size': `${attrs.trustAvatarSize ?? 36}px`,
		'--nextora-testimonial-avatar-overlap': `${attrs.trustAvatarOverlap ?? 10}px`,
		'--nextora-testimonial-avatar-border': `${attrs.trustAvatarBorderWidth ?? 2.5}px`,
		'--nextora-testimonial-card-gap': `${attrs.cardGap ?? 22}px`,
		'--nextora-testimonial-quote-color': attrs.quoteColor
			? resolveColorValue(attrs.quoteColor)
			: 'var(--wp--preset--color--contrast, #0a0a0a)',
		'--nextora-testimonial-author-name-color': attrs.authorNameColor
			? resolveColorValue(attrs.authorNameColor)
			: 'var(--wp--preset--color--contrast, #0a0a0a)',
		'--nextora-testimonial-author-color': attrs.authorColor
			? resolveColorValue(attrs.authorColor)
			: 'var(--wp--preset--color--paragraph, #525252)',
		'--nextora-testimonial-trust-color': attrs.trustColor
			? resolveColorValue(attrs.trustColor)
			: 'var(--wp--preset--color--paragraph, #525252)',
	};

	if (attrs.backgroundColor) vars['--nextora-testimonial-bg'] = resolveColorValue(attrs.backgroundColor);
	if (attrs.topIconColor) vars['--nextora-testimonial-icon-color'] = resolveColorValue(attrs.topIconColor);
	if (attrs.paginationColor) vars['--nextora-testimonial-dot-color'] = resolveColorValue(attrs.paginationColor);
	if (attrs.paginationActiveColor) {
		vars['--nextora-testimonial-dot-active'] = resolveColorValue(attrs.paginationActiveColor);
	}
	if (attrs.arrowColor) vars['--nextora-testimonial-arrow-color'] = resolveColorValue(attrs.arrowColor);
	if (attrs.arrowBorderColor) vars['--nextora-testimonial-arrow-border'] = resolveColorValue(attrs.arrowBorderColor);
	if (attrs.quoteFontFamily && attrs.quoteFontFamily.trim() !== '') {
		const ff = attrs.quoteFontFamily.trim();
		vars['--nextora-testimonial-quote-font-family'] = /^[a-z0-9-]+$/.test(ff)
			? `var(--wp--preset--font-family--${ff})`
			: ff;
	}
	if (attrs.quoteFontSize) {
		const resolvedQuoteSize = resolveFontSizeValue(attrs.quoteFontSize);
		if (resolvedQuoteSize) {
			vars['--nextora-testimonial-quote-size'] = resolvedQuoteSize;
		}
	}
	if (attrs.labelColor) vars['--nextora-testimonial-label-color'] = resolveColorValue(attrs.labelColor);
	if (attrs.starColor) vars['--nextora-testimonial-star-color'] = resolveColorValue(attrs.starColor);
	if (attrs.trustAvatarBorderColor) {
		vars['--nextora-testimonial-avatar-border-color'] = resolveColorValue(attrs.trustAvatarBorderColor);
	}

	return vars;
}
