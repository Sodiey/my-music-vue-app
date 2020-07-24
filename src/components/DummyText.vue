<template>
  <div>
    <transition name="fade">
       <p class="lead mt-3 text" v-if="show">
         {{description ?
          reduceString(description) :
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum architecto consequatur numquam saepe unde, ut quibusdam veniam! Reiciendis, error natus? Voluptates ipsam beatae aliquam a, expedita ipsa ut dolores."
         }}
       </p>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "dummyText",
    data() {
      return {
        show: false
      }
    },
    mounted() {
      this.show = true
    },
    methods: {
      reduceString: function(str) {
        let newStr = [];
        let i;
        let count = 0;
        for (i = 0; i < str.length; i++) {
          newStr.push(str[i]);
          if (str[i] == ".") {
            count++;
          }
          if (count === 3 ) break;
        }
        return newStr.join("");
      }
    },
    props:["description"]
  }
</script>

<style lang="scss" scoped>

</style>