// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VMenu,
  VSwitch,
  VDialog,
  VCard,
  VProgressLinear,
  VBreadcrumbs,
  VForm,
  VTextField,
  VSelect,
  VDatePicker,
  VSubheader,
  VDataTable,
  VCheckbox
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import i18n from './i18n/index'
import store from './store/index.js'
import './utils/ajax-helper'
import configSetting from './use-config'
import {
  ROUTER_REFASH
} from './store/const-name'
if (configSetting.debug.mock) {
  require('./api/mock/index')
}

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VMenu,
    VSwitch,
    VDialog,
    VCard,
    VProgressLinear,
    VBreadcrumbs,
    VForm,
    VTextField,
    VSelect,
    VDatePicker,
    VSubheader,
    VDataTable,
    VCheckbox
  },
  theme: {
    // primary: '#ee44aa',
    // secondary: '#424242',
    // accent: '#82B1FF',
    // error: '#FF5252',
    // info: '#2196F3',
    // success: '#4CAF50',
    // warning: '#FFC107'
  }
})

Vue.config.productionTip = false

let vm = new Vue({
  el: '#app',
  i18n,
  store,
  router,
  render: h => h(App),
  created() {
    global.$t = this.$t
  }
})

window.vm = vm
Vue.use(vm)

/**
 * @deprecated 全局后置钩子
 */
router.afterEach((to, from) => {
  vm.$store.dispatch(ROUTER_REFASH, {
    path: to.path,
    matched: to.matched,
    params: to.params
  })
  // UtilsHelper.clear()
})
