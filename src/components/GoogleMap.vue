<template>
	<google-map-loader :mapConfig="mapConfig" :apiKey="apiKey">
		<template #default="{ google, map }">
			<google-map-marker :marker="marker" :google="google" :map="map" />
		</template>
	</google-map-loader>
</template>

<script>
	import GoogleMapLoader from "./GoogleMapLoader";
	import GoogleMapMarker from "./GoogleMapMarker";

	import { mapSettings } from "@/constants/mapSettings";

	export default {
		components: {
			GoogleMapLoader,
			GoogleMapMarker
		},
		props: {
			user: Object,
			apiKey: String
		},
		data() {
			return {

			}
		},
		computed: {
			marker() {
				return {
					position: {
						lat: parseFloat(this.user.latitude),
						lng: parseFloat(this.user.longitude)
					}
				};
			},
			mapCenter() {
				return this.marker.position;
			},
			mapConfig() {
				return {
					...mapSettings,
					center: this.mapCenter
				};
			}
		},
		methods: {

		}
	};
</script>
