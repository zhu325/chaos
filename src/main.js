/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Zhu
 * @Date: 2021-12-14 13:55:28
 * @LastEditors: Zhu
 * @LastEditTime: 2021-12-14 14:08:05
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './assets/index.css'
const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')