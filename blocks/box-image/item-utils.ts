import type { BoxImageItem } from './types';
import { storedColorToCss } from './icon-catalog';

export const DEFAULT_ITEMS: BoxImageItem[] = [
	{
		id: '1',
		title: 'Donate',
		description: 'Just $1 puts four meals on a table. Give once or monthly.',
		showLink: true,
		linkLabel: 'Read more',
		linkUrl: '#',
		linkTarget: '_self',
		imageId: 0,
		imageUrl: '',
		backgroundColor: '',
		titleColor: '',
		descriptionColor: '',
		linkColor: '',
		badge: '',
		linkWrapCard: false,
	},
	{
		id: '2',
		title: 'Volunteer',
		description: 'Sort, pack and deliver at a warehouse near you. No experience needed.',
		showLink: true,
		linkLabel: 'Read more',
		linkUrl: '#',
		linkTarget: '_self',
		imageId: 0,
		imageUrl: '',
		backgroundColor: '',
		titleColor: '',
		descriptionColor: '',
		linkColor: '',
		badge: '',
		linkWrapCard: false,
	},
	{
		id: '3',
		title: 'Give food',
		description: 'Run a food drive at work or school, or drop off at a collection point.',
		showLink: true,
		linkLabel: 'Read more',
		linkUrl: '#',
		linkTarget: '_self',
		imageId: 0,
		imageUrl: '',
		backgroundColor: '',
		titleColor: '',
		descriptionColor: '',
		linkColor: '',
		badge: '',
		linkWrapCard: false,
	},
	{
		id: '4',
		title: 'Fundraise',
		description: 'Take on a challenge — every dollar multiplies into meals.',
		showLink: true,
		linkLabel: 'Read more',
		linkUrl: '#',
		linkTarget: '_self',
		imageId: 0,
		imageUrl: '',
		backgroundColor: '',
		titleColor: '',
		descriptionColor: '',
		linkColor: '',
		badge: '',
		linkWrapCard: false,
	},
];

const PLACEHOLDER_PATH = 'assets/images/placeholder/general-img-landscape.png';

export function getPlaceholderUrl(themeUri: string): string {
	return `${themeUri.replace(/\/$/, '')}/${PLACEHOLDER_PATH}`;
}

export function createItemId(): string {
	if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
		return crypto.randomUUID();
	}
	return `item-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function normalizeItems(items: BoxImageItem[] | undefined): BoxImageItem[] {
	if (!Array.isArray(items) || items.length === 0) {
		return DEFAULT_ITEMS.map((item) => ({ ...item }));
	}

	return items.map((raw, index) => ({
		id: typeof raw?.id === 'string' && raw.id !== '' ? raw.id : String(index + 1),
		title: typeof raw?.title === 'string' ? raw.title : '',
		description: typeof raw?.description === 'string' ? raw.description : '',
		showLink: raw?.showLink !== false,
		linkLabel: typeof raw?.linkLabel === 'string' ? raw.linkLabel : '',
		linkUrl: typeof raw?.linkUrl === 'string' ? raw.linkUrl : '',
		linkTarget: raw?.linkTarget === '_blank' ? '_blank' : '_self',
		imageId: typeof raw?.imageId === 'number' ? raw.imageId : 0,
		imageUrl: typeof raw?.imageUrl === 'string' ? raw.imageUrl : '',
		backgroundColor: typeof raw?.backgroundColor === 'string' ? raw.backgroundColor : '',
		titleColor: typeof raw?.titleColor === 'string' ? raw.titleColor : '',
		descriptionColor: typeof raw?.descriptionColor === 'string' ? raw.descriptionColor : '',
		linkColor: typeof raw?.linkColor === 'string' ? raw.linkColor : '',
		badge: typeof raw?.badge === 'string' ? raw.badge : '',
		linkWrapCard: raw?.linkWrapCard === true,
		accentColor: typeof raw?.accentColor === 'string' ? raw.accentColor : '',
	}));
}

export function buildStyleVars(attrs: {
	contentMaxWidth?: string;
	gapPx?: number;
	cardMinHeight?: number;
	cardBorderWidth?: number;
	cardBorderRadius?: number;
	gridColumns?: number;
	imageAspectRatio?: string;
	imageFit?: string;
	cardBorderColor?: string;
	cardBackgroundColor?: string;
	cardHoverBackgroundColor?: string;
	cardTitleColor?: string;
	cardDescriptionColor?: string;
	descriptionHoverColor?: string;
	linkColor?: string;
	linkHoverColor?: string;
	paginationColor?: string;
	paginationActiveColor?: string;
	arrowColor?: string;
	badgeBackgroundColor?: string;
	badgeTextColor?: string;
	bulletIconColor?: string;
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

	set('--nextora-box-image-max-width', attrs.contentMaxWidth);
	if (typeof attrs.gapPx === 'number' && attrs.gapPx >= 0) {
		vars['--nextora-box-image-gap'] = `${attrs.gapPx}px`;
	}
	set('--nextora-box-image-card-min-height', typeof attrs.cardMinHeight === 'number' && attrs.cardMinHeight >= 0 ? `${attrs.cardMinHeight}px` : '');
	if (typeof attrs.cardBorderWidth === 'number' && attrs.cardBorderWidth >= 0) {
		vars['--nextora-box-image-card-border-width'] = `${attrs.cardBorderWidth}px`;
	}
	if (typeof attrs.cardBorderRadius === 'number' && attrs.cardBorderRadius >= 0) {
		vars['--nextora-box-image-card-radius'] = `${attrs.cardBorderRadius}px`;
	}
	set('--nextora-box-image-cols', attrs.gridColumns);
	if (attrs.imageAspectRatio) {
		vars['--nextora-box-image-aspect-ratio'] = attrs.imageAspectRatio;
	}
	if (attrs.imageFit) {
		vars['--nextora-box-image-fit'] = attrs.imageFit;
	}
	setColor('--nextora-box-image-card-border-color', attrs.cardBorderColor);
	setColor('--nextora-box-image-card-bg', attrs.cardBackgroundColor);
	setColor('--nextora-box-image-card-hover-bg', attrs.cardHoverBackgroundColor);
	setColor('--nextora-box-image-card-title-color', attrs.cardTitleColor);
	setColor('--nextora-box-image-card-desc-color', attrs.cardDescriptionColor);
	setColor('--nextora-box-image-card-desc-hover-color', attrs.descriptionHoverColor);
	setColor('--nextora-box-image-link-color', attrs.linkColor);
	setColor('--nextora-box-image-link-hover-color', attrs.linkHoverColor);
	setColor('--nextora-box-image-dot-color', attrs.paginationColor);
	setColor('--nextora-box-image-dot-active', attrs.paginationActiveColor);
	setColor('--nextora-box-image-arrow-color', attrs.arrowColor);
	setColor('--nextora-box-image-badge-bg', attrs.badgeBackgroundColor);
	setColor('--nextora-box-image-badge-text', attrs.badgeTextColor);
	setColor('--nextora-box-image-bullet-icon-color', attrs.bulletIconColor);

	return vars;
}
