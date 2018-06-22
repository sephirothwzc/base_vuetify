/*
import { axios } from 'axios';
 * @Author: 吴占超
 * @Date: 2018-06-06 09:25:58
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-21 22:47:27
 * 系统部门
 */
import axios from 'axios'

export default class RestfulSysDepartment {
  /**
   * 获取部门数据，用于下拉，支持模糊查询
   */
  getSysDepartmentSelect(textVal) {
    return axios.get(`/sysdepartment/select/${textVal}`)
  }
  getDemo(textVal) {
    return axios.get(`/sysdepartment/select/${textVal}aa`)
  }
}
