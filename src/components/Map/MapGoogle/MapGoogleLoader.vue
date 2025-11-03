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
	import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

	export default {
		"name": "MapGoogleLoader",
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
			setOptions({
				"key": this.apiKey,
				"version": "beta",
			});

			this.google = {
				"maps": await importLibrary("maps"),
				"marker": await importLibrary("marker"),
			};

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
