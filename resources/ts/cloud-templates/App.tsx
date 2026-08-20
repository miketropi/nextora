import { Button } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { AlertCircleIcon, CheckCircleIcon, CloudIcon } from './components/icons';
import { FilterBar } from './components/FilterBar';
import { TemplateCard } from './components/TemplateCard';
import { useCloudCatalog } from './hooks/useCloudCatalog';

export default function App() {
	const {
		config,
		selectedTheme,
		setSelectedTheme,
		themes,
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
		importError,
		setImportError,
	} = useCloudCatalog();

	return (
		<div className="nextora-cloud-app">
			<header className="nextora-cloud-header">
				<div className="nextora-cloud-header__brand">
					<div className="nextora-cloud-header__icon-wrap">
						<CloudIcon width={28} height={28} />
					</div>
					<div>
						<h1 className="nextora-cloud-header__title">
							{__('Nextora Cloud Templates', 'nextora')}
						</h1>
						<p className="nextora-cloud-header__subtitle">
							{__(
								'Browse and import production-ready block templates directly into your WordPress site.',
								'nextora',
							)}
						</p>
					</div>
				</div>

				<div className="nextora-cloud-header__meta">
					<span className="nextora-cloud-header__badge">
						{config?.isChildTheme
							? sprintf(
									/* translators: 1: active child theme, 2: parent theme */
									__('Child Theme: %1$s (Parent: %2$s)', 'nextora'),
									config.activeTheme,
									config.parentTheme,
								)
							: sprintf(
									/* translators: %s: theme name */
									__('Active: %s', 'nextora'),
									config?.activeTheme || 'nextora',
								)}
					</span>
					<span className="nextora-cloud-header__version">
						{sprintf(
							/* translators: %s: version */
							__('v%s', 'nextora'),
							config?.themeVersion || '1.0.0',
						)}
					</span>
				</div>
			</header>

			{error && (
				<div className="nextora-cloud-alert nextora-cloud-alert--error">
					<AlertCircleIcon width={18} height={18} />
					<span>{error}</span>
					<Button
						variant="secondary"
						isSmall
						onClick={() => fetchCatalog(true)}
					>
						{__('Retry', 'nextora')}
					</Button>
				</div>
			)}

			{importError && (
				<div className="nextora-cloud-alert nextora-cloud-alert--error">
					<AlertCircleIcon width={18} height={18} />
					<span>{importError}</span>
					<Button
						variant="tertiary"
						isSmall
						onClick={() => setImportError(null)}
					>
						{__('Dismiss', 'nextora')}
					</Button>
				</div>
			)}

			{importSuccess && (
				<div className="nextora-cloud-alert nextora-cloud-alert--success">
					<CheckCircleIcon width={18} height={18} />
					<span>
						{importSuccess.message ||
							sprintf(
								/* translators: %s: template title */
								__('Template "%s" imported successfully as a draft page.', 'nextora'),
								importSuccess.title,
							)}
					</span>
					<a
						href={importSuccess.edit_url}
						target="_blank"
						rel="noreferrer noopener"
						className="nextora-cloud-alert__link"
					>
						{__('Open Editor', 'nextora')} →
					</a>
				</div>
			)}

			<FilterBar
				themes={themes}
				selectedTheme={selectedTheme}
				onThemeChange={(th) => {
					setSelectedTheme(th);
					setPage(1);
				}}
				category={category}
				onCategoryChange={(cat) => {
					setCategory(cat);
					setPage(1);
				}}
				search={search}
				onSearchChange={(q) => {
					setSearch(q);
					setPage(1);
				}}
				onRefresh={() => fetchCatalog(true)}
				loading={loading}
				total={total}
			/>

			{loading && templates.length === 0 ? (
				<div className="nextora-cloud-skeleton-grid">
					{Array.from({ length: 6 }).map((_, i) => (
						<div key={i} className="nextora-cloud-skeleton-card">
							<div className="nextora-cloud-skeleton-card__thumb" />
							<div className="nextora-cloud-skeleton-card__body">
								<div className="nextora-cloud-skeleton-card__line nextora-cloud-skeleton-card__line--title" />
								<div className="nextora-cloud-skeleton-card__line nextora-cloud-skeleton-card__line--sub" />
							</div>
						</div>
					))}
				</div>
			) : templates.length === 0 ? (
				<div className="nextora-cloud-empty">
					<CloudIcon width={48} height={48} className="nextora-cloud-empty__icon" />
					<h3>{__('No templates found', 'nextora')}</h3>
					<p>
						{category !== 'all' || search.trim()
							? __(
									'Try clearing your search query or selecting a different category.',
									'nextora',
								)
							: __(
									'No templates are currently available for this theme catalog.',
									'nextora',
								)}
					</p>
					{selectedTheme !== 'nextora' && (
						<Button
							variant="secondary"
							onClick={() => setSelectedTheme('nextora')}
						>
							{__('Browse Nextora Parent Catalog', 'nextora')}
						</Button>
					)}
				</div>
			) : (
				<>
					<div className="nextora-cloud-grid">
						{templates.map((tpl) => (
							<TemplateCard
								key={tpl.id}
								template={tpl}
								onImport={importTemplate}
								isImporting={importingId === tpl.id}
								importSuccess={
									importSuccess &&
									tpl.id === tpl.id &&
									importSuccess.title === tpl.title
										? importSuccess
										: null
								}
							/>
						))}
					</div>

					{totalPages > 1 && (
						<div className="nextora-cloud-pagination">
							<Button
								variant="secondary"
								disabled={page <= 1 || loading}
								onClick={() => setPage((p) => Math.max(1, p - 1))}
							>
								← {__('Previous', 'nextora')}
							</Button>
							<span className="nextora-cloud-pagination__page-info">
								{sprintf(
									/* translators: 1: current page, 2: total pages */
									__('Page %1$d of %2$d', 'nextora'),
									page,
									totalPages,
								)}
							</span>
							<Button
								variant="secondary"
								disabled={page >= totalPages || loading}
								onClick={() =>
									setPage((p) => Math.min(totalPages, p + 1))
								}
							>
								{__('Next', 'nextora')} →
							</Button>
						</div>
					)}
				</>
			)}
		</div>
	);
}
