<template>
  <div id="navibar-header" :class="{top: isTop}">
    <vs-navbar
      v-model="indexActive"
      text-color="rgba(0,0,0,.6)"
      active-text-color="#00ffb3"
      class="myNavbar"
    >
      <div class="container d-flex">
        <Logo :logo=true></Logo>
        <vs-navbar-title class="flex-center">
          watage.com
        </vs-navbar-title>

        <vs-spacer></vs-spacer>

        <vs-navbar-item
          v-for="(item,index) in naviItems"
          :key="index"
          class="sp-none"
          :index="index"
        >
          <!-- <nuxt-link
            active-class="is-active"
            :to="Object.values(item).toString()"
            class="nav-item is-tab"
            exact
            >{{ Object.keys(item).toString() }}
          </nuxt-link> -->
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
        naviItems: [{ Top: '/' }, { Blog: '/blog' }, { About: '/about' }],
        scrollY: 0,
        isTop: true
      }
    },

    computed: mapState(['page']),

    mounted() {
        //スクロール位置取得
        window.addEventListener("scroll", this.handleScroll),
        window.addEventListener("resize", this.handleResize)
    },

    methods: {
      getPath(name) {},
      getQueryString() {
        const url = window.location

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
      },
      handleScroll() {
          if(window.innerWidth > 1088){
              this.scrollY = window.scrollY                    
              this.isTop = (this.scrollY == 0) ? true: false
          }else {
              this.isTop = false
          }             
      },

      handleResize() {
          if(window.innerWidth > 1088){
              this.isTop = true
          } else {
              this.isTop = false
          }        
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
    transform: translateY(-100%);
    top: 0;
    position: fixed;
    width: 100%;
    height: 65px;
    z-index: 999;
    left: 0;
    transition: all 0.3s ease;
    background-color: #fff;
    animation: slide-bottom .6s cubic-bezier(0.99,0.04,0.01,0.99) 0s forwards;

    &.top {
      height: 120px;
      background-color: unset;
    }

    header {
      height: 100%;
    }

    .vs-navbar--title {
      display: flex;
      color: transparent;
      background: linear-gradient(315deg, #3d434f 50%, #00ffb3 100%);
      -webkit-background-clip: text;
      line-height: 1.5;
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
