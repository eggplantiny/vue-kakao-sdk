import vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $kakao: typeof Kakao
  }
}

declare module '@nuxt/types' {
  interface Context {
    $kakao: typeof Kakao
  }
  
  interface NuxtAppOptions {
    $kakao: typeof Kakao
  }
}
