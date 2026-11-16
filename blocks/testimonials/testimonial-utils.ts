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
	return `/ ${parts.join(', ')}`;
}

export function resolveColor(raw: string | undefined): string {
	if (!raw) {
		return '';
	}
	const value = raw.trim();
	if (!value) {
		return '';
	}
	if (value.startsWith('#') || value.startsWith('rgb') || value.startsWith('hsl') || value.startsWith('var(')) {
		return value;
	}
	if (/^[a-z0-9-]+$/i.test(value)) {
		return `var(--wp--preset--color--${value.toLowerCase()})`;
	}
	return value;
}

export function buildSectionStyleVars(attrs: Partial<TestimonialsAttributes>): Record<string, string> {
	const ratio = Math.max(40, Math.min(60, attrs.imageColumnRatio ?? 50));
	const vars: Record<string, string> = {
		'--nextora-testimonials-image-ratio': `${ratio}%`,
	};
	if (attrs.contentBackgroundColor) {
		vars['--nextora-testimonials-content-bg'] = resolveColor(attrs.contentBackgroundColor);
	}
	if (attrs.headingColor) {
		vars['--nextora-testimonials-heading-color'] = resolveColor(attrs.headingColor);
	}
	if (attrs.quoteColor) {
		vars['--nextora-testimonials-quote-color'] = resolveColor(attrs.quoteColor);
	}
	if (attrs.authorNameColor) {
		vars['--nextora-testimonials-author-name-color'] = resolveColor(attrs.authorNameColor);
	}
	if (attrs.authorMetaColor) {
		vars['--nextora-testimonials-author-meta-color'] = resolveColor(attrs.authorMetaColor);
	}
	if (attrs.paginationColor) {
		vars['--nextora-testimonials-dot-color'] = resolveColor(attrs.paginationColor);
	}
	if (attrs.paginationActiveColor) {
		vars['--nextora-testimonials-dot-active'] = resolveColor(attrs.paginationActiveColor);
	}
	const imageRadius = resolveBorderRadius(attrs.imageBorderRadius);
	if (imageRadius !== '') {
		vars['--nextora-testimonials-image-radius'] = imageRadius;
	}

	return vars;
}

export function sanitizeCssLength(value: string | undefined): string {
	if (!value) {
		return '';
	}
	const trimmed = value.trim();
	if (trimmed === '') {
		return '';
	}
	if (trimmed === '0' || trimmed === '0px') {
		return '0';
	}
	const presetMatch = trimmed.match(/^var:preset\|spacing\|([a-z0-9_-]+)$/i);
	if (presetMatch) {
		return `var(--wp--preset--spacing--${presetMatch[1].toLowerCase()})`;
	}
	if (/^var\(\s*--[a-z0-9_-]+\s*\)$/i.test(trimmed)) {
		return trimmed;
	}
	const unitMatch = trimmed.match(/^(\d+\.?\d*)(px|rem|em|%|vw|vh)$/i);
	if (unitMatch) {
		return `${unitMatch[1]}${unitMatch[2].toLowerCase()}`;
	}
	if (/^\d+(\.\d+)?$/.test(trimmed)) {
		return `${trimmed}px`;
	}
	return '';
}

export function resolveBorderRadius(raw: unknown): string {
	if (!raw) {
		return '';
	}
	if (typeof raw === 'string') {
		return sanitizeCssLength(raw);
	}
	if (typeof raw === 'object' && raw !== null) {
		const obj = raw as Record<string, unknown>;
		const tl = sanitizeCssLength(typeof obj.topLeft === 'string' ? obj.topLeft : undefined);
		const tr = sanitizeCssLength(typeof obj.topRight === 'string' ? obj.topRight : undefined);
		const br = sanitizeCssLength(typeof obj.bottomRight === 'string' ? obj.bottomRight : undefined);
		const bl = sanitizeCssLength(typeof obj.bottomLeft === 'string' ? obj.bottomLeft : undefined);

		if (!tl && !tr && !br && !bl) {
			return '';
		}

		if (tl === tr && tr === br && br === bl) {
			return tl || '';
		}

		const tlVal = tl || '0';
		const trVal = tr || '0';
		const brVal = br || '0';
		const blVal = bl || '0';

		return `${tlVal} ${trVal} ${brVal} ${blVal}`;
	}
	return '';
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
