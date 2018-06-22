/*
 * @Author: 吴占超
 * @Date: 2018-06-01 23:20:00
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-07 15:10:32
 * layout 布局使用 webapi
 */

import axios from 'axios'

export default class RestfulLayout {
  /**
   * 获取导航数据
   */
  getNavigation() {
    return axios.get('/layout/navigation')
  }
}
