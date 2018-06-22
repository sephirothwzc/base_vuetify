/*
 * @Author: 武彩平
 * @Date: 2018-06-21 15:31:57
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-21 23:44:19
 * 合同小类 save
 */
import Property from '../../../property'
import RestfulSmallContractType from '../../../../api/restful/cms/pr/small-contract-type/restful-small-contract-type'
// import RestfulLargeContractType from '../../../../api/restful/cms/pr/small-contract-type/restful-small-contract-type'
import ModelBase from '../../../../base-helper/model-base'
import { ConstFormType, ConstValidate } from '../../../const-name'
import TextAttribute from '../../../attribute/text-attribute'
import SelAttribute from '../../../attribute/sel-attribute'
import RestfulLargeContractType from '../../../../api/restful/cms/pr/large-contract-type/restful-large-contract-type'
import getSingleton from '../../../../design-pattern/singleton'
/**
 * 部门工厂
 */
const largeContractTypeServices = getSingleton(function() {
  return new RestfulLargeContractType()
})

/**
 * 合同小类VC
 *
 * @export
 * @class SmallContctTypeSaveVC
 * @extends
 */
export default class SmallContractTypeSaveVC extends ModelBase {
  constructor() {
    super(function() {
      return new RestfulSmallContractType()
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
        itemText: 'ctLargeType',
        itemValue: 'ctTypeId'
      }),
      required: true
    })
    ctLargeType.SelAttribute.GetAsync = async function(val) {
      ctLargeType.SelAttribute.Loading = true
      ctProDepartment.SelAttribute.Items = await largeContractTypeServices().get(val)
      ctLargeType.SelAttribute.Loading = false
    }
    this.ctLargeType = ctLargeType
    // #endregion ctLargeType 合同大类
    // #region ctProDepartment  所属机构
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
      // ctProDepartment.SelAttribute.Items = await sysDepartmentServices().getSysDepartmentSelect(val)
      ctProDepartment.SelAttribute.Loading = false
    }
    this.ctProDepartment = ctProDepartment
    // #endregion ctProDepartment 所属机构
    // #region enableFlag 是否有效
    this.enableFlag = new Property({
      name: 'enableFlag'
    })
    // #endregion enableFlag 是否有效
    // #endregion 对象属性初始化
  }
}
