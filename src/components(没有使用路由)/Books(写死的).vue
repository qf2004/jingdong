<template>
  <div class="box">
      <div class="title">{{type}}</div>
      <ul>
          <li>
              <img src="../assets/img/img1.jpg" >
              <p>三国演义</p>
              <p>¥:85.50</p>
          </li>
          <li>
              <img src="../assets/img/img2.jpg" >
              <p>红楼梦</p>
              <p>¥:55.50</p>
          </li>
          <li>
              <img src="../assets/img/img3.jpg" >
              <p>西游记</p>
              <p>¥:75.10</p>
          </li>
      </ul>
  </div>
</template>

<script>

export default {
    name:"Search",
    props:["type"],
    data(){
        return{
            books:[]
        }
    },
    created(){
        // 发送请求
    }
}

</script>

<style scoped>
.box{
    width: 100%;
    height: 170px;
    background-color: pink;
    margin-top: 40px; 
    position: relative;
}

.box .title{
    text-align: center;
    height: 30px;
    width: 60px;
    background-color: pink;
    position: absolute;
    left:0;
    top:-30px;
}

ul{
    padding-top:10px; 
    width: 100%;
    height: 100%;
    overflow: auto;
}

ul li{
    float: left;
    margin-left: 10px;
    width: 110px;
    height: 170px;
    /* border:1px solid black; */
}

img{
    width:100%;
    height: 100px;
}

p{
    text-align: center;
    height: 30px;
    line-height: 30px;
}


</style>