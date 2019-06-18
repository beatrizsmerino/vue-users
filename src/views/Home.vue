<template>
	<main class="home">
		<div class="logo-vue">
			<img src="../assets/logo.png" alt="Vue logo">
		</div>
		<div class="definition">
			<p>
				List of users with vue.js
			</p>
		</div>
	</main>
</template>



<script>
export default {
	components: {	
	},
	props: ["users"],
	methods: {
	}
};
</script>



<style lang="scss" scoped>
.logo-vue {
  text-align: center;
}
.definition{
	text-align: center;
	color: var(--color-brand-1);
	font-size: 1.5rem;
	font-weight: 300;
}
</style>
