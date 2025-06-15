<template>
	<div class="user-map">
		<MapGoogle
			v-if="isMapGoogle"
			:user="user"
			:api-key="googleApiKey"
		/>
		<MapLeaflet
			v-else
			:user="user"
		/>
	</div>
</template>

<script>
	import MapGoogle from "@/components/Map/MapGoogle/MapGoogle";
	import MapLeaflet from "@/components/Map/MapLeaflet/MapLeaflet";

	export default {
		"name": "UserMap",
		"components": {
			MapGoogle,
			MapLeaflet,
		},
		"props": {
			"user": Object,
		},
		data() {
			return {
				"googleApiKey": process.env.VUE_APP_TOKEN_GOOGLE_MAPS || "",
			};
		},
		"computed": {
			isMapGoogle() {
				return !!this.googleApiKey;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.user-map {
		width: 100%;

		@include media("xl") {
			height: 50rem;
		}
	}
</style>
