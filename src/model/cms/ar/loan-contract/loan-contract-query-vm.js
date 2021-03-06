/*
 * @Author: 武彩平
 * @Date: 2018-06-25 13:22:14
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-27 15:22:13
 * 借阅查询
 */
import ModelBase from '../../../../base-helper/model-base'
import RestfulLoanContract from '../../../../api/restful/cms/ar/loan-contract/restful-loan-contract'
import Property from '../../../property'
import QueryTable from '../../../query-table'
import TableColumn from '../../../table-column'
import { ConstFormType } from '../../../const-name'

/**
 *借阅查询VM
 *
 * @export
 * @class LoanContractQueryVM
 * @extends {ModelBase}
 */
export default class LoanContractQueryVM extends ModelBase {
  constructor() {
    super(function() {
      return new RestfulLoanContract()
    })
    // 跳转新增修改
    this.dialogSaveVM = '/ar/loan-contract-save'
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
    // #region lastReceiveUserName 档案状态
    this.archivesStatus = new Property({
      name: 'archivesStatus'
    })
    // #endregion lastReceiveUserNo 状态
    // #region lastReceiveUserName 借阅人
    this.lastLoanUserName = new Property({
      name: 'lastLoanUserName'
    })
    // #endregion lastReceiveUserNo 借阅人
    // #region lastReceiveUserName 借阅时间
    this.lastLoanDate = new Property({
      name: 'lastLoanDate',
      type: ConstFormType.DATE
    })
    // #endregion lastReceiveUserNo 借阅时间
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
          title: window.vm.$t('lastLoanUserName'),
          align: 'center',
          field: 'lastLoanUserName'
        }),
        new TableColumn({
          title: window.vm.$t('lastLoanDate'),
          align: 'center',
          field: 'lastLoanDate'
        }),
        new TableColumn({
          title: window.vm.$t('lastPlanReturnDate'),
          align: 'center',
          field: 'lastPlanReturnDate'
        }),
        new TableColumn({
          title: window.vm.$t('lastLoanTime'),
          align: 'center',
          field: 'lastLoanTime'
        })
      ]
    })
    // #endregion queryTable
  }
}
