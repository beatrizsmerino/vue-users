<template>
	<MapMarkerPosition
		ref="googleMapsPopupRef"
		:position="marker.position"
	/>
</template>

<script>
	import { MAP_GOOGLE_MARKER_ICON } from "@/constants/MapGoogle";
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

<style lang="scss">
	// wrapper
	.gm-style-iw {
		padding: 1.3rem 2.4rem 1.3rem 2rem !important;
	}

	// header
	.gm-style-iw-chr {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;

		.gm-style-iw-ch {
			display: none !important;
		}

		button,
		button > * {
			width: 1.5rem !important;
			height: 1.5rem !important;
			margin: 0 !important;
		}
	}

	// content
	.gm-style-iw-d {
		overflow: auto !important;
	}
</style>
