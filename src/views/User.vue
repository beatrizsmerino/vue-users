<template>
	<div class="page-main__inner">
		<section class="page-section">
			<div class="page-user__content inner">
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
	import UserDetail from "../components/UserDetail.vue";
	import UserMap from "../components/UserMap.vue";

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
			if (this.user === undefined) {
				this.$router.push({ name: "users" });
			}
		}
	};
</script>

<style lang="scss" scoped>
	.page-user {
		&__content {
			width: 100%;
			max-width: 80%;
			margin: 0 auto;
			display: flex;
			align-items: stretch;
			justify-content: center;

			@include media("xxxl") {
				max-width: 100%;
			}

			@include media("xl") {
				flex-direction: column;
			}
		}
	}
</style>

<style lang="scss">
	.page-user {
		.page-main {
			margin-bottom: 6.4rem;
		}
	}
</style>