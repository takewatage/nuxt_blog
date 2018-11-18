<template>
  <div class="flex-center">
    <a href="#" class="open-main-menu">
      <span></span> <span></span> <span></span>
    </a>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .open-main-menu {
    margin-left: auto;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
  }

  a {
    color: #3d434f;
    font-weight: 900;
    background-color: transparent;
  }

  .open-main-menu span:first-of-type {
    width: 10px;
    height: 10px;
    background-color: #3d434f;
  }

  .open-main-menu span {
    display: block;
    transition: all 0.3s ease;
    border-radius: 100%;
    margin: 0 3px;
    border: 3px solid;
  }
  .open-main-menu span:nth-child(2) {
    width: 14px;
    height: 14px;
    border: 3px solid #3d434f;
  }
  .open-main-menu span:last-of-type {
    width: 16px;
    height: 16px;
    background-color: #3d434f;
  }
  a:hover {
    color: #00ffb3;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }
</style>
