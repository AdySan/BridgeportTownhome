import smoothScroll from '../../../node_modules/smooth-scroll/dist/js/smooth-scroll.js';
import mobileNavigation from './mobile-navigation.js';

/**
 * Mobile navigation toggle.
 * Attach Smooth scroll to page sections.
 */
export default function header() {
	const headerEl = document.querySelector( '.page-header' );

	// Add mobile navigation support
	mobileNavigation( headerEl );

	// Attach smooth scroll to every element with [data-scroll] attribute.
	smoothScroll.init( { speed: 700 } );
}
