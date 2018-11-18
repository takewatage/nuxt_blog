<template>
    <div id="app-header">
        <header :class="{
            'index': (page === 'index'),
            'blog': (page === 'blog')
        }">
            <transition-group name="background" tag="div" class="bk-img">
                <div key="img1" v-if="page === 'index'" class="header-img-index">{{page}}</div>
                <div key="img2" v-if="page === 'blog'" class="header-img-blog">{{page}}</div>
            </transition-group>

        </header>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data () {
        return {
            
        }
    },
    computed: {
        ...mapState(['page']),
    },
}
</script>

<style lang="scss" scoped>
    
</style>