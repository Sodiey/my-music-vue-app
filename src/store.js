import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    songs: [],
    currentSong: null
  },
  mutations: {
    SET_SONGS(state, payload) {
      state.songs = payload;
    },
    CHANGE_CURRENT_SONG(state, payload) {
      state.currentSong = payload;
    }
  },
  actions: {
    async fetchSongs({ commit }) {
      try {
        const response = await fetch("https://orangevalleycaa.org/api/music");
        const data = await response.json();
        commit("SET_SONGS", data);
      } catch(err) {
        console.log(err);
      }
    },
    changeSong({ commit }, payload) {
      commit("CHANGE_CURRENT_SONG", payload);
    },
    deleteSong({ commit }, payload) {
      // const updatedArray = _.without(this.songs, payload);
      // this.songs = updatedArray;
      let filteredArray = this.state.songs.filter(song => song.id !== payload.id);
      commit("SET_SONGS", filteredArray);
    },
  }
});


