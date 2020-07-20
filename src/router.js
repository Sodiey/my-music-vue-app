import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home.vue";
import Music from "./views/Music.vue";
import MyArtists from "./views/MyArtists.vue";
import Artist from "./views/Artist.vue";

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
  },
  {
    path: '/my-artists',
    name: "myArtists",
    component: MyArtists
  },
  {
    path: '/artist',
    name: "artists",
    component: Artist
  }
]
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router