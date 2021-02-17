# vue-kakao-sdk

[Kakao SDK](https://developers.kakao.com/tool) plugin wrapped with Vue.js

Now you can easily use Kakao SDK with Vue.js

Just intialize plugin and type 

```js
this.$kakao.Auth

// or

this.$kakao.Link
```

## Intall

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
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue-kakao-sdk@0.0.4/dist/js/vue-kakao-sdk.min.js"></script>
<script type="text/javascript">
    const apiKey = 'Your Kakao API Javascript Key'
    Vue.use(window.VueKakaoSdk,{ apiKey: apiKey })
</script>
```

## How to use this plugin? 🧐

You can play an example on [codepan](https://codepen.io/sigran0/pen/WNopPZw)

```js
//  main.js
import Vue from 'vue'
import VueKakaoSdk from 'vue-kakao-sdk'

const apiKey = 'Your Kakao API Javascript Key'

// You have to pass your "Kakao SDK Javascript apiKey"
Vue.use(VueKakaoSdk, { apiKey })
```

```
//  App.vue

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
    },
    loginWithKakao () {
      this.$kakao.Auth.login({
        success: function(authObj) {
          alert(JSON.stringify(authObj))
        },
        fail: function(err) {
          alert(JSON.stringify(err))
        },
      })
    },
    shareStoryWeb () {
      this.$kakao.Story.share({
        url: 'https://github.com/eggplantiny/vue-kakao-sdk',
        text: 'Test story share with vue-kakao-sdk'
      })
    }
  }
}
```

## Options

|Key|Description|Default|
|------|---|---|
|* apiKey|Your Kakao SDK Javascript Key|* required|
|scriptUrl|Link of kakao SDK|https://developers.kakao.com/sdk/js/kakao.min.js|
|scriptId|Script ID of kakao SDK|kakao_script|
|callback|Callback function of script loaded|null|

## Author

[eggplantiny](https://github.com/eggplantiny)

## License
MIT
