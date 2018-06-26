/*
 * @Author: 武彩平
 * @Date: 2018-06-23 10:46:21
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-23 15:40:53
 */
import ApiBase from '../../../../../base-helper/api-base'

/**
 *条款类型
 *
 * @export
 * @class RestfulTermType
 * @extends {ApiBase}
 */
export default class RestfulTermType extends ApiBase {
  constructor() {
    super('/TermType/')
  }
}
