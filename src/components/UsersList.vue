<template>
	<div class="users-list__wrapper">
		<transition-group
			tag="ul"
			name="slide"
			class="users-list"
			:class="{ isSmall: isSmall }"
		>
			<li
				v-for="user in users"
				:key="user.username"
				class="user"
			>
				<img
					:src="user.imageMedium"
					:alt="user.name.first + ' ' + user.name.last"
					class="user__img"
				/>

				<transition name="fade">
					<div
						class="user__content"
						:class="{ isHidden: isHidden }"
					>
						<h3 class="user__name">
							{{user.name.first}} {{user.name.last}}
						</h3>
						<div class="user__description">
							<p class="user-data">
								<span class="user-data__icon">
									<i class="fa fa-user"></i>
								</span>
								<span class="user-data__text">
									{{user.username}}
								</span>
							</p>
							<p class="user-data">
								<span class="user-data__icon">
									<i class="fa fa-map-marker"></i>
								</span>
								<span class="user-data__text">
									{{user.state}}
								</span>
							</p>
						</div>

						<Button
							:to="`/user/${user.username}`"
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

				<span
					class="button-close"
					@click="userRemoveEmit(user)"
				>
					<i class="button-close__icon fas fa-times-circle"></i>
				</span>
			</li>
		</transition-group>
	</div>
</template>



<script>
	import Button from "./Button";

	export default {
		name: 'UsersList',
		components: {
			Button
		},
		props: {
			users: Array,
			isHidden: Boolean,
			isSmall: Boolean
		},
		methods: {
			userRemoveEmit(userToRemove) {
				this.$emit("remove", userToRemove);
			}
		},
	}
</script>



<style lang="scss" scoped>
	.users-list {
		max-width: 85rem;
		margin: 0 auto;
		padding: 0;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;

		@media (max-width: 80rem) {
			max-width: 50rem;
		}

		&__wrapper {
			margin: 0 -1rem 4rem;
		}

		&.isSmall {
			max-width: 70rem;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			transition: all 0.5s ease-out 0.8s;

			.user {
				width: 10rem;
				height: 10rem;
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
	}

	.user {
		width: calc(50% - 2rem);
		margin: 1rem;
		padding: 2rem;
		display: flex;
		position: relative;
		list-style: none;
		background-color: var(--color-brand-2);

		@media (max-width: 80rem) {
			width: calc(100% - 2rem);
		}

		&__img {
			width: 8rem;
			height: 8rem;
			border-radius: 50%;
			border: 0.3rem solid #fff;
		}

		&__content {
			width: calc(100% - 8rem - 1.6rem);
			margin-left: 1.6rem;
			display: inline-block;
			color: #fff;

			&.isHidden {
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
	}

	.user-data {
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
					color: #fff;
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

	/* animation list (WITH THE NAME SLIDE) */
	.slide-enter {
		opacity: 1;
		transform: translateX(50rem);
	}

	.slide-enter-active {
		transition: all 1s ease-in-out 0s !important;
	}

	.slide-leave-to {
		opacity: 0;
		transform: translateX(-50rem);
	}

	.slide-leave-active {
		transition: all 1s ease-in-out 0s !important;
	}

	/* animation button random (WITH THE NAME SLIDE)*/
	.slide-move {
		transition: all 0.5s ease-out 0s !important;
	}
</style>
