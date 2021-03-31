<template>
	<h1 class="page-title">
		{{ $route.meta.title }}
	</h1>
</template>



<script>
	export default {
		name: 'PageTitle',
	};
</script>



<style lang="scss" scoped>
	.page-title {
		margin-bottom: 2rem;
		text-align: center;
		font-family: "Dauphin", "Oxygen", Helvetica, sans-serif;
		font-size: 6rem;
		line-height: 100%;
		color: var(--color-brand-1);
	}
</style>
