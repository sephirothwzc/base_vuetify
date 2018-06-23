/*
 * @Author: 武彩平
 * @Date: 2018-06-22 10:34:46
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-22 12:22:03
 * 合同小类查询
 */

import ModelBase from '../../../../base-helper/model-base'
import RestfulSmallContractType from '../../../../api/restful/cms/pr/small-contract-type/restful-small-contract-type'

/**
 * 合同小类查询VM
 *
 * @export
 * @class SmallContractTypeQueryVM
 * @extends {ModelBase}
 */
export default class SmallContractTypeQueryVM extends ModelBase {
  constructor() {
    super(function() {
      return new RestfulSmallContractType()
    })
  }
}

// #region 对象属性初始化

// #endgion 对象属性初始化
