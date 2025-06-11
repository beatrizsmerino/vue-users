<template>
	<LeafletMapLoader
		v-if="showMap"
		:center="center"
		:zoom="zoom"
		:map-options="mapOptions"
		@update:center="handleCenterUpdate"
		@update:zoom="handleZoomUpdate"
	>
		<template #tile>
			<LeafletMapTile
				:url="url"
				:attribution="attribution"
			/>
		</template>

		<template #marker>
			<LeafletMapMarker :position="marker.position" />
		</template>
	</LeafletMapLoader>
</template>

<script>
	import { latLng, Icon } from "leaflet";
	import LeafletMapLoader from "@/components/LeafletMap/LeafletMapLoader";
	import LeafletMapTile from "@/components/LeafletMap/LeafletMapTile";
	import LeafletMapMarker from "@/components/LeafletMap/LeafletMapMarker";

	// eslint-disable-next-line no-underscore-dangle
	delete Icon.Default.prototype._getIconUrl;
	Icon.Default.mergeOptions({
		"iconRetinaUrl": require("leaflet/dist/images/marker-icon-2x.png"),
		"iconUrl": require("leaflet/dist/images/marker-icon.png"),
		"shadowUrl": require("leaflet/dist/images/marker-shadow.png"),
	});

	export default {
		"name": "LeafletMap",
		"components": {
			LeafletMapLoader,
			LeafletMapTile,
			LeafletMapMarker,
		},
		"props": {
			"user": Object,
		},
		data() {
			const position = latLng(parseFloat(this.user.latitude), parseFloat(this.user.longitude));

			return {
				"url": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
				"attribution": '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
				"marker": { position },
				"center": position,
				"currentCenter": position,
				"zoom": 3,
				"currentZoom": 11.5,
				"mapOptions": {
					"minZoom": 2,
					"maxZoom": 10,
					"zoomSnap": 0.5,
				},
				"showMap": true,
			};
		},
		"watch": {
			"user": {
				"immediate": true,
				handler(newUser) {
					const newPosition = latLng(parseFloat(newUser.latitude), parseFloat(newUser.longitude));
					this.marker.position = newPosition;
					this.center = newPosition;
					this.currentCenter = newPosition;
				},
			},
		},
		"methods": {
			handleZoomUpdate(newZoom) {
				this.zoom = newZoom;
				this.currentZoom = newZoom;
			},
			handleCenterUpdate(newCenter) {
				this.center = newCenter;
				this.currentCenter = newCenter;
			},
		},
	};
</script>
