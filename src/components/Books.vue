<template>
  <div class="box">
    <ul>
      <li v-for="book in books" :key="book.id" >
        <router-link :to="'/BookDetail/'+book.id"><img :src="'/static/'+book.img" /></router-link>
        <!-- <router-link :to="{name:'BookDetail',params:{bookId:book.id}}"><img :src="'/static/'+book.img" /></router-link> -->
        <!-- <router-link :to="{path:'/BookDetail',query:{bookId:book.id}}"><img :src="'/static/'+book.img" /></router-link> -->
        <p style="white-space:nowrap">{{book.name}}</p>
        <p>¥:{{book.price}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import constains from "../utils/constains";

export default {
  name: "Books",
  props: ["type"],
  data() {
    return {
      typenames: {
        news: "最新",
        hot: "最热",
        "001":"武侠",
        "002":"玄幻",
        "003":"言情"
      },
      books: []
    };
  },
  methods:{
    getBooks(){
      // axios({
      //     baseURL:constains.baseURL,
      //     url: "/books",
      //     method: "get",
      //     params: {
      //       type: this.type
      //     }
      //   }).then(res => {
      //     this.books = res.data[0].data;
      //   });

       axios({
          url: "/books",
          params: {
            type: this.type
          }
        }).then(res => {
          this.books = res.data[0].data;
        });

        // http://10.33.22.12:5000/api/books


        // 接口文档
        // url: /books
        // 请求方式：get
        //请求参数：无
        // 返回类型
        // [{},{}]



    }
  },
  watch:{
    type:function(){
       // 发送请求
      this.getBooks();
    }
  },
  created() {
    console.log("books:created");
    // 发送请求
    this.getBooks();
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  /* height: 170px; */
  background-color: pink;
  /* margin-top: 40px; */
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