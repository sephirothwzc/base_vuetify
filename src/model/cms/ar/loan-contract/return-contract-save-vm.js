/*
 * @Author: 武彩平
 * @Date:  2018-06-27 18:59:34
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-28 13:18:39
 * 收件
 */
import ModelBase from '../../../../base-helper/model-base'
import RestfulReturnContract from '../../../../api/restful/cms/ar/loan-contract/restful-loan-contract'
import Property from '../../../property'
import TextAttribute from '../../../attribute/text-attribute'

/**
 *归还
 *
 * @export
 * @class ReturnContractSaveVM
 * @extends {ModelBase}
 */
export default class ReturnContractSaveVM extends ModelBase {
  constructor() {
    super(function() {
      return new RestfulReturnContract()
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
      textAttribute: new TextAttribute({
        disabled: true
      })
    })
    // #endregion ctCode 合同编码
    // #region ctName 合同名称
    this.ctName = new Property({
      name: 'ctName',
      textAttribute: new TextAttribute({
        disabled: true
      })
    })
    // #endregion ctName 合同名称
    // #region versionNo 版本号
    this.versionNo = new Property({
      name: 'versionNo',
      textAttribute: new TextAttribute({
        disabled: true
      })
    })
    // #endregion versionNo 版本号
    // #region lastReceiveUserName 归还人
    this.lastReturnUserName = new Property({
      name: 'lastReturnUserName',
      required: true
    })
    // #endregion lastReceiveUserNo 归还人
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
