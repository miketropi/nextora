/**
 * Button Icon popup modals — reparent under `document.body` so parent overflow,
 * transforms, and stacking contexts cannot clip the full-screen dialog layer.
 */

export function mountButtonIconModalPortalToBody(): void {
	document
		.querySelectorAll< HTMLElement >( '[data-nextora-button-icon-modal-portal]' )
		.forEach( ( el ) => {
			if ( el.parentElement !== document.body ) {
				document.body.appendChild( el );
			}
		} );
}
