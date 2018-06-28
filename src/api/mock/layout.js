/*
 * @Author: 吴占超
 * @Date: 2018-06-01 23:35:22
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-28 12:14:43
 * mock layout
 */

import Mock from 'mockjs'

/**
 * @deprecated 获取导航，title不允许使用了改成$t(name)
 */
Mock.mock('/layout/navigation', 'get', param => {
  let data = [
    {
      id: 1,
      title: '数据字典',
      patch: '/data-dictionary',
      icon: 'perm_data_setting',
      children: [
        {
          id: 2,
          pid: 1,
          title: '字典管理',
          patch: 'dictionary-manager',
          icon: 'assignment'
        },
        {
          id: 3,
          pid: 1,
          title: '新增字典',
          patch: 'dictionary-save',
          icon: 'picture_in_picture'
        }
      ]
    },
    {
      id: 4,
      title: '系统用户',
      patch: '/sys-user',
      icon: 'assignment_ind',
      children: [
        {
          id: 5,
          pid: 4,
          title: '用户管理',
          patch: 'user-manager',
          icon: 'perm_contact_calendar'
        },
        {
          id: 6,
          pid: 4,
          title: '新增用户',
          patch: 'user-save',
          icon: 'perm_identity'
        }
      ]
    },
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
          name: 'ContractTypeSmallQuery',
          patch: 'contract-type-small-query',
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
          patch: 'term-type-query',
          icon: 'perm_identity'
        },
        {
          id: 13,
          pid: 7,
          patch: 'element-query',
          icon: 'chrome_reader_mode'
        }
      ]
    },
    {
      id: 13,
      name: 'AR',
      patch: '/ar',
      icon: 'assignment_ind',
      children: [
        {
          id: 14,
          pid: 13,
          title: '收件查询',
          patch: 'receive-contract-query',
          icon: 'perm_identity'
        },
        {
          id: 15,
          pid: 13,
          title: '借阅查询',
          patch: 'loan-contract-query',
          icon: 'perm_identity'
        }
      ]
    }
  ]
  return data
})
