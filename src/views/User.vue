<template>
	<div class="page-main__inner">
		<section class="page-section">
			<div class="page-user__content page-inner">
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
	import UserDetail from "@/components/User/UserDetail";
	import UserMap from "@/components/User/UserMap";

	export default {
		"name": "User",
		"components": {
			UserDetail,
			UserMap,
		},
		"props": {
			"usersFetch": Array,
			"usersError": Object,
			"username": String,
		},
		data() {
			return {
				"usersList": this.usersFetch,
			};
		},
		"computed": {
			user() {
				return this.usersList.find(user => user.username === this.username);
			},
		},
		mounted() {
			if (typeof this.user === "undefined") {
				this.$router.push({ "name": "users" });
			}
		},
	};
</script>

<style lang="scss">
	.page-user {
		&__content {
			display: flex;
			align-items: stretch;
			justify-content: center;
			width: 100%;
			max-width: 80%;
			margin: 0 auto;

			@include media("xxxl") {
				max-width: 100%;
			}

			@include media("xl") {
				flex-direction: column;
			}
		}
	}
</style>
