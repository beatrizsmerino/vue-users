<template>
	<div
		class="user-preview"
		:class="{ 'is-hidden-info': isHidden }"
	>
		<img
			:src="dataUser.imageMedium"
			:alt="dataUser.name.first + ' ' + dataUser.name.last"
			class="user-preview__img"
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
					class="button--bg-brand-1 button--width-auto"
				>
					<span class="button__icon">
						<i class="fas fa-info"></i>
					</span>
					<span class="button__text">
						more info
					</span>
				</UIButton>
			</div>
		</transition>

		<UIButton
			class="button-close button--icon"
			@button-click="userRemoveEmit(dataUser)"
		>
			<i class="button-close__icon fas fa-times-circle"></i>
		</UIButton>
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
		padding: 2rem 6rem 2rem 2rem;
		background-color: $color-brand-2;

		&__img {
			width: 8rem;
			height: 8rem;
			border: 0.3rem solid $color-white;
			border-radius: 50%;
		}

		&__content {
			display: inline-block;
			width: calc(100% - 8rem - 1.6rem);
			margin-left: 1.6rem;
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

		.button-close {
			display: flex;
			position: absolute;
			top: 2rem;
			right: 2rem;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			background-color: $color-brand-2;
			cursor: pointer;

			&__icon {
				display: inline-block;
				color: $color-brand-1;
				font-size: 2.8rem;
				pointer-events: none;
			}

			&:hover {
				.button-close {
					&__icon {
						color: $color-white;
					}
				}
			}
		}

		&.is-hidden-info {
			align-items: center;
			justify-content: center;
			padding: 0.5rem;
			border-radius: 50%;

			.button-close {
				top: 0.5rem;
				right: 0.5rem;
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
