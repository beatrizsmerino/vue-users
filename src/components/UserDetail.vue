<template>
	<div class="user-detail">
		<div class="user-detail__image">
			<img
				:src="user.imageLarge"
				:alt="user.username"
			/>
		</div>

		<div class="user-detail__content">
			<div class="user-detail__group">
				<p>
					<strong class="user-detail__label">
						Name:
					</strong>
					{{user.name.title}} {{user.name.first}} {{user.name.last}}
				</p>
				<p>
					<strong class="user-detail__label">
						Username:
					</strong>
					{{user.username}}
				</p>
			</div>

			<div class="user-detail__group">
				<p>
					<strong class="user-detail__label">
						Gender:
					</strong>
					{{user.gender}}
				</p>
				<p>
					<strong class="user-detail__label">
						Nationality:
					</strong>
					{{user.nationality}}
				</p>
			</div>

			<div class="user-detail__group">
				<p>
					<strong class="user-detail__label">
						State:
					</strong>
					{{user.state}}
				</p>
				<p>
					<strong class="user-detail__label">
						City:
					</strong>
					{{user.city}}
				</p>
				<p>
					<strong class="user-detail__label">
						Street:
					</strong>
					{{user.streetName}}, {{user.streetNumber}}
				</p>
				<p>
					<strong class="user-detail__label">
						Postcode:
					</strong>
					{{user.postcode}}
				</p>
			</div>

			<div class="user-detail__group">
				<p>
					<strong class="user-detail__label">
						Email:
					</strong>
					{{user.email}}
				</p>
				<p>
					<strong class="user-detail__label">
						Phone:
					</strong>
					{{user.phone}}
				</p>
				<p>
					<strong class="user-detail__label">
						Cell:
					</strong>
					{{user.cell}}
				</p>
			</div>

			<div class="user-detail__group">
				<p>
					<strong class="user-detail__label">
						Registered:
					</strong>
					{{user.registered}}
				</p>
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
		max-width: 60rem;
		margin: 0 auto;
		padding: 4rem;
		font-size: 2.4rem;
		color: var(--color-light);
		background-color: var(--color-brand-2);

		&__group {
			&:not(:last-child){
				margin-bottom: 2rem;
			}
		}

		&__image {
			width: 15rem;
			height: 15rem;
			margin-bottom: 4rem;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
			border: 0.3rem solid #fff;
			overflow: hidden;

			img{
				width: 100%;
				height: 100%;
			}
		}

		&__label {
			color: var(--color-brand-1);
		}
	}
</style>
