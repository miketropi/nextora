import { __, sprintf } from '@wordpress/i18n';
import { CloudCategoryItem, CloudThemeItem } from '../types';
import { PaletteIcon, RefreshIcon, SearchIcon } from './icons';

interface FilterBarProps {
	themes: CloudThemeItem[];
	categories?: CloudCategoryItem[];
	selectedTheme: string;
	onThemeChange: (theme: string) => void;
	isChildTheme: boolean;
	activeTheme: string;
	parentTheme: string;
	category: string;
	onCategoryChange: (cat: string) => void;
	search: string;
	onSearchChange: (search: string) => void;
	onRefresh: () => void;
	loading: boolean;
	total: number;
}

const DEFAULT_CATEGORIES = [
	{ label: __('All Categories', 'nextora'), value: 'all' },
	{ label: __('Landing', 'nextora'), value: 'landing' },
	{ label: __('SaaS', 'nextora'), value: 'saas' },
	{ label: __('Agency', 'nextora'), value: 'agency' },
	{ label: __('Portfolio', 'nextora'), value: 'portfolio' },
	{ label: __('Header', 'nextora'), value: 'header' },
	{ label: __('Footer', 'nextora'), value: 'footer' },
];

export function FilterBar({
	themes,
	categories = [],
	selectedTheme,
	onThemeChange,
	isChildTheme,
	activeTheme,
	parentTheme,
	category,
	onCategoryChange,
	search,
	onSearchChange,
	onRefresh,
	loading,
	total,
}: FilterBarProps): JSX.Element {
	const categoryList =
		categories.length > 0
			? [
					{ label: __('All Categories', 'nextora'), value: 'all' },
					...categories.map((c) => ({
						label: c.name,
						value: c.slug,
					})),
				]
			: DEFAULT_CATEGORIES;
	return (
		<div className="nextora-cloud-controls">
			{/* Theme Selector Tabs (Only active child theme + parent theme allowed) */}
			{isChildTheme && themes.length > 1 && (
				<div className="nextora-addon-nav nextora-cloud-theme-nav" aria-label="Theme catalogs">
					{themes.map((t) => {
						const isActive = selectedTheme === t.slug;
						return (
							<button
								key={t.slug}
								type="button"
								className={`nextora-addon-nav__item${isActive ? ' is-active' : ''}`}
								onClick={() => onThemeChange(t.slug)}
							>
								<PaletteIcon className="nextora-addon-nav__icon" />
								{t.slug === activeTheme
									? sprintf(
											/* translators: %s: theme name */
											__('%s (Active Child)', 'nextora'),
											t.name || t.slug,
										)
									: sprintf(
											/* translators: %s: theme name */
											__('%s (Parent)', 'nextora'),
											t.name || t.slug,
										)}
							</button>
						);
					})}
				</div>
			)}

			{/* Filter & Search Bar */}
			<div className="nextora-addon-section-intro nextora-cloud-filter-row">
				<div className="nextora-cloud-categories">
					{categoryList.map((cat) => (
						<button
							key={cat.value}
							type="button"
							className={`nextora-cloud-cat-pill${
								category === cat.value ? ' is-active' : ''
							}`}
							onClick={() => onCategoryChange(cat.value)}
						>
							{cat.label}
						</button>
					))}
				</div>

				<div className="nextora-cloud-search-actions">
					<div className="nextora-addon-search">
						<SearchIcon className="nextora-addon-search__icon" />
						<input
							type="text"
							className="nextora-addon-search__input"
							placeholder={__('Filter templates\u2026', 'nextora')}
							value={search}
							onChange={(e) => onSearchChange(e.target.value)}
						/>
					</div>

					<button
						type="button"
						className="nextora-cloud-refresh-btn"
						onClick={onRefresh}
						disabled={loading}
						title={__('Refresh catalog', 'nextora')}
					>
						<RefreshIcon width={14} height={14} />
					</button>
				</div>
			</div>

			<div className="nextora-cloud-count-bar">
				<span className="nextora-addon-section-intro__count">
					{loading
						? __('Loading templates\u2026', 'nextora')
						: sprintf(
								/* translators: %d: count */
								__('%d templates available', 'nextora'),
								total,
							)}
				</span>
			</div>
		</div>
	);
}
