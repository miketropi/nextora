/**
 * gen-block.mjs
 * Scaffolds a new dynamic block inside ./blocks/<name>/
 *
 * Options:
 *   --name <slug>     Required. Lowercase [a-z][a-z0-9-]* — folder + block slug.
 *   --title <string>  Optional. Inserter title (default: Title Case from slug).
 *   --category <slug> Optional. block.json category (default: text).
 *   --ns <string>     Optional. Block namespace + textdomain (default: mytheme).
 *                     Use --ns nextora when working in the Nextora theme.
 *
 * Usage:
 *   npm run gen -- --name my-block --ns nextora
 *   node ./scripts/gen-block.mjs --name my-block --title "My Block" --category design --ns nextora
 */

import fs from 'fs';
import path from 'path';

// ---------------------------------------------------------------------------
// Parse args
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const get = (flag) => {
  const i = args.indexOf(flag);
  return i !== -1 ? args[i + 1] : null;
};

const name = get('--name');

if (!name) {
  console.error('❌  Missing --name argument.');
  console.error('   Usage: node ./scripts/gen-block.mjs --name my-block');
  process.exit(1);
}

if (!/^[a-z][a-z0-9-]*$/.test(name)) {
  console.error('❌  Block name must be lowercase letters, numbers, and hyphens only.');
  console.error('   Example: --name my-block');
  process.exit(1);
}

// Derive values from name
const title    = get('--title')    ?? name.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
const category = get('--category') ?? 'text';
const ns       = get('--ns')       ?? 'mytheme'; // block namespace

// PascalCase for React component name: my-block → MyBlock
const pascal = name.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());

// camelCase for WP global: block-editor → blockEditor
const camel = (str) => str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

const blockDir = path.resolve(`./blocks/${name}`);

if (fs.existsSync(blockDir)) {
  console.error(`❌  Block "${name}" already exists at ${blockDir}`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// File templates
// ---------------------------------------------------------------------------

const files = {

  // ── block.json ────────────────────────────────────────────────────────────
  'block.json': JSON.stringify({
    $schema: 'https://schemas.wp.org/trunk/block.json',
    apiVersion: 3,
    name: `${ns}/${name}`,
    title,
    category,
    description: `${title} block.`,
    keywords: [name, ns],
    textdomain: ns,
    supports: {
      html: false,
      align: ['wide', 'full'],
      color: { background: true, text: true, link: true },
      spacing: { padding: true, margin: true, blockGap: true },
      typography: { fontSize: true, lineHeight: true },
    },
    attributes: {
      heading: { type: 'string', default: '' },
      content: { type: 'string', default: '' },
    },
    editorScript: 'file:./index.js',
    render: 'file:./render.php',
  }, null, 2),

  // ── index.tsx ─────────────────────────────────────────────────────────────
  'index.tsx': `import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';

registerBlockType(metadata.name, {
  edit: Edit,
  // Dynamic block — front-end output handled by render.php
  save: () => null,
});
`,

  // ── edit.tsx ──────────────────────────────────────────────────────────────
  'edit.tsx': `import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Attributes {
  heading: string;
  content: string;
}

interface EditProps {
  attributes: Attributes;
  setAttributes: (attrs: Partial<Attributes>) => void;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function ${pascal}Edit({ attributes, setAttributes }: EditProps) {
  const { heading, content } = attributes;

  /**
   * useBlockProps injects:
   *  - default block class: wp-block-${ns}-${name}
   *  - inline styles from Global Styles (color, spacing, typography)
   */
  const blockProps = useBlockProps();

  return (
    <>
      {/* Sidebar controls */}
      <InspectorControls>
        <PanelBody title={__('${title} Settings', '${ns}')} initialOpen>
          {/* Add custom sidebar controls here */}
        </PanelBody>
      </InspectorControls>

      {/* Editor UI */}
      <div {...blockProps}>
        <RichText
          tagName="h2"
          value={heading}
          onChange={(val: string) => setAttributes({ heading: val })}
          placeholder={__('Enter heading\u2026', '${ns}')}
          allowedFormats={['core/bold', 'core/italic']}
        />
        <RichText
          tagName="p"
          value={content}
          onChange={(val: string) => setAttributes({ content: val })}
          placeholder={__('Enter content\u2026', '${ns}')}
        />
      </div>
    </>
  );
}
`,

  // ── render.php ────────────────────────────────────────────────────────────
  'render.php': `<?php
/**
 * ${title} — dynamic block render template.
 *
 * Available variables (injected automatically by WordPress):
 *
 * @var array    $attributes  Block attributes defined in block.json.
 * @var string   $content     Inner blocks HTML (empty for this block).
 * @var WP_Block $block       Block instance.
 */

$heading = wp_kses( $attributes['heading'] ?? '', [ 'strong' => [], 'em' => [] ] );
$content = wp_kses_post( $attributes['content'] ?? '' );

// Nothing to render
if ( ! $heading && ! $content ) {
\treturn;
}

/**
 * get_block_wrapper_attributes() merges:
 *  - default class: wp-block-${ns}-${name}
 *  - Global Styles overrides (color, spacing, typography supports)
 *  - custom class/style added by the editor user
 */
$wrapper_attributes = get_block_wrapper_attributes();
?>

<div <?php echo $wrapper_attributes; ?>>

\t<?php if ( $heading ) : ?>
\t\t<h2 class="${name}__heading"><?php echo $heading; ?></h2>
\t<?php endif; ?>

\t<?php if ( $content ) : ?>
\t\t<p class="${name}__content"><?php echo $content; ?></p>
\t<?php endif; ?>

</div>
`,

};

// ---------------------------------------------------------------------------
// Write files
// ---------------------------------------------------------------------------

fs.mkdirSync(blockDir, { recursive: true });

for (const [filename, content] of Object.entries(files)) {
  const filepath = path.join(blockDir, filename);
  fs.writeFileSync(filepath, content, 'utf8');
}

// ---------------------------------------------------------------------------
// Done
// ---------------------------------------------------------------------------

console.log(`\n✅ Block "${ns}/${name}" created at ./blocks/${name}/\n`);
console.log('   Files generated:');
Object.keys(files).forEach((f) => console.log(`   · blocks/${name}/${f}`));
console.log(`
   Next steps:
   1. Run: npm run build:blocks
   2. Reload wp-admin — block "${title}" will appear in the inserter
   3. Customise edit.tsx, render.php, and block.json as needed
`);
