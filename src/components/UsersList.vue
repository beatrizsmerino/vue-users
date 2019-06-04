<template>
    <div>
        <slot></slot>
        <transition-group tag="ul" name="slide" class="user-list">
            <li v-for="user in users" :key="user.username" class="user">
                <img :src="user.image" :alt="user.name.first + ' ' + user.name.last" class="user__img">
                <div class="user__content">
                    <p>
                        <span class="user__name">
                            <slot name="title" :use="user">
                                {{user.name.first}} {{user.name.last}}
                            </slot>
                        </span>
                    </p>
                    <slot name="user__subtitle" :user="user">
                        <p class="description">
                            <span class="fa fa-user description__icon description__item"></span>
                            <span class="description__text description__item">{{user.username}}</span>
                        </p>
                    </slot>
                    <p class="description">
                        <span class="fa fa-map-marker loc description__icon description__item"></span>
                        <span class="description__text description__item">{{user.address}}</span>
                    </p>
                </div>

                <span class="icon-close fas fa-times-circle" @click="userRemoveEmit(user)"></span>
            </li>
        </transition-group>
    </div>
</template>



<script>
export default {
    props: ['users'],
    methods: {
        userRemoveEmit(userToRemove) {
            this.$emit("remove", userToRemove);
        },
    },
}
</script>



<style lang="scss">

.user-list {
    max-width: 550px;
    margin: 2em auto;
    padding: 0;
}

.user {
    width: 100%;
    margin: 1rem auto;
    padding: 10px;
    position: relative;
    list-style: none;
    background-color: rgba(221, 51, 51, 0.2);
    cursor: pointer;

    &__content {
        display: inline-block;
        vertical-align: middle;
    }

    &__name{
        margin-bottom: .25rem;
        text-transform: capitalize;
        font-size: 1.6rem;
        font-weight: 200;
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    }

    &__img {
        margin: 0 1rem;
        vertical-align: middle;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.25);
    }
    &:hover{
        .user{
            &__img {
                transform: scale(1.15);
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
            }
            &__name {
                text-shadow: 1px 1px 3px rgba(10, 10, 10, 0.2);
                font-weight: 600;
            }
        }
    }
}


.description {
    display: flex;
    align-items: center;

    &__icon {
        margin-right: .25rem;
        padding: 0.1rem 0.2rem;
        font-size: 1rem;
        opacity: .75;
    }
    &__text {
        font-size: 1.2rem;
    }
}


.icon-close {
    display: inline-block;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 1.8rem;
    color: lightcoral;
}

.icon-close:hover {
    color: #3F3F3F;
}





/* 
VUE TRANSITIONS
-----------------------------------------
*/


/* animation title (WITH NAME FADE) */
.fade-enter {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity 1s;
}

.fade-leave-to {
    opacity: 0;
}

.fade-leave-active {
    transition: opacity 1s;
}


/* animation list (WITH THE NAME SLIDE) */
.slide-enter {
    transform: translateX(500px);
}

.slide-enter-active {
    transition: all 1s;
}

.slide-leave-to {
    transform: translateX(-500px);
}

.slide-leave-active {
    transition: all 1s;
}


/* animation button random (WITH THE NAME SLIDE)*/
.slide-move {
    transition: all 0.5s;
}
</style>
