<template>
	<div class="users-buttons">
		<button @click="setShowEmit" class="users-buttons__item">HIDE USER INFO</button>
		<button @click="setRandomEmit" class="users-buttons__item">RANDOM USERS</button>
	</div>
</template>


<script>
export default {
	methods: {
		setShowEmit() {
			this.$emit("show");
		},
		setRandomEmit() {
			this.$emit("random");
		}
	}
};
</script>


<style lang="scss" scoped>
.users-buttons {
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

		&:hover {
			background-color: var(--color-brand-2);
		}
	}
}
</style>

