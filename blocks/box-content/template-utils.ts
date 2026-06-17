import type { BoxContentAttributes } from './types';

export type BoxContentCardTemplate = 'default' | 'ways';

export const BOX_CONTENT_TEMPLATE_OPTIONS: {
	value: BoxContentCardTemplate;
	labelKey: string;
}[] = [
	{ value: 'default', labelKey: 'Default' },
	{ value: 'ways', labelKey: 'Ways' },
];

export function normalizeCardTemplate(value: string | undefined): BoxContentCardTemplate {
	return value === 'ways' ? 'ways' : 'default';
}

/**
 * Suggested block settings when a template is first selected.
 * All keys remain editable via existing inspector controls.
 */
export function getTemplateDefaultAttributes(
	template: BoxContentCardTemplate,
): Partial<BoxContentAttributes> {
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
