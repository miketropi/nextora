import { Button, SelectControl } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { CloudThemeItem } from '../types';
import { CloudIcon, RefreshIcon, SearchIcon } from './icons';

interface FilterBarProps {
	themes: CloudThemeItem[];
	selectedTheme: string;
	onThemeChange: (theme: string) => void;
	category: string;
	onCategoryChange: (cat: string) => void;
	search: string;
	onSearchChange: (search: string) => void;
	onRefresh: () => void;
	loading: boolean;
	total: number;
}

const CATEGORIES = [
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
	selectedTheme,
	onThemeChange,
	category,
	onCategoryChange,
	search,
	onSearchChange,
	onRefresh,
	loading,
	total,
}: FilterBarProps) {
	const themeOptions =
		themes.length > 0
			? themes.map((t) => ({
					label: `${t.name} (${t.type === 'CHILD' ? 'Child' : 'Parent'})`,
					value: t.slug,
				}))
			: [
					{ label: 'Nextora (Parent)', value: 'nextora' },
					{ label: 'Nextora SaaS', value: 'nextora-saas' },
					{ label: 'Nextora Agency', value: 'nextora-agency' },
				];

	return (
		<div className="nextora-cloud-filterbar">
			<div className="nextora-cloud-filterbar__row">
				<div className="nextora-cloud-filterbar__group">
					<div className="nextora-cloud-filterbar__theme-select">
						<label
							htmlFor="nextora-cloud-theme-select"
							className="nextora-cloud-filterbar__label"
						>
							<CloudIcon width={16} height={16} />
							{__('Catalog Theme:', 'nextora')}
						</label>
						<SelectControl
							id="nextora-cloud-theme-select"
							value={selectedTheme}
							options={themeOptions}
							onChange={onThemeChange}
							className="nextora-cloud-filterbar__control"
						/>
					</div>

					<div className="nextora-cloud-filterbar__categories">
						{CATEGORIES.map((cat) => (
							<button
								key={cat.value}
								type="button"
								className={`nextora-cloud-filterbar__cat-btn ${
									category === cat.value ? 'is-active' : ''
								}`}
								onClick={() => onCategoryChange(cat.value)}
							>
								{cat.label}
							</button>
						))}
					</div>
				</div>

				<div className="nextora-cloud-filterbar__actions">
					<div className="nextora-cloud-filterbar__search">
						<SearchIcon className="nextora-cloud-filterbar__search-icon" />
						<input
							type="search"
							value={search}
							placeholder={__(
								'Search templates...',
								'nextora',
							)}
							onChange={(e) => onSearchChange(e.target.value)}
							className="nextora-cloud-filterbar__search-input"
						/>
					</div>

					<Button
						variant="tertiary"
						icon={<RefreshIcon />}
						onClick={onRefresh}
						isBusy={loading}
						disabled={loading}
						className="nextora-cloud-filterbar__refresh-btn"
						label={__('Refresh catalog', 'nextora')}
					/>
				</div>
			</div>

			<div className="nextora-cloud-filterbar__meta">
				<span className="nextora-cloud-filterbar__count">
					{loading
						? __('Loading templates...', 'nextora')
						: sprintf(
								/* translators: %d: total templates */
								__('%d templates available', 'nextora'),
								total,
							)}
				</span>
			</div>
		</div>
	);
}
