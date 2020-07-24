<template>
  <section id="bio">
    <div class="banner-image" :style="{ backgroundImage: `url(${getBackground})` }" />

    <h1 class="title">{{ currentArtist.strArtist }}</h1>
    <span class="lead">
      <font-awesome-icon class="text-primary" icon="check-circle" />Artist
    </span>
    <seperator />
    <p class="lead decription">{{ currentArtist.strBiographyEN }}</p>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Seperator from "../components/Seperator";

export default {
  name: "bio",
  computed: {
    ...mapState(["currentArtist"]),
    getBackground: function() {
      return this.currentArtist.strArtistBanner
        ? this.currentArtist.strArtistBanner
        : this.currentArtist.strArtistFanart;
    }
  },
  components: {
    Seperator,
    FontAwesomeIcon
  }
};
</script>

<style lang="scss">
@import "@/scss/main.scss";

#bio p {
  line-height: 1.75;
  letter-spacing: 0.04em;
}
.title {
  font-size: 4rem;
  font-weight: bold;
  @include themify() {
    color: getThemifyVariable("main-body-text");
  }
}

.decription {
  margin-bottom: 0;
  padding: 2rem;
  @include themify() {
    color: getThemifyVariable("song-list-text");
  }
}

.banner-image {
  padding-bottom: 11em;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 5px;
}

//MEDIA QUERIES
@include mediaSm {
  .decription {
    padding: 0.5rem;
  }
}
</style>
