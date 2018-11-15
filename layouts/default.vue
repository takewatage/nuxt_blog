<template>
  <div>
      <vs-navbar
      v-model="indexActive"
      color="#00c4a7"
      text-color="rgba(255,255,255,.6)"
      active-text-color="rgba(255,255,255,1)"
      class="myNavbar">
      <vs-navbar-title>
          <nuxt-link to="/">
            Myblog
          </nuxt-link>
        </vs-navbar-title>
        <vs-navbar-item index="0" >
            <nuxt-link active-class="is-active" to="/" class="nav-item is-tab" exact>Home</nuxt-link>
        </vs-navbar-item>
        <vs-navbar-item index="1">
            <nuxt-link active-class="is-active" to="/blog" class="nav-item is-tab" exact>Blog</nuxt-link>
        </vs-navbar-item>
        <vs-navbar-item index="2">
            <nuxt-link active-class="is-active" to="/about" class="nav-item is-tab" exact>About</nuxt-link>
        </vs-navbar-item>
          
    
    
    </vs-navbar>
    <nuxt/>
  </div>
</template>

<script>
export default {
  data: ()=>({
    indexActive: 0
  }),
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

