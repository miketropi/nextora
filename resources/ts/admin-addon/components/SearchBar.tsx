import { __ } from '@wordpress/i18n';
import { SearchIcon } from './icons';

interface SearchBarProps {
	value: string;
	onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps): JSX.Element {
	return (
		<div className="nextora-addon-search">
			<SearchIcon className="nextora-addon-search__icon" />
			<input
				type="text"
				className="nextora-addon-search__input"
				placeholder={__('Filter\u2026', 'nextora')}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
}
