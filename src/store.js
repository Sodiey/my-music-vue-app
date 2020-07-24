import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songs: [],
    theme: "dark",
    currentSong: null,
    artists: [],
    currentArtist: JSON.parse(localStorage.getItem("current.artist")) || [],
    albums: [],
    photos: [],
  },
  mutations: {
    CHANGE_THEME(state, payload) {
      state.theme = payload;
    },
    SET_SONGS(state, payload) {
      state.songs = payload;
      state.currentArtist = payload[0];
    },
    CHANGE_CURRENT_SONG(state, payload) {
      state.currentSong = payload;
    },
    SET_CURRENT_ARTIST(state, payload) {
      if (payload < 0 || payload > state.artists.length) return;
      state.currentArtist = state.artists[payload];
      localStorage.setItem(
        "current.artist",
        JSON.stringify(state.artists[payload])
      );
    },
    SET_ARTISTS(state, payload) {
      state.artists = payload;
    },
    SET_ALBUMS(state, payload) {
      state.albums = payload;
    },
    SET_PHOTOS(state, payload) {
      state.photos = payload;
    },
  },
  actions: {
    setTheme() {
      const body = document.body;
      const theme = this.state.theme;
      if (theme === "dark") {
        body.classList.add("dark");
        body.classList.remove("light");
      } else {
        body.classList.add("light");
        body.classList.remove("dark");
      }
    },
    changeTheme({ commit }) {
      if (this.state.theme === "dark") {
        commit("CHANGE_THEME", "light");
      } else {
        commit("CHANGE_THEME", "dark");
      }
      this.dispatch("setTheme");
    },
    setCurrentArtist({ commit }, payload) {
      commit("SET_CURRENT_ARTIST", payload);
    },
    async fetchSongs({ commit }) {
      try {
        const response = await fetch("https://orangevalleycaa.org/api/music");
        const data = await response.json();
        commit("SET_SONGS", data);
      } catch (err) {
        console.log(err);
      }
    },
    changeSong({ commit }, payload) {
      commit("CHANGE_CURRENT_SONG", payload);
    },
    deleteSong({ commit }, payload) {
      let filteredArray = this.state.songs.filter(
        (song) => song.id !== payload.id
      );
      commit("SET_SONGS", filteredArray);
    },
    fetchArtists({ commit }) {
      const myArtists = [
        "Miles Davis",
        "John coltrane",
        "Ella Fitzgerald",
        "Buddy Rich",
        "Herbie Hancock",
        "Chet Baker",
        "Bill Evans",
        "Dave Brubeck",
        "Chick Corea",
        "George Benson",
      ];
      let newArtists = [];

      myArtists.map(async (artist) => {
        const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
        const response = await fetch(url);
        const data = await response.json();
        commit("SET_CURRENT_ARTIST", 0); // Problem HERE
        newArtists.push(data.artists[0]);
      });

      console.log(newArtists);
      commit("SET_ARTISTS", newArtists);
    },
    // async fetchArtists({ commit }) {
    //   const response = await fetch("./data.json");
    //   const data = await response.json();
    //   commit("SET_ARTISTS", data);
    //   commit("SET_CURRENT_ARTIST", 0);
    // },
    async fetchAlbums({ commit }) {
      const artistName = this.state.currentArtist.strArtist;
      const response = await fetch(
        `https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${artistName}`
      );
      const data = await response.json();
      const filteredAlbums = data.album.filter(
        (album) => album.strAlbumThumb !== null && album.strAlbumThumb !== ""
      );
      commit("SET_ALBUMS", filteredAlbums);
    },
    async fetchPhotos({ commit }) {
      const gerne = "jazz";
      const client_id = "zEYMWpRquMsjd2nqaA3zIUFr2n1vq2NWM2z1CEAFxP8";
      const numOfImages = 15;
      const response = await fetch(
        `https://api.unsplash.com/search/photos?per_page=${numOfImages}&query=${gerne}&client_id=${client_id}`
      );
      const data = await response.json();
      commit("SET_PHOTOS", data.results);
    },
  },
});
