![GitHub issues](https://img.shields.io/github/issues/beatrizsmerino/vue-users)
![GitHub forks](https://img.shields.io/github/forks/beatrizsmerino/vue-users)
![GitHub stars](https://img.shields.io/github/stars/beatrizsmerino/vue-users)
![GitHub watchers](https://img.shields.io/github/watchers/beatrizsmerino/vue-users)
![GitHub last commit](https://img.shields.io/github/last-commit/beatrizsmerino/vue-users)

# Vue Users

### Vue Users is an application that obtains a list of random users from an API and print the information.

It has 3 views: the home, the user list and the user detail. There are several buttons with different actions to delete, hide and select random users. By clicking on a user you can see the complete information of the selected user, this page has a map made with Google Maps or Leaflet.

![Image of App Vue Users](./README/images/vue-users.gif)

## Development interface

![Vue logo](./README/images/vue-js-2.jpg)

Is developed with **[vue.js](https://vuejs.org/)** 2.6.10 a Javascript framework. This project use [Vue Cli](https://cli.vuejs.org/) and has dependencies as vue router and google maps.

## Content

**Structure of folders**

-   assets
-   constants
    -   [colorPalette](./src/constants/colorPalette.js)
    -   [mapSettings](./src/constants/mapSettings.js)
-   views
    -   [Home](./src/views/Home.vue)
    -   [Users](./src/views/Users.vue)
    -   [User](./src/views/User.vue)
-   components
    -   Page
        -   [PageHeader](./src/components/Page/PageHeader.vue)
        -   [PageNav](./src/components/Page/PageNav.vue)
        -   [PageTitle](./src/components/Page/PageTitle.vue)
    -   UI
        -   [Logo](./src/components/UI/Logo.vue)
        -   [Icon](./src/components/UI/Icon.vue)
        -   [Button](./src/components/UI/Button.vue)
        -   [SwitchTheme](./src/components/UI/SwitchTheme.vue)
        -   [Error](./src/components/UI/Error.vue)
    -   User
        -   [UserList](./src/components/User/UserList.vue)
        -   [UserPreview](./src/components/User/UserPreview.vue)
        -   [UserButtons](./src/components/User/UserButtons.vue)
        -   [UserDetail](./src/components/User/UserDetail.vue)
        -   [UserMap](./src/components/User/UserMap.vue)
    -   GoogleMap
        -   [GoogleMap](./src/components/GoogleMap/GoogleMap.vue)
        -   [GoogleMapLoader](./src/components/GoogleMap/GoogleMapLoader.vue)
        -   [GoogleMapMarker](./src/components/GoogleMap/GoogleMapMarker.vue)
    -   LeafletMap
        -   [LeafletMap](./src/components/LeafletMap/LeafletMap.vue)
        -   [LeafletMapLoader](./src/components/LeafletMap/LeafletMapLoader.vue)

## Project setup

```bash
npm install
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

#### Format js, json and vue files with [Prettier](https://prettier.io/)

```bash
npm run prettier:fix
```

#### Catches bugs, enforces conventions and sorts properties of css, scss, sass and vue files with [Stylelint](https://stylelint.io/)

```bash
npm run stylelint:fix
```

#### Find and fix bugs of js, json and vue files with [EsLint](https://eslint.org/)

```bash
npm run eslint:fix
```

### Publish in Github Pages

```bash
npm run deploy
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Dependencies

### NPM PACKAGES

| NPM PACKAGE              | STABLE VERSION | LAST VERSION                                                                                                         |
| ------------------------ | -------------- | -------------------------------------------------------------------------------------------------------------------- |
| `core-js`                | ^3.10.1        | [![NPM](https://nodeico.herokuapp.com/core-js.svg)](https://npmjs.com/package/core-js)                               |
| `google-maps-api-loader` | ^1.1.1         | [![NPM](https://nodeico.herokuapp.com/google-maps-api-loader.svg)](https://npmjs.com/package/google-maps-api-loader) |
| `leaflet`                | ^1.7.1         | [![NPM](https://nodeico.herokuapp.com/leaflet.svg)](https://npmjs.com/package/leaflet)                               |
| `vue`                    | ^2.6.12        | [![NPM](https://nodeico.herokuapp.com/vue.svg)](https://npmjs.com/package/vue)                                       |
| `vue-router`             | ^3.5.1         | [![NPM](https://nodeico.herokuapp.com/vue-router.svg)](https://npmjs.com/package/vue-router)                         |
| `vue2-leaflet`           | ^2.7.0         | [![NPM](https://nodeico.herokuapp.com/vue2-leaflet.svg)](https://npmjs.com/package/vue2-leaflet)                     |
| `@vue/cli-plugin-babel`  | ^4.5.12        | [![NPM](https://nodeico.herokuapp.com/@vue/cli-plugin-babel.svg)](https://npmjs.com/package/@vue/cli-plugin-babel)   |
| `@vue/cli-plugin-eslint` | ^4.5.12        | [![NPM](https://nodeico.herokuapp.com/@vue/cli-plugin-eslint.svg)](https://npmjs.com/package/@vue/cli-plugin-eslint) |
| `@vue/cli-service`       | ^4.5.12        | [![NPM](https://nodeico.herokuapp.com/@vue/cli-service.svg)](https://npmjs.com/package/@vue/cli-service)             |
| `babel-eslint`           | ^10.1.0        | [![NPM](https://nodeico.herokuapp.com/babel-eslint.svg)](https://npmjs.com/package/babel-eslint)                     |
| `eslint`                 | ^6.8.0         | [![NPM](https://nodeico.herokuapp.com/eslint.svg)](https://npmjs.com/package/eslint)                                 |
| `eslint-plugin-vue`      | ^7.8.0         | [![NPM](https://nodeico.herokuapp.com/eslint-plugin-vue.svg)](https://npmjs.com/package/eslint-plugin-vue)           |
| `node-sass`              | ^4.14.1        | [![NPM](https://nodeico.herokuapp.com/node-sass.svg)](https://npmjs.com/package/node-sass)                           |
| `sass-loader`            | ^7.3.1         | [![NPM](https://nodeico.herokuapp.com/sass-loader.svg)](https://npmjs.com/package/sass-loader)                       |
| `vue-template-compiler`  | ^2.6.12        | [![NPM](https://nodeico.herokuapp.com/vue-template-compiler.svg)](https://npmjs.com/package/vue-template-compiler)   |
