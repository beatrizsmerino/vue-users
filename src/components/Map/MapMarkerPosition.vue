<template>
	<div class="map-popup">
		<h6 class="map-popup__title">
			Current location:
		</h6>
		<div class="map-popup__content">
			<p>
				<strong>Latitude:</strong>
				{{ position.lat }}
			</p>
			<p>
				<strong>Longitude:</strong>
				{{ position.lng }}
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		"name": "MapMarkerPosition",
		"props": {
			"position": {
				"type": Object,
				"required": true,
			},
		},
	};
</script>

<style lang="scss" scoped>
	.map-popup {
		display: flex;
		flex-direction: column;
		width: fit-content;
		color: $color-brand-2;
		font-size: 1.5rem;
		font-weight: 400;
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
