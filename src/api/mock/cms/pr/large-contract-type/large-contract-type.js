/*
 * @Author: 吴占超
 * @Date: 2018-06-21 16:38:53
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-22 16:13:44
 * 合同大类
 */
import Mock from 'mockjs'

Mock.mock('/LargeContractType', 'post', param => {
  console.log('新增：' + JSON.stringify(param))
  return param
})

// Mock.mock(/large-contract-type\/[^]/, 'get', param => {
//   console.log('id查询：' + JSON.stringify(param))
//   return {
//     ctTypeId: param.url.replace('/large-contract-type/', ''),
//     ctTypeCode: 'bianma',
//     ctTypeName: 'mingcheng',
//     shortName: 'jianma',
//     enableFlag: 0,
//     memo: '77777777777777'
//   }
// })

Mock.mock('/LargeContractType', 'put', param => {
  console.log('修改：' + JSON.stringify(param))
  return param
})

/**
 * 获取合同大类列表用于下拉筛选
 */
const getLargeContractType = function() {
  return [{
    ctTypeId: 'temp1',
    ctTypeCode: 'bianma',
    ctTypeName: 'mingcheng',
    shortName: 'jianma',
    enableFlag: 0,
    memo: '77777777777777'
  }]
}

Mock.mock('/LargeContractType', 'get', param => {
  console.log('查询：' + JSON.stringify(param))
  return getLargeContractType()
})
