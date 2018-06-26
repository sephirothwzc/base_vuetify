/*
 * @Author: 武彩平
 * @Date: 2018-06-23 11:47:02
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-23 15:20:44
 */

import ModelBase from '../../../../base-helper/model-base'
import RestfulTermType from '../../../../api/restful/cms/pr/term-type/restful-term-type'
import Property from '../../../property'
import SelAttribute from '../../../attribute/sel-attribute'
import { ConstFormType } from '../../../const-name'
import QueryTable from '../../../query-table'

/**
 *条款类型查询VM
 *
 * @export
 * @class TermTypeQueryVM
 * @extends {ModelBase}
 */
export default class TermTypeQueryVM extends ModelBase {
  constructor() {
    super(function() {
      return new RestfulTermType()
    })
    // #region 对象属性初始化
    // #region termTypeCode 条款类型编号
    this.termTypeCode = new Property({
      name: 'termTypeCode'
    })
    // #endregion termTypeCode 条款类型编号
    // #region termTypeName 条款类型名称
    this.termTypeName = new Property({
      name: 'termTypeName'
    })
    // #endregion 条款类型名称
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
          text: window.vm.$t('termTypeCode'),
          value: 'termTypeCode'
        },
        {
          text: window.vm.$t('termTypeName'),
          value: 'termTypeName'
        },
        {
          text: window.vm.$t('enableFlag'),
          value: 'enableFlag'
        },
        {
          text: window.vm.$t('memo'),
          value: 'memo'
        }
      ]
    })
    // #endregion queryTable
    // #endregion 对象属性初始化
  }
}
