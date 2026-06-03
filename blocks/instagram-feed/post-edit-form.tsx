import { __ } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, SelectControl, TextareaControl, TextControl } from '@wordpress/components';
import type { InstagramPost } from './types';
import { INSTAGRAM_IMAGE_MEDIA_TYPES, INSTAGRAM_VIDEO_MEDIA_TYPES } from './types';

interface WPMedia {
	id?: number;
	url?: string;
	alt?: string;
	mime?: string;
}

export interface PostEditFormProps {
	post: InstagramPost;
	mediaUrl?: string;
	posterUrl?: string;
	onPatch: (patch: Partial<InstagramPost>) => void;
}

const mediaTypeOptions = [
	{ label: __('Image', 'nextora'), value: 'image' },
	{ label: __('Video', 'nextora'), value: 'video' },
];

export default function PostEditForm({ post, mediaUrl, posterUrl, onPatch }: PostEditFormProps) {
	const isVideo = post.mediaType === 'video';
	const allowedTypes = isVideo ? [...INSTAGRAM_VIDEO_MEDIA_TYPES] : [...INSTAGRAM_IMAGE_MEDIA_TYPES];

	return (
		<div className="nextora-instagram-feed__post-form">
			<div className="nextora-instagram-feed__post-form-media-column">
				<p className="nextora-instagram-feed__post-form-section-label">
					{__('Media preview', 'nextora')}
				</p>

				<div className="nextora-instagram-feed__post-form-media">
					<p className="components-base-control__label">
						{isVideo ? __('Video', 'nextora') : __('Image', 'nextora')}
					</p>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media: WPMedia) => {
								const isVideoMime =
									typeof media.mime === 'string' && media.mime.startsWith('video/');

								onPatch({
									mediaId: media.id ?? 0,
									mediaAlt: media.alt ?? post.mediaAlt,
									videoUrl: media.url ?? '',
									...(isVideoMime ? { mediaType: 'video' as const } : {}),
								});
							}}
							allowedTypes={allowedTypes}
							value={post.mediaId > 0 ? post.mediaId : undefined}
							render={({ open }) => (
								<div className="nextora-instagram-feed__post-form-media-inner">
									{mediaUrl ? (
										isVideo ? (
											<video
												src={mediaUrl}
												className="nextora-instagram-feed__post-form-media-preview"
												controls
												muted
												playsInline
											/>
										) : (
											<img
												src={mediaUrl}
												alt=""
												className="nextora-instagram-feed__post-form-media-preview"
											/>
										)
									) : (
										<div className="nextora-instagram-feed__post-form-media-empty">
											{__('No media selected', 'nextora')}
										</div>
									)}
									<div className="nextora-instagram-feed__post-form-media-actions">
										<Button variant="secondary" size="compact" onClick={open}>
											{post.mediaId
												? __('Replace media', 'nextora')
												: __('Choose media', 'nextora')}
										</Button>
										{post.mediaId > 0 ? (
											<Button
												variant="link"
												size="compact"
												isDestructive
												onClick={() =>
													onPatch({
														mediaId: 0,
														mediaAlt: '',
														videoUrl: '',
													})
												}
											>
												{__('Remove media', 'nextora')}
											</Button>
										) : null}
									</div>
								</div>
							)}
						/>
					</MediaUploadCheck>
				</div>

				{isVideo && (
					<div className="nextora-instagram-feed__post-form-poster">
						<p className="components-base-control__label">{__('Video poster', 'nextora')}</p>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media: WPMedia) => onPatch({ posterId: media.id ?? 0 })}
								allowedTypes={[...INSTAGRAM_IMAGE_MEDIA_TYPES]}
								value={post.posterId > 0 ? post.posterId : undefined}
								render={({ open }) => (
									<div className="nextora-instagram-feed__post-form-media-inner">
										{posterUrl ? (
											<img
												src={posterUrl}
												alt=""
												className="nextora-instagram-feed__post-form-media-preview nextora-instagram-feed__post-form-media-preview--poster"
											/>
										) : (
											<div className="nextora-instagram-feed__post-form-media-empty nextora-instagram-feed__post-form-media-empty--poster">
												{__('Optional poster image', 'nextora')}
											</div>
										)}
										<div className="nextora-instagram-feed__post-form-media-actions">
											<Button variant="secondary" size="compact" onClick={open}>
												{post.posterId
													? __('Replace poster', 'nextora')
													: __('Choose poster', 'nextora')}
											</Button>
											{post.posterId > 0 ? (
												<Button
													variant="link"
													size="compact"
													isDestructive
													onClick={() => onPatch({ posterId: 0 })}
												>
													{__('Remove poster', 'nextora')}
												</Button>
											) : null}
										</div>
									</div>
								)}
							/>
						</MediaUploadCheck>
					</div>
				)}
			</div>

			<div className="nextora-instagram-feed__post-form-fields">
				<p className="nextora-instagram-feed__post-form-section-label">
					{__('Post details', 'nextora')}
				</p>

				<SelectControl
					label={__('Media type', 'nextora')}
					value={post.mediaType}
					options={mediaTypeOptions}
					onChange={(value) =>
						onPatch({
							mediaType: value === 'video' ? 'video' : 'image',
						})
					}
				/>

				{!isVideo && post.mediaId > 0 && (
					<TextControl
						label={__('Image alt text', 'nextora')}
						value={post.mediaAlt}
						onChange={(mediaAlt) => onPatch({ mediaAlt: mediaAlt ?? '' })}
						help={__(
							'Describe the image for visitors using screen readers.',
							'nextora',
						)}
					/>
				)}

				<TextareaControl
					label={__('Caption', 'nextora')}
					value={post.caption}
					onChange={(caption) => onPatch({ caption: caption ?? '' })}
					rows={6}
					help={__('Shown in the lightbox popup on the front end.', 'nextora')}
				/>

				<TextControl
					label={__('Instagram post URL', 'nextora')}
					value={post.permalink}
					onChange={(permalink) => onPatch({ permalink: permalink ?? '' })}
					help={__('Link for “View on Instagram”.', 'nextora')}
				/>
			</div>
		</div>
	);
}
