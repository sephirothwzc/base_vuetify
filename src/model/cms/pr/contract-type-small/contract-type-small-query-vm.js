/*
 * @Author: 武彩平
 * @Date: 2018-06-22 10:34:46
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-28 13:35:56
 * 合同小类查询
 */

import ModelBase from '../../../../base-helper/model-base'
import RestfulContractTypeSmall from '../../../../api/restful/cms/pr/contract-type-small/restful-contract-type-small'
import Property from '../../../property'
import { ConstFormType } from '../../../const-name'
import SelAttribute from '../../../attribute/sel-attribute'
import QueryTable from '../../../query-table'
import getSingleton from '../../../../design-pattern/singleton'
import RestfulContractTypeLarge from '../../../../api/restful/cms/pr/contract-type-large/restful-contract-type-large'
import TableColumn from '../../../table-column'

/**
 * 合同大类工厂
 */
const contractTypeLargeServices = getSingleton(function() {
  return new RestfulContractTypeLarge()
})

/**
 * 合同小类查询VM
 *
 * @export
 * @class ContractTypeSmallQueryVM
 * @extends {ModelBase}
 */
export default class ContractTypeSmallQueryVM extends ModelBase {
  constructor() {
    super(function() {
      return new RestfulContractTypeSmall()
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
        itemText: 'ctTypeCode',
        itemValue: 'ctTypeName'
      })
    })
    ctLargeType.SelAttribute.GetAsync = async function(val) {
      ctLargeType.SelAttribute.Loading = true
      ctProDepartment.SelAttribute.Items = await contractTypeLargeServices().get(
        { ctTypeName: val }
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
      key: 'ctTypeId',
      headers: [
        new TableColumn({
          title: window.vm.$t('ctTypeCode'),
          align: 'center',
          field: 'ctTypeCode'
        }),
        new TableColumn({
          title: window.vm.$t('ctTypeName'),
          align: 'center',
          field: 'ctTypeName'
        }),
        new TableColumn({
          title: window.vm.$t('ctLargeType'),
          align: 'center',
          field: 'ctLargeType'
        }),
        new TableColumn({
          title: window.vm.$t('ctProDepartment'),
          align: 'center',
          field: 'ctProDepartment'
        }),
        new TableColumn({
          title: window.vm.$t('enableFlag'),
          align: 'center',
          field: 'enableFlag'
        }),
        new TableColumn({
          title: window.vm.$t('memo'),
          align: 'center',
          field: 'memo'
        })
      ]
    })
    // #endregion queryTable
    // #endgion 对象属性初始化
  }
}
