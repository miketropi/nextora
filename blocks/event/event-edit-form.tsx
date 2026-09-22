import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck, URLInput } from '@wordpress/block-editor';
import { BaseControl, Button, CheckboxControl, TextareaControl, TextControl } from '@wordpress/components';
import { IconPicker } from '../advanced-icon/icon-picker';
import { EventButtonIcon } from './button-icon';
import type { EventItem } from './types';
import {
	eventDateInputValue,
	eventTimeInputValue,
	dayMonthFromDateInput,
	displayTimeFromInput,
} from './event-date-utils';
import { EVENT_MEDIA_TYPES } from './event-utils';

interface WPMedia {
	id?: number;
	url?: string;
	alt?: string;
}

export interface EventEditFormProps {
	event: EventItem;
	imageUrl?: string;
	showEditorialFields?: boolean;
	showDescription?: boolean;
	onPatch: (patch: Partial<EventItem>) => void;
}

export default function EventEditForm({
	event,
	imageUrl,
	showEditorialFields = false,
	showDescription = false,
	onPatch,
}: EventEditFormProps) {
	const [iconPickerOpen, setIconPickerOpen] = useState(false);
	const dateInputValue = eventDateInputValue(event.day, event.month);
	const timeInputValue = eventTimeInputValue(event.time);

	return (
		<div className="nextora-event__event-form">
			<div className="nextora-event__event-form-media">
				<p className="nextora-event__event-form-label">{__('Event image', 'nextora')}</p>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media: WPMedia) =>
							onPatch({
								imageId: media.id ?? 0,
								imageUrl: media.url ?? '',
								imageAlt: media.alt ?? event.imageAlt,
							})
						}
						allowedTypes={[...EVENT_MEDIA_TYPES]}
						value={event.imageId > 0 ? event.imageId : undefined}
						render={({ open }) => (
							<div className="nextora-event__event-form-media-inner">
								{imageUrl ? (
									<img
										src={imageUrl}
										alt=""
										className="nextora-event__event-form-media-preview"
									/>
								) : (
									<div className="nextora-event__event-form-media-empty">
										{__('No image selected', 'nextora')}
									</div>
								)}
								<div className="nextora-event__event-form-media-actions">
									<Button variant="secondary" onClick={open}>
										{event.imageId || event.imageUrl
											? __('Replace image', 'nextora')
											: __('Choose image', 'nextora')}
									</Button>
									{event.imageId > 0 || event.imageUrl ? (
										<Button
											variant="link"
											isDestructive
											onClick={() =>
												onPatch({ imageId: 0, imageUrl: '', imageAlt: '' })
											}
										>
											{__('Remove image', 'nextora')}
										</Button>
									) : null}
								</div>
							</div>
						)}
					/>
				</MediaUploadCheck>
				{event.imageId > 0 || event.imageUrl ? (
					<TextControl
						label={__('Image alt text', 'nextora')}
						value={event.imageAlt}
						onChange={(imageAlt) => onPatch({ imageAlt: imageAlt ?? '' })}
					/>
				) : null}
			</div>

			<div className="nextora-event__event-form-fields">
				{showEditorialFields ? (
					<>
						<TextControl
							label={__('Category', 'nextora')}
							value={event.category}
							onChange={(category) => onPatch({ category: category ?? '' })}
							help={__('Small uppercase label used by the editorial event list.', 'nextora')}
						/>
					</>
				) : null}
				<TextControl
					label={__('Title', 'nextora')}
					value={event.title}
					onChange={(title) => onPatch({ title: title ?? '' })}
				/>
				{showEditorialFields || showDescription ? (
					<TextareaControl
						label={__('Description', 'nextora')}
						value={event.description}
						onChange={(description) => onPatch({ description: description ?? '' })}
						help={__('Keep this to one or two short lines.', 'nextora')}
						rows={4}
					/>
				) : null}

				<div className="nextora-event__event-form-row nextora-event__event-form-row--datetime">
					<BaseControl
						id={`nextora-event-date-${event.id}`}
						label={__('Date', 'nextora')}
						help={__(
							'Pick a date — day and month on the card update automatically.',
							'nextora',
						)}
					>
						<input
							id={`nextora-event-date-${event.id}`}
							type="date"
							className="nextora-event__native-input"
							value={dateInputValue}
							onChange={(e) => {
								const parsed = dayMonthFromDateInput(e.target.value);
								if (parsed) {
									onPatch(parsed);
								}
							}}
						/>
					</BaseControl>

					<BaseControl
						id={`nextora-event-time-${event.id}`}
						label={__('Time', 'nextora')}
						help={__('Uses your device time picker.', 'nextora')}
					>
						<input
							id={`nextora-event-time-${event.id}`}
							type="time"
							className="nextora-event__native-input"
							value={timeInputValue}
							onChange={(e) => {
								const display = displayTimeFromInput(e.target.value);
								if (display) {
									onPatch({ time: display });
								} else if (!e.target.value) {
									onPatch({ time: '' });
								}
							}}
						/>
					</BaseControl>
				</div>

				<div className="nextora-event__event-form-row nextora-event__event-form-row--split">
					<TextControl
						label={__('Day (badge)', 'nextora')}
						value={event.day}
						onChange={(day) => onPatch({ day: day ?? '' })}
					/>
					<TextControl
						label={__('Month (badge)', 'nextora')}
						value={event.month}
						onChange={(month) => onPatch({ month: month ?? '' })}
					/>
				</div>

				<TextControl
					label={__('Location', 'nextora')}
					value={event.location}
					onChange={(location) => onPatch({ location: location ?? '' })}
				/>
				<TextControl
					label={__('Price / ticket', 'nextora')}
					value={event.price}
					onChange={(price) => onPatch({ price: price ?? '' })}
				/>
				<TextControl
					label={__('Register label', 'nextora')}
					value={event.registerLabel}
					onChange={(registerLabel) => onPatch({ registerLabel: registerLabel ?? '' })}
					help={__('Leave empty to use the block default register label.', 'nextora')}
				/>

				<div className="nextora-event__event-form-icon-row">
					<BaseControl
						label={__('Button icon', 'nextora')}
						help={__(
							'Choose an icon before the button label (e.g. calendar-days for Register, ticket for Get ticket).',
							'nextora',
						)}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: '10px',
								marginTop: '6px',
								flexWrap: 'wrap',
							}}
						>
							<Button variant="secondary" onClick={() => setIconPickerOpen(true)}>
								{__('Choose icon', 'nextora')}
							</Button>
							<div
								style={{
									display: 'inline-flex',
									alignItems: 'center',
									gap: '8px',
									padding: '4px 10px',
									background: '#f0f0f1',
									borderRadius: '4px',
								}}
							>
								<EventButtonIcon iconName={event.buttonIcon || 'calendar-days'} size={16} />
								<code style={{ fontSize: '13px', background: 'transparent' }}>
									{event.buttonIcon || 'calendar-days'}
								</code>
							</div>
							{event.buttonIcon && event.buttonIcon !== 'calendar-days' ? (
								<Button
									variant="link"
									isDestructive
									onClick={() => onPatch({ buttonIcon: 'calendar-days' })}
								>
									{__('Reset', 'nextora')}
								</Button>
							) : null}
						</div>
					</BaseControl>
				</div>

				{iconPickerOpen ? (
					<IconPicker
						currentIcon={event.buttonIcon || 'calendar-days'}
						onSelect={(iconName) => {
							onPatch({ buttonIcon: iconName });
							setIconPickerOpen(false);
						}}
						onClose={() => setIconPickerOpen(false)}
					/>
				) : null}

				<div className="nextora-event__event-form-link">
					<p className="nextora-event__event-form-label">{__('Register link URL', 'nextora')}</p>
					<URLInput
						value={event.linkUrl}
						onChange={(linkUrl) => onPatch({ linkUrl: linkUrl ?? '' })}
					/>
					<CheckboxControl
						label={__('Open in new tab', 'nextora')}
						checked={event.linkTarget === '_blank'}
						onChange={(openInNewTab) =>
							onPatch({ linkTarget: openInNewTab ? '_blank' : '_self' })
						}
					/>
				</div>
			</div>
		</div>
	);
}
