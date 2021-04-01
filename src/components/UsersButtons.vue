<template>
	<div class="users-buttons">
		<Button
			@button-click="hideInfoUserEmit"
			class="users-buttons__item button--bg-brand-2"
		>
			{{ textButtonHideUser }}
		</Button>
		<Button
			@button-click="orderUsersEmit"
			class="users-buttons__item button--bg-brand-2"
		>
			ORDER USERS
		</Button>
		<Button
			@button-click="getUsersEmit"
			class="users-buttons__item button--bg-brand-2"
		>
			GET USERS
		</Button>
	</div>
</template>


<script>
	import Button from "./Button";

	export default {
		name: 'UsersButtons',
		components: {
			Button
		},
		data() {
			return {
				showUserInfo: false,
				textButtonHideUser: 'HIDE USER INFO'
			}
		},
		methods: {
			changeTextButtonHideUser(){
				if (this.showUserInfo) {
					this.textButtonHideUser = 'SHOW USER INFO'
				} else {
					this.textButtonHideUser = 'HIDE USER INFO';
				}
			},
			hideInfoUserEmit() {
				this.showUserInfo = !this.showUserInfo;
				this.changeTextButtonHideUser();
				this.$emit("hideInfoUser");
			},
			orderUsersEmit() {
				this.$emit("orderUsers");
			},
			getUsersEmit() {
				this.$emit("getUsers");
			}
		}
	};
</script>


<style lang="scss" scoped>
	.users-buttons {
		width: 100%;
		padding: 1.6rem;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 999;
		background-color: var(--color-brand-1);
		box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.3);

		&__item {
			font-size: 1.3rem;

			&:not(:last-child) {
				margin-right: 1.6rem;
			}
		}
	}
</style>

