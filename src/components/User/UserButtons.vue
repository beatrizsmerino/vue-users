<template>
	<div class="users-buttons">
		<Button
			class="users-buttons__item button--bg-brand-2"
			@button-click="hideInfoUserEmit"
		>
			{{ textButtonHideUser }}
		</Button>
		<Button
			class="users-buttons__item button--bg-brand-2"
			@button-click="orderUsersEmit"
		>
			ORDER USERS
		</Button>
		<Button
			class="users-buttons__item button--bg-brand-2"
			@button-click="getUsersEmit"
		>
			GET USERS
		</Button>
		<Button
			class="users-buttons__item button--bg-brand-2"
			@button-click="removeAllUsersEmit"
		>
			REMOVE ALL USERS
		</Button>
	</div>
</template>

<script>
	import Button from '@/components/UI/Button';

	export default {
		name: 'UsersButtons',
		components: {
			Button
		},
		data() {
			return {
				showUserInfo: false,
				textButtonHideUser: 'HIDE USER INFO'
			};
		},
		methods: {
			changeTextButtonHideUser() {
				if (this.showUserInfo) {
					this.textButtonHideUser = 'SHOW USER INFO';
				} else {
					this.textButtonHideUser = 'HIDE USER INFO';
				}
			},
			hideInfoUserEmit() {
				this.showUserInfo = !this.showUserInfo;
				this.changeTextButtonHideUser();
				this.$emit('hide');
			},
			orderUsersEmit() {
				this.$emit('order');
			},
			getUsersEmit() {
				this.$emit('get-all');
			},
			removeAllUsersEmit() {
				this.$emit('remove-all');
			}
		}
	};
</script>

<style lang="scss" scoped>
	.users-buttons {
		display: flex;
		position: fixed;
		z-index: 999;
		bottom: 0;
		left: 0;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: 1rem;
		background-color: $color-brand-1;
		box-shadow: 0 0 1rem 0.5rem rgba($color-black, 0.3);

		&__item {
			margin: 0.5rem;

			@include media('md') {
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
