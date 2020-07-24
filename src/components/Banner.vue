<template>
  <section class="layout-outer">
    <div class="layout-inner d-flex text-center">
      <div class="overlay">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-11 col-sm-10 col-md-8 p-5 mt-5">
              <h3 class="display-2 page-title">
                I
                <font-awesome-icon class="heart text-primary" icon="heart" />ART
              </h3>
              <a href="#gallery">
                <button id="btn-banner" class="btn btn-primary py-2">VIEW</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <cards />
  </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Cards from "./Cards";

export default {
  name: "banner",
  components: {
    FontAwesomeIcon,
    Cards
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.layout-outer {
  position: relative;
}

.layout-inner {
  min-height: 60vh;
  /* @include themify() {
    background: getThemifyVariable("main-body-bg");
    color: getThemifyVariable("main-body-text");
  } */
  position: relative;
  background: url("https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80");
  background-position: center;
  background-size: cover;
}

#btn-banner {
  /* @include themify() {
    background: getThemifyVariable("main-body-bg");
  } */
  border-radius: 20px;
  min-width: 5.3em;
  /* background: darken($gray-600, 10); */

  //DARK
  /* background: lighten($gray, 10); */
  letter-spacing: 1.7px;
  font-weight: 600;
  line-height: 1.4;
}
.overlay {
  @include themify() {
    background: rgba(getThemifyVariable("main-body-bg"), 0.8);
    color: getThemifyVariable("main-body-text");
  }
  position: absolute;
  top: 0;
  left: 0;
  /* background: rgba($gray-600, .9); */
  /* background: rgba($gray, .7); */
  /* color: $gray; */
  /* color: $white; */

  width: 100%;
  height: 100%;
}
</style>
