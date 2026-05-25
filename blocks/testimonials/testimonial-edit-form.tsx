import { __ } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, TextControl, TextareaControl } from '@wordpress/components';
import type { TestimonialItem } from './types';
import { TESTIMONIALS_MEDIA_TYPES } from './types';

interface WPMedia {
	id?: number;
	url?: string;
	alt?: string;
}

export interface TestimonialEditFormProps {
	item: TestimonialItem;
	portraitUrl?: string;
	onPatch: (patch: Partial<TestimonialItem>) => void;
}

export default function TestimonialEditForm({
	item,
	portraitUrl,
	onPatch,
}: TestimonialEditFormProps) {
	return (
		<div className="nextora-testimonials__item-form">
			<div className="nextora-testimonials__item-form-portrait">
				<p className="components-base-control__label">{__('Portrait', 'nextora')}</p>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media: WPMedia) =>
							onPatch({
								portraitId: media.id ?? 0,
								portraitAlt: media.alt ?? item.portraitAlt,
							})
						}
						allowedTypes={[...TESTIMONIALS_MEDIA_TYPES]}
						value={item.portraitId > 0 ? item.portraitId : undefined}
						render={({ open }) => (
							<div className="nextora-testimonials__item-form-media">
								{portraitUrl ? (
									<img
										src={portraitUrl}
										alt=""
										className="nextora-testimonials__item-form-media-preview"
									/>
								) : (
									<div className="nextora-testimonials__item-form-media-empty">
										{__('No portrait selected', 'nextora')}
									</div>
								)}
								<div className="nextora-testimonials__item-form-media-actions">
									<Button variant="secondary" size="compact" onClick={open}>
										{item.portraitId
											? __('Replace portrait', 'nextora')
											: __('Choose portrait', 'nextora')}
									</Button>
									{item.portraitId > 0 ? (
										<Button
											variant="link"
											size="compact"
											isDestructive
											onClick={() => onPatch({ portraitId: 0, portraitAlt: '' })}
										>
											{__('Remove portrait', 'nextora')}
										</Button>
									) : null}
								</div>
							</div>
						)}
					/>
				</MediaUploadCheck>
				{item.portraitId > 0 && (
					<TextControl
						label={__('Portrait alt text', 'nextora')}
						value={item.portraitAlt}
						onChange={(portraitAlt) => onPatch({ portraitAlt: portraitAlt ?? '' })}
						help={__(
							'Describe the portrait for visitors using screen readers.',
							'nextora',
						)}
					/>
				)}
			</div>

			<div className="nextora-testimonials__item-form-fields">
				<TextareaControl
					label={__('Quote', 'nextora')}
					value={item.quoteText}
					onChange={(quoteText) => onPatch({ quoteText: quoteText ?? '' })}
					rows={5}
					help={__('Displayed in the testimonial carousel.', 'nextora')}
				/>
				<TextControl
					label={__('Author name', 'nextora')}
					value={item.authorName}
					onChange={(authorName) => onPatch({ authorName: authorName ?? '' })}
				/>
				<div className="nextora-testimonials__item-form-author-meta">
					<TextControl
						label={__('Age', 'nextora')}
						help={__('e.g. 16 Years', 'nextora')}
						value={item.authorAge}
						onChange={(authorAge) => onPatch({ authorAge: authorAge ?? '' })}
					/>
					<TextControl
						label={__('Location', 'nextora')}
						help={__('e.g. Lagos, Nigeria', 'nextora')}
						value={item.authorLocation}
						onChange={(authorLocation) =>
							onPatch({ authorLocation: authorLocation ?? '' })
						}
					/>
				</div>
			</div>
		</div>
	);
}
