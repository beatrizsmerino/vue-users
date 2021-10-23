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
		watch: {
			usersFetch(newVal, oldVal) {
				if (newVal !== oldVal) {
					this.usersList = newVal;
				}
			}
		},
		methods: {
			hideInfoUser() {
				this.infoUserHidden = !this.infoUserHidden;
			},
			orderUsers() {
				this.usersList.sort(() => Math.random() - 0.5);
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
