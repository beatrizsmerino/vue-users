<template>
	<div class="page-main__inner">
		<section class="home">
			<h2 class="subtitle">
				List of users with vue.js
			</h2>
			<div class="description">
				<p>
					Content developed with the API<br>
					<a href="http://randomuser.me" target="_blank" rel="noopener noreferrer">
						https://randomuser.me
					</a>
				</p>
			</div>
			<div class="logo-vue">
				<img
					src="../assets/logo.png"
					alt="Vue logo"
				/>
			</div>
		</section>
	</div>
</template>



<script>
	export default {
		components: {
		},
		props: {
			users: Array
		},
	};
</script>



<style lang="scss" scoped>
	.subtitle {
		text-align: center;
		font-family: "Dauphin", "Oxygen", Helvetica, sans-serif;
		font-size: 6.4rem;
		color: var(--color-brand-1);
	}

	.description {
		text-align: center;
		font-size: 3rem;
		color: var(--color-brand-2);

		a {
			font-weight: bold;
			color: var(--color-brand-2);

			&:hover {
				color: var(--color-brand-1);
			}
		}
	}

	.logo-vue {
		text-align: center;
	}
</style>
