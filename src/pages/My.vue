<template>
  <div>
      <h1>以下是我的信息</h1>
      <p>{{username}}</p>
  </div>
</template>

<script>
export default {
    name:"My",
    data(){
        return {   
            username:""         
        }
    },
    created(){
        this.username = localStorage.getItem("username");
    }
}
</script>

<style>

</style>