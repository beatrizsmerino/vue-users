<template>
	<div class="page-main__inner">
		<section class="users">
			<users-list
				:users="usersList"
				:isHidden="isHidden"
				:isSmall="isSmall"
			/>
			<users-buttons
				@orderUsers="orderUsers"
				@hideInfoUser="hideInfoUser"
				@getUsers="getUsers"
				@removeAllUsers="removeAllUsers"
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
			users: Array
		},
		data() {
			return {
				usersList: this.users,
				isHidden: false,
				isSmall: false
			};
		},
		methods: {
			hideInfoUser() {
				this.isHidden = !this.isHidden;
				this.isSmall = !this.isSmall;
			},
			orderUsers() {
				this.usersList.sort(() => Math.random() - 0.5);
			},
			async getUsers() {
				await this.$parent.getUsers();
				this.usersList = this.users;
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
