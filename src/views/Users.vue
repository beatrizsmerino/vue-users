<template>
	<div class="page-main__inner">
		<section class="users">
			<users-list
				:users="users"
				:isHidden="isHidden"
				:isSmall="isSmall"
				@remove="userRemove"
			/>
			<users-buttons
				@random="setRandom"
				@show="setShow"
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
			setShow() {
				this.isHidden = !this.isHidden;
				this.isSmall = !this.isSmall;
			},
			setRandom() {
				this.usersList.sort(() => Math.random() - 0.5);
			},
			userRemove(userToRemove) {
				this.usersList.splice(this.users.indexOf(userToRemove), 1);
			}
		}
	};
</script>




<style lang="scss" scoped>
	.users {
		padding: 0 2rem 6rem;
	}
</style>
