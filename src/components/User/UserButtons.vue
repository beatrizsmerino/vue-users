<template>
	<div class="user-buttons">
		<ul class="user-buttons__list">
			<li class="user-buttons__item">
				<UIButton
					class="button--bg-brand-2"
					:class="{ 'button--circle': isMobile }"
					:icon="showUserInfo ? 'fa fa-eye' : 'fa fa-eye-slash'"
					:text="!isMobile ? (showUserInfo ? 'SHOW USER INFO' : 'HIDE USER INFO') : null"
					:title="showUserInfo ? 'SHOW USER INFO' : 'HIDE USER INFO'"
					@button-click="showHideInfoUserEmit"
				/>
			</li>
			<li class="user-buttons__item">
				<UIButton
					class="button--bg-brand-2"
					:class="{ 'button--circle': isMobile }"
					icon="fa fa-sort"
					:text="!isMobile ? 'ORDER USERS' : null"
					title="ORDER USERS"
					@button-click="orderUsersEmit"
				/>
			</li>
			<li class="user-buttons__item">
				<UIButton
					class="button--bg-brand-2"
					:class="{ 'button--circle': isMobile }"
					icon="fa fa-user-plus"
					:text="!isMobile ? 'GET USERS' : null"
					title="GET USERS"
					@button-click="getUsersEmit"
				/>
			</li>
			<li class="user-buttons__item">
				<UIButton
					class="button--bg-brand-2"
					:class="{ 'button--circle': isMobile }"
					icon="fa fa-user-minus"
					:text="!isMobile ? 'REMOVE ALL USERS' : null"
					title="REMOVE ALL USERS"
					@button-click="removeAllUsersEmit"
				/>
			</li>
		</ul>

		<svg
			class="user-buttons__svg"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 202.9 45.5"
		>
			<clipPath
				id="menuCurve"
				clipPathUnits="objectBoundingBox"
				transform="scale(0.0049285362247413 0.021978021978022)"
			>
				<path
					d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7 c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5 c9.2,3.6,17.6,4.2,23.3,4H6.7z"
				/>
			</clipPath>
		</svg>
	</div>
</template>

<script>
	import UIButton from "@/components/UI/UIButton";

	export default {
		"name": "UsersButtons",
		"components": {
			UIButton,
		},
		"emits": [
			"hide",
			"order",
			"get-all",
			"remove-all",
		],
		data() {
			return {
				"showUserInfo": false,
				"textButtonHideUser": "HIDE USER INFO",
				"isMobile": false,
			};
		},
		"watch": {
			isMobile(newVal, oldVal) {
				if (newVal !== oldVal) {
					this.isMobile = newVal;
				}
			},
		},
		created() {
			window.addEventListener("resize", this.handleResize);
		},
		unmounted() {
			window.removeEventListener("resize", this.handleResize);
		},
		mounted() {
			this.checkMobile();
		},
		"methods": {
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
				this.$emit("hide");
			},
			orderUsersEmit() {
				this.$emit("order");
			},
			getUsersEmit() {
				this.$emit("get-all");
			},
			removeAllUsersEmit() {
				this.$emit("remove-all");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.user-buttons {
		position: fixed;
		z-index: 999;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 1rem;
		background-color: $color-brand-1;
		box-shadow: 0 0 1rem 0.5rem rgba($color-black, 0.3);

		@include media("md") {
			box-shadow: 0 0 5rem 2rem rgba($color-black, 0.4);
		}

		&__list {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			list-style: none;
		}

		&__item {
			position: relative;
			transition: 0.5s ease-in-out 0s;

			&:not(:last-child) {
				margin-right: 1rem;

				@include media("md") {
					margin-right: 3rem;
				}
			}

			&:after {
				content: "";
				display: inline-block;
				position: absolute;
				z-index: -1;
				top: 0;
				left: 50%;
				width: 14rem;
				height: 2.5rem;
				transform: translate3d(-50%, 100%, 0);
				transition: all 0.5s ease-in-out 0s;
				opacity: 0;
				background-color: $color-brand-1;
				clip-path: url("#menuCurve");
				will-change: transform;
			}

			&:hover {
				&:after {
					@include media("md") {
						transform: translate3d(-50%, -3.5rem, 0);
						opacity: 1;
					}
				}

				:deep(.button) {
					@include media("md") {
						transform: translate3d(0, -1rem, 0) scale(1.4);
					}
				}
			}
		}

		&__svg {
			position: absolute;
			width: 0;
			height: 0;
		}

		:deep() {
			.button {
				transform: scale(1);

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
