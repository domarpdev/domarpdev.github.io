<template>
  <v-container>
    <v-row justify="center">
      <v-col lg="5" md="8" sm="10">
        <h1 class="blog-title">{{ post.title }}</h1>

        <h4 class="blog-description">{{ post.description }}</h4>

        <div class="d-flex flex-wrap blog-details">
          <v-avatar class="elevation-10" size="55">
            <img src="pramod-devireddy-96x96.jpg" alt="Pramod Devireddy" />
          </v-avatar>
          <div class="ml-3 mt-1">
            <div class="blog-author">Pramod Devireddy</div>
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
            <v-btn class="mx-n1" icon color="#757575" target="_blank" @click="linkedInPost()">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon color="#757575" target="_blank" @click="facebookPost()">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
          </div>
        </div>

        <nuxt-content :document="post" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ReadTime from "@/components/ReadTime";
import { mapMutations } from "vuex";

export default {
  name: "PageSlug",

  async asyncData({ $content, params }) {
    const post = await $content("blog", params.slug).fetch();
    return { post };
  },

  components: {
    ReadTime,
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

.v-application code {
  all: initial;
  all: unset;
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
