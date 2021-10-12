<template>
	<div class="page-main__inner">
		<section class="page-section">
			<div class="inner">
				<UserDetail
					v-if="user"
					:user="user"
				/>
				<UserMap
					v-if="user"
					:user="user"
				/>
			</div>
		</section>
	</div>
</template>

<script>
	import UserDetail from '../components/UserDetail.vue';
	import UserMap from '../components/UserMap.vue';

	export default {
		components: {
			UserDetail,
			UserMap
		},
		props: {
			usersFetch: Array,
			username: String
		},
		data() {
			return {
				usersList: this.usersFetch
			};
		},
		computed: {
			user() {
				return this.usersList.find(user => user.username === this.username);
			}
		},
		mounted() {
			const rootUpdated = this.$route.params.username;
			const rootFind = this.usersList.find(user => user.username === rootUpdated);

			if (typeof rootFind === 'undefined') {
				this.$router.push({name: 'users'});
			}
		}
	};
</script>

<style lang="scss" scoped>
.inner::v-deep {
	display: flex;

	@include media('lg') {
		flex-wrap: wrap;

		.user-map {
			margin-top: 3rem;
			height: 50rem;
		}
	}
}
</style>
