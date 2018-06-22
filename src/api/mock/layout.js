/*
 * @Author: 吴占超
 * @Date: 2018-06-01 23:35:22
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-21 20:31:03
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
      name: 'DataDictionary',
      title: '数据字典',
      patch: '/data-dictionary',
      icon: 'perm_data_setting',
      children: [
        {
          id: 2,
          pid: 1,
          title: '字典管理',
          name: 'DataDictionaryManager',
          patch: 'dictionary-manager',
          icon: 'assignment'
        },
        {
          id: 3,
          pid: 1,
          title: '新增字典',
          name: 'DataDictionarySave',
          patch: 'dictionary-save',
          icon: 'picture_in_picture'
        }
      ]
    },
    {
      id: 4,
      name: 'SysUser',
      title: '系统用户',
      patch: '/sys-user',
      icon: 'assignment_ind',
      children: [
        {
          id: 5,
          pid: 4,
          title: '用户管理',
          name: 'UserManager',
          patch: 'user-manager',
          icon: 'perm_contact_calendar'
        },
        {
          id: 6,
          pid: 4,
          title: '新增用户',
          name: 'UserSave',
          patch: 'user-save',
          icon: 'perm_identity'
        }
      ]
    },
    {
      id: 7,
      name: 'PR',
      patch: '/pr',
      icon: 'assignment_ind',
      children: [
        {
          id: 8,
          pid: 7,
          name: 'LargeContractTypeSave',
          patch: 'large-contract-type-save',
          icon: 'perm_identity'
        },
        {
          id: 9,
          pid: 7,
          name: 'SmallContractTypeSave',
          patch: 'small-contract-type-save',
          icon: 'perm_identity'
        }
      ]
    }
  ]
  return data
})
