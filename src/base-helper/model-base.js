/*
 * @Author: 吴占超
 * @Date: 2018-06-11 16:19:56
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-14 09:19:02
 * model base 集成restful api
 */
import getSingleton from '../design-pattern/singleton'

export default class ModelBase {
  /**
   * Restful api 初始化方法，用于创建单例
   * @param {Function} restfulFn
   */
  constructor(restfulFn) {
    this.restfulFn = getSingleton(restfulFn)
  }

  /**
   * get property
   */
  get RestfulApi() {
    return this.restfulFn()
  }
}
