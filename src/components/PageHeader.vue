<template>
	<header class="page-header">
		<div class="page-header__item">
			<button @click="show = !show" class="button">CLICK</button>
			<button @click="randomEmit" class="button">RANDOM</button>
		</div>
		<div class="page-header__item">
			<nav class="nav">
				<router-link to="/" class="nav__item">Home</router-link>
				<router-link to="/about" class="nav__item">About</router-link>
			</nav>
		</div>
	</header>
</template>



<script>
export default {
	props: ['users', 'show'],
    methods: {
        randomEmit() {
			this.$emit("random");
        }
	},
}
</script>



<style lang="scss">

.page-header{
	padding: 0 2rem;
	display: flex;
	justify-content: space-between;
	align-items:center;

	&__item{
		display: flex;
	}
}

.nav{
	font-size: 1.5rem;

	&__item{
		&:not(:last-child){
			margin-right: 2rem;
		}
	}
}

.button{
	padding: 1rem;
	color: #fff;
	border: none;
	background-color: #3f3f3f;
	cursor: pointer;

	&:not(:last-child) {
		margin-right: 1rem;
	}
}

</style>
