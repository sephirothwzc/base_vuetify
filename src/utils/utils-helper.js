/*
 * @Author: 吴占超
 * @Date: 2018-04-26 09:39:34
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-26 20:56:56
 * @document vue全局帮助类[localStorage]
 */

import Vue from 'vue'
/**
 * @description string
 */

/**
 * 全局帮助类
 *
 * @export
 * @class UtilHelper
 */
export default class UtilsHelper {
  /**
   *
   *
   * @static
   * @param {any} key
   * @param {any} value
   * @memberof UtilsHelper
   */
  static setStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  /**
   *
   *
   * @static
   * @param {any} key
   * @param {any} defaultValue
   * @returns
   * @memberof UtilsHelper
   */
  static getStorage(key, defaultValue) {
    let value = window.localStorage.getItem(key)
    if (value === null || value === undefined || value === '') {
      return defaultValue
    }
    return JSON.parse(value)
  }
  /**
   * 清空
   *
   * @static
   * @memberof UtilsHelper
   */
  static clear() {
    window.localStorage.clear()
  }
}
/**
 * 后退指令
 */
Vue.directive('back', (el, binding) => {
  el.onclick = () => window.history.go(-1)
})
