<template>
	<div class="error">
		<span class="error__icon">
			<i class="fas fa-exclamation-triangle" />
		</span>
		<div class="error__message">
			<p>
				{{ error.message }}
			</p>
		</div>
		<div class="error__solution">
			<p>
				{{ error.solution }}
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		"name": "UIError",
		"props": {
			"error": {
				"type": Object,
				"required": true,
			},
		},
	};
</script>

<style lang="scss" scoped>
	.error {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 40vh;
		color: $color-error;
		text-align: center;

		&__icon {
			font-size: 7rem;
		}

		&__message {
			font-size: 3.2rem;
		}

		&__solution {
			font-size: 1.6rem;
		}
	}
</style>
