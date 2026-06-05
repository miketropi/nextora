import type { CSSProperties } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	Button,
	Notice,
	PanelBody,
	PanelRow,
	RadioControl,
	RangeControl,
	TextareaControl,
	TextControl,
	ToggleControl,
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';
import ApiMapPreview from './editor-api-preview';
import { buildIframeSrc } from './iframe-src';
import type { GoogleMapsAttributes, MapMode, MarkerItem } from './types';

interface EditProps {
	attributes: GoogleMapsAttributes;
	setAttributes: (attrs: Partial<GoogleMapsAttributes>) => void;
}

const DEFAULT_MARKERS: MarkerItem[] = [];

function createId(): string {
	if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
		return `marker_${crypto.randomUUID()}`;
	}
	return `marker_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

function normalizeMarkers(markers: MarkerItem[] | undefined): MarkerItem[] {
	if (!Array.isArray(markers)) {
		return DEFAULT_MARKERS.map((item) => ({ ...item }));
	}

	return markers.map((marker, index) => ({
		id: typeof marker?.id === 'string' && marker.id !== '' ? marker.id : `marker_${index + 1}`,
		lat: typeof marker?.lat === 'number' ? marker.lat : parseFloat(String(marker?.lat)) || 0,
		lng: typeof marker?.lng === 'number' ? marker.lng : parseFloat(String(marker?.lng)) || 0,
		title: typeof marker?.title === 'string' ? marker.title : '',
		infoHtml: typeof marker?.infoHtml === 'string' ? marker.infoHtml : '',
		iconUrl: typeof marker?.iconUrl === 'string' ? marker.iconUrl : '',
	}));
}

function validateStyleJson(value: string): string | null {
	const trimmed = value.trim();
	if (trimmed === '') {
		return null;
	}
	try {
		const parsed = JSON.parse(trimmed) as unknown;
		if (!Array.isArray(parsed)) {
			return __('Custom style JSON must be an array.', 'nextora');
		}
		return null;
	} catch {
		return __('Custom style JSON is invalid.', 'nextora');
	}
}

export default function GoogleMapsEdit({ attributes, setAttributes }: EditProps) {
	const {
		mapMode = 'iframe',
		address = '',
		lat = 21.0285,
		lng = 105.8542,
		zoom = 15,
		mapHeight = 450,
		borderRadius = 0,
		showControls = true,
		markers: rawMarkers,
		mapStyleJson = '',
		showDirections = false,
		apiKey = '',
		enableScrollAnimation = true,
	} = attributes;

	const markers = normalizeMarkers(rawMarkers);
	const styleError = validateStyleJson(mapStyleJson);
	const height = Math.max(200, Math.min(1200, mapHeight || 450));
	const radiusPx = Math.max(0, Math.min(999, borderRadius || 0));
	const isApiMode = mapMode === 'api';
	const isIframeMode = mapMode === 'iframe';
	const trimmedApiKey = apiKey.trim();
	const locationLabel =
		address.trim() !== ''
			? address.trim()
			: `${lat}, ${lng}`;
	const mapPreviewTitle = `${__('Map showing', 'nextora')} ${locationLabel}`;

	const iframeSrc = isIframeMode
		? buildIframeSrc(address, lat, lng, zoom, trimmedApiKey, showControls)
		: '';

	const blockProps = useBlockProps({
		className: [
			'nextora-google-maps',
			`nextora-google-maps--mode-${mapMode}`,
			isIframeMode ? 'nextora-google-maps--editor-iframe' : 'nextora-google-maps--editor-api',
			isIframeMode && !showControls ? 'nextora-google-maps--hide-controls' : '',
		]
			.filter(Boolean)
			.join(' '),
		style: {
			'--nextora-google-maps-height': `${height}px`,
			height: `${height}px`,
			...(radiusPx > 0 ? { borderRadius: `${radiusPx}px` } : {}),
		} as CSSProperties,
	});

	const updateMarker = (id: string, field: keyof MarkerItem, value: string | number): void => {
		setAttributes({
			markers: markers.map((marker) =>
				marker.id === id ? { ...marker, [field]: value } : marker,
			),
		});
	};

	const addMarker = (): void => {
		setAttributes({
			markers: [
				...markers,
				{
					id: createId(),
					lat,
					lng,
					title: '',
					infoHtml: '',
					iconUrl: '',
				},
			],
		});
	};

	const removeMarker = (id: string): void => {
		setAttributes({ markers: markers.filter((marker) => marker.id !== id) });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Settings', 'nextora')} initialOpen>
					<RadioControl
						label={__('Map mode', 'nextora')}
						selected={mapMode}
						options={[
							{
								label: __('Iframe embed', 'nextora'),
								value: 'iframe',
							},
							{
								label: __('JavaScript API', 'nextora'),
								value: 'api',
							},
						]}
						onChange={(value) => setAttributes({ mapMode: (value as MapMode) ?? 'iframe' })}
						help={
							isIframeMode
								? __(
										'Embeds Google Maps in an iframe. No API key required — the map preview appears in the editor.',
										'nextora',
									)
								: __(
										'Full JavaScript map with custom markers and styles. Requires a Google Maps API key below.',
										'nextora',
									)
						}
					/>

					{isApiMode && (
						<>
							<TextControl
								label={__('Google Maps API key', 'nextora')}
								value={apiKey}
								onChange={(value) => setAttributes({ apiKey: value ?? '' })}
								type="password"
								autoComplete="off"
								help={__(
									'Required for JavaScript API mode. Enable the Maps JavaScript API in Google Cloud Console. The key is saved with this block.',
									'nextora',
								)}
							/>
							{trimmedApiKey === '' && (
								<Notice status="warning" isDismissible={false}>
									{__(
										'Enter an API key to preview and render the interactive map.',
										'nextora',
									)}
								</Notice>
							)}
						</>
					)}

					<TextControl
						label={__('Address / location', 'nextora')}
						value={address}
						onChange={(value) => setAttributes({ address: value ?? '' })}
						help={__(
							'Enter a place name or full address (for example “Opera House, Sydney” or “123 Main Street, Hanoi”). When this field is empty, the map uses the Latitude and Longitude fields below instead.',
							'nextora',
						)}
						placeholder={__('123 Main Street, Hanoi', 'nextora')}
					/>
					<NumberControl
						label={__('Latitude', 'nextora')}
						value={lat}
						onChange={(value) =>
							setAttributes({ lat: parseFloat(String(value ?? '0')) || 0 })
						}
						help={__(
							'Used when Address / location is empty. Decimal degrees (for example 21.0285).',
							'nextora',
						)}
					/>
					<NumberControl
						label={__('Longitude', 'nextora')}
						value={lng}
						onChange={(value) =>
							setAttributes({ lng: parseFloat(String(value ?? '0')) || 0 })
						}
						help={__(
							'Used when Address / location is empty. Decimal degrees (for example 105.8542).',
							'nextora',
						)}
					/>
					<RangeControl
						label={__('Zoom level', 'nextora')}
						value={zoom}
						onChange={(value) => setAttributes({ zoom: value ?? 15 })}
						min={1}
						max={20}
					/>
					<NumberControl
						label={__('Map height (px)', 'nextora')}
						value={height}
						onChange={(value) =>
							setAttributes({ mapHeight: parseInt(String(value ?? '450'), 10) || 450 })
						}
						min={200}
						max={1200}
						help={__('Height of the map container in the editor and on the front end.', 'nextora')}
					/>
					<NumberControl
						label={__('Border radius (px)', 'nextora')}
						value={radiusPx}
						onChange={(value) =>
							setAttributes({
								borderRadius: Math.max(0, Math.min(999, parseInt(String(value ?? '0'), 10) || 0)),
							})
						}
						min={0}
						max={999}
						help={__(
							'Corner radius in pixels. Use 0 for square corners.',
							'nextora',
						)}
					/>
					<ToggleControl
						label={__('Show map controls', 'nextora')}
						checked={showControls}
						onChange={(value) => setAttributes({ showControls: value })}
						help={
							isIframeMode
								? __(
										'When off, zoom and Street View controls are cropped from the iframe embed. Iframe mode does not support hiding every Google UI element.',
										'nextora',
									)
								: __(
										'Zoom buttons and street view control on the JavaScript map.',
										'nextora',
									)
						}
					/>
				</PanelBody>

				{isApiMode && (
					<PanelBody title={__('Markers', 'nextora')} initialOpen={false}>
						<div className="nextora-google-maps__inspector-markers">
							{markers.map((marker) => (
								<div key={marker.id} className="nextora-google-maps__inspector-marker">
									<TextControl
										label={__('Title', 'nextora')}
										value={marker.title}
										onChange={(value) => updateMarker(marker.id, 'title', value ?? '')}
									/>
									<NumberControl
										label={__('Latitude', 'nextora')}
										value={marker.lat}
										onChange={(value) =>
											updateMarker(marker.id, 'lat', parseFloat(String(value ?? '0')) || 0)
										}
									/>
									<NumberControl
										label={__('Longitude', 'nextora')}
										value={marker.lng}
										onChange={(value) =>
											updateMarker(marker.id, 'lng', parseFloat(String(value ?? '0')) || 0)
										}
									/>
									<TextareaControl
										label={__('Info popup HTML', 'nextora')}
										value={marker.infoHtml}
										onChange={(value) => updateMarker(marker.id, 'infoHtml', value ?? '')}
										help={__(
											'Optional HTML shown when the marker is clicked.',
											'nextora',
										)}
									/>
									<TextControl
										label={__('Custom icon URL', 'nextora')}
										value={marker.iconUrl}
										onChange={(value) => updateMarker(marker.id, 'iconUrl', value ?? '')}
										help={__('Leave empty to use the default pin.', 'nextora')}
									/>
									<div className="nextora-google-maps__inspector-marker-actions">
										<Button
											variant="secondary"
											size="small"
											isDestructive
											onClick={() => removeMarker(marker.id)}
										>
											{__('Remove marker', 'nextora')}
										</Button>
									</div>
								</div>
							))}
						</div>
						<PanelRow>
							<Button variant="primary" onClick={addMarker}>
								{__('Add marker', 'nextora')}
							</Button>
						</PanelRow>
						<TextareaControl
							label={__('Custom style JSON', 'nextora')}
							value={mapStyleJson}
							onChange={(value) => setAttributes({ mapStyleJson: value ?? '' })}
							help={__(
								'Paste a JSON style array (for example from Snazzy Maps). Leave empty for the default map style.',
								'nextora',
							)}
						/>
						{styleError && (
							<Notice status="error" isDismissible={false} className="nextora-google-maps__style-error">
								{styleError}
							</Notice>
						)}
						{markers.length >= 2 && (
							<ToggleControl
								label={__('Show directions', 'nextora')}
								checked={showDirections}
								onChange={(value) => setAttributes({ showDirections: value })}
								help={__(
									'Draw a driving route between the first and last marker.',
									'nextora',
								)}
							/>
						)}
					</PanelBody>
				)}

				<PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Animate on scroll', 'nextora')}
						help={__(
							'Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.',
							'nextora',
						)}
						checked={enableScrollAnimation !== false}
						onChange={(value) => setAttributes({ enableScrollAnimation: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				{isIframeMode && iframeSrc !== '' && (
					<iframe
						className="nextora-google-maps__iframe nextora-google-maps__iframe--editor"
						src={iframeSrc}
						width="100%"
						height="100%"
						style={{ border: 0 }}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title={mapPreviewTitle}
					/>
				)}

				{isApiMode && trimmedApiKey !== '' && (
					<ApiMapPreview
						apiKey={trimmedApiKey}
						lat={lat}
						lng={lng}
						zoom={zoom}
						showControls={showControls}
						markers={markers}
						mapStyleJson={mapStyleJson}
						title={mapPreviewTitle}
					/>
				)}

				{isApiMode && trimmedApiKey === '' && (
					<div className="nextora-google-maps__editor-empty">
						<span className="dashicons dashicons-location-alt" aria-hidden="true" />
						<p>
							{__(
								'Enter a Google Maps API key in Settings to preview the interactive map.',
								'nextora',
							)}
						</p>
					</div>
				)}

				{((isIframeMode && iframeSrc !== '') || (isApiMode && trimmedApiKey !== '')) && (
					<div
						className="nextora-google-maps__editor-shield"
						aria-hidden="true"
					/>
				)}
			</div>
		</>
	);
}
