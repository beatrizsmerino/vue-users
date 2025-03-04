<template>
	<div
		v-cloak
		id="app"
		class="page-app"
	>
		<PageHeader />

		<main class="page-main">
			<PageTitle />

			<router-view
				:users-fetch="getUsers"
				:users-error="usersError"
				@update-users="updateUsers"
			/>
		</main>

		<UILoader v-if="isLoading" />
	</div>
</template>

<script>
	import PageHeader from "@/components/Page/PageHeader";
	import PageTitle from "@/components/Page/PageTitle";
	import UILoader from "@/components/UI/UILoader";

	export default {
		"components": {
			PageHeader,
			PageTitle,
			UILoader,
		},
		data() {
			return {
				"isLoading": false,
				"usersList": [],
				"usersError": null,
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
			this.onCreatedGetUsers();
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
				this.isLoading = true;
				const data = await this.fetchUsers();
				const usersFormatted = await this.createUsers(data);
				this.usersList = usersFormatted;
				this.handleUsersError();
				this.isLoading = false;
			},
			onCreatedGetUsers() {
				if (this.$tools.getLocalStorage("users")?.length > 0) {
					this.recoverUsers();
				} else {
					this.setUsers();
				}
			},
			handleUsersError() {
				if (this.usersList?.length === 0) {
					this.usersError = {
						"message": "Users not found",
						"solution": "Click on the button 'GET USERS'",
					};
				} else {
					this.usersError = null;
				}
			},
			recoverUsers() {
				this.usersList = this.$tools.getLocalStorage("users");
				this.handleUsersError();
			},
			updateUsers(newUsers) {
				this.usersList = newUsers;
				this.$tools.setLocalStorage("users", this.usersList);
				this.handleUsersError();
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
	@use "@/assets/scss/animations/animations-loader-dots";
</style>
