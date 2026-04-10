import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
  Disabled,
  PanelBody,
  PanelRow,
  RangeControl,
  SelectControl,
  TextControl,
  ToggleControl,
} from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import type { PostGridAttributes } from './types';

interface EditProps {
  attributes: PostGridAttributes;
  setAttributes: (attrs: Partial<PostGridAttributes>) => void;
}

const orderByOptions = [
  { label: __('Publish date', 'nextora'), value: 'date' },
  { label: __('Last modified', 'nextora'), value: 'modified' },
  { label: __('Title', 'nextora'), value: 'title' },
  { label: __('Random', 'nextora'), value: 'rand' },
];

const orderOptions = [
  { label: __('Newest / Z → A first', 'nextora'), value: 'desc' },
  { label: __('Oldest / A → Z first', 'nextora'), value: 'asc' },
];

const gridGapOptions = [
  { label: __('None', 'nextora'), value: 'none' },
  { label: __('XS', 'nextora'), value: 'xs' },
  { label: __('S', 'nextora'), value: 'sm' },
  { label: __('M', 'nextora'), value: 'md' },
  { label: __('L', 'nextora'), value: 'lg' },
  { label: __('XL', 'nextora'), value: 'xl' },
];

const imageRatioOptions = [
  { label: __('16:9 (wide)', 'nextora'), value: '16-9' },
  { label: __('4:3', 'nextora'), value: '4-3' },
  { label: __('3:2', 'nextora'), value: '3-2' },
  { label: __('1:1 (square)', 'nextora'), value: '1-1' },
  { label: __('3:4 (portrait)', 'nextora'), value: '3-4' },
  { label: __('Natural height', 'nextora'), value: 'auto' },
];

const imageSizeOptions = [
  { label: __('Medium large (recommended)', 'nextora'), value: 'medium_large' },
  { label: __('Large', 'nextora'), value: 'large' },
  { label: __('Medium', 'nextora'), value: 'medium' },
  { label: __('Thumbnail', 'nextora'), value: 'thumbnail' },
  { label: __('Full', 'nextora'), value: 'full' },
];

const metaStyleOptions = [
  { label: __('Inline (wraps on small screens)', 'nextora'), value: 'inline' },
  { label: __('Stacked lines', 'nextora'), value: 'stacked' },
];

export default function PostGridEdit({ attributes, setAttributes }: EditProps) {
  const blockProps = useBlockProps({
    className: 'nextora-post-grid-block--editor',
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Heading', 'nextora')} initialOpen>
          <TextControl
            label={__('Section heading', 'nextora')}
            value={attributes.heading}
            onChange={(heading) => setAttributes({ heading })}
            placeholder={__('Optional', 'nextora')}
            help={__('Displayed above the grid on the site.', 'nextora')}
          />
        </PanelBody>
        <PanelBody title={__('Layout', 'nextora')} initialOpen={false}>
          <RangeControl
            label={__('Columns (desktop)', 'nextora')}
            value={attributes.columns}
            onChange={(columns) => setAttributes({ columns: columns ?? 3 })}
            min={1}
            max={4}
          />
          <SelectControl
            label={__('Grid gap', 'nextora')}
            value={attributes.gridGap}
            options={gridGapOptions}
            onChange={(gridGap) => setAttributes({ gridGap })}
            help={__('Space between cards in the grid.', 'nextora')}
          />
        </PanelBody>

        <PanelBody title={__('Featured image', 'nextora')} initialOpen={false}>
          <ToggleControl
            label={__('Show featured image', 'nextora')}
            checked={attributes.showFeaturedImage}
            onChange={(showFeaturedImage) => setAttributes({ showFeaturedImage })}
          />
          {attributes.showFeaturedImage && (
            <>
              <SelectControl
                label={__('Aspect ratio', 'nextora')}
                value={attributes.imageRatio}
                options={imageRatioOptions}
                onChange={(imageRatio) => setAttributes({ imageRatio })}
              />
              <SelectControl
                label={__('Image size', 'nextora')}
                value={attributes.imageSize}
                options={imageSizeOptions}
                onChange={(imageSize) => setAttributes({ imageSize })}
              />
            </>
          )}
        </PanelBody>

        <PanelBody title={__('Card content', 'nextora')} initialOpen={false}>
          <PanelRow>
            <ToggleControl
              label={__('Date', 'nextora')}
              checked={attributes.showDate}
              onChange={(showDate) => setAttributes({ showDate })}
            />
          </PanelRow>
          <PanelRow>
            <ToggleControl
              label={__('Author', 'nextora')}
              checked={attributes.showAuthor}
              onChange={(showAuthor) => setAttributes({ showAuthor })}
            />
          </PanelRow>
          <PanelRow>
            <ToggleControl
              label={__('Categories', 'nextora')}
              checked={attributes.showCategories}
              onChange={(showCategories) => setAttributes({ showCategories })}
            />
          </PanelRow>
          <PanelRow>
            <ToggleControl
              label={__('Tags', 'nextora')}
              checked={attributes.showTags}
              onChange={(showTags) => setAttributes({ showTags })}
            />
          </PanelRow>
          <SelectControl
            label={__('Meta layout', 'nextora')}
            value={attributes.metaStyle}
            options={metaStyleOptions}
            onChange={(metaStyle) => setAttributes({ metaStyle })}
          />
          <RangeControl
            label={__('Max categories & tags each', 'nextora')}
            value={attributes.maxTermsDisplay}
            onChange={(maxTermsDisplay) =>
              setAttributes({ maxTermsDisplay: maxTermsDisplay ?? 4 })
            }
            min={1}
            max={8}
          />
          <ToggleControl
            label={__('Excerpt', 'nextora')}
            checked={attributes.showExcerpt}
            onChange={(showExcerpt) => setAttributes({ showExcerpt })}
          />
          {attributes.showExcerpt && (
            <RangeControl
              label={__('Excerpt length (words)', 'nextora')}
              value={attributes.excerptWords}
              onChange={(excerptWords) =>
                setAttributes({ excerptWords: excerptWords ?? 22 })
              }
              min={8}
              max={48}
            />
          )}
        </PanelBody>

        <PanelBody title={__('Query', 'nextora')} initialOpen={false}>
          <ToggleControl
            label={__('Match current archive (category, tag, term)', 'nextora')}
            checked={attributes.inheritArchiveContext}
            onChange={(inheritArchiveContext) =>
              setAttributes({ inheritArchiveContext })
            }
            help={__(
              'On category, tag, author, search, and custom term archives, the grid limits posts to that context. Turn off to rely only on the settings below. The editor preview often cannot simulate archives.',
              'nextora'
            )}
          />
          <ToggleControl
            label={__('Pagination', 'nextora')}
            checked={attributes.enablePagination}
            onChange={(enablePagination) => setAttributes({ enablePagination })}
            help={__(
              'Show page links under the grid (uses the current URL’s page number).',
              'nextora'
            )}
          />
          <RangeControl
            label={__('Posts per page', 'nextora')}
            value={attributes.postsPerPage}
            onChange={(postsPerPage) =>
              setAttributes({ postsPerPage: postsPerPage ?? 6 })
            }
            min={1}
            max={attributes.enablePagination ? 48 : 24}
          />
          <SelectControl
            label={__('Sort by', 'nextora')}
            value={attributes.orderBy}
            options={orderByOptions}
            onChange={(orderBy) => setAttributes({ orderBy })}
          />
          <SelectControl
            label={__('Order', 'nextora')}
            value={attributes.order}
            options={orderOptions}
            onChange={(order) => setAttributes({ order })}
          />
          <TextControl
            label={__('Category IDs (optional)', 'nextora')}
            value={attributes.categoryIds}
            onChange={(categoryIds) => setAttributes({ categoryIds })}
            help={__(
              'Comma-separated numeric IDs. Ignored on category archives when “Match current archive” is on.',
              'nextora'
            )}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <Disabled>
          <ServerSideRender
            block="nextora/post-grid"
            attributes={attributes as unknown as Record<string, unknown>}
          />
        </Disabled>
      </div>
    </>
  );
}
