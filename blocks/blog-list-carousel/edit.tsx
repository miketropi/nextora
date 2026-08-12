import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	Disabled,
	PanelBody,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
	TextareaControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEffect, useMemo } from '@wordpress/element';
import ServerSideRender from '@wordpress/server-side-render';
import {
	colorValueForPicker,
	getMergedPaletteEntries,
	normalizeColorForStorage,
	useThemeColorPalette,
} from '../advanced-icon/color-utils';
import {
	BLOG_LIST_TEMPLATE_OPTIONS,
	getTemplateDefaultAttributes,
	normalizeCardTemplate,
} from './template-utils';
import type { BlogListCarouselAttributes } from './types';

function normalizeTemplateSlug(slugOrId: string): string {
	const trimmed = slugOrId.trim();
	if ('' === trimmed) {
		return '';
	}
	if (trimmed.includes('//')) {
		return trimmed.split('//').pop() ?? trimmed;
	}
	return trimmed;
}

function isSingleTemplateSlug(slugOrId: string, postType: string): boolean {
	const slug = normalizeTemplateSlug(slugOrId);
	if ('' === slug) {
		return false;
	}
	return (
		slug === 'single' ||
		slug === `single-${postType}` ||
		slug.startsWith('single-')
	);
}

function useIsSinglePostContext(blockPostType: string): boolean {
	return (
		useSelect(
			(select) => {
				const postType = blockPostType || 'post';

				const editorStore = select('core/editor') as
					| {
							getCurrentPostType?: () => string;
							getEditedPostSlug?: () => string;
							getEditedPostAttribute?: (key: string) => unknown;
							getCurrentPostId?: () => number | string;
					  }
					| undefined;

				const currentPostType = editorStore?.getCurrentPostType?.() ?? '';
				if (currentPostType === postType) {
					return true;
				}

				const slugCandidates: string[] = [];
				const editedSlug = editorStore?.getEditedPostSlug?.();
				if (typeof editedSlug === 'string' && '' !== editedSlug) {
					slugCandidates.push(editedSlug);
				}
				const attrSlug = editorStore?.getEditedPostAttribute?.('slug');
				if (typeof attrSlug === 'string' && '' !== attrSlug) {
					slugCandidates.push(attrSlug);
				}

				const siteStore = select('core/edit-site') as
					| {
							getEditedPostId?: () => string | number;
							getEditedPostType?: () => string;
							getEditedPostSlug?: () => string;
					  }
					| undefined;

				const editedTemplateId = siteStore?.getEditedPostId?.();
				if (
					(typeof editedTemplateId === 'string' || typeof editedTemplateId === 'number') &&
					'' !== String(editedTemplateId)
				) {
					slugCandidates.push(String(editedTemplateId));
				}
				const siteSlug = siteStore?.getEditedPostSlug?.();
				if (typeof siteSlug === 'string' && '' !== siteSlug) {
					slugCandidates.push(siteSlug);
				}

				const coreStore = select('core') as
					| {
							getEntityRecord?: (
								kind: string,
								name: string,
								id: number | string,
							) => { slug?: string } | undefined;
					  }
					| undefined;

				const templateEntityId =
					editedTemplateId ?? editorStore?.getCurrentPostId?.();
				if (
					coreStore?.getEntityRecord &&
					(typeof templateEntityId === 'string' || typeof templateEntityId === 'number') &&
					('wp_template' === currentPostType ||
						siteStore?.getEditedPostType?.() === 'wp_template')
				) {
					const record = coreStore.getEntityRecord(
						'postType',
						'wp_template',
						templateEntityId,
					);
					if (typeof record?.slug === 'string' && '' !== record.slug) {
						slugCandidates.push(record.slug);
					}
				}

				return slugCandidates.some((candidate) =>
					isSingleTemplateSlug(candidate, postType),
				);
			},
			[blockPostType],
		) ?? false
	);
}

interface EditProps {
	attributes: BlogListCarouselAttributes;
	setAttributes: (attrs: Partial<BlogListCarouselAttributes>) => void;
}

const orderByOptions = [
	{ label: __('Publish date', 'nextora'), value: 'date' },
	{ label: __('Last modified', 'nextora'), value: 'modified' },
	{ label: __('Title', 'nextora'), value: 'title' },
	{ label: __('Random', 'nextora'), value: 'rand' },
	{ label: __('Menu order', 'nextora'), value: 'menu_order' },
	{ label: __('Comment count', 'nextora'), value: 'comment_count' },
];

const orderOptions = [
	{ label: __('Newest first', 'nextora'), value: 'desc' },
	{ label: __('Oldest first', 'nextora'), value: 'asc' },
];

const imageRatioOptions = [
	{ label: __('16:9 (wide)', 'nextora'), value: '16-9' },
	{ label: __('16:10', 'nextora'), value: '16-10' },
	{ label: __('4:3', 'nextora'), value: '4-3' },
	{ label: __('3:2', 'nextora'), value: '3-2' },
	{ label: __('1:1 (square)', 'nextora'), value: '1-1' },
];

const imageSizeOptions = [
	{ label: __('Medium Large (recommended)', 'nextora'), value: 'medium_large' },
	{ label: __('Large', 'nextora'), value: 'large' },
	{ label: __('Medium', 'nextora'), value: 'medium' },
	{ label: __('Thumbnail', 'nextora'), value: 'thumbnail' },
	{ label: __('Full', 'nextora'), value: 'full' },
];

const cardLinkOptions = [
	{ label: __('Full card is a link', 'nextora'), value: 'full-card' },
	{ label: __('Title only links', 'nextora'), value: 'title-only' },
	{ label: __('Read more button only', 'nextora'), value: 'read-more' },
];

const titleFontSizeOptions = [
	{ label: __('Theme default', 'nextora'), value: '' },
	{ label: __('Small', 'nextora'), value: 'small' },
	{ label: __('Base', 'nextora'), value: 'base' },
	{ label: __('Medium', 'nextora'), value: 'medium' },
	{ label: __('Large', 'nextora'), value: 'large' },
	{ label: __('Extra Large', 'nextora'), value: 'x-large' },
	{ label: __('2XL', 'nextora'), value: 'xx-large' },
];

const arrowStyleOptions = [
	{ label: __('Minimal', 'nextora'), value: 'minimal' },
	{ label: __('Circle', 'nextora'), value: 'circle' },
	{ label: __('Square', 'nextora'), value: 'square' },
];

const layoutModeOptions = [
	{ label: __('Carousel', 'nextora'), value: 'carousel' },
	{ label: __('Grid', 'nextora'), value: 'grid' },
];

export default function BlogListCarouselEdit({ attributes, setAttributes }: EditProps) {
	const colorPalette = useThemeColorPalette();
	const lookupPalette = useMemo(() => getMergedPaletteEntries(colorPalette), [colorPalette]);

	const {
		cardTemplate: cardTemplateRaw = 'default',
		layoutMode = 'carousel',
		gridColumns = 3,
		gridColumnGap = 24,
		gridRowGap = 24,
		postType = 'post',
		postsPerPage = 6,
		orderBy = 'date',
		order = 'desc',
		categories = [],
		queryRelated = false,
		tags = [],
		taxonomyQuery = '',
		taxonomyTerms = [],
		excludeIds = '',
		offset = 0,
		ignoreSticky = true,
		showImage = true,
		imageAspectRatio = '4-3',
		imageSize = 'medium_large',
		imageBorderRadius = 8,
		imageWidthPercent = 40,
		showTitle = true,
		titleFontSize = '',
		titleLineClamp = 2,
		showExcerpt = true,
		excerptLineClamp = 3,
		excerptLength = 120,
		showDate = true,
		dateFormat = 'd M Y',
		showCategory = true,
		showAuthor = false,
		showReadMore = false,
		readMoreText = 'Read More',
		cardLinkBehavior = 'full-card',
		slidesPerView = 3,
		slidesPerViewTablet = 2,
		slidesPerViewMobile = 1.15,
		spaceBetween = 24,
		speed = 500,
		loop = false,
		autoplay = false,
		autoplayDelay = 5000,
		pauseOnHover = true,
		showPagination = true,
		showArrows = false,
		arrowStyle = 'minimal',
		freeMode = false,
		grabCursor = true,
		cardTitleColor = '',
		cardExcerptColor = '',
		cardMetaColor = '',
		cardBackgroundColor = '',
		cardBorderColor = '',
		cardBorderRadius = 0,
		cardPadding = 0,
		readMoreLinkColor = '',
		paginationColor = '',
		paginationActiveColor = '',
		arrowColor = '',
		enableScrollAnimation = true,
		scrollAnimationStyle = 'default',
	} = attributes;

	const cardTemplate = normalizeCardTemplate(cardTemplateRaw);
	const templateOptions = BLOG_LIST_TEMPLATE_OPTIONS.map((option) => ({
		label: __(option.labelKey, 'nextora'),
		value: option.value,
	}));

	const isSingleContext = useIsSinglePostContext(postType);

	useEffect(() => {
		if (queryRelated && !isSingleContext) {
			setAttributes({ queryRelated: false });
		}
	}, [queryRelated, isSingleContext, setAttributes]);

	const setThemeColor = (key: keyof BlogListCarouselAttributes, value: string | undefined): void => {
		setAttributes({ [key]: normalizeColorForStorage(value, lookupPalette) } as Partial<BlogListCarouselAttributes>);
	};

	const titleFontSizeCSS =
		titleFontSize && ['small', 'base', 'medium', 'large', 'x-large', 'xx-large'].includes(titleFontSize)
			? `var(--wp--preset--font-size--${titleFontSize})`
			: undefined;

	const blockProps = useBlockProps({
		className: 'nextora-blog-list-carousel-block--editor',
		style: {
			'--nextora-blc-grid-cols': gridColumns,
			'--nextora-blc-gap': `${spaceBetween}px`,
			'--nextora-blc-grid-column-gap': `${gridColumnGap}px`,
			'--nextora-blc-grid-row-gap': `${gridRowGap}px`,
			'--nextora-blc-card-radius': `${cardBorderRadius}px`,
			'--nextora-blc-card-padding': `${cardPadding}px`,
			'--nextora-blc-img-col-width': `${imageWidthPercent}%`,
			'--nextora-blc-img-col-gap': '24px',
			'--nextora-blc-title-font-size': titleFontSizeCSS,
		} as React.CSSProperties,
	});

	return (
		<>
			<InspectorControls>
				{/* ── Query / Data Source ── */}
				<PanelBody title={__('Query / Data Source', 'nextora')} initialOpen>
					<TextControl
						label={__('Post type', 'nextora')}
						value={postType}
						onChange={(v) => setAttributes({ postType: v })}
						help={__('Enter a registered post type slug (e.g. "post", "page", or a CPT).', 'nextora')}
					/>
					<RangeControl
						label={__('Posts per page', 'nextora')}
						value={postsPerPage}
						onChange={(v) => setAttributes({ postsPerPage: v ?? 6 })}
						min={1}
						max={24}
					/>
					<SelectControl
						label={__('Order by', 'nextora')}
						value={orderBy}
						options={orderByOptions}
						onChange={(v) => setAttributes({ orderBy: v })}
					/>
					<SelectControl
						label={__('Order', 'nextora')}
						value={order}
						options={orderOptions}
						onChange={(v) => setAttributes({ order: v })}
					/>
					<ToggleControl
						label={__('Query related', 'nextora')}
						checked={queryRelated}
						disabled={!isSingleContext}
						onChange={(v) => setAttributes({ queryRelated: v })}
						help={
							isSingleContext
								? __(
										'On single posts, load other posts from the same categories and exclude the current post. Category IDs below are ignored.',
										'nextora',
									)
								: __(
										'Available only when editing a single post or the single post template.',
										'nextora',
									)
						}
					/>
					<TextControl
						label={__('Category IDs', 'nextora')}
						value={
							Array.isArray(categories) && categories.length > 0
								? categories.join(', ')
								: ''
						}
						onChange={(v) =>
							setAttributes({
								categories: v
									? v.split(',').map((s) => parseInt(s.trim(), 10)).filter((n) => n > 0)
									: [],
							})
						}
						disabled={queryRelated}
						help={
							queryRelated
								? __('Disabled while Query related is on.', 'nextora')
								: __('Comma-separated category IDs. Empty = all categories.', 'nextora')
						}
					/>
					<TextControl
						label={__('Tag IDs', 'nextora')}
						value={
							Array.isArray(tags) && tags.length > 0
								? tags.join(', ')
								: ''
						}
						onChange={(v) =>
							setAttributes({
								tags: v
									? v.split(',').map((s) => parseInt(s.trim(), 10)).filter((n) => n > 0)
									: [],
							})
						}
						help={__('Comma-separated tag IDs. Empty = all tags.', 'nextora')}
					/>
					<TextControl
						label={__('Custom taxonomy slug', 'nextora')}
						value={taxonomyQuery}
						onChange={(v) => setAttributes({ taxonomyQuery: v })}
						help={__('Enter a custom taxonomy slug for advanced filtering.', 'nextora')}
					/>
					{taxonomyQuery && (
						<TextControl
							label={__('Taxonomy term slugs', 'nextora')}
							value={
								Array.isArray(taxonomyTerms) && taxonomyTerms.length > 0
									? taxonomyTerms.join(', ')
									: ''
							}
							onChange={(v) =>
								setAttributes({
									taxonomyTerms: v
										? v.split(',').map((s) => s.trim()).filter(Boolean)
										: [],
								})
							}
							help={__('Comma-separated term slugs.', 'nextora')}
						/>
					)}
					<TextControl
						label={__('Exclude post IDs', 'nextora')}
						value={excludeIds}
						onChange={(v) => setAttributes({ excludeIds: v })}
						help={__('Comma-separated post IDs to exclude from results.', 'nextora')}
					/>
					<RangeControl
						label={__('Offset', 'nextora')}
						value={offset}
						onChange={(v) => setAttributes({ offset: v ?? 0 })}
						min={0}
						max={20}
						help={__('Number of posts to skip from the start.', 'nextora')}
					/>
					<ToggleControl
						label={__('Ignore sticky posts', 'nextora')}
						checked={ignoreSticky}
						onChange={(v) => setAttributes({ ignoreSticky: v })}
					/>
				</PanelBody>

				{/* ── Card Content ── */}
			<PanelBody title={__('Card Content', 'nextora')} initialOpen={false}>
					<RangeControl
						label={__('Card border radius', 'nextora')}
						value={cardBorderRadius}
						onChange={(v) => setAttributes({ cardBorderRadius: v ?? 0 })}
						min={0}
						max={cardTemplate === 'template-1' ? 32 : cardTemplate === 'template-2' ? 12 : 24}
					/>
					<RangeControl
						label={__('Card inner padding', 'nextora')}
						value={cardPadding}
						onChange={(v) => setAttributes({ cardPadding: v ?? 0 })}
						min={0}
						max={cardTemplate === 'template-1' ? 32 : cardTemplate === 'template-2' ? 12 : 24}
					/>
				<ToggleControl
					label={__('Show featured image', 'nextora')}
					checked={showImage}
					onChange={(v) => setAttributes({ showImage: v })}
				/>
				{showImage && (
					<>
						<SelectControl
							label={__('Image aspect ratio', 'nextora')}
							value={imageAspectRatio}
							options={imageRatioOptions}
							onChange={(v) => setAttributes({ imageAspectRatio: v })}
						/>
						<SelectControl
							label={__('Image size', 'nextora')}
							value={imageSize}
							options={imageSizeOptions}
							onChange={(v) => setAttributes({ imageSize: v })}
						/>
						<RangeControl
							label={__('Image border radius', 'nextora')}
							value={imageBorderRadius}
							onChange={(v) => setAttributes({ imageBorderRadius: v ?? 8 })}
							min={0}
							max={24}
						/>
					</>
				)}
					<ToggleControl
						label={__('Show title', 'nextora')}
						checked={showTitle}
						onChange={(v) => setAttributes({ showTitle: v })}
					/>
					{showTitle && (
						<>
							<SelectControl
								label={__('Title font size', 'nextora')}
								value={titleFontSize}
								options={titleFontSizeOptions}
								onChange={(v) => setAttributes({ titleFontSize: v })}
								help={__('Overrides the default card title size.', 'nextora')}
							/>
							<RangeControl
								label={__('Title line clamp', 'nextora')}
								value={titleLineClamp}
								onChange={(v) => setAttributes({ titleLineClamp: v ?? 2 })}
								min={1}
								max={4}
							/>
						</>
					)}
					<ToggleControl
						label={__('Show excerpt', 'nextora')}
						checked={showExcerpt}
						onChange={(v) => setAttributes({ showExcerpt: v })}
					/>
					{showExcerpt && (
						<>
							<RangeControl
								label={__('Excerpt line clamp', 'nextora')}
								value={excerptLineClamp}
								onChange={(v) => setAttributes({ excerptLineClamp: v ?? 3 })}
								min={1}
								max={5}
							/>
							<RangeControl
								label={__('Excerpt length (chars)', 'nextora')}
								value={excerptLength}
								onChange={(v) => setAttributes({ excerptLength: v ?? 120 })}
								min={40}
								max={300}
							/>
						</>
					)}
					<ToggleControl
						label={__('Show date', 'nextora')}
						checked={showDate}
						onChange={(v) => setAttributes({ showDate: v })}
					/>
					{showDate && (
						<TextControl
							label={__('Date format', 'nextora')}
							value={dateFormat}
							onChange={(v) => setAttributes({ dateFormat: v })}
							help={__('PHP date format (e.g. "d M Y", "F j, Y").', 'nextora')}
						/>
					)}
					<ToggleControl
						label={__('Show category badge', 'nextora')}
						checked={showCategory}
						onChange={(v) => setAttributes({ showCategory: v })}
					/>
					<ToggleControl
						label={__('Show author', 'nextora')}
						checked={showAuthor}
						onChange={(v) => setAttributes({ showAuthor: v })}
					/>
					<ToggleControl
						label={__('Show "Read More"', 'nextora')}
						checked={showReadMore}
						onChange={(v) => setAttributes({ showReadMore: v })}
					/>
					{showReadMore && (
						<TextControl
							label={__('"Read More" text', 'nextora')}
							value={readMoreText}
							onChange={(v) => setAttributes({ readMoreText: v })}
							placeholder={__('Read More', 'nextora')}
						/>
					)}
					<SelectControl
						label={__('Card link behaviour', 'nextora')}
						value={cardLinkBehavior}
						options={cardLinkOptions}
						onChange={(v) => setAttributes({ cardLinkBehavior: v })}
						help={__('How clicking/tapping a card works.', 'nextora')}
					/>
				</PanelBody>

			{/* ── Layout ── */}
			<PanelBody title={__('Layout', 'nextora')} initialOpen={false}>
				<SelectControl
					label={__('Template', 'nextora')}
					value={cardTemplate}
					options={templateOptions}
					onChange={(value) => {
						const next = normalizeCardTemplate(value);
						if (next === cardTemplate) {
							return;
						}
						setAttributes({
							cardTemplate: next,
							...getTemplateDefaultAttributes(next),
						});
					}}
				/>
				{cardTemplate !== 'template-4' && (
					<SelectControl
						label={__('Desktop layout', 'nextora')}
						help={
							layoutMode === 'grid'
								? __(
										'Desktop shows a grid; tablet and mobile use a carousel.',
										'nextora',
									)
								: __(
										'All screen sizes use a carousel.',
										'nextora',
									)
						}
						value={layoutMode}
						options={layoutModeOptions}
						onChange={(v) =>
							setAttributes({ layoutMode: v === 'grid' ? 'grid' : 'carousel' })
						}
					/>
				)}
				{layoutMode === 'grid' ? (
					<>
						{cardTemplate !== 'template-2' && (
							<RangeControl
								label={__('Grid columns', 'nextora')}
								value={gridColumns}
								onChange={(v) => setAttributes({ gridColumns: v ?? 3 })}
								min={1}
								max={6}
							/>
						)}
						{cardTemplate !== 'template-2' && (
							<RangeControl
								label={__('Column gap (px)', 'nextora')}
								value={gridColumnGap}
								onChange={(v) => setAttributes({ gridColumnGap: v ?? 24 })}
								min={0}
								max={60}
							/>
						)}
						<RangeControl
							label={__('Row gap (px)', 'nextora')}
							value={gridRowGap}
							onChange={(v) => setAttributes({ gridRowGap: v ?? 24 })}
							min={0}
							max={60}
						/>
						{cardTemplate === 'template-2' && (
							<RangeControl
								label={__('Image width (%)', 'nextora')}
								value={imageWidthPercent}
								onChange={(v) =>
									setAttributes({ imageWidthPercent: v ?? 40 })
								}
								min={20}
								max={60}
								help={__(
									'Width of the image column as a percentage of the card.',
									'nextora',
								)}
							/>
						)}
					</>
				) : null}
			</PanelBody>

				{/* ── Carousel Settings ── */}
				<PanelBody title={layoutMode === 'grid' ? __('Carousel (tablet & mobile)', 'nextora') : __('Carousel Settings', 'nextora')} initialOpen={false}>
					{layoutMode === 'carousel' ? (
						<RangeControl
							label={__('Desktop slides', 'nextora')}
							value={slidesPerView}
							onChange={(v) => setAttributes({ slidesPerView: v ?? 3 })}
							min={1}
							max={5}
						/>
					) : null}
					<RangeControl
						label={__('Tablet slides', 'nextora')}
						value={slidesPerViewTablet}
						onChange={(v) => setAttributes({ slidesPerViewTablet: v ?? 2 })}
						min={1}
						max={4}
						step={0.5}
					/>
					<RangeControl
						label={__('Mobile slides', 'nextora')}
						value={slidesPerViewMobile}
						onChange={(v) => setAttributes({ slidesPerViewMobile: v ?? 1.15 })}
						min={1}
						max={2}
						step={0.05}
					/>
					<RangeControl
						label={__('Space between', 'nextora')}
						value={spaceBetween}
						onChange={(v) => setAttributes({ spaceBetween: v ?? 24 })}
						min={0}
						max={60}
					/>
					<RangeControl
						label={__('Speed (ms)', 'nextora')}
						value={speed}
						onChange={(v) => setAttributes({ speed: v ?? 500 })}
						min={100}
						max={2000}
						step={100}
					/>
					<ToggleControl
						label={__('Infinite loop', 'nextora')}
						checked={loop}
						onChange={(v) => setAttributes({ loop: v })}
						help={__('Requires at least 4 slides.', 'nextora')}
					/>
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

				{/* ── Autoplay ── */}
				{!(cardTemplate === 'template-2' && layoutMode === 'grid') && cardTemplate !== 'template-4' && (
				<PanelBody title={__('Autoplay', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Enable autoplay', 'nextora')}
						checked={autoplay}
						onChange={(v) => setAttributes({ autoplay: v })}
					/>
					{autoplay && (
						<>
							<RangeControl
								label={__('Delay (ms)', 'nextora')}
								value={autoplayDelay}
								onChange={(v) => setAttributes({ autoplayDelay: v ?? 5000 })}
								min={2000}
								max={12000}
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
				)}

				{/* ── Pagination & Arrows ── */}
				{!(cardTemplate === 'template-2' && layoutMode === 'grid') && cardTemplate !== 'template-4' && (
				<PanelBody title={__('Pagination & Arrows', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Show pagination dots', 'nextora')}
						checked={showPagination}
						onChange={(v) => setAttributes({ showPagination: v })}
					/>
					<ToggleControl
						label={__('Show arrows', 'nextora')}
						checked={showArrows}
						onChange={(v) => setAttributes({ showArrows: v })}
					/>
					{showArrows && (
						<SelectControl
							label={__('Arrow style', 'nextora')}
							value={arrowStyle}
							options={arrowStyleOptions}
							onChange={(v) => setAttributes({ arrowStyle: v })}
						/>
					)}
				</PanelBody>
				)}

				{/* ── Colors ── */}
				<PanelColorSettings
					enableAlpha
					title={__('Colors', 'nextora')}
					colors={colorPalette}
					colorSettings={[
						{
							value: colorValueForPicker(cardTitleColor, colorPalette, lookupPalette),
							onChange: (v) => setThemeColor('cardTitleColor', v),
							label: __('Card title', 'nextora'),
						},
						{
							value: colorValueForPicker(cardExcerptColor, colorPalette, lookupPalette),
							onChange: (v) => setThemeColor('cardExcerptColor', v),
							label: __('Excerpt text', 'nextora'),
						},
						{
							value: colorValueForPicker(cardMetaColor, colorPalette, lookupPalette),
							onChange: (v) => setThemeColor('cardMetaColor', v),
							label: __('Date / category', 'nextora'),
						},
						{
							value: colorValueForPicker(cardBackgroundColor, colorPalette, lookupPalette),
							onChange: (v) => setThemeColor('cardBackgroundColor', v),
							label: __('Card background', 'nextora'),
						},
						...(cardTemplate === 'template-1'
							? [
									{
										value: colorValueForPicker(cardBorderColor, colorPalette, lookupPalette),
										onChange: (v: string | undefined) =>
											setThemeColor('cardBorderColor', v),
										label: __('Card border color', 'nextora'),
									},
								]
							: []),
						...(showReadMore
							? [
									{
										value: colorValueForPicker(readMoreLinkColor, colorPalette, lookupPalette),
										onChange: (v: string | undefined) =>
											setThemeColor('readMoreLinkColor', v),
										label: __('"Read More" link', 'nextora'),
									},
								]
							: []),
						...(showPagination
							? [
									{
										value: colorValueForPicker(paginationColor, colorPalette, lookupPalette),
										onChange: (v: string | undefined) =>
											setThemeColor('paginationColor', v),
										label: __('Pagination dot', 'nextora'),
									},
									{
										value: colorValueForPicker(paginationActiveColor, colorPalette, lookupPalette),
										onChange: (v: string | undefined) =>
											setThemeColor('paginationActiveColor', v),
										label: __('Active dot', 'nextora'),
									},
								]
							: []),
						...(showArrows
							? [
									{
										value: colorValueForPicker(arrowColor, colorPalette, lookupPalette),
										onChange: (v: string | undefined) =>
											setThemeColor('arrowColor', v),
										label: __('Arrow color', 'nextora'),
									},
								]
							: []),
					]}
				/>

				{/* ── Animation ── */}
				<PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Animate on scroll', 'nextora')}
						help={__(
							'Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.',
							'nextora',
						)}
						checked={enableScrollAnimation !== false}
						onChange={(v) => setAttributes({ enableScrollAnimation: v })}
					/>
					{enableScrollAnimation !== false && (
						<SelectControl
							label={__('Animation style', 'nextora')}
							value={scrollAnimationStyle}
							options={[
								{ label: __('Default (section fade-in)', 'nextora'), value: 'default' },
								{ label: __('Sequential (stagger per card)', 'nextora'), value: 'sequential' },
							]}
							onChange={(v) =>
								setAttributes({ scrollAnimationStyle: v as 'default' | 'sequential' })
							}
						/>
					)}
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<Disabled>
					<ServerSideRender
						block="nextora/blog-list-carousel"
						attributes={attributes as unknown as Record<string, unknown>}
					/>
				</Disabled>
			</div>
		</>
	);
}
