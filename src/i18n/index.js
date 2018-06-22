/*
 * @Author: 吴占超
 * @Date: 2018-04-26 10:09:32
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-08 10:54:18
 */
import Vue from 'vue'
import configSetting from '../use-config'
import VueI18n from 'vue-i18n'
import UtilsHelper from '../utils/utils-helper'
import localeList from '../i18n/localeList'

Vue.use(VueI18n)

let messages = {}
localeList.language.forEach(p => {
  messages[p.value] = require(`./${p.value}/index`).default
})

const i18n = new VueI18n({
  locale: UtilsHelper.getStorage('locale', configSetting.locale),
  silentTranslationWarn: true,
  messages
})
export default i18n
