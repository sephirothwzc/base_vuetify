/*
 * @Author: 吴占超
 * @Date: 2018-05-30 15:30:49
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-27 08:55:40
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
        path: 'contract-type-large-save',
        name: 'ContractTypeLargeSave',
        component: () =>
          import('../components/cms/pr/contract-type-large/ContractTypeLargeSave')
      },
      {
        path: 'contract-type-large-save/:id',
        name: 'ContractTypeLargePut',
        component: () =>
          import('../components/cms/pr/contract-type-large/ContractTypeLargeSave')
      },
      {
        path: 'contract-type-small-save',
        name: 'ContractTypeSmallSave',
        component: () =>
          import('../components/cms/pr/contract-type-small/ContractTypeSmallSave')
      },
      {
        path: 'contract-type-large-query',
        name: 'ContractTypeLargeQuery',
        component: () =>
          import('../components/cms/pr/contract-type-large/ContractTypeLargeQuery')
      },
      {
        path: 'contract-type-small-save/:id',
        name: 'ContractTypeSmallPut',
        component: () =>
          import('../components/cms/pr/contract-type-small/ContractTypeSmallSave')
      },
      {
        path: 'contract-type-small-query/',
        name: 'ContractTypeSmallQuery',
        component: () =>
          import('../components/cms/pr/contract-type-small/ContractTypeSmallQuery')
      },
      {
        path: 'term-type-save/',
        name: 'TermTypeSave',
        component: () => import('../components/cms/pr/term-type/TermTypeSave')
      },
      {
        path: 'term-type-save/:id',
        name: 'TermTypePut',
        component: () => import('../components/cms/pr/term-type/TermTypeSave')
      },
      {
        path: 'term-type-query/',
        name: 'TermTypeQuery',
        component: () => import('../components/cms/pr/term-type/TermTypeQuery')
      }
    ]
  },
  {
    path: '/ar',
    name: 'AR',
    component: Main,
    children: [
      {
        path: 'receive-contract-query/',
        name: 'ReceiveContractQuery',
        component: () => import('../components/cms/ar/receive-contract/ReceiveContractQuery')
      },
      {
        path: 'loan-contract-query/',
        name: 'LoanContractQuery',
        component: () => import('../components/cms/ar/loan-contract/LoanContractQuery')
      }
    ]
  }
]

export default useRouter
