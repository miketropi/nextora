import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  InspectorControls,
} from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
  ToggleControl,
  SelectControl,
} from '@wordpress/components';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Attributes {
  title: string;
  selector: string;
  showH1: boolean;
  showH2: boolean;
  showH3: boolean;
  showH4: boolean;
  showH5: boolean;
  showH6: boolean;
  collapsible: boolean;
  listStyle: 'ol' | 'ul';
  stickyTop: string;
}

interface EditProps {
  attributes: Attributes;
  setAttributes: (attrs: Partial<Attributes>) => void;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const HEADING_LEVELS: { key: keyof Pick<Attributes, 'showH1' | 'showH2' | 'showH3' | 'showH4' | 'showH5' | 'showH6'>; label: string }[] = [
  { key: 'showH1', label: __('Show H1', 'nextora') },
  { key: 'showH2', label: __('Show H2', 'nextora') },
  { key: 'showH3', label: __('Show H3', 'nextora') },
  { key: 'showH4', label: __('Show H4', 'nextora') },
  { key: 'showH5', label: __('Show H5', 'nextora') },
  { key: 'showH6', label: __('Show H6', 'nextora') },
];

const LIST_STYLE_OPTIONS = [
  { label: __('Unordered list', 'nextora'), value: 'ul' },
  { label: __('Ordered list', 'nextora'), value: 'ol' },
];

// ---------------------------------------------------------------------------
// Editor preview — simplified static TOC
// ---------------------------------------------------------------------------

const PREVIEW_ITEMS: { level: number; text: string }[] = [
  { level: 2, text: 'Introduction' },
  { level: 2, text: 'Getting started' },
  { level: 3, text: 'Installation' },
  { level: 3, text: 'Configuration' },
  { level: 2, text: 'Advanced usage' },
  { level: 3, text: 'Hooks & filters' },
  { level: 3, text: 'Custom blocks' },
  { level: 2, text: 'Reference' },
];

type PreviewNode = { level: number; text: string; children: PreviewNode[] };

function buildPreviewTree(
  items: typeof PREVIEW_ITEMS,
  show: Record<string, boolean>,
): PreviewNode[] {
  const out: PreviewNode[] = [];
  const stack: PreviewNode[] = [];

  for (const item of items) {
    if (!show[`showH${item.level}`]) continue;

    const node: PreviewNode = { level: item.level, text: item.text, children: [] };

    while (stack.length && stack[stack.length - 1].level >= item.level) {
      stack.pop();
    }

    if (!stack.length) {
      out.push(node);
    } else {
      stack[stack.length - 1].children.push(node);
    }

    stack.push(node);
  }

  return out;
}

function renderPreviewTree(
  tree: PreviewNode[],
  ListTag: 'ol' | 'ul',
): JSX.Element {
  if (!tree.length) {
    return <></>;
  }
  return (
    <ListTag className="nextora-toc__list" style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
      {tree.map((item) => (
        <li
          key={item.text}
          className={`nextora-toc__item nextora-toc__item--h${item.level}`}
          style={{
            marginLeft: item.level > 2 ? `${(item.level - 2) * 1.25}rem` : 0,
            fontSize:
              item.level === 1
                ? '1.125rem'
                : item.level === 2
                  ? '1rem'
                  : item.level === 3
                    ? '0.9375rem'
                    : '0.875rem',
            lineHeight: 1.6,
            padding: '0.25rem 0',
            borderLeft: '2px solid transparent',
            paddingLeft: '0.75rem',
          }}
        >
          <a
            href="#"
            className="nextora-toc__link"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              pointerEvents: 'none',
            }}
          >
            {item.text}
          </a>
          {item.children.length > 0 && renderPreviewTree(item.children, ListTag)}
        </li>
      ))}
    </ListTag>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function TableOfContentsEdit({ attributes, setAttributes }: EditProps) {
  const { title, selector, showH1, showH2, showH3, showH4, showH5, showH6, collapsible, listStyle, stickyTop } = attributes;

  const blockProps = useBlockProps({
    className: [
      'nextora-toc',
      collapsible ? 'nextora-toc--collapsible' : '',
    ].filter(Boolean).join(' '),
  });

  const showMap: Record<string, boolean> = {
    showH1, showH2, showH3, showH4, showH5, showH6,
  };
  const tree = buildPreviewTree(PREVIEW_ITEMS, showMap);

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Content', 'nextora')} initialOpen>
          <TextControl
            label={__('Title', 'nextora')}
            value={title}
            onChange={(v) => setAttributes({ title: v })}
          />
          <TextControl
            label={__('CSS selector', 'nextora')}
            help={__('Which container to scan for headings.', 'nextora')}
            value={selector}
            onChange={(v) => setAttributes({ selector: v })}
          />
        </PanelBody>

        <PanelBody title={__('Headings', 'nextora')} initialOpen={false}>
          {HEADING_LEVELS.map(({ key, label }) => (
            <ToggleControl
              key={key}
              label={label}
              checked={!!attributes[key]}
              onChange={(v) => setAttributes({ [key]: v } as Partial<Attributes>)}
            />
          ))}
        </PanelBody>

        <PanelBody title={__('Appearance', 'nextora')} initialOpen={false}>
          <ToggleControl
            label={__('Collapsible', 'nextora')}
            help={__('Allow the table of contents to be collapsed by the visitor.', 'nextora')}
            checked={collapsible}
            onChange={(v) => setAttributes({ collapsible: v })}
          />
          <SelectControl
            label={__('List style', 'nextora')}
            value={listStyle}
            options={LIST_STYLE_OPTIONS}
            onChange={(v) => setAttributes({ listStyle: v as 'ol' | 'ul' })}
          />
          <TextControl
            label={__('Sticky top offset', 'nextora')}
            help={__('Distance from the top of the viewport when the TOC becomes sticky. Any CSS length value (e.g. 2rem, 80px, 5vh).', 'nextora')}
            value={stickyTop}
            onChange={(v) => setAttributes({ stickyTop: v })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        {title && (
          <h2 className="nextora-toc__title">
            {collapsible && (
              <button
                type="button"
                className="nextora-toc__toggle"
                aria-expanded="true"
                tabIndex={-1}
              >
                <span className="nextora-toc__toggle-icon" aria-hidden="true">▾</span>
              </button>
            )}
            {title}
          </h2>
        )}
        <nav className="nextora-toc__nav" aria-label={__('Table of Contents', 'nextora')}>
          {tree.length > 0 ? (
            renderPreviewTree(tree, listStyle)
          ) : (
            <p style={{ opacity: 0.6, fontStyle: 'italic', fontSize: '0.9375rem' }}>
              {__('No headings selected. Enable at least one heading level in the sidebar.', 'nextora')}
            </p>
          )}
        </nav>
      </div>
    </>
  );
}
