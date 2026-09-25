import type { CSSProperties } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import { getGutenbergColorProps } from './color-utils';
import { resolveEventColorForCss } from './event-color-map';
import type { EventAttributes, EventItem } from './types';

export function compactFontProps(
	value: string | undefined,
	fallback: number,
): { className: string; style: CSSProperties } {
	if (!value) return { className: '', style: { fontSize: fallback } };
	if (/^\d+(\.\d+)?(px|rem|em|%)?$/.test(value)) {
		return {
			className: '',
			style: { fontSize: /^\d+(\.\d+)?$/.test(value) ? `${value}px` : value },
		};
	}
	const aliases: Record<string, string> = {
		sm: 'small',
		md: 'medium',
		lg: 'large',
		xl: 'x-large',
		'2xl': 'xx-large',
		normal: 'base',
	};
	return { className: `has-${aliases[value] || value}-font-size`, style: {} };
}

export default function CompactList({
	events,
	attributes,
	onEdit,
}: {
	events: EventItem[];
	attributes: EventAttributes;
	onEdit: (id: string) => void;
}) {
	const showDate = attributes.showDate !== false;
	const showImage = attributes.showImage !== false;
	const showLocation = attributes.showLocation !== false;
	const showTime = attributes.showTime !== false;
	const showDescription = attributes.showDescription !== false;
	const showRegisterButton = attributes.showRegisterButton !== false;

	const color = (
		key: string,
		type: 'color' | 'background' | 'border' = 'color',
	) => {
		const val = (attributes as unknown as Record<string, string>)[key];
		return val ? getGutenbergColorProps(val, type) : { className: '', style: {} };
	};

	const props = (
		name: string,
		colors: ReturnType<typeof color>[],
		size?: ReturnType<typeof compactFontProps>,
	) => ({
		className: [
			`nextora-event-compact__${name}`,
			...colors.map((entry) => entry.className),
			size?.className,
		]
			.filter(Boolean)
			.join(' '),
		style: Object.assign(
			{},
			...colors.map((entry) => entry.style),
			size?.style,
		) as CSSProperties,
	});

	const defaultPastels = [
		['#f0edff', '#7063ed'],
		['#e4f6ef', '#39a88c'],
		['#fff0ec', '#d68571'],
	];

	return (
		<div className="nextora-event-compact__list">
			{events.map((event, index) => {
				const pastelPair = defaultPastels[index % 3];
				const customBg = attributes.registerBackgroundColor;
				const customText = attributes.registerTextColor;
				const bgVal = customBg || pastelPair[0];
				const fgVal = customText || pastelPair[1];

				const actionColorProps = [
					getGutenbergColorProps(bgVal, 'background'),
					getGutenbergColorProps(fgVal, 'color'),
					color('registerBorderColor', 'border'),
				];
				const actionProps = props('action', actionColorProps);
				actionProps.style = {
					...actionProps.style,
					'--compact-action-bg': resolveEventColorForCss(bgVal),
					'--compact-action-color': resolveEventColorForCss(fgVal),
					'--compact-action-border': resolveEventColorForCss(
						attributes.registerBorderColor || 'transparent',
					),
				} as CSSProperties;

				const label = sprintf(
					__('View event: %s', 'nextora'),
					event.title || __('Event', 'nextora'),
				);

				const hasMeta = (showLocation && !!event.location) || (showTime && !!event.time);

				return (
					<article
						key={event.id}
						{...props('item', [
							color('cardBackgroundColor', 'background'),
							color('cardBorderColor', 'border'),
						])}
					>
						{showDate && (event.month || event.day || event.year) && (
							<div
								{...props('date', [
									color('dateBackgroundColor', 'background'),
								])}
							>
								{event.month && (
									<span {...props('month', [color('dateAccentColor')])}>
										{event.month}
									</span>
								)}
								{event.day && (
									<b {...props('day', [color('dateDayColor')])}>
										{event.day}
									</b>
								)}
								{event.year && (
									<small {...props('year', [color('dateAccentColor')])}>
										{event.year}
									</small>
								)}
							</div>
						)}
						{showImage && event.imageUrl && (
							<img
								className="nextora-event-compact__image"
								src={event.imageUrl}
								alt={event.imageAlt || ''}
							/>
						)}
						<div className="nextora-event-compact__content">
							<h4
								{...props(
									'title',
									[color('titleColor')],
									compactFontProps(attributes.titleFontSize, 14),
								)}
							>
								{event.linkUrl ? (
									<a
										className="nextora-event-compact__title-link"
										href={event.linkUrl}
										onClick={(e) => e.preventDefault()}
									>
										{event.title}
									</a>
								) : (
									event.title
								)}
							</h4>
							{hasMeta && (
								<div className="nextora-event-compact__meta-row">
									{showLocation && event.location && (
										<div {...props('location', [color('metaColor')])}>
											<svg
												{...props('pin', [color('metaIconColor')])}
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="1.8"
												aria-hidden="true"
											>
												<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
												<circle cx="12" cy="10" r="3" />
											</svg>
											<span>{event.location}</span>
										</div>
									)}
									{showTime && event.time && (
										<div {...props('time', [color('metaColor')])}>
											<svg
												{...props('clock', [color('metaIconColor')])}
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="1.8"
												strokeLinecap="round"
												strokeLinejoin="round"
												aria-hidden="true"
											>
												<circle cx="12" cy="12" r="10" />
												<polyline points="12 6 12 12 16 14" />
											</svg>
											<span>{event.time}</span>
										</div>
									)}
								</div>
							)}
							{showDescription && event.description && (
								<p
									{...props(
										'description',
										[color('compactDescriptionColor')],
										compactFontProps(attributes.descriptionFontSize, 12),
									)}
								>
									{event.description}
								</p>
							)}
						</div>
						{showRegisterButton && event.linkUrl && (
							<span {...actionProps} aria-label={label}>
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.8"
									aria-hidden="true"
								>
									<path d="M5 12h14m-6-6 6 6-6 6" />
								</svg>
							</span>
						)}
						<button
							type="button"
							className="nextora-event-compact__edit"
							onClick={() => onEdit(event.id)}
						>
							{__('Edit event', 'nextora')}
						</button>
					</article>
				);
			})}
		</div>
	);
}
