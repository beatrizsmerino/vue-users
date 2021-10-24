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
		<Button
			@button-click="removeAllUsersEmit"
			class="users-buttons__item button--bg-brand-2"
		>
			REMOVE ALL USERS
		</Button>
	</div>
</template>

<script>
	import Button from "@/components/Button";

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
			changeTextButtonHideUser() {
				if (this.showUserInfo) {
					this.textButtonHideUser = 'SHOW USER INFO'
				} else {
					this.textButtonHideUser = 'HIDE USER INFO';
				}
			},
			hideInfoUserEmit() {
				this.showUserInfo = !this.showUserInfo;
				this.changeTextButtonHideUser();
				this.$emit("hide");
			},
			orderUsersEmit() {
				this.$emit("order");
			},
			getUsersEmit() {
				this.$emit("getAll");
			},
			removeAllUsersEmit() {
				this.$emit("removeAll");
			}
		}
	};
</script>

<style lang="scss" scoped>
	.users-buttons {
		width: 100%;
		padding: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 999;
		background-color: $color-brand-1;
		box-shadow: 0 0 1rem 0.5rem rgba($color-black, 0.3);

		&__item {
			margin: 0.5rem;

			@include media("md") {
				width: calc(50% - 1rem);
			}
		}

		::v-deep {
			.button {
				font-size: 1.3rem;
			}
		}
	}
</style>

