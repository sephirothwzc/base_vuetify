/*
 * @Author: 武彩平
 * @Date:  2018-06-27 18:59:34
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-28 11:49:05
 * 收件
 */
import ModelBase from '../../../../base-helper/model-base'
import RestfulLoanContract from '../../../../api/restful/cms/ar/loan-contract/restful-loan-contract'
import Property from '../../../property'
import TextAttribute from '../../../attribute/text-attribute'
import { ConstFormType } from '../../../const-name'
import SelAttribute from '../../../attribute/sel-attribute'

/**
 *收件
 *
 * @export
 * @class LoanContractSaveVM
 * @extends {ModelBase}
 */
export default class LoanContractSaveVM extends ModelBase {
  constructor() {
    super(function() {
      return new RestfulLoanContract()
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
    // #region lastReceiveUserName 借阅人todo
    this.lastLoanUserName = new Property({
      name: 'lastLoanUserName',
      required: true
    })
    // #endregion lastReceiveUserNo 借阅人
    // #region documentType 文档类型（数据字典）
    let documentType = new Property({
      name: 'documentType',
      type: ConstFormType.SELECTS,
      selAttribute: new SelAttribute({
        items: [
          {
            text: '电子文档',
            value: '11'
          },
          {
            text: '纸质文档',
            value: '22'
          }
        ]
        // itemText: 'lookUpCode',
        // itemValue: 'lookUpValue'
      })
    })
    documentType.SelAttribute.GetAsync = async function(val) {
      documentType.SelAttribute.Loading = true
      // 查询文档类型数据，从数据字典
      // ctProDepartment.SelAttribute.Items = await contractTypeLargeServices().get(
      //   { ctTypeName: val }
      // )
      documentType.SelAttribute.Loading = false
    }
    this.documentType = documentType
    // #endregion documentType 文档类型
    // #region lastPlanReturnDate 预计归还日期
    this.lastPlanReturnDate = new Property({
      name: 'lastPlanReturnDate',
      type: ConstFormType.DATE,
      required: true
    })
    // #endregion lastPlanReturnDate 预计归还日期
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
