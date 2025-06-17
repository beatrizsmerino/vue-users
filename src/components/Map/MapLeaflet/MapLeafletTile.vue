<template>
	<LTileLayer
		:url="url"
		:attribution="attribution"
	/>
</template>

<script>
	import { LTileLayer } from "vue2-leaflet";

	export default {
		"name": "MapLeafletTile",
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

<style lang="scss">
	.leaflet-container {
		font-size: 1rem;
	}
</style>
