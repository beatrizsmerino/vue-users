<template>
	<label
		for="switchTheme"
		class="switch-theme"
		@change="changeTheme"
	>
		<input
			id="switchTheme"
			class="switch-theme__field"
			type="checkbox"
		/>
		<span class="switch-theme__bullet switch-theme__bullet--rounded"></span>
	</label>
</template>

<script>
	export default {
		"name": "UISwitchTheme",
		mounted() {
			this.checkTheme();
		},
		"methods": {
			changeTheme(event) {
				const field = event.target;

				if (field.checked) {
					this.$tools.setLocalStorage("theme", "dark");
				} else {
					this.$tools.setLocalStorage("theme", "light");
				}

				this.cssTheme();
			},
			cssTheme() {
				const page = document.querySelector("html");
				const themeName = this.$tools.getLocalStorage("theme");

				page.classList.remove("is-theme-light");
				page.classList.remove("is-theme-dark");
				page.classList.add(`is-theme-${themeName}`);
			},
			checkTheme() {
				const switchTheme = document.querySelector("#switchTheme");

				if (this.$tools.getLocalStorage("theme")) {
					this.cssTheme();

					if (this.$tools.getLocalStorage("theme") == "dark") {
						switchTheme.checked = true;
					} else {
						switchTheme.checked = false;
					}
				} else {
					this.$tools.setLocalStorage("theme", "light");
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.switch-theme {
		display: inline-block;
		position: relative;
		width: 6rem;
		height: 3rem;

		&__field {
			position: absolute;
			top: 50%;
			left: 0.5rem;
			width: 2rem;
			height: 2rem;
			transform: translate(0, -50%);
			opacity: 0;

			&:checked + .switch-theme__bullet:before {
				right: 0.5rem;
				left: initial;
				background-color: $color-brand-2;
			}
		}

		&__bullet {
			display: inline-block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			transition: 0.4s;
			background-color: $color-brand-1;
			box-shadow: inset 0 0 1rem rgba($color-black, 0.5);
			cursor: pointer;

			&:before {
				content: "";
				display: inline-block;
				position: absolute;
				top: 50%;
				left: 0.5rem;
				width: 2rem;
				height: 2rem;
				transform: translate(0, -50%);
				transition: 0.4s;
				background-color: $color-white;
			}

			&--rounded {
				border-radius: 2rem;

				&:before {
					border-radius: 50%;
				}
			}
		}

		&:hover {
			.switch-theme {
				&__field {
					&:checked + .switch-theme__bullet:before {
						background-color: $color-brand-2;
					}
				}

				&__bullet {
					&:before {
						background-color: $color-white;
					}
				}
			}
		}
	}
</style>

<style lang="scss">
	.page {
		&.is-theme-dark {
			.page-body {
				background-color: $color-brand-2--dark;
				color: $color-white;
			}

			&.page-home {
				.subtitle,
				.description {
					color: $color-white;
				}

				.link {
					color: $color-white;

					&:hover {
						color: $color-brand-1;
					}
				}
			}

			&.page-users {
				.user-preview {
					background-color: $color-brand-2;
					box-shadow: 0 0 1rem rgba($color-black, 0.5);
				}
			}

			&.page-user {
				.user-detail {
					background-color: $color-brand-2;
					box-shadow: 0 0 1rem rgba($color-black, 0.5);
				}
			}
		}
	}
</style>
