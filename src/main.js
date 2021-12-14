/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Zhu
 * @Date: 2021-12-14 13:55:28
 * @LastEditors: Zhu
 * @LastEditTime: 2021-12-14 17:26:58
 */
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
// 引入element UI库
import ElementPlus from 'element-plus'
import { Axios } from 'axios'
app.config.globalProperties.$axios = Axios;

import 'element-plus/dist/index.css'
import './assets/index.css'


app.use(ElementPlus)
app.mount('#app')