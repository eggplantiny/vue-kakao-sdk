# vue-kakao-plugin

---

It is a [Kakao](https://developers.kakao.com/tool) SDK plugin wrapped with Vue.js

## Intall

---

### CDN
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue-kakao-plugin@0.0.1/dist/js/vue-kakao-plugin.min.js"></script>
<script type="text/javascript">
    const apiKey = 'Your Kakao API Javascript Key'
    Vue.use(window.VueFastScroll,{ apiKey: apiKey })
</script>
```

### Yarn or NPM
```
# yarn
yarn add vue-kakao-plugin

# npm
npm install vue-kakao-plugin
```

## How to use this plugin? 🧐

```js
import Vue from 'vue'
import VueKakaoPlugin from 'vue-kakao-plugin'

const apiKey = 'Your Kakao API Javascript Key'

Vue.use(VueKakaoPlugin, { apiKey }) // You have to pass your "Kakao SDK Javascript apiKey"

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
