<template>
	<div class="user-map">
		<UIButton
			v-if="isMapGoogle"
			class="user-map__button button--bg-white button--width-auto"
			:text="`Switch to ${isSwitchMap ? 'Leaflet' : 'Google Maps'}`"
			@button-click="toggleMap"
		/>

		<MapGoogle
			v-if="isMapGoogle && isSwitchMap"
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
	import UIButton from "@/components/UI/UIButton";
	import MapGoogle from "@/components/Map/MapGoogle/MapGoogle";
	import MapLeaflet from "@/components/Map/MapLeaflet/MapLeaflet";

	export default {
		"name": "UserMap",
		"components": {
			UIButton,
			MapGoogle,
			MapLeaflet,
		},
		"props": {
			"user": Object,
		},
		data() {
			return {
				"googleApiKey": process.env.VUE_APP_TOKEN_GOOGLE_MAPS || "",
				"isSwitchMap": true,
			};
		},
		"computed": {
			isMapGoogle() {
				return !!this.googleApiKey;
			},
		},
		"methods": {
			toggleMap() {
				this.isSwitchMap = !this.isSwitchMap;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.user-map {
		position: relative;
		width: 100%;

		@include media("xl") {
			height: 50rem;
		}

		&__button {
			position: absolute;
			z-index: 999;
			bottom: 0;
			left: 0;
			margin: 3rem 1rem;
			transform: scale(0.7);
			transform-origin: left bottom;
		}
	}
</style>
