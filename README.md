![shieldsIO](https://img.shields.io/github/issues/beatrizsmerino/vue-users)
![shieldsIO](https://img.shields.io/github/forks/beatrizsmerino/vue-users)
![shieldsIO](https://img.shields.io/github/stars/beatrizsmerino/vue-users)

# Vue Users

### Vue Users is an application that obtains a list of users from an API and manipulates the information. It has 3 views: the home, the user list and the user detail. There are several buttons with different actions to delete, hide and select random users. By clicking on a user you can see the complete information of the selected user, this page has a map f google maps.

![Image of App Vue Users](https://github.com/beatrizsmerino/vue-users/blob/master/doc/images/vue-users-1.png)

![Image of App Vue Users](https://github.com/beatrizsmerino/vue-users/blob/master/doc/images/vue-users-2.png)

![Image of App Vue Users](https://github.com/beatrizsmerino/vue-users/blob/master/doc/images/vue-users-3.png)

![Image of App Vue Users](https://github.com/beatrizsmerino/vue-users/blob/master/doc/images/vue-users-4.png)


## Development interface

![Vue logo](https://github.com/beatrizsmerino/vue-users/blob/master/doc/images/vue-js-2.jpg)

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
	-	[UserMap](https://github.com/beatrizsmerino/vue-users/blob/master/src/components/UserMap.vue)
	-	[GoogleMap](https://github.com/beatrizsmerino/vue-users/blob/master/src/components/GoogleMap.vue)
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