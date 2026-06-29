import { __ } from '@wordpress/i18n';
import { useState, useEffect, useMemo, useCallback } from '@wordpress/element';
import { Button, Modal, TextControl, ColorPalette, Dropdown } from '@wordpress/components';
import { LucideSvgPreview } from '../advanced-icon/lucide-preview';
import type { LucideIconEntry } from '../advanced-icon/types';
import { colorValueForPicker, getMergedPaletteEntries, normalizeColorForStorage, useThemeColorPalette } from './color-utils';

const PER_PAGE = 80;

let cachedIcons: LucideIconEntry[] | null = null;

async function loadIcons(): Promise<LucideIconEntry[]> {
	if (cachedIcons) {
		return cachedIcons;
	}

	const iconsUrl = window.nextoraIconBlock?.iconsUrl ?? '';
	if (!iconsUrl) {
		return [];
	}

	const response = await fetch(iconsUrl);
	if (!response.ok) {
		return [];
	}

	const data = (await response.json()) as LucideIconEntry[];
	cachedIcons = Array.isArray(data) ? data : [];
	return cachedIcons;
}

interface AmbientIcon {
	name: string;
	color: string;
}

interface MultiIconPickerProps {
	selectedIcons: AmbientIcon[];
	colors: ReturnType<typeof useThemeColorPalette>;
	lookupPalette: ReturnType<typeof getMergedPaletteEntries>;
	onChange: (icons: AmbientIcon[]) => void;
	onColorChange: (index: number, color: string) => void;
}

function ColorDot({ color, onClick }: { color: string; onClick: () => void }) {
	const isSet = !!color;
	const displayColor =
		color && (color.startsWith('#') || color.startsWith('rgb'))
			? color
			: color
			? `var(--wp--preset--color--${color})`
			: 'transparent';

	return (
		<button
			type="button"
			className={`nextora-advanced-container__ambient-color-dot${isSet ? ' is-set' : ''}`}
			style={{ background: displayColor } as React.CSSProperties}
			onClick={onClick}
			aria-label={__('Change color', 'nextora')}
		/>
	);
}

export function MultiIconPicker({
	selectedIcons,
	colors,
	lookupPalette,
	onChange,
	onColorChange,
}: MultiIconPickerProps) {
	const [pickerOpen, setPickerOpen] = useState(false);
	const [icons, setIcons] = useState<LucideIconEntry[]>([]);
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [loadError, setLoadError] = useState('');

	const openPicker = useCallback(() => {
		setPickerOpen(true);
		setLoading(true);
		setLoadError('');

		const iconsUrl = window.nextoraIconBlock?.iconsUrl ?? '';
		if (!iconsUrl) {
			setLoadError(
				__(
					'Icon library is not configured. Run npm run build:icons in the theme, then reload the editor.',
					'nextora',
				),
			);
			setLoading(false);
			return;
		}

		loadIcons()
			.then((data) => {
				if (0 === data.length) {
					setLoadError(
						__('Could not load icons. Check that assets/data/lucide-icons.json exists.', 'nextora'),
					);
				}
				setIcons(data);
			})
			.catch(() => {
				setLoadError(__('Failed to fetch the icon library.', 'nextora'));
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	const filtered = useMemo(() => {
		const query = search.trim().toLowerCase();
		if (!query) {
			return icons;
		}
		return icons.filter(
			(icon) => icon.name.includes(query) || icon.tags.some((tag) => tag.includes(query)),
		);
	}, [icons, search]);

	const visible = filtered.slice(0, page * PER_PAGE);
	const selectedNames = selectedIcons.map((i) => i.name);

	const addIcon = (name: string) => {
		if (!selectedNames.includes(name)) {
			onChange([...selectedIcons, { name, color: '' }]);
		}
	};

	const removeIcon = (name: string) => {
		onChange(selectedIcons.filter((i) => i.name !== name));
	};

	const toggleIcon = (name: string) => {
		if (selectedNames.includes(name)) {
			removeIcon(name);
		} else {
			addIcon(name);
		}
	};

	return (
		<div className="nextora-advanced-container__ambient-icons-picker">
			<div className="nextora-advanced-container__ambient-icons-list">
				{selectedIcons.length === 0 ? (
					<p className="nextora-advanced-container__ambient-icons-empty">
						{__('No icons selected.', 'nextora')}
					</p>
				) : (
					selectedIcons.map((icon, idx) => (
						<div key={icon.name} className="nextora-advanced-container__ambient-icon-chip">
							<Dropdown
								className="nextora-advanced-container__ambient-color-dropdown"
								contentClassName="nextora-advanced-container__ambient-color-popover"
								popoverProps={{ placement: 'left-start' }}
								renderToggle={({ isOpen, onToggle }) => (
									<ColorDot
										color={icon.color}
										onClick={onToggle}
									/>
								)}
								renderContent={() => (
									<div style={{ padding: 8, minWidth: 200 }}>
										<ColorPalette
											colors={colors}
											value={colorValueForPicker(icon.color, colors, lookupPalette)}
											onChange={(value) => {
												const normalized = normalizeColorForStorage(typeof value === 'string' ? value : '', lookupPalette);
												onColorChange(idx, normalized);
											}}
											clearable
										/>
									</div>
								)}
							/>
							<span className="nextora-advanced-container__ambient-icon-chip-name">
								{icon.name}
							</span>
							<Button
								icon="no-alt"
								label={__('Remove icon', 'nextora')}
								onClick={() => removeIcon(icon.name)}
								isSmall
								isDestructive
							/>
						</div>
					))
				)}
			</div>
			<Button variant="secondary" onClick={openPicker}>
				{__('Add icons', 'nextora')}
			</Button>

			{pickerOpen && (
				<Modal
					title={__('Choose icons', 'nextora')}
					onRequestClose={() => {
						setPickerOpen(false);
						setSearch('');
						setPage(1);
					}}
					className="nextora-icon-picker-modal nextora-icon-picker-modal--multi"
					size="large"
				>
					<TextControl
						label={__('Search icons', 'nextora')}
						value={search}
						onChange={(value: string) => {
							setSearch(value);
							setPage(1);
						}}
						placeholder={__('Search icons…', 'nextora')}
					/>

					{loading && <p>{__('Loading icons…', 'nextora')}</p>}

					{!loading && '' !== loadError && (
						<p className="nextora-icon-picker__error">{loadError}</p>
					)}

					{!loading && '' === loadError && 0 === icons.length && (
						<p>{__('No icons available.', 'nextora')}</p>
					)}

					{!loading && '' === loadError && icons.length > 0 && visible.length === 0 && (
						<p>{__('No icons match your search.', 'nextora')}</p>
					)}

					<div className="nextora-icon-picker__grid">
						{visible.map((icon) => {
							const isSelected = selectedNames.includes(icon.name);
							return (
								<button
									key={icon.name}
									type="button"
									title={icon.name}
									aria-label={icon.name}
									aria-pressed={isSelected}
									className={
										'nextora-icon-picker__item' +
										(isSelected ? ' is-selected' : '')
									}
									onClick={() => toggleIcon(icon.name)}
								>
									<LucideSvgPreview nodes={icon.nodes} size={24} />
									<span className="nextora-icon-picker__name">{icon.name}</span>
								</button>
							);
						})}
					</div>

					{visible.length < filtered.length && (
						<Button
							variant="secondary"
							onClick={() => setPage((current) => current + 1)}
						>
							{__('Load more', 'nextora')}
							{` (${String(filtered.length - visible.length)})`}
						</Button>
					)}

					<div className="nextora-icon-picker__footer">
						<span className="nextora-icon-picker__count">
							{selectedNames.length > 0
								? `${selectedNames.length} ${__('icon(s) selected', 'nextora')}`
								: __('No icons selected', 'nextora')}
						</span>
						<Button
							variant="primary"
							onClick={() => {
								setPickerOpen(false);
								setSearch('');
								setPage(1);
							}}
						>
							{__('Done', 'nextora')}
						</Button>
					</div>
				</Modal>
			)}
		</div>
	);
}
