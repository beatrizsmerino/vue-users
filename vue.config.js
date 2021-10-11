module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/vue-users/' : '/',
    lintOnSave: true,
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/assets/scss/styles.scss";`
			}
		}
	}
}