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
		name: 'Button',
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
				} else {
					return 'button';
				}
			}
		},
		methods: {
			buttonClick() {
				this.$emit('button-click');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.button {
		padding: 1.2rem 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		text-transform: capitalize;
		font-size: 1.6rem;
		font-weight: 900;
		line-height: 110%;
		border: 0.2rem solid transparent;
		outline: none;
		background-color: transparent;
		transition: color 0.15s ease-in-out 0s,
			background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s;
		user-select: none;
		cursor: pointer;
		appearance: none;

		/deep/ {
			> * {
				pointer-events: none;

				&:not(:last-child) {
					margin-right: 1rem;
				}

				&:only-child {
					margin-right: 0;
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
			padding: 0;
			margin: 0;
			border: 0;
		}

		&--width-auto {
			width: fit-content;
		}

		&--bg-brand-1 {
			color: var(--color-white);
			background-color: var(--color-brand-1);

			&:hover {
				color: var(--color-brand-1);
				border: 0.2rem solid var(--color-brand-1);
				background-color: transparent;
			}
		}

		&--bg-brand-2 {
			color: var(--color-light);
			background-color: var(--color-brand-2);

			&:hover {
				color: var(--color-brand-2);
				background-color: var(--color-light);
			}
		}
	}
</style>