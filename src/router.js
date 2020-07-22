import Vue from "vue";
import VueRouter from "vue-router";

//VIEWS
import Home from "./views/Home.vue";
import Music from "./views/Music.vue";
import MyArtists from "./views/MyArtists.vue";
import Artist from "./views/Artist.vue";
import Bio from "./views/Bio.vue";
import Albums from "./views/Albums.vue";

//Components
import Cards from "./components/Cards.vue";


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
    name: "artist",
    component: Artist,
    children: [
      {
      path: "albums",
      components: {
        details: Albums
      }
      },
      {
        path: "bio",
        components: {
          details: Bio
        },
      },
      {
        path: "return",
        components: {
          details: Cards
        },
      }
    ],
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router