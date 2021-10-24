<template>
	<div class="users-buttons">
		<Button
			class="users-buttons__item button--bg-brand-2"
			@button-click="hideInfoUserEmit"
		>
			<span
				v-if="showUserInfo"
				class="button__icon"
			>
				<i class="fa fa-eye-slash" />
			</span>
			<span
				v-else
				class="button__icon"
			>
				<i class="fa fa-eye" />
			</span>
			<span class="button__text">
				{{ textButtonHideUser }}
			</span>
		</Button>
		<Button
			class="users-buttons__item button--bg-brand-2"
			@button-click="orderUsersEmit"
		>
			<span class="button__icon">
				<i class="fa fa-sort" />
			</span>
			<span class="button__text">
				ORDER USERS
			</span>
		</Button>
		<Button
			class="users-buttons__item button--bg-brand-2"
			@button-click="getUsersEmit"
		>
			<span class="button__icon">
				<i class="fa fa-user-plus" />
			</span>
			<span class="button__text">
				GET USERS
			</span>
		</Button>
		<Button
			class="users-buttons__item button--bg-brand-2"
			@button-click="removeAllUsersEmit"
		>
			<span class="button__icon">
				<i class="fa fa-user-minus" />
			</span>
			<span class="button__text">
				REMOVE ALL USERS
			</span>
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
				&__icon {
					font-size: 2rem;
				}

				&__text {
					font-size: 1.2rem;
				}
			}
		}
	}
</style>
