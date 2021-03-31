<template>
	<header class="page-header">
		<nav class="nav">
			<router-link
				to="/"
				class="nav__item"
			>
				Home
			</router-link>
			<router-link
				to="/users"
				class="nav__item"
			>
				Users
			</router-link>
		</nav>
	</header>
</template>



<script>
	export default {
		name: 'PageHeader',
	};
</script>



<style lang="scss" scoped>
	.page-header {
		width: 100%;
		height: 4.5rem;
		padding: 1.5rem 3rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		background-color: var(--color-brand-1);
		box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.3);

		&__item {
			display: flex;
		}
	}

	.nav {
		font-size: 1.5rem;
		font-weight: 600;

		&__item {
			color: var(--color-light);

			&:not(:last-child) {
				margin-right: 2rem;
			}

			&.router-link-exact-active {
				position: relative;
				color: var(--color-brand-2);

				&:after {
					content: "";
					display: inline-block;
					width: 100%;
					height: 0.2rem;
					position: absolute;
					bottom: -0.2rem;
					left: 50%;
					transform: translate3d(-50%, 0, 0);
					background-color: var(--color-brand-2);
				}
			}
		}
	}
</style>
