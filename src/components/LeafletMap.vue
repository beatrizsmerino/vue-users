<template>
	<div class="map">
		<leaflet-map-loader :user="user"> </leaflet-map-loader>
	</div>
</template>

<script>
import LeafletMapLoader from "./LeafletMapLoader";
export default {
	components: {
		LeafletMapLoader
	},
	props: ["user"],
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
				center: this.mapCenter
			};
		}
	}
};
</script>

<style lang="scss" scoped>
.map {
	width: 100%;
	height: 100%;
}
</style>
