<template>
	<div class="page-main__inner">
		<section class="page-section">
			<UIError
				v-if="usersError"
				:error="usersError"
			/>
			<UsersList
				v-else
				:users="usersList"
				:state-hidden="infoUserHidden"
			/>
			<UsersButtons
				@order="orderUsers"
				@hide="hideInfoUser"
				@get-all="getUsers"
				@remove-all="removeAllUsers"
			/>
		</section>
	</div>
</template>

<script>
	import UsersList from "@/components/User/UserList";
	import UsersButtons from "@/components/User/UserButtons";
	import UIError from "@/components/UI/UIError";

	export default {
		"name": "Users",
		"components": {
			UsersList,
			UsersButtons,
			UIError,
		},
		"props": {
			"usersFetch": Array,
			"usersError": Object,
		},
		data() {
			return {
				"usersList": this.usersFetch,
				"infoUserHidden": false,
			};
		},
		"watch": {
			usersFetch(newVal, oldVal) {
				if (newVal !== oldVal) {
					this.usersList = newVal;
				}
			},
			usersList(newVal, oldVal) {
				if (newVal !== oldVal) {
					this.usersList = newVal;
					this.$tools.setLocalStorage("users", this.usersList);
					this.$emit("update-users", this.usersList);
				}
			},
		},
		"methods": {
			hideInfoUser() {
				this.infoUserHidden = !this.infoUserHidden;
			},
			orderUsers() {
				this.usersList.sort(() => Math.random() - 0.5);
				this.$tools.setLocalStorage("users", this.usersList);
			},
			async getUsers() {
				await this.$parent.setUsers();
			},
			removeAllUsers() {
				this.usersList = [];
			},
		},
	};
</script>

<style lang="scss">
	.page-users {
		.page-body {
			padding-bottom: 7rem;
		}
	}
</style>
