<template>
	<header class="page-header">
		<span class="logo">
			VueUsers
		</span>
		<nav class="nav">
			<router-link
				to="/"
				class="nav__item"
				exact
			>
				Home
			</router-link>
			<router-link
				to="/users"
				class="nav__item"
				:class="{'router-link-active': $route.path.includes('user')}"
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
		padding: 0 3rem;
		display: flex;
		justify-content: space-between;
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

	.logo {
		display: inline-block;
		font-family: "Dauphin", "Oxygen", Helvetica, sans-serif;
		font-size: 3rem;
		font-weight: bold;
		line-height: 100%;
		color: var(--color-brand-2);
	}

	.nav {
		display: flex;
		justify-content: center;
		font-size: 1.5rem;
		font-weight: 600;

		&__item {
			padding: 0 0.2rem;
			display: flex;
			justify-content: center;
			text-align: center;
			color: var(--color-brand-2);

			&:not(:last-child) {
				margin-right: 2rem;
			}

			&.router-link-active,
			&.router-link-exact-active {
				position: relative;
				color: var(--color-light);

				&:after {
					content: "";
					display: inline-block;
					width: 100%;
					height: 0.2rem;
					position: absolute;
					bottom: -0.2rem;
					left: 50%;
					transform: translate3d(-50%, 0, 0);
					background-color: var(--color-light);
				}
			}
		}
	}
</style>
