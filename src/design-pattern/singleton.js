/*
 * @Author: 吴占超
 * @Date: 2018-06-07 21:42:26
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-08 09:18:47
 * 单例工厂对象
 */

/**
 * 单例工厂
 * @param {Function} fn
 */
const getSingleton = function (fn) {
  let result
  return function () {
    return result || (result = fn.apply(this, arguments))
  }
}

export default getSingleton
