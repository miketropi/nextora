import { __ } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import {
	Button,
	RangeControl,
	TextareaControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import type { TestimonialItem } from './types';
import { TESTIMONIAL_CAROUSEL_MEDIA_TYPES } from './types';
import { StarRating } from './icons';

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
			<div className="nextora-testimonial-carousel__item-form-stars">
				<StarRating rating={item.rating} size={32} />
			</div>

			<div className="nextora-testimonial-carousel__item-form-cols">
				<div className="nextora-testimonial-carousel__item-form-left">
					<TextareaControl
						label={__('Quote', 'nextora')}
						value={item.quoteText}
						onChange={(quoteText) => onPatch({ quoteText: quoteText ?? '' })}
						rows={4}
					/>
					<div className="nextora-testimonial-carousel__item-form-author-row">
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
					</div>
				</div>

				<div className="nextora-testimonial-carousel__item-form-right">
					<RangeControl
						label={__('Star rating', 'nextora')}
						help={__('0 hides stars on the slide.', 'nextora')}
						value={item.rating}
						onChange={(rating) => onPatch({ rating: rating ?? 0 })}
						min={0}
						max={5}
					/>

					<div className="nextora-testimonial-carousel__item-form-photo-section">
						<ToggleControl
							label={__('Show author photo', 'nextora')}
							checked={item.showAuthorPhoto}
							onChange={(showAuthorPhoto) => onPatch({ showAuthorPhoto })}
						/>
						{item.showAuthorPhoto && (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media: WPMedia) =>
										onPatch({
											authorPhotoId: media.id ?? 0,
											authorPhotoAlt:
												media.alt ?? item.authorPhotoAlt,
										})
									}
									allowedTypes={[
										...TESTIMONIAL_CAROUSEL_MEDIA_TYPES,
									]}
									value={
										item.authorPhotoId > 0
											? item.authorPhotoId
											: undefined
									}
									render={({ open }) => (
										<div className="nextora-testimonial-carousel__item-form-media">
											<div className="nextora-testimonial-carousel__item-form-media-visual">
												{authorPhotoUrl ? (
													<img
														src={authorPhotoUrl}
														alt=""
														className="nextora-testimonial-carousel__item-form-media-preview"
													/>
												) : (
													<div className="nextora-testimonial-carousel__item-form-media-empty">
														<svg
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth="1"
															aria-hidden
														>
															<circle cx="12" cy="8" r="3.5" />
															<path d="M5 20c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5" />
														</svg>
													</div>
												)}
											</div>
											<Button
												variant="secondary"
												onClick={open}
											>
												{item.authorPhotoId
													? __('Replace photo', 'nextora')
													: __('Choose photo', 'nextora')}
											</Button>
										</div>
									)}
								/>
							</MediaUploadCheck>
						)}
						{item.showAuthorPhoto && item.authorPhotoId > 0 && (
							<TextControl
								label={__('Photo alt text', 'nextora')}
								value={item.authorPhotoAlt}
								onChange={(authorPhotoAlt) =>
									onPatch({ authorPhotoAlt: authorPhotoAlt ?? '' })
								}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
