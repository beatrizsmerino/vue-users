<template>
	<div class="users">
		<div class="buttons-top">
			<button @click="setShow" class="buttons-top__item">
				HIDE USER INFO
			</button>
			<button @click="setRandom" class="buttons-top__item">
				RANDOM USERS
			</button>
		</div>
		<users-list :users="users" :show="show" :isSmall="isSmall" @remove="userRemove">
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
		return {
			show: true,
			isSmall: false
		};
	},
	methods: {
		setShow() {
			this.show = !this.show;
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
.buttons-top {
	width: 100%;
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 999;
	background-color: var(--color-silver);

	&__item {
		padding: 1rem;
		color: #fff;
		border: none;
		background-color: var(--color-brand-1);
		cursor: pointer;

		&:not(:last-child) {
			margin-right: 1rem;
		}

		&:hover{
			background-color: var(--color-brand-2);
		}
	}
}
</style>
