import type { CSSProperties } from 'react';
import { useState } from '@wordpress/element';
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
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import PostEditForm from './post-edit-form';
import type { InstagramFeedAttributes, InstagramPost } from './types';
import {
	buildSectionStyleVars,
	createPostId,
	normalizePosts,
	resolveMediaUrl,
	resolvePosterUrl,
	resolveTilePreviewUrl,
	isVideoPost,
} from './post-utils';

interface EditProps {
	attributes: InstagramFeedAttributes;
	setAttributes: (attrs: Partial<InstagramFeedAttributes>) => void;
}

const paginationTypeOptions = [
	{ label: __('Bullets', 'nextora'), value: 'bullets' },
	{ label: __('Fraction', 'nextora'), value: 'fraction' },
	{ label: __('Progress bar', 'nextora'), value: 'progressbar' },
];

export default function InstagramFeedEdit({ attributes, setAttributes }: EditProps) {
	const [editingPostId, setEditingPostId] = useState<string | null>(null);

	const posts = normalizePosts(attributes.posts);
	const editingPost = editingPostId ? posts.find((p) => p.id === editingPostId) : undefined;

	const mediaIds = posts.flatMap((p) => [p.mediaId, p.posterId]).filter((id) => id > 0);

	const mediaRecords = useSelect(
		(select) => {
			const { getMedia } = select('core') as {
				getMedia: (id: number) => { source_url?: string } | undefined;
			};
			return mediaIds.map((id) => getMedia(id));
		},
		[mediaIds.join(',')],
	);

	const mediaUrlById = new Map<number, string>();
	mediaIds.forEach((id, i) => {
		const url = mediaRecords[i]?.source_url;
		if (url) {
			mediaUrlById.set(id, url);
		}
	});

	const {
		contentMaxWidth = '1200px',
		tileBorderRadius = 8,
		tileBackground = '',
		showTileOverlay = false,
		slidesPerView = 5,
		slidesPerViewTablet = 3,
		slidesPerViewMobile = 2.15,
		spaceBetween = 16,
		speed = 500,
		loop = false,
		freeMode = false,
		grabCursor = true,
		autoplay = false,
		autoplayDelay = 5000,
		pauseOnHover = true,
		showPagination = false,
		paginationType = 'bullets',
		showArrows = false,
		enableLightbox = true,
		lightboxShowArrows = true,
		lightboxShowCaption = true,
		lightboxLinkText = '',
		lightboxHandleOverride = '',
		backgroundColor = '',
		tileOverlayColor = '',
		paginationColor = '',
		paginationActiveColor = '',
		lightboxSidebarBackground = '',
		enableScrollAnimation = true,
	} = attributes;

	const styleVars = buildSectionStyleVars({
		contentMaxWidth,
		tileBorderRadius,
		spaceBetween,
		backgroundColor,
		tileBackground,
		tileOverlayColor,
		paginationColor,
		paginationActiveColor,
		lightboxSidebarBackground,
	});

	const blockProps = useBlockProps({
		className: 'nextora-instagram-feed nextora-instagram-feed--editor',
		style: styleVars as CSSProperties,
	});

	const setPosts = (next: InstagramPost[]): void => {
		setAttributes({ posts: next });
	};

	const openPostEditor = (id: string): void => {
		setEditingPostId(id);
	};

	const closePostEditor = (): void => {
		setEditingPostId(null);
	};

	const patchPost = (id: string, patch: Partial<InstagramPost>): void => {
		setPosts(posts.map((p) => (p.id === id ? { ...p, ...patch } : p)));
	};

	const addPost = (): void => {
		setPosts([
			...posts,
			{
				id: createPostId(),
				mediaType: 'image',
				mediaId: 0,
				mediaUrl: '',
				mediaAlt: '',
				posterId: 0,
				posterUrl: '',
				videoUrl: '',
				caption: '',
				permalink: 'https://instagram.com/',
			},
		]);
	};

	const removePost = (id: string): void => {
		if (posts.length <= 1) {
			return;
		}
		setPosts(posts.filter((p) => p.id !== id));
		if (editingPostId === id) {
			closePostEditor();
		}
	};

	const movePost = (id: string, delta: number): void => {
		const index = posts.findIndex((p) => p.id === id);
		const target = index + delta;
		if (index < 0 || target < 0 || target >= posts.length) {
			return;
		}
		const next = [...posts];
		const tmp = next[index];
		next[index] = next[target];
		next[target] = tmp;
		setPosts(next);
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Posts', 'nextora')} initialOpen>
					<p className="nextora-instagram-feed__inspector-help">
						{__(
							'Use Edit on a tile or below to add image/video, caption, and Instagram link.',
							'nextora',
						)}
					</p>
					{posts.map((post, index) => (
						<div key={post.id} className="nextora-instagram-feed__inspector-post">
							<div className="nextora-instagram-feed__inspector-post-summary">
								<p className="nextora-instagram-feed__inspector-post-title">
									{sprintf(__('Post %d', 'nextora'), index + 1)}
									{' · '}
									{post.mediaType === 'video' ? __('Video', 'nextora') : __('Image', 'nextora')}
								</p>
								{post.caption ? (
									<p className="nextora-instagram-feed__inspector-post-caption">{post.caption}</p>
								) : null}
							</div>
							<div className="nextora-instagram-feed__inspector-post-actions">
								<Button variant="primary" onClick={() => openPostEditor(post.id)}>
									{__('Edit', 'nextora')}
								</Button>
								<Button
									variant="secondary"
									disabled={index === 0}
									onClick={() => movePost(post.id, -1)}
								>
									{__('Up', 'nextora')}
								</Button>
								<Button
									variant="secondary"
									disabled={index >= posts.length - 1}
									onClick={() => movePost(post.id, 1)}
								>
									{__('Down', 'nextora')}
								</Button>
								<Button
									variant="secondary"
									isDestructive
									disabled={posts.length <= 1}
									onClick={() => removePost(post.id)}
								>
									{__('Remove', 'nextora')}
								</Button>
							</div>
						</div>
					))}
					<Button variant="primary" onClick={addPost}>
						{__('Add post', 'nextora')}
					</Button>
				</PanelBody>

				<PanelBody title={__('Layout', 'nextora')} initialOpen={false}>
					<TextControl
						label={__('Content max width', 'nextora')}
						value={contentMaxWidth}
						onChange={(v) => setAttributes({ contentMaxWidth: v ?? '1200px' })}
					/>
					<RangeControl
						label={__('Tile border radius (px)', 'nextora')}
						value={tileBorderRadius}
						onChange={(v) => setAttributes({ tileBorderRadius: v ?? 8 })}
						min={0}
						max={24}
					/>
					<ToggleControl
						label={__('Show hover overlay', 'nextora')}
						checked={showTileOverlay}
						onChange={(v) => setAttributes({ showTileOverlay: v })}
					/>
				</PanelBody>

				<PanelBody title={__('Carousel', 'nextora')} initialOpen={false}>
					<RangeControl
						label={__('Slides per view (desktop)', 'nextora')}
						value={slidesPerView}
						onChange={(v) => setAttributes({ slidesPerView: v ?? 5 })}
						min={1}
						max={6}
						step={0.5}
					/>
					<RangeControl
						label={__('Slides per view (tablet)', 'nextora')}
						value={slidesPerViewTablet}
						onChange={(v) => setAttributes({ slidesPerViewTablet: v ?? 3 })}
						min={1}
						max={4}
						step={0.5}
					/>
					<RangeControl
						label={__('Slides per view (mobile)', 'nextora')}
						value={slidesPerViewMobile}
						onChange={(v) => setAttributes({ slidesPerViewMobile: v ?? 2.15 })}
						min={1}
						max={3}
						step={0.05}
					/>
					<RangeControl
						label={__('Space between (px)', 'nextora')}
						value={spaceBetween}
						onChange={(v) => setAttributes({ spaceBetween: v ?? 16 })}
						min={0}
						max={48}
					/>
					<RangeControl
						label={__('Transition speed (ms)', 'nextora')}
						value={speed}
						onChange={(v) => setAttributes({ speed: v ?? 500 })}
						min={200}
						max={2000}
					/>
					<ToggleControl label={__('Loop', 'nextora')} checked={loop} onChange={(v) => setAttributes({ loop: v })} />
					<ToggleControl
						label={__('Free mode', 'nextora')}
						checked={freeMode}
						onChange={(v) => setAttributes({ freeMode: v })}
					/>
					<ToggleControl
						label={__('Grab cursor', 'nextora')}
						checked={grabCursor}
						onChange={(v) => setAttributes({ grabCursor: v })}
					/>
				</PanelBody>

				<PanelBody title={__('Autoplay', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Enable autoplay', 'nextora')}
						checked={autoplay}
						onChange={(v) => setAttributes({ autoplay: v })}
					/>
					{autoplay && (
						<>
							<RangeControl
								label={__('Autoplay delay (ms)', 'nextora')}
								value={autoplayDelay}
								onChange={(v) => setAttributes({ autoplayDelay: v ?? 5000 })}
								min={2000}
								max={15000}
								step={500}
							/>
							<ToggleControl
								label={__('Pause on hover', 'nextora')}
								checked={pauseOnHover}
								onChange={(v) => setAttributes({ pauseOnHover: v })}
							/>
						</>
					)}
				</PanelBody>

				<PanelBody title={__('Navigation', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Show pagination', 'nextora')}
						checked={showPagination}
						onChange={(v) => setAttributes({ showPagination: v })}
					/>
					{showPagination && (
						<SelectControl
							label={__('Pagination type', 'nextora')}
							value={paginationType}
							options={paginationTypeOptions}
							onChange={(v) =>
								setAttributes({
									paginationType:
										(v as InstagramFeedAttributes['paginationType']) ?? 'bullets',
								})
							}
						/>
					)}
					<ToggleControl
						label={__('Show carousel arrows', 'nextora')}
						checked={showArrows}
						onChange={(v) => setAttributes({ showArrows: v })}
					/>
				</PanelBody>

				<PanelBody title={__('Lightbox', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Enable lightbox', 'nextora')}
						checked={enableLightbox}
						onChange={(v) => setAttributes({ enableLightbox: v })}
					/>
					{enableLightbox && (
						<>
							<ToggleControl
								label={__('Show lightbox arrows', 'nextora')}
								checked={lightboxShowArrows}
								onChange={(v) => setAttributes({ lightboxShowArrows: v })}
							/>
							<ToggleControl
								label={__('Show caption', 'nextora')}
								checked={lightboxShowCaption}
								onChange={(v) => setAttributes({ lightboxShowCaption: v })}
							/>
							<TextControl
								label={__('Link text', 'nextora')}
								value={lightboxLinkText}
								onChange={(v) => setAttributes({ lightboxLinkText: v ?? '' })}
							/>
							<TextControl
								label={__('Sidebar handle override', 'nextora')}
								value={lightboxHandleOverride}
								onChange={(v) => setAttributes({ lightboxHandleOverride: v ?? '' })}
								help={__('Leave empty to use the default handle.', 'nextora')}
							/>
						</>
					)}
				</PanelBody>

				<PanelColorSettings
					enableAlpha
					title={__('Colors', 'nextora')}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: (v) => setAttributes({ backgroundColor: v ?? '' }),
							label: __('Background', 'nextora'),
						},
						{
							value: tileBackground,
							onChange: (v) => setAttributes({ tileBackground: v ?? '' }),
							label: __('Tile placeholder', 'nextora'),
						},
						{
							value: paginationColor,
							onChange: (v) => setAttributes({ paginationColor: v ?? '' }),
							label: __('Pagination', 'nextora'),
						},
						{
							value: paginationActiveColor,
							onChange: (v) => setAttributes({ paginationActiveColor: v ?? '' }),
							label: __('Pagination active', 'nextora'),
						},
						{
							value: lightboxSidebarBackground,
							onChange: (v) => setAttributes({ lightboxSidebarBackground: v ?? '' }),
							label: __('Lightbox sidebar', 'nextora'),
						},
					]}
				/>

				<PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Animate on scroll', 'nextora')}
						checked={enableScrollAnimation}
						onChange={(v) => setAttributes({ enableScrollAnimation: v })}
						help={__(
							'Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.',
							'nextora',
						)}
					/>
				</PanelBody>
			</InspectorControls>

			{editingPost && (
				<Modal
					className="nextora-instagram-feed__post-modal"
					title={sprintf(
						__('Edit post %d', 'nextora'),
						posts.findIndex((p) => p.id === editingPost.id) + 1,
					)}
					onRequestClose={closePostEditor}
					shouldCloseOnClickOutside={false}
					headerActions={
						<div className="nextora-instagram-feed__post-modal-header-actions">
							<Button size="compact" variant="tertiary" onClick={closePostEditor}>
								{__('Cancel', 'nextora')}
							</Button>
							<Button size="compact" variant="primary" onClick={closePostEditor}>
								{__('Save', 'nextora')}
							</Button>
						</div>
					}
				>
					<PostEditForm
						post={editingPost}
						mediaUrl={resolveMediaUrl(editingPost, mediaUrlById)}
						posterUrl={resolvePosterUrl(editingPost, mediaUrlById)}
						onPatch={(patch) => patchPost(editingPost.id, patch)}
					/>
				</Modal>
			)}

			<div {...blockProps}>
				<div className="nextora-instagram-feed__inner">
					<div className="nextora-instagram-feed__tiles-row" aria-label={__('Instagram posts', 'nextora')}>
						{posts.map((post, index) => {
							const mediaUrl = resolveMediaUrl(post, mediaUrlById);
							const previewUrl = resolveTilePreviewUrl(post, mediaUrlById);

							return (
								<article
									key={post.id}
									className="nextora-instagram-feed__tile nextora-instagram-feed__tile--editable"
								>
									<button
										type="button"
										className="nextora-instagram-feed__tile-edit"
										onClick={() => openPostEditor(post.id)}
									>
										{__('Edit post', 'nextora')}
									</button>
									<span className="nextora-instagram-feed__tile-type" aria-hidden="true">
										{isVideoPost(post) ? __('Video', 'nextora') : __('Image', 'nextora')}
									</span>
									<div className="nextora-instagram-feed__tile-media">
										{isVideoPost(post) && mediaUrl ? (
											<video
												src={mediaUrl}
												className="nextora-instagram-feed__tile-video"
												muted
												playsInline
												loop
												autoPlay
												preload="auto"
												poster={resolvePosterUrl(post, mediaUrlById)}
											/>
										) : previewUrl ? (
											<img
												src={previewUrl}
												alt=""
												className={
													!mediaUrl
														? 'nextora-instagram-feed__tile-img nextora-instagram-feed__tile-img--placeholder'
														: 'nextora-instagram-feed__tile-img'
												}
											/>
										) : null}
									</div>
									<span className="nextora-instagram-feed__tile-index">
										{sprintf(__('Post %d', 'nextora'), index + 1)}
									</span>
								</article>
							);
						})}
					</div>

					<div className="nextora-instagram-feed__editor-add">
						<Button variant="secondary" onClick={addPost}>
							{__('Add post', 'nextora')}
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
