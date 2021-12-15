/*
 * @Description: api请求
 * @Version: 1.0
 * @Autor: Zhu
 * @Date: 2021-12-15 16:19:03
 * @LastEditors: Zhu
 * @LastEditTime: 2021-12-15 16:31:41
 */

import axios from "axios"
import { WEATHER_URL, WEATHER_APPID, WEATHER_APP_SECRET } from '../config'


export function getWeather (data) {
  return axios.get(`${WEATHER_URL}/free/week`, {
    params: {
      appid: WEATHER_APPID,
      appsecret: WEATHER_APP_SECRET,
      ...data
    }
  })
}