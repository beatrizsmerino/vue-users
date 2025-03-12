<template>
	<div class="user-list__wrapper page-inner">
		<transition-group
			tag="ul"
			name="slide"
			class="user-list"
			:class="{ 'is-hidden-info': stateHidden }"
		>
			<li
				v-for="user in usersList"
				:key="user.username"
				class="user-list__item"
			>
				<UserPreview
					:data-user="user"
					:is-hidden="stateHidden"
					@remove="userRemove"
				/>
			</li>
		</transition-group>
	</div>
</template>

<script>
	import UserPreview from "@/components/User/UserPreview";

	export default {
		"name": "UsersList",
		"components": {
			UserPreview,
		},
		"props": {
			"users": Array,
			"stateHidden": Boolean,
		},
		"emits": [
			"update-users-list",
		],
		data() {
			return {
				"usersList": this.users,
			};
		},
		"watch": {
			users(newValue, oldValue) {
				if (newValue !== oldValue) {
					this.usersList = newValue;
				}
			},
			usersList(newValue, oldValue) {
				if (newValue !== oldValue) {
					this.usersList = newValue;
					this.$emit("update-users-list", this.usersList);
				}
			},
		},
		"methods": {
			userRemove(userToRemove) {
				this.usersList = this.usersList.filter(user => user !== userToRemove);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.user-list {
		display: flex;
		flex-wrap: wrap;
		max-width: 85rem;
		margin: 0 auto;
		padding: 0;

		@include media("md") {
			max-width: 50rem;
		}

		&__item {
			width: calc(50% - 2rem);
			margin: 1rem;
			list-style: none;

			@include media("md") {
				width: 100%;
				margin-right: 0;
				margin-left: 0;
			}
		}

		&.is-hidden-info {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			max-width: 70rem;
			transition: all 0.5s ease-in-out 0.8s;

			.user-list {
				&__item {
					flex: none;
					width: 10rem;
					height: 10rem;
					margin: 1rem;
				}
			}
		}
	}

	// VUE TRANSITIONS
	// -----------------------------------------

	/* animation list (WITH THE NAME SLIDE) */
	.slide-enter {
		transform: translateX(50rem);
		opacity: 1;
	}

	.slide-enter-active {
		transition: all 1s ease-in-out 0s !important;
	}

	.slide-leave-to {
		transform: translateX(-50rem);
		opacity: 0;
	}

	.slide-leave-active {
		transition: all 1s ease-in-out 0s !important;
	}

	/* animation button random (WITH THE NAME SLIDE) */
	.slide-move {
		transition: all 0.5s ease-in-out 0s !important;
	}
</style>
