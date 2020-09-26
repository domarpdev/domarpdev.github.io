---
title: Create Medium Style Blog Theme with Nuxt JS
description: In this blog post with the power of Nuxt Content module and using the awesome Vuetify, we create a Medium-Styled blog site.
img: blog/medium-style-blog-theme.jpg
alt: Medium Style Blog Theme
author:
  name: Pramod Devireddy
---

[Source Code: https://github.com/domarpdev/domarpdev.github.io](https://github.com/domarpdev/domarpdev.github.io)

## Why Nuxt.js?

Nuxt JS is an open source higher level front end framework built on top of Vue js. It really makes the web development simple and powerful. Let's see some of Nuxt.js features which makes it a great framework:

- Easy to create universal applications
- Pre-rendered pages
- Great project structure
- Easy page routing
- Lot of useful modules
- Good documentation
- Growing Community

Nuxt JS makes the development of Vue apps a much easier. I highly recommended to go ahead and give it a try to see it for yourself. You can find more details about Nuxt JS from their [website](https://nuxtjs.org/) and check some awesome things made with Nuxt JS at [Github](https://github.com/nuxt-community/awesome-nuxt).

## Why `@nuxt/content`?

Nuxt community created `@nuxt/content` module to empower Nuxt applications. using Nuxt Content module we can write articles, blog posts and literally any content easily with simple Markdown.

`@nuxt/content` also supports JSON, YAML, XML & CSV through a MongoDB like API which acts as a Headless Content Management System.

## Why Vuetify?

Vuetify is a Vue UI Library with components based on Google Material Design. The Library contains almost everything you need for building a rich and nice website with vue. Some of good things about using vuetify:

- It has an active & vibrant community
- Easy to use & remember without any reference guide
- Helps in Rapid development
- Continuous Updates
- Good documentation & a nice community

Ok, so let's stop it here and jump to the task. In this blog post I will just show how a blog post is created with nuxt content and styled with vuetify.

## Let's Get Started!

Add `@nuxt/content` module to your nuxt application:

```bash
$ yarn add @nuxt/content
```

Add `@nuxt/content` to the `modules` section of `nuxt.config.js`:

```js{4}[nuxt.config.js]
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxt/content"
  ],
```

Add `vuetify` to your nuxt application:

```bash
$ yarn add @nuxtjs/vuetify -D
```

You can add `prism-themes` for language syntax highlighting:

```bash
$ yarn add prism-themes
```

## Project Structure

Create a folder with name `content` inside the project folder if not created by `@nuxt/content`. Then create a sub-folder with name `blog` inside the folder `content`. `content/blog` is the folder where we write all our blog posts in markdown files.

Similarly, create a sub-folder `blog` inside `pages` folder for a new page route `/blog`. Create `_slug.vue` and `index.vue` inside `pages/blog` folder.

Let us create two components:

- ReadTime.vue: to calculate approximate read time for the blog post
- PrevNextBlog.vue: to generate links to previous and next blog posts

Now the project folder structure will look something like this:

```
│
├── components
│   ├── PrevNextBlog.vue
│   └── ReadTime.vue
│
├── content
│   └── blog
│       ├── blog-1.md
│       ├── blog-2.md
│       └── blog-3.md
│
├── pages
│   └── blog
│       ├── _slug.vue
│       └── index.vue
```

## Components

### `ReadTime.vue`

Assuming that an average reader can read 200 words per minute let us create `ReadTime.vue`

```vue[components/ReadTime.vue]
<template>
  <span>{{ readTime }} min read</span>
</template>

<script>
export default {
  name: "ReadTime",

  props: ["content"],

  computed: {
    readTime() {
      var minutes = 0;
      const contentText = JSON.stringify(this.content);
      const words = contentText.split(" ").length;
      const wordsPerMinute = 200;
      minutes = Math.ceil(words / wordsPerMinute);
      return minutes;
    }
  }
};
</script>
```

### `PrevNextBlog.vue`

```vue[components/PrevNextBlog.vue]
<template>
  <v-row>
    <v-col>
      <NuxtLink
        v-if="prev"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        class="prev-blog-post text-truncate"
      >
        <v-icon>mdi-arrow-left</v-icon> &nbsp;
        {{ prev.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </v-col>
    <v-col>
      <v-row justify="end">
        <NuxtLink
          v-if="next"
          :to="{ name: 'blog-slug', params: { slug: next.slug } }"
          class="next-blog-post text-truncate"
        >
          {{ next.title }} &nbsp;
          <v-icon>mdi-arrow-right</v-icon>
        </NuxtLink>
        <span v-else>&nbsp;</span>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
};
</script>

<style>
.prev-blog-post {
  text-decoration: none;
  color: #000 !important;
}

.prev-blog-post:hover {
  color: rgb(92, 148, 252) !important;
}

.next-blog-post {
  text-decoration: none;
  color: #000 !important;
}

.next-blog-post:hover {
  color: rgb(92, 148, 252) !important;
}
</style>
```

## Blog Design

### `blog/index.vue`

Here, we will list down all the blog posts we craeted under `content/blog` folder. And we will display Title, Description and title image for each blog post in card format.

```vue[pages/blog/index.vue]
<template>
  <div>
    <v-container>
      <h1 class="blog-header">Blog Posts</h1>

      <div class="d-flex flex-wrap justify-center">
        <v-card
          class="ma-5"
          elevation="3"
          v-for="post of posts"
          :key="post.slug"
          width="500"
        >
          <NuxtLink
            class="post-card"
            :to="{ name: 'blog-slug', params: { slug: post.slug } }"
          >
            <v-img :src="post.img" contain> </v-img>
            <v-card-title>{{ post.title }}</v-card-title>
            <v-card-subtitle>by {{ post.author.name }}</v-card-subtitle>
            <v-card-subtitle class="pt-0 pb-3">{{
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
import { mapMutations } from "vuex";

export default {
  name: "Blog",

  async asyncData({ $content, params }) {
    const posts = await $content("blog", params.slug)
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      posts
    };
  },

  data: () => ({
    title: "Blog - Pramod Devireddy",
    description: "Blog Posts by Pramod Devireddy"
  }),

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        },
        // Open Graph
        {
          hid: "og:title",
          property: "og:title",
          content: this.title
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.description
        },
        // // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.description
        }
      ]
    };
  },

  created: function() {
    this.$store.commit("SET_APP_BAR_COLOR", "#FFF");
    this.$store.commit("SET_APP_TITLE_COLOR", "#000");
  }
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
  color: rgb(92, 148, 252);
}
</style>
```

### `blog/_slug.vue`

This is used for dynamic rendering of each blog post markdown file. We will fetch the content and format the front-matter of the blog post according to our requirement. We need a blog like medium. So we need to style accordingly. We will add:

- Blog Post Title
- Blog Post Description
- Author Image
- Author Name
- Bog Post created time
- Time for reading blog post
- Social share links

...and the content style similar to medium blog content.

```vue[pages/blog/_slug.vue]
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
    PrevNextBlog
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
    }
  },

  head() {
    return {
      title: this.post.title,
      titleTemplate: "%s - Pramod Devireddy",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.description
        },
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.post.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.post.description
        },
        { hid: "og:type", property: "og:type", content: "article" },

        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.post.title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.post.description
        },

        {
          hid: "og:image",
          property: "og:image",
          content: "https://domarpdev.github.io/" + this.post.img
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: "https://domarpdev.github.io/" + this.post.img
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: this.post.title
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://domarpdev.github.io/" + this.post.img
        }
      ]
    };
  },

  created: function() {
    this.$store.commit("SET_APP_BAR_COLOR", "#FFF");
    this.$store.commit("SET_APP_TITLE_COLOR", "#000");
  }
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
```

## Writing Blog Posts in Markdown

Write the blog details in front-matter and everything else in markdown. You can even mix html along with html. But just follow the [rules](https://content.nuxtjs.org/writing#html) properly. So, the sample content of a markdown blog post will be something like this:

### `blog-1.md`

````[blog-1.md]
---
title: Sample Blog
description: Learning how to use @nuxt/content & vuetify
to create a blog like medium
img: blog/blog-1.jpg
alt: my first blog post
author:
  name: Pramod Devireddy
  bio: All about Nuxt Content for blogging
---

## This is a heading

This is some more info

### This is a sub heading

This is some more info

### This is another sub heading

This is some more info

## This is another heading

This is some more info

```css{}[samp.css]
.nuxt-content p {
  font-size: 16px;
  margin-bottom: 30px;
  word-spacing: 2px;
  line-height: 32px;
}

.nuxt-content p code,
.nuxt-content h3 code {
  color: #476582;
  padding: 0.25rem 0.5rem;
  margin: 0;
  font-size: 0.85em;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  font-family: Consolas, Roboto Mono, monospace;
}
```

````

## Summing up...

This whole website is made with Nuxt JS, blog pages are made using nuxt content and styled using Vuetify.
However
You can find my full source code in my [Github Repository](https://github.com/domarpdev/domarpdev.github.io). If you want to contribute, please Fork it.
