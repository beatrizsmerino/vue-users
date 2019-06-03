<template>
    <transition name="fade">
        <h1 v-if="show" class="page-title">
			{{ $route.meta.title }}
		</h1>
    </transition>
</template>



<script>
	export default {
		props: ['show'],
		methods: {

		},
	}
</script>



<style lang="scss">
	.page-title {
		margin: auto;
		text-align: center;
		font-size: 3rem;
		line-height: 1.5;
		color: lightcoral;
	}
</style>
