import { __ } from '@wordpress/i18n';
import type { EventAttributes, EventItem } from './types';

export function TabocheList({
	events,
	attributes,
	onEdit,
}: {
	events: EventItem[];
	attributes: EventAttributes;
	onEdit: (id: string) => void;
}) {
	const showDate = attributes.showDate !== false;
	const showTime = attributes.showTime !== false;
	const showOrganizer = attributes.showOrganizer !== false;
	const showLocation = attributes.showLocation !== false;
	const showRegister = attributes.showRegisterButton !== false;
	const itemGap = attributes.itemGap ?? 20;
	const registerText = attributes.registerButtonText || __('View event', 'nextora');

	return (
		<div
			className="nextora-event nextora-event--template7"
			style={{
				'--nextora-event-item-gap': `${itemGap}px`,
			} as React.CSSProperties}
		>
			<div
				className="nextora-event-taboche__list"
				style={{ gap: `${itemGap}px` }}
			>
				{events.map((event) => {
					const day = event.day || '15';
					const month = event.month || 'Dec';
					const time = event.time || '6:00 pm';
					const organizer = event.organizer || '';
					const location = event.location || 'Community Hall';

					return (
						<article
							key={event.id}
							className="nextora-event-taboche__item"
							style={{ position: 'relative' }}
						>
							<button
								type="button"
								className="nextora-event__item-edit"
								onClick={() => onEdit(event.id)}
								style={{
									position: 'absolute',
									top: '8px',
									right: '8px',
									zIndex: 10,
								}}
							>
								{__('Edit event', 'nextora')}
							</button>

							{showDate && (
								<div className="nextora-event-taboche__date">
									<b>{day}</b>
									<small>{month}</small>
								</div>
							)}

							<div className="nextora-event-taboche__body">
								<div className="nextora-event-taboche__content">
									{(showTime || (showOrganizer && organizer)) && (
										<div className="nextora-event-taboche__meta-top">
											{showTime && (
												<span className="nextora-event-taboche__meta-item">
													<svg
														width="14"
														height="14"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
														aria-hidden="true"
													>
														<circle cx="12" cy="12" r="10" />
														<polyline points="12 6 12 12 16 14" />
													</svg>
													<span>{time}</span>
												</span>
											)}
											{showOrganizer && organizer && (
												<span className="nextora-event-taboche__meta-item">
													<svg
														width="14"
														height="14"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
														aria-hidden="true"
													>
														<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
														<circle cx="12" cy="7" r="4" />
													</svg>
													<span>{organizer}</span>
												</span>
											)}
										</div>
									)}

									<h3 className="nextora-event-taboche__title">
										<a
											href="#event"
											onClick={(e) => e.preventDefault()}
										>
											{event.title || __('Event Title', 'nextora')}
										</a>
									</h3>

									{showLocation && location && (
										<div className="nextora-event-taboche__meta-bottom">
											<span className="nextora-event-taboche__meta-item">
												<svg
													width="14"
													height="14"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													aria-hidden="true"
												>
													<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
													<circle cx="12" cy="10" r="3" />
												</svg>
												<span>{location}</span>
											</span>
										</div>
									)}
								</div>

								{showRegister && (
									<div className="nextora-event-taboche__action">
										<span className="nextora-event-taboche__btn wp-element-button">
											<span>{event.registerLabel || registerText}</span>
										</span>
									</div>
								)}
							</div>
						</article>
					);
				})}
			</div>
		</div>
	);
}
