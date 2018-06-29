/*
 * @Author: 吴占超
 * @Date: 2018-06-05 13:16:31
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-28 13:49:57
 * 文本框扩展属性
 */
import jslinq from 'jslinq'

/**
 * mask 标识符常量
 */
const constMask = {
  /**
   * 任何数字
   */
  A_DIGIT: '#',
  /**
   * 任何大写字母
   */
  A_CAPITAL_LETTER: 'A',
  /**
   * 任何小写字母
   */
  A_SMALL_LETTER: 'a',
  /**
   * 任何数字和大写字母
   */
  A_CAPITAL_CHARACTER: 'N',
  /**
   * 任何数字和小写字母
   */
  A_SMALL_CHARACTER: 'n',
  /**
   * 特殊字符或者空格
   */
  A_SYMBOL_SPACE: 'X',
  /**
   * #### - #### - #### - ####
   */
  CREDIT_CARD: 'credit-card',
  /**
   * ##/##/#### ##:##
   */
  DATE_WITH_TIME: 'date-with-time',
  /**
   * (###) ### - ####
   */
  PHONE: 'phone',
  /**
   * ##:##
   */
  TIME: 'time'
}

export default class TextAttribute {
  /**
   * 构造函数
   * @param {Boolean} box 边框
   * @param {Boolean} clearable 消除按钮
   * @param {Number} counter 长度显示
   * @param {Boolean} disabled 输入框禁用
   * @param {String} mask TextAttribute.CONST_MASK 自定义字符掩码应用于输入框
   * @param {String} prefix 前缀
   */
  constructor({
    box = false,
    clearable = false,
    counter = 50,
    mask = undefined,
    prefix = undefined,
    textarea = undefined
  }) {
    this.box = !box ? false : box
    this.clearable = !clearable ? false : clearable
    this.counter = counter
    if (!!mask && !jslinq(Object.getOwnPropertyNames(constMask)).where(p => constMask[p] === mask).firstOrDefault()) {
      throw new Error('wzc-TextAttribute-mask: mask must TextAttribute.CONST_MASK property!')
    }
    this.mask = mask
    this.prefix = prefix
    this.textarea = textarea
  }
  /**
   * mask 属性常量
   */
  static get CONST_MASK() {
    return constMask
  }
  /**
   * 边框
   */
  get Box() {
    return this.box
  }
  /**
   * 清空按钮
   */
  get Clearable() {
    return this.clearable
  }
  /**
   * 输入长度标记数量
   */
  get Counter() {
    return this.counter
  }
  /**
   * 显示格式
   */
  get Mask() {
    return this.mask
  }
  /**
   * 前缀
   */
  get Prefix() {
    return this.prefix
  }
  /**
   * 是否多行文本
   *
   * @readonly
   * @memberof TextAttribute
   */
  get Textarea() {
    return this.textarea
  }
}
