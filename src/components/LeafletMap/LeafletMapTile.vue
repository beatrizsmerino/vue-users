<template>
	<LTileLayer
		:url="url"
		:attribution="attribution"
	/>
</template>

<script>
	import { LTileLayer } from "vue2-leaflet";

	export default {
		"name": "LeafletMapTile",
		"components": {
			LTileLayer,
		},
		"props": {
			"url": {
				"type": String,
				"required": true,
			},
			"attribution": {
				"type": String,
				"required": true,
			},
		},
	};
</script>
