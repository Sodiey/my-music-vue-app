<template>
  <section id="home">
    <banner />
    <gallery
    :artists="artists" 
    />
  </section>
</template>

<script>
import { mapState } from "vuex";
import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";

export default {
  name: "home",
  computed: {
    ...mapState(["artists"])
  },
  created() {
    this.$store.dispatch("fetchArtists");
  },
  components: {
    Banner,
    Gallery
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.dark #home {
  background: $gray;
}
.light #home {
  background:  $white;
}

</style>