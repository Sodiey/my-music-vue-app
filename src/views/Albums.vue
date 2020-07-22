<template>
  <div id="albums">
    <h2 class="display-4 p-3">Famous Albums</h2>
    <seperator />
    <div v-for="(album, i) in albums" :key="i" class="py-4 px-3 mb-3 album">
      <div class="row onMobile" :class="{'flex-row-reverse': i % 2==1}">
        <div class="col-auto">
          <img style="width: 200px" :src="album.strAlbumThumb" alt />
        </div>
        <div class="col-9 d-flex flex-column" :class="{'align-items-end': i % 2==1}">
          <p class="h3">{{album.strAlbum}}</p>
          <div class="d-flex flex-wrap justify-content-even">
            <span class="text-lighter mr-5">
              <font-awesome-icon class="text-primary" icon="check-circle" />
              Realeased on: {{album.intYearReleased}}
            </span>
            <span class="text-lighter mr-5">
              <font-awesome-icon class="text-primary" icon="check-circle" />
              Gerne: {{album.strGenre}}
            </span>
            <span class="text-lighter">
              <font-awesome-icon class="text-primary" icon="check-circle" />
              Mood: {{album.strMood}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { mapState } from "vuex";
import Seperator from "../components/Seperator";

export default {
  name: "albums",
  computed: {
    ...mapState(["albums"])
  },
  components: {
    FontAwesomeIcon,
    Seperator
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.album {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
      0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
    cursor: pointer;
  }
}
.text-lighter {
  color: darken(#929292, 20);
}

//MEDIA QUERIES
@include mediaSm {
  .onMobile {
    justify-content: center;
  }
}
</style>