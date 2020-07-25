<template>
  <section id="home">
    <banner />
    <gallery :artists="artists" />
    <footer-component />
  </section>
</template>

<script>
import { mapState } from "vuex";
import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
import FooterComponent from "@/components/FooterComponent.vue";

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
    Gallery,
    FooterComponent
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.dark #home {
  background: $gray;
}
.light #home {
  background: $white;
}
</style>
