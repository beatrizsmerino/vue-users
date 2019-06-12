<template>
	<div class="user-detail">
		<user-detail v-if="user" :user="user"></user-detail>
		<user-map v-if="user" :user="user"></user-map>
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



<style lang="scss" scoped>
</style>
