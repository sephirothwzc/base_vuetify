/*
 * @Author: 吴占超
 * @Date: 2018-05-30 13:31:59
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-28 17:04:22
 * 配置confirm dialog
 */
import Vue from 'vue'
import Modal from 'vuejs-modal'
import ConfirmDialog from '../../components/dialog/ConfirmDialog'
import MessageDialog from '../../components/dialog/MessageDialog'
import ContractSearch from '../dialog/ContractSearch'
// 如果你想使用默认的模板：
// import confirm from 'vuejs-modal/lib/confirm.vue'

Vue.use(Modal, {
  name: '$overallModal',
  modals: {
    confirm: ConfirmDialog, // 默认的模板
    message: MessageDialog,
    contract: ContractSearch
    // confirm: confirm
  }, // 你的modals，它是个对象
  // modal default style,  the default hava a z-index, it will be increment
  style: {
    zIndex: 1000
  }
})

export default class Dialog {
  /**
   * 合同筛选弹出窗
   *
   * @static
   * @returns
   * @memberof Dialog
   */
  static contractSearch() {
    return window.vm.$overallModal.contract()
  }
  /**
   * 选择确认窗口
   * @param {*} param0
   * @returns Promise
   */
  static confirmShow({
    title,
    content,
    type
  }) {
    let btnCancelDisplay = type === 'YES' ? window.vm.$t('no') : window.vm.$t('cancel')
    let btnSubmitDisplay = type === 'YES' ? window.vm.$t('yes') : window.vm.$t('save')
    // return Promise $modal(vuejs-modal)
    return window.vm.$overallModal.confirm({
      title: title,
      content: content,
      btnSubmitDisplay,
      btnCancelDisplay
    })
  }
  /**
   * 消息弹出
   * @param {*} param1
   */
  static messageShow({
    title,
    content
  }) {
    return window.vm.$overallModal.message({
      title: title,
      content: content,
      btnCancelDisplay: window.vm.$t('yes')
    })
  }
}
