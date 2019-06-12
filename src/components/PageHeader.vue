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
	width: 100%;
	padding: 1.5rem 3rem;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	position: fixed;
	top: 0;
	left:0;
	z-index: 999;
	background-color: var(--color-light);

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
