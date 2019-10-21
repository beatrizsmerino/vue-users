<template>
	<main class="users">
		<users-buttons @random="setRandom" @show="setShow"></users-buttons>
		<users-list :users="users" :isHidden="isHidden" :isSmall="isSmall" @remove="userRemove" @scroll="setScrollToTop">
			<template v-slot:title="{ user }">
				<span v-if="user">{{user.name.last}} {{user.name.first}}</span>
			</template>
			<template v-slot:subtitle="{ user }">
				<span v-if="user">RUBEN</span>
			</template>
		</users-list>
	</main>
</template>



<script>
import UsersList from "../components/UsersList.vue";
import UsersButtons from "../components/UsersButtons.vue";

export default {
	components: {
		UsersList,
		UsersButtons
	},
	props: ["users"],
	data() {
		return {
			isHidden: false,
			isSmall: false
		};
	},
	methods: {
		setScrollToTop() {
			window.scrollTo(0, 0);
		},
		setShow() {
			this.isHidden = !this.isHidden;
			this.isSmall = !this.isSmall;
		},
		setRandom() {
			this.users.sort(() => Math.random() - 0.5);
		},
		userRemove(userToRemove) {
			this.users.splice(this.users.indexOf(userToRemove), 1);
		}
	}
};
</script>




<style lang="scss" scoped>
main {
	padding-bottom: 6rem;
}
</style>
