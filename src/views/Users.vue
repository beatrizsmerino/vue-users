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
				@update-users-list="updateUsersList"
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
		"emits": [
			"update-users",
		],
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
					this.$emit("update-users", this.usersList);
				}
			},
		},
		"methods": {
			hideInfoUser() {
				this.infoUserHidden = !this.infoUserHidden;
			},
			orderUsers() {
				this.usersList = [
					...this.usersList,
				].sort(() => Math.random() - 0.5);
			},
			async getUsers() {
				await this.$parent.setUsers();
			},
			removeAllUsers() {
				this.usersList = [];
			},
			updateUsersList(newUsers) {
				this.usersList = newUsers;
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
