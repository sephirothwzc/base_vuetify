/*
 * @Author: 武彩平
 * @Date:  2018-06-27 18:59:34
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-27 21:38:48
 * 收件
 */
import ModelBase from '../../../../base-helper/model-base'
import RestfulReceiveContract from '../../../../api/restful/cms/ar/receive-contract/restful-receive-contract'
import Property from '../../../property'
import TextAttribute from '../../../attribute/text-attribute'

/**
 *收件
 *
 * @export
 * @class ReceiveContractSaveVM
 * @extends {ModelBase}
 */
export default class ReceiveContractSaveVM extends ModelBase {
  constructor() {
    super(function() {
      return new RestfulReceiveContract()
    })
    // #region ctId 主键ID
    this.ctId = new Property({
      name: 'ctId',
      primary: true
    })
    // #endregion ctCode 主键ID
    // #region ctCode 合同编码
    this.ctCode = new Property({
      name: 'ctCode',
      required: true
    })
    // #endregion ctCode 合同编码
    // #region ctName 合同名称
    this.ctName = new Property({
      name: 'ctName'
    })
    // #endregion ctName 合同名称
    // #region versionNo 版本号
    this.versionNo = new Property({
      name: 'versionNo'
    })
    // #endregion versionNo 收件操作人
    // #region memo 备注
    // #region memo 备注
    this.memo = new Property({
      name: 'memo',
      textAttribute: new TextAttribute({
        counter: 200,
        textarea: true
      })
    })
    // #endregion memo 备注
  }
}
