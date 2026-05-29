import { __ } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import {
	Button,
	RangeControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import type { TestimonialItem } from './types';
import { TESTIMONIAL_CAROUSEL_MEDIA_TYPES } from './types';

interface WPMedia {
	id?: number;
	url?: string;
	alt?: string;
}

export interface TestimonialEditFormProps {
	item: TestimonialItem;
	authorPhotoUrl?: string;
	onPatch: (patch: Partial<TestimonialItem>) => void;
}

export default function TestimonialEditForm({
	item,
	authorPhotoUrl,
	onPatch,
}: TestimonialEditFormProps) {
	return (
		<div className="nextora-testimonial-carousel__item-form">
			<RangeControl
				label={__('Star rating', 'nextora')}
				help={__('0 hides stars on the slide.', 'nextora')}
				value={item.rating}
				onChange={(rating) => onPatch({ rating: rating ?? 0 })}
				min={0}
				max={5}
			/>
			<TextControl
				label={__('Quote', 'nextora')}
				value={item.quoteText}
				onChange={(quoteText) => onPatch({ quoteText: quoteText ?? '' })}
			/>
			<TextControl
				label={__('Author name', 'nextora')}
				value={item.authorName}
				onChange={(authorName) => onPatch({ authorName: authorName ?? '' })}
			/>
			<TextControl
				label={__('Author role', 'nextora')}
				value={item.authorRole}
				onChange={(authorRole) => onPatch({ authorRole: authorRole ?? '' })}
			/>
			<ToggleControl
				label={__('Show author photo', 'nextora')}
				checked={item.showAuthorPhoto}
				onChange={(showAuthorPhoto) => onPatch({ showAuthorPhoto })}
			/>
			{item.showAuthorPhoto && (
				<>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media: WPMedia) =>
								onPatch({
									authorPhotoId: media.id ?? 0,
									authorPhotoAlt: media.alt ?? item.authorPhotoAlt,
								})
							}
							allowedTypes={[...TESTIMONIAL_CAROUSEL_MEDIA_TYPES]}
							value={item.authorPhotoId > 0 ? item.authorPhotoId : undefined}
							render={({ open }) => (
								<div className="nextora-testimonial-carousel__item-form-media">
									{authorPhotoUrl ? (
										<img
											src={authorPhotoUrl}
											alt=""
											className="nextora-testimonial-carousel__item-form-media-preview"
										/>
									) : (
										<div className="nextora-testimonial-carousel__item-form-media-empty">
											{__('No photo selected', 'nextora')}
										</div>
									)}
									<Button variant="secondary" onClick={open}>
										{item.authorPhotoId
											? __('Replace photo', 'nextora')
											: __('Choose photo', 'nextora')}
									</Button>
								</div>
							)}
						/>
					</MediaUploadCheck>
					{item.authorPhotoId > 0 && (
						<TextControl
							label={__('Photo alt text', 'nextora')}
							value={item.authorPhotoAlt}
							onChange={(authorPhotoAlt) => onPatch({ authorPhotoAlt: authorPhotoAlt ?? '' })}
						/>
					)}
				</>
			)}
		</div>
	);
}
