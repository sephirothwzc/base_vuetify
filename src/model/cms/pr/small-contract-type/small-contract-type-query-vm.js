/*
 * @Author: 武彩平
 * @Date: 2018-06-22 10:34:46
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-23 15:27:20
 * 合同小类查询
 */

import ModelBase from '../../../../base-helper/model-base'
import RestfulSmallContractType from '../../../../api/restful/cms/pr/small-contract-type/restful-small-contract-type'
import Property from '../../../property'
import { ConstFormType } from '../../../const-name'
import SelAttribute from '../../../attribute/sel-attribute'
import QueryTable from '../../../query-table'
import getSingleton from '../../../../design-pattern/singleton'
import RestfulLargeContractType from '../../../../api/restful/cms/pr/large-contract-type/restful-large-contract-type'

/**
 * 合同大类工厂
 */
const largeContractTypeServices = getSingleton(function() {
  return new RestfulLargeContractType()
})

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
    // #region 对象属性初始化
    // #region ctTypeCode 合同类型编码
    this.ctTypeCode = new Property({
      name: 'ctTypeCode'
    })
    // #endregion ctTypeCode 合同类型编码
    // #region ctTypeName 合同类别名称
    this.ctTypeName = new Property({
      name: 'ctTypeName'
    })
    // #endregion ctTypeName 合同名称
    // #region ctContr 合同类别名称
    this.ctTypeName = new Property({
      name: 'ctTypeName'
    })
    // #endregion ctTypeName 合同名称
    // #region ctLargeType 合同大类
    let ctLargeType = new Property({
      name: 'ctLargeType',
      type: ConstFormType.SELECTS,
      selAttribute: new SelAttribute({
        multiple: true,
        cacheItem: true,
        itemText: 'ctLargeType',
        itemValue: 'ctTypeId'
      })
    })
    ctLargeType.SelAttribute.GetAsync = async function(val) {
      ctLargeType.SelAttribute.Loading = true
      ctProDepartment.SelAttribute.Items = await largeContractTypeServices().get(
        val
      )
      ctLargeType.SelAttribute.Loading = false
    }
    this.ctLargeType = ctLargeType
    // #endregion ctLargeType 合同大类
    // #region ctProDepartment  所属机构TODO
    let ctProDepartment = new Property({
      name: 'ctProDepartment',
      type: ConstFormType.SELECTS,
      selAttribute: new SelAttribute({
        multiple: true,
        cacheItem: true,
        itemText: 'ctProDepartment',
        itemValue: 'id'
      })
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
      name: 'memo'
    })
    // #endregion memo 备注
    // #region queryTable
    this.queryTable = new QueryTable({
      headers: [
        {
          text: window.vm.$t('ctTypeCode'),
          value: 'ctTypeCode'
        },
        {
          text: window.vm.$t('ctTypeName'),
          value: 'ctTypeName'
        },
        {
          text: window.vm.$t('ctLargeType'),
          value: 'ctLargeType'
        },
        {
          text: window.vm.$t('ctProDepartment'),
          value: 'ctProDepartment'
        }
      ]
    })
    // #endregion queryTable
    // #endgion 对象属性初始化
  }
}
