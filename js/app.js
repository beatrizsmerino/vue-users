const app = new Vue({
    el: '#app',
    data() {
        return {
            users: []
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