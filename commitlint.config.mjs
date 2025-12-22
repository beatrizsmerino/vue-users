export default {
	"extends": [
		"@commitlint/config-conventional",
	],
	"rules": {
		"header-max-length": [
			2,
			"always",
			150,
		],
		"body-max-line-length": [
			2,
			"always",
			1000,
		],
		"footer-leading-blank": [
			0,
			"always",
		],
		"footer-max-line-length": [
			2,
			"always",
			1000,
		],
	},
};
