<template>
	<router-link
		to="/"
		class="logo"
	>
		VueUsers
	</router-link>
</template>

<script>
	export default {
		name: 'Logo'
	}
</script>

<style lang="scss" scoped>
	.logo {
		display: inline-block;
		font-family: $font-brand-1;
		font-size: 5rem;
		font-weight: bold;
		line-height: 100%;
		color: $color-brand-2;

		&:hover {
			color: $color-white;
		}

		@include media("sm") {
			font-size: 4rem;
		}
	}
</style>