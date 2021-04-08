<template>
	<div class="page-main__inner">
		<section class="page-section">
			<div class="inner">
				<user-detail
					v-if="user"
					:user="user"
				/>
			</div>
			<user-map
				v-if="user"
				:user="user"
			/>
		</section>
	</div>
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
			usersFetch: Array,
			username: String
		},
		data() {
			return {
				usersList: this.usersFetch
			};
		},
		computed: {
			user() {
				return this.usersList.find(user => user.username === this.username);
			}
		},
		mounted() {
			let rootUpdated = this.$route.params.username;
			let rootFind = this.usersList.find(user => user.username === rootUpdated);

			if (rootFind === undefined) {
				this.$router.push({ name: "users" });
			}
		}
	};
</script>




<style lang="scss" scoped>
</style>