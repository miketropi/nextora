import type { CSSProperties } from 'react';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';
import type { BlockEditProps } from '@wordpress/blocks';
import { PanelBody, SelectControl, ToggleControl, RangeControl } from '@wordpress/components';
import type { ButtonAlign, AdvancedButtonAttributes } from './types';

const ALLOWED_BLOCKS = [ 'nextora/advanced-button-button' ];

const BUTTON_TEMPLATE: [ string, Record< string, unknown > ][] = [
	[
		'nextora/advanced-button-button',
		{
			text: __( 'Button', 'nextora' ),
			url: '#',
		},
	],
];

const ALIGN_CLASS: Record< ButtonAlign, string > = {
	left: 'is-content-justification-left',
	center: 'is-content-justification-center',
	right: 'is-content-justification-right',
};

export default function AdvancedButtonEdit( {
	attributes,
	setAttributes,
}: BlockEditProps< AdvancedButtonAttributes > ) {
	const {
		buttonAlign = 'left',
		columnGap = 12,
		rowGap = 12,
		enableScrollAnimation = true,
	} = attributes;

	const scrollEnabled = enableScrollAnimation !== false;
	const alignClass = ALIGN_CLASS[ buttonAlign ] ?? ALIGN_CLASS.left;

	const blockProps = useBlockProps( {
		className: `nextora-advanced-button nextora-advanced-button--align-${ buttonAlign }${
			scrollEnabled ? '' : ' nextora-advanced-button--scroll-off nextora-scroll-animation--ready'
		}`,
		...( scrollEnabled
			? { 'data-nextora-scroll-reveal': '1' }
			: { 'data-nextora-scroll-animation-init': '1' } ),
	} );

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: `nextora-advanced-button__buttons ${ alignClass }`,
			style: {
				'--nextora-advanced-button-col-gap': `${ columnGap }px`,
				'--nextora-advanced-button-row-gap': `${ rowGap }px`,
			} as CSSProperties,
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: BUTTON_TEMPLATE,
			templateLock: false,
			orientation: 'horizontal',
			renderAppender: InnerBlocks.ButtonBlockAppender,
		},
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Layout', 'nextora' ) } initialOpen>
					<SelectControl
						label={ __( 'Alignment', 'nextora' ) }
						value={ buttonAlign }
						options={ [
							{ label: __( 'Left', 'nextora' ), value: 'left' },
							{ label: __( 'Center', 'nextora' ), value: 'center' },
							{ label: __( 'Right', 'nextora' ), value: 'right' },
						] }
						onChange={ ( value: string ) =>
							setAttributes( { buttonAlign: value as ButtonAlign } )
						}
					/>
					<RangeControl
						label={ __( 'Column gap (px)', 'nextora' ) }
						help={ __( 'Horizontal space between buttons.', 'nextora' ) }
						value={ columnGap }
						onChange={ ( value: number | undefined ) =>
							setAttributes( { columnGap: value ?? 12 } )
						}
						min={ 0 }
						max={ 100 }
						step={ 1 }
					/>
					<RangeControl
						label={ __( 'Row gap (px)', 'nextora' ) }
						help={ __( 'Vertical space between buttons when wrapped into multiple lines.', 'nextora' ) }
						value={ rowGap }
						onChange={ ( value: number | undefined ) =>
							setAttributes( { rowGap: value ?? 12 } )
						}
						min={ 0 }
						max={ 100 }
						step={ 1 }
					/>
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
				<div { ...innerBlocksProps } />
			</div>
		</>
	);
}
