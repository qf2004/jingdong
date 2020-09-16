<template>
  <div class="box">
    <div class="title">{{typenames[type]}}</div>
    <ul>
      <li v-for="book in books" :key="book.id" >
        <img :src="'/static/'+book.img" />
        <p style="white-space:nowrap">{{book.name}}</p>
        <p>¥:{{book.price}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  props: ["type"],
  data() {
    return {
      typenames: {
        news: "最新",
        hot: "最热"
      },
      books: []
    };
  },
  created() {
    // 发送请求
    axios({
      url: "/books",
      method: "get",
      params: {
        type: this.type
      }
    }).then(res => {
       this.books = res.data[0].data;
    });
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 170px;
  background-color: pink;
  margin-top: 40px;
  position: relative;
}

.box .title {
  text-align: center;
  height: 30px;
  width: 60px;
  background-color: pink;
  position: absolute;
  left: 0;
  top: -30px;
}

ul {
  padding-top: 10px;
  width: 100%;
  height: 100%;
  overflow: auto;
}

ul li {
  float: left;
  margin-left: 10px;
  width: 110px;
  height: 170px;
  /* border:1px solid black; */
}

img {
  width: 100%;
  height: 100px;
}

p {
  text-align: center;
  height: 30px;
  line-height: 30px;
}
</style>