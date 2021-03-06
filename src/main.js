import Vue from "vue";
import App from "./App.vue";
import store from "./store.js";

import router from "./router.js";
import "bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlay,
  faPause,
  faTrash,
  faHeart,
  faEye,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
library.add(faPlay, faPause, faTrash, faHeart, faEye, faCheckCircle);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
