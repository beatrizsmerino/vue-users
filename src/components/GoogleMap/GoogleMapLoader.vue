<template>
	<div class="google-map">
		<div
			ref="googleMap"
			class="google-map__map"
		></div>

		<slot
			v-if="Boolean(google) && Boolean(map)"
			name="marker"
			:google="google"
			:map="map"
		></slot>
	</div>
</template>

<script>
	import googleMapsApiLoader from "google-maps-api-loader";

	export default {
		"name": "GoogleMapLoader",
		"props": {
			"mapConfig": Object,
			"apiKey": String,
		},
		data() {
			return {
				"google": null,
				"map": null,
			};
		},
		async mounted() {
			const googleMapApi = await googleMapsApiLoader({
				"apiKey": this.apiKey,
			});
			this.google = googleMapApi;
			this.initializeMap();
		},
		"methods": {
			initializeMap() {
				const mapContainer = this.$refs.googleMap;
				this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
			},
		},
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
