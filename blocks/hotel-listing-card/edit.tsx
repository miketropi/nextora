// @ts-nocheck
import { __ } from '@wordpress/i18n';
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
  useBlockProps,
} from '@wordpress/block-editor';
import {
  Button,
  PanelBody,
  RangeControl,
  TextControl,
  ToggleControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import type { HotelListingCardAttributes } from './types';
import { LocationPinIcon, StarIcon } from './icons';

interface EditProps {
  attributes: HotelListingCardAttributes;
  setAttributes: (attrs: Partial<HotelListingCardAttributes>) => void;
}

function clampRadius(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export default function HotelListingCardEdit({ attributes, setAttributes }: EditProps) {
  const {
    imageId,
    imageAlt,
    propertyName,
    price,
    priceLabel,
    location,
    rating,
    reviewCount,
    showRating,
    showLocation,
    enableScrollAnimation,
    cardBorderRadius,
    imageBorderRadius,
  } = attributes;

  const image = useSelect(
    (select) => {
      if (!imageId) {
        return null;
      }
      return (select('core') as { getMedia: (id: number) => { source_url?: string; alt_text?: string } | null }).getMedia(
        imageId,
      );
    },
    [imageId],
  );

  const blockProps = useBlockProps({
    className: 'nextora-hlc',
    style: {
      '--nextora-hlc-card-radius': `${clampRadius(cardBorderRadius ?? 16, 0, 40)}px`,
      '--nextora-hlc-image-radius': `${clampRadius(imageBorderRadius ?? 12, 0, 30)}px`,
    },
  });

  const onSelectImage = (media: { id?: number; alt?: string; alt_text?: string }) => {
    const id = media?.id ? Number(media.id) : 0;
    const alt = media?.alt || media?.alt_text || '';
    setAttributes({
      imageId: id,
      imageAlt: alt,
    });
  };

  const onRemoveImage = () => {
    setAttributes({
      imageId: 0,
      imageAlt: '',
    });
  };

  const hasMetaRow = (showLocation !== false && location) || (showRating !== false && rating);

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Settings', 'nextora')} initialOpen>
          <ToggleControl
            label={__('Show location', 'nextora')}
            checked={showLocation !== false}
            onChange={(value: boolean) => setAttributes({ showLocation: value })}
          />
          <ToggleControl
            label={__('Show rating', 'nextora')}
            checked={showRating !== false}
            onChange={(value: boolean) => setAttributes({ showRating: value })}
          />
          <TextControl
            label={__('Image alt text', 'nextora')}
            help={__('Describe the property photo for screen readers.', 'nextora')}
            value={imageAlt || ''}
            onChange={(value: string) => setAttributes({ imageAlt: value })}
          />
        </PanelBody>

        <PanelBody title={__('Appearance', 'nextora')} initialOpen={false}>
          <RangeControl
            label={__('Card corner radius', 'nextora')}
            help={__('Rounded corners for the card container.', 'nextora')}
            value={cardBorderRadius ?? 16}
            onChange={(value: number | undefined) =>
              setAttributes({ cardBorderRadius: clampRadius(value ?? 16, 0, 40) })
            }
            min={0}
            max={40}
          />
          <RangeControl
            label={__('Image corner radius', 'nextora')}
            help={__('Rounded corners for the hero image.', 'nextora')}
            value={imageBorderRadius ?? 12}
            onChange={(value: number | undefined) =>
              setAttributes({ imageBorderRadius: clampRadius(value ?? 12, 0, 30) })
            }
            min={0}
            max={30}
          />
        </PanelBody>

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

      <div {...blockProps}>
        <article className="nextora-hlc__card">
          <div className="nextora-hlc__media">
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectImage}
                allowedTypes={['image']}
                value={imageId || undefined}
                render={({ open }) => (
                  <>
                    {imageId && image?.source_url ? (
                      <div className="nextora-hlc__media-inner">
                        <img
                          className="nextora-hlc__image"
                          src={image.source_url}
                          alt={imageAlt || image.alt_text || ''}
                        />
                        <div className="nextora-hlc__media-actions">
                          <Button variant="secondary" onClick={open}>
                            {__('Replace', 'nextora')}
                          </Button>
                          <Button variant="link" isDestructive onClick={onRemoveImage}>
                            {__('Remove', 'nextora')}
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <Button
                        className="nextora-hlc__media-placeholder"
                        variant="secondary"
                        onClick={open}
                      >
                        {__('Upload property image', 'nextora')}
                      </Button>
                    )}
                  </>
                )}
              />
            </MediaUploadCheck>
          </div>

          <div className="nextora-hlc__body">
            <div className="nextora-hlc__row nextora-hlc__row--primary">
              <RichText
                tagName="h3"
                className="nextora-hlc__name"
                value={propertyName}
                onChange={(value: string) => setAttributes({ propertyName: value })}
                placeholder={__('Property name', 'nextora')}
                allowedFormats={['core/bold', 'core/italic']}
              />
              <div className="nextora-hlc__price">
                <RichText
                  tagName="span"
                  className="nextora-hlc__price-value"
                  value={price}
                  onChange={(value: string) => setAttributes({ price: value })}
                  placeholder={__('$980', 'nextora')}
                  allowedFormats={[]}
                />
                <RichText
                  tagName="span"
                  className="nextora-hlc__price-label"
                  value={priceLabel}
                  onChange={(value: string) => setAttributes({ priceLabel: value })}
                  placeholder={__('/Night', 'nextora')}
                  allowedFormats={[]}
                />
              </div>
            </div>

            {hasMetaRow ? (
              <div className="nextora-hlc__row nextora-hlc__row--meta">
                {showLocation !== false ? (
                  <span className="nextora-hlc__location">
                    <LocationPinIcon />
                    <RichText
                      tagName="span"
                      className="nextora-hlc__location-text"
                      value={location}
                      onChange={(value: string) => setAttributes({ location: value })}
                      placeholder={__('City, Country', 'nextora')}
                      allowedFormats={[]}
                    />
                  </span>
                ) : (
                  <span />
                )}
                {showRating !== false ? (
                  <span className="nextora-hlc__rating">
                    <StarIcon />
                    <RichText
                      tagName="span"
                      className="nextora-hlc__rating-score"
                      value={rating}
                      onChange={(value: string) => setAttributes({ rating: value })}
                      placeholder={__('4.9', 'nextora')}
                      allowedFormats={[]}
                    />
                    <span className="nextora-hlc__rating-reviews">
                      (
                      <RichText
                        tagName="span"
                        className="nextora-hlc__review-count"
                        value={reviewCount}
                        onChange={(value: string) => setAttributes({ reviewCount: value })}
                        placeholder={__('1,982', 'nextora')}
                        allowedFormats={[]}
                      />
                      {__(' Reviews)', 'nextora')}
                    </span>
                  </span>
                ) : null}
              </div>
            ) : null}
          </div>
        </article>
      </div>
    </>
  );
}
