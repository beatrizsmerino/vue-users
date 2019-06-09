<template>
	<header class="page-header">
		<div class="page-header__item">
			<button @click="setShowEmit" class="button">CLICK</button>
			<button @click="setRandomEmit" class="button">RANDOM</button>
		</div>
		<div class="page-header__item">
			<nav class="nav">
				<router-link to="/" class="nav__item">Home</router-link>
				<router-link to="/users" class="nav__item">Users</router-link>
			</nav>
		</div>
	</header>
</template>



<script>
export default {
	props: ["users", "show"],
	methods: {
		setShowEmit() {
			this.$emit("setShow");
		},
		setRandomEmit() {
			this.$emit("setRandom");
		}
	}
};
</script>



<style lang="scss">
.page-header {
	margin-bottom: 4rem;
	padding: 0 2rem;
	display: flex;
	justify-content: space-between;
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

.button {
	padding: 1rem;
	color: #fff;
	border: none;
	background-color: var(--color-brand-2);
	cursor: pointer;

	&:not(:last-child) {
		margin-right: 1rem;
	}
}
</style>
