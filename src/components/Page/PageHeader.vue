<template>
	<header class="page-header">
		<div class="page-header__item">
			<UILogo />
		</div>
		<div class="page-header__item">
			<PageNav />
			<UISwitchTheme />
		</div>
	</header>
</template>

<script>
	import UILogo from '@/components/UI/UILogo';
	import PageNav from '@/components/Page/PageNav';
	import UISwitchTheme from '@/components/UI/UISwitchTheme';

	export default {
		name: 'PageHeader',
		components: {
			UILogo,
			PageNav,
			UISwitchTheme
		}
	};
</script>

<style lang="scss" scoped>
	.page-header {
		display: flex;
		position: fixed;
		z-index: 999999;
		top: 0;
		left: 0;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 7.2rem;
		padding: 0 4.8rem;
		background-color: $color-brand-1;
		box-shadow: 0 0 1rem 0.5rem rgba($color-black, 0.3);

		@include media("sm") {
			height: 6rem;
			padding: 0 2rem;
		}

		&__item {
			display: flex;
			align-items: center;

			> * {
				&:not(:last-child) {
					margin-right: 3rem;
				}
			}

			&:last-child {
				@include media("sm") {
					flex-direction: row-reverse;
				}

				> * {
					&:not(:last-child) {
						@include media("sm") {
							margin-right: 0;
							margin-left: 3rem;
						}
					}
				}
			}
		}
	}
</style>
