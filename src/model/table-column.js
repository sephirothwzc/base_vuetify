/*
 * @Author: 吴占超
 * @Date: 2018-06-23 14:36:15
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-26 16:02:42
 * 表格列对象
 */

export default class TableColumn {
  /**
   * Creates an instance of TableColumn.
   * @param {*} {
   *      title, 标题
   *      field, 数据源
   *      align = 'center', 对齐 'left' | 'center' | 'right'
   *      sortable = 'true', 是否允许排序
   *      width 宽度
   *    }
   * @memberof TableColumn
   */
  constructor({ title, field, align = 'center', sortable = 'false', width }) {
    this.title = title
    this.field = field
    this.align = align
    this.sortable = sortable
    this.width = width
  }
  /**
   * 标题
   *
   * @readonly
   * @memberof TableColumn
   */
  get Title() {
    return this.title
  }
  /**
   * 数据源
   *
   * @readonly
   * @memberof TableColumn
   */
  get Field() {
    return this.field
  }
  /**
   * 对齐 'left' | 'center' | 'right'
   *
   * @readonly
   * @memberof TableColumn
   */
  get Align() {
    return this.align
  }
  /**
   * 是否允许排序
   *
   * @readonly
   * @memberof TableColumn
   */
  get Sortable() {
    return this.sortable
  }
}
