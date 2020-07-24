<template>
  <section id="artist-details" :class="[{ collapsed: collapsed }]">
    <div class="artist-details">
      <div class="container-sm pt-5">
        <router-view name="details" />
      </div>
      <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :theme="selectedTheme"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
        :width="width"
      />
      <div v-if="isOnMobile && !collapsed" class="sidebar-overlay" @click="collapsed = true" />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { SidebarMenu } from "vue-sidebar-menu";
import Seperator from "../components/Seperator";

export default {
  name: "artist",
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Artsy",
          hiddenOnCollapse: false
        },
        {
          href: { path: "/artist/bio" },
          title: "About",
          icon: "fas fa-address-card"
        },
        {
          href: { path: "/artist/albums" },
          title: "Albums",
          icon: "fas fa-compact-disc"
        },
        {
          component: Seperator
        },
        {
          href: { path: "/artist/return" },
          title: "Return",
          icon: "fas fa-undo-alt"
        }
      ],
      width: this.isOnMobile ? "200px" : "250px",
      collapsed: false,
      isOnMobile: false
    };
  },
  mounted() {
    this.$store.dispatch("fetchAlbums");
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true;
        this.collapsed = true;
      } else {
        this.isOnMobile = false;
        this.collapsed = false;
      }
    },
    onToggleCollapse(collapsed) {
      this.collapsed = collapsed;
    }
  },
  components: {
    SidebarMenu
  },
  computed: {
    ...mapState(["currentArtist", "theme"]),
    selectedTheme: function() {
      return this.theme === "dark" ? "white-theme" : "default";
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
$primary-color: $primary;
$item-active-color: $primary;
@import "node_modules/vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";

.v-sidebar-menu .vsm--header {
  margin-bottom: 20px;
}
.v-sidebar-menu .vsm--link.vsm--link_active:focus {
  outline: none;
}

#artist-details {
  padding-left: 200px;
  transition: 0.3s ease;
}

#artist-details.collapsed {
  padding-left: 10px;
}

#artist-details.onmobile {
  padding-left: 50px;
}
.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: lighten($black, 40);
  opacity: 0.5;
  z-index: 200;
}
.artist-details {
  padding: 0 50px 0 50px;
  min-height: 100vh;
}

.dark .artist-details {
  background: linear-gradient(160deg, lighten($gray, 40) 80%, $white 10%);
}
.light .artist-details {
  background: linear-gradient(160deg, $white 80%, lighten($gray, 40) 10%);
}

//MEDIA QUERIES
@include mediaSm {
  .artist-details {
    padding: 0 0 0 50px;
  }
}
</style>
