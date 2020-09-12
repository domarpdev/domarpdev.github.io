<template>
  <div class="article-container">
    <h1>{{post.title}}</h1>
    <p>{{post.description}}</p>
    <!-- <img :src="post.img" :alt="post.alt" /> -->
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
import { mapMutations } from "vuex";

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

  head() {
    console.log(this.post);
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
  all: initial;
  all: unset;
}

.nuxt-content-highlight {
  font-family: Consolas;
  font-size: 14px;
  position: relative;
  z-index: 1;
  border-radius: 6px;
}

.nuxt-content-highlight > .filename {
  font-family: Roboto;
  right: 0;
  top: 0;
  position: absolute;
  margin-right: 0.8rem;
  font-size: 0.8rem;
  color: rgba(203, 213, 224, 1);
  font-weight: 300;
  z-index: 10;
  margin-top: 0.5rem;
}

.nuxt-content pre {
  position: static;
  border-radius: 6px;
  font-family: Consolas;
  font-size: 16px;
  padding: 20px;
}

code[class*="language-"],
pre[class*="language-"] {
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  color: #c3cee3;
  font-family: Consolas, Roboto Mono, monospace;
  font-size: 1em;
  line-height: 1.5em;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}
</style>