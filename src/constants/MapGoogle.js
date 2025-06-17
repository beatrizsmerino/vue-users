const MAP_GOOGLE_COLORS = {
	"BORDERS": "#c3e6ff",
	"LANDSCAPE": "#42b883",
	"POINT": "#42b883",
	"POINT_FILL": "#35495e",
	"WATER": "#a0d6ff",
};

const MAP_GOOGLE_MARKER_ICON = {
	"viewBox": "-10 -10 20 20",
	"width": "3rem",
	"height": "3rem",
	"path": "M 0, 0 m -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0",
	"strokeOpacity": 0.7,
	"strokeWeight": 6,
	"strokeColor": MAP_GOOGLE_COLORS.POINT,
	"fillColor": MAP_GOOGLE_COLORS.POINT_FILL,
	"fillOpacity": 0.7,
	"scale": 3,
};

const MAP_GOOGLE_CONFIG_OPTIONS = {
	"clickableIcons": false,
	"streetViewControl": false,
	"panControlOptions": false,
	"gestureHandling": "cooperative",
	"backgroundColor": MAP_GOOGLE_COLORS.LANDSCAPE,
	"mapTypeControl": false,
	"zoomControlOptions": {
		"style": "SMALL",
	},
	"zoom": 3,
	"minZoom": 2,
	"maxZoom": 10,
	"restriction": {
		"latLngBounds": {
			"north": 85,
			"south": -85,
			"east": 180,
			"west": -180,
		},
		"strictBounds": true,
	},
};

// https://snazzymaps.com/
const MAP_GOOGLE_CONFIG_STYLES = {
	"styles": [
		{
			"featureType": "landscape",
			"stylers": [
				{ "hue": MAP_GOOGLE_COLORS.LANDSCAPE },
				{ "saturation": 50.2 },
				{ "lightness": -34.8 },
				{ "gamma": 1 },
			],
		},
		{
			"featureType": "poi",
			"stylers": [
				{ "visibility": "off" },
			],
		},
		{
			"featureType": "road.highway",
			"stylers": [
				{ "hue": MAP_GOOGLE_COLORS.LANDSCAPE },
				{ "saturation": -19.8 },
				{ "lightness": -1.8 },
				{ "gamma": 1 },
			],
		},
		{
			"featureType": "road.arterial",
			"stylers": [
				{ "hue": MAP_GOOGLE_COLORS.LANDSCAPE },
				{ "saturation": 72.4 },
				{ "lightness": -32.6 },
				{ "gamma": 1 },
			],
		},
		{
			"featureType": "road.local",
			"stylers": [
				{ "visibility": "off" },
			],
		},
		{
			"featureType": "transit",
			"stylers": [
				{ "visibility": "off" },
			],
		},
		{
			"featureType": "administrative.province",
			"stylers": [
				{ "visibility": "off" },
			],
		},
		{
			"featureType": "administrative.locality",
			"stylers": [
				{ "visibility": "off" },
			],
		},
		{
			"featureType": "administrative.province",
			"stylers": [
				{ "visibility": "off" },
			],
		},
		{
			"featureType": "administrative.land_parcel",
			"stylers": [
				{ "visibility": "off" },
			],
		},
		{
			"featureType": "administrative.neighborhood",
			"stylers": [
				{ "visibility": "off" },
			],
		},
		{
			"featureType": "administrative.country",
			"elementType": "geometry.stroke",
			"stylers": [
				{ "visibility": "on" },
				{ "color": MAP_GOOGLE_COLORS.BORDERS },
			],
		},
		{
			"featureType": "administrative",
			"elementType": "labels",
			"stylers": [
				{ "visibility": "off" },
			],
		},
		{
			"featureType": "water",
			"stylers": [
				{ "hue": MAP_GOOGLE_COLORS.WATER },
				{ "saturation": -63.2 },
				{ "lightness": 38 },
				{ "gamma": 1 },
			],
		},
	],
};

export { MAP_GOOGLE_COLORS, MAP_GOOGLE_MARKER_ICON, MAP_GOOGLE_CONFIG_OPTIONS, MAP_GOOGLE_CONFIG_STYLES };
