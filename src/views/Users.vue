<template>
	<div class="page-main__inner">
		<section class="page-section">
			<users-list
				:users="usersList"
				:stateHidden="infoUserHidden"
			/>
			<users-buttons
				@order="orderUsers"
				@hide="hideInfoUser"
				@getAll="getUsers"
				@removeAll="removeAllUsers"
			/>
		</section>
	</div>
</template>

<script>
	import UsersList from "../components/UsersList.vue";
	import UsersButtons from "../components/UsersButtons.vue";

	export default {
		components: {
			UsersList,
			UsersButtons
		},
		props: {
			usersFetch: Array
		},
		data() {
			return {
				usersList: this.usersFetch,
				infoUserHidden: false,
			};
		},
		methods: {
			hideInfoUser() {
				this.infoUserHidden = !this.infoUserHidden;
			},
			orderUsers() {
				this.usersList.sort(() => Math.random() - 0.5);
			},
			async getUsers() {
				await this.$parent.getUsers();
				this.usersList = this.usersFetch;
			},
			removeAllUsers() {
				this.usersList = [];
			}
		},
	};
</script>

<style lang="scss" scoped>
	.page-section {
		padding-bottom: 7rem;

		@include media("md") {
			padding-bottom: 12rem;
		}
	}
</style>
