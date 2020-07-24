<template>
  <section>
    <div id="photos" class="photos" ref="gallery">
      <div class="photo-item" v-for="(photo, i) in photos" @click="onToggle" :key="i">
        <div class="content">
          <img :src="photo.urls.regular" :class="{'byebye': isLoading}" v-on:load="onLoad" />
        </div>
      </div>
    </div>
    <footer-component />
  </section>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";

import { mapState } from "vuex";
export default {
  name: "myPhotos",
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    FooterComponent
  },
  created() {
    this.$store.dispatch("fetchPhotos");
  },
  mounted() {
    window.addEventListener("resize", this.resizeAll);
  },
  computed: {
    ...mapState(["photos", "photosWraperNode"])
  },
  methods: {
    getVal(elem, style) {
      return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
    },
    getHeight(item) {
      return item.querySelector(".content").getBoundingClientRect().height;
    },
    onLoad(e) {
      this.isLoading = true;
      const altura = this.getVal(this.$refs.gallery, "grid-auto-rows");
      const gap = this.getVal(this.$refs.gallery, "grid-row-gap");
      const gitem = e.target.parentElement.parentElement;
      gitem.style.gridRowEnd =
        "span " + Math.ceil((this.getHeight(gitem) + gap) / (altura + gap));
      this.isLoading = false;
    },
    onToggle(e) {
      e.target.parentElement.parentElement.classList.toggle("full");
      if (this.$refs.gallery.classList[1]) {
        this.$refs.gallery.classList.remove("full");
      }
    },
    resizeAll() {
      const altura = this.getVal(this.$refs.gallery, "grid-auto-rows");
      const gap = this.getVal(this.$refs.gallery, "grid-row-gap");
      this.$refs.gallery.querySelectorAll(".photo-item").forEach(item => {
        item.style.gridRowEnd =
          "span " + Math.ceil((this.getHeight(item) + gap) / (altura + gap));
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/main.scss";

#photos {
  /* @include themify() {
    background: getThemifyVariable("song-list-bg");
  } */
  /* background: #eee; */
}

.full {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.full .content {
  background-color: rgba(0, 0, 0, 0.75) !important;
  height: 100%;
  width: 100%;
  display: grid;
}
.full .content img {
  left: 50%;
  transform: translate3d(0, 0, 0);
  animation: zoomin 1s ease;
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
}
.byebye {
  opacity: 0;
}
.byebye:hover {
  transform: scale(0.2) !important;
}
.photos {
  display: grid;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 8px;
  margin-bottom: 5em;
}
.photos img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 16px #333;
  @include onHover;
  transition: all 0.2s ease;
}
.photos img:hover {
  /* box-shadow: 0 0 32px #333; */
}
.photos .content {
  padding: 4px;
}
.photos .photos-item {
  transition: grid-row-start 300ms linear;
  transition: transform 300ms ease;
  transition: all 0.5s ease;
  cursor: pointer;
}
.photos .photos-item:hover {
  transform: scale(1.025);
}
@include mediaMd {
  .photos {
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  }
}
@include mediaSm {
  .photos {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }
}

@keyframes zoomin {
  0% {
    max-width: 50%;
    transform: rotate(-30deg);
    filter: blur(4px);
  }
  30% {
    filter: blur(4px);
    transform: rotate(-80deg);
  }
  70% {
    max-width: 50%;
    transform: rotate(45deg);
  }
  100% {
    max-width: 100%;
    transform: rotate(0deg);
  }
}
</style>




