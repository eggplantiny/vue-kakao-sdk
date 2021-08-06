import vue, { PluginFunction } from 'vue'

interface VueKakaoSdkOptions {
  apiKey: string
  scriptUrl?: string
  scriptId?: string
  callback: () => void
}

declare module 'vue/types/vue' {
  export interface VuetifyDialogPlugin {
    install: PluginFunction<VueKakaoSdkOptions>
  }

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
