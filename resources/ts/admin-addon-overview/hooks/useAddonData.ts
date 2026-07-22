import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

interface UseAddonDataResult<T> {
	data: T | null;
	isLoading: boolean;
	error: string | null;
}

declare global {
	interface Window {
		nextoraAddon: {
			nonce: string;
		};
	}
}

export function useAddonData<T>(endpoint: string): UseAddonDataResult<T> {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let cancelled = false;

		async function fetchData(): Promise<void> {
			try {
				const result = await apiFetch<T>({
					path: `nextora/v1/addon/${endpoint}`,
					headers: {
						'X-WP-Nonce': window.nextoraAddon?.nonce || '',
					},
				});
				if (!cancelled) {
					setData(result);
					setIsLoading(false);
				}
			} catch (err) {
				if (!cancelled) {
					setError(err instanceof Error ? err.message : 'Failed to load data');
					setIsLoading(false);
				}
			}
		}

		fetchData();
		return () => { cancelled = true; };
	}, [endpoint]);

	return { data, isLoading, error };
}
