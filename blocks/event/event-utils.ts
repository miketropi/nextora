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
		title: 'Run for the Children — Charity 10K',
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
		title: 'Haven Open Day — Visit a home',
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
		title: 'A Night for Haven — Charity Gala Dinner',
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
		title: typeof raw?.title === 'string' ? raw.title : '',
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
	registerTextColor?: string;
	registerBorderColor?: string;
	registerHoverTextColor?: string;
	registerHoverBackgroundColor?: string;
}): Record<string, string> {
	return buildEventColorStyleVars(attrs);
}
