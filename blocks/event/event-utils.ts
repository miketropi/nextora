import type { EventItem } from './types';
import { defaultEventDateParts, defaultEventTimeLabel } from './event-date-utils';
import { buildEventColorStyleVars } from './event-color-map';

export const EVENT_MEDIA_TYPES = ['image'] as const;

declare global {
	interface Window {
		nextoraEvent?: {
			imagePlaceholderUrl?: string;
		};
	}
}

export const DEFAULT_EVENTS: EventItem[] = [
	{
		id: '1',
		day: '14',
		month: 'Jul',
		category: 'Community',
		title: 'Run for the Children — Charity 10K',
		description: 'A practical day of movement and community support for children in need.',
		location: 'Riverside Park',
		time: '7:00 AM',
		price: 'From $25',
		imageId: 0,
		imageUrl: '',
		imageAlt: '',
		linkUrl: '',
		linkTarget: '_self',
		registerLabel: 'Register',
	},
	{
		id: '2',
		day: '02',
		month: 'Aug',
		category: 'Community',
		title: 'Haven Open Day — Visit a home',
		description: 'Meet the team, tour the space, and learn how neighbours can get involved.',
		location: 'Greenfield House',
		time: '10:00 AM',
		price: 'Free',
		imageId: 0,
		imageUrl: '',
		imageAlt: '',
		linkUrl: '',
		linkTarget: '_self',
		registerLabel: 'Register',
	},
	{
		id: '3',
		day: '20',
		month: 'Sep',
		category: 'Fundraising',
		title: 'A Night for Haven — Charity Gala Dinner',
		description: 'An evening of connection and giving to help create a safer future for every family.',
		location: 'Grand Hall',
		time: '6:30 PM',
		price: 'From $120',
		imageId: 0,
		imageUrl: '',
		imageAlt: '',
		linkUrl: '',
		linkTarget: '_self',
		registerLabel: 'Register',
	},
];

export function imagePlaceholderUrl(): string {
	const fromWindow =
		typeof window !== 'undefined' ? window.nextoraEvent?.imagePlaceholderUrl : undefined;
	return fromWindow ?? '';
}

export function createEventId(): string {
	if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
		return crypto.randomUUID();
	}
	return `event-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function createDefaultEventItem(
	registerLabel = 'Register',
	overrides: Partial<EventItem> = {},
): EventItem {
	const { day, month } = defaultEventDateParts();

	return {
		id: createEventId(),
		day,
		month,
		title: 'Community fundraiser',
		category: 'Community',
		description: '',
		location: 'Main venue',
		time: defaultEventTimeLabel(),
		price: 'Free',
		imageId: 0,
		imageUrl: '',
		imageAlt: '',
		linkUrl: '',
		linkTarget: '_self',
		registerLabel,
		...overrides,
	};
}

export function normalizeEvents(events: EventItem[] | undefined): EventItem[] {
	if (!Array.isArray(events) || events.length === 0) {
		return DEFAULT_EVENTS.map((item) => ({ ...item }));
	}

	return events.map((raw, index) => ({
		id: typeof raw?.id === 'string' && raw.id !== '' ? raw.id : String(index + 1),
		day: typeof raw?.day === 'string' ? raw.day : '',
		month: typeof raw?.month === 'string' ? raw.month : '',
		category: typeof raw?.category === 'string' ? raw.category : '',
		title: typeof raw?.title === 'string' ? raw.title : '',
		description: typeof raw?.description === 'string' ? raw.description : '',
		location: typeof raw?.location === 'string' ? raw.location : '',
		time: typeof raw?.time === 'string' ? raw.time : '',
		price: typeof raw?.price === 'string' ? raw.price : '',
		imageId: typeof raw?.imageId === 'number' ? raw.imageId : 0,
		imageUrl: typeof raw?.imageUrl === 'string' ? raw.imageUrl : '',
		imageAlt: typeof raw?.imageAlt === 'string' ? raw.imageAlt : '',
		linkUrl: typeof raw?.linkUrl === 'string' ? raw.linkUrl : '',
		linkTarget: raw?.linkTarget === '_blank' ? '_blank' : '_self',
		registerLabel: typeof raw?.registerLabel === 'string' ? raw.registerLabel : '',
	}));
}

export function resolveImageUrl(
	event: EventItem,
	mediaUrlById: Map<number, string>,
): string | undefined {
	if (event.imageId > 0) {
		const fromMedia = mediaUrlById.get(event.imageId);
		if (fromMedia) {
			return fromMedia;
		}
	}
	const url = event.imageUrl.trim();
	if (url !== '') {
		return url;
	}
	const placeholder = imagePlaceholderUrl();
	return placeholder !== '' ? placeholder : undefined;
}

export function buildSectionStyleVars(attrs: {
	cardBackgroundColor?: string;
	cardBorderColor?: string;
	dateBackgroundColor?: string;
	dateDayColor?: string;
	dateAccentColor?: string;
	titleColor?: string;
	metaColor?: string;
	metaIconColor?: string;
	registerBackgroundColor?: string;
	registerTextColor?: string;
	registerBorderColor?: string;
	registerHoverTextColor?: string;
	registerHoverBackgroundColor?: string;
	registerHoverBorderColor?: string;
	paginationColor?: string;
	paginationActiveColor?: string;
}): Record<string, string> {
	return buildEventColorStyleVars(attrs);
}
