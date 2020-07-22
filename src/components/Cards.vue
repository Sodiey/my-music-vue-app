<template>
  <section class="layout-outer mt-3">
    <div class="layout-inner">
      <div class="container">
        <div class="row no-gutters justify-content-center">
          <div class="col-10 col-md-4 mb-3">
            <div class="card card1 mr-3">
              <div class="icon-wrapper d-flex justify-content-center mt-5 mb-4">
                <img class="img-fluid mt-5" style="width: 130px" src="@/assets/piano.svg" />
              </div>
              <div class="card-body text-center">
                <h5 class="card-title mb-3">My Artists</h5>
                <p
                  class="card-text mb-4"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <router-link to="/my-artists" class="btn btn-dark">
                  <font-awesome-icon class="play mr-2" icon="eye" />Check
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-10 col-md-4 mb-3">
            <div class="card card2 mr-3">
              <div class="icon-wrapper d-flex justify-content-center mt-5 mb-4">
                <img class="img-fluid mt-5" style="width: 130px" src="@/assets/jukebox.svg" />
              </div>
              <div class="card-body text-center">
                <h5 class="card-title">My Music</h5>
                <p
                  class="card-text mb-4"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <router-link to="/music" class="btn btn-dark">
                  <font-awesome-icon class="play mr-2" icon="play" />Play
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-10 col-md-4 mb-3">
            <div class="card card3 mr-3">
              <div class="icon-wrapper d-flex justify-content-center mt-5 mb-4">
                <img class="img-fluid mt-5" style="width: 130px" src="@/assets/book.svg" />
              </div>
              <div class="card-body text-center">
                <h5 class="card-title mb-3">My Photos</h5>
                <p
                  class="card-text mb-4"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button class="btn btn-dark">
                  <font-awesome-icon class="play mr-2" icon="eye" />Check
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "cards",
  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.layout-outer {
  /* position: absolute; */
  bottom: 7em;
  width: 100%;
}

.card1,
.card2,
.card3 {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2),
      0px 21px 33px 3px rgba(0, 0, 0, 0.14),
      0px 8px 40px 7px rgba(0, 0, 0, 0.12);
    transform: scale(1.01);
    transform: translateY(-2rem);
    cursor: pointer;
    background: rgba($primary, 0.7);
  }
  @include easeOut;
}
</style>