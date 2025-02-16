import Vue from "vue";
// import VueTypedJs from 'vue-typed-js'
// Vue.use(VueTypedJs)

export default {
  // Target: https://go.nuxtjs.dev/config-target

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "",
    title: "Zack Borges Portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/z-icon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["boxicons/css/boxicons.min.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  target: "static",

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],
  pages: false,

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    defaultAssets: { icons: "fa" },
    theme: {
      themes: {
        dark: {
          primary: "#0a192f",
          slate: "#8892b0",
          accent: "#37474F",
          secondary: "#8892b0",
          error: "#DD2C00",
          success: "#00E676",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // analyze: true,
    // // or
    // analyze: {
    //   analyzerMode: 'static'
    // }
  },

  compatibilityDate: "2025-02-14",
};
