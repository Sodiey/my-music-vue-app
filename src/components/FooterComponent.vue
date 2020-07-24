<template>
  <section id="footer">
    <div class="row">
      <div class="text-center col-12 col-sm-4 footer" style="background-color: #D3853D">
        <router-link to="/my-artists" class="nav-link">
          <h3 class="footer-text p-3 text-light">My Artists</h3>
        </router-link>
      </div>
      <div class="text-center col-12 col-sm-4 footer" style="background-color: #DE3E46">
        <router-link to="/music" class="nav-link">
          <h3 class="footer-text p-3 text-light">My Music</h3>
        </router-link>
      </div>
      <div class="text-center col-12 col-sm-4 footer" style="background-color: #7FC99C">
        <router-link to="/my-photos" class="nav-link">
          <h3 class="footer-text p-3 text-light">My Photos</h3>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "footerComponent"
};
</script>


<style lang="scss" scoped>
@import url("https://use.typekit.net/pgg5vnr.css");

.footer-text {
  font-family: "stencil-std";
  font-weight: 400;
  font-style: normal;
  letter-spacing: 2px;

  &:hover {
    transform: scale(1.1);
  }

  transition: transform 0.3s ease;
}
</style>
