// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  head: {
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
                rel: "stylesheet",
              href: "https://fonts.googleapis.com/css2?family=Oxygen&display=swap",
                  },
                ]
  },

  compatibilityDate: "2024-09-03",
})