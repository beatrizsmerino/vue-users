<template>
	<nav
		class="page-nav"
		:class="{ 'is-open': isOpen, 'is-animated': isAnimated }"
	>
		<ul class="page-nav__list">
			<li class="page-nav__item">
				<router-link
					to="/"
					class="page-nav__link"
					exact
				>
					Home
				</router-link>
			</li>
			<li class="page-nav__item">
				<router-link
					to="/users"
					class="page-nav__link"
					:class="{
						'router-link-active': $route.path.includes('user')
					}"
				>
					Users
				</router-link>
			</li>
		</ul>
		<UIButton
			class="page-nav__button button button--icon"
			@button-click="openCloseNav"
		>
			<i class="fa fa-bars" />
		</UIButton>
	</nav>
</template>

<script>
	import UIButton from '@/components/UI/UIButton';

	export default {
		name: 'PageNav',
		components: {
			UIButton
		},
		data() {
			return {
				isAnimated: false,
				isOpen: false,
				isMobile: false
			};
		},
		watch: {
			$route(to, from) {
				if (to !== from) {
					this.closeNav();
				}
			},
			isOpen() {
				document.body.style.overflow = this.isOpen ? 'hidden' : '';
			},
			isMobile(newVal, oldVal) {
				if (newVal !== oldVal) {
					this.isMobile = newVal;
				}

				if (!newVal) {
					this.desktopNav();
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
			openCloseNav() {
				this.isAnimated = true;
				this.isOpen = !this.isOpen;
			},
			closeNav() {
				this.isOpen = false;
			},
			desktopNav() {
				this.isAnimated = false;
				this.closeNav();
			},
			checkMobile() {
				const maxWidthBreakpointSM = 576;
				if (window.outerWidth >= maxWidthBreakpointSM) {
					this.isMobile = false;
				} else {
					this.isMobile = true;
				}
			},
			handleResize() {
				this.checkMobile();
			}
		}
	};
</script>

<style lang="scss" scoped>
	.page-nav {
		display: flex;
		justify-content: center;

		&__list {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			list-style: none;

			@include media('sm') {
				position: fixed;
				z-index: 99;
				top: 6rem;
				left: 0;
				flex-direction: column;
				justify-content: flex-start;
				height: calc(100% - 6rem);
				padding: 10rem 2rem;
				transform: translate3d(100%, 0, 0);
				background: $color-gradient;
			}
		}

		&__item {
			display: flex;
			justify-content: center;

			&:not(:last-child) {
				margin-right: 2rem;

				@include media('sm') {
					margin-right: 0;
					margin-bottom: 2rem;
				}
			}
		}

		&__link {
			position: relative;
			padding: 0 0.5rem;
			transition: all 0.5s ease-in-out 0s;
			color: $color-brand-2;
			font-size: 2.4rem;
			font-weight: 600;
			text-align: center;

			&:after {
				content: '';
				display: inline-block;
				position: absolute;
				bottom: -0.2rem;
				left: 50%;
				width: 0;
				height: 0.2rem;
				transform: translate3d(-50%, 0, 0);
				transition: all 0.5s ease-in-out 0s;
			}

			&:hover,
			&.router-link-active,
			&.router-link-exact-active {
				color: $color-light;

				&:after {
					width: 100%;
					background-color: $color-light;
				}
			}
		}

		&__button {
			display: none;
			color: $color-brand-2;
			font-size: 2.5rem;

			@include media('sm') {
				display: flex;
			}

			&:hover {
				color: $color-white;
			}
		}

		&.is-animated {
			.page-nav {
				&__list {
					transition: all 0.5s ease-in-out 0s;
				}
			}
		}

		&.is-open {
			.page-nav {
				background-color: transparent;

				&__list {
					transform: translate3d(0, 0, 0);
				}
			}
		}
	}
</style>
