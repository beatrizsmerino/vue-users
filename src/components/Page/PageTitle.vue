<template>
	<h1 class="page-title page-inner">
		{{ $route.meta.title }}
	</h1>
</template>

<script>
	export default {
		name: 'PageTitle'
	};
</script>

<style lang="scss" scoped>
	.page-title {
		width: 100%;
		margin-bottom: 2rem;
		color: $color-brand-1;
		font-family: $font-brand-1;
		font-size: 9.6rem;
		line-height: 100%;
		text-align: center;

		@include media('md') {
			font-size: 8rem;
		}

		@include media('sm') {
			font-size: 7rem;
		}
	}
</style>
