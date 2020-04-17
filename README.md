![shieldsIO](https://img.shields.io/github/issues/beatrizsmerino/vue-users)
![shieldsIO](https://img.shields.io/github/forks/beatrizsmerino/vue-users)
![shieldsIO](https://img.shields.io/github/stars/beatrizsmerino/vue-users)

# Vue Users

### Vue Users is an application that obtains a list of users from an API and manipulates the information. It has 3 views: the home, the user list and the user detail. There are several buttons with different actions to delete, hide and select random users. By clicking on a user you can see the complete information of the selected user, this page has a map f google maps.

![Image of App Vue Users](https://github.com/beatrizsmerino/vue-users/blob/feature/documentation/documentation/images/vue-users-1.png)

![Image of App Vue Users](https://github.com/beatrizsmerino/vue-users/blob/feature/documentation/documentation/images/vue-users-2.png)

![Image of App Vue Users](https://github.com/beatrizsmerino/vue-users/blob/feature/documentation/documentation/images/vue-users-3.png)

![Image of App Vue Users](https://github.com/beatrizsmerino/vue-users/blob/feature/documentation/documentation/images/vue-users-4.png)

![Image of App Vue Users](https://github.com/beatrizsmerino/vue-users/blob/feature/documentation/documentation/images/vue-users-5.png)

## Development interface

![Vue logo](https://github.com/beatrizsmerino/vue-dinner-calculator/blob/feature/documentation/documentation/images/vue-logo.png)

Is developed with **[vue.js](https://vuejs.org/)** 2.6.10 a Javascript framework. This project use [Vue Cli](https://cli.vuejs.org/) and has dependencies as vue router and google maps.

## Content

**Structure of folders**

-   assets
-   constants
    -   colorPalette
    -   mapSettings
-   views
    -   Home
    -   Users
    -   User
-   components
    -   PageHeader
    -   PageTitle
    -   UsersList
    -   UsersButtons
    -   UserDetail
    -   UserMapGoogleMaps
    -   GoogleMapLoader
    -   GoogleMapMarker

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

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Publish in Github Pages

```
chmod +x deploy.sh
./deploy.sh
```
