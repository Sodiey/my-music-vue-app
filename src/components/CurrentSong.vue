<template>
  <section class="currentsong sticky-top">
    <div class="currentsong-background position-relative">
      <div
        class="currentsong-backgroundimage position-absolute"
        :style="{ backgroundImage: `url(${song.image})` }"
      ></div>
      <div class="song-info d-flex justify-content-center align-items-center py-5">
        <div class="item container py-4">
          <div class="row justify-content-center">
            <div class="song col-md-8 text-center">
              <h1 class="song-name">{{ song.name }}</h1>
            </div>
            <div class="song col-md-12 text-center">
              <div class="song-description px-2">{{ song.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "current-song",
  props: ["song"]
};
</script>

<style lang="scss">
@import "@/scss/main.scss";

.currentsong-background {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.currentsong-backgroundimage {
  height: 100%;
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(8px) grayscale(50%);
  transform: scale(1.15);
}
.currentsong .song-info {
  background: #000;
}

.currentsong .song-name {
  font-size: 2.5em;
}
.currentsong .song-description {
  font-size: 0.9em;
  line-height: 120%;
}


</style>
