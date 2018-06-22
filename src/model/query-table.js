/*
 * @Author: 吴占超
 * @Date: 2018-06-22 13:53:17
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-22 14:35:43
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
    search = '',
    totalItems = 0,
    desserts = [],
    loading = true,
    pagination = {},
    headers = []
  }) {
    this.search = search
    this.totalItems = totalItems
    this.desserts = desserts
    this.loading = loading
    this.pagination = pagination
    this.headers = headers
  }
  /**
   * 用于筛选结果的搜索模型
   *
   * @readonly
   * @memberof QueryTable
   */
  get Search() {
    return this.search
  }
  /**
   * 手动设置项目的总数，就可以禁用内置排序和分页，与分页属性一起使用，以启用服务端排序和分页。
   *
   * @readonly
   * @memberof QueryTable
   */
  get TotalItems() {
    return this.totalItems
  }
  /**
   * 数据源
   *
   * @readonly
   * @memberof QueryTable
   */
  get Desserts() {
    return this.desserts
  }
  /**
   * 显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何material色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值颜色（由色彩属性设置——如果它被组件支持的话）还可以是原色。
   *
   * @readonly
   * @memberof QueryTable
   */
  get Loading() {
    return this.loading
  }
  /**
   * 用于控制数据表外部的分页和排序，也可以用来设置默认的排序列。
   *
   * @readonly
   * @memberof QueryTable
   */
  get Pagination() {
    return this.pagination
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
}
