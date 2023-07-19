<template>
	<component
		:is="checkTag"
		:href="href"
		:to="to"
		:value="value"
		class="button"
		@click="buttonClick"
	>
		<slot />
	</component>
</template>

<script>
	export default {
		name: 'UIButton',
		props: {
			href: {
				type: String,
				default: null
			},
			to: {
				type: String,
				default: null
			},
			value: {
				type: String,
				default: null
			}
		},
		computed: {
			checkTag() {
				if (this.href) {
					return 'a';
				} else if (this.to) {
					return 'router-link';
				} else if (this.value) {
					return 'input';
				}

				return 'button';
			}
		},
		methods: {
			buttonClick() {
				this.$emit('button-click');
			}
		}
	};
</script>

<style lang="scss" scoped>
	.button {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.2rem 2rem;
		transition: color 0.5s ease-in-out 0s, background-color 0.5s ease-in-out 0s, border-color 0.5s ease-in-out 0s,
			transform 0.5s ease-in-out 0s;
		border: 0.2rem solid transparent;
		outline: none;
		background-color: transparent;
		font-size: 1.6rem;
		font-weight: 900;
		line-height: 110%;
		text-transform: capitalize;
		cursor: pointer;
		user-select: none;
		appearance: none;

		:deep() {
			> * {
				pointer-events: none;

				&:not(:first-child) {
					margin-left: 1rem;
				}

				&:only-child {
					margin-left: 0;
				}
			}
		}

		&__text {
			font-size: 2rem;
			font-weight: 700;
		}

		&__icon {
			font-size: 2.4rem;
		}

		&--icon {
			margin: 0;
			padding: 0;
			border: 0;
		}

		&--width-auto {
			width: fit-content;
		}

		&--circle {
			width: 5rem;
			height: 5rem;
			border-radius: 50%;
		}

		&--bg-brand-1 {
			background-color: $color-brand-1;
			color: $color-white;

			&:hover {
				border: 0.2rem solid $color-brand-1;
				background-color: transparent;
				color: $color-brand-1;
			}
		}

		&--bg-brand-2 {
			background-color: $color-brand-2;
			color: $color-light;

			&:hover {
				background-color: $color-light;
				color: $color-brand-2;
			}
		}
	}
</style>
