/*
 * @Author: 武彩平
 * @Date: 2018-06-21 16:40:03
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-22 17:53:45
 */
import ApiBase from '../../../../../base-helper/api-base'
/**
 * 合同小类
 *
 * @export
 * @class RestfulSmallContractType
 * @extends {ApiBase}
 */
export default class RestfulSmallContractType extends ApiBase {
  constructor() {
    super('/SmallContractType/')
  }
}
