<template>
  <section id="albums">
    <h2 class="display-4 p-3">Famous Albums</h2>
    <seperator />
    <div v-for="(album, i) in albums" :key="i" class="py-4 px-3 mb-3 album">
      <transition :name="i % 2 == 1 ? 'right-slide' : 'left-slide'">
        <div class="row onMobile" :class="{ 'flex-row-reverse': i % 2 == 1 }" v-if="show">
          <div class="col-auto mb-3">
            <img style="width: 200px" :src="album.strAlbumThumb" alt="album photo" />
          </div>
          <div
            class="col-12 col-lg-9 d-flex flex-column"
            :class="{ 'align-items-md-end': i % 2 == 1 }"
          >
            <h3 id="album-title">{{ album.strAlbum }}</h3>
            <div class="d-flex flex-wrap justify-content-even">
              <span class="text-lighter mr-5">
                <font-awesome-icon class="text-primary" icon="check-circle" />
                Realeased on: {{ album.intYearReleased }}
              </span>
              <span class="text-lighter mr-5">
                <font-awesome-icon class="text-primary" icon="check-circle" />
                Gerne: {{ album.strGenre }}
              </span>
              <span class="text-lighter">
                <font-awesome-icon class="text-primary" icon="check-circle" />
                Mood: {{ album.strMood }}
              </span>
            </div>
            <dummy-text :description="album.strDescriptionEN" />
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { mapState } from "vuex";
import Seperator from "../components/Seperator";
import DummyText from "../components/DummyText";

export default {
  name: "albums",
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = true;
  },
  computed: {
    ...mapState(["albums"])
  },
  components: {
    FontAwesomeIcon,
    Seperator,
    DummyText
  }
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
.album {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  @include onHover;
}
.text-lighter {
  color: darken(#929292, 20);
}

//MEDIA QUERIES
@include mediaSm {
  .onMobile {
    justify-content: center;
    text-align: center;
  }
  #album-title {
    align-self: center;
  }
}
</style>
