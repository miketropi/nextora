/**
 * build-editor.mjs
 * Builds block editor extensions (Rich Text formats, etc.).
 *
 * Usage:
 *   node ./scripts/build-editor.mjs           → production build
 *   node ./scripts/build-editor.mjs --watch   → watch mode
 */

import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

const isWatch = process.argv.includes('--watch');
const entry = './resources/ts/editor/index.ts';
const outFile = './assets/js/editor.js';
const outDir = path.dirname(outFile);

function toWpHandle(pkg) {
	return pkg.replace('@wordpress/', 'wp-').replace(/\//g, '-');
}

const WP_PACKAGES = [
	'@wordpress/rich-text',
	'@wordpress/block-editor',
	'@wordpress/blocks',
	'@wordpress/components',
	'@wordpress/element',
	'@wordpress/i18n',
	'@wordpress/data',
	'@wordpress/hooks',
	'@wordpress/compose',
	'@wordpress/plugins',
	'@wordpress/edit-post',
	'@wordpress/api-fetch',
];

const WP_HANDLES = WP_PACKAGES.map(toWpHandle);

const wpExternalsPlugin = {
	name: 'wp-externals',
	setup(build) {
		build.onResolve({ filter: /^@wordpress\// }, (args) => ({
			path: args.path,
			namespace: 'wp-external',
		}));

		build.onLoad({ filter: /.*/, namespace: 'wp-external' }, (args) => {
			const globalName = args.path
				.replace('@wordpress/', '')
				.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

			return {
				contents: `module.exports = window.wp['${globalName}'];`,
				loader: 'js',
			};
		});
	},
};

function writeAssetFile() {
	const version = Date.now().toString();
	const depsPhp = WP_HANDLES.map((d) => `'${d}'`).join(', ');
	const content = `<?php return [ 'dependencies' => [ ${depsPhp} ], 'version' => '${version}' ];\n`;
	fs.writeFileSync(path.join(outDir, 'editor.asset.php'), content, 'utf8');
}

/** @type {import('esbuild').BuildOptions} */
const buildOptions = {
	entryPoints: [entry],
	outfile: outFile,
	bundle: true,
	format: 'iife',
	platform: 'browser',
	target: 'es2020',
	jsx: 'automatic',
	jsxImportSource: 'react',
	sourcemap: isWatch ? 'inline' : false,
	minify: !isWatch,
	logLevel: isWatch ? 'warning' : 'info',
	plugins: [wpExternalsPlugin],
	define: {
		'process.env.NODE_ENV': isWatch ? '"development"' : '"production"',
	},
};

const assetWriterPlugin = {
	name: 'asset-writer',
	setup(build) {
		build.onEnd((result) => {
			if (result.errors.length) {
				return;
			}

			writeAssetFile();
			const t = new Date().toTimeString().slice(0, 8);
			console.log(`${t}  editor rebuilt`);
		});
	},
};

if (isWatch) {
	const ctx = await esbuild.context({
		...buildOptions,
		plugins: [...buildOptions.plugins, assetWriterPlugin],
	});
	await ctx.watch();
	console.log('Watching editor bundle (resources/ts/editor/index.ts)  ·  Ctrl+C to stop');
} else {
	const result = await esbuild.build(buildOptions);

	if (result.errors.length) {
		console.error('❌ Editor build errors:', result.errors);
		process.exit(1);
	}

	writeAssetFile();
	console.log(`  ✓ ${outFile}`);
	console.log(`  ✓ ${outDir}/editor.asset.php`);
	console.log('\n✅ Editor bundle built successfully.');
}
