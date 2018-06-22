/*
 * @Author: 吴占超
 * @Date: 2018-05-29 09:17:04
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-08 11:10:00
 * 弹出窗口 store
 */
import {
  SWITCH_DIALOG
} from '../../store/const-name.js'

export default {
  state: {
    alertDialog: false,
    title: '系统提示',
    message: '消息提醒！'
  },
  getters: {
    dialog(state) {
      return !state.alertDialog
    }
  },
  mutations: {
    [SWITCH_DIALOG](state, {
      title,
      message
    }) {
      state.alertDialog = !state.alertDialog
      if (title) {
        state.title = title
      }
      if (message) {
        state.message = message
      }
    }
  },
  actions: {
    [SWITCH_DIALOG](context, {
      title,
      message
    }) {
      context.commit(SWITCH_DIALOG, {
        title,
        message
      })
    }
  }
}
