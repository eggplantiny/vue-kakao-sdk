function initialized () {
  if (!window.Kakao) {
    return false
  }

  if (Object.keys(window.Kakao).length === 0) {
    return false
  }

  return window.Kakao.isInitialized()
}

function initializeScript (scriptUrl, scriptId, apiKey) {
  return new Promise(resolve => {
    const script = document.createElement('script')
    script.src = scriptUrl
    script.defer = true
    script.onload = () => {
      if (!initialized()) {
        window.Kakao.init(apiKey)
      }

      resolve()
    }

    script.onerror = error => this.handleError(error)
    script.id = scriptId
    document.body.appendChild(script)
  })
}

module.exports = {
  install (Vue, options = {}) {
    let { apiKey, scriptUrl, scriptId, callback } = options
    scriptUrl = scriptUrl || 'https://developers.kakao.com/sdk/js/kakao.min.js'
    scriptId = scriptId || 'kakao_script'
    callback = callback || null

    if (!apiKey) {
      throw Error(`You have to pass 'apiKey' in options`)
    }

    const initializedScript = initialized()

    if (!initializedScript) {
      initializeScript(scriptUrl, scriptId, apiKey)
        .then(() => {
          if (typeof callback === 'function') {
            callback()
          }
        })
        .finally(() => {
          Vue.prototype.$kakao = window.Kakao
        })
    }
  }
}
