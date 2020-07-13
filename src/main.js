import Vue from "vue";
import App from "./App.vue";
import store from "./store.js";

import router from "./router.js";
import "bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay, faPause, faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faPlay, faPause, faTrash);

Vue.config.productionTip = false;

console.log(router);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
