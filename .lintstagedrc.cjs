/** @type {import('lint-staged').Config} */
module.exports = {
	'*.php': ( files ) => {
		const source = files.filter( ( file ) => ! file.endsWith( 'index.asset.php' ) );
		if ( source.length === 0 ) {
			return [];
		}

		// lint-staged v17: return one command string (array items are separate tasks).
		return `bash scripts/lint-staged-php.sh ${ source.map( ( file ) => JSON.stringify( file ) ).join( ' ' ) }`;
	},
	'{resources,blocks}/**/*.{ts,tsx}': () => 'npm run typecheck',
};
