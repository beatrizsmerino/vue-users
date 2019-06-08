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
	}
};
</script>



<style lang="scss">
</style>
