<template>
	<header class="page-header">
		<Logo />
		<PageNav />
	</header>
</template>

<script>
	import Logo from "./Logo";
	import PageNav from "./PageNav";

	export default {
		name: 'PageHeader',
		components: {
			Logo,
			PageNav
		},
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
</style>
