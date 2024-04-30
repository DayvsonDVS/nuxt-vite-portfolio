import { resolve } from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['ion-icon'].includes(tag)
    }
  },
  app: {
    head: {
      title: 'Dayvson Portfólio',
      script: [
        {
          type: 'module',
          src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
        },
        {
          src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'
        }
      ]
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/breakpoints.scss";`
        }
      }
    }
  },
  css: ['normalize.css', '@/assets/scss/main.scss', '@/assets/scss/vars.scss'],
  components: [{ path: '@/components', pathPrefix: false }],
  dir: {
    pages: 'components/pages/'
  }
})
