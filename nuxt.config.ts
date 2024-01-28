// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },

  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter&family=Manrope:wght@500;600;700&family=Source+Serif+Pro:wght@600&display=swap' }]
    }
  },


  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/content'
  ],

  // Defaults options
  tailwindcss: {
    viewer: true,
  }
})
