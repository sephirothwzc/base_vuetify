/**
 * axios 帮助类
 */
import axios from 'axios'
import Dialog from '../components/dialog/index'
import {
  PROGRESS_LOADING
} from '../store/const-name'

// region axios filter
axios.interceptors.request.use(
  config => {
    // if (store.state.token) {
    //   // 判断是否存在token，如果存在的话，则每个http header都加上token
    //   config.headers.Authorization = `token ${store.state.token}`
    // }
    // 加入headers 语言
    config.headers.i18n = window.vm.$i18n.locale
    // 开启loading
    window.vm.$store.dispatch(PROGRESS_LOADING, {
      key: config.url,
      loadingState: true
    })
    return config
  },
  err => {
    // Vue.prototype.$Loading.error()
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  response => {
    window.vm.$store.dispatch(PROGRESS_LOADING, {
      key: response.config.url,
      loadingState: false
    })
    // 响应拦截器
    return response.data
  },
  error => {
    window.vm.$store.dispatch(PROGRESS_LOADING, {
      key: error.config.url,
      loadingState: false
    })
    // Vue.prototype.$Loading.error()
    // Message.error(error.message)
    Dialog.messageShow({
      title: window.vm.$t('ajaxErrTitle'),
      content: error.config.url + error.message
    })
    return Promise.reject(error)
  }
)
// endregion axios filter end

// region Promise.prototype.finally
Object.defineProperty(Promise.prototype, 'finally', {
  value: function (callback) {
    let P = this.constructor
    return this.then(
      value => P.resolve(callback()).then(() => value),
      reason =>
      P.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
})
// endregion Promise.prototype.finally end
