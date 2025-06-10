<template>
	<div class="user-detail">
		<div class="user-detail__header">
			<div class="user-detail__image">
				<img
					:src="user.imageLarge"
					:alt="user.username"
				/>
			</div>

			<div class="user-detail__group">
				<UserData
					user-data-icon="fa fa-user"
					user-data-key="Name"
					:user-data-value="`${user.name.title} ${user.name.first} ${user.name.last}`"
				/>
				<UserData
					user-data-icon="fa fa-user-lock"
					user-data-key="Username"
					:user-data-value="user.username"
				/>
				<UserData
					user-data-icon="fa fa-clock"
					user-data-key="Registered"
					:user-data-value="new Date(user.registered)"
				/>
			</div>
		</div>

		<div class="user-detail__content">
			<div class="user-detail__column">
				<div class="user-detail__group">
					<UserData
						user-data-icon="fa fa-globe"
						user-data-key="Nationality"
						:user-data-value="user.nationality"
					/>
					<UserData
						user-data-icon="fa fa-flag"
						user-data-key="State"
						:user-data-value="user.state"
					/>
					<UserData
						user-data-icon="fa fa-city"
						user-data-key="City"
						:user-data-value="user.city"
					/>
					<UserData
						user-data-icon="fa fa-street-view"
						user-data-key="Street"
						:user-data-value="`${user.streetName}, ${user.streetNumber}`"
					/>
					<UserData
						user-data-icon="fa fa-mail-bulk"
						user-data-key="Postcode"
						:user-data-value="user.postcode"
					/>
				</div>
			</div>

			<div class="user-detail__column">
				<div class="user-detail__group">
					<UserData
						user-data-icon="fa fa-venus-mars"
						user-data-key="Gender"
						:user-data-value="user.gender"
					/>
					<UserData
						user-data-icon="fa fa-envelope"
						user-data-key="Email"
						:user-data-value="user.email"
					/>
					<UserData
						user-data-icon="fa fa-phone"
						user-data-key="Phone"
						:user-data-value="user.phone"
					/>
					<UserData
						user-data-icon="fa fa-phone"
						user-data-key="Cell"
						:user-data-value="user.cell"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import UserData from "@/components/User/UserData";

	export default {
		"name": "UserDetail",
		"components": {
			UserData,
		},
		"props": {
			"user": Object,
		},
		data() {
			return {};
		},
		beforeCreate() {
			window.scroll({
				"top": 0,
				"left": 0,
			});
		},
	};
</script>

<style lang="scss" scoped>
	.user-detail {
		width: 70rem;
		margin: 0 auto;
		padding: 3rem;
		background-color: $color-brand-2;
		font-size: 2.4rem;

		@include media("xl") {
			width: inherit;
			margin: 0;
		}

		@include media("sm") {
			padding: 3rem;
			font-size: 2rem;
		}

		> * {
			&:not(:last-child) {
				margin-bottom: 3rem;
			}
		}

		&__header {
			display: flex;
			align-items: center;

			> *:not(:last-child) {
				margin-right: 2rem;
			}
		}

		&__image {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			max-width: 17rem;
			overflow: hidden;
			border: 0.3rem solid $color-white;
			border-radius: 50%;

			@include media("sm") {
				max-width: 15rem;
			}

			img {
				width: 100%;
				height: 100%;
			}
		}

		&__content {
			display: flex;

			@include media("xs") {
				flex-direction: column;
			}

			> *:not(:last-child) {
				margin-right: 2rem;

				@include media("xs") {
					margin-bottom: 2rem;
				}
			}
		}

		&__column {
			width: 50%;

			@include media("xl") {
				display: flex;
				flex: 1;
				width: auto;
			}

			@include media("md") {
				flex-direction: column;
			}

			> *:not(:last-child) {
				margin-bottom: 2rem;

				@include media("xl") {
					margin-right: 2rem;
					margin-bottom: 0;
				}

				@include media("md") {
					margin-right: 0;
					margin-bottom: 2rem;
				}
			}
		}

		&__group {
			@include media("xl") {
				flex: 1;
			}

			@include media("md") {
				flex: none;
			}

			> *:not(:last-child) {
				margin-bottom: 1rem;
			}
		}
	}
</style>
