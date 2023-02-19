import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vite-pwa/nuxt"],
  css: ["~/assets/scss/header.scss", "~/assets/tailwind.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "charset",
          content: "utf-8",
        },
      ],
      script: [
        // 구글 에드 센스
        {
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
          "data-ad-client": "ca-pub-9084840519993362",
          async: true,
          crossorigin: "anonymous",
          type: "text/javascript",
        },
      ],
    },
  },

  // nitro Storage
  nitro: {
    // https://nuxt.com/docs/guide/directory-structure/server#server-storage
    storage: {
      db: {
        driver: "fs",
        base: "./dbData",
      },
    },
  },

  runtimeConfig: {
    // public
    public: {
      apiServer: "",
      publicString: "",
    },
    // private
    praviteString: "",
  },

  pwa: {
    registerType: "autoUpdate",
    injectRegister: null,
    manifest: {
      name: "Nuxt Vite PWA",
      short_name: "NuxtVitePWA",
      theme_color: "#4DBA87",
      icons: [
        {
          src: "img/icons/logo_x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "img/icons/logo_x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "img/icons/logo_x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
    workbox: {
      // 캐시저장할 파일
      globPatterns: ["**/*.{js,css,html,vue,ico,png,svg}"],
      navigateFallback: "/",
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: false,
      /* other options */
    },
  },
});

// runtimeConfig 타입 정의
declare module "@nuxt/schema" {
  interface RuntimeConfig {
    //     apiBase: string
    praviteString: string;
  }
  interface PublicRuntimeConfig {
    apiServer: string;
    publicString: string;
  }
}
