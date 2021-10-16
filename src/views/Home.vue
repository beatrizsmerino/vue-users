<template>
	<div class="page-main__inner">
		<section class="page-section">
			<h2 class="subtitle inner">
				List of users with vue.js
			</h2>
			<div class="description inner">
				<p>
					Content developed with the API<br>
					<a
						href="http://randomuser.me"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://randomuser.me
					</a>
				</p>
			</div>
			<div class="logo-vue inner">
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
			usersFetch: Array
		},
	};
</script>

<style lang="scss" scoped>
	.subtitle {
		text-align: center;
		font-family: "Dauphin", "Oxygen", Helvetica, sans-serif;
		font-size: 6rem;
		color: $color-brand-2;

		@include media("md") {
			font-size: 5rem;
		}

		@include media("sm") {
			font-size: 4rem;
		}
	}

	.description {
		text-align: center;
		font-size: 3rem;
		color: $color-brand-2;

		@include media("md") {
			font-size: 2.6rem;
		}

		@include media("sm") {
			font-size: 2.2rem;
		}

		a {
			font-weight: bold;
			color: $color-brand-2;

			&:hover {
				color: $color-brand-1;
			}
		}
	}

	.logo-vue {
		margin: 1rem auto 0;
		display: flex;
		justify-content: center;

		img {
			width: 100%;
			max-width: 20rem;

			@include media("sm") {
				max-width: 15rem;
			}
		}
	}
</style>
