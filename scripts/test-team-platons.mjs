import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';
import { transformSync } from 'esbuild';

const source = fs.readFileSync(new URL('../blocks/team-section/member-utils.ts', import.meta.url), 'utf8');
const { code } = transformSync(source, { loader: 'ts', format: 'cjs' });
const context = { module: { exports: {} } };
vm.runInNewContext(code, context);
const defaults = (template) => JSON.parse(JSON.stringify(context.module.exports.getTemplateDefaultAttributes(template)));

test('Platons selects a four/two/two-column grid without carousel UI or popup', () => {
	const settings = defaults('platons');
	assert.equal(settings.layoutMode, 'grid');
	assert.deepEqual([settings.gridColumns, settings.gridColumnsTablet, settings.gridColumnsMobile], [4, 2, 2]);
	assert.equal(settings.disableResponsiveCarousel, true);
	for (const key of ['showPagination', 'showArrows', 'enablePopup', 'autoplay']) assert.equal(settings[key], false);
});

test('existing template defaults remain unchanged', () => {
	assert.deepEqual(defaults('default'), { photoAspectRatio: '3/4', cardBorderRadius: 16 });
	assert.deepEqual(defaults('overlay-social'), { photoAspectRatio: '3/4', cardBorderRadius: 20 });
	assert.deepEqual(defaults('template-02'), { photoAspectRatio: '3/4', cardBorderRadius: 24 });
	assert.deepEqual(defaults('template-03'), { photoAspectRatio: '3/4', cardBorderRadius: 3, layoutMode: 'grid', gridColumns: 3, gridColumnsTablet: 2, gridColumnsMobile: 1, gridColumnGap: 30, gridRowGap: 30 });
	assert.deepEqual(defaults('template-nuptse'), { layoutMode: 'grid', gridColumns: 3, gridColumnsTablet: 3, gridColumnsMobile: 1, disableResponsiveCarousel: true, gridColumnGap: 16, gridRowGap: 16, photoAspectRatio: '1/1', cardBorderRadius: 10, showPagination: false, showArrows: false });
});

test('polaroid CSS stays template-scoped and uses palette colors', () => {
	const css = fs.readFileSync(new URL('../blocks/team-section/platons-card.css', import.meta.url), 'utf8');
	assert.doesNotMatch(css, /#[0-9a-f]{3,8}\b|rgba?\(\s*\d|:hover/i);
	assert.match(css, /\.nextora-team-section--template-platons/);
	assert.match(css, /grid-no-carousel \.swiper-wrapper/);
	assert.match(css, /aspect-ratio: 269 \/ 303/);
	assert.match(css, /\.nextora-team-section\.nextora-team-section--template-platons\[data-nextora-scroll-reveal/);
	assert.match(css, /margin-top: var\(--wp--preset--spacing--30\) !important/);
	for (const angle of ['-11deg', '8deg', '-9deg', '10deg']) assert.ok(css.includes(angle));
});
