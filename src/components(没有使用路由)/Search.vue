<template>
  <div class="box">
      <input type="text" />
      <i class="iconfont icon-fangdajing"></i>
  </div>
</template>

<script>

export default {
    name:"Search"
}

</script>

<style scoped>
@import url(../assets/font/iconfont.css);

.box{
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    position: relative;
}

.box input{
    width: 100%;
    height: 80%;
    border-radius: 10px;
    outline: none;
    border:1px solid pink;
}

.box i{
    position: absolute;
    left:10px;
    top:50%;
    transform: translateY(-50%);
}

</style>