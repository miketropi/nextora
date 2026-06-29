import type { TestimonialItem, TestimonialsAttributes } from './types';

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
		authorAge: typeof raw?.authorAge === 'string' ? raw.authorAge : '',
		authorLocation: typeof raw?.authorLocation === 'string' ? raw.authorLocation : '',
		portraitId: typeof raw?.portraitId === 'number' ? raw.portraitId : 0,
		portraitUrl: typeof raw?.portraitUrl === 'string' ? raw.portraitUrl : '',
		portraitAlt: typeof raw?.portraitAlt === 'string' ? raw.portraitAlt : '',
	}));
}

export function resolvePortraitUrl(
	item: TestimonialItem,
	mediaUrlById: Map<number, string>,
): string | undefined {
	if (item.portraitId > 0) {
		return mediaUrlById.get(item.portraitId);
	}
	const url = item.portraitUrl.trim();
	return url !== '' ? url : undefined;
}

export function buildAuthorMeta(age: string, location: string): string {
	const parts: string[] = [];
	if (age.trim() !== '') {
		parts.push(age.trim());
	}
	if (location.trim() !== '') {
		parts.push(location.trim());
	}
	if (parts.length === 0) {
		return '';
	}
	return `/ ${parts.join(' - ')}`;
}

export function buildSectionStyleVars(attrs: Partial<TestimonialsAttributes>): Record<string, string> {
	const ratio = Math.max(40, Math.min(60, attrs.imageColumnRatio ?? 50));
	const vars: Record<string, string> = {
		'--nextora-testimonials-image-ratio': `${ratio}%`,
	};
	if (attrs.contentBackgroundColor) {
		vars['--nextora-testimonials-content-bg'] = attrs.contentBackgroundColor;
	}
	if (attrs.headingColor) {
		vars['--nextora-testimonials-heading-color'] = attrs.headingColor;
	}
	if (attrs.quoteColor) {
		vars['--nextora-testimonials-quote-color'] = attrs.quoteColor;
	}
	if (attrs.authorNameColor) {
		vars['--nextora-testimonials-author-name-color'] = attrs.authorNameColor;
	}
	if (attrs.authorMetaColor) {
		vars['--nextora-testimonials-author-meta-color'] = attrs.authorMetaColor;
	}
	if (attrs.paginationColor) {
		vars['--nextora-testimonials-dot-color'] = attrs.paginationColor;
	}
	if (attrs.paginationActiveColor) {
		vars['--nextora-testimonials-dot-active'] = attrs.paginationActiveColor;
	}

	return vars;
}

export function resolveFontFamily(raw: string): string {
	const value = raw.trim();
	if (!value) {
		return '';
	}
	if (/^[a-z0-9-]+$/.test(value)) {
		return `var(--wp--preset--font-family--${value})`;
	}
	return value;
}
