const MAP_GOOGLE_COLORS = {
	"BORDERS": "#c3e6ff",
	"LANDSCAPE": "#42b883",
	"POINT": "#42b883",
	"POINT_FILL": "#35495e",
	"WATER": "lightblue",
};

const MAP_GOOGLE_MARKER_ICON = {
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
	"zoom": 2,
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

const MAP_LEAFLET_MARKER_ICON = {
	"iconRetinaUrl": require("leaflet/dist/images/marker-icon-2x.png"),
	"iconUrl": require("leaflet/dist/images/marker-icon.png"),
	"shadowUrl": require("leaflet/dist/images/marker-shadow.png"),
};

const MAP_LEAFLET_CONFIG_OPTIONS = {
	"url": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
	"attribution": '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
	"zoom": 3,
	"currentZoom": 11.5,
	"mapOptions": {
		"minZoom": 2,
		"maxZoom": 10,
		"zoomSnap": 0.5,
	},
	"maxBounds": [
		[
			-85,
			-180,
		],
		[
			85,
			180,
		],
	],
	"maxBoundsViscosity": 1.0,
	"showMap": true,
};

export {
	MAP_GOOGLE_COLORS,
	MAP_GOOGLE_MARKER_ICON,
	MAP_GOOGLE_CONFIG_OPTIONS,
	MAP_GOOGLE_CONFIG_STYLES,
	MAP_LEAFLET_MARKER_ICON,
	MAP_LEAFLET_CONFIG_OPTIONS,
};
