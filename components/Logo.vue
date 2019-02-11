<template>
  <div class="VueToNuxtLogo">
    <div v-if="logo" class="animate-down"><img src="/teltel_black.png" style="width:50px;" /></div>
    <img v-else src="/teltel_black.png" style="width:50px;" />
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },

  props: {
    logo: {
      type: Boolean
    },
  },
}
</script>

<style lang="scss" scoped>
  .VueToNuxtLogo {
    div::before, div::after {
        content: "";
        display: block;
    }
    div {
      left: 6%;
      height: 180px;
      position: absolute;
      top: 0;
      transform: translateY(-100%);
      perspective: 1000px;
      transform-style: preserve-3d;

      &::before {
          margin-left: calc(50% - 0.5px);
          width: 1px;
          background-color: #283c5f;
          height: calc(100% - 30px);
      }
      img {
        transform: translate3d(1.5px,-15px,0);
      }
    }
    .animate-down {
      animation: page__down-decoration .6s ease .6s forwards;
    }
  }

</style>

