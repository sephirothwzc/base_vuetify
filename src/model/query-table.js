/*
 * @Author: 吴占超
 * @Date: 2018-06-22 13:53:17
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-23 18:04:27
 * 查询列表对象
 */

/**
 * 列表属性对象
 *
 * @export
 * @class QueryTable
 */
export default class QueryTable {
  constructor({
    headers = [],
    key = 'id'
  }) {
    this.headers = headers
    this.key = key
  }
  /**
   * 表头
   *
   * @readonly
   * @memberof QueryTable
   */
  get Headers() {
    return this.headers
  }
  /**
   * 主键
   *
   * @readonly
   * @memberof QueryTable
   */
  get Key() {
    return this.key
  }
}
