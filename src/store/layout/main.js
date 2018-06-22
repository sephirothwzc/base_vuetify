/*
 * @Author: 吴占超
 * @Date: 2018-06-01 22:14:47
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-08 11:10:11
 * main store
 */
import {
  PROGRESS_LOADING
} from '../../store/const-name'
import jslinq from 'jslinq'

export default {
  state: {
    progress: false,
    loadingItem: []
  },
  getters: {
    progress(state) {
      return state.progress
    },
    loadingItem(state) {
      return state.loadingItem
    }
  },
  mutations: {
    [PROGRESS_LOADING](state, {
      key,
      loadingState
    }) {
      if (loadingState) {
        // 启用 loading
        state.loadingItem.push(key)
        state.progress = loadingState
      } else {
        // 关闭 loading
        state.loadingItem = jslinq(state.loadingItem).remove(key).toList()
        state.progress = state.loadingItem.length > 0
      }
    }
  },
  actions: {
    [PROGRESS_LOADING](context, {
      key,
      loadingState = true
    }) {
      context.commit(PROGRESS_LOADING, {
        key,
        loadingState
      })
    }
  }
}
