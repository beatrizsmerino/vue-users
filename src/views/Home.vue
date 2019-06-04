<template>
	<div class="home">
		<users-list :users="users" @remove="userRemove">
			<template v-slot:title="{ user }">
				<span v-if="user">{{user.name.last}} {{user.name.first}}</span>
			</template>
			<template v-slot:subtitle="{ user }">
				<span v-if="user">RUBEN</span>
			</template>
		</users-list>
	</div>
</template>



<script>
import UsersList from "../components/UsersList.vue";

export default {
	components: {
		UsersList
	},
	props: ["users"],
	data() {
		return {};
	},
	methods: {
		userRemove(userToRemove) {
			this.users.splice(userToRemove, 1);
		}
	}
};
</script>