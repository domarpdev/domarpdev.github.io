/*
 * File         : PrevNextBlog.vue
 * Project      : Portfolio
 * Created Date : Saturday, Sep 26th 2020, 1:34:01 PM
 * Author       : Pramod Devireddy
 * 
 * Last Modified: Saturday, 26th September 2020 2:05:09 pm
 * Modified By  : Pramod Devireddy
 * 
 * Copyright (c)2020 - Pramod Devireddy
 * ***************************************************************
 */


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
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
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