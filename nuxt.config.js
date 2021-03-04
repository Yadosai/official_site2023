import * as FontAwesome from './builds/font-awesome'
import * as EventsRouting from './builds/events-routing'

export default {
  target: 'static',

  // SSR is off
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'official_site2021',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/style.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '@/plugins/vue-awesome-swiper', ssr: false }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  fontawesome: {
    icons: {
      solid: FontAwesome.solid,
      regular: FontAwesome.regular,
      brands: FontAwesome.brands
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/bulma', 'nuxt-svg-loader'],


  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics',
    ['@nuxtjs/fontawesome', { component: 'fa', suffix: true }],
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

  googleAnalytics: {
    id: 'UA-XXX-X'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  svgLoader: {
    svgoConfig: {
      plugins: [
        { prefixIds: false } // Disables prefixing for SVG IDs
      ]
    }
  }
}
