// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode'

  ],
  colorMode: {
    classSuffix: '',
  },
  googleFonts: {
    families: {
      Poppins: true, // Load the entire family
    },
    display: 'swap', // Control the font-display setting
    subsets: 'latin', // Specify subsets
  },
  css: [
    '@/assets/css/tailwind.css',

  ],
  typescript: {
    shim: false
  },

  compatibilityDate: '2024-08-17',
  components: [{
    path: '~/components',
    pathPrefix: false,
  }],

})
