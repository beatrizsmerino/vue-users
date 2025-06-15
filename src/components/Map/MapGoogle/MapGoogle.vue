<template>
	<MapGoogleLoader
		:map-config="mapConfig"
		:api-key="apiKey"
	>
		<template #marker="{ google, map }">
			<MapGoogleMarker
				:marker="marker"
				:google="google"
				:map="map"
			/>
		</template>
	</MapGoogleLoader>
</template>

<script>
	import MapGoogleLoader from "@/components/Map/MapGoogle/MapGoogleLoader";
	import MapGoogleMarker from "@/components/Map/MapGoogle/MapGoogleMarker";
	import { MAP_GOOGLE_CONFIG_STYLES, MAP_GOOGLE_CONFIG_OPTIONS } from "@/constants/MapSettings";

	export default {
		"name": "MapGoogle",
		"components": {
			MapGoogleLoader,
			MapGoogleMarker,
		},
		"props": {
			"user": Object,
			"apiKey": String,
		},
		data() {
			return {};
		},
		"computed": {
			marker() {
				return {
					"position": {
						"lat": parseFloat(this.user.latitude),
						"lng": parseFloat(this.user.longitude),
					},
				};
			},
			mapCenter() {
				return this.marker.position;
			},
			mapConfig() {
				return {
					...MAP_GOOGLE_CONFIG_OPTIONS,
					...MAP_GOOGLE_CONFIG_STYLES,
					"center": this.mapCenter,
				};
			},
		},
		"methods": {},
	};
</script>
