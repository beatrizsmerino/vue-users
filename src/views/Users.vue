<template>
	<section class="users">
		<users-list :users="users" :isHidden="isHidden" :isSmall="isSmall" @remove="userRemove"></users-list>
		<users-buttons @random="setRandom" @show="setShow"></users-buttons>
	</section>
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
				this.users.sort(() => Math.random() - 0.5);
			},
			userRemove(userToRemove) {
				this.users.splice(this.users.indexOf(userToRemove), 1);
			}
		}
	};
</script>




<style lang="scss" scoped>
	.users {
		padding-bottom: 6rem;
	}
</style>
