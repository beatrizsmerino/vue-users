![shieldsIO](https://img.shields.io/github/issues/beatrizsmerino/vue-users)
![shieldsIO](https://img.shields.io/github/forks/beatrizsmerino/vue-users)
![shieldsIO](https://img.shields.io/github/stars/beatrizsmerino/vue-users)

# Vue Users

### Vue Users is an application that obtains a list of random users from an API and print the information.

It has 3 views: the home, the user list and the user detail. There are several buttons with different actions to delete, hide and select random users. By clicking on a user you can see the complete information of the selected user, this page has a map made with Google Maps or Leaflet.


![Image of App Vue Users](https://github.com/beatrizsmerino/vue-users/blob/master/README/images/vue-users-1.png)

![Image of App Vue Users](https://github.com/beatrizsmerino/vue-users/blob/master/README/images/vue-users-2.png)

![Image of App Vue Users](https://github.com/beatrizsmerino/vue-users/blob/master/README/images/vue-users-3.png)

![Image of App Vue Users](https://github.com/beatrizsmerino/vue-users/blob/master/README/images/vue-users-4.png)

## Development interface

![Vue logo](https://github.com/beatrizsmerino/vue-users/blob/master/README/images/vue-js-2.jpg)

Is developed with **[vue.js](https://vuejs.org/)** 2.6.10 a Javascript framework. This project use [Vue Cli](https://cli.vuejs.org/) and has dependencies as vue router and google maps.

## Content

**Structure of folders**

-   assets
-   constants
    -   [colorPalette](https://github.com/beatrizsmerino/vue-users/blob/master/src/constants/colorPalette.js)
    -   [mapSettings](https://github.com/beatrizsmerino/vue-users/blob/master/src/constants/mapSettings.js)
-   views
    -   [Home](https://github.com/beatrizsmerino/vue-users/blob/master/src/views/Home.vue)
    -   [Users](https://github.com/beatrizsmerino/vue-users/blob/master/src/views/Users.vue)
    -   [User](https://github.com/beatrizsmerino/vue-users/blob/master/src/views/User.vue)
-   components
    -   [PageHeader](https://github.com/beatrizsmerino/vue-users/blob/master/src/components/PageHeader.vue)
    -   [PageTitle](https://github.com/beatrizsmerino/vue-users/blob/master/src/components/PageTitle.vue)
    -   [UsersList](https://github.com/beatrizsmerino/vue-users/blob/master/src/components/UsersList.vue)
    -   [UsersButtons](https://github.com/beatrizsmerino/vue-users/blob/master/src/components/UsersButtons.vue)
    -   [UserDetail](https://github.com/beatrizsmerino/vue-users/blob/master/src/components/UserDetail.vue)
    -   [UserMap](https://github.com/beatrizsmerino/vue-users/blob/master/src/components/UserMap.vue)
    -   [GoogleMap](https://github.com/beatrizsmerino/vue-users/blob/master/src/components/GoogleMap.vue)
    -   [GoogleMapLoader](https://github.com/beatrizsmerino/vue-users/blob/master/src/components/GoogleMapLoader.vue)
    -   [GoogleMapMarker](https://github.com/beatrizsmerino/vue-users/blob/master/src/components/GoogleMapMarker.vue)
    -   [LeafletMap](https://github.com/beatrizsmerino/vue-users/blob/master/src/components/LeafletMap.vue)
    -   [LeafletMapLoader](https://github.com/beatrizsmerino/vue-users/blob/master/src/components/LeafletMapLoader.vue)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Publish in Github Pages

```
npm run deploy
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Dependencies

### NPM PACKAGES

| NPM PACKAGE              | STABLE VERSION | LAST VERSION                                                                                                         |
| ------------------------ | -------------- | -------------------------------------------------------------------------------------------------------------------- |
| `core-js`                | ^3.9.1         | [![NPM](https://nodeico.herokuapp.com/core-js.svg)](https://npmjs.com/package/core-js)                               |
| `google-maps-api-loader` | ^1.1.1         | [![NPM](https://nodeico.herokuapp.com/google-maps-api-loader.svg)](https://npmjs.com/package/google-maps-api-loader) |
| `leaflet`                | ^1.7.1         | [![NPM](https://nodeico.herokuapp.com/leaflet.svg)](https://npmjs.com/package/leaflet)                               |
| `vue`                    | ^2.6.12        | [![NPM](https://nodeico.herokuapp.com/vue.svg)](https://npmjs.com/package/vue)                                       |
| `vue-router`             | ^3.5.1         | [![NPM](https://nodeico.herokuapp.com/vue-router.svg)](https://npmjs.com/package/vue-router)                         |
| `vue2-leaflet`           | ^2.7.0         | [![NPM](https://nodeico.herokuapp.com/vue2-leaflet.svg)](https://npmjs.com/package/vue2-leaflet)                     |
| `@vue/cli-plugin-babel`  | ^4.5.12        | [![NPM](https://nodeico.herokuapp.com/@vue/cli-plugin-babel.svg)](https://npmjs.com/package/@vue/cli-plugin-babel)   |
| `@vue/cli-plugin-eslint` | ^4.5.12        | [![NPM](https://nodeico.herokuapp.com/@vue/cli-plugin-eslint.svg)](https://npmjs.com/package/@vue/cli-plugin-eslint) |
| `@vue/cli-service`       | ^4.5.12        | [![NPM](https://nodeico.herokuapp.com/@vue/cli-service.svg)](https://npmjs.com/package/@vue/cli-service)             |
| `babel-eslint`           | ^10.1.0        | [![NPM](https://nodeico.herokuapp.com/babel-eslint.svg)](https://npmjs.com/package/babel-eslint)                     |
| `eslint`                 | ^6.2.0         | [![NPM](https://nodeico.herokuapp.com/eslint.svg)](https://npmjs.com/package/eslint)                                 |
| `eslint-plugin-vue`      | ^7.8.0         | [![NPM](https://nodeico.herokuapp.com/eslint-plugin-vue.svg)](https://npmjs.com/package/eslint-plugin-vue)           |
| `node-sass`              | ^4.14.1        | [![NPM](https://nodeico.herokuapp.com/node-sass.svg)](https://npmjs.com/package/node-sass)                           |
| `sass-loader`            | ^7.3.1         | [![NPM](https://nodeico.herokuapp.com/sass-loader.svg)](https://npmjs.com/package/sass-loader)                       |
| `vue-template-compiler`  | ^2.6.12        | [![NPM](https://nodeico.herokuapp.com/vue-template-compiler.svg)](https://npmjs.com/package/vue-template-compiler)   |
