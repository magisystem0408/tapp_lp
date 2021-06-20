export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {

    title: 'お金のプロが教える初心者でもわかる資産形成術！「ほったらかし投資」',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {name:'description' ,content: 'お金は欲しいけど、増やす為の知識や自己資金、手間をかける時間がない！そんなあなたの為の初心者でもわかるお金の勉強会！年収500万円以上の正社員・公務員・勤務医・教員の方に向け、お金のプロが少額、手間入らず、低リスクの投資・資産形成の仕組みを徹底解説！'},
      {property:'og:type', content:"website"},
      {property:'og:url', content:"https://tapp-lp.web.app"},
      {property:'og:image', content:"https://seminar.tapp-co.jp/wp-content/themes/tapp_seminar/common/images/ogimage-webinar-neg.png"},
      {property:'og:description', content:"お金は欲しいけど、増やす為の知識や自己資金、手間をかける時間がない！そんなあなたの為の初心者でもわかるお金の勉強会！年収500万円以上の正社員・公務員・勤務医・教員の方に向け、お金のプロが少額、手間入らず、低リスクの投資・資産形成の仕組みを徹底解説！"},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/adobe-fonts',
    '~plugins/vue-scrollto',
    { src: '~/plugins/aos', ssr: false },
    {src: '~/plugins/swiper',ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
    ['@nuxtjs/moment',['ja']],
    ['vue-scrollto/nuxt',{duration:700}],
  ],
  styleResources:{
    scss:['./assets/css/_variables.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor:[
      'vue-awesome-swiper'
    ]
  },
  vuetify: {
    defaultAssets: {
      font: false,
      icons:false
    }
  }
}
