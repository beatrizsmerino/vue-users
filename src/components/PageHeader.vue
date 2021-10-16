<template>
	<header class="page-header">
		<Logo />
		<nav
			class="nav"
			:class="{'is-open': isOpen, 'is-animated': isAnimated}"
		>
			<ul class="nav__list">
				<li class="nav__item">
					<router-link
						to="/"
						class="nav__item"
						exact
					>
						Home
					</router-link>
				</li>
				<li class="nav__item">

					<router-link
						to="/users"
						class="nav__item"
						:class="{'router-link-active': $route.path.includes('user')}"
					>
						Users
					</router-link>
				</li>
			</ul>
			<Button
				class="nav__button button button--icon"
				@button-click="openCloseNav"
			>
				<i class="fa fa-bars"></i>
			</Button>
		</nav>
	</header>
</template>

<script>
	import Logo from "./Logo";
	import Button from "./Button";

	export default {
		name: 'PageHeader',
		components: {
			Logo,
			Button
		},
		data() {
			return {
				isAnimated: false,
				isOpen: false
			}
		},
		methods: {
			openCloseNav() {
				this.isAnimated = true;
				this.isOpen = !this.isOpen;
			},
			closeNav() {
				this.isOpen = false;
			},
			handleResize(event) {
				const maxWidthBreakpointMD = 768;
				if (event.target.outerWidth >= maxWidthBreakpointMD) {
					this.isAnimated = false;
					this.closeNav();
				}
			}
		},
		watch: {
			$route(to, from) {
				if (to !== from) {
					this.closeNav();
				}
			},
			isOpen: function () {
				document.body.style.overflow = this.isOpen ? 'hidden' : ''
			}
		},
		created() {
			window.addEventListener('resize', this.handleResize);
		},
		destroyed() {
			window.removeEventListener('resize', this.handleResize);
		}
	};
</script>

<style lang="scss" scoped>
	.page-header {
		width: 100%;
		height: 7.2rem;
		padding: 0 4.8rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999999;
		background-color: $color-brand-1;
		box-shadow: 0 0 1rem 0.5rem rgba($color-black, 0.3);

		@include media("sm") {
			height: 6rem;
			padding: 0 2rem;
		}

		&__item {
			display: flex;
		}
	}

	.nav {
		display: flex;
		justify-content: center;

		&__list {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 2.4rem;
			font-weight: 600;

			@include media("sm") {
				height: calc(100% - 6rem);
				padding: 10rem 2rem;
				flex-direction: column;
				justify-content: flex-start;
				position: fixed;
				top: 6rem;
				left: 0;
				z-index: 99;
				transform: translate3d(100%, 0, 0);
				background: $color-gradient;
			}
		}

		&__item {
			padding: 0 0.2rem;
			display: flex;
			justify-content: center;
			text-align: center;
			color: $color-brand-2;

			&:not(:last-child) {
				margin-right: 2rem;

				@include media("sm") {
					margin-right: 0;
					margin-bottom: 2rem;
				}
			}

			&.router-link-active,
			&.router-link-exact-active {
				position: relative;
				color: $color-light;

				&:after {
					content: "";
					display: inline-block;
					width: 100%;
					height: 0.2rem;
					position: absolute;
					bottom: -0.2rem;
					left: 50%;
					transform: translate3d(-50%, 0, 0);
					background-color: $color-light;
				}
			}
		}

		&__button {
			display: none;
			font-size: 2.5rem;
			color: $color-brand-2;

			&:hover {
				color: $color-white;
			}

			@include media("sm") {
				display: flex;
			}
		}

		&.is-animated {
			.nav {
				&__list {
					transition: all 0.5s ease-in-out 0s;
				}
			}
		}

		&.is-open {
			.nav {
				background-color: transparent;

				&__list {
					transform: translate3d(0, 0, 0);
				}
			}
		}
	}
</style>
