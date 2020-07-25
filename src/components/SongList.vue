<template>
  <section class="songlist list-group">
    <div
      class="song list-group-item list-group-item-action d-flex"
      :class="{ active: currentSong !== null && currentSong === song }"
      v-for="(song, i) in songs"
      :key="i"
    >
      <font-awesome-icon
        class="trash mr-3 align-self-center"
        icon="trash"
        @click="$emit('handleDelete', song)"
      />
      <div class="thumbnail" :style="{ backgroundImage: `url(${song.image})` }"></div>
      <div class="song-info flex-fill px-2 align-self-center">
        <h4 class="song-info-name mb-0">
          {{ song.name }}
          <small class="duration">{{ song.duration }}</small>
        </h4>
        <p class="song-info-creator mb-0">{{ song.created_by }}</p>
      </div>
      <div class="now-playing d-flex align-items-center" @click="$emit('handlePlay', song)">
        <font-awesome-icon class="play" icon="play" />
        <font-awesome-icon class="pause" icon="pause" />
      </div>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "song-list",
  props: ["songs", "currentSong"],
  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss">
@import "@/scss/main.scss";

//override bootstrap class
.list-group-item-action {
  @include themify() {
    color: getThemifyVariable("song-list-sub-text");
  }
}
.list-group-item-action.active {
  color: $gray-400;
  font-weight: 500;
}

// SongList
.songlist {
  @include themify() {
    background: getThemifyVariable("song-list-bg");
  }
}

.songlist .song:active {
  background: $gray-700;
}

.songlist .song-info-name {
  font-size: 1.3em;
  @include themify() {
    color: getThemifyVariable("song-list-text");
  }
}

.songlist .song-info-creator {
  font-size: 0.9em;
}

.songlist .thumbnail {
  width: 60px;
  height: 60px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.songlist .song .duration {
  color: $secondary;
}

.songlist .song .trash {
  display: none;
}

.songlist .song:not(.active):hover .trash {
  display: block;
  cursor: pointer;
}

.songlist .song .play,
.songlist .song:hover.active .play {
  display: none;
}
.songlist .song:hover .play {
  display: block;
  cursor: pointer;
}
.songlist .song .pause {
  display: none;
}

.songlist .song:hover.active .pause {
  display: block;
  cursor: pointer;
}

.songlist .song.active .play,
.songlist .song.active {
  display: block;
}

.item {
  background: rgba(#444, 0.3);
  z-index: 1000;
}

</style>