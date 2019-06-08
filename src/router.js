import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Users from './views/Users.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: {
				title: 'Home',
			}
		},
		{
			path: '/users',
			name: 'users',
			component: Users,
			meta: {
				title: 'My users',
			}
		},
		{
			path: '/user/:username',
			name: 'user',
			component: User,
			props: true,
			meta: {
				title: 'My user',
			}
		}
	]
})
