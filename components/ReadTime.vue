/*
 * File         : ReadTime.vue
 * Project      : Portfolio
 * Created Date : Sunday, Sep 13th 2020, 5:16:20 PM
 * Author       : Pramod Devireddy
 * 
 * Last Modified: Saturday, 26th September 2020 9:07:00 pm
 * Modified By  : Pramod Devireddy
 * 
 * Copyright (c)2020 - Pramod Devireddy
 * ***************************************************************
 */


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
    },
  },
};
</script>

<style>
</style>