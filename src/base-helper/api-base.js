/*
 * @Author: 吴占超
 * @Date: 2018-06-11 15:21:07
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-21 17:03:29
 * api 请求父类 CRUD
 */

import axios from 'axios'
/**
 * 超级请求父类
 *
 * @export
 * @class ApiBase
 */
export default class ApiBase {
  /**
   * 构造函数
   * @param {String} restfulClass Restful Api controller name
   * @memberof ApiBase
   */
  constructor(restfulClass) {
    this.restfulClass = restfulClass
  }
  /**
   * 获取webapi类型
   *
   * @memberof ApiBase
   */
  get RestfulClass() {
    return this.restfulClass
  }
  /**
   * 设置webapi类型
   *
   * @memberof ApiBase
   */
  set RestfulClass(clazz) {
    this.restfulClass = clazz
  }
  /**
   * Get请求用于查询
   *
   * @param {Object} urlParam
   * @returns
   * @memberof ApiBase
   */
  get(urlParam) {
    return axios.get(`/${this.restfulClass}`, {
      params: urlParam
    })
  }
  /**
   * 根据主键进行查询
   *
   * @param {String} id
   * @returns
   * @memberof ApiBase
   */
  getById(id) {
    return axios.get(`/${this.restfulClass}/${id}`)
  }
  /**
   * Post请求用于新增
   *
   * @param {Object} dataParam
   * @returns
   * @memberof ApiBase
   */
  post(dataParam) {
    if (!dataParam) {
      throw new Error(`wzc-ApiBase-post:[${this.restfulClass}] dataParam mast not undefined、null！`)
    }
    return axios.post(`/${this.restfulClass}`, dataParam)
  }
  /**
   * Put请求用于修改
   *
   * @param {Object} dataParam
   * @returns
   * @memberof ApiBase
   */
  put(dataParam) {
    if (!dataParam) {
      throw new Error(`wzc-ApiBase-put:[${this.restfulClass}] dataParam mast not undefined、null！`)
    }
    return axios.put(`/${this.restfulClass}`, dataParam)
  }
  /**
   * Delete请求用于删除
   *
   * @param {String} delParam
   * @returns
   * @memberof ApiBase
   */
  delete(delParam) {
    if (!delParam) {
      throw new Error(`wzc-ApiBase-delete:[${this.restfulClass}] delParam mast [array] or [string] or [object json]！`)
    }
    let url = `/${this.restfulClass}`
    if (delParam instanceof Array) {
      url += `/${delParam.join()}`
    } else if (delParam instanceof String) {
      url += `/${delParam}`
    } else {
      url += `/${JSON.stringify(delParam)}`
    }
    return axios.delete(url)
  }
  /**
   * Delete请求用于删除，参数传递
   *
   * @param {Object} dataParam
   * @returns
   * @memberof ApiBase
   */
  deleteByParam(dataParam) {
    if (!dataParam) {
      throw new Error(`wzc-ApiBase-delete:[${this.restfulClass}] delParam mast [array] or [string] or [object json]！`)
    }
    return axios.delete(`/${this.restfulClass}`, {params: dataParam})
  }
}
