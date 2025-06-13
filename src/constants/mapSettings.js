import colorPalette from "@/constants/colorPalette";

const { COLOR_LANDSCAPE, COLOR_BORDERS, COLOR_WATER, COLOR_POINT_FILL, COLOR_SELECTED_POINT } = colorPalette;

const MAP_COLORS = {
	"BORDERS": COLOR_BORDERS,
	"LANDSCAPE": COLOR_LANDSCAPE,
	"POINT": COLOR_SELECTED_POINT,
	"POINT_FILL": COLOR_POINT_FILL,
	"WATER": COLOR_WATER,
};

const MAP_MARKER_ICON = {
	"path": "M 0, 0 m -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0",
	"strokeOpacity": 0.7,
	"strokeWeight": 6,
	"strokeColor": MAP_COLORS.POINT,
	"fillColor": MAP_COLORS.POINT_FILL,
	"fillOpacity": 0.7,
	"scale": 3,
};

const MAP_CONFIG_OPTIONS = {
	"clickableIcons": false,
	"streetViewControl": false,
	"panControlOptions": false,
	"gestureHandling": "cooperative",
	"backgroundColor": MAP_COLORS.LANDSCAPE,
	"mapTypeControl": false,
	"zoomControlOptions": {
		"style": "SMALL",
	},
	"zoom": 2,
	"minZoom": 2,
	"maxZoom": 10,
};

// https://snazzymaps.com/
const MAP_CONFIG_STYLES = {
	"styles": [
		{
			"featureType": "landscape",
			"stylers": [
				{ "hue": MAP_COLORS.LANDSCAPE },
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
				{ "hue": MAP_COLORS.LANDSCAPE },
				{ "saturation": -19.8 },
				{ "lightness": -1.8 },
				{ "gamma": 1 },
			],
		},
		{
			"featureType": "road.arterial",
			"stylers": [
				{ "hue": MAP_COLORS.LANDSCAPE },
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
				{ "color": MAP_COLORS.BORDERS },
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
				{ "hue": MAP_COLORS.WATER },
				{ "saturation": -63.2 },
				{ "lightness": 38 },
				{ "gamma": 1 },
			],
		},
	],
};

export { MAP_COLORS, MAP_MARKER_ICON, MAP_CONFIG_OPTIONS, MAP_CONFIG_STYLES };
