<template>
  <div>
    <v-container>
      <h1 class="blog-header">Blog Posts</h1>

      <div class="d-flex flex-wrap justify-center">
        <v-card class="ma-5" elevation="3" v-for="post of posts" :key="post.slug" width="500">
          <NuxtLink class="post-card" :to="{ name: 'blog-slug', params: { slug: post.slug } }">
            <v-img :src="post.img" contain> </v-img>
            <v-card-title>{{ post.title }}</v-card-title>
            <v-card-subtitle class="py-3 text-subtitle-1 black--text">{{
            post.description
            }}</v-card-subtitle>
            <div class="read-more ml-4 mb-3">Read More ...</div>
          </NuxtLink>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "Blog",

  async asyncData ({ $content, params }) {
    const posts = await $content("blog", params.slug)
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      posts,
    };
  },

  data: () => ({
    title: "Blog - Pramod Devireddy",
    description: "Blog Posts by Pramod Devireddy",
  }),

  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description,
        },
        // Open Graph
        {
          hid: "og:title",
          property: "og:title",
          content: this.title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.description,
        },
        // // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.description,
        },
      ],
    };
  },

  created: function () {
    this.$store.commit("SET_APP_BAR_COLOR", "#FFF");
    this.$store.commit("SET_APP_TITLE_COLOR", "#000");
  },
};
</script>

<style>
.blog-header {
  text-align: center;
  margin-top: 15px;
  margin-bottom: 30px;
  font-weight: 400;
}

.post-card {
  text-decoration: none;
}

.read-more {
  color: #0166ca;
}
</style>