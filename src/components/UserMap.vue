<template>
	<div class="user-map">
		<GoogleMap
			v-if="isGoogleMaps"
			:user="user"
			:apiKey="googleApiKey"
		/>
		<LeafletMap
			v-else
			:user="user"
		/>
	</div>
</template>

<script>
	import GoogleMap from "@/components/GoogleMap";
	import LeafletMap from "@/components/LeafletMap";

	export default {
		name: 'UserMap',
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

		@include media("xl") {
			height: 50rem;
		}
	}
</style>
