<template>
	<section class="user-detail">
		<user-detail
			v-if="user"
			:user="user"
		/>
		<user-map
			v-if="user"
			:user="user"
		/>
	</section>
</template>



<script>
	import UserDetail from "../components/UserDetail.vue";
	import UserMap from "../components/UserMap.vue";

	export default {
		components: {
			UserDetail,
			UserMap
		},
		props: {
			users: Array,
			username: String
		},
		data() {
			return {};
		},
		computed: {
			user() {
				return this.users.find(user => user.username === this.username);
			}
		},
		mounted() {
			let rootUpdated = this.$route.params.username;
			let rootFind = this.users.find(user => user.username === rootUpdated);

			if (rootFind === undefined) {
				this.$router.push({ name: "users" });
			}
		}
	};
</script>
