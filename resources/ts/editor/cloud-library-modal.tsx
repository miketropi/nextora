import apiFetch from '@wordpress/api-fetch';
import { parse } from '@wordpress/blocks';
import { Modal, Spinner } from '@wordpress/components';
import { useDispatch } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
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
	CloudCategoryItem,
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
	const [categories, setCategories] = useState<CloudCategoryItem[]>([]);
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

	// Fetch available cloud categories
	useEffect(() => {
		if (!isOpen) return;

		apiFetch<{ data: CloudCategoryItem[] }>({
			path: '/nextora/v1/cloud/categories',
			headers: { 'X-WP-Nonce': config?.nonce || '' },
		})
			.then((res) => {
				if (res && Array.isArray(res.data)) {
					setCategories(res.data);
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
		const canProceed = applyFilters(
			'nextora.cloudTemplates.canImport',
			true,
			{
				action: 'insert_canvas',
				template: tpl,
				theme: selectedTheme,
			},
		);

		if (!canProceed) {
			return;
		}

		setInsertingId(tpl.id);
		setError(null);
		setSuccessMsg(null);

		try {
			const res = await apiFetch<TemplateContentApiResponse>({
				path: `/nextora/v1/cloud/template-content?template_id=${encodeURIComponent(
					tpl.id,
				)}&version=${encodeURIComponent(tpl.version)}&theme=${encodeURIComponent(selectedTheme)}`,
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
			style={{
				maxWidth: '920px',
				width: '92vw',
				height: '88vh',
				maxHeight: '88vh',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<div
				className="nextora-addon-wrap"
				style={{
					background: 'none',
					display: 'flex',
					flexDirection: 'column',
					flex: '1 1 0%',
					minHeight: 0,
					overflow: 'hidden',
					height: '100%',
				}}
			>
				<div className="nextora-cloud-modal__toolbar" style={{ flexShrink: 0 }}>
					{/* Theme Selector Tabs */}
					{isChildTheme && themes.length > 1 && (
						<div className="nextora-addon-nav" style={{ marginBottom: '14px' }}>
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
					<div className="nextora-addon-section-intro" style={{ marginBottom: '14px', gap: '8px', flexWrap: 'wrap' }}>
						<div className="nextora-cloud-categories" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
							<button
								type="button"
								className={`nextora-cloud-cat-pill${category === 'all' ? ' is-active' : ''}`}
								onClick={() => setCategory('all')}
							>
								{__('All', 'nextora')}
							</button>
							{categories.map((cat) => (
								<button
									key={cat.slug}
									type="button"
									className={`nextora-cloud-cat-pill${category === cat.slug ? ' is-active' : ''}`}
									onClick={() => setCategory(cat.slug)}
								>
									{cat.name}
								</button>
							))}
						</div>

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
						<div className="nextora-addon-error" style={{ marginBottom: '12px' }}>
							<AlertCircleIcon width={16} height={16} className="nextora-addon-error__icon" />
							<span>{error}</span>
						</div>
					)}

					{successMsg && (
						<div className="nextora-cloud-success-alert" style={{ marginBottom: '12px' }}>
							<CheckCircleIcon width={16} height={16} />
							<span>{successMsg}</span>
						</div>
					)}
				</div>

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
						className="nextora-cloud-modal__list"
						style={{
							overflowY: 'auto',
							flex: '1 1 0%',
							minHeight: 0,
						}}
					>
						{templates.map((tpl) => (
							<div key={tpl.id} className="nextora-cloud-list-item">
								<div className="nextora-cloud-list-item__thumb">
									{tpl.thumbnailUrl ? (
										<img
											src={tpl.thumbnailUrl}
											alt={tpl.title}
											className="nextora-cloud-list-item__image"
											loading="lazy"
										/>
									) : (
										<span className="nextora-cloud-list-item__placeholder">
											{tpl.title}
										</span>
									)}
								</div>

								<div className="nextora-cloud-list-item__info">
									<div className="nextora-cloud-list-item__title-row">
										<h4 className="nextora-cloud-list-item__title">{tpl.title}</h4>
										<code className="nextora-cloud-list-item__slug">{tpl.slug}</code>
									</div>

									<div className="nextora-cloud-list-item__meta">
										<span className="nextora-addon-card__tag nextora-addon-card__tag--premium">
											{tpl.category}
										</span>
										<span className="nextora-addon-card__status nextora-addon-card__status--active">
											v{tpl.version}
										</span>
									</div>
								</div>

								<div className="nextora-cloud-list-item__action">
									<button
										type="button"
										className="nextora-cloud-btn nextora-cloud-btn--primary"
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
