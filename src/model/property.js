/*
 * @Author: 吴占超
 * @Date: 2018-06-04 17:08:17
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-21 16:25:20
 * property class
 */

import TextAttribute from '../model/attribute/text-attribute'
import {
  ConstFormType
} from '../model/const-name'

export default class Property {
  /**
   * 构造函数
   * @param {*} param
   */
  constructor({
    name,
    type = ConstFormType.TEXT,
    rules,
    /**
     * @deprecated 星标无验证
     */
    required = false,
    readonly = false,
    selAttribute = undefined,
    textAttribute = new TextAttribute({
      counter: 50
    }),
    /**
     * @deprecated 是否主键默认否主键不参与显示
     */
    primary = false,
    /**
     * @deprecated 默认值
     */
    defaultValue = undefined
  }) {
    this.name = name
    this.type = type
    this.rules = rules
    this.required = required
    this.readonly = readonly
    if (type === ConstFormType.SELECTS && selAttribute === undefined) {
      throw new Error('wzc-Property-error: select must have selAttribute.items')
    } else if (type === ConstFormType.SELECTS) {
      this.selAttribute = selAttribute
    }
    this.textAttribute = textAttribute
    this.primary = primary
    this.defaultValue = defaultValue
  }
  /**
   * 属性名对应
   *
   * @readonly
   * @memberof Property
   */
  get Name() {
    return this.name
  }
  /**
   * 类型 常量字符串ConstFormType
   *
   * @readonly
   * @memberof Property
   */
  get Type() {
    return this.type
  }
  /**
   * 校验规则
   *
   * @readonly
   * @memberof Property
   */
  get Rules() {
    return this.rules
  }
  /**
   * 是否显示必填
   *
   * @readonly
   * @memberof Property
   */
  get Required() {
    return this.required
  }
  /**
   * 是否只读
   *
   * @readonly
   * @memberof Property
   */
  get Readonly() {
    return this.readonly
  }
  /**
   * 下拉扩展
   *
   * @readonly
   * @memberof Property
   */
  get SelAttribute() {
    return this.selAttribute
  }
  /**
   * 文本扩展
   *
   * @readonly
   * @memberof Property
   */
  get TextAttribute() {
    return this.TextAttribute
  }
  /**
   * 获取是否主键
   *
   * @readonly
   * @memberof Property
   */
  get Primary() {
    return this.primary
  }
  /**
   * 默认值
   *
   * @readonly
   * @memberof Property
   */
  get DefaultValue() {
    return this.defaultValue
  }
}
