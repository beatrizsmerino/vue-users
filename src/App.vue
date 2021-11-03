<template>
	<div
		v-cloak
		id="app"
		class="page-app"
	>
		<PageHeader />

		<main class="page-main">
			<PageTitle />

			<router-view :users-fetch="getUsers" />
		</main>
	</div>
</template>

<script>
	import PageHeader from '@/components/Page/PageHeader';
	import PageTitle from '@/components/Page/PageTitle';

	export default {
		components: {
			PageHeader,
			PageTitle
		},
		data() {
			return {
				usersList: []
			};
		},
		computed: {
			getUsers() {
				return this.usersList;
			}
		},
		watch: {
			$route: {
				handler(to, from) {
					const html = document.getElementsByTagName('html')[0];
					const body = document.getElementsByTagName('body')[0];

					if (typeof from !== 'undefined') {
						html.classList.remove(
							'page',
							`page-${from.name.toLowerCase()}`
						);
					}
					html.classList.add('page', `page-${to.name.toLowerCase()}`);
					body.classList.add('page-body');
				},
				immediate: true
			}
		},
		created() {
			this.checkUsers();
		},
		methods: {
			async fetchUsers() {
				const response = await fetch('https://randomuser.me/api/?results=10');
				const data = await response.json();

				return data;
			},
			createUsers(data) {
				const users = data.results.map(user => ({
					name: user.name,
					username: user.login.username,
					gender: user.gender,
					nationality: user.nat,
					streetNumber: user.location.street.number,
					streetName: user.location.street.name,
					city: user.location.city,
					state: user.location.state,
					postcode: user.location.postcode,
					latitude: user.location.coordinates.latitude,
					longitude: user.location.coordinates.longitude,
					registered: user.registered.date,
					phone: user.phone,
					cell: user.cell,
					email: user.email,
					imageMedium: user.picture.medium,
					imageLarge: user.picture.large
				}));

				return users;
			},
			async setUsers() {
				const data = await this.fetchUsers();
				const usersFormatted = await this.createUsers(data);
				this.usersList = usersFormatted;
				this.$tools.setLocalStorage('users', this.usersList);
			},
			checkUsers() {
				if (this.$tools.getLocalStorage('users')) {
					this.updatedUsers();
				} else {
					this.setUsers();
				}
			},
			updatedUsers() {
				this.usersList = this.$tools.getLocalStorage('users');
			}
		}
	};
</script>

<style lang="scss">
	@import url('./assets/fonts/DauphinPlain/font.css');
	@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');
	@import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');

	[v-cloak] {
		display: none;
	}

	*,
	*:after,
	*:before {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		font-size: 62.5%;
	}

	body {
		padding: 7.2rem 0 0;
		background-color: $color-light;
		color: $color-gray;
		font-family: $font-brand-2;
		font-size: 1.6rem;
		-webkit-font-smoothing: antialiased;
	}

	a {
		text-decoration: none;
	}

	button {
		appearance: none;
		outline: none;
	}

	.page-main {
		padding: 6.4rem 0 0;

		@include media('md') {
			padding: 4rem 0 0;
		}
	}

	.page-inner {
		padding: 0 3rem;
	}

	// VUE TRANSITIONS
	// -----------------------------------------

	/* default animation if dont use a name in the tag transition/transition-group (WITHOUT NAME) */
	.v-enter {
		opacity: 0;
	}

	.v-enter-active {
		transition: opacity 1s;
	}

	.v-leave-to {
		opacity: 0;
	}

	.v-leave-active {
		transition: opacity 0.5s linear 0.5s;
	}
</style>
