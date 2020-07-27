<template>
  <v-app>
    <v-app-bar app flat color="#4C8BF4" dark>
      <v-toolbar-title
        style="margin-left: 5%; font-weight: 300; font-size: x-large; letter-spacing: 1px;"
      >
        <h1 class="hero">Pramod Devireddy</h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-chip class="ma-2" outlined link>Skills</v-chip>
        <v-chip class="ma-2" outlined link>Projects</v-chip>
        <v-chip class="ma-2" outlined link>Contact</v-chip>
      </div>
    </v-app-bar>

    <v-main>
      <Home />
    </v-main>

    <v-footer app absolute>
      <v-row>
        <v-col></v-col>
        <v-col class="text-center">
          <span
            style="font-size: 16px; font-weight: 300; letter-spacing: 1px; line-height: 36px;"
          >&copy; 2020 - Present Pramod Devireddy</span>
        </v-col>
        <v-col class="text-right">
          <v-btn
            class="mx-2"
            icon
            color="#DA5B50"
            target="_blank"
            href="mailto:devireddy.pramod@gmail.com"
          >
            <v-icon>mdi-gmail</v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            icon
            color="#0077BF"
            target="_blank"
            href="https://www.linkedin.com/in/pramod-devireddy/"
          >
            <v-icon>mdi-linkedin-box</v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            icon
            color="black"
            target="_blank"
            href="https://github.com/Pramod-Devireddy"
          >
            <v-icon>mdi-github-circle</v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            icon
            color="#1A91DA"
            target="_blank"
            href="https://twitter.com/PramodDevireddy"
          >
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            icon
            color="black"
            target="_blank"
            href="https://codepen.io/domarpdev"
          >
            <v-icon>mdi-codepen</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import Home from "@/views/Home";

export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.hero {
  font-size: 24px;
  font-weight: 400;
}
</style>
