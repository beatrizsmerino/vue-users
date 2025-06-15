<template>
	<MapLeafletLoader
		v-if="showMap"
		:center="center"
		:zoom="zoom"
		:max-bounds="maxBounds"
		:max-bounds-viscosity="maxBoundsViscosity"
		:map-options="mapOptions"
		@update:center="handleCenterUpdate"
		@update:zoom="handleZoomUpdate"
	>
		<template #tile>
			<MapLeafletTile
				:url="url"
				:attribution="attribution"
			/>
		</template>

		<template #marker>
			<MapLeafletMarker :position="marker.position" />
		</template>
	</MapLeafletLoader>
</template>

<script>
	import { latLng, Icon } from "leaflet";
	import MapLeafletLoader from "@/components/Map/MapLeaflet/MapLeafletLoader";
	import MapLeafletTile from "@/components/Map/MapLeaflet/MapLeafletTile";
	import MapLeafletMarker from "@/components/Map/MapLeaflet/MapLeafletMarker";
	import { MAP_LEAFLET_MARKER_ICON, MAP_LEAFLET_CONFIG_OPTIONS } from "@/constants/MapSettings";

	// eslint-disable-next-line no-underscore-dangle
	delete Icon.Default.prototype._getIconUrl;
	Icon.Default.mergeOptions(MAP_LEAFLET_MARKER_ICON);

	export default {
		"name": "MapLeaflet",
		"components": {
			MapLeafletLoader,
			MapLeafletTile,
			MapLeafletMarker,
		},
		"props": {
			"user": Object,
		},
		data() {
			const position = latLng(parseFloat(this.user.latitude), parseFloat(this.user.longitude));

			return {
				...MAP_LEAFLET_CONFIG_OPTIONS,
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
