<template>
	<div class="page-main__inner">
		<section class="page-section">
			<Error
				v-if="usersList.length === 0"
				:error="errorUsers"
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
	import UsersList from '@/components/User/UserList';
	import UsersButtons from '@/components/User/UserButtons';
	import Error from '@/components/UI/Error';

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
					message: 'Users not found',
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
					this.$parent.setLocalStorage('users', this.usersList);
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

		@include media('md') {
			padding-bottom: 12rem;
		}
	}
</style>
