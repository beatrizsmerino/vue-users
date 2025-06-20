![GitHub dependabot](https://img.shields.io/badge/dependabot-enabled-025e8c?logo=Dependabot)
![GitHub last commit](https://img.shields.io/github/last-commit/beatrizsmerino/vue-users)
![GitHub issues](https://img.shields.io/github/issues/beatrizsmerino/vue-users)
![GitHub forks](https://img.shields.io/github/forks/beatrizsmerino/vue-users)
![GitHub stars](https://img.shields.io/github/stars/beatrizsmerino/vue-users)
![GitHub watchers](https://img.shields.io/github/watchers/beatrizsmerino/vue-users)

# Vue Users

![Image of App Vue Users](./README/images/vue-users.gif)

## 🎯 Description

Vue Users is an application that obtains a list of random users from an API and print the information.

It has 3 views: the home, the user list and the user detail. There are several buttons with different actions to delete, hide and select random users. By clicking on a user you can see the complete information of the selected user, this page has a map made with Google Maps or Leaflet.

## 🏗️ Developed with

Is developed with **[Vue 2](https://vuejs.org/)** a Javascript framework, use [Vue Cli](https://cli.vuejs.org/) and has dependencies as [Vue Router](https://router.vuejs.org/), [Vue Leaflet](https://vue2-leaflet.netlify.app/) and [Google Maps](https://www.npmjs.com/package/@googlemaps/js-api-loader).

For information on how to configure the Google Maps API, see the dedicated [Google Maps setup guide](./README.google-maps.md).

## 🚀 Commands

### Install dependencies

```bash
npm install
```

### Create file for enviroment variables for development

```bash
npm run env:create
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
```

<details>
	<summary>
		<h4>
			Prettier
		</h4>
	</summary>
	<div>
		Format <code>js</code>, <code>json</code> and <code>vue</code> files with <a href="https://prettier.io/" target="_blank">Prettier</a>
	</div>
</details>

```bash
npm run prettier:fix
```

<details>
	<summary>
		<h4>
			Stylelint
		</h4>
	</summary>
	<div>
		Catches bugs, enforces conventions and sorts properties of <code>css</code>, <code>scss</code>, <code>sass</code> and <code>vue</code> files with <a href="https://stylelint.io/">Stylelint</a>
	</div>
</details>

```bash
npm run stylelint:fix
```

<details>
	<summary>
		<h4>
			Eslint
		</h4>
	</summary>
	<div>
		Find and fix bugs of <code>js</code>, <code>json</code> and <code>vue</code> files with <a href="https://eslint.org/" target="_blank">EsLint</a>
	</div>
</details>

```bash
npm run eslint:fix
```

### Publish in Github Pages

```bash
npm run deploy
```
