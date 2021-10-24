const path = require('path');
const SVGSymbolSprite = require('svg-symbol-sprite-loader');

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/vue-users/' : '/',
	lintOnSave: false,
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/assets/scss/styles.scss";`
			}
		}
	},
	chainWebpack: config => {
		config.
			plugin('svg-symbol-sprite-loader').
			after('html').
			use(SVGSymbolSprite.Plugin).
			end();

		const svgRule = config.module.rule('svg');

		svgRule.uses.clear();

		svgRule.
			test(/\/src\/assets\/images\/.*\.svg$/u).
			use('svg-symbol-sprite-loader').
			loader('svg-symbol-sprite-loader').
			options({
				symbolId: filePath => `icon-${path.basename(filePath, '.svg')}`
			});

		config.module.
			rule('svg-file').
			test(/\/src\/assets\/fonts\/.*\.svg$/u).
			use('file-loader').
			loader('file-loader').
			end();
	}
};
