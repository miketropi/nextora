import apiFetch from '@wordpress/api-fetch';
import { parse } from '@wordpress/blocks';
import {
	Button,
	Modal,
	SelectControl,
	Spinner,
} from '@wordpress/components';
import { useDispatch } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
	AlertCircleIcon,
	CheckCircleIcon,
	CloudIcon,
	DownloadIcon,
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
	const [selectedTheme, setSelectedTheme] = useState<string>(
		config?.activeTheme || 'nextora',
	);
	const [themes, setThemes] = useState<CloudThemeItem[]>([]);
	const [templates, setTemplates] = useState<CloudTemplateItem[]>([]);
	const [category, setCategory] = useState<string>('all');
	const [search, setSearch] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);
	const [insertingId, setInsertingId] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [successMsg, setSuccessMsg] = useState<string | null>(null);

	// Block editor dispatch
	const { insertBlocks } = useDispatch('core/block-editor') as {
		insertBlocks: (blocks: unknown[]) => void;
	};

	// Fetch themes on open
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

	// Insert template directly into current post canvas
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

			// Parse raw block markup into Gutenberg block objects
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
		<Modal
			title={__('Nextora Cloud Template Library', 'nextora')}
			onRequestClose={onClose}
			className="nextora-cloud-editor-modal"
			style={{ maxWidth: '960px', width: '92vw' }}
		>
			<div className="nextora-cloud-modal-content">
				<div className="nextora-cloud-modal-toolbar">
					<div className="nextora-cloud-modal-toolbar__theme">
						<SelectControl
							label={__('Catalog:', 'nextora')}
							value={selectedTheme}
							options={themeOptions}
							onChange={setSelectedTheme}
						/>
					</div>

					<div className="nextora-cloud-modal-toolbar__search">
						<SearchIcon className="nextora-cloud-filterbar__search-icon" />
						<input
							type="search"
							value={search}
							placeholder={__('Search templates...', 'nextora')}
							onChange={(e) => setSearch(e.target.value)}
							className="nextora-cloud-filterbar__search-input"
						/>
					</div>

					<Button
						variant="tertiary"
						icon={<RefreshIcon />}
						onClick={() => loadCatalog(true)}
						isBusy={loading}
					/>
				</div>

				{error && (
					<div className="nextora-cloud-alert nextora-cloud-alert--error">
						<AlertCircleIcon width={16} height={16} />
						<span>{error}</span>
					</div>
				)}

				{successMsg && (
					<div className="nextora-cloud-alert nextora-cloud-alert--success">
						<CheckCircleIcon width={16} height={16} />
						<span>{successMsg}</span>
					</div>
				)}

				{loading ? (
					<div
						style={{
							padding: '60px',
							textAlign: 'center',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<Spinner />
					</div>
				) : templates.length === 0 ? (
					<div className="nextora-cloud-empty">
						<CloudIcon width={40} height={40} />
						<p>{__('No templates found in catalog.', 'nextora')}</p>
					</div>
				) : (
					<div className="nextora-cloud-grid" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
						{templates.map((tpl) => (
							<div key={tpl.id} className="nextora-cloud-card">
								<div
									className="nextora-cloud-card__preview"
									style={{ height: '140px' }}
								>
									{tpl.thumbnailUrl ? (
										<img
											src={tpl.thumbnailUrl}
											alt={tpl.title}
											className="nextora-cloud-card__img"
											loading="lazy"
										/>
									) : (
										<div className="nextora-cloud-card__placeholder">
											<span>{tpl.title}</span>
										</div>
									)}
								</div>
								<div className="nextora-cloud-card__body">
									<div className="nextora-cloud-card__header">
										<h4 className="nextora-cloud-card__title">
											{tpl.title}
										</h4>
										<span className="nextora-cloud-card__category">
											{tpl.category}
										</span>
									</div>
									<div style={{ marginTop: '10px' }}>
										<Button
											variant="primary"
											style={{
												width: '100%',
												justifyContent: 'center',
											}}
											isBusy={insertingId === tpl.id}
											disabled={insertingId !== null}
											onClick={() => handleInsert(tpl)}
										>
											<DownloadIcon
												width={14}
												height={14}
											/>
											{insertingId === tpl.id
												? __('Inserting...', 'nextora')
												: __('Insert into Canvas', 'nextora')}
										</Button>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</Modal>
	);
}
