/*
 * @Author: 吴占超
 * @Date: 2018-06-01 23:35:22
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-28 13:30:12
 * mock layout
 */

import Mock from 'mockjs'

/**
 * @deprecated 获取导航，title不允许使用了改成$t(name)
 */
Mock.mock('/layout/navigation', 'get', param => {
  let data = [
    {
      id: 7,
      patch: 'pr',
      icon: 'assignment_ind',
      children: [
        // {
        //   id: 8,
        //   pid: 7,
        //   name: 'ContractTypeLargeSave',
        //   patch: 'contract-type-large-save',
        //   icon: 'perm_identity'
        // },
        {
          id: 10,
          pid: 7,
          patch: 'contract-type-large',
          icon: 'perm_identity'
        },
        // {
        //   id: 9,
        //   pid: 7,
        //   name: 'ContractTypeSmallSave',
        //   patch: 'contract-type-small-save',
        //   icon: 'perm_identity'
        // },
        {
          id: 10,
          pid: 7,
          patch: 'contract-type-small',
          icon: 'perm_identity'
        },
        // {
        //   id: 11,
        //   pid: 7,
        //   name: 'TermTypeSave',
        //   patch: 'term-type-save',
        //   icon: 'perm_identity'
        // },
        {
          id: 12,
          pid: 7,
          patch: 'term-type',
          icon: 'perm_identity'
        },
        {
          id: 13,
          pid: 7,
          patch: 'element',
          icon: 'chrome_reader_mode'
        }
      ]
    },
    {
      id: 13,
      patch: 'ar',
      icon: 'assignment_ind',
      children: [
        {
          id: 14,
          pid: 13,
          title: '收件查询',
          patch: 'receive-contract',
          icon: 'perm_identity'
        },
        {
          id: 15,
          pid: 13,
          title: '借阅查询',
          patch: 'loan-contract',
          icon: 'perm_identity'
        },
        {
          id: 16,
          pid: 13,
          title: '档案归档',
          name: 'ArchivesContractQuery',
          patch: 'archives-contract-query',
          icon: 'perm_identity'
        }
      ]
    }
  ]
  return data
})
