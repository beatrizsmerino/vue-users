<template>
	<div class="user-preview">
		<img
			:src="dataUser.imageMedium"
			:alt="dataUser.name.first + ' ' + dataUser.name.last"
			class="user-preview__img"
		/>

		<transition name="fade">
			<div
				class="user-preview__content"
				:class="{ 'is-hidden': isHidden }"
			>
				<h3 class="user-preview__name">
					{{dataUser.name.first}} {{dataUser.name.last}}
				</h3>

				<div class="user-preview__description">
					<p class="user-preview-data">
						<span class="user-preview-data__icon">
							<i class="fa fa-user"></i>
						</span>
						<span class="user-preview-data__text">
							{{dataUser.username}}
						</span>
					</p>

					<p class="user-preview-data">
						<span class="user-preview-data__icon">
							<i class="fa fa-map-marker"></i>
						</span>
						<span class="user-preview-data__text">
							{{dataUser.state}}
						</span>
					</p>
				</div>

				<Button
					:to="`/user/${dataUser.username}`"
					class="button--bg-brand-1 button--width-auto"
				>
					<span class="button__icon">
						<i class="fas fa-info"></i>
					</span>
					<span class="button__text">
						more info
					</span>
				</Button>
			</div>
		</transition>

		<Button
			class="button-close button--icon "
			@button-click="userRemoveEmit(dataUser)"
		>
			<i class="button-close__icon fas fa-times-circle"></i>
		</Button>
	</div>
</template>

<script>
	import Button from "./Button";

	export default {
		name: 'UserPreview',
		components: {
			Button
		},
		props: {
			dataUser: {
				type: Object,
				required: true
			},
			isHidden: Boolean,
		},
		methods: {
			userRemoveEmit(userToRemove) {
				this.$emit("remove", userToRemove);
			}
		},
	}
</script>

<style lang="scss" scoped>
	.user-preview {
		width: 100%;
		height: 100%;
		padding: 2rem;
		display: flex;
		position: relative;
		background-color: var(--color-brand-2);

		&__img {
			width: 8rem;
			height: 8rem;
			border-radius: 50%;
			border: 0.3rem solid var(--color-white);
		}

		&__content {
			width: calc(100% - 8rem - 1.6rem);
			margin-left: 1.6rem;
			display: inline-block;
			color: var(--color-white);

			&.is-hidden {
				opacity: 0;
				display: none;
				transition: all 0.5s ease-out 0s;
			}
		}

		&__name {
			margin-bottom: 0.25rem;
			text-transform: capitalize;
			font-size: 2.5rem;
			font-weight: 200;
		}

		&__description {
			margin-bottom: 2rem;
		}

		.user-preview-data {
			display: flex;
			align-items: center;

			&__icon {
				margin-right: 1rem;
				font-size: 1.6rem;
				opacity: 0.75;
			}

			&__text {
				font-size: 2rem;
			}
		}

		.button-close {
			position: absolute;
			top: 2rem;
			right: 2rem;
			cursor: pointer;

			&__icon {
				display: inline-block;
				font-size: 2.8rem;
				color: var(--color-brand-1);
				pointer-events: none;
			}

			&:hover {
				.button-close {
					&__icon {
						color: var(--color-white);
					}
				}
			}
		}

		&.is-hidden-info {
			padding: 0.5rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;

			.button-close {
				display: flex;
				align-items: center;
				justify-content: center;
				top: 0.5rem;
				right: 0.5rem;
				border-radius: 50%;
				background-color: var(--color-light);

				&:hover {
					background-color: var(--color-brand-1);

					.button-close {
						&__icon {
							color: var(--color-light);
						}
					}
				}
			}
		}
	}

	// VUE TRANSITIONS
	// -----------------------------------------

	/* animation title (WITH NAME FADE) */
	.fade-enter {
		opacity: 1;
	}

	.fade-enter-active {
		transition: all 1s ease-in-out 0s;
	}

	.fade-leave-to {
		opacity: 0;
	}

	.fade-leave-active {
		transition: all 0.5s ease-out 0s;
	}
</style>