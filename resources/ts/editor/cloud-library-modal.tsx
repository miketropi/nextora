import apiFetch from '@wordpress/api-fetch';
import { parse } from '@wordpress/blocks';
import { Modal, Spinner } from '@wordpress/components';
import { useDispatch } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
	AlertCircleIcon,
	CheckCircleIcon,
	CloudIcon,
	DownloadIcon,
	PaletteIcon,
	RefreshIcon,
	SearchIcon,
} from '../cloud-templates/components/icons';
import {
	CatalogApiResponse,
	CloudScriptData,
	CloudTemplateItem,
	CloudThemeItem,
	TemplateContentApiResponse,
} from '../cloud-templates/types';

declare global {
	interface Window {
		nextoraCloudEditorData?: CloudScriptData;
	}
}

export function CloudLibraryModal({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {
	const config = window.nextoraCloudEditorData;
	const activeTheme = config?.activeTheme || 'nextora';
	const [selectedTheme, setSelectedTheme] = useState<string>(activeTheme);
	const [themes, setThemes] = useState<CloudThemeItem[]>([]);
	const [templates, setTemplates] = useState<CloudTemplateItem[]>([]);
	const [category, setCategory] = useState<string>('all');
	const [search, setSearch] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);
	const [insertingId, setInsertingId] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [successMsg, setSuccessMsg] = useState<string | null>(null);

	const { insertBlocks } = useDispatch('core/block-editor') as {
		insertBlocks: (blocks: unknown[]) => void;
	};

	// Fetch strictly allowed themes (only active child theme and parent theme)
	useEffect(() => {
		if (!isOpen) return;

		apiFetch<{ data: CloudThemeItem[] }>({
			path: '/nextora/v1/cloud/themes',
			headers: { 'X-WP-Nonce': config?.nonce || '' },
		})
			.then((res) => {
				if (res && Array.isArray(res.data)) {
					setThemes(res.data);
				}
			})
			.catch(() => {});
	}, [isOpen, config?.nonce]);

	// Fetch catalog
	const loadCatalog = (refresh = false) => {
		setLoading(true);
		setError(null);

		const params = new URLSearchParams({
			theme: selectedTheme,
			page: '1',
			perPage: '30',
		});

		if (category !== 'all') {
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
			headers: { 'X-WP-Nonce': config?.nonce || '' },
		})
			.then((res) => {
				setTemplates(res.data || []);
				setLoading(false);
			})
			.catch((err: { message?: string }) => {
				setError(
					err?.message ||
						__('Failed to load cloud templates.', 'nextora'),
				);
				setTemplates([]);
				setLoading(false);
			});
	};

	useEffect(() => {
		if (isOpen) {
			loadCatalog();
		}
	}, [isOpen, selectedTheme, category, search]);

	const handleInsert = async (tpl: CloudTemplateItem) => {
		setInsertingId(tpl.id);
		setError(null);
		setSuccessMsg(null);

		try {
			const res = await apiFetch<TemplateContentApiResponse>({
				path: `/nextora/v1/cloud/template-content?template_id=${encodeURIComponent(
					tpl.id,
				)}&version=${encodeURIComponent(tpl.version)}`,
				headers: { 'X-WP-Nonce': config?.nonce || '' },
			});

			if (!res || !res.content) {
				throw new Error('Template payload is empty.');
			}

			const parsedBlocks = parse(res.content);

			if (parsedBlocks.length > 0 && typeof insertBlocks === 'function') {
				insertBlocks(parsedBlocks);
				setSuccessMsg(
					sprintf(
						/* translators: %s: template title */
						__('Inserted "%s" into canvas!', 'nextora'),
						tpl.title,
					),
				);
				setTimeout(() => {
					onClose();
				}, 600);
			} else {
				throw new Error('Could not parse blocks from template.');
			}
		} catch (err: unknown) {
			const e = err as { message?: string };
			setError(
				e?.message ||
					__('Failed to insert template into editor.', 'nextora'),
			);
		} finally {
			setInsertingId(null);
		}
	};

	if (!isOpen) return null;

	const isChildTheme = Boolean(config?.isChildTheme);

	return (
		<Modal
			title={__('Nextora Cloud Template Library', 'nextora')}
			onRequestClose={onClose}
			className="nextora-cloud-editor-modal"
			style={{ maxWidth: '980px', width: '92vw' }}
		>
			<div className="nextora-addon-wrap" style={{ padding: '16px 20px 24px', background: 'none' }}>
				{/* Theme Selector Tabs */}
				{isChildTheme && themes.length > 1 && (
					<div className="nextora-addon-nav" style={{ marginBottom: '20px' }}>
						{themes.map((t) => (
							<button
								key={t.slug}
								type="button"
								className={`nextora-addon-nav__item${selectedTheme === t.slug ? ' is-active' : ''}`}
								onClick={() => setSelectedTheme(t.slug)}
							>
								<PaletteIcon className="nextora-addon-nav__icon" />
								{t.slug === activeTheme
									? sprintf(
											/* translators: %s: theme name */
											__('%s (Active)', 'nextora'),
											t.name || t.slug,
										)
									: sprintf(
											/* translators: %s: theme name */
											__('%s (Parent)', 'nextora'),
											t.name || t.slug,
										)}
							</button>
						))}
					</div>
				)}

				{/* Search & Refresh Bar */}
				<div className="nextora-addon-section-intro" style={{ marginBottom: '16px' }}>
					<span className="nextora-addon-section-intro__count">
						{sprintf(
							/* translators: %d: count */
							__('%d templates in %s', 'nextora'),
							templates.length,
							selectedTheme,
						)}
					</span>

					<div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
						<div className="nextora-addon-search">
							<SearchIcon className="nextora-addon-search__icon" />
							<input
								type="text"
								className="nextora-addon-search__input"
								placeholder={__('Filter templates\u2026', 'nextora')}
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
						</div>

						<button
							type="button"
							className="nextora-cloud-refresh-btn"
							onClick={() => loadCatalog(true)}
							title={__('Refresh', 'nextora')}
						>
							<RefreshIcon width={14} height={14} />
						</button>
					</div>
				</div>

				{error && (
					<div className="nextora-addon-error" style={{ marginBottom: '16px' }}>
						<AlertCircleIcon width={16} height={16} className="nextora-addon-error__icon" />
						<span>{error}</span>
					</div>
				)}

				{successMsg && (
					<div className="nextora-cloud-success-alert" style={{ marginBottom: '16px' }}>
						<CheckCircleIcon width={16} height={16} />
						<span>{successMsg}</span>
					</div>
				)}

				{loading ? (
					<div style={{ padding: '60px 0', textAlign: 'center' }}>
						<Spinner />
					</div>
				) : templates.length === 0 ? (
					<div className="nextora-addon-empty">
						<div className="nextora-addon-empty__icon">
							<CloudIcon width={24} height={24} />
						</div>
						<h3 className="nextora-addon-empty__title">
							{__('No templates found', 'nextora')}
						</h3>
						<p className="nextora-addon-empty__text">
							{__('No templates are available in this catalog.', 'nextora')}
						</p>
					</div>
				) : (
					<div
						className="nextora-addon-grid"
						style={{ maxHeight: '55vh', overflowY: 'auto', padding: '4px' }}
					>
						{templates.map((tpl) => (
							<div key={tpl.id} className="nextora-addon-card">
								<div className="nextora-cloud-card__preview">
									{tpl.thumbnailUrl ? (
										<img
											src={tpl.thumbnailUrl}
											alt={tpl.title}
											className="nextora-addon-card__image"
											loading="lazy"
										/>
									) : (
										<div className="nextora-addon-card__placeholder">
											<span>{tpl.title}</span>
										</div>
									)}
								</div>

								<h3 className="nextora-addon-card__title">
									{tpl.title}
								</h3>
								<p className="nextora-addon-card__desc" style={{ marginBottom: '8px' }}>
									<code>{tpl.slug}</code>
								</p>

								<div className="nextora-addon-card__meta">
									<span className="nextora-addon-card__tag nextora-addon-card__tag--premium">
										{tpl.category}
									</span>
									<span className="nextora-addon-card__status nextora-addon-card__status--active">
										v{tpl.version}
									</span>
								</div>

								<div style={{ marginTop: '12px' }}>
									<button
										type="button"
										className="nextora-cloud-btn nextora-cloud-btn--primary"
										style={{ width: '100%' }}
										disabled={insertingId !== null}
										onClick={() => handleInsert(tpl)}
									>
										<DownloadIcon width={14} height={14} />
										{insertingId === tpl.id
											? __('Inserting…', 'nextora')
											: __('Insert into Canvas', 'nextora')}
									</button>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</Modal>
	);
}
