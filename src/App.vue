<template>
  <div id="app" v-cloak>
    <button @click="show = !show" class="button">CLICK</button>
    <button @click="random" class="button">RANDOM</button>

    <transition name="fade">
      <h1 v-if="show">My users</h1>
    </transition>

    <users-list :users="users" @remove="userRemove"></users-list>
  </div>
</template>

<script>
import UsersList from './components/UsersList.vue';

export default {
    components: {
        UsersList
    },
    data() {
        return {
            users: [],
            show: true
        }
    },
    methods: {
        userRemove(userToRemove) {
            this.users.splice(userToRemove, 1);
        },
        random() {
            this.users.sort(() => Math.random() - 0.5)
        }
    },
    created() {
        fetch('https://randomuser.me/api/?results=10')
            .then(res => res.json())
            .then(data => {
                this.users = data.results.map(user => ({
                    name: user.name,
                    username: user.login.username,
                    address: user.location.street,
                    image: user.picture.medium
                }))
            })
    },
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Oxygen:400,700,300");
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");

[v-cloak] {
    display: none;
}

*,
*:after,
*:before {
    box-sizing: border-box;
}

body {
    background: #FAFAFA;
    color: #3F3F3F;
    padding: 1em;
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    font-family: 'Oxygen', Helvetica, sans-serif;
}

h1 {
    margin: auto;
    text-align: center;
    font-size: 3rem;
    line-height: 1.5;
    color: lightcoral;
}

.button:not(:last-child){
    margin-right: 10px;
    padding: 10px;
    color: #fff;
    border: none;
    background-color: #3F3F3F;
    cursor: pointer;
}




/* 
VUE TRANSITIONS
-----------------------------------------
*/


/* default animation if dont use a name in the tag transition/transition-group (WITHOUT NAME) */
.v-enter {
    opacity: 0;
}

.v-enter-active {
    transition: opacity 1s;
}

.v-leave-to {
    opacity: 0;
}

.v-leave-active {
    transition: opacity 0.5s linear 0.5s;
}
</style>
