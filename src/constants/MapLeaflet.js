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

export { MAP_LEAFLET_MARKER_ICON, MAP_LEAFLET_CONFIG_OPTIONS };
