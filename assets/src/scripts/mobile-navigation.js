/**
 * Toggles mobile navigation after click on hamburger icon.
 * Closes navigation after click on logo or navigation item.
 *
 * @param {HTMLElement} element Page header element.
 */
export default function mobileNavigation( element ) {
	element.querySelector( '.toggle-menu' )
		.addEventListener( 'click', () => element.classList.toggle( 'menu-active' ) );

	element.querySelector( 'a:not(.toggle-menu)' )
		.addEventListener( 'click', () => element.classList.remove( 'menu-active' ) );
}
