<template>
	<div class="user-buttons">
		<Button
			class="user-buttons__item button--bg-brand-2"
			:title="showUserInfo ? 'SHOW USER INFO' : 'HIDE USER INFO'"
			@button-click="showHideInfoUserEmit"
		>
			<span class="button__icon">
				<i
					class="fa"
					:class="showUserInfo ? 'fa-eye' : 'fa-eye-slash'"
				/>
			</span>
			<span
				v-if="!isMobile"
				class="button__text"
				v-html="showUserInfo ? 'SHOW USER INFO' : 'HIDE USER INFO'"
			/>
		</Button>
		<Button
			class="user-buttons__item button--bg-brand-2"
			title="ORDER USERS"
			@button-click="orderUsersEmit"
		>
			<span class="button__icon">
				<i class="fa fa-sort" />
			</span>
			<span
				v-if="!isMobile"
				class="button__text"
			>
				ORDER USERS
			</span>
		</Button>
		<Button
			class="user-buttons__item button--bg-brand-2"
			title="GET USERS"
			@button-click="getUsersEmit"
		>
			<span class="button__icon">
				<i class="fa fa-user-plus" />
			</span>
			<span
				v-if="!isMobile"
				class="button__text"
			>
				GET USERS
			</span>
		</Button>
		<Button
			class="user-buttons__item button--bg-brand-2"
			title="REMOVE ALL USERS"
			@button-click="removeAllUsersEmit"
		>
			<span class="button__icon">
				<i class="fa fa-user-minus" />
			</span>
			<span
				v-if="!isMobile"
				class="button__text"
			>
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
				textButtonHideUser: 'HIDE USER INFO',
				isMobile: false
			};
		},
		watch: {
			isMobile(newVal, oldVal) {
				if (newVal !== oldVal) {
					this.isMobile = newVal;
				}
			}
		},
		created() {
			window.addEventListener('resize', this.handleResize);
		},
		destroyed() {
			window.removeEventListener('resize', this.handleResize);
		},
		mounted() {
			this.checkMobile();
		},
		methods: {
			showHideInfoUser() {
				this.showUserInfo = !this.showUserInfo;
			},
			checkMobile() {
				const maxWidthBreakpointMD = 768;
				if (window.outerWidth >= maxWidthBreakpointMD) {
					this.isMobile = false;
				} else {
					this.isMobile = true;
				}
			},
			handleResize() {
				this.checkMobile();
			},
			showHideInfoUserEmit() {
				this.showHideInfoUser();
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
	.user-buttons {
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
			&:not(:last-child) {
				margin-right: 1rem;
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
