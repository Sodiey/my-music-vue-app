<template>
    <header id="page-hero" class="site-header">
      <nav class="site-nav navbar navbar-expand-md navbar-dark bg-tranparent fixed-top text-uppercase">
        <div class="container-fluid">
          <a class="navbar-brand">Artsy</a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#myTogglerNav"
            aria-controls="#myTogglerNav"
            aria-label="Toggle Navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <section id="myTogglerNav" class="collapse navbar-collapse">
            <div class="navbar-nav ml-auto text-right">
              <router-link to="/" class="nav-item nav-link">
                Home
              </router-link>
              <router-link to="/music" class="nav-item nav-link">
                Music
              </router-link>
            </div>
          </section>
        </div>
      </nav>

      <section
        class="layout-hero d-flex align-items-center text-center"
        v-if="currentSong == null"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-11 col-sm-10 col-md-8">
              <h3 class="display-4 page-title">Bootstrap 4 Layout</h3>
              <p class="lead">
                This layout uses multiple column rules so that how many columns
                each group takes depends on the width of the browser.
              </p>
            </div>
          </div>
        </div>
      </section>
    </header>
</template>

<script>
import { mapState } from "vuex";

  export default {
    name: "nav-bar",
    computed: {
      ...mapState(["currentSong"])
    }
  }

</script>

<style lang="scss" scoped>

</style>