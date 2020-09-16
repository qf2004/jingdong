<template>
  <div class="box">
    <div class="top-box">
        <!-- 分类 -->
       <Typelist @myClick="changeType" />
       <!-- 书籍列表 -->
       <Books :type="typeVal"/>
    </div>
    <div class="bottom-box">
      <My-footer />
    </div>
  </div>
</template>

<script>
import Typelist from "../components/TypeList";
import MyFooter from "../components/MyFooter";
import Books from "../components/Books";

export default {
  name: "BookType",
  data(){
    return {
      typeVal:"001"
    }
  },
  components:{
      Typelist,MyFooter,Books
  },
  methods:{
    changeType(params_type){
      this.typeVal = params_type;
    }
  },
  // // 组件内部守卫
  // beforeRouteEnter(to, from, next){
  //   console.log(" 组件内部守卫：BookType:beforeRouteEnter");
  //   next(true);
  // }
};

</script>

<style scoped>

.top-box{
  margin-top: 0.35rem;
    width: 100%;
}

.bottom-box{
  position: fixed;
  bottom: 0;
  left:0;
  width:100%;
}

</style>