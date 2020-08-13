<template>
  <v-app>
    <v-app-bar app flat color="#4C8BF4" :height="$vuetify.breakpoint.smAndUp ? 75 : 100" dark>
      <v-row :no-gutters="$vuetify.breakpoint.smAndDown">
        <v-col :cols="12" :sm="6">
          <h1 :class="$vuetify.breakpoint.smAndUp ? 'text-left ml-10' : 'text-center mt-5'">
            <nuxt-link to="/" class="hero">Pramod Devireddy</nuxt-link>
          </h1>
        </v-col>
        <v-col :class="$vuetify.breakpoint.smAndUp ? 'text-right mr-5' : 'text-center'">
          <div>
            <v-chip class="ma-1" outlined link>Skills</v-chip>
            <v-chip class="ma-1" outlined link>Projects</v-chip>
            <v-chip class="ma-1" outlined link :to="'/blog'">Blog</v-chip>
            <v-chip class="ma-1" outlined link>Contact</v-chip>
          </div>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>

    <v-footer app absolute>
      <v-row :no-gutters="$vuetify.breakpoint.mdAndDown">
        <v-col :cols="4"></v-col>
        <v-col :cols="12" :md="4" class="text-center">
          <span
            style="font-size: 16px; font-weight: 300; letter-spacing: 1px; line-height: 36px;"
          >&copy; {{ new Date().getFullYear() }} - Pramod Devireddy</span>
        </v-col>
        <v-col
          :cols="12"
          :md="4"
          :class="$vuetify.breakpoint.mdAndUp ? 'text-right' : 'text-center'"
        >
          <v-btn
            class="mx-1"
            icon
            color="#DA5B50"
            target="_blank"
            href="mailto:devireddy.pramod@gmail.com"
          >
            <v-icon>mdi-gmail</v-icon>
          </v-btn>
          <v-btn
            class="mx-1"
            icon
            color="#0077BF"
            target="_blank"
            href="https://www.linkedin.com/in/pramod-devireddy/"
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn
            class="mx-1"
            icon
            color="black"
            target="_blank"
            href="https://github.com/Pramod-Devireddy"
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn
            class="mx-1"
            icon
            color="#1A91DA"
            target="_blank"
            href="https://twitter.com/PramodDevireddy"
          >
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn
            class="mx-1"
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
export default {};
</script>

<style>
.hero {
  font-size: 24px;
  font-weight: 400;
  color: white !important;
  text-decoration: none;
  outline: none;
}

::-webkit-scrollbar {
  width: 12px;
  margin: 0 3px;
  padding: 0 3px;
}

::-webkit-scrollbar-track {
  border-radius: 5px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
}

::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: #5b95f8;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #4387fd;
}
</style>