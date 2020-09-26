<template>
  <v-container class="mb-15">
    <v-row justify="center">
      <v-col xl="5" lg="7" md="10" sm="10">
        <div class="mb-5">
          <NuxtLink :to="`/blog`" class="blog-list-link">
            <v-icon>mdi-arrow-left</v-icon> &nbsp; Blog List
          </NuxtLink>
        </div>

        <h1 class="blog-title">{{ post.title }}</h1>
        <h4 class="blog-description">{{ post.description }}</h4>
        <div class="d-flex flex-wrap blog-details">
          <v-avatar class="elevation-10" size="55">
            <img src="pramod-devireddy-96x96.jpg" alt="Pramod Devireddy" />
          </v-avatar>
          <div class="ml-3 mt-1">
            <div class="blog-author">{{ post.author.name }}</div>
            <div class="blog-time">
              <span>{{ formatDate(post.updatedAt) }}</span> •
              <ReadTime :content="post"></ReadTime>
            </div>
          </div>
          <v-spacer></v-spacer>
          <div class="ml-16 mt-3">
            <v-btn icon color="#757575" target="_blank" @click="tweet()">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn
              class="mx-n1"
              icon
              color="#757575"
              target="_blank"
              @click="linkedInPost()"
            >
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon color="#757575" target="_blank" @click="facebookPost()">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
          </div>
        </div>

        <v-card class="mb-10" elevation="3">
          <v-img :src="post.img" class="grey lighten-2"> </v-img>
        </v-card>

        <nuxt-content :document="post" />

        <PrevNextBlog :prev="prev" :next="next" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ReadTime from "@/components/ReadTime";
import PrevNextBlog from "@/components/PrevNextBlog";
import { mapMutations } from "vuex";

export default {
  name: "PageSlug",

  async asyncData({ $content, params }) {
    const post = await $content("blog", params.slug).fetch();
    const [prev, next] = await $content("blog")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return { post, prev, next };
  },

  components: {
    ReadTime,
    PrevNextBlog,
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },

    tweet() {
      var tweetURL =
        "https://twitter.com/intent/tweet?text=" +
        document.title +
        "&url=" +
        location.href;
      window.open(tweetURL);
    },

    linkedInPost() {
      var linkedInPostURL =
        "https://www.linkedin.com/shareArticle/?mini=true&url=" + location.href;
      this.PopupCenter(linkedInPostURL, 500, 500);
    },

    facebookPost() {
      var fbPostURL =
        "https://www.facebook.com/sharer/sharer.php?u=" +
        location.href +
        "&display=page";
      window.open(fbPostURL);
    },

    PopupCenter(url, w, h) {
      // Fixes dual-screen position                         Most browsers      Firefox
      var dualScreenLeft =
        window.screenLeft != undefined ? window.screenLeft : screen.left;
      var dualScreenTop =
        window.screenTop != undefined ? window.screenTop : screen.top;

      var width = window.innerWidth
        ? window.innerWidth
        : document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : screen.width;
      var height = window.innerHeight
        ? window.innerHeight
        : document.documentElement.clientHeight
        ? document.documentElement.clientHeight
        : screen.height;

      var left = width / 2 - w / 2 + dualScreenLeft;
      var top = height / 2 - h / 2 + dualScreenTop;
      var newWindow = window.open(
        url,
        "_blank",
        "scrollbars=yes, width=" +
          w +
          ", height=" +
          h +
          ", top=" +
          top +
          ", left=" +
          left
      );

      // Puts focus on the newWindow
      if (window.focus) {
        newWindow.focus();
      }
    },
  },

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
          hid: "og:image",
          property: "og:image",
          content: "https://domarpdev.github.io/" + this.post.img,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: "https://domarpdev.github.io/" + this.post.img,
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: this.post.title,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://domarpdev.github.io/" + this.post.img,
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
.blog-list-link {
  text-decoration: none;
  color: #000 !important;
}

.blog-list-link:hover {
  color: rgb(92, 148, 252) !important;
}

.blog-title {
  font-size: 48px;
  font-weight: 400;
}

@media only screen and (max-width: 600px) {
  .blog-title {
    font-size: 36px;
  }
}

.blog-description {
  font-weight: 400;
  font-style: italic;
}

.blog-details {
  margin-top: 30px;
  margin-bottom: 40px;
}

.blog-time {
  font-size: 15px;
  font-weight: 300;
}

.nuxt-content h2 {
  font-weight: 500;
  font-size: 30px;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #eaecef;
  margin-bottom: 1rem;
}

.nuxt-content h3 {
  font-weight: 400;
  font-size: 22px;
}

.nuxt-content p {
  font-size: 16px;
  margin-bottom: 30px;
  word-spacing: 2px;
  line-height: 32px;
}

.nuxt-content p code,
.nuxt-content h2 code,
.nuxt-content h3 code {
  color: #476582;
  padding: 0.25rem 0.5rem;
  margin: 0;
  font-size: 0.85em;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  font-family: Consolas, Roboto Mono, monospace;
}

.nuxt-content ul {
  font-size: 16px;
  margin-bottom: 30px;
  word-spacing: 2px;
  line-height: 32px;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.v-application code {
  all: initial;
  all: unset;
}

.v-application a {
  text-decoration: none;
}

.nuxt-content-highlight {
  font-family: Consolas;
  font-size: 16px;
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
  font-size: 16px;
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
  margin-bottom: 15px;
}
</style>
