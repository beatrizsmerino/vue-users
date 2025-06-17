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
			const { InfoWindow } = this.google.maps;
			const { AdvancedMarkerElement } = this.google.marker;

			this.$nextTick(() => {
				const infoWindowContent = this.$refs.googleMapsPopupRef?.$el;

				if (infoWindowContent?.parentNode) {
					infoWindowContent.parentNode.removeChild(infoWindowContent);
				}

				const infowindow = new InfoWindow({
					"content": infoWindowContent,
				});

				const marker = new AdvancedMarkerElement({
					"map": this.map,
					"position": this.marker.position,
					"title": this.marker.title || "",
					"content": this.createSvgIcon(),
					"gmpClickable": true,
				});

				marker.addListener("gmp-click", () => {
					infowindow.open(this.map, marker);
				});
			});
		},
		"methods": {
			createSvgIcon() {
				const {
					viewBox,
					width,
					height,
					path,
					strokeOpacity,
					strokeWeight,
					strokeColor,
					fillColor,
					fillOpacity,
					scale,
				} = MAP_GOOGLE_MARKER_ICON;
				const svgNS = "http://www.w3.org/2000/svg";

				const svg = document.createElementNS(svgNS, "svg");
				svg.setAttribute("viewBox", viewBox);
				svg.setAttribute("width", width);
				svg.setAttribute("height", height);

				const pathEl = document.createElementNS(svgNS, "path");
				pathEl.setAttribute("d", path);
				pathEl.setAttribute("stroke", strokeColor);
				pathEl.setAttribute("stroke-opacity", strokeOpacity);
				pathEl.setAttribute("stroke-width", strokeWeight);
				pathEl.setAttribute("fill", fillColor);
				pathEl.setAttribute("fill-opacity", fillOpacity);
				pathEl.setAttribute("scale", scale);

				svg.appendChild(pathEl);

				return svg;
			},
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
