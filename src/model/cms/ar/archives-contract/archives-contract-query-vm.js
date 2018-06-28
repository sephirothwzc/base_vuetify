/*
 * @Author: 武彩平
 * @Date: 2018-06-27 15:22:35
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-27 15:37:24
 * 合同大类查询
 */

import ModelBase from '../../../../base-helper/model-base'
import RestfulArchivesContract from '../../../../api/restful/cms/ar/archives-contract/restful-archives-contract'
import Property from '../../../property'
import QueryTable from '../../../query-table'
import TableColumn from '../../../table-column'
import { ConstFormType } from '../../../const-name'

export default class ArchivesContractQueryVM extends ModelBase {
  constructor() {
    super(function() {
      return new RestfulArchivesContract()
    })
    // 跳转新增修改
    this.dialogSaveVM = '/ar/archives-contract-save'
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
    // #region archivesStatus 档案状态
    this.archivesStatus = new Property({
      name: 'archivesStatus'
    })
    // #endregion archivesStatus 状态
    // #region lastArchivesUserName 归档人
    this.lastArchivesUserName = new Property({
      name: 'lastArchivesUserName'
    })
    // #endregion lastArchivesUserName 归档人
    // #region lastLoanDateMin 归档时间
    this.lastLoanDateMin = new Property({
      name: 'lastLoanDateMin',
      type: ConstFormType.DATE
    })
    // #endregion lastLoanDateMin 归档时间
    // #region lastLoanDateMax 归档时间
    this.lastLoanDateMax = new Property({
      name: 'lastLoanDateMax',
      type: ConstFormType.DATE
    })
    // #endregion lastLoanDateMax 归档时间
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
          title: window.vm.$t('lastArchivesUserName'),
          align: 'center',
          field: 'lastArchivesUserName'
        }),
        new TableColumn({
          title: window.vm.$t('lastLoanDate'),
          align: 'center',
          field: 'lastLoanDate'
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
