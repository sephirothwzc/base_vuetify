/**
 * 时间辅助类
 */
export default class DateHelper {
  /**
   * 时间戳格式化yyyy-MM-dd hh:mm:ss
   * @param {*} timestamp
   * @param {*} fmt
   */
  static formatTimeStamp(timestamp, fmt) {
    if (timestamp.length === 10) {
      timestamp = timestamp * 1000
    }
    let date = new Date(parseInt(timestamp))
    return DateHelper.formatDate(date, fmt)
  }
  /**
   * 日期格式化
   * @param {*} date
   * @param {*} fmt
   */
  static formatDate(date, fmt) {
    function padLeftZero(str) {
      return ('00' + str).substr(str.length)
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
      }
    }
    return fmt
  }
}
