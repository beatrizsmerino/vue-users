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

### Google Maps

#### Create a Google Maps API Key

To use Google Maps both in development and production, you need to create and configure an API key from Google Cloud.

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create or select a project.
3. Enable the **Maps JavaScript API**.
4. Create a new **API key**.
5. Restrict the key (Recommended):
   - **API restriction**: `Maps JavaScript API`
   - **Web restriction**:
     - `http://localhost:8080/*` (for development)
     - `https://beatrizsmerino.github.io/` (for production)

#### Development Setup (env)

To use the API key in local development, assign it to the `VUE_APP_TOKEN_GOOGLE_MAPS` environment variable.

1. If you don’t have a `.env.local` file yet, generate it with the `npm run env:create` command.
2. Open `.env.local` file and set your API key to `VUE_APP_TOKEN_GOOGLE_MAPS` variable.
3. Restart the development server to apply changes with the `npm run serve` command.

> The `.env.local` file is generated from a `.env.local.sample` template to provide a consistent starting point for environment variables across the team. Only `.env.local` is used at runtime and should contain your actual sensitive values, this file is gitignored to avoid exposing secrets.  
> The variable name of `VUE_APP_TOKEN_GOOGLE_MAPS` starts with `VUE_APP_` because Vue CLI only exposes environment variables with that prefix to your application code during the build process. Without it, the variable would not be available in your components.

#### Production Setup (GitHub Actions, GitHub Pages)

To use the API key in production builds (GitHub Pages), store `VUE_APP_TOKEN_GOOGLE_MAPS` securely as a GitHub Actions secret.

1. Go in your GitHub repository to [**Settings** → **Secrets** → **Actions**](https://github.com/beatrizsmerino/vue-users/settings/secrets/actions)
2. Click **"New repository secret"**, set the name as `VUE_APP_TOKEN_GOOGLE_MAPS` and add your API key as the value.
3. To apply changes use the `npm run deploy` command.

> During the deployment process (`npm run deploy`), the `gh-pages-deploy.mjs` script runs the `npm run build` command, that loads the API key from `.env.local` in local environments. However, this file does not exist in the GitHub Actions environment, so the key must be provided as a GitHub Actions secret. The workflow passes the secret as an environment variable named `VUE_APP_TOKEN_GOOGLE_MAPS`, so that Vue can access the key and inject it into the compiled code—just like in local development.  
> This ensures that the Vue build has access to the API key without exposing it in the codebase, keeping the production build consistent with local development.

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
