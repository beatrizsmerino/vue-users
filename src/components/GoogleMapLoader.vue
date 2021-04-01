<template>
	<div class="google-map">
		<div
			class="google-map__map"
			ref="googleMap"
		></div>
		<template v-if="Boolean(this.google) && Boolean(this.map)">
			<slot
				:google="google"
				:map="map"
			/>
		</template>
	</div>
</template>

<script>
	import GoogleMapsApiLoader from "google-maps-api-loader";

	export default {
		name: 'GoogleMapLoader',
		props: {
			mapConfig: Object,
			apiKey: String
		},
		data() {
			return {
				google: null,
				map: null
			};
		},
		async mounted() {
			const googleMapApi = await GoogleMapsApiLoader({
				apiKey: this.apiKey
			});
			this.google = googleMapApi;
			this.initializeMap();
		},
		methods: {
			initializeMap() {
				const mapContainer = this.$refs.googleMap;
				this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.google-map {
		width: 100%;
		height: 100%;

		&__map {
			width: 100%;
			height: 100%;
		}
	}
</style>
