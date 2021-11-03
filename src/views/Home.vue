<template>
	<div class="page-main__inner">
		<section class="page-section">
			<h2 class="subtitle page-inner">
				List of users with vue.js
			</h2>
			<div class="description page-inner">
				<p>
					Content developed with the API
					<br >
					<a
						class="link"
						href="http://randomuser.me"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://randomuser.me
					</a>
				</p>
			</div>
			<div class="logo-vue page-inner">
				<Icon name="logoVue" />
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		props: {
			usersFetch: Array
		}
	};
</script>

<style lang="scss">
	.page-home {
		height: 100%;

		.page-body {
			height: 100%;
		}

		.page-app {
			display: flex;
			height: 100%;
		}

		.page-main {
			display: flex;
			flex: 1;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		.subtitle {
			color: $color-brand-2;
			font-family: $font-brand-1;
			font-size: 6rem;
			text-align: center;

			@include media('md') {
				font-size: 5rem;
			}

			@include media('sm') {
				font-size: 4rem;
			}
		}

		.description {
			color: $color-brand-2;
			font-size: 3rem;
			text-align: center;

			@include media('md') {
				font-size: 2.6rem;
			}

			@include media('sm') {
				font-size: 2.2rem;
			}
		}

		.link {
			color: $color-brand-2;
			font-weight: 300;
			text-decoration: underline;

			&:hover {
				color: $color-brand-1;
				text-decoration: none;
			}
		}

		.logo-vue {
			display: flex;
			justify-content: center;
			margin: 1rem auto 0;

			.icon {
				width: 20rem;
				height: 20rem;

				@include media('sm') {
					width: 15rem;
					height: 15rem;
				}
			}
		}
	}
</style>
