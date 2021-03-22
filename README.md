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

| NPM PACKAGE              | STABLE VERSION | LAST VERSION                                                                                                                                                                                 |
| ------------------------ | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `core-js`                | ^2.6.11        | [![https://nodei.co/npm/core-js/](https://nodei.co/npm/core-js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/core-js/)                                              |
| `google-maps-api-loader` | ^1.1.1         | [![https://nodei.co/npm/google-maps-api-loader/](https://nodei.co/npm/google-maps-api-loader.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/google-maps-api-loader/) |
| `leaflet`                | ^1.6.0         | [![https://nodei.co/npm/leaflet/](https://nodei.co/npm/leaflet.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/leaflet/)                                              |
| `vue`                    | ^2.6.11        | [![https://nodei.co/npm/vue/](https://nodei.co/npm/vue.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue/)                                                          |
| `vue-router`             | ^3.1.6         | [![https://nodei.co/npm/vue-router/](https://nodei.co/npm/vue-router.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-router/)                                     |
| `vue2-leaflet`           | ^2.5.2         | [![https://nodei.co/npm/vue2-leaflet/](https://nodei.co/npm/vue2-leaflet.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue2-leaflet/)                               |
| `@vue/cli-plugin-babel`  | ^3.12.1        | [![https://nodei.co/npm/@vue/cli-plugin-babel/](https://nodei.co/npm/@vue/cli-plugin-babel.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@vue/cli-plugin-babel/)    |
| `@vue/cli-plugin-eslint` | ^3.12.1        | [![https://nodei.co/npm/@vue/cli-plugin-eslint/](https://nodei.co/npm/@vue/cli-plugin-eslint.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@vue/cli-plugin-eslint/) |
| `@vue/cli-service`       | ^4.2.3         | [![https://nodei.co/npm/@vue/cli-service/](https://nodei.co/npm/@vue/cli-service.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@vue/cli-service/)                   |
| `babel-eslint`           | ^10.1.0        | [![https://nodei.co/npm/babel-eslint/](https://nodei.co/npm/babel-eslint.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/babel-eslint/)                               |
| `eslint`                 | ^5.16.0        | [![https://nodei.co/npm/eslint/](https://nodei.co/npm/eslint.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/eslint/)                                                 |
| `eslint-plugin-vue`      | ^5.2.3         | [![https://nodei.co/npm/eslint-plugin-vue/](https://nodei.co/npm/eslint-plugin-vue.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/eslint-plugin-vue/)                |
| `node-sass`              | ^4.13.1        | [![https://nodei.co/npm/node-sass/](https://nodei.co/npm/node-sass.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-sass/)                                        |
| `sass-loader`            | ^7.3.1         | [![https://nodei.co/npm/sass-loader/](https://nodei.co/npm/sass-loader.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/sass-loader/)                                  |
| `vue-template-compiler`  | ^2.6.11        | [![https://nodei.co/npm/vue-template-compiler/](https://nodei.co/npm/vue-template-compiler.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-template-compiler/)    |
