/*
 * @Author: 吴占超
 * @Date: 2018-06-21 10:31:57
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-28 13:31:29
 * 合同大类 save
 */
import Property from '../../../property'
import RestfulContractTypeLarge from '../../../../api/restful/cms/pr/contract-type-large/restful-contract-type-large'
import ModelBase from '../../../../base-helper/model-base'
import { ConstFormType, ConstValidate } from '../../../const-name'
import TextAttribute from '../../../attribute/text-attribute'
import SelAttribute from '../../../attribute/sel-attribute'

/**
 * 合同大类VC
 *
 * @export
 * @class LargeContractTypeSaveVC
 * @extends {ModelBase}
 */
export default class ContractTypeLargeSaveVM extends ModelBase {
  constructor() {
    super(function() {
      return new RestfulContractTypeLarge()
    })
    // #region 对象属性初始化

    // #region ctTypeId 合同类型主键ID
    this.ctTypeId = new Property({
      name: 'ctTypeId',
      primary: true
    })
    // #endregion ctTypeId 合同类型主键ID
    // #region ctTypeCode 合同类型编码
    this.ctTypeCode = new Property({
      name: 'ctTypeCode',
      rules: [
        v => !!v || `${window.vm.$t('ctTypeCode')}-${window.vm.$t(ConstValidate.REQUIRED)}`,
        v => (v && v.length <= 20) || `${window.vm.$t('ctTypeCode')}-${window.vm.$t(ConstValidate.MAXLENGTH)}`
      ],
      required: true,
      textAttribute: new TextAttribute({
        counter: 20
      })
    })
    // #endregion ctTypeCode 合同类型编码
    // #region ctTypeName 合同类别名称
    this.ctTypeName = new Property({
      name: 'ctTypeName',
      rules: [
        v =>
          !!v ||
          `${window.vm.$t('ctTypeName')}-${window.vm.$t(
            ConstValidate.REQUIRED
          )}`,
        v =>
          (v && v.length <= 50) ||
          `${window.vm.$t('ctTypeName')}-${window.vm.$t(
            ConstValidate.MAXLENGTH
          )}`
      ],
      required: true
    })
    // #endregion ctTypeName 合同名称
    // #region shortName 简码
    this.shortName = new Property({
      name: 'shortName',
      rules: [
        v =>
          (v && v.length <= 50) ||
          `${window.vm.$t('shortName')}-${window.vm.$t(
            ConstValidate.MAXLENGTH
          )}`
      ]
    })
    // #endregion shortName 简码
    // #region enableFlag 是否有效
    this.enableFlag = new Property({
      name: 'enableFlag',
      type: ConstFormType.SELECTS,
      defaultValue: '1',
      selAttribute: new SelAttribute({
        items: [{
          value: '1',
          text: window.vm.$t('true')
        }, {
          value: '0',
          text: window.vm.$t('false')
        }]
      })
    })
    // #endregion enableFlag 是否有效
    // #region memo 备注
    this.memo = new Property({
      name: 'memo',
      textAttribute: new TextAttribute({
        counter: 200,
        textarea: true
      })
    })
    // #endregion memo 备注

    // #endregion 对象属性初始化
  }
}
