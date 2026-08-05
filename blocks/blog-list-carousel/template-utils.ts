import type { BlogListCarouselAttributes } from './types';

export type BlogListCardTemplate = 'default' | 'template-1' | 'template-2' | 'template-4';

export const BLOG_LIST_TEMPLATE_OPTIONS: {
	value: BlogListCardTemplate;
	labelKey: string;
}[] = [
	{ value: 'default', labelKey: 'Default' },
	{ value: 'template-1', labelKey: 'Template 1' },
	{ value: 'template-2', labelKey: 'Template 2' },
	{ value: 'template-4', labelKey: 'Template 4' },
];

export function normalizeCardTemplate(value: string | undefined): BlogListCardTemplate {
	if ( value === 'template-1' || value === 'news-grid' ) {
		return 'template-1';
	}
	if ( value === 'template-2' ) {
		return 'template-2';
	}
	if ( value === 'template-4' ) {
		return 'template-4';
	}
	return 'default';
}

/**
 * Suggested settings when a card template is first selected.
 */
export function getTemplateDefaultAttributes(
	template: BlogListCardTemplate,
): Partial<BlogListCarouselAttributes> {
	if (template === 'template-1') {
		return {
			layoutMode: 'grid',
			gridColumns: 3,
			gridColumnGap: 26,
			gridRowGap: 26,
			spaceBetween: 26,
			slidesPerView: 3,
			slidesPerViewTablet: 2,
			slidesPerViewMobile: 1,
			imageAspectRatio: '16-10',
			imageBorderRadius: 0,
			cardBorderRadius: 20,
			cardPadding: 24,
			showExcerpt: false,
			showReadMore: true,
			readMoreText: 'Read story',
			cardLinkBehavior: 'read-more',
			showPagination: false,
			showArrows: false,
			showDate: true,
			showCategory: true,
			dateFormat: 'M j, Y',
		};
	}

	if (template === 'template-2') {
		return {
			layoutMode: 'grid',
			gridColumns: 1,
			gridColumnGap: 0,
			gridRowGap: 32,
			spaceBetween: 24,
			slidesPerView: 1,
			slidesPerViewTablet: 1,
			slidesPerViewMobile: 1,
			imageAspectRatio: '4-3',
			imageBorderRadius: 10,
			imageWidthPercent: 40,
			cardBorderRadius: 0,
			cardPadding: 0,
			showExcerpt: true,
			showReadMore: true,
			readMoreText: 'Read More',
			cardLinkBehavior: 'title-only',
			titleFontSize: 'md',
			showPagination: false,
			showArrows: false,
			showDate: true,
			showCategory: true,
			dateFormat: 'M j, Y',
		};
	}

	if (template === 'template-4') {
		return {
			layoutMode: 'grid',
			gridColumns: 1,
			gridColumnGap: 24,
			gridRowGap: 24,
			spaceBetween: 24,
			slidesPerView: 1,
			slidesPerViewTablet: 1,
			slidesPerViewMobile: 1,
			imageAspectRatio: '4-3',
			imageBorderRadius: 8,
			cardBorderRadius: 0,
			cardPadding: 0,
			showExcerpt: true,
			showReadMore: false,
			cardLinkBehavior: 'full-card',
			showPagination: false,
			showArrows: false,
			showDate: true,
			showCategory: true,
			showAuthor: false,
			excerptLineClamp: 3,
		};
	}

	return {
		layoutMode: 'carousel',
		gridColumns: 3,
		gridColumnGap: 24,
		gridRowGap: 24,
		spaceBetween: 24,
		slidesPerView: 3,
		showExcerpt: true,
		showReadMore: false,
		cardLinkBehavior: 'full-card',
		showPagination: true,
		showArrows: false,
		imageAspectRatio: '4-3',
		imageBorderRadius: 8,
		cardBorderRadius: 0,
		cardPadding: 0,
	};
}
