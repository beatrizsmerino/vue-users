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
	import { MAP_GOOGLE_CONFIG_OPTIONS } from "@/constants/MapGoogle";

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
					"mapId": process.env.VUE_APP_ID_GOOGLE_MAPS || "",
					"center": this.mapCenter,
				};
			},
		},
		"methods": {},
	};
</script>
