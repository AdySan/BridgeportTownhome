/* global google */

/**
 * Initialize google maps.
 */
function initMap() {
	const isTouchDevice = 'ontouchstart' in document.documentElement;

	// Inject google map to specified container.
	const map = new google.maps.Map( document.getElementById( 'map' ), {
		center: { lat: 34.427673, lng: -118.545813 },
		scrollwheel: false,
		draggable: !isTouchDevice,
		disableDoubleClickZoom: isTouchDevice,
		zoom: 15,
		styles: [ {
			featureType: 'all',
			elementType: 'all',
			stylers: [
				{ saturation: -100 },
				{ gamma: 0.5 }
			]
		} ]
	} );

	// Put marker on the map.
	new google.maps.Marker( {
		position: { lat: 34.427673, lng: -118.545813 },
		map: map,
		animation: google.maps.Animation.DROP,
		title: '23415 Shorebreak Ln. Unit 59, Valencia, CA 91355',
		icon: 'assets/dist/images/map-pin-red-hi.png'
	} );
}

// Register as global function (needed by a google maps script).
window.initMap = initMap;
