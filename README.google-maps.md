![GitHub dependabot](https://img.shields.io/badge/dependabot-enabled-025e8c?logo=Dependabot)
![GitHub last commit](https://img.shields.io/github/last-commit/beatrizsmerino/vue-users)
![GitHub issues](https://img.shields.io/github/issues/beatrizsmerino/vue-users)
![GitHub forks](https://img.shields.io/github/forks/beatrizsmerino/vue-users)
![GitHub stars](https://img.shields.io/github/stars/beatrizsmerino/vue-users)
![GitHub watchers](https://img.shields.io/github/watchers/beatrizsmerino/vue-users)

# Vue Users

This document describes how to configure and securely use a **Google Maps API key** for the [Vue Users](./README.md) application in both development and production environments.

> For the main project overview and instructions, see the [main README](./README.md).

## 🔑 Google Maps

### Create a Google Maps `API Key`

To use Google Maps both in development and production, you need to create and configure an `API key` from Google Cloud.

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create or select a project.
3. Enable the **Maps JavaScript API**.
4. Create a new **API key**.
5. Restrict the key (Recommended):
   - **API restriction**: `Maps JavaScript API`
   - **Web restriction**:
     - `http://localhost:8080/*` (for development)
     - `https://beatrizsmerino.github.io/` (for production)

### Development Setup (env)

To use the `API key` in local development, assign it to the `VUE_APP_TOKEN_GOOGLE_MAPS` environment variable.

1. If you don't have a `.env.local` file yet, generate it with the `npm run env:create` command.
2. Open `.env.local` file and set your `API key` to `VUE_APP_TOKEN_GOOGLE_MAPS` variable.
3. Restart the development server to apply changes with the `npm run serve` command.

> The `.env.local` file is generated from a `.env.local.sample` template to provide a consistent starting point for environment variables across the team. Only `.env.local` is used at runtime and should contain your actual sensitive values, this file is gitignored to avoid exposing secrets.  
> The variable name of `VUE_APP_TOKEN_GOOGLE_MAPS` starts with `VUE_APP_` because Vue CLI only exposes environment variables with that prefix to your application code during the build process. Without it, the variable would not be available in your components.

### Production Setup (GitHub Actions, GitHub Pages)

To use the `API key` in production builds (GitHub Pages), store `VUE_APP_TOKEN_GOOGLE_MAPS` securely as a GitHub Actions secret.

1. Go in your GitHub repository to [**Settings** → **Secrets** → **Actions**](https://github.com/beatrizsmerino/vue-users/settings/secrets/actions)
2. Click **"New repository secret"**, set the name as `VUE_APP_TOKEN_GOOGLE_MAPS` and add your `API key` as the value.
3. To apply changes use the `npm run deploy` command.

> During the deployment process (`npm run deploy`), the `gh-pages-deploy.mjs` script runs the `npm run build` command, that loads the `API key` from `.env.local` in local environments. However, this file does not exist in the GitHub Actions environment, so the key must be provided as a GitHub Actions secret. The workflow passes the secret as an environment variable named `VUE_APP_TOKEN_GOOGLE_MAPS`, so that Vue can access the key and inject it into the compiled code—just like in local development.  
> This ensures that the Vue build has access to the `API key` without exposing it in the codebase, keeping the production build consistent with local development.

### Migration to `@googlemaps/js-api-loader`

This version of the application (`4.0.0`) uses the `@googlemaps/js-api-loader` package instead of the previously used `google-maps-api-loader`. The migration was necessary to address console warnings about the deprecated `Marker` API and adopt the new `AdvancedMarkerElement` system introduced in recent versions of the **Google Maps JavaScript API**. The old package has been deprecated and unmaintained since 2022, and its usage triggers compatibility warnings in the browser. This change resolves these issues and ensures the integration of newer features from the Google Maps platform.

To take advantage of these features, the new API requires a `mapId` defined in your **Google Cloud Console**, especially when using advanced `markers` or applying custom `styles`. This `mapId` enables enhanced rendering capabilities and associates your application with a specific map `styles`. Unlike the previous approach, where `styles` could be defined locally through a JSON configuration (`MAP_GOOGLE_CONFIG_STYLES`), the updated system manages all styling in the cloud. As a result, you must now create and publish your `styles` directly in the Cloud Console and link it to a `mapId`.

### Create a Google Maps `styles` and `mapId`

1. Go to [Google Cloud Console - Map Styles](https://console.cloud.google.com/google/maps-apis/studio/styles).
2. Click **"Create Style"** and choose the **"Light mode"** template. This is important because the JS API loads this theme by default.
3. You can paste a JSON style configuration from external generators like [Map Styles](https://mapstyle.withgoogle.com/) or [SnazzyMaps](https://snazzymaps.com/), or customize the map using the visual editor.
4. After saving the changes, you **must** publish the style in order to associate it with a `mapId` later. To enable the **Publish** button, you need to force a change, such as modifying a color or toggling a layer's visibility, then click **Save**, and the **Publish** button will become available.
5. Once the style is published, go to [Maps Management](https://console.cloud.google.com/google/maps-apis/studio/maps), select or create a map, and assign the newly created style to it.
6. Copy the generated `Map ID`. This ID will be used in your application for both development and production.

### Configure `mapId` in your project

Just like `API key` with the `VUE_APP_TOKEN_GOOGLE_MAPS`, the `mapId` must be made available in both development and production environments. You must define `VUE_APP_ID_GOOGLE_MAPS` in your `.env.local` file for local development and add it as a **GitHub Actions secret** so the deployment workflow can access it in production.

> This ensures consistency across environments and allows Vue to compile the app with the correct `mapId`, unlocking the full power of styled maps and advanced features like clickable custom markers.
> Remember: once a `mapId` is used, the `styles` property is no longer supported in the `Map` constructor. All style configuration must be handled in the cloud.
