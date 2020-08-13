import colors from "vuetify/es5/util/colors";

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  router: {
    base: "/"
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Pramod Devireddy",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "PramodDevireddy"
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Scientist/Engineer @ ISRO || Spacecraft Checkout Engineer || Full Stack Developer"
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@PramodDevireddy"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://domarpdev.github.io/icon.png"
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: "https://domarpdev.github.io/icon.png"
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "PramodDevireddy"
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://domarpdev.github.io/icon.png"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "icon.png" }]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",

    // Doc: https://github.com/nuxt/content
    "@nuxt/content"
  ],

  pwa: {
    manifest: {
      name: "Pramod Devireddy",
      short_name: "Pramod",
      description: "Personal Portfolio Website",
      icons: [
        {
          src: "icon.png",
          sizes: "360x360",
          type: "image/png"
        }
      ],
      start_url: "../",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#4C8BF4",
      lang: "en"
    }
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-material-oceanic.css"
      }
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
