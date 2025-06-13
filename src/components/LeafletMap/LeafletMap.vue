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
	import { LEAFLET_MAP_MARKER_ICON, LEAFLET_MAP_CONFIG_OPTIONS } from "@/constants/mapSettings";

	// eslint-disable-next-line no-underscore-dangle
	delete Icon.Default.prototype._getIconUrl;
	Icon.Default.mergeOptions(LEAFLET_MAP_MARKER_ICON);

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
				...LEAFLET_MAP_CONFIG_OPTIONS,
				"marker": { position },
				"center": position,
				"currentCenter": position,
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
