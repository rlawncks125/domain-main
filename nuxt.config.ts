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
      link: [
        // 매니패스트
        {
          rel: "manifest",
          href: "/manifest.json",
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
