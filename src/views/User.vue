<template>
	<div class="user-detail">
		<user-detail v-if="user" :user="user"></user-detail>
	</div>
</template>



<script>
import UserDetail from "../components/UserDetail.vue";

export default {
	components: {
		UserDetail
	},
	props: ["users", "username"],
	data(){
		return{
			
		}
	},
	computed: {
		user() {
			return this.users.find(user => user.username === this.username);
		},
	},
	mounted() {
		let rootUpdated = this.$route.params.username;
		let rootFind = this.users.find(user => user.username === rootUpdated);

		if(rootFind === undefined){
			this.$router.push({name: 'users'});
		}
	}
};
</script>



<style lang="scss" scoped>
</style>
