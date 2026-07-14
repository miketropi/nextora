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
	};

	if (attrs.backgroundColor) vars['--nextora-testimonial-bg'] = resolveColorValue(attrs.backgroundColor);
	if (attrs.topIconColor) vars['--nextora-testimonial-icon-color'] = resolveColorValue(attrs.topIconColor);
	if (attrs.paginationColor) vars['--nextora-testimonial-dot-color'] = resolveColorValue(attrs.paginationColor);
	if (attrs.paginationActiveColor) {
		vars['--nextora-testimonial-dot-active'] = resolveColorValue(attrs.paginationActiveColor);
	}
	if (attrs.arrowColor) vars['--nextora-testimonial-arrow-color'] = resolveColorValue(attrs.arrowColor);
	if (attrs.arrowBorderColor) vars['--nextora-testimonial-arrow-border'] = resolveColorValue(attrs.arrowBorderColor);
	if (attrs.quoteColor) vars['--nextora-testimonial-quote-color'] = resolveColorValue(attrs.quoteColor);
	if (attrs.labelColor) vars['--nextora-testimonial-label-color'] = resolveColorValue(attrs.labelColor);
	if (attrs.authorColor) vars['--nextora-testimonial-author-color'] = resolveColorValue(attrs.authorColor);
	if (attrs.authorNameColor) vars['--nextora-testimonial-author-name-color'] = resolveColorValue(attrs.authorNameColor);
	if (attrs.trustColor) vars['--nextora-testimonial-trust-color'] = resolveColorValue(attrs.trustColor);
	if (attrs.starColor) vars['--nextora-testimonial-star-color'] = resolveColorValue(attrs.starColor);
	if (attrs.trustAvatarBorderColor) {
		vars['--nextora-testimonial-avatar-border-color'] = resolveColorValue(attrs.trustAvatarBorderColor);
	}

	return vars;
}
