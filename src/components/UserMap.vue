<template>
	<div class="user-map">
		<GoogleMap
			v-if="isGoogleMaps"
			:user="user"
			:api-key="googleApiKey"
		/>
		<LeafletMap
			v-else
			:user="user"
		/>
	</div>
</template>

<script>
	import GoogleMap from '../components/GoogleMap.vue';
	import LeafletMap from '../components/LeafletMap.vue';

	export default {
		name: 'UserMap',
		components: {
			GoogleMap,
			LeafletMap
		},
		props: {
			user: Object
		},
		data() {
			return {
				googleApiKey: 'XXXXXX'
			};
		},
		computed: {
			isGoogleMaps() {
				return this.googleApiKey !== 'XXXXXX';
			}
		}
	};
</script>

<style lang="scss" scoped>
	.user-map {
		width: 100%;
		height: 50rem;
		margin-top: 5rem;

		@include media('sm') {
			height: 30rem;
			margin-top: 3rem;
		}
	}
</style>
