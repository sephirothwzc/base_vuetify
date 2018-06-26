/*
 * @Author: 吴占超
 * @Date: 2018-05-30 15:30:49
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-26 10:33:01
 * 导航数据源
 */
import Main from '../components/layout/Main'

const useRouter = [
  {
    path: '/data-dictionary',
    name: 'DataDictionary',
    component: Main,
    children: [
      {
        path: 'dictionary-manager',
        name: 'DataDictionaryManager',
        component: () =>
          import('../components/use-modules/data-dictionary/DataDictionaryManager')
      },
      {
        path: 'dictionary-save',
        name: 'DataDictionarySave',
        component: () =>
          import('../components/use-modules/data-dictionary/DataDictionarySave')
      }
    ]
  },
  {
    path: '/sys-user',
    name: 'SysUser',
    component: Main,
    children: [
      {
        path: 'user-manager',
        name: 'UserManager',
        component: () =>
          import('../components/use-modules/sys-user/UserManager')
      },
      {
        path: 'user-save',
        name: 'UserSave',
        component: () => import('../components/use-modules/sys-user/UserSave')
      }
    ]
  },
  {
    path: '/pr',
    name: 'PR',
    component: Main,
    children: [
      {
        path: 'large-contract-type-save',
        name: 'LargeContractTypeSave',
        component: () =>
          import('../components/cms/pr/large-contract-type/LargeContractTypeSave')
      },
      {
        path: 'large-contract-type-save/:id',
        name: 'LargeContractTypePut',
        component: () =>
          import('../components/cms/pr/large-contract-type/LargeContractTypeSave')
      },
      {
        path: 'small-contract-type-save',
        name: 'SmallContractTypeSave',
        component: () =>
          import('../components/cms/pr/small-contract-type/SmallContractTypeSave')
      },
      {
        path: 'large-contract-type-query',
        name: 'LargeContractTypeQuery',
        component: () =>
          import('../components/cms/pr/large-contract-type/LargeContractTypeQuery')
      },
      {
        path: 'small-contract-type-save/:id',
        name: 'SmallContractTypePut',
        component: () =>
          import('../components/cms/pr/small-contract-type/SmallContractTypeSave')
      },
      {
        path: 'small-contract-type-query/',
        name: 'SmallContractTypeQuery',
        component: () =>
          import('../components/cms/pr/small-contract-type/SmallContractTypeQuery')
      },
      {
        path: 'term-type-save/',
        name: 'TermTypeSave',
        component: () =>
          import('../components/cms/pr/term-type/TermTypeSave')
      },
      {
        path: 'term-type-save/:id',
        name: 'TermTypePut',
        component: () =>
          import('../components/cms/pr/term-type/TermTypeSave')
      },
      {
        path: 'term-type-query/',
        name: 'TermTypeQuery',
        component: () =>
          import('../components/cms/pr/term-type/TermTypeQuery')
      }
    ]
  }
]

export default useRouter
