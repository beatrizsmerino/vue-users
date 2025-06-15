<template>
	<LMarker :lat-lng="position">
		<LPopup>
			<MapMarkerPosition :position="position" />
		</LPopup>
	</LMarker>
</template>

<script>
	import { LMarker, LPopup } from "vue2-leaflet";
	import MapMarkerPosition from "@/components/Map/MapMarkerPosition";

	export default {
		"name": "MapLeafletMarker",
		"components": {
			LMarker,
			LPopup,
			MapMarkerPosition,
		},
		"props": {
			"position": {
				"type": Object,
				"required": true,
			},
		},
	};
</script>
