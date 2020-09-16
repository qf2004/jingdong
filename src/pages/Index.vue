<template>
  <div id="app">
      <div class="top-box">
        <!-- <Search/> -->
        <p>{{$store.state.a.count}}</p>
        <input type="button" value="测试" @click="fn" />
      </div>
      <div class="center-box">
          <Banner/>      
          <My-nav /> 
          <Indexbooks type="news" />
          <Indexbooks type="hot" />
      </div>
      <div class="bottom-box">
         <My-footer/>
      </div>
  </div>
</template>

<script>

import Search from "../components/Search";
import Banner from "../components/Banner";
import MyNav from "../components/MyNav";
import Indexbooks from "../components/IndexBooks";
import MyFooter from "../components/MyFooter";
import Loading from "../components/Loading";

export default {
  name:"Index",
  data:function(){
    return {
    }
  },
  components:{
    Search,Banner,MyNav,Indexbooks,MyFooter,Loading
  },
  methods:{
    fn(){
      console.log("fn");
      this.$store.dispatch("a/incCount");
    }
  }
}

</script>

<style>


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

</style>
