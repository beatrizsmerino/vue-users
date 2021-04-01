<template>
	<div class="users-list__wrapper">
		<transition-group
			tag="ul"
			name="slide"
			class="users-list"
			:class="{ 'is-hidden-info': isHidden }"
		>
			<li
				v-for="user in usersList"
				:key="user.username"
				class="users-list__item"
				
			>
				<UserPreview
					:dataUser="user"
					:isHidden="isHidden"
					:class="{ 'is-hidden-info': isHidden }"
					@remove="userRemove"
				/>
			</li>
		</transition-group>
	</div>
</template>



<script>
	import UserPreview from "./UserPreview";

	export default {
		name: 'UsersList',
		components: {
			UserPreview
		},
		props: {
			users: Array,
			isHidden: Boolean
		},
		data() {
			return {
				usersList: this.users
			};
		},
		methods: {
			userRemove(userToRemove) {
				this.usersList.splice(this.usersList.indexOf(userToRemove), 1);
			}
		},
		watch: {
			users(newValue){
				this.usersList = newValue;
			}
		}
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

		@media (max-width: 50rem) {
			max-width: 50rem;
		}

		&__wrapper {
			margin: 0 -1rem 4rem;
		}

		&__item {
			width: calc(50% - 2rem);
			margin: 1rem;
			list-style: none;

			@media (max-width: 50rem) {
				width: calc(100% - 2rem);
			}
		}

		&.is-hidden-info {
			max-width: 70rem;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			transition: all 0.5s ease-out 0.8s;

			.users-list {
				&__item {
					width: 10rem;
					height: 10rem;
				}
			}
		}
	}

	// VUE TRANSITIONS
	// -----------------------------------------

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
