import type { CSSProperties } from 'react';
import { useMemo, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	Button,
	Modal,
	PanelBody,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import type { EventAttributes, EventItem } from './types';
import EventEditForm from './event-edit-form';
import {
	buildSectionStyleVars,
	createDefaultEventItem,
	normalizeEvents,
	resolveImageUrl,
} from './event-utils';
import {
	colorValueForPicker,
	getMergedPaletteEntries,
	normalizeColorForStorage,
	useThemeColorPalette,
} from '../advanced-icon/color-utils';
import type { EventColorAttribute } from './types';

interface EditProps {
	attributes: EventAttributes;
	setAttributes: (attrs: Partial<EventAttributes>) => void;
}

function DetailIcon({ type }: { type: 'map-pin' | 'clock' | 'ticket' }): JSX.Element {
	if (type === 'map-pin') {
		return (
			<span className="nextora-event__detail-icon" aria-hidden="true">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C10.539 20.193 5 14.993 5 10a7 7 0 1 1 14 0" />
					<circle cx="12" cy="10" r="3" />
				</svg>
			</span>
		);
	}
	if (type === 'clock') {
		return (
			<span className="nextora-event__detail-icon" aria-hidden="true">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<circle cx="12" cy="12" r="10" />
					<path d="M12 6v6l4 2" />
				</svg>
			</span>
		);
	}
	return (
		<span className="nextora-event__detail-icon" aria-hidden="true">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
				<path d="M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z" />
				<path d="M13 13h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3" />
			</svg>
		</span>
	);
}

function DetailRow({
	icon,
	children,
}: {
	icon: 'map-pin' | 'clock' | 'ticket';
	children: string;
}): JSX.Element | null {
	if (!children) {
		return null;
	}
	return (
		<span className="nextora-event__detail">
			<DetailIcon type={icon} />
			{children}
		</span>
	);
}

export default function EventEdit({ attributes, setAttributes }: EditProps) {
	const [editingEventId, setEditingEventId] = useState<string | null>(null);

	const events = normalizeEvents(attributes.events);
	const editingEvent = editingEventId
		? events.find((event) => event.id === editingEventId)
		: undefined;

	const imageIds = events.map((event) => event.imageId).filter((id) => id > 0);

	const mediaRecords = useSelect(
		(select) => {
			const { getMedia } = select('core') as {
				getMedia: (id: number) => { source_url?: string } | undefined;
			};
			return imageIds.map((id) => getMedia(id));
		},
		[imageIds.join(',')],
	);

	const mediaUrlById = new Map<number, string>();
	imageIds.forEach((id, index) => {
		const url = mediaRecords[index]?.source_url;
		if (url) {
			mediaUrlById.set(id, url);
		}
	});

	const {
		showRegisterButton = true,
		registerButtonText = __('Register', 'nextora'),
		cardBackgroundColor = '',
		cardBorderColor = '',
		dateBackgroundColor = '',
		dateDayColor = '',
		dateAccentColor = '',
		titleColor = '',
		metaColor = '',
		metaIconColor = '',
		registerTextColor = '',
		registerBorderColor = '',
		registerHoverTextColor = '',
		registerHoverBackgroundColor = '',
		enableScrollAnimation = true,
	} = attributes;

	const colorPalette = useThemeColorPalette();
	const lookupPalette = getMergedPaletteEntries(colorPalette);

	const blockProps = useBlockProps({
		className: 'nextora-event nextora-event--editor',
		style: buildSectionStyleVars({
			cardBackgroundColor,
			cardBorderColor,
			dateBackgroundColor,
			dateDayColor,
			dateAccentColor,
			titleColor,
			metaColor,
			metaIconColor,
			registerTextColor,
			registerBorderColor,
			registerHoverTextColor,
			registerHoverBackgroundColor,
		}) as CSSProperties,
	});

	const setThemeColor = (key: EventColorAttribute, value: string | undefined): void => {
		setAttributes({
			[key]: normalizeColorForStorage(value, lookupPalette),
		});
	};

	const colorSettings = useMemo(
		() => [
			{
				value: colorValueForPicker(cardBackgroundColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('cardBackgroundColor', v),
				label: __('Card background', 'nextora'),
			},
			{
				value: colorValueForPicker(cardBorderColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('cardBorderColor', v),
				label: __('Card border', 'nextora'),
			},
			{
				value: colorValueForPicker(dateBackgroundColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('dateBackgroundColor', v),
				label: __('Date badge background', 'nextora'),
			},
			{
				value: colorValueForPicker(dateDayColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('dateDayColor', v),
				label: __('Date day number', 'nextora'),
			},
			{
				value: colorValueForPicker(dateAccentColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('dateAccentColor', v),
				label: __('Date month label', 'nextora'),
			},
			{
				value: colorValueForPicker(titleColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('titleColor', v),
				label: __('Event title', 'nextora'),
			},
			{
				value: colorValueForPicker(metaColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('metaColor', v),
				label: __('Details text', 'nextora'),
			},
			{
				value: colorValueForPicker(metaIconColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('metaIconColor', v),
				label: __('Details icons', 'nextora'),
			},
			{
				value: colorValueForPicker(registerTextColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('registerTextColor', v),
				label: __('Register text', 'nextora'),
			},
			{
				value: colorValueForPicker(registerBorderColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('registerBorderColor', v),
				label: __('Register border', 'nextora'),
			},
			{
				value: colorValueForPicker(registerHoverTextColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) => setThemeColor('registerHoverTextColor', v),
				label: __('Register hover text', 'nextora'),
			},
			{
				value: colorValueForPicker(registerHoverBackgroundColor, colorPalette, lookupPalette),
				onChange: (v: string | undefined) =>
					setThemeColor('registerHoverBackgroundColor', v),
				label: __('Register hover background', 'nextora'),
			},
		],
		[
			colorPalette,
			lookupPalette,
			cardBackgroundColor,
			cardBorderColor,
			dateBackgroundColor,
			dateDayColor,
			dateAccentColor,
			titleColor,
			metaColor,
			metaIconColor,
			registerTextColor,
			registerBorderColor,
			registerHoverTextColor,
			registerHoverBackgroundColor,
		],
	);

	const setEvents = (next: EventItem[]): void => {
		setAttributes({ events: next });
	};

	const patchEvent = (id: string, patch: Partial<EventItem>): void => {
		setEvents(events.map((event) => (event.id === id ? { ...event, ...patch } : event)));
	};

	const addEvent = (): void => {
		const newEvent = createDefaultEventItem(registerButtonText || __('Register', 'nextora'), {
			title: __('Community fundraiser', 'nextora'),
			location: __('Main venue', 'nextora'),
			price: __('Free', 'nextora'),
		});
		setEvents([...events, newEvent]);
		setEditingEventId(newEvent.id);
	};

	const removeEvent = (id: string): void => {
		if (events.length <= 1) {
			return;
		}
		setEvents(events.filter((event) => event.id !== id));
		if (editingEventId === id) {
			setEditingEventId(null);
		}
	};

	const moveEvent = (id: string, delta: number): void => {
		const index = events.findIndex((event) => event.id === id);
		const target = index + delta;
		if (index < 0 || target < 0 || target >= events.length) {
			return;
		}
		const next = [...events];
		const tmp = next[index];
		next[index] = next[target];
		next[target] = tmp;
		setEvents(next);
	};

	const openEventEditor = (id: string): void => {
		setEditingEventId(id);
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Events', 'nextora')} initialOpen>
					<p className="nextora-event__inspector-events-help">
						{__(
							'Click Edit on a card in the canvas, or use the buttons below. Full settings open in a dialog.',
							'nextora',
						)}
					</p>
					{events.map((event, index) => (
						<div key={event.id} className="nextora-event__inspector-item">
							<div className="nextora-event__inspector-item-summary">
								<p className="nextora-event__inspector-item-title">
									{event.title || sprintf(__('Event %d', 'nextora'), index + 1)}
								</p>
								{event.location ? (
									<p className="nextora-event__inspector-item-meta">{event.location}</p>
								) : null}
							</div>
							<div className="nextora-event__inspector-item-actions">
								<Button variant="primary" onClick={() => openEventEditor(event.id)}>
									{__('Edit', 'nextora')}
								</Button>
								<Button
									variant="secondary"
									disabled={index === 0}
									onClick={() => moveEvent(event.id, -1)}
								>
									{__('Up', 'nextora')}
								</Button>
								<Button
									variant="secondary"
									disabled={index >= events.length - 1}
									onClick={() => moveEvent(event.id, 1)}
								>
									{__('Down', 'nextora')}
								</Button>
								<Button
									variant="secondary"
									isDestructive
									disabled={events.length <= 1}
									onClick={() => removeEvent(event.id)}
								>
									{__('Remove', 'nextora')}
								</Button>
							</div>
						</div>
					))}
					<Button variant="primary" onClick={addEvent}>
						{__('Add event', 'nextora')}
					</Button>
				</PanelBody>

				<PanelBody title={__('Settings', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Show register button', 'nextora')}
						checked={showRegisterButton !== false}
						onChange={(value: boolean) => setAttributes({ showRegisterButton: value })}
					/>
					<TextControl
						label={__('Default register label', 'nextora')}
						value={registerButtonText}
						onChange={(value: string) => setAttributes({ registerButtonText: value })}
						help={__(
							'Used when an event does not have its own register label.',
							'nextora',
						)}
					/>
				</PanelBody>

				<PanelColorSettings title={__('Colors', 'nextora')} colorSettings={colorSettings} />

				<PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Animate on scroll', 'nextora')}
						help={__(
							'Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.',
							'nextora',
						)}
						checked={enableScrollAnimation !== false}
						onChange={(value: boolean) => setAttributes({ enableScrollAnimation: value })}
					/>
				</PanelBody>
			</InspectorControls>

			{editingEvent ? (
				<Modal
					className="nextora-event__event-modal"
					title={
						editingEvent.title
							? sprintf(__('Edit event: %s', 'nextora'), editingEvent.title)
							: __('Edit event', 'nextora')
					}
					onRequestClose={() => setEditingEventId(null)}
					shouldCloseOnClickOutside={false}
					headerActions={
						<div className="nextora-event__event-modal-header-actions">
							<Button
								size="compact"
								variant="primary"
								onClick={() => setEditingEventId(null)}
							>
								{__('Done', 'nextora')}
							</Button>
						</div>
					}
				>
					<EventEditForm
						event={editingEvent}
						imageUrl={resolveImageUrl(editingEvent, mediaUrlById)}
						onPatch={(patch) => patchEvent(editingEvent.id, patch)}
					/>
				</Modal>
			) : null}

			<div {...blockProps}>
				<div className="nextora-event__inner">
					<ul className="nextora-event__list" aria-label={__('Events', 'nextora')}>
						{events.map((event) => {
							const imageUrl = resolveImageUrl(event, mediaUrlById);
							const registerLabel =
								event.registerLabel.trim() !== ''
									? event.registerLabel
									: registerButtonText || __('Register', 'nextora');
							const displayDay = event.day.trim() !== '' ? event.day : '01';
							const displayMonth =
								event.month.trim() !== '' ? event.month : __('Jan', 'nextora');
							const displayLocation =
								event.location.trim() !== '' ? event.location : __('Main venue', 'nextora');
							const displayTime =
								event.time.trim() !== '' ? event.time : __('10:00 AM', 'nextora');
							const displayPrice =
								event.price.trim() !== '' ? event.price : __('Free', 'nextora');

							return (
								<li key={event.id} className="nextora-event__item-wrap">
									<article className="nextora-event__item nextora-event__item--editable">
										<button
											type="button"
											className="nextora-event__item-edit"
											onClick={() => openEventEditor(event.id)}
										>
											{__('Edit event', 'nextora')}
										</button>

										<div className="nextora-event__date">
											<b className="nextora-event__date-day">{displayDay}</b>
											<span className="nextora-event__date-month">{displayMonth}</span>
										</div>

										<div className="nextora-event__thumb">
											{imageUrl ? (
												<img
													src={imageUrl}
													alt=""
													className={`nextora-event__thumb-img${
														event.imageId === 0 && !event.imageUrl
															? ' nextora-event__thumb-img--placeholder'
															: ''
													}`}
												/>
											) : null}
										</div>

										<div className="nextora-event__info">
											<h3 className="nextora-event__title">
												{event.title || __('Community fundraiser', 'nextora')}
											</h3>
											<div className="nextora-event__details">
												<DetailRow icon="map-pin">{displayLocation}</DetailRow>
												<DetailRow icon="clock">{displayTime}</DetailRow>
												<DetailRow icon="ticket">{displayPrice}</DetailRow>
											</div>
										</div>

										{showRegisterButton ? (
											<span className="nextora-event__register nextora-event__register--static">
												{registerLabel}
												<span
													className="nextora-event__register-icon"
													aria-hidden="true"
												>
													<svg
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
													>
														<path d="M5 12h14M13 6l6 6-6 6" />
													</svg>
												</span>
											</span>
										) : null}
									</article>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
}
