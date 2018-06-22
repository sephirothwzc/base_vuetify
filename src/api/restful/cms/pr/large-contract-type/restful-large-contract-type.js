/*
 * @Author: 吴占超
 * @Date: 2018-06-21 10:50:03
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-21 23:32:43
 */
import ApiBase from '../../../../../base-helper/api-base'
/**
 * 合同大类
 *
 * @export
 * @class RestfulLargeContractType
 * @extends {ApiBase}
 */
export default class RestfulLargeContractType extends ApiBase {
  constructor() {
    super('/large-contract-type/')
  }
}
