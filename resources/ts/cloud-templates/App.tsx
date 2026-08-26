import { __, sprintf } from '@wordpress/i18n';
import Header from './components/Header';
import Footer from '../admin-addon/components/Footer';
import { FilterBar } from './components/FilterBar';
import { TemplateCard } from './components/TemplateCard';
import { AlertCircleIcon, CheckCircleIcon, CloudIcon } from './components/icons';
import { useCloudCatalog } from './hooks/useCloudCatalog';

export default function App(): JSX.Element {
	const {
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
		importError,
		setImportError,
	} = useCloudCatalog();

	const activeTheme = config?.activeTheme || 'nextora';
	const parentTheme = config?.parentTheme || 'nextora';
	const isChildTheme = Boolean(config?.isChildTheme);
	const themeVersion = config?.themeVersion || '1.0.0';

	return (
		<div className="nextora-addon-wrap nextora-cloud-wrap">
			<Header
				activeTheme={activeTheme}
				parentTheme={parentTheme}
				isChildTheme={isChildTheme}
				themeVersion={themeVersion}
			/>

			{error && (
				<div className="nextora-addon-error nextora-cloud-alert">
					<AlertCircleIcon width={16} height={16} className="nextora-addon-error__icon" />
					<span>{error}</span>
					<button
						type="button"
						className="nextora-cloud-alert__retry"
						onClick={() => fetchCatalog(true)}
					>
						{__('Retry', 'nextora')}
					</button>
				</div>
			)}

			{importError && (
				<div className="nextora-addon-error nextora-cloud-alert">
					<AlertCircleIcon width={16} height={16} className="nextora-addon-error__icon" />
					<span>{importError}</span>
					<button
						type="button"
						className="nextora-cloud-alert__dismiss"
						onClick={() => setImportError(null)}
					>
						{__('Dismiss', 'nextora')}
					</button>
				</div>
			)}

			{importSuccess && (
				<div className="nextora-cloud-success-alert">
					<CheckCircleIcon width={16} height={16} />
					<span>
						{importSuccess.message ||
							sprintf(
								/* translators: %s: title */
								__('Template "%s" imported successfully as a draft page.', 'nextora'),
								importSuccess.title,
							)}
					</span>
					<a
						href={importSuccess.edit_url}
						target="_blank"
						rel="noreferrer noopener"
						className="nextora-cloud-success-alert__link"
					>
						{__('Open Editor', 'nextora')} →
					</a>
				</div>
			)}

			<FilterBar
				themes={themes}
				categories={categories}
				selectedTheme={selectedTheme}
				onThemeChange={(th) => {
					setSelectedTheme(th);
					setPage(1);
				}}
				isChildTheme={isChildTheme}
				activeTheme={activeTheme}
				parentTheme={parentTheme}
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
				<div className="nextora-addon-skeleton-grid">
					{Array.from({ length: 6 }).map((_, i) => (
						<div key={i} className="nextora-addon-skeleton">
							<div className="nextora-addon-skeleton__thumb nextora-addon-skeleton__shimmer" />
							<div className="nextora-addon-skeleton__line nextora-addon-skeleton__shimmer" />
							<div className="nextora-addon-skeleton__line nextora-addon-skeleton__line--short nextora-addon-skeleton__shimmer" />
						</div>
					))}
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
						{category !== 'all' || search.trim()
							? __('Try clearing your search query or selecting a different category.', 'nextora')
							: __('No templates are currently available in this catalog.', 'nextora')}
					</p>
					{selectedTheme !== 'nextora' && (
						<div style={{ marginTop: '16px' }}>
							<button
								type="button"
								className="nextora-cloud-btn nextora-cloud-btn--secondary"
								onClick={() => setSelectedTheme('nextora')}
							>
								{__('Browse Nextora Parent Catalog', 'nextora')}
							</button>
						</div>
					)}
				</div>
			) : (
				<>
					<div className="nextora-addon-grid nextora-cloud-grid">
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
							<button
								type="button"
								className="nextora-cloud-page-btn"
								disabled={page <= 1 || loading}
								onClick={() => setPage((p) => Math.max(1, p - 1))}
							>
								← {__('Previous', 'nextora')}
							</button>
							<span className="nextora-cloud-page-info">
								{sprintf(
									/* translators: 1: current page, 2: total pages */
									__('Page %1$d of %2$d', 'nextora'),
									page,
									totalPages,
								)}
							</span>
							<button
								type="button"
								className="nextora-cloud-page-btn"
								disabled={page >= totalPages || loading}
								onClick={() =>
									setPage((p) => Math.min(totalPages, p + 1))
								}
							>
								{__('Next', 'nextora')} →
							</button>
						</div>
					)}
				</>
			)}

			<Footer />
		</div>
	);
}
