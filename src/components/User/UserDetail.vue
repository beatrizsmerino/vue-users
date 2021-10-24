<template>
	<div class="user-detail">
		<div class="user-detail__header">
			<div class="user-detail__image">
				<img
					:src="user.imageLarge"
					:alt="user.username"
				/>
			</div>

			<div class="user-detail__group user-detail__group--inline">
				<p class="user-detail__item">
					<strong class="user-detail__label">
						Name:
					</strong>
					<span class="user-detail__data">
						{{user.name.title}} {{user.name.first}} {{user.name.last}}
					</span>
				</p>
				<p class="user-detail__item">
					<strong class="user-detail__label">
						Username:
					</strong>
					<span class="user-detail__data">
						{{user.username}}
					</span>
				</p>
				<p class="user-detail__item">
					<strong class="user-detail__label">
						Registered:
					</strong>
					<span class="user-detail__data">
						{{user.registered}}
					</span>
				</p>
			</div>
		</div>

		<div class="user-detail__content">
			<div class="user-detail__column">
				<div class="user-detail__group">
					<p class="user-detail__item">
						<strong class="user-detail__label">
							Gender:
						</strong>
						<span class="user-detail__data">
							{{user.gender}}
						</span>
					</p>
					<p class="user-detail__item">
						<strong class="user-detail__label">
							Nationality:
						</strong>
						<span class="user-detail__data">
							{{user.nationality}}
						</span>
					</p>
				</div>

				<div class="user-detail__group">
					<p class="user-detail__item">
						<strong class="user-detail__label">
							State:
						</strong>
						<span class="user-detail__data">
							{{user.state}}
						</span>
					</p>
					<p class="user-detail__item">
						<strong class="user-detail__label">
							City:
						</strong>
						<span class="user-detail__data">
							{{user.city}}
						</span>
					</p>
					<p class="user-detail__item">
						<strong class="user-detail__label">
							Street:
						</strong>
						<span class="user-detail__data">
							{{user.streetName}}, {{user.streetNumber}}
						</span>
					</p>
					<p class="user-detail__item">
						<strong class="user-detail__label">
							Postcode:
						</strong>
						<span class="user-detail__data">
							{{user.postcode}}
						</span>
					</p>
				</div>
			</div>

			<div class="user-detail__column">
				<div class="user-detail__group">
					<p class="user-detail__item">
						<strong class="user-detail__label">
							Email:
						</strong>
						<span class="user-detail__data user-detail__data--email">
							{{user.email}}
						</span>
					</p>
					<p class="user-detail__item">
						<strong class="user-detail__label">
							Phone:
						</strong>
						<span class="user-detail__data">
							{{user.phone}}
						</span>
					</p>
					<p class="user-detail__item">
						<strong class="user-detail__label">
							Cell:
						</strong>
						<span class="user-detail__data">
							{{user.cell}}
						</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'UserDetail',
		props: {
			user: Object
		},
		data() {
			return {};
		},
		beforeCreate() {
			window.scroll({
				top: 0,
				left: 0
			});
		}
	};
</script>

<style lang="scss" scoped>
	.user-detail {
		width: 70rem;
		margin: 0 auto;
		padding: 3rem;
		font-size: 2.4rem;
		background-color: $color-brand-2;

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
			width: 12vh;
			height: 12vh;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
			border: 0.3rem solid $color-white;
			overflow: hidden;

			@include media("sm") {
				width: 10rem;
				height: 10rem;
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
				@include media("xl") {
					margin-right: 2rem;
				}

				@include media("xs") {
					margin-bottom: 2rem;
				}
			}
		}

		&__column {
			width: 50%;

			@include media("xl") {
				width: auto;
				display: flex;
				flex: 1;
			}

			@include media("md") {
				flex-direction: column;
			}

			> *:not(:last-child) {
				margin-bottom: 2rem;

				@include media("xl") {
					margin-bottom: 0;
					margin-right: 2rem;
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

			&--inline {
				.user-detail {
					&__item {
						align-items: center;
						flex-direction: row;

						&:not(:last-child) {
							margin-bottom: 0;
						}
					}
				}
			}
		}

		&__item {
			display: flex;
			flex-direction: column;
		}

		&__label {
			margin-right: 0.5rem;
			font-size: 1.6rem;
			color: $color-brand-1;
		}

		&__data {
			font-size: 1.4rem;
			color: $color-light;

			&--email {
				word-break: break-all;
			}
		}
	}
</style>
