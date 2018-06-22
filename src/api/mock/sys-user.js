/*
 * @Author: 吴占超
 * @Date: 2018-06-19 16:10:07
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-19 16:40:00
 */

import Mock from 'mockjs'

Mock.mock('/sysuser', 'post', (param) => {
  return param
})
