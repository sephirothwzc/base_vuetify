/*
 * @Author: 吴占超
 * @Date: 2018-06-22 11:50:53
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-22 15:13:29
 * 合同大类查询
 */
import Property from '../../../property'
import ModelBase from '../../../../base-helper/model-base'
import RestfulLargeContractType from '../../../../api/restful/cms/pr/large-contract-type/restful-large-contract-type'
import { ConstFormType } from '../../../const-name'
import SelAttribute from '../../../attribute/sel-attribute'
import QueryTable from '../../../query-table'

/**
 * 合同大类查询
 *
 * @export
 * @class LargeContractTypeQueryVM
 * @extends {ModelBase}
 */
export default class LargeContractTypeQueryVM extends ModelBase {
  constructor() {
    super(function() {
      return new RestfulLargeContractType()
    })
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
    // #region shortName 简码
    this.shortName = new Property({
      name: 'shortName'
    })
    // #endregion shortName 简码
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
    // #region queryTable
    this.queryTable = new QueryTable({
      headers: [
        {
          text: window.vm.$t('ctTypeCode'),
          value: 'ctTypeCode'
        }, {
          text: window.vm.$t('ctTypeName'),
          value: 'ctTypeName'
        }, {
          text: window.vm.$t('shortName'),
          value: 'shortName'
        }, {
          text: window.vm.$t('enableFlag'),
          value: 'enableFlag'
        }
      ]
    })
    // #endregion queryTable
  }
}
