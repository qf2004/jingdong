<template>
  <div class="box">
    <div class="title">{{typenames[type]}}</div>
    <Books :type="type"/>  
  </div>
</template>

<script>
import axios from "axios";
import Books from "./Books";

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
  components:{
    Books
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

</style>