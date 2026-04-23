// @ts-nocheck
import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  useInnerBlocksProps,
  InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, SelectControl, Notice } from '@wordpress/components';
import { useMemo } from '@wordpress/element';

// ---------------------------------------------------------------------------
// Two root groups: copy | creative. Child blocks are set here as the *initial*
// template only (nested array = inner blocks of each group).
//
// Do not put `template` on core/group in Group’s block edit: that re-syncs and can
// strip user blocks on reload. Supplying children via *this* parent TEMPLATE is OK.
//
// `templateLock` is off so the hero does not add another “locked” layer when it
// sits inside locked columns/patterns. Only `core/group` is allowed at the root
// to keep a two-column layout; users can add/remove/reorder top-level groups.
// ---------------------------------------------------------------------------

const TEMPLATE = [
  [
    'core/group',
    {
      className: 'nextora-hero__column nextora-hero__column--content',
    },
    [
      ['core/heading', { level: 1 }],
      [
        'core/paragraph',
        { placeholder: __('Add supporting text…', 'nextora') },
      ],
    ],
  ],
  [
    'core/group',
    {
      className: 'nextora-hero__column nextora-hero__column--creative',
    },
    [
      [
        'core/paragraph',
        {
          align: 'center',
          placeholder: __('Add an image, video, or other blocks', 'nextora'),
        },
      ],
    ],
  ],
];

const COLUMN_SPLIT_OPTIONS = [
  { label: __('50% / 50%', 'nextora'), value: '50-50' },
  { label: __('40% / 60%', 'nextora'), value: '40-60' },
  { label: __('60% / 40%', 'nextora'), value: '60-40' },
  { label: __('33% / 66%', 'nextora'), value: '33-66' },
  { label: __('66% / 33%', 'nextora'), value: '66-33' },
];

const splitToCss: Record<string, string> = {
  '50-50': 'minmax(0, 1fr) minmax(0, 1fr)',
  '40-60': 'minmax(0, 2fr) minmax(0, 3fr)',
  '60-40': 'minmax(0, 3fr) minmax(0, 2fr)',
  '33-66': 'minmax(0, 1fr) minmax(0, 2fr)',
  '66-33': 'minmax(0, 2fr) minmax(0, 1fr)',
};

const alignMap: Record<string, string> = {
  top: 'start',
  center: 'center',
  bottom: 'end',
};

function buildClassName(attrs: {
  columnSplit: string;
  creativePosition: string;
  stackOrder: string;
  verticalAlign: string;
  stickyColumn: string;
}): string {
  const { creativePosition, stackOrder, columnSplit, verticalAlign, stickyColumn } = attrs;
  const parts = [
    'nextora-hero--split',
    'nextora-hero--split-' + columnSplit,
    'nextora-hero--align-v-' + verticalAlign,
    creativePosition === 'left' ? 'nextora-hero--creative-left' : 'nextora-hero--creative-right',
    'nextora-hero--stack-' + stackOrder,
  ];
  if (stickyColumn === 'content' || stickyColumn === 'creative') {
    parts.push('nextora-hero--sticky-' + stickyColumn);
  }
  return parts.filter(Boolean).join(' ');
}

export default function HeroSectionEdit({ attributes, setAttributes }) {
  const {
    columnSplit,
    creativePosition,
    stackOrder,
    verticalAlign,
    stickyColumn = 'none',
    heading: legacyHeading,
    content: legacyContent,
  } = attributes;

  const blockClass = useMemo(
    () =>
      buildClassName({
        columnSplit,
        creativePosition,
        stackOrder,
        verticalAlign,
        stickyColumn: typeof stickyColumn === 'string' ? stickyColumn : 'none',
      }),
    [columnSplit, creativePosition, stackOrder, verticalAlign, stickyColumn],
  );

  const splitCss = splitToCss[columnSplit] || splitToCss['50-50'];
  const alignItems = alignMap[verticalAlign] || 'center';

  const blockProps = useBlockProps({
    className: blockClass,
    style: {
      '--nextora-hero--cols': splitCss,
      '--nextora-hero--align': alignItems,
    },
  });

  const innerBlocksProps = useInnerBlocksProps(
    {
      className: 'nextora-hero__grid',
    },
    {
      template: TEMPLATE,
      templateLock: false,
      allowedBlocks: ['core/group'],
    },
  );

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Columns & layout', 'nextora')} initialOpen>
          <p className="components-base-control__help" style={{ marginTop: 0 }}>
            {__(
              'Each side is a group: add or change blocks as you like. New heroes include a default headline, text, and a placeholder in the visual column. You can add or remove a top-level group if you need a different structure.',
              'nextora',
            )}
          </p>
          <SelectControl
            label={__('Column width', 'nextora')}
            help={__(
              'Two tracks on wide screens; single column on smaller screens. Fine-tune with theme spacing in the block toolbar.',
              'nextora',
            )}
            value={columnSplit}
            options={COLUMN_SPLIT_OPTIONS}
            onChange={(v: string) => setAttributes({ columnSplit: v })}
          />
          <SelectControl
            label={__('Creative column (visuals)', 'nextora')}
            value={creativePosition}
            options={[
              { label: __('Right of content', 'nextora'), value: 'right' },
              { label: __('Left of content', 'nextora'), value: 'left' },
            ]}
            onChange={(v: string) => setAttributes({ creativePosition: v })}
          />
          <SelectControl
            label={__('Stack order (tablet & mobile)', 'nextora')}
            value={stackOrder}
            options={[
              { label: __('Content first', 'nextora'), value: 'content-first' },
              { label: __('Creative first', 'nextora'), value: 'creative-first' },
            ]}
            onChange={(v: string) => setAttributes({ stackOrder: v })}
          />
          <SelectControl
            label={__('Vertical alignment (row)', 'nextora')}
            value={verticalAlign}
            options={[
              { label: __('Top', 'nextora'), value: 'top' },
              { label: __('Center', 'nextora'), value: 'center' },
              { label: __('Bottom', 'nextora'), value: 'bottom' },
            ]}
            onChange={(v: string) => setAttributes({ verticalAlign: v })}
          />
          <SelectControl
            label={__('Sticky column (wide layout)', 'nextora')}
            help={__(
              'When one column is taller, keep the other visible while scrolling. Only applies to the two-column layout (not stacked mobile). “Top” row alignment often looks best with sticky.',
              'nextora',
            )}
            value={typeof stickyColumn === 'string' ? stickyColumn : 'none'}
            options={[
              { label: __('Off', 'nextora'), value: 'none' },
              { label: __('Content column (copy)', 'nextora'), value: 'content' },
              { label: __('Creative column (visuals)', 'nextora'), value: 'creative' },
            ]}
            onChange={(v: string) => setAttributes({ stickyColumn: v || 'none' })}
          />
        </PanelBody>
        {(legacyHeading || legacyContent) && (
          <PanelBody title={__('Legacy text', 'nextora')} initialOpen={false}>
            <Notice status="info" isDismissible={false}>
              {__(
                'This block used placeholder heading/body fields. Re-add the text in the “Content” column (left) so it appears on the site. You can then clear the old text from the database by removing it in document code or re-saving after migration.',
                'nextora',
              )}
            </Notice>
          </PanelBody>
        )}
      </InspectorControls>

      <div {...blockProps}>
        <div {...innerBlocksProps} />
      </div>
    </>
  );
}
