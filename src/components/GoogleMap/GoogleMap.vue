<template>
	<GoogleMapLoader
		:map-config="mapConfig"
		:api-key="apiKey"
	>
		<template #marker="{ google, map }">
			<GoogleMapMarker
				:marker="marker"
				:google="google"
				:map="map"
			/>
		</template>
	</GoogleMapLoader>
</template>

<script>
	import GoogleMapLoader from "@/components/GoogleMap/GoogleMapLoader";
	import GoogleMapMarker from "@/components/GoogleMap/GoogleMapMarker";
	import { GOOGLE_MAP_CONFIG_STYLES, GOOGLE_MAP_CONFIG_OPTIONS } from "@/constants/mapSettings";

	export default {
		"name": "GoogleMap",
		"components": {
			GoogleMapLoader,
			GoogleMapMarker,
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
					...GOOGLE_MAP_CONFIG_OPTIONS,
					...GOOGLE_MAP_CONFIG_STYLES,
					"center": this.mapCenter,
				};
			},
		},
		"methods": {},
	};
</script>
