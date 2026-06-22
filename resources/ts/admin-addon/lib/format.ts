/**
 * Minimal sprintf-style formatting for admin addon strings.
 */
export function sprintf(format: string, ...args: (string | number)[]): string {
	return format.replace(/%[sd]/g, (match) => {
		const val = args.shift();
		return val !== undefined ? String(val) : match;
	});
}
