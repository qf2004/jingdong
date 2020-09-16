<template>
  <div id="app">
      <div class="top-box">
        <Search/>
      </div>
      <div class="center-box">
          <Banner/>      
          <My-nav /> 
          <TodoList />
          <Books type="news" />
          <Books type="hot" />
      </div>
      <div class="bottom-box">
         <My-footer/>
      </div>
      <!-- <Loading class="loading" v-if="loading" /> -->
  </div>
</template>

<script>

import Search from "./components/Search";
import Banner from "./components/Banner";
import MyNav from "./components/MyNav";
import Books from "./components/Books";
import MyFooter from "./components/MyFooter";
import Loading from "./components/Loading";
import TodoList from "./components/TodoList";

export default {
  name:"App",
  data:function(){
    return {
      msg:"hello ，大家好！",
      Loading:false
    }
  },
  components:{
    Search,Banner,MyNav,Books,MyFooter,Loading,TodoList
  }
}

</script>

<style>

*{
    margin: 0;
    padding:0;
}

ul{
      list-style: none;

}

.top-box{
  position: fixed;
  left:0;
  top:0;
  z-index: 100;
  width: 100%;
}

.center-box{
  margin-top: 45px;
  margin-bottom:45px; 
}

.bottom-box{
  position: fixed;
  bottom: 0;
  left:0;
  width:100%;
}

.Loading{
  z-index:1000;
}
</style>
