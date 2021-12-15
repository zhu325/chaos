<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: Zhu
 * @Date: 2021-12-14 14:15:14
 * @LastEditors: Zhu
 * @LastEditTime: 2021-12-15 22:07:00
-->
<template>
  <div class="h-full overflow-x-hidden max-w-xl mx-6 md:mx-auto lg:mx-auto">
    <span class="text-gray-800 text-3xl py-6 font-bold text-center block">Overview</span>
    <div class="swiper-container py-8">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item,index) in weatherInfo.data"
          :key="index"
          @click="onWeekHeader(index)"
        >
          <div
            class="flex items-center justify-center flex-col w-16 h-32 rounded-3xl px-4 py-4 border-4 border-gray-300 border-opacity-70 cursor-pointer transition duration-300 ease text-gray-700"
            :class="currentSort == index ? 'bg-gradient-to-b from-blue-500 via-indigo-600 to-indigo-800 border-0 text-gray-50' : ''"
          >
            <span class="text-base">{{ weekData[dayjs(item.date).day()] }}</span>
            <span class="text-3xl font-bold my-1">{{ item.date.substr(8) }}</span>
            <span class="text-base">Zhu</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center flex-col">
      <span class="text-xl text-gray-800 font-bold">Sunny</span>
      <div
        class="text-8xl py-8 font-black font-mono relative bg-clip-text text-transparent bg-gradient-to-tr from-gray-800 via-indigo-900 to-indigo-900"
      >
        <span>{{ weatherInfo.data[currentSort].tem_day }}</span>
        <span class="text-4xl absolute text-gray-900 -right-5 top-5">°</span>
      </div>
      <div
        class="text-5xl py-8 font-black font-mono relative bg-clip-text text-transparent bg-gradient-to-tr from-gray-800 via-indigo-900 to-indigo-900"
      >
        <span>{{ weatherInfo.data[currentSort].tem_night }}</span>
        <span class="text-4xl absolute text-gray-900 -right-5 top-5">°</span>
      </div>
      <span class="text-xl text-gray-800 font-bold">Sunny</span>
      <div>{{ weatherInfo.city }}</div>
      <span>{{ weatherInfo.data[currentSort].wea }}</span>
      <span>{{ weatherInfo.data[currentSort].win }}</span>
      <span>{{ weatherInfo.data[currentSort].win_speed }}</span>
    </div>
    <div></div>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, onMounted, watch } from 'vue'
// 引入Swiper
import Swiper from 'swiper'
import dayjs from 'dayjs'
import { getWeather } from '../api/api'
onMounted(() => {
  // 这里就能打印出来1啦
  console.log(dayjs().day())
  initSwiper()
  api()
  // 初始化dayjs
  dayjs().format()
  console.log(weekSub.value, '33')
})
const weekSub = ref(dayjs().day())
const weekData = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
const weatherInfo = ref({
  weekStatus: false
})
const weekStatus = ref(true)
const currentSort = ref(0)
// 初始化swiper
const initSwiper = () => {
  new Swiper('.swiper-container', {
    autoplay: true,//可选选项，自动滑动
    slidesPerView: 7,
    spaceBetween: 40,
    breakpoints: {
      //当宽度大于等于320
      320: {
        slidesPerView: 4.5,
        spaceBetween: 20
      },
      //当宽度大于等于480
      480: {
        slidesPerView: 5.5,
        spaceBetween: 20
      },
      //当宽度大于等于640
      640: {
        slidesPerView: 6.5,
        spaceBetween: 30
      }
    }
  })
}

const onWeekHeader = (index) => {
  console.log(index)
  currentSort.value = index

}

const api = () => {
  getWeather().then(({ data: res }) => {
    weatherInfo.value = res
  }).catch((err) => {
    console.log(err)
  })
}

// return { weatherInfo }


</script>

<style lang="scss" scoped>
@import "../../node_modules/swiper/swiper-bundle.css";
</style>