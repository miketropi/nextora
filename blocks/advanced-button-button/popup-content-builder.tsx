import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { Button } from '@wordpress/components';

interface PopupContentBuilderProps {
	isOpen: boolean;
	onClose: () => void;
}

export function PopupContentBuilder( {
	isOpen,
	onClose,
}: PopupContentBuilderProps ) {
	useEffect( () => {
		if ( ! isOpen ) {
			return;
		}

		document.body.classList.add( 'nextora-advanced-button-builder-open' );
		return () => {
			document.body.classList.remove( 'nextora-advanced-button-builder-open' );
		};
	}, [ isOpen ] );

	if ( ! isOpen ) {
		return null;
	}

	return (
		<>
			<button
				type="button"
				className="nextora-advanced-button-builder-overlay"
				aria-label={ __( 'Close popup builder', 'nextora' ) }
				onClick={ onClose }
			/>
			<div
				className="nextora-advanced-button-builder"
				role="dialog"
				aria-modal="true"
				aria-label={ __( 'Popup content builder', 'nextora' ) }
			>
				<header className="nextora-advanced-button-builder__header">
					<div className="nextora-advanced-button-builder__header-text">
						<h2 className="nextora-advanced-button-builder__title">
							{ __( 'Popup content builder', 'nextora' ) }
						</h2>
					</div>
					<div className="nextora-advanced-button-builder__header-actions">
						<Button variant="secondary" onClick={ onClose }>
							{ __( 'Cancel', 'nextora' ) }
						</Button>
						<Button variant="primary" onClick={ onClose }>
							{ __( 'Done', 'nextora' ) }
						</Button>
					</div>
				</header>
			</div>
		</>
	);
}
