<template>

  <v-app>

    <v-app-bar app flat class="app-bar" :color="appBarColor" :height="$vuetify.breakpoint.smAndUp ? 75 : 100" dark>

      <v-row align="center" :no-gutters="$vuetify.breakpoint.smAndDown">

        <v-col :cols="12" :md="6" :sm="6" :xs="12">

          <h1 :class="
            $vuetify.breakpoint.smAndUp
              ? 'text-left ml-10'
              : 'text-center mt-5'
          ">

            <nuxt-link to="/" class="hero" :style="{ color: appTitleColor }">
              Pramod Devireddy
            </nuxt-link>

          </h1>

        </v-col>

        <v-col :cols="12" :md="6" :sm="6" :xs="12" :class="
          $vuetify.breakpoint.smAndUp
            ? 'text-right pr-10 pt-3'
            : 'text-center mb-5'
        ">

          <v-btn :color="appTitleColor" class="nav-button" text rounded>
            Skills
          </v-btn>

          <v-btn :color="appTitleColor" class="nav-button" text rounded>
            Projects
          </v-btn>

          <v-btn :color="appTitleColor" class="nav-button" text rounded :to="'/blog'">
            Blog
          </v-btn>

          <v-btn :color="appTitleColor" class="nav-button" text rounded>
            Contact
          </v-btn>

        </v-col>

      </v-row>

    </v-app-bar>

    <v-main>

      <Nuxt />

    </v-main>

    <v-footer app absolute class="py-3">

      <v-row no-gutters>

        <v-col :cols="4"></v-col>

        <v-col :cols="12" :md="4" class="text-center">

          <span style="
              font-size: 16px;
              font-weight: 300;
              letter-spacing: 1px;
              line-height: 36px;
            ">
            &copy; {{ new Date().getFullYear() }} Pramod Devireddy
          </span>

        </v-col>

        <v-col :cols="12" :md="4" :class="$vuetify.breakpoint.mdAndUp ? 'text-right' : 'text-center'">

          <v-btn class="mx-1" icon color="#DA5B50" target="_blank" href="mailto:devireddy.pramod@gmail.com">

            <v-icon>mdi-gmail</v-icon>

          </v-btn>

          <v-btn class="mx-1" icon color="#0077BF" target="_blank" href="https://www.linkedin.com/in/pramod-devireddy/">

            <v-icon>mdi-linkedin</v-icon>

          </v-btn>

          <v-btn class="mx-1" icon color="black" target="_blank" href="https://github.com/Pramod-Devireddy">

            <v-icon>mdi-github</v-icon>

          </v-btn>

          <v-btn class="mx-1" icon color="#1A91DA" target="_blank" href="https://twitter.com/PramodDevireddy">

            <v-icon>mdi-twitter</v-icon>

          </v-btn>

          <v-btn class="mx-1" icon color="black" target="_blank" href="https://codepen.io/domarpdev">

            <v-icon>mdi-codepen</v-icon>

          </v-btn>

        </v-col>

      </v-row>

    </v-footer>

  </v-app>

</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["appBarColor",
      "appTitleColor"]),
  },
};
</script>

<style>
.html {
  overflow-y: auto;
}

.app-bar {
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05) !important;
}

.hero {
  font-size: 24px;
  font-weight: 300;
  text-decoration: none;
  outline: none;
}

.nav-button {
  font-weight: 300 !important;
  font-size: 16px !important;
  text-transform: none;
  padding: 0px 5px !important;
  letter-spacing: 0px;
}

::-webkit-scrollbar {
  width: 12px;
  height: 10px;
  margin: 0 3px;
  padding: 0 3px;
}

::-webkit-scrollbar-track {
  border-radius: 5px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
}

::-webkit-scrollbar-thumb {
  border-radius: 6px;
  border: 2px solid rgb(231, 231, 231);
  background-color: #a8a8a8;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8a8a8;
}
</style>

