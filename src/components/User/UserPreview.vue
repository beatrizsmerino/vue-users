<template>
	<div
		class="user-preview"
		:class="{ 'is-hidden-info': isHidden }"
	>
		<img
			:src="dataUser.imageMedium"
			:alt="dataUser.username"
			class="user-preview__image"
		/>

		<transition name="fade">
			<div
				v-if="!isHidden"
				class="user-preview__content"
			>
				<h3 class="user-preview__name">
					{{ dataUser.name.first }} {{ dataUser.name.last }}
				</h3>

				<div class="user-preview__description">
					<p class="user-preview-data">
						<span class="user-preview-data__icon">
							<i class="fa fa-user"></i>
						</span>
						<span class="user-preview-data__text">
							{{ dataUser.username }}
						</span>
					</p>

					<p class="user-preview-data">
						<span class="user-preview-data__icon">
							<i class="fa fa-map-marker"></i>
						</span>
						<span class="user-preview-data__text">
							{{ dataUser.state }}
						</span>
					</p>
				</div>

				<UIButton
					:to="`/user/${dataUser.username}`"
					class="button-more button--bg-brand-1 button--width-auto"
					icon="fas fa-info"
					text="more info"
				/>
			</div>
		</transition>

		<UIButton
			class="button-close button--icon"
			icon="fas fa-times-circle"
			@button-click="userRemoveEmit(dataUser)"
		/>
	</div>
</template>

<script>
	import UIButton from "@/components/UI/UIButton";

	export default {
		"name": "UserPreview",
		"components": {
			UIButton,
		},
		"props": {
			"dataUser": {
				"type": Object,
				"required": true,
			},
			"isHidden": Boolean,
		},
		"emits": [
			"remove",
		],
		"methods": {
			userRemoveEmit(userToRemove) {
				this.$emit("remove", userToRemove);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.user-preview {
		display: flex;
		position: relative;
		width: 100%;
		height: 100%;
		gap: 1.6rem;
		padding: 2rem 6rem 2rem 2rem;
		background-color: $color-brand-2;

		&__image {
			width: 10rem;
			height: 10rem;
			border: 0.3rem solid $color-white;
			border-radius: 50%;
			background-color: $color-white;
			color: $color-brand-2;
			font-size: 1.2rem;
			line-height: 5rem;
			text-align: center;
		}

		&__content {
			display: inline-block;
			width: calc(100% - 10rem);
			color: $color-white;
		}

		&__name {
			margin-bottom: 1rem;
			font-size: 2.5rem;
			font-weight: bold;
			line-height: 100%;
			text-transform: capitalize;

			@include media("sm") {
				font-size: 2rem;
			}
		}

		&__description {
			margin-bottom: 2rem;
		}

		.user-preview-data {
			display: flex;
			align-items: center;

			&:not(:last-child) {
				margin-bottom: 0.4rem;
			}

			&__icon {
				margin-right: 1rem;
				opacity: 0.75;
				font-size: 2rem;

				@include media("sm") {
					font-size: 1.8rem;
				}
			}

			&__text {
				font-size: 2rem;

				@include media("sm") {
					font-size: 1.8rem;
				}
			}
		}

		:deep() {
			.button-close {
				position: absolute;
				top: 2rem;
				right: 2rem;
				border-radius: 50%;
				background-color: $color-brand-2;

				.button {
					&__icon {
						color: $color-brand-1;
						font-size: 2.8rem;
					}
				}

				&:hover {
					.button {
						&__icon {
							color: $color-white;
						}
					}
				}
			}

			.button-more {
				padding: 1rem 1.4rem;

				.button {
					&__icon {
						font-size: 1.4rem;
					}

					&__text {
						font-size: 1.6rem;
					}
				}
			}
		}

		&.is-hidden-info {
			align-items: center;
			justify-content: center;
			padding: 0.5rem;
			border-radius: 50%;

			:deep() {
				.button-close {
					top: 0.5rem;
					right: 0.5rem;
				}
			}
		}
	}

	// VUE TRANSITIONS
	// -----------------------------------------

	/* animation title (WITH NAME FADE) */
	.fade-enter-active {
		transition: all 1s ease-in-out 0s;
	}

	.fade-leave-active {
		transition: all 0s ease-in-out 0s;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
