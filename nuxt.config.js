const {getConfigForKeys} = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN'
])
const {createClient} = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/vuesax/dist/vuesax.css'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      /**
       * vue-loader に オプションを渡す
       */
      const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader');
      const { options: {loaders} } = vueLoader || { options: {} }
      if (loaders) {
        for (const loader of Object.values(loaders)) {
          changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
        }
      }
      config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
    }
  },


  //プラグイン
  plugins: [
    { src: '~plugins/bootstrap-vue.js' },
    { src: '~plugins/vue-sax.js' },
    { src: '~plugins/contentful' }
  ],
  
  // modules: [
  //   ['nuxt-sass-resources-loader', [
  //     '@/assets/sass/foundation/variable.scss',
  //     '@/assets/sass/foundation/mixin.scss',
  //   ]],
  // ],

  css:[
    "~/assets/sass/foundation/app.scss"
  ],

  generate: {
    routes () {
      return cdaClient.getEntries({
        'content_type': ctfConfig.CTF_BLOG_POST_TYPE_ID
      }).then(entries => {
        return [
          ...entries.items.map(entry => `/blog/${entry.fields.slug}`)
        ]
      })
    }
  },

  router: {
    middleware: 'pages'
  },

  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  }  
}


function changeLoaderOptions(loaders) {
  if (loaders) {
    for (const loader of loaders) {
      let options;
      switch (loader.loader) {
        case 'sass-loader':
          options = {
            includePaths: [
              path.resolve(__dirname, './assets/sass/foundation/variable/'),
              path.resolve(__dirname, './assets/sass/foundation/mixin/'),
              path.resolve(__dirname, './assets/sass/foundation/header/')
            ],
            data: '@import "_variable";\n@import "_mixin";'
          };
          break
// 他の loader を追加できる
//        case 'stylus-loader':
//          options = {
//            includePaths: [path.resolve(__dirname, './assets/sass/')],
//            import: ['_import']
//          }
//          break
      }
      if (options) {
        Object.assign(loader.options, options)
      }
    }
  }
}

