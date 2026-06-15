import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import type { CSSProperties } from 'react';
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	PanelColorSettings,
	RichText,
	BlockControls,
	LinkControl,
	InnerBlocks,
} from '@wordpress/block-editor';
import type { BlockEditProps } from '@wordpress/blocks';
import {
	PanelBody,
	RadioControl,
	RangeControl,
	TextControl,
	SelectControl,
	TextareaControl,
	ToggleControl,
	Button,
	Notice,
	ToolbarGroup,
	ToolbarButton,
	Popover,
} from '@wordpress/components';
import { IconPicker } from '../advanced-icon/icon-picker';
import { LucideSvgPreview } from '../advanced-icon/lucide-preview';
import type { LucideIconEntry, LucideIconNode } from '../advanced-icon/types';
import type {
	AdvancedButtonButtonAttributes,
	ButtonStyle,
	HoverEffect,
	IconPosition,
	IconSource,
	IconStyle,
	LinkType,
} from './types';
import {
	HOVER_EFFECTS_WITH_COLORS,
	MODAL_WIDTH_DEFAULT,
	MODAL_WIDTH_MAX,
	MODAL_WIDTH_MIN,
} from './types';
import { PopupContentBuilder } from './popup-content-builder';

const MODAL_CONTENT_TEMPLATE: [ string, Record< string, unknown > ][] = [
	[
		'core/paragraph',
		{
			placeholder: __( 'Add popup content…', 'nextora' ),
		},
	],
];

function buildModalId( clientId: string ): string {
	return `nextora-advanced-button-modal-${ clientId.replace( /[^a-z0-9]/gi, '' ) }`;
}

function buildClickEventId( clientId: string ): string {
	return `nextora-advanced-button-event-${ clientId.replace( /[^a-z0-9]/gi, '' ) }`;
}

function resolveEditorColor( value: string ): string {
	if ( '' === value ) {
		return '';
	}

	if (
		value.startsWith( '#' ) ||
		value.startsWith( 'rgb' ) ||
		value.startsWith( 'hsl' ) ||
		value.startsWith( 'var(' )
	) {
		return value;
	}

	return `var(--wp--preset--color--${ value })`;
}

function normalizeLinkUrl( url: string ): string {
	const trimmed = url.trim();
	return '' === trimmed || '#' === trimmed ? '' : trimmed;
}

async function loadIconCatalog(): Promise< LucideIconEntry[] > {
	const iconsUrl = window.nextoraIconBlock?.iconsUrl ?? '';
	if ( ! iconsUrl ) {
		return [];
	}

	const response = await fetch( iconsUrl );
	if ( ! response.ok ) {
		return [];
	}

	const data = ( await response.json() ) as LucideIconEntry[];
	return Array.isArray( data ) ? data : [];
}

export default function AdvancedButtonButtonEdit( {
	clientId,
	attributes,
	setAttributes,
}: BlockEditProps< AdvancedButtonButtonAttributes > ) {
	const {
		text = 'Button',
		url = '#',
		linkTarget = '_self',
		linkType = 'url',
		modalId = '',
		modalTitle = '',
		modalWidth = MODAL_WIDTH_DEFAULT,
		clickEventId = '',
		clickEventScript = '',
		buttonStyle = 'fill',
		borderRadius = 50,
		iconPosition = 'left',
		iconSource = 'theme',
		iconName = 'arrow-right',
		uploadedIconUrl = '',
		uploadedIconId = 0,
		iconSize = 20,
		iconColor = '',
		strokeWidth = 2,
		iconStyle = 'default',
		iconBorderRadius = 8,
		backgroundColor = '',
		textColor = '',
		borderColor = '',
		hoverEffect = 'opacity',
		hoverBackgroundColor = '',
		hoverTextColor = '',
		hoverBorderColor = '',
		ariaLabel = '',
		showIcon = true,
	} = attributes;

	const [ pickerOpen, setPickerOpen ] = useState( false );
	const [ contentPanelOpen, setContentPanelOpen ] = useState( false );
	const [ isLinkOpen, setIsLinkOpen ] = useState( false );
	const [ iconNodes, setIconNodes ] = useState< LucideIconNode[] | null >( null );

	const hasSurfaceStyle = iconStyle === 'stacked' || iconStyle === 'framed';
	const isIconOnly = showIcon && iconPosition === 'only';
	const showAriaWarning =
		isIconOnly && '' === ariaLabel.trim() && '' === text.trim();
	const showHoverColors = HOVER_EFFECTS_WITH_COLORS.includes( hoverEffect );
	const isModalLink = linkType === 'modal';
	const isClickEventLink = linkType === 'click-event';
	const isUrlLink = linkType === 'url';

	const modalWidthPx =
		typeof modalWidth === 'number' && ! Number.isNaN( modalWidth )
			? modalWidth
			: MODAL_WIDTH_DEFAULT;

	const innerBlocksProps = useInnerBlocksProps(
		{ className: 'nextora-advanced-button-modal__content' },
		{
			template: MODAL_CONTENT_TEMPLATE,
			templateLock: false,
			renderAppender: InnerBlocks.ButtonBlockAppender,
		},
	);

	const buttonClassName = `wp-block-nextora-advanced-button-button nextora-advanced-button__button wp-element-button nextora-advanced-button-button nextora-advanced-button-button--style-${ buttonStyle } nextora-advanced-button-button--icon-${ iconStyle } nextora-advanced-button-button--hover-${ hoverEffect }${ showIcon ? '' : ' nextora-advanced-button-button--no-icon' }`;

	const buttonStyleVars = {
		'--nextora-advanced-button-radius': `${ borderRadius }px`,
		'--nextora-advanced-button-gap': '0.5rem',
		'--nextora-advanced-button-icon-size': `${ iconSize }px`,
		...( hasSurfaceStyle
			? { '--nextora-advanced-button-icon-radius': `${ iconBorderRadius }px` }
			: {} ),
		...( backgroundColor
			? { '--nextora-advanced-button-bg': resolveEditorColor( backgroundColor ) }
			: {} ),
		...( textColor
			? { '--nextora-advanced-button-text': resolveEditorColor( textColor ) }
			: {} ),
		...( borderColor
			? { '--nextora-advanced-button-border': resolveEditorColor( borderColor ) }
			: {} ),
		...( showIcon && iconColor
			? { '--nextora-advanced-button-icon-color': resolveEditorColor( iconColor ) }
			: {} ),
		...( hoverBackgroundColor
			? { '--nextora-advanced-button-hover-bg': resolveEditorColor( hoverBackgroundColor ) }
			: {} ),
		...( hoverTextColor
			? { '--nextora-advanced-button-hover-text': resolveEditorColor( hoverTextColor ) }
			: {} ),
		...( hoverBorderColor
			? { '--nextora-advanced-button-hover-border': resolveEditorColor( hoverBorderColor ) }
			: {} ),
	} as CSSProperties;

	const linkUrl = normalizeLinkUrl( url );
	const hasLink = '' !== linkUrl;

	const blockProps = useBlockProps( {
		className: isModalLink
			? 'nextora-advanced-button-button-wrap nextora-advanced-button-button-wrap--modal nextora-advanced-button-button-wrap--modal-editor'
			: `${ buttonClassName }`,
		style: isModalLink ? undefined : buttonStyleVars,
	} );

	const modalButtonStyle = buttonStyleVars;

	useEffect( () => {
		if ( isModalLink && '' === modalId ) {
			setAttributes( { modalId: buildModalId( clientId ) } );
		}
	}, [ isModalLink, modalId, clientId, setAttributes ] );

	useEffect( () => {
		if ( isClickEventLink && '' === clickEventId ) {
			setAttributes( { clickEventId: buildClickEventId( clientId ) } );
		}
	}, [ isClickEventLink, clickEventId, clientId, setAttributes ] );

	useEffect( () => {
		if ( iconSource !== 'theme' ) {
			setIconNodes( null );
			return;
		}

		let active = true;
		loadIconCatalog().then( ( icons ) => {
			if ( ! active ) {
				return;
			}
			const found = icons.find( ( icon ) => icon.name === iconName );
			setIconNodes( found?.nodes ?? null );
		} );

		return () => {
			active = false;
		};
	}, [ iconSource, iconName ] );

	const handleShowIconChange = ( value: boolean ) => {
		const updates: Partial< AdvancedButtonButtonAttributes > = { showIcon: value };
		if ( ! value && iconPosition === 'only' ) {
			updates.iconPosition = 'left';
		}
		setAttributes( updates );
	};

	const handleLinkTypeChange = ( value: string ) => {
		const next = value as LinkType;
		setAttributes( { linkType: next } );
		if ( next === 'modal' ) {
			setContentPanelOpen( true );
		}
	};

	const renderIcon = () => {
		if ( iconSource === 'upload' && uploadedIconUrl ) {
			return (
				<img
					src={ uploadedIconUrl }
					alt=""
					className="nextora-advanced-button__img"
					width={ iconSize }
					height={ iconSize }
					aria-hidden="true"
				/>
			);
		}

		if ( iconSource === 'theme' && iconNodes ) {
			const preview = (
				<LucideSvgPreview
					nodes={ iconNodes }
					size={ iconSize }
					color={ iconColor || textColor ? resolveEditorColor( iconColor || textColor ) : 'currentColor' }
					strokeWidth={ strokeWidth }
				/>
			);

			if ( hasSurfaceStyle ) {
				return (
					<span className="nextora-advanced-button__icon-surface">{ preview }</span>
				);
			}

			return preview;
		}

		return <span className="nextora-advanced-button__icon-placeholder" aria-hidden="true" />;
	};

	const iconElement = showIcon ? (
		<span
			className={ `nextora-advanced-button__icon nextora-advanced-button__icon--${ iconPosition }` }
			aria-hidden="true"
		>
			{ renderIcon() }
		</span>
	) : null;

	const buttonContent = (
		<>
			{ showIcon && iconPosition !== 'right' && ! isIconOnly && iconElement }
			{ showIcon && isIconOnly && iconElement }
			{ ! isIconOnly && (
				<RichText
					tagName="span"
					className="nextora-advanced-button__label"
					value={ text }
					onChange={ ( value: string ) =>
						setAttributes( { text: value } )
					}
					placeholder={ __( 'Button', 'nextora' ) }
					allowedFormats={ [] }
					withoutInteractiveFormatting
				/>
			) }
			{ showIcon && iconPosition === 'right' && ! isIconOnly && iconElement }
		</>
	);

	return (
		<>
			{ isUrlLink && (
				<BlockControls group="block">
					<ToolbarGroup>
						<ToolbarButton
							icon="admin-links"
							label={ __( 'Link', 'nextora' ) }
							isActive={ isLinkOpen || hasLink }
							onClick={ () => setIsLinkOpen( ( open ) => ! open ) }
						/>
					</ToolbarGroup>
					{ isLinkOpen && (
						<Popover
							className="nextora-advanced-button-link-popover"
							position="bottom center"
							onClose={ () => setIsLinkOpen( false ) }
							focusOnMount={ isLinkOpen ? 'firstElement' : false }
						>
							<div className="nextora-advanced-button-link-control">
								<LinkControl
									value={ {
										url: linkUrl,
										opensInNewTab: linkTarget === '_blank',
									} }
									onChange={ ( value ) => {
										const nextUrl = value?.url?.trim() ?? '';
										setAttributes( {
											url: '' === nextUrl ? '#' : nextUrl,
											linkTarget: value?.opensInNewTab ? '_blank' : '_self',
										} );
									} }
									onRemove={ () => {
										setAttributes( {
											url: '#',
											linkTarget: '_self',
										} );
										setIsLinkOpen( false );
									} }
									settings={ [
										{
											id: 'opensInNewTab',
											title: __( 'Open in new tab', 'nextora' ),
										},
									] }
								/>
							</div>
						</Popover>
					) }
				</BlockControls>
			) }

			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'nextora' ) } initialOpen>
					<RadioControl
						label={ __( 'Link type', 'nextora' ) }
						selected={ linkType }
						options={ [
							{ label: __( 'URL', 'nextora' ), value: 'url' },
							{ label: __( 'Popup (modal)', 'nextora' ), value: 'modal' },
							{
								label: __( 'Click event', 'nextora' ),
								value: 'click-event',
							},
						] }
						onChange={ handleLinkTypeChange }
						help={
							isModalLink
								? __(
										'Open the popup builder to add blocks and edit their settings.',
										'nextora'
								  )
								: undefined
						}
					/>

					{ isClickEventLink && (
						<TextareaControl
							className="nextora-advanced-button-click-event__script"
							label={ __( 'Click event JavaScript', 'nextora' ) }
							value={ clickEventScript }
							onChange={ ( value: string ) =>
								setAttributes( { clickEventScript: value } )
							}
							help={ __(
								'Runs on the front end when the button is clicked. Available variables: event, button.',
								'nextora'
							) }
							rows={ 6 }
						/>
					) }

					{ isModalLink ? (
						<>
							<RangeControl
								label={ __( 'Popup width (px)', 'nextora' ) }
								value={ modalWidthPx }
								onChange={ ( value: number | undefined ) =>
									setAttributes( {
										modalWidth: value ?? MODAL_WIDTH_DEFAULT,
									} )
								}
								min={ MODAL_WIDTH_MIN }
								max={ MODAL_WIDTH_MAX }
								step={ 8 }
								allowReset
								resetFallbackValue={ MODAL_WIDTH_DEFAULT }
							/>
							<TextControl
								label={ __( 'Popup title', 'nextora' ) }
								value={ modalTitle }
								onChange={ ( value: string ) =>
									setAttributes( { modalTitle: value } )
								}
								help={ __(
									'Optional heading shown at the top of the popup. Leave empty for a screen-reader-only title.',
									'nextora'
								) }
							/>
							<Button
								variant="secondary"
								onClick={ () => setContentPanelOpen( true ) }
							>
								{ __( 'Edit popup content', 'nextora' ) }
							</Button>
						</>
					) : isUrlLink ? (
						<TextControl
							label={ __( 'URL', 'nextora' ) }
							value={ url }
							onChange={ ( value: string ) =>
								setAttributes( { url: value } )
							}
							placeholder="#"
						/>
					) : null }

					<ToggleControl
						label={ __( 'Show icon', 'nextora' ) }
						checked={ showIcon }
						onChange={ handleShowIconChange }
						help={ __(
							'Turn off to use a text-only button without an icon.',
							'nextora'
						) }
					/>

					{ showIcon && (
						<>
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

					<SelectControl
						label={ __( 'Icon position', 'nextora' ) }
						value={ iconPosition }
						options={ [
							{ label: __( 'Left', 'nextora' ), value: 'left' },
							{ label: __( 'Right', 'nextora' ), value: 'right' },
							{ label: __( 'Icon only', 'nextora' ), value: 'only' },
						] }
						onChange={ ( value: string ) =>
							setAttributes( { iconPosition: value as IconPosition } )
						}
					/>
						</>
					) }
				</PanelBody>

				<PanelBody title={ __( 'Layout', 'nextora' ) } initialOpen>
					<SelectControl
						label={ __( 'Button style', 'nextora' ) }
						value={ buttonStyle }
						options={ [
							{ label: __( 'Fill', 'nextora' ), value: 'fill' },
							{ label: __( 'Outline', 'nextora' ), value: 'outline' },
						] }
						onChange={ ( value: string ) =>
							setAttributes( { buttonStyle: value as ButtonStyle } )
						}
					/>

					<RangeControl
						label={ __( 'Button border radius (px)', 'nextora' ) }
						value={ borderRadius }
						onChange={ ( value: number | undefined ) =>
							setAttributes( { borderRadius: value ?? 50 } )
						}
						min={ 0 }
						max={ 999 }
						step={ 1 }
					/>

					{ showIcon && (
					<RangeControl
						label={ __( 'Icon size (px)', 'nextora' ) }
						value={ iconSize }
						onChange={ ( value: number | undefined ) =>
							setAttributes( { iconSize: value ?? 20 } )
						}
						min={ 12 }
						max={ 48 }
						step={ 1 }
					/>
					) }

					{ showIcon && (
					<>
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
						label={ __( 'Icon theme style', 'nextora' ) }
						value={ iconStyle }
						options={ [
							{ label: __( 'Default', 'nextora' ), value: 'default' },
							{ label: __( 'Stacked', 'nextora' ), value: 'stacked' },
							{ label: __( 'Framed', 'nextora' ), value: 'framed' },
						] }
						onChange={ ( value: string ) =>
							setAttributes( { iconStyle: value as IconStyle } )
						}
					/>

					{ hasSurfaceStyle && (
						<RangeControl
							label={ __( 'Icon border radius (px)', 'nextora' ) }
							value={ iconBorderRadius }
							onChange={ ( value: number | undefined ) =>
								setAttributes( { iconBorderRadius: value ?? 8 } )
							}
							min={ 0 }
							max={ 999 }
							step={ 1 }
						/>
					) }
					</>
					) }
				</PanelBody>

				<PanelColorSettings
					title={ __( 'Colors', 'nextora' ) }
					colorSettings={ [
						{
							value: textColor,
							onChange: ( value: string | undefined ) =>
								setAttributes( { textColor: value ?? '' } ),
							label: __( 'Text color', 'nextora' ),
						},
						{
							value: backgroundColor,
							onChange: ( value: string | undefined ) =>
								setAttributes( { backgroundColor: value ?? '' } ),
							label: __( 'Background color', 'nextora' ),
						},
						...( showIcon && iconSource === 'theme'
							? [
									{
										value: iconColor,
										onChange: ( value: string | undefined ) =>
											setAttributes( { iconColor: value ?? '' } ),
										label: __( 'Icon color', 'nextora' ),
									},
								]
							: [] ),
						{
							value: borderColor,
							onChange: ( value: string | undefined ) =>
								setAttributes( { borderColor: value ?? '' } ),
							label: __( 'Border color', 'nextora' ),
						},
					] }
				/>

				<PanelBody title={ __( 'Hover', 'nextora' ) } initialOpen={ false }>
					<SelectControl
						label={ __( 'Hover effect', 'nextora' ) }
						value={ hoverEffect }
						options={ [
							{ label: __( 'Fade (opacity)', 'nextora' ), value: 'opacity' },
							{ label: __( 'Color swap', 'nextora' ), value: 'color-swap' },
							{ label: __( 'Lift (shadow)', 'nextora' ), value: 'lift' },
							{ label: __( 'None', 'nextora' ), value: 'none' },
						] }
						onChange={ ( value: string ) =>
							setAttributes( { hoverEffect: value as HoverEffect } )
						}
						help={ __(
							'Choose how the button responds when hovered or focused. Color controls appear for effects that change colors.',
							'nextora'
						) }
					/>

					{ showHoverColors && (
						<PanelColorSettings
							title={ __( 'Hover colors', 'nextora' ) }
							colorSettings={ [
								{
									value: hoverBackgroundColor,
									onChange: ( value: string | undefined ) =>
										setAttributes( { hoverBackgroundColor: value ?? '' } ),
									label: __( 'Hover background', 'nextora' ),
								},
								{
									value: hoverTextColor,
									onChange: ( value: string | undefined ) =>
										setAttributes( { hoverTextColor: value ?? '' } ),
									label: __( 'Hover text', 'nextora' ),
								},
								{
									value: hoverBorderColor,
									onChange: ( value: string | undefined ) =>
										setAttributes( { hoverBorderColor: value ?? '' } ),
									label: __( 'Hover border', 'nextora' ),
								},
							] }
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
							'Required when the button is icon-only or has no visible label.',
							'nextora'
						) }
						value={ ariaLabel }
						onChange={ ( value: string ) =>
							setAttributes( { ariaLabel: value } )
						}
					/>
					{ showAriaWarning && (
						<Notice status="warning" isDismissible={ false }>
							{ __(
								'Add an aria label for icon-only buttons.',
								'nextora'
							) }
						</Notice>
					) }
				</PanelBody>
			</InspectorControls>

			{ isModalLink ? (
				<div { ...blockProps }>
					<button
						type="button"
						className={ buttonClassName }
						style={ modalButtonStyle }
						onClick={ ( event ) => event.preventDefault() }
					>
						{ buttonContent }
					</button>
					<Button
						className="nextora-advanced-button-modal__edit-link"
						variant="link"
						onClick={ () => setContentPanelOpen( true ) }
					>
						{ __( 'Edit popup content', 'nextora' ) }
					</Button>
					<PopupContentBuilder
						isOpen={ contentPanelOpen }
						onClose={ () => setContentPanelOpen( false ) }
					/>
					<div
						className={
							contentPanelOpen
								? 'nextora-advanced-button-modal-host is-open'
								: 'nextora-advanced-button-modal-host'
						}
						aria-hidden={ ! contentPanelOpen }
					>
						<div
							className={
								contentPanelOpen
									? 'nextora-advanced-button-builder__canvas editor-styles-wrapper'
									: 'nextora-advanced-button-builder__canvas'
							}
						>
							<div { ...innerBlocksProps } />
						</div>
					</div>
				</div>
			) : isClickEventLink ? (
				<button
					{ ...blockProps }
					type="button"
					onClick={ ( event ) => event.preventDefault() }
				>
					{ buttonContent }
				</button>
			) : (
				<a
					{ ...blockProps }
					href={ url || '#' }
					onClick={ ( event ) => event.preventDefault() }
				>
					{ buttonContent }
				</a>
			) }

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
