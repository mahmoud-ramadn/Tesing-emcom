// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@nuxt/icon',
    'nuxt-graphql-client',
    '@pinia/nuxt'
  ],
  elementPlus: {},
  css: ['@/assets/styles/main.scss'],
  runtimeConfig: {
    public: {
      GQL_HOST:'https://api.escuelajs.co/graphql' 
    }
  }    
});