import type { BoxIconAttributes } from './types';

export type BoxIconCardTemplate = 'default' | 'ways' | 'minimal' | 'highlights' | 'timeline' | 'template-4';

export const BOX_CONTENT_TEMPLATE_OPTIONS: {
	value: BoxIconCardTemplate;
	labelKey: string;
}[] = [
	{ value: 'default', labelKey: 'Default' },
	{ value: 'minimal', labelKey: 'Minimal' },
	{ value: 'ways', labelKey: 'Template 01' },
	{ value: 'highlights', labelKey: 'Template 02' },
	{ value: 'timeline', labelKey: 'Template 03' },
	{ value: 'template-4', labelKey: 'Template 04' },
];

export function normalizeCardTemplate(value: string | undefined): BoxIconCardTemplate {
	if (value === 'ways') {
		return 'ways';
	}
	if (value === 'minimal') {
		return 'minimal';
	}
	if (value === 'highlights') {
		return 'highlights';
	}
	if (value === 'timeline') {
		return 'timeline';
	}
	if (value === 'template-4') {
		return 'template-4';
	}
	return 'default';
}

/**
 * Suggested block settings when a template is first selected.
 * All keys remain editable via existing inspector controls.
 */
export function getTemplateDefaultAttributes(
	template: BoxIconCardTemplate,
): Partial<BoxIconAttributes> {
	if (template === 'ways') {
		return {
			layoutMode: 'grid',
			gridColumns: 3,
			spaceBetween: 26,
			slidesPerView: 3,
			slidesPerViewTablet: 2,
			slidesPerViewMobile: 1.15,
			cardBorderWidth: 1,
			cardBorderRadius: 24,
			cardMinHeight: 240,
			iconCircleSize: 68,
			iconSize: 32,
			iconCircleRadius: 29,
			iconStyle: 'stacked',
			showPagination: false,
			showArrows: false,
		};
	}

	if (template === 'minimal') {
		return {
			layoutMode: 'grid',
			gridColumns: 3,
			spaceBetween: 18,
			slidesPerView: 3,
			slidesPerViewTablet: 2,
			slidesPerViewMobile: 1.15,
			cardBorderWidth: 1,
			cardBorderRadius: 16,
			cardMinHeight: 160,
			iconCircleSize: 42,
			iconSize: 22,
			iconCircleRadius: 29,
			iconStyle: 'stacked',
			showPagination: true,
			showArrows: false,
		};
	}

	if (template === 'highlights') {
		return {
			layoutMode: 'grid',
			gridColumns: 4,
			gridMinWidth: 981,
			spaceBetween: 20,
			slidesPerView: 4,
			slidesPerViewTablet: 2,
			slidesPerViewMobile: 1.15,
			cardBorderWidth: 2,
			cardBorderRadius: 26,
			cardMinHeight: 160,
			iconCircleSize: 60,
			iconSize: 28,
			iconCircleRadius: 50,
			iconStyle: 'stacked',
			showPagination: false,
			showArrows: false,
		};
	}

	if (template === 'timeline') {
		return {
			layoutMode: 'grid',
			gridColumns: 4,
			gridMinWidth: 761,
			spaceBetween: 0,
			slidesPerView: 4,
			slidesPerViewTablet: 2,
			slidesPerViewMobile: 1.15,
			cardBorderWidth: 0,
			cardBorderRadius: 0,
			cardMinHeight: 0,
			iconCircleSize: 44,
			iconSize: 20,
			iconCircleRadius: 50,
			iconStyle: 'framed',
			showPagination: false,
			showArrows: false,
		};
	}

	if (template === 'template-4') {
		return {
			layoutMode: 'grid',
			gridColumns: 1,
			disableResponsiveCarousel: true,
			spaceBetween: 0,
			slidesPerView: 1.15,
			slidesPerViewTablet: 1,
			slidesPerViewMobile: 1,
			cardBorderWidth: 0,
			cardBorderRadius: 0,
			cardMinHeight: 0,
			iconCircleSize: 68,
			iconSize: 32,
			iconCircleRadius: 29,
			iconStyle: 'stacked',
			showPagination: false,
			showArrows: false,
		};
	}

	return {
		layoutMode: 'slider',
		gridColumns: 4,
		spaceBetween: 18,
		slidesPerView: 4,
		cardBorderWidth: 2,
		cardBorderRadius: 8,
		iconCircleSize: 54,
		iconSize: 25,
		iconCircleRadius: 50,
		iconStyle: 'stacked',
		showPagination: true,
	};
}

export function formatCardGhostIndex(index: number): string {
	return String(Math.max(0, index) + 1).padStart(2, '0');
}
