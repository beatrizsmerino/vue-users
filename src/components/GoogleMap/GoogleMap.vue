<template>
	<GoogleMapLoader
		:map-config="mapConfig"
		:api-key="apiKey"
	>
		<template #default="{ google, map }">
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
	import { mapSettings } from "@/constants/mapSettings";

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
					...mapSettings,
					"center": this.mapCenter,
				};
			},
		},
		"methods": {},
	};
</script>
