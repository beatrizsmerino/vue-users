![GitHub last commit](https://img.shields.io/github/last-commit/beatrizsmerino/vue-users)
![GitHub dependabot](https://img.shields.io/badge/dependabot-enabled-025e8c?logo=Dependabot)  
![GitHub issues](https://img.shields.io/github/issues/beatrizsmerino/vue-users)
![GitHub forks](https://img.shields.io/github/forks/beatrizsmerino/vue-users)
![GitHub stars](https://img.shields.io/github/stars/beatrizsmerino/vue-users)
![GitHub watchers](https://img.shields.io/github/watchers/beatrizsmerino/vue-users)

# Vue Users

![Image of App Vue Users](./README/images/vue-users.gif)

## Description

Vue Users is an application that obtains a list of random users from an API and print the information.

It has 3 views: the home, the user list and the user detail. There are several buttons with different actions to delete, hide and select random users. By clicking on a user you can see the complete information of the selected user, this page has a map made with Google Maps or Leaflet.

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

## Dependencies

### NPM PACKAGES

| NPM PACKAGE                                   | STABLE VERSION | LAST VERSION                                                                                                                                                   |
| --------------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `core-js`                                     | ^3.19.1        | [![NPM](https://nodeico.herokuapp.com/core-js.svg)](https://npmjs.com/package/core-js)                                                                         |
| `google-maps-api-loader`                      | ^1.1.1         | [![NPM](https://nodeico.herokuapp.com/google-maps-api-loader.svg)](https://npmjs.com/package/google-maps-api-loader)                                           |
| `leaflet`                                     | ^1.7.1         | [![NPM](https://nodeico.herokuapp.com/leaflet.svg)](https://npmjs.com/package/leaflet)                                                                         |
| `vue`                                         | ^2.6.14        | [![NPM](https://nodeico.herokuapp.com/vue.svg)](https://npmjs.com/package/vue)                                                                                 |
| `vue-router`                                  | ^3.5.3         | [![NPM](https://nodeico.herokuapp.com/vue-router.svg)](https://npmjs.com/package/vue-router)                                                                   |
| `vue2-leaflet`                                | ^2.7.1         | [![NPM](https://nodeico.herokuapp.com/vue2-leaflet.svg)](https://npmjs.com/package/vue2-leaflet)                                                               |
| `@babel/eslint-parser`                        | ^7.16.0        | [![NPM](https://nodeico.herokuapp.com/@babel/eslint-parser.svg)](https://npmjs.com/package/@babel/eslint-parser)                                               |
| `@vue/cli-plugin-babel`                       | ^4.5.15        | [![NPM](https://nodeico.herokuapp.com/@vue/cli-plugin-babel.svg)](https://npmjs.com/package/@vue/cli-plugin-babel)                                             |
| `@vue/cli-plugin-eslint`                      | ^4.5.15        | [![NPM](https://nodeico.herokuapp.com/@vue/cli-plugin-eslint.svg)](https://npmjs.com/package/@vue/cli-plugin-eslint)                                           |
| `@vue/cli-service`                            | ^4.5.15        | [![NPM](https://nodeico.herokuapp.com/@vue/cli-service.svg)](https://npmjs.com/package/@vue/cli-service)                                                       |
| `@vue/eslint-config-prettier`                 | ^6.0.0         | [![NPM](https://nodeico.herokuapp.com/@vue/eslint-config-prettier.svg)](https://npmjs.com/package/@vue/eslint-config-prettier)                                 |
| `babel-eslint`                                | ^10.1.0        | [![NPM](https://nodeico.herokuapp.com/babel-eslint.svg)](https://npmjs.com/package/babel-eslint)                                                               |
| `eslint`                                      | ^7.32.0        | [![NPM](https://nodeico.herokuapp.com/eslint.svg)](https://npmjs.com/package/eslint)                                                                           |
| `eslint-config-prettier`                      | ^8.3.0         | [![NPM](https://nodeico.herokuapp.com/eslint-config-prettier.svg)](https://npmjs.com/package/eslint-config-prettier)                                           |
| `eslint-loader`                               | ^4.0.2         | [![NPM](https://nodeico.herokuapp.com/eslint-loader.svg)](https://npmjs.com/package/eslint-loader)                                                             |
| `eslint-plugin-json`                          | ^3.1.0         | [![NPM](https://nodeico.herokuapp.com/eslint-plugin-json.svg)](https://npmjs.com/package/eslint-plugin-json)                                                   |
| `eslint-plugin-prettier`                      | ^4.0.0         | [![NPM](https://nodeico.herokuapp.com/eslint-plugin-prettier.svg)](https://npmjs.com/package/eslint-plugin-prettier)                                           |
| `eslint-plugin-vue`                           | ^8.0.3         | [![NPM](https://nodeico.herokuapp.com/eslint-plugin-vue.svg)](https://npmjs.com/package/eslint-plugin-vue)                                                     |
| `file-loader`                                 | ^6.2.0         | [![NPM](https://nodeico.herokuapp.com/file-loader.svg)](https://npmjs.com/package/file-loader)                                                                 |
| `prettier`                                    | ^2.4.1         | [![NPM](https://nodeico.herokuapp.com/prettier.svg)](https://npmjs.com/package/prettier)                                                                       |
| `sass`                                        | ^1.43.4        | [![NPM](https://nodeico.herokuapp.com/sass.svg)](https://npmjs.com/package/sass)                                                                               |
| `sass-loader`                                 | ^7.3.1         | [![NPM](https://nodeico.herokuapp.com/sass-loader.svg)](https://npmjs.com/package/sass-loader)                                                                 |
| `stylelint`                                   | ^13.13.1       | [![NPM](https://nodeico.herokuapp.com/stylelint.svg)](https://npmjs.com/package/stylelint)                                                                     |
| `stylelint-config-prettier`                   | ^9.0.3         | [![NPM](https://nodeico.herokuapp.com/stylelint-config-prettier.svg)](https://npmjs.com/package/stylelint-config-prettier)                                     |
| `stylelint-config-property-sort-order-smacss` | ^7.1.0         | [![NPM](https://nodeico.herokuapp.com/stylelint-config-property-sort-order-smacss.svg)](https://npmjs.com/package/stylelint-config-property-sort-order-smacss) |
| `stylelint-config-sass-guidelines`            | ^8.0.0         | [![NPM](https://nodeico.herokuapp.com/stylelint-config-sass-guidelines.svg)](https://npmjs.com/package/stylelint-config-sass-guidelines)                       |
| `stylelint-config-standard`                   | ^22.0.0        | [![NPM](https://nodeico.herokuapp.com/stylelint-config-standard.svg)](https://npmjs.com/package/stylelint-config-standard)                                     |
| `stylelint-scss`                              | ^3.21.0        | [![NPM](https://nodeico.herokuapp.com/stylelint-scss.svg)](https://npmjs.com/package/stylelint-scss)                                                           |
| `svg-symbol-sprite-loader`                    | ^4.0.0         | [![NPM](https://nodeico.herokuapp.com/svg-symbol-sprite-loader.svg)](https://npmjs.com/package/svg-symbol-sprite-loader)                                       |
| `vue-template-compiler`                       | ^2.6.14        | [![NPM](https://nodeico.herokuapp.com/vue-template-compiler.svg)](https://npmjs.com/package/vue-template-compiler)                                             |
