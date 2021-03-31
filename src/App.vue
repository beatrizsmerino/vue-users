<template>
	<div
		id="app"
		class="page-app"
		v-cloak
	>
		<page-header/>

		<main class="page-main">
			<page-title/>

			<router-view :users="users" />
		</main>
	</div>
</template>



<script>
	import PageHeader from './components/PageHeader.vue'
	import PageTitle from './components/PageTitle.vue'

	export default {
		components: {
			PageHeader,
			PageTitle,
		},
		data() {
			return {
				users: []
			}
		},
		created() {
			fetch('https://randomuser.me/api/?results=10')
				.then(res => res.json())
				.then(data => {
					this.users = data.results.map(user => ({
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
						imageLarge: user.picture.large,
					}))
				})
		},
		watch: {
			$route: {
				handler(to, from) {
					const html = document.getElementsByTagName('html')[0];
					const body = document.getElementsByTagName('body')[0];

					if (from !== undefined) {
						html.classList.remove('page', 'page-' + from.name.toLowerCase());
					}
					html.classList.add('page', 'page-' + to.name.toLowerCase());
					body.classList.add('page-body');
				},
				immediate: true,
			}
		},
	};
</script>



<style lang="scss">
	@import url("./assets/fonts/DauphinPlain/font.css");
	@import url("https://fonts.googleapis.com/css?family=Oxygen:400,700,300");
	@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");

	:root {
		--color-brand-1: #42b883;
		--color-brand-2: #35495e;
		--color-white: #fff;
		--color-light: #fafafa;
		--color-gray-dark: #3f3f3f;
		--color-black: #000;
	}

	[v-cloak] {
		display: none;
	}

	*,
	*:after,
	*:before {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html{
		font-size: 62.5%;
		
	}

	body {
		padding: 7.2rem 0 0;
		-webkit-font-smoothing: antialiased;
		font-family: "Oxygen", Helvetica, sans-serif;
		font-size: 1.6rem;
		color: var(--color-gray-dark);
		background-color: var(--color-light);
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
	}

	/* 
	-----------------------------------------
	VUE TRANSITIONS
	-----------------------------------------
	*/

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

	/* 
	-----------------------------------------
	PAGE HOME
	-----------------------------------------
	*/
	.page-home {
		height: 100%;

		.page-body {
			height: 100%;
		}

		.page-app {
			display: flex;
			height: 100%;
		}

		.page-main {
			padding-top: 0;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			flex: 1;
		}
	}
</style>
