import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { tools } from "./plugins/global-methods.js";
import "./assets/images/icons/icons-import.js";

Vue.prototype.$tools = tools;

import UIIcon from "./components/UI/UIIcon";
Vue.component("UIIcon", UIIcon);

Vue.config.productionTip = false;

new Vue({
	router,
	"render": h => h(App),
}).$mount("#app");
