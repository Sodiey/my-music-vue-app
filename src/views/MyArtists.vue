<template>
  <section id="page-carousel" class="layout-outer py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10 col-md-6">
          <div class="card shadow-lg">
            <section
              class="card-header font-weight-bold"
            >{{ currentArtist && currentArtist.strArtist }}</section>
            <section
              id="layout-carousel"
              class="layout-carousel carousel slide"
              data-ride="carousel"
            >
              <div class="img-wraper carousel-inner">
                <ol class="carousel-indicators">
                  <li data-target="#layout-carousel" data-slide-to="0" active></li>
                  <li data-target="#layout-carousel" data-slide-to="1"></li>
                  <li data-target="#layout-carousel" data-slide-to="2"></li>
                  <li data-target="#layout-carousel" data-slide-to="3"></li>
                  <li data-target="#layout-carousel" data-slide-to="4"></li>
                  <li data-target="#layout-carousel" data-slide-to="5"></li>
                  <li data-target="#layout-carousel" data-slide-to="6"></li>
                  <li data-target="#layout-carousel" data-slide-to="7"></li>
                  <li data-target="#layout-carousel" data-slide-to="8"></li>
                  <li data-target="#layout-carousel" data-slide-to="9"></li>
                  <li data-target="#layout-carousel" data-slide-to="10"></li>
                </ol>//LOOP
                <section
                  class="carousel-item"
                  v-for="(artist, i) in artists"
                  :class="{ active: i === 0 }"
                  :key="i"
                >
                  <img
                    class="layout-img img-fluid d-block w-100"
                    :src="artist.strArtistThumb"
                    :alt="artist.strArtist"
                  />
                </section>//LOOP ENDS
                <a
                  class="carousel-control-prev"
                  href="#layout-carousel"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon p-3 b-primary"></span>
                </a>
                <a class="carousel-control-next" href="#layout-carousel" data-slide="next">
                  <span class="carousel-control-next-icon p-3" v-on:click="nextImage"></span>
                </a>
              </div>
            </section>
            <section class="card-body">
              <h4 class="card-title">{{ currentArtist && currentArtist.strArtist }}</h4>
              <p class="card-text">
                {{
                currentArtist.strBiographyEN &&
                reduceString(currentArtist.strBiographyEN)
                }}...
              </p>
              <router-link class="btn btn-primary" to="/artist/bio">
                <span v-on:click="setCurrentArtist(this.i)" class="w-100 d-block">Learn More</span>
              </router-link>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "my-artists",
  data() {
    return {
      i: 1
    };
  },
  computed: {
    ...mapState(["artists", "currentArtist"])
  },
  created() {
    this.$store.dispatch("fetchArtists");
  },
  methods: {
    nextImage() {
      if (this.i < this.artists.length) {
        this.$store.dispatch("setCurrentArtist", this.i++);
      } else {
        this.$store.dispatch("setCurrentArtist", 0);
        this.i = 1;
      }
    },
    // previousImage() {
    //   if (this.i < this.artists.length) {
    //     this.$store.dispatch("setCurrentArtist", this.i--);
    //   } else {
    //     this.$store.dispatch("setCurrentArtist", 0);
    //     this.i = 1;
    //   }
    // },
    reduceString: function(str) {
      let newStr = [];
      let i;
      for (i = 0; i < str.length; i++) {
        newStr.push(str[i]);
        if (str[i] == ".") break;
      }
      return newStr.join("");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.layout-outer {
  min-height: 100vh;
}
.card {
  @include themify() {
    background: getThemifyVariable("main-body-text");
    color: getThemifyVariable("main-body-bg");
  }
}

.dark .layout-outer {
  background: linear-gradient(160deg, $gray 80%, $white 10%);
}
.light .layout-outer {
  background: linear-gradient(160deg, $white 80%, $gray 10%);
}
</style>
