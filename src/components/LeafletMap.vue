<template>
	<div class="map">
		<leaflet-map-loader :marker="marker"></leaflet-map-loader>
	</div>
</template>

<script>
	import LeafletMapLoader from "./LeafletMapLoader";
	export default {
		components: {
			LeafletMapLoader
		},
		props: {
			user: Object
		},
		computed: {
			marker() {
				return {
					position: {
						lat: parseFloat(this.user.latitude),
						lng: parseFloat(this.user.longitude)
					}
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
