/*
 * @Author: 吴占超
 * @Date: 2018-06-04 13:16:14
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-08 11:10:19
 * 面包屑导航store
 */
import { ROUTER_REFASH } from '../../store/const-name'

export default {
  state: {
    matched: [],
    path: '',
    params: null
  },
  getters: {
    matched(state) {
      return state.matched
    },
    path(state) {
      return state.path
    },
    params(state) {
      return state.params
    }
  },
  mutations: {
    [ROUTER_REFASH](state, {
      path = '',
      matched = [],
      params = null
    }) {
      state.path = path
      state.matched = path
      state.params = path
    }
  },
  actions: {
    [ROUTER_REFASH](context, {
      path = '',
      matched = [],
      params = null
    }) {
      context.commit(ROUTER_REFASH, {
        path,
        matched,
        params
      })
    }
  }
}
