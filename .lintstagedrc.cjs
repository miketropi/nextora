/** @type {import('lint-staged').Config} */
module.exports = {
	'*.php': ( files ) => {
		const source = files.filter( ( file ) => ! file.endsWith( 'index.asset.php' ) );
		if ( source.length === 0 ) {
			return [];
		}

		return [
			'vendor/bin/php-cs-fixer fix --config=.php-cs-fixer.dist.php --allow-unsupported-php-version=yes --',
			...source,
		];
	},
	'{resources,blocks}/**/*.{ts,tsx}': () => 'npm run typecheck',
};
