<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: Zhu
 * @Date: 2021-12-14 14:15:14
 * @LastEditors: Zhu
 * @LastEditTime: 2021-12-14 22:05:26
-->
<template>
  <div class="h-80">
    <span class="text-gray-800 text-3xl py-6 font-bold text-center block">Overview</span>
    <div class="swiper-container text-white py-8">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div
            class="bg-indigo-600 flex items-center justify-center flex-col w-20 h-32 rounded-3xl px-4 py-4"
          >
            <span class="text-base">Mon</span>
            <span class="text-3xl font-bold">12</span>
            <span class="text-base">doc</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div
            class="bg-indigo-600 flex items-center justify-center flex-col w-20 h-32 rounded-3xl px-4 py-4"
          >
            <span class="text-base">Mon</span>
            <span class="text-3xl font-bold">12</span>
            <span class="text-base">doc</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div
            class="bg-indigo-600 flex items-center justify-center flex-col w-20 h-32 rounded-3xl px-4 py-4"
          >
            <span class="text-base">Mon</span>
            <span class="text-3xl font-bold">12</span>
            <span class="text-base">doc</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div
            class="bg-indigo-600 flex items-center justify-center flex-col w-20 h-32 rounded-3xl px-4 py-4"
          >
            <span class="text-base">Mon</span>
            <span class="text-3xl font-bold">12</span>
            <span class="text-base">doc</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div
            class="bg-indigo-600 flex items-center justify-center flex-col w-20 h-32 rounded-3xl px-4 py-4"
          >
            <span class="text-base">Mon</span>
            <span class="text-3xl font-bold">12</span>
            <span class="text-base">doc</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div
            class="bg-indigo-600 flex items-center justify-center flex-col w-20 h-32 rounded-3xl px-4 py-4"
          >
            <span class="text-base">Mon</span>
            <span class="text-3xl font-bold">12</span>
            <span class="text-base">doc</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div
            class="bg-indigo-600 flex items-center justify-center flex-col w-20 h-32 rounded-3xl px-4 py-4"
          >
            <span class="text-base">Mon</span>
            <span class="text-3xl font-bold">12</span>
            <span class="text-base">doc</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div
            class="bg-indigo-600 flex items-center justify-center flex-col w-20 h-32 rounded-3xl px-4 py-4"
          >
            <span class="text-base">Mon</span>
            <span class="text-3xl font-bold">12</span>
            <span class="text-base">doc</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center flex-col">
      <span class="text-xl text-gray-800 font-bold">Sunny</span>
      <div
        class="text-8xl py-8 font-black font-mono relative bg-clip-text text-transparent bg-gradient-to-tr from-green-300 to-blue-400"
      >
        <span>36</span>
        <span class="text-4xl absolute text-gray-900 -right-5 top-5">°</span>
      </div>
      <div>山东省淄博市张店区</div>
    </div>
    <div></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// 引入Swiper
import Swiper from 'swiper'
onMounted(() => {
  // 这里就能打印出来1啦
  initSwiper()
})
// 初始化swiper
const initSwiper = () => {
  new Swiper('.swiper-container', {
    autoplay: true,//可选选项，自动滑动
    slidesPerView: 7,
  })
}

</script>

<style lang="scss" scoped>
@import "../../node_modules/swiper/swiper-bundle.css";
</style>