<template>
	<header class="page-header">
		<nav class="nav">
			<router-link to="/" class="nav__item">Home</router-link>
			<router-link to="/users" class="nav__item">Users</router-link>
		</nav>
	</header>
</template>



<script>
export default {

};
</script>



<style lang="scss" scoped>
.page-header {
	padding: 1.5rem;
	position: fixed;
	top: 0;
	right:0;
	z-index: 999;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	&__item {
		display: flex;
	}
}

.nav {
	font-size: 1.5rem;

	&__item {
		color: var(--color-brand-2);

		&:not(:last-child) {
			margin-right: 2rem;
		}

		&.router-link-exact-active {
			color: var(--color-brand-1);
		}
	}
}
</style>
