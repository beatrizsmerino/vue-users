<template>
	<MapMarkerPosition
		ref="googleMapsPopupRef"
		:position="marker.position"
	/>
</template>

<script>
	import { MAP_GOOGLE_MARKER_ICON } from "@/constants/MapSettings";
	import MapMarkerPosition from "@/components/Map/MapMarkerPosition";

	export default {
		"name": "MapGoogleMarker",
		"components": {
			MapMarkerPosition,
		},
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
			const { Marker, InfoWindow } = this.google.maps;

			this.$nextTick(() => {
				const infoWindowContent = this.$refs.googleMapsPopupRef?.$el;

				if (infoWindowContent?.parentNode) {
					infoWindowContent.parentNode.removeChild(infoWindowContent);
				}

				const infowindow = new InfoWindow({
					"content": infoWindowContent,
				});

				const marker = new Marker({
					"position": this.marker.position,
					"marker": this.marker,
					"map": this.map,
					"icon": MAP_GOOGLE_MARKER_ICON,
				});

				marker.addListener("click", () => {
					infowindow.open(this.map, marker);
				});
			});
		},
	};
</script>
