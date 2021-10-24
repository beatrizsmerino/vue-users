<template>
	<nav
		class="page-nav"
		:class="{'is-open': isOpen, 'is-animated': isAnimated}"
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
					:class="{'router-link-active': $route.path.includes('user')}"
				>
					Users
				</router-link>
			</li>
		</ul>
		<Button
			class="page-nav__button button button--icon"
			@button-click="openCloseNav"
		>
			<i class="fa fa-bars"></i>
		</Button>
	</nav>
</template>

<script>
	import Button from "@/components/Button";

	export default {
		name: 'PageNav',
		components: {
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
	}
</script>

<style lang="scss" scoped>
	.page-nav {
		display: flex;
		justify-content: center;

		&__list {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			list-style: none;

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
			display: flex;
			justify-content: center;

			&:not(:last-child) {
				margin-right: 2rem;

				@include media("sm") {
					margin-right: 0;
					margin-bottom: 2rem;
				}
			}
		}

		&__link {
			padding: 0 0.5rem;
			position: relative;
			text-align: center;
			font-size: 2.4rem;
			font-weight: 600;
			color: $color-brand-2;
			transition: all 0.5s ease-in-out 0s;

			&:after {
				content: "";
				display: inline-block;
				width: 0;
				height: 0.2rem;
				position: absolute;
				bottom: -0.2rem;
				left: 50%;
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