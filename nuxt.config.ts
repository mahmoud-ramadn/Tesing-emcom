export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@nuxt/icon',
    'nuxt-graphql-client',
    '@pinia/nuxt',
    '@vueuse/motion/nuxt'
  ],
  elementPlus: {},
  css: ['@/assets/styles/main.scss'],
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://api.escuelajs.co/graphql',
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },
});
