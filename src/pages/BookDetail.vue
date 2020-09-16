<template>
  <div class="box">
    <p @click="back" > &lt; </p>
    <div class="content-box">
      <img :src="'/static/'+book.img"/>
      <p>书名：{{book.name}}</p>
      <p>作者：{{book.author}}</p>
      <p>价格：¥{{book.price}}</p>
      <input type="button" value="加入购物车" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "BookDetail",
  props:["bookId"],
  data(){
    return {
      book:{}
    }
  },
  created(){
    
    // $router: vueRouter对象
    // console.log("this.$router",this.$router);
    // // $route :当前匹配到的路由对象
    // console.log("this.$route",this.$route);
    // 接收书籍的编号
    // console.log(this.$route.params.id);
    // 发送请求

    // console.log(this.$route.params.bookId);
    // console.log(this.$route.query.bookId);
    console.log(this.bookId);
    axios({
      url:"/books",
      params:{
        // "id":this.$route.query.bookId
        "id":this.bookId
      }
    })
    .then(res=>this.book=res.data[0])
  },
  methods:{
    back(){
      this.$router.go(-1);
    }
  }
};

</script>

<style scoped>

.box{
  width: 100%;
}

.content-box{
   width: 100%;
}

img{
  width:100%;
}

</style>