<template>
    <header class="site-header">
      <nav class="site-nav navbar navbar-expand-md fixed-top text-uppercase"
      :class="setColorsHeader"
      >
        <div class="container-fluid">
          <a class="navbar-brand">ARTSY</a>
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
            <ul class="navbar-nav ml-auto text-right">
              <li class="nav-item">
                <router-link to="/" class="nav-link">
                  Home
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/music" class="nav-link">
                  Music
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/my-artists" class="nav-link">
                  Artists
                </router-link>
              </li>
              <li class="nav-item">
                <button class="btn btn-small" 
                v-on:click="changeTheme"
                :class="setColorsButton"
                >{{theme == 'dark'? 'light':'dark'}} mode</button>
              </li>
            </ul>
          </section>
        </div>
      </nav>

      <!-- <section
        class="layout-hero d-flex align-items-center text-center"
        v-if="currentSong == null"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-11 col-sm-10 col-md-8">
              <h3>ARTSY</h3>
            </div>
          </div>
        </div>
      </section> -->
    </header>
</template>

<script>
import { mapState } from "vuex";

  export default {
    name: "nav-bar",
    methods: {
      changeTheme() {
        this.$store.dispatch("changeTheme");
      }
    },
    mounted() {
     let nav = document.querySelector(".site-nav");
     let navHeight = nav.clientHeight;
     let header = document.querySelector(".site-header");
     header.style.height = `${navHeight -2}px`;
    },
    computed: {
      ...mapState(["currentSong", "theme"]),
      setColorsHeader: function() {
        return {
          'bg-color-scroll': this.currentSong,
          'navbar-light': this.theme === "dark",
          'navbar-dark': this.theme === "light"
        }
      },
      setColorsButton: function() {
        return {
        'btn-dark': this.theme === "dark",
        'btn-light': this.theme === "light"
        }
      }
    },
  }

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
  content: '';
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