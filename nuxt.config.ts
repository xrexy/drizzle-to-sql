// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    '@pinia/nuxt',
    'nuxt-monaco-editor',
    "nuxt-icon"
  ],
  tailwindcss: { viewer: false },
  colorMode: { preference: 'system', fallback: 'dark', classSuffix: '' },
  shadcn: { prefix: '' },
})