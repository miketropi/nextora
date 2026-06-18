import { useState, useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useAddonData } from '../hooks/useAddonData';
import type { BusinessService } from '../types';
import CardGrid from './CardGrid';
import ExtensionCard from './ExtensionCard';
import LoadingSkeleton from './LoadingSkeleton';
import EmptyState from './EmptyState';
import ErrorNotice from './ErrorNotice';
import SearchBar from './SearchBar';

export default function BusinessServicesTab(): JSX.Element {
	const { data, isLoading, error } = useAddonData<BusinessService>('business-services');
	const [query, setQuery] = useState('');

	const filtered = useMemo(() => {
		const q = query.toLowerCase().trim();
		if (!q) return data;
		return data.filter(
			(s) =>
				s.title.toLowerCase().includes(q) ||
				s.description.toLowerCase().includes(q),
		);
	}, [data, query]);

	if (isLoading) {
		return <LoadingSkeleton />;
	}

	if (error) {
		return <ErrorNotice message={error} />;
	}

	if (data.length === 0) {
		return (
			<EmptyState
				title={__('No services listed', 'nextora')}
				label={__('Business services will appear here when registered.', 'nextora')}
			/>
		);
	}

	return (
		<>
			<div className="nextora-addon-section-intro">
				<h2 className="nextora-addon-section-intro__title">
					{__('Business Services', 'nextora')}
				</h2>
				<span className="nextora-addon-section-intro__count">
					{query
						? sprintf(__('%d of %d', 'nextora'), filtered.length, data.length)
						: sprintf(__('%d service%s', 'nextora'), data.length, data.length === 1 ? '' : 's')}
				</span>
				<SearchBar value={query} onChange={setQuery} />
			</div>

			{filtered.length === 0 ? (
				<p className="nextora-addon-no-results">
					{__('No services match your filter.', 'nextora')}
				</p>
			) : (
				<CardGrid>
					{filtered.map((service) => (
						<ExtensionCard
							key={service.id}
							image={service.image || undefined}
							title={service.title}
							description={service.description}
							url={service.url}
						/>
					))}
				</CardGrid>
			)}
		</>
	);
}

function sprintf(format: string, ...args: (string | number)[]): string {
	return format.replace(/%[sd]/g, (match) => {
		const val = args.shift();
		return val !== undefined ? String(val) : match;
	});
}
