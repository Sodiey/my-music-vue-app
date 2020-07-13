import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home.vue";
import Music from "./views/Music.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: "home",
    component: Home
  },
  {
    path: '/music',
    name: "music",
    component: Music
  }
]
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router