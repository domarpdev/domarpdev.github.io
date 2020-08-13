<template>
  <div class="article-container">
    <h1>{{post.title}}</h1>
    <p>{{post.description}}</p>
    <img :src="post.img" :alt="post.alt" />
    <p>post last updated: {{ formatDate(post.updatedAt) }}</p>
    <nuxt-content :document="post" />
    <nav>
      <ul>
        <li v-for="link of post.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "PageSlug",
  async asyncData({ $content, params }) {
    const post = await $content("blog", params.slug).fetch();

    return { post };
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },

  computed: {
    head() {
      return {
        title: this.post.title,
        titleTemplate: "%s - Pramod Devireddy",
        meta: [
          {
            hid: "description",
            name: "description",
            content: this.post.description,
          },
          // Open Graph
          { hid: "og:title", property: "og:title", content: this.post.title },
          {
            hid: "og:description",
            property: "og:description",
            content: this.post.description,
          },
          { hid: "og:type", property: "og:type", content: "article" },
          {
            hid: "og:url",
            property: "og:url",
            content: `https://domarpdev.github.io/blog/${this.post.slug}`,
          },
          { hid: "og:image", property: "og:image", content: this.socialImage },
          // Twitter Card
          {
            hid: "twitter:title",
            name: "twitter:title",
            content: this.post.title,
          },
          {
            hid: "twitter:description",
            name: "twitter:description",
            content: this.post.description,
          },
          {
            hid: "twitter:image",
            name: "twitter:image",
            content: this.socialImage,
          },
          {
            hid: "twitter:image:",
            name: "twitter:image:alt",
            content: this.post.imgUrl ? "Blog post image" : "Pramod Devireddy",
          },
        ],
      };
    },
  },
};
</script>

<style>
.article-container {
  margin: 10px 25px;
}

.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}

.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}

.nuxt-content p {
  margin-bottom: 20px;
}

.icon.icon-link {
  background-image: url("~assets/svg/icon-hashtag.svg");
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}


.v-application code {
    background-color: transparent;
}
</style>