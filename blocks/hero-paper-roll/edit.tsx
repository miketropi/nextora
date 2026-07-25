import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  useInnerBlocksProps,
  InspectorControls,
} from '@wordpress/block-editor';
import type { TemplateArray } from '@wordpress/blocks';
import {
  PanelBody,
  RangeControl,
  ColorPalette,
  SelectControl,
} from '@wordpress/components';
import type { BlockEditProps } from '@wordpress/blocks';

interface Attributes {
  minHeight: string;
  bgOverlayColor: string;
  bgOverlayOpacity: number;
  contentMaxWidth: string;
}

const ALLOWED_BLOCKS = [
  'core/heading',
  'core/paragraph',
  'core/buttons',
  'core/button',
  'core/group',
  'core/image',
  'core/spacer',
  'core/separator',
];

const TEMPLATE: TemplateArray = [
  ['core/heading', {
    level: 1,
    placeholder: __('Hero title\u2026', 'nextora'),
  }],
  ['core/paragraph', {
    placeholder: __('Add supporting text\u2026', 'nextora'),
  }],
  ['core/buttons', {}, [
    ['core/button', { text: __('Get started', 'nextora') }],
  ] as unknown as TemplateArray],
];

export default function HeroPaperRollEdit({ attributes, setAttributes }: BlockEditProps<Attributes>) {
  const { minHeight, bgOverlayColor, bgOverlayOpacity, contentMaxWidth } = attributes;

  const maxWidthMap: Record<string, string> = {
    content: 'var(--wp--style--global--content-size, 780px)',
    wide: 'var(--wp--style--global--wide-size, 1200px)',
    full: 'none',
  };
  const computedMaxWidth = maxWidthMap[contentMaxWidth || 'content'] ?? maxWidthMap.content;

  const blockProps = useBlockProps({
    className: 'wp-block-nextora-hero-paper-roll--editor',
    style: {
      minHeight: minHeight || '100vh',
    },
  });

  const overlayClass = `hero-paper-roll__overlay hero-paper-roll__overlay--max-${contentMaxWidth || 'content'}`;

  const innerBlocksProps = useInnerBlocksProps(
    {
      className: overlayClass,
      style: { '--hero-paper-roll--content-max-width': computedMaxWidth } as React.CSSProperties,
    },
    {
      template: TEMPLATE,
      templateLock: false,
      allowedBlocks: ALLOWED_BLOCKS,
    },
  );

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Hero Height', 'nextora')} initialOpen>
          <RangeControl
            label={__('Minimum height (vh)', 'nextora')}
            help={__(
              'Sets the minimum height of the hero section in viewport height units.',
              'nextora',
            )}
            value={parseInt(minHeight, 10) || 100}
            onChange={(v: number | undefined) =>
              setAttributes({ minHeight: v ? `${v}vh` : '100vh' })
            }
            min={50}
            max={150}
            step={5}
          />
          <SelectControl
            label={__('Content width', 'nextora')}
            value={(contentMaxWidth || 'content') as 'content' | 'wide' | 'full'}
            options={[
              { label: __('Content width', 'nextora'), value: 'content' },
              { label: __('Wide width', 'nextora'), value: 'wide' },
              { label: __('Full width', 'nextora'), value: 'full' },
            ]}
            onChange={(v: string) => setAttributes({ contentMaxWidth: v })}
          />
        </PanelBody>
        <PanelBody title={__('Background Overlay', 'nextora')} initialOpen={false}>
          <ColorPalette
            value={bgOverlayColor || '#000000'}
            onChange={(v?: string) => setAttributes({ bgOverlayColor: v || '#000000' })}
          />
          <RangeControl
            label={__('Overlay opacity (%)', 'nextora')}
            help={__(
              'Darkens or tints the 3D paper-roll background. Higher values improve text readability.',
              'nextora',
            )}
            value={bgOverlayOpacity ?? 0}
            onChange={(v: number | undefined) =>
              setAttributes({ bgOverlayOpacity: v ?? 0 })
            }
            min={0}
            max={80}
            step={5}
          />
        </PanelBody>
        <PanelBody title={__('About this block', 'nextora')} initialOpen={false}>
          <p style={{ color: '#757575' }}>
            {__(
              'A 3D paper-roll animation plays in the background on the front end. Add headings, text, and buttons in the overlay area above. The animation respects reduced-motion preferences.',
              'nextora',
            )}
          </p>
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="hero-paper-roll__canvas-placeholder">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <rect x="8" y="14" width="44" height="6" rx="3" fill="#c5c5ca" />
            <rect x="8" y="24" width="38" height="4" rx="2" fill="#d4d4d8" />
            <rect x="8" y="32" width="42" height="4" rx="2" fill="#d4d4d8" />
            <rect x="8" y="40" width="32" height="4" rx="2" fill="#d4d4d8" />
            <circle cx="48" cy="45" r="10" fill="#eaeaec" stroke="#c5c5ca" strokeWidth="2" />
          </svg>
          <span>{__('Paper Roll Background', 'nextora')}</span>
        </div>
        {(bgOverlayOpacity ?? 0) > 0 && (
          <div
            className="hero-paper-roll__bg-overlay"
            style={{
              backgroundColor: bgOverlayColor || '#000000',
              opacity: (bgOverlayOpacity ?? 0) / 100,
            }}
          />
        )}
        <div {...innerBlocksProps} />
      </div>
    </>
  );
}
