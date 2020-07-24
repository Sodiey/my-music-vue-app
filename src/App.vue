<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "app",
  created() {
    this.$store.dispatch("setTheme");
  },
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,400;1,700&family=Open+Sans:wght@400;600;700&display=swap");
@import "./scss/main.scss";
@import "node_modules/bootstrap/scss/bootstrap";
</style>
