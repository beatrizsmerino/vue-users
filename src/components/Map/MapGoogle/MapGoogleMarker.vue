<template>
	<div></div>
</template>

<script>
	import { MAP_GOOGLE_MARKER_ICON } from "@/constants/MapSettings";

	export default {
		"name": "MapGoogleMarker",
		"props": {
			"google": {
				"type": Object,
				"required": true,
			},
			"map": {
				"type": Object,
				"required": true,
			},
			"marker": {
				"type": Object,
				"required": true,
			},
		},
		mounted() {
			const { Marker } = this.google.maps;

			new Marker({
				"position": this.marker.position,
				"marker": this.marker,
				"map": this.map,
				"icon": MAP_GOOGLE_MARKER_ICON,
			});
		},
	};
</script>
