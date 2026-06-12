import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
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
import ServerSideRender from '@wordpress/server-side-render';
import { IconPicker } from './icon-picker';
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
		backgroundColor = '',
		borderColor = '',
		linkUrl = '',
		linkTarget = '_self',
		ariaLabel = '',
		cssClass = '',
		enableScrollAnimation = true,
	} = attributes;

	const [ pickerOpen, setPickerOpen ] = useState( false );

	const scrollEnabled = enableScrollAnimation !== false;

	const blockProps = useBlockProps( {
		className: `nextora-icon nextora-icon--align-${ iconAlign } nextora-icon--style-${ iconStyle }${
			scrollEnabled ? '' : ' nextora-icon--scroll-off nextora-scroll-animation--ready'
		}`,
		...( scrollEnabled
			? { 'data-nextora-scroll-reveal': '1' }
			: { 'data-nextora-scroll-animation-init': '1' } ),
	} );

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
						colorSettings={ [
							...( iconSource === 'theme'
								? [
										{
											value: iconColor,
											onChange: ( value: string | undefined ) =>
												setAttributes( { iconColor: value ?? '' } ),
											label: __( 'Icon color', 'nextora' ),
										},
									]
								: [] ),
							...( iconStyle === 'stacked'
								? [
										{
											value: backgroundColor,
											onChange: ( value: string | undefined ) =>
												setAttributes( {
													backgroundColor: value ?? '',
												} ),
											label: __( 'Background color', 'nextora' ),
										},
									]
								: [] ),
							...( iconStyle === 'framed'
								? [
										{
											value: borderColor,
											onChange: ( value: string | undefined ) =>
												setAttributes( { borderColor: value ?? '' } ),
											label: __( 'Border color', 'nextora' ),
										},
									]
								: [] ),
						] }
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
					<TextControl
						label={ __( 'Extra CSS class', 'nextora' ) }
						value={ cssClass }
						onChange={ ( value: string ) =>
							setAttributes( { cssClass: value } )
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
				<ServerSideRender block="nextora/icon" attributes={ attributes } />
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
