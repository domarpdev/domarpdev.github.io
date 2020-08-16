<template>
 <div>
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="post of posts" :key="post.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: post.slug } }">
          <img :src="post.img" />
          <div>
            <h2>{{ post.title }}</h2>
            <p>by {{ post.author.name }}</p>
            <p>{{ post.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Blog",
  async asyncData({ $content, params }) {
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
    description:
      "Blog Posts by Pramod Devireddy",
  }),
  head() {
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
  created: function() {
      this.$store.commit("SET_APP_BAR_COLOR", "#FFF")
      this.$store.commit("SET_APP_TITLE_COLOR", "#4C8BF4")
  }
};
</script>

<style>
</style>