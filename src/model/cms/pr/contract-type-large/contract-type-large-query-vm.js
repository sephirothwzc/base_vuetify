/*
 * @Author: 吴占超
 * @Date: 2018-06-22 11:50:53
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-27 09:55:11
 * 合同大类查询
 */
import Property from '../../../property'
import ModelBase from '../../../../base-helper/model-base'
import RestfulContractTypeLarge from '../../../../api/restful/cms/pr/contract-type-large/restful-contract-type-large'
import { ConstFormType } from '../../../const-name'
import QueryTable from '../../../query-table'
import TableColumn from '../../../table-column'
import SelAttribute from '../../../attribute/sel-attribute'
// import LargeContractTypeSave from '../../../../components/cms/pr/large-contract-type/LargeContractTypeSave'

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
      return new RestfulContractTypeLarge()
    })
    // 跳转新增修改
    this.dialogSaveVM = '/pr/contract-type-large-save'
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
      key: 'ctTypeId',
      headers: [
        new TableColumn({
          title: window.vm.$t('ctTypeCode'),
          align: 'center',
          field: 'ctTypeCode'
        }), new TableColumn({
          title: window.vm.$t('ctTypeName'),
          align: 'center',
          field: 'ctTypeName'
        }), new TableColumn({
          title: window.vm.$t('shortName'),
          align: 'center',
          field: 'shortName'
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
