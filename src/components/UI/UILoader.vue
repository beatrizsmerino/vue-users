<template>
	<div class="loading">
		<p>
			<span class="loading__text">
				Loading
			</span>
			<span class="loading__dots"></span>
		</p>
	</div>
</template>

<style lang="scss">
	.loading {
		display: flex;
		position: fixed;
		z-index: 999;
		top: 0;
		right: 0;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: rgba($color-brand-2, 0.9);
		color: $color-light;
		font-family: $font-brand-1;
		font-size: 3rem;

		&__dots {
			display: inline-block;
			width: 1.5em;
			text-align: left;

			&:after {
				content: "";
				display: inline-block;
				animation: loaderDots 2.5s infinite steps(4);
			}
		}
	}
</style>
