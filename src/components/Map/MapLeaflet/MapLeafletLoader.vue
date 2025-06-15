<template>
	<LMap
		:zoom="zoom"
		:center="center"
		:max-bounds="maxBounds"
		:max-bounds-viscosity="maxBoundsViscosity"
		:options="mapOptions"
		@update:center="$emit('update:center', $event)"
		@update:zoom="$emit('update:zoom', $event)"
	>
		<slot name="tile"></slot>
		<slot name="marker"></slot>
	</LMap>
</template>

<script>
	import "leaflet/dist/leaflet.css";
	import { LMap } from "vue2-leaflet";

	export default {
		"name": "MapLeafletLoader",
		"components": {
			LMap,
		},
		"props": {
			"center": Object,
			"zoom": Number,
			"mapOptions": Object,
			"maxBounds": Array,
			"maxBoundsViscosity": Number,
		},
		"emits": [
			"update:center",
			"update:zoom",
		],
	};
</script>
