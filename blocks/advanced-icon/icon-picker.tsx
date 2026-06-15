import { __ } from '@wordpress/i18n';
import { useState, useEffect, useMemo } from '@wordpress/element';
import { Modal, TextControl, Button } from '@wordpress/components';
import { LucideSvgPreview } from './lucide-preview';
import type { LucideIconEntry } from './types';

const PER_PAGE = 80;

let cachedIcons: LucideIconEntry[] | null = null;

async function loadIcons(): Promise< LucideIconEntry[] > {
	if ( cachedIcons ) {
		return cachedIcons;
	}

	const iconsUrl = window.nextoraIconBlock?.iconsUrl ?? '';
	if ( ! iconsUrl ) {
		return [];
	}

	const response = await fetch( iconsUrl );
	if ( ! response.ok ) {
		return [];
	}

	const data = ( await response.json() ) as LucideIconEntry[];
	cachedIcons = Array.isArray( data ) ? data : [];
	return cachedIcons;
}

interface IconPickerProps {
	currentIcon: string;
	onSelect: ( iconName: string ) => void;
	onClose: () => void;
}

export function IconPicker( {
	currentIcon,
	onSelect,
	onClose,
}: IconPickerProps ) {
	const [ icons, setIcons ] = useState< LucideIconEntry[] >( [] );
	const [ search, setSearch ] = useState( '' );
	const [ page, setPage ] = useState( 1 );
	const [ loading, setLoading ] = useState( true );
	const [ loadError, setLoadError ] = useState( '' );

	useEffect( () => {
		let mounted = true;
		setLoading( true );
		setLoadError( '' );

		const iconsUrl = window.nextoraIconBlock?.iconsUrl ?? '';
		if ( ! iconsUrl ) {
			setLoadError(
				__(
					'Icon library is not configured. Run npm run build:icons in the theme, then reload the editor.',
					'nextora'
				)
			);
			setLoading( false );
			return () => {
				mounted = false;
			};
		}

		loadIcons()
			.then( ( data ) => {
				if ( ! mounted ) {
					return;
				}
				if ( 0 === data.length ) {
					setLoadError(
						__(
							'Could not load icons. Check that assets/data/lucide-icons.json exists and is reachable.',
							'nextora'
						)
					);
				}
				setIcons( data );
			} )
			.catch( () => {
				if ( mounted ) {
					setLoadError(
						__(
							'Failed to fetch the icon library. Check the browser network tab for lucide-icons.json.',
							'nextora'
						)
					);
				}
			} )
			.finally( () => {
				if ( mounted ) {
					setLoading( false );
				}
			} );

		return () => {
			mounted = false;
		};
	}, [] );

	const filtered = useMemo( () => {
		const query = search.trim().toLowerCase();
		if ( ! query ) {
			return icons;
		}

		return icons.filter( ( icon ) => {
			return (
				icon.name.includes( query ) ||
				icon.tags.some( ( tag ) => tag.includes( query ) )
			);
		} );
	}, [ icons, search ] );

	const visible = filtered.slice( 0, page * PER_PAGE );

	return (
		<Modal
			title={ __( 'Choose icon', 'nextora' ) }
			onRequestClose={ onClose }
			className="nextora-icon-picker-modal"
			size="large"
		>
			<TextControl
				label={ __( 'Search icons', 'nextora' ) }
				value={ search }
				onChange={ ( value: string ) => {
					setSearch( value );
					setPage( 1 );
				} }
				placeholder={ __( 'Search icons…', 'nextora' ) }
			/>

			{ loading && (
				<p>{ __( 'Loading icons…', 'nextora' ) }</p>
			) }

			{ ! loading && '' !== loadError && (
				<p className="nextora-icon-picker__error">{ loadError }</p>
			) }

			{ ! loading && '' === loadError && 0 === icons.length && (
				<p>{ __( 'No icons available.', 'nextora' ) }</p>
			) }

			{ ! loading && '' === loadError && icons.length > 0 && visible.length === 0 && (
				<p>{ __( 'No icons match your search.', 'nextora' ) }</p>
			) }

			<div className="nextora-icon-picker__grid">
				{ visible.map( ( icon ) => (
					<button
						key={ icon.name }
						type="button"
						title={ icon.name }
						aria-label={ icon.name }
						className={
							'nextora-icon-picker__item' +
							( currentIcon === icon.name ? ' is-selected' : '' )
						}
						onClick={ () => onSelect( icon.name ) }
					>
						<LucideSvgPreview nodes={ icon.nodes } size={ 24 } />
						<span className="nextora-icon-picker__name">{ icon.name }</span>
					</button>
				) ) }
			</div>

			{ visible.length < filtered.length && (
				<Button
					variant="secondary"
					onClick={ () => setPage( ( current ) => current + 1 ) }
				>
					{ __( 'Load more', 'nextora' ) }
					{ ` (${ String( filtered.length - visible.length ) })` }
				</Button>
			) }
		</Modal>
	);
}
