v <template>
  <div style="">
    {{currentArtist.strArtist}}
  </div>
</template>

<script>
import { mapState } from "vuex";
  export default {
    name: "artist",
    computed: {
       ...mapState(["currentArtist"])
    }
  }
</script>

<style lang="scss" scoped>

</style>