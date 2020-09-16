<template>
  <ul>
      <li @click="fn('001')" >武侠</li>
      <li @click="fn('002')">玄幻</li>
      <li @click="fn('003')">言情</li>
    </ul>
</template>

<script>
export default {
  name:"TypeList",
  data(){
    return{}
  },
  methods:{
    fn(params_type){
      this.$emit("myClick",params_type);
    }
  }

}
</script>

<style scoped>

ul{
    width: 100%;
    height: 0.35rem;
    border: 1px solid black;
}

li{
  float: left;
  width: 20%;
  height: 0.35rem;
  border:1px solid blue;
  background-color: pink;
}




</style>