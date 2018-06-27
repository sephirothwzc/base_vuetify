/*
 * @Author: 武彩平
 * @Date: 2018-06-26 13:22:14
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-26 14:24:30
 * 收件查询
 */
import ModelBase from '../../../../base-helper/model-base'
import RestfulReceiveContract from '../../../../api/restful/cms/ar/receive-contract/restful-receive-contract'
import Property from '../../../property'
import QueryTable from '../../../query-table'
import TableColumn from '../../../table-column'

/**
 *收件查询VM
 *
 * @export
 * @class ReceiveContractQueryVM
 * @extends {ModelBase}
 */
export default class ReceiveContractQueryVM extends ModelBase {
  constructor() {
    super(function() {
      return new RestfulReceiveContract()
    })
    // #region ctCode 合同编码
    this.ctCode = new Property({
      name: 'ctCode'
    })
    // #endregion ctCode 合同编码
    // #region ctName 合同名称
    this.ctName = new Property({
      name: 'ctName'
    })
    // #endregion ctName 合同名称
    // #region lastReceiveUserName 收件操作人
    this.lastReceiveUserName = new Property({
      name: 'lastReceiveUserName'
    })
    // #endregion lastReceiveUserNo 收件操作人
    // #region memo 备注
    this.memo = new Property({
      name: 'memo'
    })
    // #endregion memo 备注
    // #region queryTable
    this.queryTable = new QueryTable({
      key: 'ctId',
      headers: [
        new TableColumn({
          title: window.vm.$t('ctCode'),
          align: 'center',
          field: 'ctCode'
        }),
        new TableColumn({
          title: window.vm.$t('ctName'),
          align: 'center',
          field: 'ctName'
        }),
        new TableColumn({
          title: window.vm.$t('versionNo'),
          align: 'center',
          field: 'versionNo'
        }),
        new TableColumn({
          title: window.vm.$t('archivesStatus'),
          align: 'center',
          field: 'archivesStatus'
        }),
        new TableColumn({
          title: window.vm.$t('lastReceiveUserName'),
          align: 'center',
          field: 'lastReceiveUserName'
        }),
        new TableColumn({
          title: window.vm.$t('createDate'),
          align: 'center',
          field: 'createDate'
        }),
        new TableColumn({
          title: window.vm.$t('memo'),
          align: 'center',
          field: 'memo'
        })
      ]
    })
    // #endregion queryTable
  }
}
