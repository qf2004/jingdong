<template>
  <div>
      用户名：<input type="text" v-model="username" /><br/>
      密码：<input type="text" v-model="userpass" /><br/>
      <input type="button" value="登录" @click="loginCheck" />
      <div v-if="isShow" >{{errMsg}}</div>
  </div>
</template>

<script>
export default {
    name:"Login",
    data(){
        return {
            username:"",
            userpass:"",
            errMsg:"登录失败",
            isShow:false
        }
    },
    methods:{
        loginCheck(){
            // 发送axios请求
            if(this.username=="韩磊" && this.userpass=="123"){
                // 登录成功！
                localStorage.setItem("username",this.username);
                // 跳转(从哪儿来，到哪里去)            
                console.log("this.$route.params.toPath",this.$route.params.toPath);    
                this.$router.push(this.$route.params.toPath);
            }else{
                this.isShow = true;
            }
        }
    }
}
</script>

<style>

</style>