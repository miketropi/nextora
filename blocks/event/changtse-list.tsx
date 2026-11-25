import type { CSSProperties } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import { getGutenbergColorProps } from './color-utils';
import type { EventAttributes, EventItem } from './types';

export interface ChangtseOptions {
	changtseItemGap?: number;
	changtseShowCategory?: boolean;
	changtseCategoryColor?: string;
	changtseLabelColor?: string;
	changtseViewText?: string;
	changtseCategoryFontSize?: string;
}

export type ChangtseAttributes = ChangtseOptions & Pick<EventAttributes,
	'showImage' | 'showDate' | 'showLocation' | 'showRegisterButton' |
	'cardBackgroundColor' | 'titleColor' | 'metaColor' | 'registerTextColor' |
	'registerBackgroundColor' | 'titleFontSize' | 'metaFontSize'
>;

export function changtseElementProps(name: string, color: string, size = '') {
	const colors = getGutenbergColorProps(color, name === 'item' || name === 'action-bg' ? 'background' : 'color');
	const aliases: Record<string, string> = { sm: 'small', md: 'medium', lg: 'large', xl: 'x-large', '2xl': 'xx-large', normal: 'base' };
	const literal = /^(?:[\d.]+(?:px|rem|em|vw|%)?|clamp\(.+\))$/.test(size);
	return {
		className: [`nextora-event-changtse__${name}`, colors.className, size && !literal ? `has-${aliases[size] || size}-font-size` : ''].filter(Boolean).join(' '),
		style: { ...colors.style, ...(size && literal ? { fontSize: /^\d+(\.\d+)?$/.test(size) ? `${size}px` : size } : {}) } as CSSProperties,
	};
}

export default function ChangtseList({ events, attributes, onEdit }: {
	events: EventItem[];
	attributes: ChangtseAttributes;
	onEdit: (id: string) => void;
}) {
	const props = (name: string, color = '', size = '') => changtseElementProps(name, color, size);
	const placeholder = window.nextoraEvent?.imagePlaceholderUrl || '';
	return <div className="nextora-event-changtse nextora-event--template6" style={{ '--nextora-event-changtse-gap': `${attributes.changtseItemGap ?? 30}px` } as CSSProperties}>
		{events.map((event) => {
			const date = [event.day, event.month, event.year].filter(Boolean).join(' ');
			return <article key={event.id} {...props('item', attributes.cardBackgroundColor || 'base')}>
				{attributes.showImage !== false && <div className="nextora-event-changtse__media">
					{event.linkUrl ? <a className="nextora-event-changtse__image-link" href={event.linkUrl} target={event.linkTarget === '_blank' ? '_blank' : undefined} rel={event.linkTarget === '_blank' ? 'noopener noreferrer' : undefined} onClick={(e) => e.preventDefault()}><img src={event.imageUrl || placeholder} alt={event.imageAlt || event.title} /></a> : (event.imageUrl || placeholder) && <img src={event.imageUrl || placeholder} alt={event.imageAlt || event.title} />}
				</div>}
				<div className="nextora-event-changtse__content">
					{attributes.changtseShowCategory !== false && event.category && <div {...props('category', attributes.changtseCategoryColor || 'primary', attributes.changtseCategoryFontSize)}>{event.category}</div>}
					<h4 {...props('title', attributes.titleColor, attributes.titleFontSize)}><a href={event.linkUrl || undefined} onClick={(e) => e.preventDefault()}>{event.title}</a></h4>
					<div className="nextora-event-changtse__details">
						{[[attributes.showLocation !== false && event.location, __('Event In:', 'nextora')], [attributes.showDate !== false && date, __('Date:', 'nextora')]].map(([value, label], index) => value ? <div className="nextora-event-changtse__detail" key={index}>
							<span {...props('label', attributes.changtseLabelColor || 'paragraph')}>{label}</span>
							<span {...props('value', attributes.metaColor || 'secondary', attributes.metaFontSize)}>{value}</span>
						</div> : null)}
					</div>
				</div>
				<button type="button" className="nextora-event-changtse__edit" onClick={() => onEdit(event.id)} aria-label={sprintf(__('Edit event: %s', 'nextora'), event.title)}>{__('Edit', 'nextora')}</button>
			</article>;
		})}
	</div>;
}
