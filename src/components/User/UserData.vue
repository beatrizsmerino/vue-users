<template>
	<div class="user-data">
		<h4 class="user-data__key">
			<span class="user-data__icon">
				<i :class="userDataIcon"></i>
			</span>
			<strong>{{ userDataKey }}:</strong>
		</h4>
		<p class="user-data__value">
			{{ userDataValue }}
		</p>
	</div>
</template>

<script>
	export default {
		"name": "UserData",
		"props": {
			"userDataIcon": {
				"type": String,
				"required": true,
			},
			"userDataKey": {
				"type": String,
				"required": true,
			},
			"userDataValue": {
				"type": String,
				"required": true,
			},
		},
		data() {
			return {};
		},
	};
</script>

<style lang="scss" scoped>
	.user-data {
		display: flex;
		flex-direction: column;

		&__icon {
			margin-right: 0.5rem;
			color: $color-brand-1;
		}

		&__key {
			margin-bottom: 0.5rem;
			color: $color-brand-1;
			font-size: 1.8rem;
		}

		&__value {
			color: $color-light;
			font-size: 1.6rem;
			word-break: break-all;
		}
	}
</style>
