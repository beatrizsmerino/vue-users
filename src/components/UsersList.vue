<template>
	<div class="users-list">
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
								<span class="user-data__icon user-data__item">
									<i class="fa fa-user"></i>
								</span>
								<span class="user-data__text user-data__item">
									{{user.username}}
								</span>
							</p>
							<p class="user-data">
								<span class="user-data__icon user-data__item">
									<i class="fa fa-map-marker"></i>
								</span>
								<span class="user-data__text user-data__item">
									{{user.state}}
								</span>
							</p>
						</div>

						<router-link
							:to="`/user/${user.username}`"
							class="button"
						>
							<span class="button__icon fas fa-info"></span>
							<span class="button__text">
								more info
							</span>
						</router-link>
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
	export default {
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
		max-width: 550px;
		margin: 2em auto;
		padding: 0;

		&.isSmall {
			max-width: 700px;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			transition: all 0.5s ease-out 0.8s;

			.user {
				width: 30%;
				margin: 2%;
				transition: all 0.5s ease-out 0.5s;
			}
		}
	}

	.user {
		width: calc(100% - 2rem);
		margin: 1rem;
		padding: 20px;
		display: flex;
		position: relative;
		list-style: none;
		background-color: var(--color-brand-2);

		&__content {
			margin-left: 1rem;
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
			font-size: 1.6rem;
			font-weight: 200;
		}

		&__description {
		}

		&__img {
			width: 80px;
			height: 80px;
			border-radius: 50%;
			border: 3px solid #fff;
		}
	}

	.user-data {
		display: flex;
		align-items: center;

		&__icon {
			margin-right: 0.25rem;
			padding: 0.1rem 0.2rem;
			font-size: 1rem;
			opacity: 0.75;
		}
		&__text {
			font-size: 1.2rem;
		}
	}

	.button {
		margin-top: 10px;
		padding: 10px 20px;
		display: inline-block;
		text-align: center;
		color: var(--color-brand-1);
		border: 2px solid var(--color-brand-1);
		cursor: pointer;

		&__text {
			font-size: 1.2rem;
			font-weight: 700;
		}
		&__icon {
			margin-right: 0.8rem;
			font-size: 1.5rem;
		}

		&:hover {
			color: #fff;
			background-color: var(--color-brand-1);
		}
	}

	.button-close {
		position: absolute;
		top: 20px;
		right: 20px;
		cursor: pointer;

		&__icon {
			display: inline-block;
			font-size: 1.8rem;
			color: var(--color-brand-1);
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
		transform: translateX(500px);
	}

	.slide-enter-active {
		transition: all 1s ease-in-out 0s !important;
	}

	.slide-leave-to {
		opacity: 0;
		transform: translateX(-500px);
	}

	.slide-leave-active {
		transition: all 1s ease-in-out 0s !important;
	}

	/* animation button random (WITH THE NAME SLIDE)*/
	.slide-move {
		transition: all 0.5s ease-out 0s !important;
	}
</style>
