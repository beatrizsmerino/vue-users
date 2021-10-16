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
		font-size: 9.6rem;
		line-height: 100%;
		color: $color-brand-1;

		@include media("md") {
			font-size: 8rem;
		}

		@include media("sm") {
			font-size: 7rem;
		}
	}
</style>
