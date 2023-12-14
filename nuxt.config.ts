import { nodePolyfills } from 'vite-plugin-node-polyfills'


export default defineNuxtConfig({
  runtimeConfig: {
    BLOG_CONTRACT: "0x2f7C319eDf93364976E548E659f3400d5A511Ff0",
    public: {
      PROJECT_ID: "80c55c1a9efb7ba1d32582051978a81d", // ID WALLETCONNECT
      TEST_VARIABLE: "Hello Dotenv",
    },
  },

  ssr: false,
  devtools: { enabled: false },
    app: {
      head: {
        htmlAttrs: { lang: "en" },
        title: 'DRC20 Bot',
        meta: [
          { hid: 'description', name: 'description', content: 'Location longue durée de voitures de qualité à Nantes, Angers et en Vendée pour les entreprises et professions libérales. Découvrez notre large gamme de véhicules disponibles en LLD.' },
          { name: 'author', content: 'WeFundz' },
          { hid: 'robots', name: 'robots', content: 'index, follow' },
          { name: 'geo.placename', content: 'Nantes, Angers, Vendée, France' },
          { name: 'language', content: 'fr' },
          { name: 'keywords', content: 'Location longue durée, Voitures, Maine-et-Loire, Vendée, Nantes, Angers, Location entreprise, AutoLLD, LLD, LLD entreprise' },
          { property: 'og:image', content: 'URL de l\'image à afficher sur la page d\'accueil' },
          { name: 'twitter:image', content: 'URL de l\'image à afficher sur Twitter pour la page d\'accueil' },
        ],
      },
    },
    naiveui: {
      colorModePreference: 'light',
    },
    modules: [
      "@bg-dev/nuxt-naiveui",
      '@nuxtjs/google-fonts',
      '@nuxtjs/i18n',
      [
        '@pinia/nuxt',
        {
          autoImports: ['defineStore', 'acceptHMRUpdate'],
        },
      ],
    ],
    imports: {
      dirs: ["stores"],
    },
    css: [
    "@/assets/main.scss",
    ],
    plugins: [
      '~/plugins/i18n.ts',
      '~/plugins/vue-dapp.js',
    ],
    buildModules: [
      'nuxt-naiveui',
    ],
    build: {
        transpile: [
        ],
      },
      googleFonts: {
        families: {
          'Radio+Canada': {
            wght: [100, 400, 500, 600, 700, 800],
            ital: [100]
          },
        }
      },
      imports: {
        dirs: ['stores'],
      },
    vite: {
      plugins: [nodePolyfills()],
      css: {
        preprocessorOptions: {
          scss: {
          },
        },
      },
    },
  });
