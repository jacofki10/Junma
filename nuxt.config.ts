export default defineNuxtConfig({
   app: {
    // REPLACE 'repository-name' with the name of your GitHub repository
    baseURL: '/Junma/',
    buildAssetsDir: 'assets',
  },
  // This enables Static Site Generation (SSG)
  ssr: true,
  // ... (keep your other settings)
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  i18n: {
    lazy: true,
    langDir: 'locales', // Keep this as you had it (Option 1)
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        file: 'en.json',
        name: 'English'
      },
      {
        code: 'zh',
        file: 'zh.json',
        name: '中文'
      },
      {
        code: 'es',
        file: 'es.json',
        name: 'Español'
      },
      {
        code: 'ja',
        file: 'ja.json',
        name: '日本語'
      }
    ]
  }
})
