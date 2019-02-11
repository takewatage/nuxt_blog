<template>
  <div class="container">

    <!-- <AppHeader></AppHeader> -->

    <vs-row vs-justify="center">
      <vs-col
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="4"
        vs-sm="12"
        v-for="(post, i) in posts"
        :key="i"
      >
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}">
          <vs-card actionable class="cardx">
            <div slot="header">
              <h3>{{ post.fields.title }}</h3>
            </div>
            <div slot="media">
              <img
                class="card_image"
                :src="post.fields.image.fields.file.url"
              />
            </div>
            <div>
              <span>{{ post.fields.body }}</span>
            </div>
          </vs-card>
        </nuxt-link>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
  import { createClient } from "~/plugins/contentful.js"
  import AppHeader from "~/components/AppHeader.vue"

  const client = createClient()
  export default {
    head: {
      title: "Blog"
    },
    data() {
      return {}
    },
    async asyncData({ env, params }) {
      return await client
        .getEntries({
          content_type: env.CTF_BLOG_POST_TYPE_ID,
          order: "-fields.publishedAt"
        })
        .then(entries => {
          console.log(entries.items);
          return {
            posts: entries.items
          };
        })
        .catch(console.error);
      },

      components: {
        AppHeader
      }
    }
</script>
