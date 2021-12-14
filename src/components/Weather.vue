<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: Zhu
 * @Date: 2021-12-14 14:15:14
 * @LastEditors: Zhu
 * @LastEditTime: 2021-12-14 17:29:48
-->
<template>
  <div class="bg-gray-800 h-32">
    <!-- <el-button disabled>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>-->
    <div class="swiper-container text-white h-32">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// 引入Swiper
import Swiper from 'swiper'

// 初始化swiper
const initSwiper = () => {
  console.log(11);
  let swiper = new Swiper('.swiper-container', {
    autoplay: false,//可选选项，自动滑动
  })
}

// console.log(this,'eee')
onMounted (() => {
			// 这里就能打印出来1啦
		initSwiper()
    console.log(this);
})
</script>

<style lang="scss" scoped>
@import "../../node_modules/swiper/swiper-bundle.css";
</style>