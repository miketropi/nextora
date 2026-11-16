import type { BlogListCarouselAttributes } from './types';

export type BlogListCardTemplate = 'default' | 'template-1' | 'template-2' | 'template-3' | 'template-4' | 'template-5' | 'template-6' | 'template-7';

export const BLOG_LIST_TEMPLATE_OPTIONS: {
	value: BlogListCardTemplate;
	labelKey: string;
}[] = [
	{ value: 'default', labelKey: 'Default' },
	{ value: 'template-1', labelKey: 'Template 1' },
	{ value: 'template-2', labelKey: 'Template 2' },
	{ value: 'template-3', labelKey: 'Template 3' },
	{ value: 'template-4', labelKey: 'Template 4' },
	{ value: 'template-5', labelKey: 'Template 5' },
	{ value: 'template-6', labelKey: 'Template 6' },
	{ value: 'template-7', labelKey: 'Template 7 — News Cards' },
];

export function normalizeCardTemplate(value: string | undefined): BlogListCardTemplate {
	if ( value === 'template-1' || value === 'news-grid' ) {
		return 'template-1';
	}
	if ( value === 'template-2' ) {
		return 'template-2';
	}
	if ( value === 'template-3' ) {
		return 'template-3';
	}
	if ( value === 'template-4' ) {
		return 'template-4';
	}
	if ( value === 'template-5' ) {
		return 'template-5';
	}
	if ( value === 'template-6' ) {
		return 'template-6';
	}
	if ( value === 'template-7' ) {
		return 'template-7';
	}
	return 'default';
}

/**
 * Reset all color settings to nothing selected (empty string).
 */
export const RESET_COLOR_ATTRIBUTES: Partial<BlogListCarouselAttributes> = {
	cardTitleColor: '',
	cardExcerptColor: '',
	cardMetaColor: '',
	cardMetaIconColor: '',
	cardBackgroundColor: '',
	cardBorderColor: '',
	readMoreLinkColor: '',
	paginationColor: '',
	paginationActiveColor: '',
	arrowColor: '',
	edgeFadeColor: '',
};

/**
 * Suggested settings when a card template is first selected.
 */
export function getTemplateDefaultAttributes(
	template: BlogListCardTemplate,
): Partial<BlogListCarouselAttributes> {
	if (template === 'template-7') {
		return {
			layoutMode: 'carousel', postsPerPage: 6, slidesPerView: 3,
			slidesPerViewTablet: 2, slidesPerViewMobile: 1, spaceBetween: 26,
			imageAspectRatio: '3-2', imageBorderRadius: 0, cardBorderRadius: 8,
			showDate: true, dateFormat: 'M j, Y', showCategory: false,
			showAuthor: false, showExcerpt: true, showReadMore: true,
			readMoreText: 'Read story', cardLinkBehavior: 'title-only',
			showArrows: false, showPagination: true, autoplay: false,
			loop: false,
		};
	}
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
			titleFontSize: 'medium',
			showPagination: false,
			showArrows: false,
			showDate: true,
			showCategory: true,
			dateFormat: 'M j, Y',
		};
	}

	if (template === 'template-3') {
		return {
			layoutMode: 'grid',
			gridColumns: 3,
			gridColumnGap: 24,
			gridRowGap: 24,
			spaceBetween: 24,
			slidesPerView: 3,
			slidesPerViewTablet: 2,
			slidesPerViewMobile: 1,
			imageAspectRatio: '16-10',
			imageBorderRadius: 16,
			cardBorderRadius: 16,
			cardPadding: 0,
			titleFontSize: 'medium-plus',
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

	if (template === 'template-4') {
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
			imageBorderRadius: 0,
			imageWidthPercent: 42,
			cardBorderRadius: 16,
			cardPadding: 36,
			cardBackgroundColor: 'surface',
			showExcerpt: true,
			showReadMore: true,
			readMoreText: 'Read More',
			cardLinkBehavior: 'title-only',
			titleFontSize: 'medium-plus',
			showPagination: false,
			showArrows: false,
			showDate: true,
			showCategory: true,
			dateFormat: 'M j, Y',
		};
	}

	if (template === 'template-5') {
		return {
			layoutMode: 'carousel',
			slidesPerView: 2,
			slidesPerViewTablet: 2,
			slidesPerViewMobile: 1,
			spaceBetween: 30,
			imageAspectRatio: '16-10',
			cardBorderRadius: 10,
			showTitle: true,
			titleFontSize: 'medium-plus',
			titleLineClamp: 2,
			showDate: true,
			dateFormat: 'F j, Y',
			showExcerpt: false,
			showCategory: false,
			showAuthor: false,
			showReadMore: true,
			readMoreText: 'Read More',
			cardLinkBehavior: 'full-card',
			showArrows: true,
			arrowStyle: 'circle',
			showPagination: false,
			arrowsDesktopDotsMobile: true,
			loop: true,
		};
	}

	if (template === 'template-6') {
		return {
			layoutMode: 'grid',
			gridColumns: 4,
			gridColumnGap: 30,
			gridRowGap: 35,
			spaceBetween: 30,
			slidesPerView: 4,
			slidesPerViewTablet: 2,
			slidesPerViewMobile: 1,
			postsPerPage: 4,
			showImage: true,
			imageAspectRatio: '3-2',
			imageBorderRadius: 30,
			cardBorderRadius: 30,
			cardPadding: 20,
			showTitle: true,
			titleFontSize: 'medium',
			titleLineClamp: 2,
			showDate: true,
			dateFormat: 'F j, Y',
			showExcerpt: false,
			showCategory: false,
			showAuthor: false,
			showReadMore: true,
			readMoreText: 'Read More',
			cardLinkBehavior: 'title-only',
			showPagination: false,
			showArrows: false,
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
