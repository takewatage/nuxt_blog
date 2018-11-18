<template>
  <div id="navibar-header">
    <vs-navbar
      v-model="indexActive"
      text-color="rgba(0,0,0,.6)"
      active-text-color="#00ffb3"
      class="myNavbar"
    >
      <div class="container d-flex">
        <vs-navbar-title class="flex-center">
          <Logo></Logo>
          watage.com
        </vs-navbar-title>

        <vs-spacer></vs-spacer>

        <vs-navbar-item
          v-for="(item,index) in naviItems"
          :key="index"
          class="sp-none"
          :index="index"
        >
          <nuxt-link
            active-class="is-active"
            :to="Object.values(item).toString()"
            class="nav-item is-tab"
            exact
            >{{ Object.keys(item).toString() }}
          </nuxt-link>
        </vs-navbar-item>
        <transition class="pc-none"> <NaviMenuList></NaviMenuList> </transition>
      </div>
    </vs-navbar>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Logo from '~/components/Logo.vue'
  import NaviMenuList from '~/components/NaviMenuList.vue'

  export default {
    data() {
      return {
        indexActive: 0,
        naviItems: [{ Top: '/' }, { Blog: '/blog' }, { About: '/about' }]
      }
    },

    computed: mapState(['page']),

    methods: {
      getPath(name) {},
      getQueryString() {
        const url = window.location

        // if ( str.match(/hoge/)) {

        // }

        return url

        let hash = url.slice(1)
        // if(hash) {
        //     linq.from(this.isActive)
        //         .select(x => {
        //         x.value = false
        //         return x
        //     }).toArray();
        //     this.isActive[hash] = true
        // }else {
        //     this.isActive.description = true
        // }
      }
    },

    components: {
      Logo,
      NaviMenuList
    }
  }
</script>

<style lang="scss" scoped>
  #navibar-header {
    position: fixed;
    width: 100%;
    height: 120px;
    z-index: 999;
    left: 0;
    transition: all 0.3s ease;

    header {
      height: 100%;
    }

    .vs-navbar--title {
      display: flex;
      color: transparent;
      background: linear-gradient(315deg, #3d434f 50%, #00ffb3 100%);
      -webkit-background-clip: text;
      font-size: 23px;
      transition: all 0.5s ease;
      &:hover {
        font-size: 25px;
        transition: all 0.5s ease;
      }
    }

    .vs-navbar--item a {
      font-size: 20px;
    }
  }
</style>
