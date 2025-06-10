<template>
	<LMarker :lat-lng="position">
		<LPopup>
			Current location:
			<p>
				Latitude: {{ position.lat }}
				<br />
				Longitude: {{ position.lng }}
			</p>
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
