import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	ToggleControl,
	TextControl,
	Button,
} from '@wordpress/components';
import { useMemo } from '@wordpress/element';
import type { BlockEditProps } from '@wordpress/blocks';
import {
	PLUGIN_PRESETS,
	DEFAULT_MESSAGE,
	DEFAULT_PLUGINS_LABEL,
	createEmptyPlugin,
	createPluginFromPreset,
	getPluginDisplayName,
	resolvePlugins,
	type Attributes,
	type PluginItem,
} from './types';

function hasContent(plugin: PluginItem): boolean {
	return plugin.name.trim() !== '' || plugin.url.trim() !== '';
}

export default function PluginNoticeEdit({
	attributes,
	setAttributes,
}: BlockEditProps<Attributes>) {
	const { message, pluginsLabel, enableScrollAnimation = true } = attributes;
	const label = pluginsLabel?.trim() || DEFAULT_PLUGINS_LABEL;
	const plugins = useMemo(() => resolvePlugins(attributes), [attributes]);
	const displayPlugins = plugins.filter(hasContent);
	const scrollEnabled = enableScrollAnimation !== false;

	const blockProps = useBlockProps({
		className: 'nextora-plugin-notice',
		...(scrollEnabled ? { 'data-nextora-scroll-reveal': '1' } : {}),
	});

	const patchPlugin = (index: number, patch: Partial<PluginItem>): void => {
		setAttributes({
			plugins: plugins.map((plugin, i) =>
				i === index ? { ...plugin, ...patch } : plugin,
			),
		});
	};

	const addPreset = (presetId: string): void => {
		const preset = PLUGIN_PRESETS.find((item) => item.id === presetId);
		if (!preset || plugins.some((plugin) => plugin.id === preset.id)) {
			return;
		}
		setAttributes({ plugins: [...plugins, createPluginFromPreset(preset)] });
	};

	const availablePresets = PLUGIN_PRESETS.filter(
		(preset) => !plugins.some((plugin) => plugin.id === preset.id),
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Settings', 'nextora')} initialOpen>
					<TextControl
						label={__('Message', 'nextora')}
						value={message}
						placeholder={DEFAULT_MESSAGE}
						help={__(
							'Shown inside the dotted border. You can also edit it directly in the canvas.',
							'nextora',
						)}
						onChange={(value) => setAttributes({ message: value ?? '' })}
					/>
					<Button
						variant="secondary"
						onClick={() => setAttributes({ message: DEFAULT_MESSAGE })}
					>
						{__('Reset to default', 'nextora')}
					</Button>
				</PanelBody>

				<PanelBody title={__('Plugins', 'nextora')} initialOpen>
					<TextControl
						label={__('Plugins line label', 'nextora')}
						value={pluginsLabel}
						placeholder={DEFAULT_PLUGINS_LABEL}
						help={__(
							'Intro sentence shown before the comma-separated plugin names.',
							'nextora',
						)}
						onChange={(value) => setAttributes({ pluginsLabel: value ?? '' })}
					/>
					<p className="components-base-control__help nextora-plugin-notice__panel-help">
						{__(
							'Add a plugin name and link for each entry, or use a theme preset below.',
							'nextora',
						)}
					</p>

					<div className="nextora-plugin-notice__inspector-plugins">
						{plugins.map((plugin, index) => (
							<div
								key={plugin.id || `plugin-${index}`}
								className="nextora-plugin-notice__inspector-plugin"
							>
								<p className="nextora-plugin-notice__inspector-plugin-label">
									{__('Plugin', 'nextora')} {index + 1}
								</p>
								<TextControl
									label={__('Name', 'nextora')}
									value={plugin.name}
									onChange={(value) => patchPlugin(index, { name: value ?? '' })}
								/>
								<TextControl
									label={__('Link', 'nextora')}
									value={plugin.url}
									placeholder="https://"
									onChange={(value) => patchPlugin(index, { url: value ?? '' })}
								/>
								<Button
									variant="link"
									isDestructive
									onClick={() =>
										setAttributes({
											plugins: plugins.filter((_, i) => i !== index),
										})
									}
								>
									{__('Remove', 'nextora')}
								</Button>
							</div>
						))}
					</div>

					<PanelRow>
						<Button
							variant="primary"
							onClick={() =>
								setAttributes({ plugins: [...plugins, createEmptyPlugin()] })
							}
						>
							{__('Add plugin', 'nextora')}
						</Button>
					</PanelRow>

					{availablePresets.length > 0 ? (
						<div className="nextora-plugin-notice__preset-actions">
							<p className="components-base-control__label">
								{__('Theme presets', 'nextora')}
							</p>
							<div className="nextora-plugin-notice__preset-buttons">
								{availablePresets.map((preset) => (
									<Button
										key={preset.id}
										variant="secondary"
										onClick={() => addPreset(preset.id)}
									>
										{preset.name}
									</Button>
								))}
							</div>
						</div>
					) : null}
				</PanelBody>

				<PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Animate on scroll', 'nextora')}
						help={__(
							'Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.',
							'nextora',
						)}
						checked={scrollEnabled}
						onChange={(value) => setAttributes({ enableScrollAnimation: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="nextora-plugin-notice__inner">
					<RichText
						tagName="p"
						className="nextora-plugin-notice__message"
						value={message}
						onChange={(value) => setAttributes({ message: value })}
						placeholder={DEFAULT_MESSAGE}
						allowedFormats={['core/bold', 'core/italic', 'core/link']}
					/>

					{displayPlugins.length > 0 ? (
						<p className="nextora-plugin-notice__plugins">
							<span className="nextora-plugin-notice__plugins-label">{label}</span>{' '}
							{displayPlugins.map((plugin, index) => {
								const name = getPluginDisplayName(plugin);
								const separator = index < displayPlugins.length - 1 ? ', ' : '';
								return (
									<span key={plugin.id}>
										{plugin.url.trim() ? (
											<a
												className="nextora-plugin-notice__plugin-name"
												href={plugin.url}
												target="_blank"
												rel="noopener noreferrer"
												onClick={(event) => event.preventDefault()}
											>
												{name}
											</a>
										) : (
											<span className="nextora-plugin-notice__plugin-name">
												{name}
											</span>
										)}
										{separator}
									</span>
								);
							})}
						</p>
					) : (
						<p className="nextora-plugin-notice__empty">
							{__('Add at least one plugin in the sidebar.', 'nextora')}
						</p>
					)}
				</div>
			</div>
		</>
	);
}
