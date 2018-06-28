/*
 * @Author: 吴占超
 * @Date: 2018-06-28 10:31:47
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-28 13:36:05
 * 合同要素查询
 */
import Property from '../../../property'
import ModelBase from '../../../../base-helper/model-base'
import { ConstFormType } from '../../../const-name'
import QueryTable from '../../../query-table'
import TableColumn from '../../../table-column'
import SelAttribute from '../../../attribute/sel-attribute'
import RestfulElement from '../../../../api/restful/cms/pr/element/element'

/**
 * 合同要素查询
 *
 * @export
 * @class ElementQueryVM
 * @extends {ModelBase}
 */
export default class ElementQueryVM extends ModelBase {
  constructor() {
    super(function() {
      return new RestfulElement()
    })
    // #region elementCode 编码
    this.elementCode = new Property({
      name: 'elementCode'
    })
    // #endregion elementCode 编码
    // #region elementName 名称
    this.elementName = new Property({
      name: 'elementName'
    })
    // #endregion elementName 名称
    // #region elementLabel 标签
    this.elementLabel = new Property({
      name: 'elementLabel'
    })
    // #endregion elementLabel 标签
    // #region enableFlag 是否有效
    this.enableFlag = new Property({
      name: 'enableFlag',
      type: ConstFormType.SELECTS,
      selAttribute: new SelAttribute({
        items: [
          {
            value: '1',
            text: window.vm.$t('true')
          },
          {
            value: '0',
            text: window.vm.$t('false')
          }
        ]
      })
    })
    // #endregion enableFlag 是否有效
    // #region queryTable
    this.queryTable = new QueryTable({
      key: 'elementId',
      headers: [
        new TableColumn({
          title: window.vm.$t('elementCode'),
          align: 'center',
          field: 'elementCode'
        }), new TableColumn({
          title: window.vm.$t('elementName'),
          align: 'center',
          field: 'elementName'
        }), new TableColumn({
          title: window.vm.$t('elementLabel'),
          align: 'center',
          field: 'elementLabel'
        }), new TableColumn({
          title: window.vm.$t('enableFlag'),
          align: 'center',
          field: 'enableFlag'
        })
      ]
    })
    // #endregion queryTable
  }
}
