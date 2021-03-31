<template>
	<div class="user-map">
		<google-map
			v-if="isGoogleMaps"
			:user="user"
			:apiKey="googleApiKey"
		/>
		<leaflet-map
			v-else
			:user="user"
		/>
	</div>
</template>

<script>
	import GoogleMap from "../components/GoogleMap.vue";
	import LeafletMap from "../components/LeafletMap.vue";

	export default {
		components: {
			GoogleMap,
			LeafletMap
		},
		props: {
			user: Object,
		},
		data() {
			return {
				googleApiKey: "XXXXXX"
			};
		},
		computed: {
			isGoogleMaps() {
				return this.googleApiKey !== "XXXXXX"
			}
		}
	};
</script>

<style lang="scss" scoped>
	.user-map {
		width: 100%;
		height: 500px;
		margin-top: 5rem;
	}
</style>
