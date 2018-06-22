/*
 * @Author: 吴占超
 * @Date: 2018-06-05 16:07:23
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-07 23:42:23
 * select attribute
 */

export default class SelAttribute {
  constructor({
    items,
    multiple = false,
    cacheItem = false,
    itemText = 'text',
    itemValue = 'value',
    loading = false,
    getAsync
  }) {
    this.items = items
    this.multiple = multiple
    this.itemText = itemText
    this.itemValue = itemValue
    this.cacheItem = cacheItem
    this.getAsync = getAsync
    this.loading = loading
  }
  /**
   * 获取数据源
   */
  get Items() {
    return this.items
  }
  /**
   * 异步设置数据源接口，子组件不支持
   */
  set Items(data) {
    this.items = data
  }
  /**
   * 是否多选
   */
  get Multiple() {
    return this.multiple
  }
  /**
   * 是否启用起步
   */
  get CacheItem() {
    return this.cacheItem
  }
  /**
   * 显示绑定
   */
  get ItemText() {
    return this.itemText
  }
  /**
   * value绑定
   */
  get ItemValue() {
    return this.itemValue
  }
  /**
   * 异步加载方法
   */
  get GetAsync() {
    return this.getAsync
  }
  /**
   * 设置加载方法
   */
  set GetAsync(getAsync) {
    this.getAsync = getAsync
  }
  /**
   * 显示加载
   */
  get Loading() {
    return this.loading
  }
  /**
   * 关闭加载
   */
  set Loading(value) {
    this.loading = value
  }
}
