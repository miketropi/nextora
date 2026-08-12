import { __ } from '@wordpress/i18n';
import { useEffect, useMemo, useRef, useState } from '@wordpress/element';
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	PanelColorSettings,
} from '@wordpress/block-editor';
import type { BlockEditProps } from '@wordpress/blocks';
import {
	PanelBody,
	RadioControl,
	RangeControl,
	TextControl,
	SelectControl,
	Button,
	Notice,
		ToggleControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import ServerSideRender from '@wordpress/server-side-render';
import { IconPicker } from './icon-picker';
import {
	colorValueForPicker,
	getMergedPaletteEntries,
	gradientValueForPicker,
	normalizeColorForStorage,
	normalizeGradientForStorage,
	useThemeColorPalette,
} from './color-utils';
import type { GradientPreset } from './color-utils';
import type { IconAttributes, IconAlign, IconLinkTarget, IconSource, IconStyle } from './types';

export default function IconEdit( {
	attributes,
	setAttributes,
}: BlockEditProps< IconAttributes > ) {
	const {
		iconSource = 'theme',
		iconName = 'star',
		uploadedIconUrl = '',
		uploadedIconId = 0,
		iconSize = 24,
		iconColor = '',
		strokeWidth = 2,
		iconAlign = 'left',
		iconStyle = 'default',
		borderRadius = 8,
		surfacePadding = 16,
		surfaceBackgroundColor = '',
		surfaceGradient = '',
		surfaceBorderColor = '',
		backgroundColor: legacyBackgroundColor = '',
		borderColor: legacyBorderColor = '',
		linkUrl = '',
		linkTarget = '_self',
		ariaLabel = '',
		enableScrollAnimation = true,
	} = attributes;

	const [ pickerOpen, setPickerOpen ] = useState( false );
	const colorPalette = useThemeColorPalette();
	const themeGradients = useSelect(
		( select ): GradientPreset[] => {
			try {
				const settings =
					(
						select( 'core/block-editor' ) as {
							getSettings?: () => { gradients?: GradientPreset[] };
						}
					).getSettings?.() ?? {};
				if ( Array.isArray( settings.gradients ) && settings.gradients.length ) {
					return settings.gradients;
				}
			} catch {
				/* getSettings unavailable */
			}
			return [];
		},
		[],
	);
	const lookupPalette = useMemo(
		() => getMergedPaletteEntries( colorPalette ),
		[ colorPalette ],
	);
	const migratedColors = useRef( false );

	const scrollEnabled = enableScrollAnimation !== false;

	const resolvedSurfaceBackgroundColor =
		surfaceBackgroundColor || legacyBackgroundColor;
	const resolvedSurfaceBorderColor = surfaceBorderColor || legacyBorderColor;

	const setThemeColor = (
		key: 'iconColor' | 'surfaceBackgroundColor' | 'surfaceBorderColor',
		value: string | undefined,
	) => {
		setAttributes( {
			[ key ]: normalizeColorForStorage( value, lookupPalette ),
		} );
	};

	useEffect( () => {
		if ( migratedColors.current ) {
			return;
		}

		migratedColors.current = true;

		const updates: Partial< IconAttributes > = {};
		const keys = [
			'iconColor',
			'surfaceBackgroundColor',
			'surfaceBorderColor',
		] as const;

		for ( const key of keys ) {
			const val =
				key === 'surfaceBackgroundColor'
					? resolvedSurfaceBackgroundColor
					: key === 'surfaceBorderColor'
						? resolvedSurfaceBorderColor
						: attributes[ key ];
			if ( ! val || typeof val !== 'string' ) {
				continue;
			}

			if (
				/^[a-z0-9-]+$/i.test( val ) &&
				lookupPalette.some( ( entry ) => entry.slug === val.toLowerCase() )
			) {
				continue;
			}

			const slug = normalizeColorForStorage( val, lookupPalette );
			if ( slug !== val && /^[a-z0-9-]+$/.test( slug ) ) {
				updates[ key ] = slug;
			}
		}

		if ( legacyBackgroundColor && ! surfaceBackgroundColor ) {
			updates.surfaceBackgroundColor = normalizeColorForStorage(
				legacyBackgroundColor,
				lookupPalette,
			);
			updates.backgroundColor = '';
		}

		if ( legacyBorderColor && ! surfaceBorderColor ) {
			updates.surfaceBorderColor = normalizeColorForStorage(
				legacyBorderColor,
				lookupPalette,
			);
			updates.borderColor = '';
		}

		if ( Object.keys( updates ).length > 0 ) {
			setAttributes( updates );
		}
	}, [
		attributes,
		legacyBackgroundColor,
		legacyBorderColor,
		lookupPalette,
		resolvedSurfaceBackgroundColor,
		resolvedSurfaceBorderColor,
		setAttributes,
		surfaceBackgroundColor,
		surfaceBorderColor,
	] );

	const blockProps = useBlockProps( {
		className: `nextora-advanced-icon nextora-advanced-icon--align-${ iconAlign } nextora-advanced-icon--style-${ iconStyle }${
			scrollEnabled ? '' : ' nextora-advanced-icon--scroll-off nextora-scroll-animation--ready'
		}`,
		...( scrollEnabled
			? { 'data-nextora-scroll-reveal': '1' }
			: { 'data-nextora-scroll-animation-init': '1' } ),
	} );

	/*
     * Strip spacing classes/styles from the outer wrapper — ServerSideRender
	 * already applies them on the inner wrapper via render.php.
	 */
	if ( typeof blockProps.className === 'string' ) {
		blockProps.className = blockProps.className
			.split( /\s+/ )
			.filter( ( c: string ) => ! /^has-(margin|padding)-/.test( c ) )
			.join( ' ' )
			.trim();
	}

	if ( blockProps.style && typeof blockProps.style === 'object' ) {
		const spacingProps = new Set( [ 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft' ] );
		const filtered: Record< string, string > = {};
		for ( const [ key, value ] of Object.entries( blockProps.style as Record< string, string > ) ) {
			if ( ! spacingProps.has( key ) ) {
				filtered[ key ] = value;
			}
		}
		blockProps.style = filtered;
	}

	const hasSurfaceStyle = iconStyle === 'stacked' || iconStyle === 'framed';

	const showLinkAriaWarning = '' !== linkUrl.trim() && '' === ariaLabel.trim();

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'nextora' ) } initialOpen>
					<RadioControl
						label={ __( 'Source', 'nextora' ) }
						selected={ iconSource }
						options={ [
							{
								label: __( 'Theme icon', 'nextora' ),
								value: 'theme',
							},
							{
								label: __( 'Upload custom icon', 'nextora' ),
								value: 'upload',
							},
						] }
						onChange={ ( value: string ) =>
							setAttributes( { iconSource: value as IconSource } )
						}
					/>

					{ iconSource === 'theme' && (
						<Button
							variant="secondary"
							onClick={ () => setPickerOpen( true ) }
						>
							{ __( 'Choose icon', 'nextora' ) }
							{ `: ${ iconName }` }
						</Button>
					) }

					{ iconSource === 'upload' && (
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( media: { url: string; id: number } ) =>
									setAttributes( {
										uploadedIconUrl: media.url,
										uploadedIconId: media.id,
									} )
								}
								allowedTypes={ [ 'image' ] }
								value={ uploadedIconId }
								render={ ( { open } ) => (
									<Button variant="secondary" onClick={ open }>
										{ uploadedIconUrl
											? __( 'Replace icon image', 'nextora' )
											: __( 'Upload icon image', 'nextora' ) }
									</Button>
								) }
							/>
						</MediaUploadCheck>
					) }
				</PanelBody>

				<PanelBody title={ __( 'Layout', 'nextora' ) } initialOpen>
					<SelectControl
						label={ __( 'Theme style', 'nextora' ) }
						value={ iconStyle }
						options={ [
							{ label: __( 'Default', 'nextora' ), value: 'default' },
							{ label: __( 'Stacked', 'nextora' ), value: 'stacked' },
							{ label: __( 'Framed', 'nextora' ), value: 'framed' },
						] }
						onChange={ ( value: string ) =>
							setAttributes( { iconStyle: value as IconStyle } )
						}
						help={ __(
							'Stacked adds a filled background; Framed adds a border around the icon.',
							'nextora'
						) }
					/>

					{ hasSurfaceStyle && (
						<>
							<RangeControl
								label={ __( 'Border radius (px)', 'nextora' ) }
								value={ borderRadius }
								onChange={ ( value: number | undefined ) =>
									setAttributes( { borderRadius: value ?? 8 } )
								}
								min={ 0 }
								max={ 999 }
								step={ 1 }
							/>
							<RangeControl
								label={ __( 'Padding (px)', 'nextora' ) }
								value={ surfacePadding }
								onChange={ ( value: number | undefined ) =>
									setAttributes( { surfacePadding: value ?? 16 } )
								}
								min={ 0 }
								max={ 200 }
								step={ 1 }
							/>
						</>
					) }

					<RangeControl
						label={ __( 'Size (px)', 'nextora' ) }
						value={ iconSize }
						onChange={ ( value: number | undefined ) =>
							setAttributes( { iconSize: value ?? 24 } )
						}
						min={ 12 }
						max={ 256 }
						step={ 1 }
					/>

					{ iconSource === 'theme' && (
						<RangeControl
							label={ __( 'Stroke width', 'nextora' ) }
							value={ strokeWidth }
							onChange={ ( value: number | undefined ) =>
								setAttributes( { strokeWidth: value ?? 2 } )
							}
							min={ 0.5 }
							max={ 4 }
							step={ 0.5 }
						/>
					) }

					<SelectControl
						label={ __( 'Alignment', 'nextora' ) }
						value={ iconAlign }
						options={ [
							{ label: __( 'Left', 'nextora' ), value: 'left' },
							{ label: __( 'Center', 'nextora' ), value: 'center' },
							{ label: __( 'Right', 'nextora' ), value: 'right' },
						] }
						onChange={ ( value: string ) =>
							setAttributes( { iconAlign: value as IconAlign } )
						}
					/>
				</PanelBody>

				{ ( iconSource === 'theme' ||
					iconStyle === 'stacked' ||
					iconStyle === 'framed' ) && (
					<PanelColorSettings
						title={ __( 'Colors', 'nextora' ) }
						enableAlpha
						gradients={ themeGradients }
						disableCustomGradients={ false }
						colorSettings={
							[
								...( iconSource === 'theme'
									? [
											{
												value: colorValueForPicker(
													iconColor,
													colorPalette,
													lookupPalette,
												),
												onChange: ( value: string | undefined ) =>
													setThemeColor( 'iconColor', value ),
												label: __( 'Icon color', 'nextora' ),
											},
										]
									: [] ),
								...( iconStyle === 'stacked'
									? [
											{
												value: colorValueForPicker(
													resolvedSurfaceBackgroundColor,
													colorPalette,
													lookupPalette,
												),
												onChange: ( value: string | undefined ) =>
													setThemeColor( 'surfaceBackgroundColor', value ),
												label: __( 'Background color', 'nextora' ),
												gradientValue: gradientValueForPicker( surfaceGradient, themeGradients ),
											onGradientChange: ( value: string | undefined ) =>
												setAttributes( {
													surfaceGradient: normalizeGradientForStorage( value, themeGradients ),
												} ),
											},
										]
									: [] ),
								...( iconStyle === 'framed'
									? [
											{
												value: colorValueForPicker(
													resolvedSurfaceBorderColor,
													colorPalette,
													lookupPalette,
												),
												onChange: ( value: string | undefined ) =>
													setThemeColor( 'surfaceBorderColor', value ),
												label: __( 'Border color', 'nextora' ),
											},
										]
									: [] ),
							] as any[]
						}
					/>
				) }

				<PanelBody title={ __( 'Link', 'nextora' ) } initialOpen={ false }>
					<TextControl
						label={ __( 'Link URL', 'nextora' ) }
						value={ linkUrl }
						onChange={ ( value: string ) =>
							setAttributes( { linkUrl: value } )
						}
						placeholder="https://example.com"
					/>
					{ '' !== linkUrl.trim() && (
						<SelectControl
							label={ __( 'Open in', 'nextora' ) }
							value={ linkTarget }
							options={ [
								{ label: __( 'Same tab', 'nextora' ), value: '_self' },
								{ label: __( 'New tab', 'nextora' ), value: '_blank' },
							] }
							onChange={ ( value: string ) =>
								setAttributes( {
									linkTarget: value as IconLinkTarget,
								} )
							}
						/>
					) }
				</PanelBody>

				<PanelBody
					title={ __( 'Accessibility', 'nextora' ) }
					initialOpen={ false }
				>
					<TextControl
						label={ __( 'Aria label', 'nextora' ) }
						help={ __(
							'Required if this icon is a standalone link with no surrounding text.',
							'nextora'
						) }
						value={ ariaLabel }
						onChange={ ( value: string ) =>
							setAttributes( { ariaLabel: value } )
						}
					/>
					{ showLinkAriaWarning && (
						<Notice status="warning" isDismissible={ false }>
							{ __(
								'Add an aria label when the icon is used as a standalone link.',
								'nextora'
							) }
						</Notice>
					) }
				</PanelBody>

				<PanelBody title={ __( 'Animation', 'nextora' ) } initialOpen={ false }>
					<ToggleControl
						label={ __( 'Animate on scroll', 'nextora' ) }
						help={ __(
							'Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.',
							'nextora'
						) }
						checked={ scrollEnabled }
						onChange={ ( value: boolean ) =>
							setAttributes( { enableScrollAnimation: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<ServerSideRender block="nextora/advanced-icon" attributes={ attributes } />
			</div>

			{ pickerOpen && (
				<IconPicker
					currentIcon={ iconName }
					onSelect={ ( name ) => {
						setAttributes( { iconName: name } );
						setPickerOpen( false );
					} }
					onClose={ () => setPickerOpen( false ) }
				/>
			) }
		</>
	);
}
