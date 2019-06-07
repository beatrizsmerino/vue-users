<template>
	<div id="app" v-cloak>
		<page-header :users="users" @setShow="setShow" @setRandom="setRandom">
		</page-header>

		<page-title :show="show">
		</page-title>

		<router-view :users="users"/>
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
				users: [],
				show: true
			}
		},
		methods: {
			setShow(){ 
				this.show = !this.show;
			},
			setRandom() {
				this.users.sort(() => Math.random() - 0.5)
			}
		},
		created() {
			fetch('https://randomuser.me/api/?results=10')
				.then(res => res.json())
				.then(data => {
					this.users = data.results.map(user => ({
						gender: user.gender,
						name: user.name,
						id: user.login.uuid,
						username: user.login.username,
						street: user.location.street,
						city: user.location.city,
						state: user.location.state,
						postcode: user.location.postcode,
						latitude: user.location.coordinates.latitude,
						longitude: user.location.coordinates.longitude,
						email: user.email,
						registered: user.registered.date,
						phone: user.phone,
						cell: user.cell,
						dni: user.id.value,
						image: user.picture.medium,
						nationality: user.nat
					}))
				})
		},
	};
</script>



<style lang="scss">
	@import url("https://fonts.googleapis.com/css?family=Oxygen:400,700,300");
	@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");

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

	body {
		background: #fafafa;
		color: #3f3f3f;
		padding: 1em;
		font-size: 62.5%;
		-webkit-font-smoothing: antialiased;
		font-family: "Oxygen", Helvetica, sans-serif;
	}

	/* 
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
</style>
