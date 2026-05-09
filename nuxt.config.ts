export default defineNuxtConfig({
  app: {
    // REPLACE 'repository-name' with the name of your GitHub repository
    baseURL: "/",
    buildAssetsDir: "assets",
  },
  // This enables Static Site Generation (SSG)
  ssr: true,
  // ... (keep your other settings)
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        file: "en.json",
        name: "English",
      },
      {
        code: "zh",
        file: "zh.json",
        name: "中文",
      },
      {
        code: "es",
        file: "es.json",
        name: "Español",
      },
      {
        code: "ja",
        file: "ja.json",
        name: "日本語",
      },
    ],
    // Add this new section right here 👇
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // Only redirects when they visit the main domain '/'
      alwaysRedirect: false,
      fallbackLocale: "en",
    },
  },
});
