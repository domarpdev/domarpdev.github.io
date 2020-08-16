<template>
  <div>
    <About />
  </div>
</template>

<script>
import About from "@/components/About";
import { mapMutations } from "vuex";

export default {
  components: {
    About,
  },
  data: () => ({
    title: "Pramod Devireddy",
    description:
      "Scientist/Engineer @ ISRO || Spacecraft Checkout Engineer || Full Stack Developer",
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
      this.$store.commit("SET_APP_BAR_COLOR", "#4C8BF4")
      this.$store.commit("SET_APP_TITLE_COLOR", "#FFF")
  }
};
</script>

<style>
</style>