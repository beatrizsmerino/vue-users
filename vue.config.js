module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/vue-users/' : '/',
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/assets/scss/styles.scss";`
			}
		}
	}
}