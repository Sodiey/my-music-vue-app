<template>
  <header class="site-header">
    <nav class="site-nav navbar navbar-expand-md fixed-top text-uppercase" :class="setColorsHeader">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          ARTSY
        </router-link>
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
        <section id="myTogglerNav" class="collapse navbar-collapse" ref="nav">
          <ul class="navbar-nav ml-auto text-right">
            <li class="nav-item" v-on:click="hideNav">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item" v-on:click="hideNav">
              <router-link to="/music" class="nav-link">Music</router-link>
            </li>
            <li class="nav-item mr-md-4" v-on:click="hideNav">
              <router-link to="/my-artists" class="nav-link">Artists</router-link>
            </li>
            <li class="nav-item" v-on:click="hideNav">
              <button
                class="btn btn-small"
                v-on:click="changeTheme"
                :class="setColorsButton"
              >{{ theme == "dark" ? "light" : "dark" }} mode</button>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "nav-bar",
  methods: {
    changeTheme() {
      this.$store.dispatch("changeTheme");
    },
    hideNav() {
      this.$refs.nav.classList.remove("show");
    }
  },
  mounted() {
    let nav = document.querySelector(".site-nav");
    let navHeight = nav.clientHeight;
    let header = document.querySelector(".site-header");
    header.style.height = `${navHeight - 2}px`;
  },
  computed: {
    ...mapState(["currentSong", "theme"]),
    setColorsHeader: function() {
      return {
        "bg-color-scroll": this.currentSong,
        "navbar-light": this.theme === "dark",
        "navbar-dark": this.theme === "light"
      };
    },
    setColorsButton: function() {
      return {
        "btn-dark": this.theme === "dark",
        "btn-light": this.theme === "light"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.site-nav {
  @include themify() {
    background: getThemifyVariable("nav-bg");
  }
}

.bg-color-scroll {
  background-color: rgba(white, 0.2);
}

.router-link-exact-active {
  font-weight: 700;
}

.site-header .nav-link {
  position: relative;
  margin-bottom: 2px;
}

.site-header .nav-link:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  right: 0;
  bottom: 0;
  background-color: var(--yellow);
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-out;
}

.site-header .nav-link:hover:before {
  visibility: visible;
  right: 0;
  transform: scaleX(1);
}
</style>
