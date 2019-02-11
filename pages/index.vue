<template>
  <section id="top">
    <div class="top_bg">
      <div class="top_bg_cell"></div>
      <div class="top_bg_cell"></div>
      <div class="top_bg_cell"></div>
      <div class="top_bg_cell"></div>
      <div class="top_bg_cell"></div>
    </div>
  </section>
</template>

<script>
  import AppHeader from '~/components/AppHeader.vue'

  export default {
    components: {
      AppHeader
    }
  }
</script>

<style lang="scss" scoped>
  #top {
    margin-top: 120px;
    background: red;
  }

  .top_bg {
    .top_bg_cell {
      
    }
    background-color: black;
  }
</style>
