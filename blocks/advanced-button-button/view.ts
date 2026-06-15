/**
 * Click-event handlers for `nextora/advanced-button-button`.
 */

const BUTTON_SELECTOR =
	'[data-nextora-advanced-button-click-event="1"]:not([data-nextora-advanced-button-click-init="1"])';
const INIT_ATTR = 'data-nextora-advanced-button-click-init';

function initClickEventButton( button: HTMLButtonElement ): void {
	if ( button.getAttribute( INIT_ATTR ) === '1' ) {
		return;
	}

	const eventId = button.getAttribute( 'data-nextora-advanced-button-event-id' );
	if ( ! eventId ) {
		return;
	}

	const scriptEl = document.getElementById( eventId );
	const code = scriptEl?.textContent?.trim() ?? '';
	if ( '' === code ) {
		return;
	}

	button.setAttribute( INIT_ATTR, '1' );
	button.addEventListener( 'click', ( event ) => {
		event.preventDefault();
		try {
			// eslint-disable-next-line @typescript-eslint/no-implied-eval -- Advanced editor-only custom click scripts.
			const run = new Function( 'event', 'button', code ) as (
				eventArg: Event,
				buttonArg: HTMLButtonElement,
			) => void;
			run.call( button, event, button );
		} catch ( error ) {
			// eslint-disable-next-line no-console -- Surface custom script errors to developers.
			console.error( '[nextora/advanced-button-button] Click event failed.', error );
		}
	} );
}

function initAll(): void {
	document
		.querySelectorAll< HTMLButtonElement >( BUTTON_SELECTOR )
		.forEach( initClickEventButton );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', initAll );
} else {
	initAll();
}

export {};
