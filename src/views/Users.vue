<template>
	<div class="page-main__inner">
		<section class="users">
			<users-list
				:users="usersList"
				:isHidden="isHidden"
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
				isHidden: false,
			};
		},
		methods: {
			hideInfoUser() {
				this.isHidden = !this.isHidden;
			},
			orderUsers() {
				this.usersList.sort(() => Math.random() - 0.5);
			},
			async getUsers() {
				await this.$parent.getUsers();
				this.usersList = this.usersFetch;
			},
			removeAllUsers(){
				this.usersList = [];
			}
		},
	};
</script>




<style lang="scss" scoped>
	.users {
		padding: 0 2rem 7.9rem;
	}
</style>
