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
	import PageHeader from "@/components/Page/PageHeader";
	import PageTitle from "@/components/Page/PageTitle";

	export default {
		"components": {
			PageHeader,
			PageTitle,
		},
		data() {
			return {
				"usersList": [],
			};
		},
		"computed": {
			getUsers() {
				return this.usersList;
			},
		},
		"watch": {
			"$route": {
				handler(to, from) {
					const html = document.getElementsByTagName("html")[0];
					const body = document.getElementsByTagName("body")[0];

					if (typeof from !== "undefined") {
						html.classList.remove("page", `page-${from.name.toLowerCase()}`);
					}
					html.classList.add("page", `page-${to.name.toLowerCase()}`);
					body.classList.add("page-body");
				},
				"immediate": true,
			},
		},
		created() {
			this.checkUsers();
		},
		"methods": {
			async fetchUsers() {
				const response = await fetch("https://randomuser.me/api/?results=10");
				const data = await response.json();

				return data;
			},
			createUsers(data) {
				const users = data.results.map(user => ({
					"name": user.name,
					"username": user.login.username,
					"gender": user.gender,
					"nationality": user.nat,
					"streetNumber": user.location.street.number,
					"streetName": user.location.street.name,
					"city": user.location.city,
					"state": user.location.state,
					"postcode": user.location.postcode,
					"latitude": user.location.coordinates.latitude,
					"longitude": user.location.coordinates.longitude,
					"registered": user.registered.date,
					"phone": user.phone,
					"cell": user.cell,
					"email": user.email,
					"imageMedium": user.picture.medium,
					"imageLarge": user.picture.large,
				}));

				return users;
			},
			async setUsers() {
				const data = await this.fetchUsers();
				const usersFormatted = await this.createUsers(data);
				this.usersList = usersFormatted;
				this.$tools.setLocalStorage("users", this.usersList);
			},
			checkUsers() {
				if (this.$tools.getLocalStorage("users")) {
					this.updatedUsers();
				} else {
					this.setUsers();
				}
			},
			updatedUsers() {
				this.usersList = this.$tools.getLocalStorage("users");
			},
		},
	};
</script>

<style lang="scss">
	// PARTIALS SASS
	// ===============================================================================

	// BASE
	// ----------------------------------------------------------------------
	@use "@/assets/scss/base/base-reset";
	@use "@/assets/scss/base/base-global";
	@use "@/assets/scss/base/base-fonts";

	// COMPONENTS
	// ----------------------------------------------------------------------
	@use "@/assets/scss/components/components-page";

	// ANIMATIONS
	// ----------------------------------------------------------------------
	@use "@/assets/scss/animations/animations-vue-transitions";
</style>
