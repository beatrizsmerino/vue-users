const path = require('path');
const SVGSymbolSprite = require('svg-symbol-sprite-loader');
const StyleLintPlugin = require('stylelint-webpack-plugin');

// Define the resolve method to obtain the absolute path of the file
const resolve = dir => path.join(__dirname, dir);

module.exports = {

	// The base URL your application bundle will be deployed at
	publicPath: process.env.NODE_ENV === 'production' ? '/vue-users/' : '/',

	// Add configuration for use Dart sass/scss and compile files of 'assets' folder
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/assets/scss/styles.scss";`
			}
		}
	},

	/*
	 * Emit 'eslint' errors and warnings in the console
	 * https://cli.vuejs.org/config/#lintonsave
	 */
	lintOnSave: true,

	// Add configuration for autofix stylelint errors
	configureWebpack: {
		plugins: [
			new StyleLintPlugin({
				fix: true,
				files: ['src/**/*.{vue,scss}']
			})
		]
	},

	/*
	 * A function that recives a ChainableConfig instance based on webpack chain
	 * Allows more fine-grained modifications to the internal webpack configuration
	 */
	chainWebpack: config => {
		// Add configuration for autofix eslint errors
		config.module.rule('eslint').use('eslint-loader').
			options({
				fix: true
			});

		// Create and insert sprite before the html body
		config.
			plugin('svg-symbol-sprite-loader').
			after('html').
			use(SVGSymbolSprite.Plugin).
			end();

		// Configure svg default rultes to exclude svg file proccessing in icons directory
		config.module.
			rule('svg').
			exclude.add(resolve('src/assets/images/icons/svg')).
			end();

		// New icons rule, set svg sprite loader to process svg files in the 'src/assets/images/icons/svg' folder
		config.module.
			rule('svg-sprite').
			uses.clear().
			end().
			test(/\.svg$/u).
			include.add(resolve('src/assets/images/icons/svg')).
			end().
			use('svg-symbol-sprite-loader').
			loader('svg-symbol-sprite-loader').
			options({
				symbolId: filePath => `icon-${path.basename(filePath, '.svg')}`
			}).
			end();
	}
};
