/*
 * @Author: 吴占超
 * @Date: 2018-06-06 09:44:43
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-13 21:39:39
 * 部门主数据 restfull
 */

import Mock from 'mockjs'
// import SysDepartment from '../restful/sys-department'

/**
 * @deprecated 获取下拉列表用部门主数据 head包含公司id
 */
Mock.mock(/sysdepartment\/select\/[^]/, 'get', param => {
  let data = [
    {
      id: param.url,
      departmentName: `事业一部${param.url}`,
      departmentCode: '00001'
    }
  ]
  return data
})
