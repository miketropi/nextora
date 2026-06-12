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

		document.body.classList.add( 'nextora-button-icon-builder-open' );
		return () => {
			document.body.classList.remove( 'nextora-button-icon-builder-open' );
		};
	}, [ isOpen ] );

	if ( ! isOpen ) {
		return null;
	}

	return (
		<>
			<button
				type="button"
				className="nextora-button-icon-builder-overlay"
				aria-label={ __( 'Close popup builder', 'nextora' ) }
				onClick={ onClose }
			/>
			<div
				className="nextora-button-icon-builder"
				role="dialog"
				aria-modal="true"
				aria-label={ __( 'Popup content builder', 'nextora' ) }
			>
				<header className="nextora-button-icon-builder__header">
					<div className="nextora-button-icon-builder__header-text">
						<h2 className="nextora-button-icon-builder__title">
							{ __( 'Popup content builder', 'nextora' ) }
						</h2>
					</div>
					<div className="nextora-button-icon-builder__header-actions">
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
