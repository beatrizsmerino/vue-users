const GOOGLE_MAP_COLORS = {
	"BORDERS": "#c3e6ff",
	"LANDSCAPE": "#42b883",
	"POINT": "#42b883",
	"POINT_FILL": "#35495e",
	"WATER": "lightblue",
};

const GOOGLE_MAP_MARKER_ICON = {
	"path": "M 0, 0 m -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0",
	"strokeOpacity": 0.7,
	"strokeWeight": 6,
	"strokeColor": GOOGLE_MAP_COLORS.POINT,
	"fillColor": GOOGLE_MAP_COLORS.POINT_FILL,
	"fillOpacity": 0.7,
	"scale": 3,
};

const GOOGLE_MAP_CONFIG_OPTIONS = {
	"clickableIcons": false,
	"streetViewControl": false,
	"panControlOptions": false,
	"gestureHandling": "cooperative",
	"backgroundColor": GOOGLE_MAP_COLORS.LANDSCAPE,
	"mapTypeControl": false,
	"zoomControlOptions": {
		"style": "SMALL",
	},
	"zoom": 2,
	"minZoom": 2,
	"maxZoom": 10,
};

// https://snazzymaps.com/
const GOOGLE_MAP_CONFIG_STYLES = {
	"styles": [
		{
			"featureType": "landscape",
			"stylers": [
				{ "hue": GOOGLE_MAP_COLORS.LANDSCAPE },
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
				{ "hue": GOOGLE_MAP_COLORS.LANDSCAPE },
				{ "saturation": -19.8 },
				{ "lightness": -1.8 },
				{ "gamma": 1 },
			],
		},
		{
			"featureType": "road.arterial",
			"stylers": [
				{ "hue": GOOGLE_MAP_COLORS.LANDSCAPE },
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
				{ "color": GOOGLE_MAP_COLORS.BORDERS },
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
				{ "hue": GOOGLE_MAP_COLORS.WATER },
				{ "saturation": -63.2 },
				{ "lightness": 38 },
				{ "gamma": 1 },
			],
		},
	],
};

const LEAFLET_MAP_MARKER_ICON = {
	"iconRetinaUrl": require("leaflet/dist/images/marker-icon-2x.png"),
	"iconUrl": require("leaflet/dist/images/marker-icon.png"),
	"shadowUrl": require("leaflet/dist/images/marker-shadow.png"),
};

const LEAFLET_MAP_CONFIG_OPTIONS = {
	"url": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
	"attribution": '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
	"zoom": 3,
	"currentZoom": 11.5,
	"mapOptions": {
		"minZoom": 2,
		"maxZoom": 10,
		"zoomSnap": 0.5,
	},
	"showMap": true,
};

export {
	GOOGLE_MAP_COLORS,
	GOOGLE_MAP_MARKER_ICON,
	GOOGLE_MAP_CONFIG_OPTIONS,
	GOOGLE_MAP_CONFIG_STYLES,
	LEAFLET_MAP_MARKER_ICON,
	LEAFLET_MAP_CONFIG_OPTIONS,
};
