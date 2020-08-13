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
};
</script>

<style>
</style>