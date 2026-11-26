import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';
import { transformSync } from 'esbuild';

// Exercise the production save-style helpers without mounting the block editor.
const source = fs.readFileSync(new URL('../blocks/flexbox/index.tsx', import.meta.url), 'utf8');
const helpers = source.slice(source.indexOf('type Device ='), source.indexOf('function Edit('));
const { code } = transformSync(`${helpers}\nexport { blockStyle, legacyStyle };`, { loader: 'tsx', format: 'cjs' });
const context = { module: { exports: {} } };
vm.runInNewContext(code, context);
const { blockStyle, legacyStyle } = context.module.exports;
const plain = (value) => JSON.parse(JSON.stringify(value));

test('unset aspect ratio preserves existing empty save styles', () => {
  assert.deepEqual(plain(blockStyle({})), {});
  assert.deepEqual(plain(blockStyle({ aspectRatio: '' })), {});
});

test('aspect ratio is opt-in and accepts only supported ratios', () => {
  for (const ratio of ['1 / 1', '4 / 3', '3 / 4', '16 / 9', '9 / 16']) {
    assert.equal(blockStyle({ aspectRatio: ratio })['--flexbox-aspect-ratio'], ratio);
  }
  for (const ratio of ['auto', '0 / 0', '1 / 0', '-1 / 1', '1; color:red', 'url(example.com)', '']) {
    assert.equal(blockStyle({ aspectRatio: ratio })['--flexbox-aspect-ratio'], undefined);
  }
});

test('responsive widths and grid columns remain independent of aspect ratio', () => {
  const attributes = {
    desktop: { width: '200px', maxWidth: '100%', height: 'auto' },
    tablet: { width: '150px' },
    mobile: { width: '150px' },
  };
  assert.deepEqual(plain(blockStyle(attributes)), {
    '--flexbox-width': '200px', '--flexbox-max-width': '100%', '--flexbox-height': 'auto',
    '--flexbox-tablet-width': '150px', '--flexbox-mobile-width': '150px',
  });
  assert.deepEqual(plain(blockStyle({ ...attributes, aspectRatio: '1 / 1' })), {
    ...plain(blockStyle(attributes)), '--flexbox-aspect-ratio': '1 / 1',
  });
  const grid = blockStyle({ desktop: { display: 'grid', columns: '4' }, tablet: { columns: '2' }, mobile: { columns: '2' } });
  assert.equal(grid['--flexbox-grid-template-columns'], 'repeat(4, minmax(0, 1fr))');
  assert.equal(grid['--flexbox-tablet-grid-template-columns'], 'repeat(2, minmax(0, 1fr))');
  assert.equal(grid['--flexbox-mobile-grid-template-columns'], 'repeat(2, minmax(0, 1fr))');
});

test('legacy save styles are unaffected by the new attribute', () => {
  const attributes = { desktop: { direction: 'column', width: '50%' }, mobile: { width: '100%' } };
  assert.deepEqual(plain(legacyStyle(attributes)), plain(legacyStyle({ ...attributes, aspectRatio: '1 / 1' })));
});

test('aspect ratio CSS is scoped to explicitly configured containers', () => {
  const css = fs.readFileSync(new URL('../blocks/flexbox/style.css', import.meta.url), 'utf8');
  assert.match(css, /\.wp-block-nextora-flexbox\[style\*="--flexbox-aspect-ratio:"\]\s*\{\s*aspect-ratio: var\(--flexbox-aspect-ratio\);\s*\}/);
});
