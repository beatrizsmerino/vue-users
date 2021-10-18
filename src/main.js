import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/images/icons/icons-import.js';

import Icon from './components/Icon';
Vue.component('Icon', Icon);

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
