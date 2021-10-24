<template>
	<div class="page-main__inner">
		<section class="page-section">
			<error
				v-if="usersList.length === 0"
				:error="errorUsers"
			/>
			<users-list
				v-else
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
	import Error from "../components/Error.vue";

	export default {
		components: {
			UsersList,
			UsersButtons,
			Error
		},
		props: {
			usersFetch: Array
		},
		data() {
			return {
				usersList: this.usersFetch,
				infoUserHidden: false,
				errorUsers: {
					message: "Users not found",
					solution: "Click on the button 'GET USERS'"
				}
			};
		},
		watch: {
			usersFetch(newVal, oldVal) {
				if (newVal !== oldVal) {
					this.usersList = newVal;
				}
			},
			usersList(newVal, oldVal) {
				if (newVal !== oldVal) {
					this.usersList = newVal;
					this.$parent.setLocalStorage("users", this.usersList);
				}
			}
		},
		methods: {
			hideInfoUser() {
				this.infoUserHidden = !this.infoUserHidden;
			},
			orderUsers() {
				this.usersList.sort(() => Math.random() - 0.5);
				this.$parent.setLocalStorage('users', this.usersList);
			},
			async getUsers() {
				this.removeAllUsers();
				await this.$parent.setUsers();
			},
			removeAllUsers() {
				this.usersList = [];
			}
		}
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
