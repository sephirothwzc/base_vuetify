/*
 * @Author: 吴占超 组装模块并导出 store 的地方
 * @Date: 2018-04-26 13:30:38
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-08 11:10:38
 */
import Vue from 'vue'
import Vuex from 'Vuex'
import AlertDialog from '../store/layout/alert-dialog'
import Main from '../store/layout/main'
import Router from '../store/layout/router'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AlertDialog,
    Main,
    Router
  }
})
