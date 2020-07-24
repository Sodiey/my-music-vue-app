<template>
  <div id="gallery" class="layout-outer">
    <div class="layout-inner">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h2 class="section-title h1">My Favrite Artists</h2>
          </div>
        </div>
        <div class="row justify-content-center artist-outer">
          <div
            class="auto col-md-6 col-lg-4 artist"
            v-for="(artist, i) in artists"
            :key="i"
          >
            <div class="img-wrapper">
              <img
                class="img-fluid img-logo mb-4"
                :src="artist.strArtistLogo"
              />
            </div>
            <p class="lead my-2">
              {{ reduceString(artist.strBiographyEN) }}...
            </p>
            <router-link
              class="btn btn-block btn-primary mt-4"
              to="/artist/bio"
            >
              <span v-on:click="setCurrentArtist(i)" class="w-100 py-2 d-block"
                >Learn More</span
              >
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gallery",
  data() {
    return {};
  },
  props: ["artists"],
  methods: {
    reduceString: function(str) {
      let newStr = [];
      let i;
      for (i = 0; i < str.length; i++) {
        newStr.push(str[i]);
        if (str[i] == ".") break;
      }
      return newStr.join("");
    },
    setCurrentArtist: function(payload) {
      this.$store.dispatch("setCurrentArtist", payload);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.layout-inner {
  @include themify() {
    color: getThemifyVariable("main-body-text");
  }
}

.dark .img-wrapper {
  background: linear-gradient(160deg, $gray-400 60%, $gray 70%);
  background-attachment: fixed;
}
.light .img-wrapper {
  background: linear-gradient(160deg, $gray 60%, $gray-400 70%);
  background-attachment: fixed;
}

.img-wrapper {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 2em;
  border-radius: 10px;
}
.img-logo {
  width: 200px;
}
.artist {
  padding: 1.7em;
}
.artist-outer {
  padding: 3em;
}
</style>
