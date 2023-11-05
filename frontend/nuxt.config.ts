// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nuxt-icon'],
  ui: {
    global: true,
    icons: ['iconamoon']
  },
  css: ['~/assets/sass/main.sass'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/_vars.sass" as *\n'
        }
      }
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL
    }
  }
})
