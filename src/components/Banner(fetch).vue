<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(img,idx) in bannerImgs" :key=idx >
        <img :src="'/static/'+img" />
      </div>
    </div>    
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>

import Swiper from "swiper"

export default {  
  name: "Banner",
  data(){
    return {
      bannerImgs:[]
    }
  },
  created(){
    fetch('http://localhost:3000/bannerImgs',{
      method:"get"
    })
    .then((res)=>{
      console.log("res",res);
      return res.json();
    })
    .then(data=>{
      console.log("data",data);
      this.bannerImgs = data;
      this.$nextTick(()=>{
        new Swiper(".swiper-container", {
          loop: true, // 循环模式选项
          // autoplay:true,
          autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: true
          },
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          },

          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        });
      });
    })
  }
};
</script>

<style scoped>
@import url(../assets/css/swiper.css);
.swiper-container {
  width: 100%;
  height: 200px;
}

img {
  width: 100%;
  height: 100%;
}
</style>