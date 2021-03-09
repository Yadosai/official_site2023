import * as FontAwesome from './builds/font-awesome'
import * as EventsRouting from './builds/events-routing'

export default {
  target: 'static',

  // SSR is off
  ssr: false,

  htmlAttrs: {
    lang: 'ja',
    prefix: 'og: http://ogp.me/ns#'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s | 2021年度やどかり祭-筑波大学宿舎祭',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '2021年度やどかり祭-筑波大学宿舎祭-'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'here is url' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '2021年度やどかり祭-筑波大学宿舎祭-'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'here is description'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'here is image'
      },
      { name: 'twitter:card', content: 'summary' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/style.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '@/plugins/vue-awesome-swiper', ssr: false }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/bulma', 'nuxt-svg-loader'],

  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics',
    ['@nuxtjs/fontawesome', { component: 'fa', suffix: true }]
  ],

  generate: {
    routes() {
      return EventsRouting.events.map((event) => {
        return `events/${event}`
      })
    }
  },

  fontawesome: {
    icons: {
      solid: FontAwesome.solid,
      regular: FontAwesome.regular,
      brands: FontAwesome.brands
    }
  },

  styleResources: {
    scss: ['@/assets/scss/_mixins.scss', '@/assets/scss/_variables.scss']
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  svgLoader: {
    svgoConfig: {
      plugins: [
        { prefixIds: false } // Disables prefixing for SVG IDs
      ]
    }
  },

  googleAnalytics: {
    id: 'UA-160309461-1'
  }
}
