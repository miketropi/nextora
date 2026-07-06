import type { BoxIconItem } from './types';
import { cardPaddingToStyleVars } from './spacing-utils';
import { storedColorToCss } from './icon-catalog';
import { buildHeadingFontFamilyVar } from './typography-utils';

export const DEFAULT_ITEMS: BoxIconItem[] = [
	{
		id: '1',
		number: '',
		title: 'Donate',
		description: 'Just $1 puts four meals on a table. Give once or monthly.',
		showLink: true,
		linkLabel: 'Give now',
		linkUrl: '',
		linkTarget: '_self',
		iconName: 'heart',
		uploadedIconId: 0,
		uploadedIconUrl: '',
		iconColor: '',
		iconSurfaceBackgroundColor: '',
		highlightAccentColor: '',
	},
	{
		id: '2',
		number: '',
		title: 'Volunteer',
		description: 'Sort, pack and deliver at a warehouse near you. No experience needed.',
		showLink: true,
		linkLabel: 'Join in',
		linkUrl: '',
		linkTarget: '_self',
		iconName: 'hand-heart',
		uploadedIconId: 0,
		uploadedIconUrl: '',
		iconColor: '',
		iconSurfaceBackgroundColor: '',
		highlightAccentColor: '',
	},
	{
		id: '3',
		number: '',
		title: 'Give food',
		description: 'Run a food drive at work or school, or drop off at a collection point.',
		showLink: true,
		linkLabel: 'Start a drive',
		linkUrl: '',
		linkTarget: '_self',
		iconName: 'apple',
		uploadedIconId: 0,
		uploadedIconUrl: '',
		iconColor: '',
		iconSurfaceBackgroundColor: '',
		highlightAccentColor: '',
	},
	{
		id: '4',
		number: '',
		title: 'Fundraise',
		description: 'Take on a challenge — every dollar multiplies into meals.',
		showLink: true,
		linkLabel: 'Fundraise',
		linkUrl: '',
		linkTarget: '_self',
		iconName: 'megaphone',
		uploadedIconId: 0,
		uploadedIconUrl: '',
		iconColor: '',
		iconSurfaceBackgroundColor: '',
		highlightAccentColor: '',
	},
];

export function createItemId(): string {
	if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
		return crypto.randomUUID();
	}
	return `item-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function normalizeItems(items: BoxIconItem[] | undefined): BoxIconItem[] {
	if (!Array.isArray(items) || items.length === 0) {
		return DEFAULT_ITEMS.map((item) => ({ ...item }));
	}

	return items.map((raw, index) => ({
		id: typeof raw?.id === 'string' && raw.id !== '' ? raw.id : String(index + 1),
		number: typeof raw?.number === 'string' ? raw.number : '',
		title: typeof raw?.title === 'string' ? raw.title : '',
		description: typeof raw?.description === 'string' ? raw.description : '',
		showLink: raw?.showLink !== false,
		linkLabel: typeof raw?.linkLabel === 'string' ? raw.linkLabel : '',
		linkUrl: typeof raw?.linkUrl === 'string' ? raw.linkUrl : '',
		linkTarget: raw?.linkTarget === '_blank' ? '_blank' : '_self',
		iconSource: raw?.iconSource === 'upload' ? 'upload' : 'theme',
		iconName: typeof raw?.iconName === 'string' && raw.iconName !== '' ? raw.iconName : 'star',
		uploadedIconId: typeof raw?.uploadedIconId === 'number' ? raw.uploadedIconId : 0,
		uploadedIconUrl: typeof raw?.uploadedIconUrl === 'string' ? raw.uploadedIconUrl : '',
		iconColor: typeof raw?.iconColor === 'string' ? raw.iconColor : '',
		iconSurfaceBackgroundColor:
			typeof raw?.iconSurfaceBackgroundColor === 'string' ? raw.iconSurfaceBackgroundColor : '',
		highlightAccentColor:
			typeof raw?.highlightAccentColor === 'string' ? raw.highlightAccentColor : '',
	}));
}

export function buildStyleVars(attrs: {
	contentMaxWidth?: string;
	gapPx?: number;
	cardMinHeight?: number;
	cardPadding?: unknown;
	cardBorderWidth?: number;
	cardBorderRadius?: number;
	gridColumns?: number;
	iconCircleSize?: number;
	iconSize?: number;
	eyebrowColor?: string;
	headingColor?: string;
	descriptionColor?: string;
	cardBorderColor?: string;
	cardBackgroundColor?: string;
	cardHoverBackgroundColor?: string;
	cardTitleColor?: string;
	cardDescriptionColor?: string;
	descriptionHoverColor?: string;
	linkColor?: string;
	linkHoverColor?: string;
	waysAccentColor1?: string;
	waysAccentColor2?: string;
	waysAccentColor3?: string;
	highlightAccentColor1?: string;
	highlightAccentColor2?: string;
	highlightAccentColor3?: string;
	highlightAccentColor4?: string;
	paginationColor?: string;
	paginationActiveColor?: string;
	arrowColor?: string;
	iconColor?: string;
	iconSurfaceBackgroundColor?: string;
	iconSurfaceBorderColor?: string;
	iconHoverColor?: string;
	iconHoverSurfaceBackgroundColor?: string;
	headingFontFamily?: string;
}, lookupPalette: { slug: string; color: string }[] = []): Record<string, string> {
	const vars: Record<string, string> = {};

	const set = (key: string, value: string | number | undefined): void => {
		if (value === undefined || value === '') {
			return;
		}
		vars[key] = String(value);
	};

	const setColor = (key: string, value: string | undefined): void => {
		if (!value) {
			return;
		}
		const resolved = storedColorToCss(value, lookupPalette);
		if (resolved) {
			vars[key] = resolved;
		}
	};

	set('--nextora-box-icon-max-width', attrs.contentMaxWidth);
	if (typeof attrs.gapPx === 'number' && attrs.gapPx >= 0) {
		vars['--nextora-box-icon-gap'] = `${attrs.gapPx}px`;
	}
	set('--nextora-box-icon-card-min-height', attrs.cardMinHeight ? `${attrs.cardMinHeight}px` : '');
	Object.assign(vars, cardPaddingToStyleVars(attrs.cardPadding));
	set('--nextora-box-icon-card-border-width', attrs.cardBorderWidth ? `${attrs.cardBorderWidth}px` : '');
	if (typeof attrs.cardBorderRadius === 'number' && attrs.cardBorderRadius >= 0) {
		vars['--nextora-box-icon-card-radius'] = `${attrs.cardBorderRadius}px`;
	}
	set('--nextora-box-icon-cols', attrs.gridColumns);
	set('--nextora-box-icon-icon-circle-size', attrs.iconCircleSize ? `${attrs.iconCircleSize}px` : '');
	set('--nextora-box-icon-icon-size', attrs.iconSize ? `${attrs.iconSize}px` : '');
	set('--nextora-box-icon-eyebrow-color', attrs.eyebrowColor);
	set('--nextora-box-icon-heading-color', attrs.headingColor);
	set('--nextora-box-icon-description-color', attrs.descriptionColor);
	setColor('--nextora-box-icon-card-border-color', attrs.cardBorderColor);
	setColor('--nextora-box-icon-card-bg', attrs.cardBackgroundColor);
	setColor('--nextora-box-icon-card-hover-bg', attrs.cardHoverBackgroundColor);
	setColor('--nextora-box-icon-card-title-color', attrs.cardTitleColor);
	setColor('--nextora-box-icon-card-desc-color', attrs.cardDescriptionColor);
	setColor('--nextora-box-icon-card-desc-hover-color', attrs.descriptionHoverColor);
	setColor('--nextora-box-icon-link-color', attrs.linkColor);
	setColor('--nextora-box-icon-link-hover-color', attrs.linkHoverColor);
	setColor('--nextora-box-icon-ways-accent-1', attrs.waysAccentColor1);
	setColor('--nextora-box-icon-ways-accent-2', attrs.waysAccentColor2);
	setColor('--nextora-box-icon-ways-accent-3', attrs.waysAccentColor3);
	setColor('--nextora-box-icon-highlight-accent-1', attrs.highlightAccentColor1);
	setColor('--nextora-box-icon-highlight-accent-2', attrs.highlightAccentColor2);
	setColor('--nextora-box-icon-highlight-accent-3', attrs.highlightAccentColor3);
	setColor('--nextora-box-icon-highlight-accent-4', attrs.highlightAccentColor4);
	setColor('--nextora-box-icon-dot-color', attrs.paginationColor);
	setColor('--nextora-box-icon-dot-active', attrs.paginationActiveColor);
	setColor('--nextora-box-icon-arrow-color', attrs.arrowColor);
	setColor('--nextora-box-icon-icon-color', attrs.iconColor);
	setColor('--nextora-box-icon-icon-surface-bg', attrs.iconSurfaceBackgroundColor);
	setColor('--nextora-box-icon-icon-surface-border', attrs.iconSurfaceBorderColor);
	setColor('--nextora-box-icon-icon-hover-color', attrs.iconHoverColor);
	setColor('--nextora-box-icon-icon-hover-surface-bg', attrs.iconHoverSurfaceBackgroundColor);

	Object.assign(vars, buildHeadingFontFamilyVar(attrs.headingFontFamily));

	return vars;
}
