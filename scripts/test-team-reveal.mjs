import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';
import { transformSync } from 'esbuild';

const source = fs.readFileSync(new URL('../blocks/team-section/view.ts', import.meta.url), 'utf8');
const helpers = source.slice(source.indexOf('const SCROLL_INIT_ATTR'), source.indexOf('function initAllScrollReveals'));
const { code } = transformSync(`${helpers}\nexport { initScrollReveal };`, { loader: 'ts', format: 'cjs' });

function setup({ style = 'sequential', count = 4, reduced = false, top = 500 } = {}) {
	const sets = [], timelines = [], triggers = [], timeouts = [];
	const cards = Array.from({ length: count }, (_, index) => ({ index }));
	const content = { querySelectorAll: () => cards };
	const classes = new Set(['nextora-team-section--reveal-pending']);
	const attrs = new Map([['data-nextora-scroll-reveal', '1'], ['data-nextora-scroll-reveal-style', style]]);
	const section = {
		classList: { add: name => classes.add(name), remove: name => classes.delete(name), contains: name => classes.has(name) },
		getAttribute: name => attrs.get(name), setAttribute: (name, value) => attrs.set(name, value),
		querySelector: selector => selector.includes('__header') ? null : content,
		getBoundingClientRect: () => ({ top, bottom: top + 600 }),
	};
	const gsap = {
		set: (targets, vars) => sets.push({ targets, vars }), killTweensOf() {},
		timeline: options => {
			const timeline = { options, tweens: [], plays: 0,
				to(targets, vars, position) { this.tweens.push({ targets, vars, position }); return this; },
				play() { this.plays++; },
				totalDuration() { return Math.max(...this.tweens.map(t => t.position + t.vars.duration + (t.vars.stagger?.each || 0) * (t.targets.length - 1))); },
			};
			timelines.push(timeline); return timeline;
		},
	};
	const context = { module: { exports: {} }, gsap,
		window: { innerHeight: 1000, matchMedia: () => ({ matches: reduced }), setTimeout: (fn, ms) => timeouts.push({ fn, ms }) },
		ScrollTrigger: { create: options => triggers.push(options), refresh() {} },
	};
	vm.runInNewContext(code, context);
	return { init: () => context.module.exports.initScrollReveal(section), sets, timelines, triggers, timeouts, classes, cards, content };
}

test('Sequential matches Box Image timing and animates only slide wrappers', () => {
	const state = setup(); state.init();
	assert.equal(state.timelines.length, 1);
	const timeline = state.timelines[0], tween = timeline.tweens[0];
	assert.equal(timeline.options.defaults.ease, 'power2.out');
	assert.equal(tween.targets.length, state.cards.length);
	tween.targets.forEach((target, index) => assert.equal(target, state.cards[index]));
	assert.equal(tween.vars.duration, 0.75);
	assert.equal(tween.vars.stagger.each, 0.14);
	assert.equal(tween.vars.stagger.from, 'start');
	assert.equal(state.sets.find(s => s.vars.y)?.vars.y, 36);
	timeline.options.onComplete();
	assert.ok(state.classes.has('nextora-team-section--reveal-ready'));
	assert.ok(state.sets.some(s => s.targets.includes(state.cards[0]) && s.vars.clearProps));
});

test('Default keeps the existing whole-container animation', () => {
	const state = setup({ style: 'default' }); state.init();
	assert.equal(state.timelines[0].options.defaults.ease, 'power3.out');
	assert.equal(state.timelines[0].tweens[0].targets, state.content);
	assert.equal(state.timelines[0].tweens[0].vars.duration, 1.05);
	assert.equal(state.sets[0].vars.y, 32);
});

test('reduced motion stays visible without creating animation', () => {
	const state = setup({ reduced: true }); state.init();
	assert.equal(state.timelines.length, 0);
	assert.equal(state.sets.length, 0);
	assert.ok(state.classes.has('nextora-team-section--reveal-ready'));
});

test('offscreen sequence initializes once and starts once on entry', () => {
	const state = setup({ top: 1200 }); state.init(); state.init();
	assert.equal(state.timelines.length, 1);
	assert.equal(state.timeouts.length, 0);
	assert.equal(state.triggers[0].once, true);
	state.triggers[0].onEnter(); state.triggers[0].onEnter();
	assert.equal(state.timelines[0].plays, 1);
	assert.equal(state.timeouts.length, 1);
});

test('long sequences get a fallback later than their full animation', () => {
	const state = setup({ count: 40 }); state.init();
	assert.ok(state.timeouts[0].ms > state.timelines[0].totalDuration() * 1000);
});

test('templates without slide wrappers safely keep their existing reveal', () => {
	const state = setup({ count: 0 }); state.init();
	assert.equal(state.timelines[0].tweens[0].targets, state.content);
	assert.equal(state.timelines[0].options.defaults.ease, 'power3.out');
});
