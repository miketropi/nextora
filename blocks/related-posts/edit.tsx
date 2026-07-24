import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  InspectorControls,
} from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
  SelectControl,
  ToggleControl,
  RangeControl,
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import ServerSideRender from '@wordpress/server-side-render';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const HEADING_LEVEL_OPTIONS = [
  { label: __('H2', 'nextora'), value: 'h2' },
  { label: __('H3', 'nextora'), value: 'h3' },
  { label: __('H4', 'nextora'), value: 'h4' },
];

const RELATED_BY_OPTIONS = [
  { label: __('Category', 'nextora'), value: 'category' },
  { label: __('Tag', 'nextora'), value: 'tag' },
  { label: __('Both', 'nextora'), value: 'both' },
];

const ORDER_BY_OPTIONS = [
  { label: __('Date', 'nextora'), value: 'date' },
  { label: __('Random', 'nextora'), value: 'rand' },
  { label: __('Comment count', 'nextora'), value: 'comment_count' },
  { label: __('Last modified', 'nextora'), value: 'modified' },
];

const ORDER_OPTIONS = [
  { label: __('Descending', 'nextora'), value: 'DESC' },
  { label: __('Ascending', 'nextora'), value: 'ASC' },
];

// ---------------------------------------------------------------------------
// Skeleton placeholder
// ---------------------------------------------------------------------------

function SkeletonCard() {
  return (
    <div className="nextora-related-posts__skeleton-card">
      <div className="nextora-related-posts__skeleton-image" />
      <div className="nextora-related-posts__skeleton-body">
        <div className="nextora-related-posts__skeleton-line nextora-related-posts__skeleton-line--title" />
        <div className="nextora-related-posts__skeleton-line nextora-related-posts__skeleton-line--meta" />
        <div className="nextora-related-posts__skeleton-line nextora-related-posts__skeleton-line--text" />
      </div>
    </div>
  );
}

function SkeletonPlaceholder({ count }: { count: number }) {
  return (
    <div className="nextora-related-posts__skeleton">
      {Array.from({ length: count }, (_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function RelatedPostsEdit({ attributes, setAttributes }: any) {
  const heading = attributes.heading as string;
  const headingLevel = attributes.headingLevel as string;
  const postsToShow = attributes.postsToShow as number;
  const relatedBy = attributes.relatedBy as string;
  const orderBy = attributes.orderBy as string;
  const order = attributes.order as string;
  const showFeaturedImage = attributes.showFeaturedImage as boolean;
  const showDate = attributes.showDate as boolean;
  const showExcerpt = attributes.showExcerpt as boolean;
  const excerptLength = attributes.excerptLength as number;

  const [loading, setLoading] = useState(true);

  // Reset loading when attributes change (e.g. layout switch).
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, [
    heading, headingLevel, postsToShow, relatedBy,
    orderBy, order, showFeaturedImage, showDate,
    showExcerpt, excerptLength,
  ]);

  const blockProps = useBlockProps();

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Content', 'nextora')} initialOpen>
          <TextControl
            label={__('Heading', 'nextora')}
            value={heading}
            onChange={(v) => setAttributes({ heading: v })}
          />
          <SelectControl
            label={__('Heading level', 'nextora')}
            value={headingLevel}
            options={HEADING_LEVEL_OPTIONS}
            onChange={(v) => setAttributes({ headingLevel: v })}
          />
          <RangeControl
            label={__('Posts to show', 'nextora')}
            value={postsToShow}
            onChange={(v) => setAttributes({ postsToShow: v ?? 3 })}
            min={1}
            max={12}
            __next40pxDefaultSize
          />
        </PanelBody>

        <PanelBody title={__('Query', 'nextora')} initialOpen={false}>
          <SelectControl
            label={__('Related by', 'nextora')}
            help={__('Match posts that share categories, tags, or both with the current post.', 'nextora')}
            value={relatedBy}
            options={RELATED_BY_OPTIONS}
            onChange={(v) => setAttributes({ relatedBy: v })}
          />
          <SelectControl
            label={__('Order by', 'nextora')}
            value={orderBy}
            options={ORDER_BY_OPTIONS}
            onChange={(v) => setAttributes({ orderBy: v })}
          />
          <SelectControl
            label={__('Order', 'nextora')}
            value={order}
            options={ORDER_OPTIONS}
            onChange={(v) => setAttributes({ order: v })}
          />
        </PanelBody>

        <PanelBody title={__('Display', 'nextora')} initialOpen={false}>
          <ToggleControl
            label={__('Show featured image', 'nextora')}
            checked={showFeaturedImage}
            onChange={(v) => setAttributes({ showFeaturedImage: v })}
          />
          <ToggleControl
            label={__('Show date', 'nextora')}
            checked={showDate}
            onChange={(v) => setAttributes({ showDate: v })}
          />
          <ToggleControl
            label={__('Show excerpt', 'nextora')}
            checked={showExcerpt}
            onChange={(v) => setAttributes({ showExcerpt: v })}
          />
          {showExcerpt && (
            <RangeControl
              label={__('Excerpt length (words)', 'nextora')}
              value={excerptLength}
              onChange={(v) => setAttributes({ excerptLength: v ?? 20 })}
              min={8}
              max={60}
              __next40pxDefaultSize
            />
          )}
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        {loading && (
          <SkeletonPlaceholder count={Math.min(postsToShow || 3, 3)} />
        )}
        <div style={{ display: loading ? 'none' : 'block' }}>
          <ServerSideRender
            block="nextora/related-posts"
            attributes={attributes as unknown as Record<string, unknown>}
          />
        </div>
      </div>
    </>
  );
}
