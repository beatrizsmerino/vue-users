<template>
	<LMarker :lat-lng="position">
		<LPopup class="leaflet-map-popup">
			<h6 class="leaflet-map-popup__title">
				Current location:
			</h6>
			<div class="leaflet-map-popup__content">
				<p>
					<strong>Latitude:</strong>
					{{ position.lat }}
				</p>
				<p>
					<strong>Longitude:</strong>
					{{ position.lng }}
				</p>
			</div>
		</LPopup>
	</LMarker>
</template>

<script>
	import { LMarker, LPopup } from "vue2-leaflet";

	export default {
		"name": "LeafletMapMarker",
		"components": {
			LMarker,
			LPopup,
		},
		"props": {
			"position": {
				"type": Object,
				"required": true,
			},
		},
	};
</script>

<style lang="scss" scoped>
	.leaflet-map-popup {
		display: flex;
		flex-direction: column;
		width: fit-content;
		font-size: 1.5rem;
		gap: 1.5rem;

		&__title {
			font-weight: bold;
		}

		&__content {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			p {
				margin: 0;
			}

			strong {
				color: $color-brand-1;
			}
		}
	}
</style>
