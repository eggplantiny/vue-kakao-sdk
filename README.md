# vue-kakao-sdk

---

It is a [Kakao](https://developers.kakao.com/tool) SDK plugin wrapped with Vue.js

## Intall

---

### Yarn or NPM
```
# yarn
yarn add vue-kakao-sdk

# npm
npm install vue-kakao-sdk
```

### CDN
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue-kakao-sdk@0.0.3/dist/js/vue-kakao-sdk.min.js"></script>
<script type="text/javascript">
    const apiKey = 'Your Kakao API Javascript Key'
    Vue.use(window.VueKakaoSdk,{ apiKey: apiKey })
</script>
```

## How to use this plugin? 🧐

```js
import Vue from 'vue'
import VueKakaoSdk from 'vue-kakao-sdk'

const apiKey = 'Your Kakao API Javascript Key'

// You have to pass your "Kakao SDK Javascript apiKey"
Vue.use(VueKakaoSdk, { apiKey })

// then you can call kakao sdk with
// this.$kakao or window.Kakao
// in Vue Component
...{
  methods: {
    async sendKakaoLink ({ objectType, content, buttons } = {}) {
      objectType = objectType || this.Link.objectType
      content = content || this.Link.content
      buttons = buttons || this.Link.buttons

      this.$kakao.Link.sendDefault({
        objectType,
        content,
        buttons
      })
    }
  }
}
```

## Author

[eggplantiny](https://github.com/eggplantiny)
