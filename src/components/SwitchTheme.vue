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
		>
		<span class="switch-theme__bullet switch-theme__bullet--rounded"></span>
	</label>
</template>

<script>
	export default {
		name: 'SwitchTheme',
		methods: {
			changeTheme(event) {
				const field = event.target;

				if (field.checked) {
					this.setLocalStorage("theme", "dark");
				} else {
					this.setLocalStorage("theme", "light");
				}

				this.cssTheme();
			},
			cssTheme() {
				const page = document.querySelector("html");
				const themeName = this.getLocalStorage("theme");

				page.classList.remove("is-theme-light");
				page.classList.remove("is-theme-dark");
				page.classList.add(`is-theme-${themeName}`);
			},
			checkTheme() {
				const switchTheme = document.querySelector("#switchTheme");

				if (this.getLocalStorage("theme")) {
					this.cssTheme();

					if (this.getLocalStorage("theme") == "dark") {
						switchTheme.checked = true;
					} else {
						switchTheme.checked = false;
					}
				} else {
					this.setLocalStorage("theme", "light");
				}
			},
			setLocalStorage(name, data) {
				localStorage.setItem(name, data);
			},
			getLocalStorage(name) {
				return localStorage.getItem(name);
			}
		},
		mounted() {
			this.checkTheme();
		}
	}
</script>

<style lang="scss" scoped>
	.switch-theme {
		width: 6rem;
		height: 3rem;
		display: inline-block;
		position: relative;

		&__field {
			width: 2rem;
			height: 2rem;
			position: absolute;
			top: 50%;
			left: 0.5rem;
			transform: translate(0, -50%);
			opacity: 0;

			&:checked + .switch-theme__bullet:before {
				left: initial;
				right: 0.5rem;
				background-color: $color-brand-2;
			}
		}

		&__bullet {
			width: 100%;
			height: 100%;
			display: inline-block;
			position: absolute;
			top: 0;
			left: 0;
			background-color: $color-brand-1;
			box-shadow: inset 0 0 1rem rgba($color-black, 0.5);
			transition: 0.4s;
			cursor: pointer;

			&:before {
				content: "";
				width: 2rem;
				height: 2rem;
				display: inline-block;
				position: absolute;
				left: 0.5rem;
				top: 50%;
				transform: translate(0, -50%);
				background-color: $color-white;
				transition: 0.4s;
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
