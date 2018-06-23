/*
 * @Author: 武彩平
 * @Date: 2018-06-22 10:04:48
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-22 16:14:34
 * 合同小类
 */
import Mock from 'mockjs'

// 新增
Mock.mock('/SmallContractType', 'post', param => {
  console.log('新增：' + JSON.stringify(param))
  return param
})

// 修改
Mock.mock('/SmallContractType', 'put', param => {
  console.log('修改：' + JSON.stringify(param))
  return param
})

/**
 * 获取合同小类列表数据
 */
const getSmallContractType = function() {
  return [{
    ctTypeId: 'temp1',
    ctTypeCode: 'bianma',
    ctTypeName: 'mingcheng',
    shortName: 'jianma',
    enableFlag: 0,
    memo: '77777777777777'
  }]
}

// 查询
Mock.mock('/SmallContractType', 'get', param => {
  console.log('查询：' + JSON.stringify(param))
  return getSmallContractType()
})
