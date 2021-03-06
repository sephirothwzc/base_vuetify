/*
 * @Author: 吴占超
 * @Date: 2018-05-30 15:30:49
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-28 13:25:07
 * 导航数据源
 */
import Main from '../components/layout/Main'

const useRouter = [
  {
    path: '/pr',
    component: Main,
    children: [
      {
        path: 'contract-type-large/add',
        component: () =>
          import('../components/cms/pr/contract-type-large/ContractTypeLargeSave')
      },
      {
        path: 'contract-type-large/update/:id',
        component: () =>
          import('../components/cms/pr/contract-type-large/ContractTypeLargeSave')
      },
      {
        path: 'contract-type-small/add',
        component: () =>
          import('../components/cms/pr/contract-type-small/ContractTypeSmallSave')
      },
      {
        path: 'contract-type-large',
        component: () =>
          import('../components/cms/pr/contract-type-large/ContractTypeLargeQuery')
      },
      {
        path: 'contract-type-small/update/:id',
        component: () =>
          import('../components/cms/pr/contract-type-small/ContractTypeSmallSave')
      },
      {
        path: 'contract-type-small',
        component: () =>
          import('../components/cms/pr/contract-type-small/ContractTypeSmallQuery')
      },
      {
        path: 'term-type/add',
        component: () => import('../components/cms/pr/term-type/TermTypeSave')
      },
      {
        path: 'term-type/update/:id',
        component: () => import('../components/cms/pr/term-type/TermTypeSave')
      },
      {
        path: 'term-type',
        component: () => import('../components/cms/pr/term-type/TermTypeQuery')
      },
      {
        // 合同要素查询
        path: 'element',
        component: () => import('../components/cms/pr/element/ElementQuery')
      }
    ]
  },
  {
    path: '/ar',
    component: Main,
    children: [
      {
        path: 'receive-contract',
        component: () =>
          import('../components/cms/ar/receive-contract/ReceiveContractQuery')
      },
      {
        path: 'receive-contract/add',
        component: () =>
          import('../components/cms/ar/receive-contract/ReceiveContractSave')
      },
      {
        path: 'loan-contract',
        component: () =>
          import('../components/cms/ar/loan-contract/LoanContractQuery')
      },
      {
        path: 'loan-contract/add',
        component: () =>
          import('../components/cms/ar/loan-contract/LoanContractSave')
      },
      {
        path: 'loan-contract/update/:id',
        component: () =>
          import('../components/cms/ar/loan-contract/LoanContractSave')
      },
      {
        path: 'archives-contract/',
        component: () =>
          import('../components/cms/ar/archives-contract/ArchivesContractQuery')
      }
    ]
  }
]

export default useRouter
