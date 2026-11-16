import apiFetch from '@wordpress/api-fetch';
import { useCallback, useEffect, useState } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import {
	CatalogApiResponse,
	CloudCategoryItem,
	CloudScriptData,
	CloudTemplateItem,
	CloudThemeItem,
	ImportApiResponse,
} from '../types';

declare global {
	interface Window {
		nextoraCloudData?: CloudScriptData;
	}
}

export function useCloudCatalog() {
	const config = window.nextoraCloudData;
	const [selectedTheme, setSelectedTheme] = useState<string>(
		config?.activeTheme || 'nextora',
	);
	const [themes, setThemes] = useState<CloudThemeItem[]>([]);
	const [categories, setCategories] = useState<CloudCategoryItem[]>([]);
	const [templates, setTemplates] = useState<CloudTemplateItem[]>([]);
	const [category, setCategory] = useState<string>('all');
	const [search, setSearch] = useState<string>('');
	const [page, setPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(1);
	const [total, setTotal] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	// Import state
	const [importingId, setImportingId] = useState<string | null>(null);
	const [importSuccess, setImportSuccess] = useState<ImportApiResponse | null>(
		null,
	);
	const [importError, setImportError] = useState<string | null>(null);

	// Fetch available cloud themes
	useEffect(() => {
		let isMounted = true;
		apiFetch<{ data: CloudThemeItem[] }>({
			path: '/nextora/v1/cloud/themes',
			headers: {
				'X-WP-Nonce': config?.nonce || '',
			},
		})
			.then((res) => {
				if (isMounted && res && Array.isArray(res.data)) {
					setThemes(res.data);
				}
			})
			.catch(() => {
				// Non-fatal, fallback to default theme list
			});

		return () => {
			isMounted = false;
		};
	}, [config?.nonce]);

	// Fetch available cloud categories
	useEffect(() => {
		let isMounted = true;
		apiFetch<{ data: CloudCategoryItem[] }>({
			path: '/nextora/v1/cloud/categories',
			headers: {
				'X-WP-Nonce': config?.nonce || '',
			},
		})
			.then((res) => {
				if (isMounted && res && Array.isArray(res.data)) {
					setCategories(res.data);
				}
			})
			.catch(() => {
				// Non-fatal, fallback to default category list
			});

		return () => {
			isMounted = false;
		};
	}, [config?.nonce]);

	// Fetch catalog based on theme, category, search, page
	const fetchCatalog = useCallback(
		(refresh = false) => {
			setLoading(true);
			setError(null);

			const params = new URLSearchParams({
				theme: selectedTheme,
				page: String(page),
				perPage: '12',
			});

			if (category && category !== 'all') {
				params.append('category', category);
			}
			if (search.trim()) {
				params.append('search', search.trim());
			}
			if (refresh) {
				params.append('refresh', '1');
			}

			apiFetch<CatalogApiResponse>({
				path: `/nextora/v1/cloud/catalog?${params.toString()}`,
				headers: {
					'X-WP-Nonce': config?.nonce || '',
				},
			})
				.then((res) => {
					setTemplates(res.data || []);
					setTotal(res.meta?.total || 0);
					setTotalPages(res.meta?.totalPages || 1);
					setLoading(false);
				})
				.catch((err: { message?: string }) => {
					setError(
						err?.message ||
							'Failed to load templates from Nextora Cloud.',
					);
					setTemplates([]);
					setTotal(0);
					setTotalPages(1);
					setLoading(false);
				});
		},
		[selectedTheme, category, search, page, config?.nonce],
	);

	useEffect(() => {
		fetchCatalog();
	}, [fetchCatalog]);

	// Import template
	const importTemplate = async (
		item: CloudTemplateItem,
		importType: 'page' | 'template' = 'page',
	) => {
		const actionType =
			importType === 'page' ? 'import_page' : 'import_fse';

		const canProceed = applyFilters(
			'nextora.cloudTemplates.canImport',
			true,
			{
				action: actionType,
				template: item,
				theme: selectedTheme,
			},
		);

		if (!canProceed) {
			return null;
		}

		setImportingId(item.id);
		setImportSuccess(null);
		setImportError(null);

		try {
			const res = await apiFetch<ImportApiResponse>({
				path: '/nextora/v1/cloud/import',
				method: 'POST',
				headers: {
					'X-WP-Nonce': config?.nonce || '',
				},
				data: {
					template_id: item.id,
					version: item.version,
					theme: selectedTheme,
					import_type: importType,
				},
			});

			setImportSuccess(res);
			setImportingId(null);
			return res;
		} catch (err: unknown) {
			const errorObj = err as { message?: string };
			const errMsg =
				errorObj?.message || 'Failed to import template into WordPress.';
			setImportError(errMsg);
			setImportingId(null);
			throw new Error(errMsg);
		}
	};

	return {
		config,
		selectedTheme,
		setSelectedTheme,
		themes,
		categories,
		templates,
		category,
		setCategory,
		search,
		setSearch,
		page,
		setPage,
		totalPages,
		total,
		loading,
		error,
		fetchCatalog,
		importTemplate,
		importingId,
		importSuccess,
		setImportSuccess,
		importError,
		setImportError,
	};
}
