/*
 * @Description: 
 * @file: tools 常用的工具函数
 * @Autor: Zhu
 * @Date: 2021-12-14 16:30:24
 * @LastEditors: Zhu
 * @LastEditTime: 2021-12-14 17:03:17
 */



/**
 *  @return {*} WeekLastDay 返回本周最后一天的时间
 */
export function showWeekLastDay () {
  let Nowdate = new Date()
  let WeekFirstDay = new Date(Nowdate - (Nowdate.getDay() - 1) * 86400000)
  let WeekLastDay = new Date((WeekFirstDay / 1000 + 6 * 86400) * 1000)
  return WeekLastDay
}

/**
 *  @param {String} time - 日期字符串，如'2020-10-1','2020,10,1','2020/10/1'
 *  @returns {Number} 返回值为时间毫秒值
 */
export function timeToTimestamp (time) {
  let date = new Date(time)
  let timestamp = date.getTime()
  return timestamp
}

/**
 *  @param  {string} date 起始日期
 *  @param  {number} day 向后的天数
 *  @return {string} 返回想要得到的日期
 */
export function convertDate (date, day) {
  let tempDate = new Date(date)
  tempDate.setDate(tempDate.getDate() + day)
  let Y = tempDate.getFullYear()
  let M = tempDate.getMonth() + 1 < 10 ? '0' + (tempDate.getMonth() + 1) : tempDate.getMonth() + 1
  let D = tempDate.getDate() < 10 ? '0' + (tempDate.getDate()) : tempDate.getDate()
  let result = Y + "-" + M + "-" + D
  return result
}