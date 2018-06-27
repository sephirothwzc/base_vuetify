/*
 * @Author: 武彩平
 * @Date: 2018-06-21 15:31:57
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-27 09:52:18
 * 合同小类 save
 */
import Property from '../../../property'
import RestfulContractTypeSmall from '../../../../api/restful/cms/pr/contract-type-small/restful-contract-type-small'
import ModelBase from '../../../../base-helper/model-base'
import { ConstFormType, ConstValidate } from '../../../const-name'
import TextAttribute from '../../../attribute/text-attribute'
import SelAttribute from '../../../attribute/sel-attribute'
import RestfulContractTypeLarge from '../../../../api/restful/cms/pr/contract-type-large/restful-contract-type-large'
import getSingleton from '../../../../design-pattern/singleton'
/**
 * 合同大类工厂
 */
const contractTypeLargeServices = getSingleton(function() {
  return new RestfulContractTypeLarge()
})

/**
 * 合同小类VM
 *
 * @export
 * @class SmallContctTypeSaveVM
 * @extends
 */
export default class ContractTypeSmallSaveVM extends ModelBase {
  constructor() {
    super(function() {
      return new RestfulContractTypeSmall()
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
        v =>
          !!v ||
          `${window.vm.$t('ctTypeCode')}-${window.vm.$t(
            ConstValidate.REQUIRED
          )}`,
        v =>
          (v && v.length <= 20) ||
          `${window.vm.$t('ctTypeCode')}-${window.vm.$t(
            ConstValidate.MAXLENGTH
          )}`
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
    // #region ctLargeType 合同大类
    let ctLargeType = new Property({
      name: 'ctLargeType',
      rules: [
        v =>
          (!!v && v.length > 0) ||
          `${window.vm.$t('ctLargeType')}-${window.vm.$t(
            ConstValidate.REQUIRED
          )}`
      ],
      type: ConstFormType.SELECTS,
      selAttribute: new SelAttribute({
        multiple: true,
        cacheItem: true,
        itemText: 'ctTypeCode',
        itemValue: 'ctTypeName'
      }),
      required: true
    })
    ctLargeType.SelAttribute.GetAsync = async function(val) {
      ctLargeType.SelAttribute.Loading = true
      let pageParam = {}
      pageParam.ctTypeName = val
      let param3 = {}
      let arr1 = []
      param3 = await contractTypeLargeServices().get(pageParam)
      for (let i = 0; i < param3.list.length; i++) {
        arr1.push({
          text: param3.list[i].ctTypeCode,
          value: param3.list[[i].ctTypeName]
        })
      }
      ctLargeType.SelAttribute.Items = arr1

      ctLargeType.SelAttribute.Loading = false
    }
    this.ctLargeType = ctLargeType
    // #endregion ctLargeType 合同大类
    // #region ctProDepartment  所属机构TODO
    let ctProDepartment = new Property({
      name: 'ctProDepartment',
      rules: [
        v =>
          (!!v && v.length > 0) ||
          `${window.vm.$t('ctProDepartment')}-${window.vm.$t(
            ConstValidate.REQUIRED
          )}`
      ],
      type: ConstFormType.SELECTS,
      selAttribute: new SelAttribute({
        multiple: true,
        cacheItem: true,
        itemText: 'ctProDepartment',
        itemValue: 'id'
      }),
      required: true
    })
    ctProDepartment.SelAttribute.GetAsync = async function(val) {
      ctProDepartment.SelAttribute.Loading = true
      // todo ctProDepartment.SelAttribute.Items = await sysDepartmentServices().getSysDepartmentSelect(val)
      ctProDepartment.SelAttribute.Loading = false
    }
    this.ctProDepartment = ctProDepartment
    // #endregion ctProDepartment 所属机构
    // #region enableFlag 是否有效
    this.enableFlag = new Property({
      name: 'enableFlag',
      type: ConstFormType.SELECTS,
      defaultValue: 1,
      selAttribute: new SelAttribute({
        items: [
          {
            value: 1,
            text: window.vm.$t('true')
          },
          {
            value: 0,
            text: window.vm.$t('false')
          }
        ]
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
