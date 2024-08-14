// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/global.css"],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@ant-design-vue/nuxt"],
  router: {
    middleware: ['auth']
  }
})