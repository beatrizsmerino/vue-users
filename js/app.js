const app = new Vue({
    el: '#app',
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
});