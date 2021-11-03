<template>
	<div class="user-detail">
		<div class="user-detail__header">
			<div class="user-detail__image">
				<img
					:src="user.imageLarge"
					:alt="user.username"
				>
			</div>

			<div class="user-detail__group">
				<div class="user-detail__item">
					<h4 class="user-detail__label">
						<span class="user-detail__icon">
							<i class="fa fa-user" />
						</span>
						<strong>Name:</strong>
					</h4>
					<p class="user-detail__data">
						{{ user.name.title }} {{ user.name.first }}
						{{ user.name.last }}
					</p>
				</div>
				<div class="user-detail__item">
					<h4 class="user-detail__label">
						<span class="user-detail__icon">
							<i class="fa fa-user-lock" />
						</span>
						<strong>Username:</strong>
					</h4>
					<p class="user-detail__data">
						{{ user.username }}
					</p>
				</div>
				<div class="user-detail__item">
					<h4 class="user-detail__label">
						<span class="user-detail__icon">
							<i class="fa fa-clock" />
						</span>
						<strong>Registered:</strong>
					</h4>
					<p class="user-detail__data">
						{{ user.registered }}
					</p>
				</div>
			</div>
		</div>

		<div class="user-detail__content">
			<div class="user-detail__column">
				<div class="user-detail__group">
					<div class="user-detail__item">
						<h4 class="user-detail__label">
							<span class="user-detail__icon">
								<i class="fa fa-globe" />
							</span>
							<strong>Nationality:</strong>
						</h4>
						<p class="user-detail__data">
							{{ user.nationality }}
						</p>
					</div>
					<div class="user-detail__item">
						<h4 class="user-detail__label">
							<span class="user-detail__icon">
								<i class="fa fa-flag" />
							</span>
							<strong>State:</strong>
						</h4>
						<p class="user-detail__data">
							{{ user.state }}
						</p>
					</div>
					<div class="user-detail__item">
						<h4 class="user-detail__label">
							<span class="user-detail__icon">
								<i class="fa fa-city" />
							</span>
							<strong>City:</strong>
						</h4>
						<p class="user-detail__data">
							{{ user.city }}
						</p>
					</div>
					<div class="user-detail__item">
						<h4 class="user-detail__label">
							<span class="user-detail__icon">
								<i class="fa fa-street-view" />
							</span>
							<strong>Street:</strong>
						</h4>
						<p class="user-detail__data">
							{{ user.streetName }}, {{ user.streetNumber }}
						</p>
					</div>
					<div class="user-detail__item">
						<h4 class="user-detail__label">
							<span class="user-detail__icon">
								<i class="fa fa-mail-bulk" />
							</span>
							<strong>Postcode:</strong>
						</h4>
						<p class="user-detail__data">
							{{ user.postcode }}
						</p>
					</div>
				</div>
			</div>

			<div class="user-detail__column">
				<div class="user-detail__group">
					<div class="user-detail__item">
						<h4 class="user-detail__label">
							<span class="user-detail__icon">
								<i class="fa fa-venus-mars" />
							</span>
							<strong>Gender:</strong>
						</h4>
						<p class="user-detail__data">
							{{ user.gender }}
						</p>
					</div>
					<div class="user-detail__item">
						<h4 class="user-detail__label">
							<span class="user-detail__icon">
								<i class="fa fa-envelope" />
							</span>
							<strong>Email:</strong>
						</h4>
						<p class="user-detail__data user-detail__data--email">
							{{ user.email }}
						</p>
					</div>
					<div class="user-detail__item">
						<h4 class="user-detail__label">
							<span class="user-detail__icon">
								<i class="fa fa-phone" />
							</span>
							<strong>Phone:</strong>
						</h4>
						<p class="user-detail__data">
							{{ user.phone }}
						</p>
					</div>
					<div class="user-detail__item">
						<h4 class="user-detail__label">
							<span class="user-detail__icon">
								<i class="fa fa-phone" />
							</span>
							<strong>Cell:</strong>
						</h4>
						<p class="user-detail__data">
							{{ user.cell }}
						</p>
					</div>
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
		background-color: $color-brand-2;
		font-size: 2.4rem;

		@include media('xl') {
			width: inherit;
			margin: 0;
		}

		@include media('sm') {
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
			width: 18vh;
			height: 18vh;
			overflow: hidden;
			border: 0.3rem solid $color-white;
			border-radius: 50%;

			@include media('sm') {
				width: 15rem;
				height: 15rem;
			}

			img {
				width: 100%;
				height: 100%;
			}
		}

		&__content {
			display: flex;

			@include media('xs') {
				flex-direction: column;
			}

			> *:not(:last-child) {
				margin-right: 2rem;

				@include media('xs') {
					margin-bottom: 2rem;
				}
			}
		}

		&__column {
			width: 50%;

			@include media('xl') {
				display: flex;
				flex: 1;
				width: auto;
			}

			@include media('md') {
				flex-direction: column;
			}

			> *:not(:last-child) {
				margin-bottom: 2rem;

				@include media('xl') {
					margin-right: 2rem;
					margin-bottom: 0;
				}

				@include media('md') {
					margin-right: 0;
					margin-bottom: 2rem;
				}
			}
		}

		&__group {
			@include media('xl') {
				flex: 1;
			}

			@include media('md') {
				flex: none;
			}

			> *:not(:last-child) {
				margin-bottom: 1rem;
			}

			&--inline {
				.user-detail {
					&__item {
						flex-direction: row;
						flex-wrap: wrap;
						align-items: center;

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
			margin-bottom: 0.5rem;
			color: $color-brand-1;
			font-size: 1.8rem;
		}

		&__icon {
			margin-right: 0.5rem;
			color: $color-brand-1;
		}

		&__data {
			color: $color-light;
			font-size: 1.6rem;

			&--email {
				word-break: break-all;
			}
		}
	}
</style>
